/*!
 * Vuetify v2.1.13
 * Forged by John Leider
 * Released under the MIT License.
 */
! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("vue")) : "function" == typeof define && define.amd ? define(["vue"], e) : "object" == typeof exports ? exports.Vuetify = e(require("vue")) : t.Vuetify = e(t.Vue)
}("undefined" != typeof self ? self : this, function (t) {
    return function (t) {
        var e = {};

        function i(n) {
            if (e[n]) return e[n].exports;
            var s = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
        }
        return i.m = t, i.c = e, i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function (t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var s in t) i.d(n, s, function (e) {
                    return t[e]
                }.bind(null, s));
            return n
        }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "/dist/", i(i.s = 96)
    }([function (e, i) {
        e.exports = t
    }, , function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {
        "use strict";
        i.r(e);
        var n = {};
        i.r(n), i.d(n, "VApp", function () {
            return f
        }), i.d(n, "VAppBar", function () {
            return Et
        }), i.d(n, "VAppBarNavIcon", function () {
            return ue
        }), i.d(n, "VAlert", function () {
            return pe
        }), i.d(n, "VAutocomplete", function () {
            return Ln
        }), i.d(n, "VAvatar", function () {
            return Zi
        }), i.d(n, "VBadge", function () {
            return jn
        }), i.d(n, "VBanner", function () {
            return Fn
        }), i.d(n, "VBottomNavigation", function () {
            return Rn
        }), i.d(n, "VBottomSheet", function () {
            return Jn
        }), i.d(n, "VBreadcrumbs", function () {
            return is
        }), i.d(n, "VBreadcrumbsItem", function () {
            return ts
        }), i.d(n, "VBreadcrumbsDivider", function () {
            return ns
        }), i.d(n, "VBtn", function () {
            return ae
        }), i.d(n, "VBtnToggle", function () {
            return rs
        }), i.d(n, "VCalendar", function () {
            return or
        }), i.d(n, "VCalendarDaily", function () {
            return sr
        }), i.d(n, "VCalendarWeekly", function () {
            return Js
        }), i.d(n, "VCalendarMonthly", function () {
            return Qs
        }), i.d(n, "VCard", function () {
            return lr
        }), i.d(n, "VCardActions", function () {
            return ur
        }), i.d(n, "VCardSubtitle", function () {
            return cr
        }), i.d(n, "VCardText", function () {
            return hr
        }), i.d(n, "VCardTitle", function () {
            return dr
        }), i.d(n, "VCarousel", function () {
            return Sr
        }), i.d(n, "VCarouselItem", function () {
            return Cr
        }), i.d(n, "VCheckbox", function () {
            return Or
        }), i.d(n, "VSimpleCheckbox", function () {
            return Ci
        }), i.d(n, "VChip", function () {
            return qe
        }), i.d(n, "VChipGroup", function () {
            return Er
        }), i.d(n, "VColorPicker", function () {
            return zo
        }), i.d(n, "VColorPickerSwatches", function () {
            return No
        }), i.d(n, "VColorPickerCanvas", function () {
            return po
        }), i.d(n, "VContent", function () {
            return Wo
        }), i.d(n, "VCombobox", function () {
            return Yo
        }), i.d(n, "VCounter", function () {
            return bn
        }), i.d(n, "VData", function () {
            return Uo
        }), i.d(n, "VDataIterator", function () {
            return Jo
        }), i.d(n, "VDataFooter", function () {
            return Xo
        }), i.d(n, "VDataTable", function () {
            return Sa
        }), i.d(n, "VEditDialog", function () {
            return xa
        }), i.d(n, "VTableOverflow", function () {
            return Ca
        }), i.d(n, "VDataTableHeader", function () {
            return aa
        }), i.d(n, "VSimpleTable", function () {
            return pa
        }), i.d(n, "VVirtualTable", function () {
            return wa
        }), i.d(n, "VDatePicker", function () {
            return Xa
        }), i.d(n, "VDatePickerTitle", function () {
            return $a
        }), i.d(n, "VDatePickerHeader", function () {
            return Ma
        }), i.d(n, "VDatePickerDateTable", function () {
            return ja
        }), i.d(n, "VDatePickerMonthTable", function () {
            return Na
        }), i.d(n, "VDatePickerYears", function () {
            return Fa
        }), i.d(n, "VDialog", function () {
            return Zn
        }), i.d(n, "VDivider", function () {
            return $i
        }), i.d(n, "VExpansionPanels", function () {
            return Ka
        }), i.d(n, "VExpansionPanel", function () {
            return Qa
        }), i.d(n, "VExpansionPanelHeader", function () {
            return il
        }), i.d(n, "VExpansionPanelContent", function () {
            return tl
        }), i.d(n, "VFileInput", function () {
            return ll
        }), i.d(n, "VFooter", function () {
            return cl
        }), i.d(n, "VForm", function () {
            return dl
        }), i.d(n, "VContainer", function () {
            return fl
        }), i.d(n, "VCol", function () {
            return Cl
        }), i.d(n, "VRow", function () {
            return Nl
        }), i.d(n, "VSpacer", function () {
            return Fl
        }), i.d(n, "VLayout", function () {
            return zl
        }), i.d(n, "VFlex", function () {
            return Wl
        }), i.d(n, "VHover", function () {
            return Rl
        }), i.d(n, "VIcon", function () {
            return Pt
        }), i.d(n, "VImg", function () {
            return mt
        }), i.d(n, "VInput", function () {
            return mn
        }), i.d(n, "VItem", function () {
            return Gl
        }), i.d(n, "VItemGroup", function () {
            return Gi
        }), i.d(n, "VLabel", function () {
            return un
        }), i.d(n, "VLazy", function () {
            return Ul
        }), i.d(n, "VListItemActionText", function () {
            return tn
        }), i.d(n, "VListItemContent", function () {
            return en
        }), i.d(n, "VListItemTitle", function () {
            return nn
        }), i.d(n, "VListItemSubtitle", function () {
            return sn
        }), i.d(n, "VList", function () {
            return Vi
        }), i.d(n, "VListGroup", function () {
            return Hi
        }), i.d(n, "VListItem", function () {
            return Ai
        }), i.d(n, "VListItemAction", function () {
            return Ei
        }), i.d(n, "VListItemAvatar", function () {
            return Qi
        }), i.d(n, "VListItemIcon", function () {
            return Pi
        }), i.d(n, "VListItemGroup", function () {
            return qi
        }), i.d(n, "VMenu", function () {
            return Si
        }), i.d(n, "VMessages", function () {
            return hn
        }), i.d(n, "VNavigationDrawer", function () {
            return Xl
        }), i.d(n, "VOverflowBtn", function () {
            return Kl
        }), i.d(n, "VOverlay", function () {
            return Gn
        }), i.d(n, "VPagination", function () {
            return eu
        }), i.d(n, "VSheet", function () {
            return ut
        }), i.d(n, "VParallax", function () {
            return iu
        }), i.d(n, "VPicker", function () {
            return Wa
        }), i.d(n, "VProgressCircular", function () {
            return jt
        }), i.d(n, "VProgressLinear", function () {
            return wn
        }), i.d(n, "VRadioGroup", function () {
            return su
        }), i.d(n, "VRadio", function () {
            return ou
        }), i.d(n, "VRangeSlider", function () {
            return hu
        }), i.d(n, "VRating", function () {
            return du
        }), i.d(n, "VResponsive", function () {
            return ft
        }), i.d(n, "VSelect", function () {
            return Dn
        }), i.d(n, "VSkeletonLoader", function () {
            return vu
        }), i.d(n, "VSlider", function () {
            return Dr
        }), i.d(n, "VSlideGroup", function () {
            return Br
        }), i.d(n, "VSlideItem", function () {
            return mu
        }), i.d(n, "VSnackbar", function () {
            return gu
        }), i.d(n, "VSparkline", function () {
            return Tu
        }), i.d(n, "VSpeedDial", function () {
            return Bu
        }), i.d(n, "VStepper", function () {
            return Eu
        }), i.d(n, "VStepperContent", function () {
            return Du
        }), i.d(n, "VStepperStep", function () {
            return Mu
        }), i.d(n, "VStepperHeader", function () {
            return Vu
        }), i.d(n, "VStepperItems", function () {
            return Pu
        }), i.d(n, "VSubheader", function () {
            return _i
        }), i.d(n, "VSwitch", function () {
            return Hu
        }), i.d(n, "VSystemBar", function () {
            return Nu
        }), i.d(n, "VTabs", function () {
            return qu
        }), i.d(n, "VTab", function () {
            return Zu
        }), i.d(n, "VTabItem", function () {
            return Ku
        }), i.d(n, "VTabsItems", function () {
            return Yu
        }), i.d(n, "VTabsSlider", function () {
            return Gu
        }), i.d(n, "VTextarea", function () {
            return Qu
        }), i.d(n, "VTextField", function () {
            return _n
        }), i.d(n, "VTimeline", function () {
            return ec
        }), i.d(n, "VTimelineItem", function () {
            return nc
        }), i.d(n, "VTimePicker", function () {
            return pc
        }), i.d(n, "VTimePickerClock", function () {
            return oc
        }), i.d(n, "VTimePickerTitle", function () {
            return sc
        }), i.d(n, "VToolbar", function () {
            return bt
        }), i.d(n, "VToolbarItems", function () {
            return vc
        }), i.d(n, "VToolbarTitle", function () {
            return fc
        }), i.d(n, "VTooltip", function () {
            return mc
        }), i.d(n, "VTreeview", function () {
            return Oc
        }), i.d(n, "VTreeviewNode", function () {
            return Sc
        }), i.d(n, "VWindow", function () {
            return yr
        }), i.d(n, "VWindowItem", function () {
            return xr
        }), i.d(n, "VCarouselTransition", function () {
            return Ie
        }), i.d(n, "VCarouselReverseTransition", function () {
            return Oe
        }), i.d(n, "VTabTransition", function () {
            return _e
        }), i.d(n, "VTabReverseTransition", function () {
            return Te
        }), i.d(n, "VMenuTransition", function () {
            return Be
        }), i.d(n, "VFabTransition", function () {
            return Ae
        }), i.d(n, "VDialogTransition", function () {
            return Ee
        }), i.d(n, "VDialogBottomTransition", function () {
            return Me
        }), i.d(n, "VFadeTransition", function () {
            return De
        }), i.d(n, "VScaleTransition", function () {
            return Ve
        }), i.d(n, "VScrollXTransition", function () {
            return Pe
        }), i.d(n, "VScrollXReverseTransition", function () {
            return Le
        }), i.d(n, "VScrollYTransition", function () {
            return He
        }), i.d(n, "VScrollYReverseTransition", function () {
            return je
        }), i.d(n, "VSlideXTransition", function () {
            return Ne
        }), i.d(n, "VSlideXReverseTransition", function () {
            return Fe
        }), i.d(n, "VSlideYTransition", function () {
            return ze
        }), i.d(n, "VSlideYReverseTransition", function () {
            return We
        }), i.d(n, "VExpandTransition", function () {
            return Re
        }), i.d(n, "VExpandXTransition", function () {
            return Ye
        });
        var s = {};
        i.r(s), i.d(s, "ClickOutside", function () {
            return di
        }), i.d(s, "Intersect", function () {
            return dt
        }), i.d(s, "Mutate", function () {
            return Ac
        }), i.d(s, "Resize", function () {
            return fi
        }), i.d(s, "Ripple", function () {
            return te
        }), i.d(s, "Scroll", function () {
            return St
        }), i.d(s, "Touch", function () {
            return vr
        });
        var r = {};
        i.r(r), i.d(r, "linear", function () {
            return Nc
        }), i.d(r, "easeInQuad", function () {
            return Fc
        }), i.d(r, "easeOutQuad", function () {
            return zc
        }), i.d(r, "easeInOutQuad", function () {
            return Wc
        }), i.d(r, "easeInCubic", function () {
            return Rc
        }), i.d(r, "easeOutCubic", function () {
            return Yc
        }), i.d(r, "easeInOutCubic", function () {
            return Gc
        }), i.d(r, "easeInQuart", function () {
            return Uc
        }), i.d(r, "easeOutQuart", function () {
            return qc
        }), i.d(r, "easeInOutQuart", function () {
            return Xc
        }), i.d(r, "easeInQuint", function () {
            return Zc
        }), i.d(r, "easeOutQuint", function () {
            return Kc
        }), i.d(r, "easeInOutQuint", function () {
            return Jc
        });
        i(10);
        var o = i(0),
            a = i.n(o),
            l = function () {
                return (l = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            };

        function u(t) {
            var e = l({}, t.props, t.injections),
                i = c.options.computed.isDark.call(e);
            return c.options.computed.themeClasses.call({
                isDark: i
            })
        }
        var c = a.a.extend().extend({
                name: "themeable",
                provide: function () {
                    return {
                        theme: this.themeableProvide
                    }
                },
                inject: {
                    theme: {
                        default: {
                            isDark: !1
                        }
                    }
                },
                props: {
                    dark: {
                        type: Boolean,
                        default: null
                    },
                    light: {
                        type: Boolean,
                        default: null
                    }
                },
                data: function () {
                    return {
                        themeableProvide: {
                            isDark: !1
                        }
                    }
                },
                computed: {
                    appIsDark: function () {
                        return this.$vuetify.theme.dark || !1
                    },
                    isDark: function () {
                        return !0 === this.dark || !0 !== this.light && this.theme.isDark
                    },
                    themeClasses: function () {
                        return {
                            "theme--dark": this.isDark,
                            "theme--light": !this.isDark
                        }
                    },
                    rootIsDark: function () {
                        return !0 === this.dark || !0 !== this.light && this.appIsDark
                    },
                    rootThemeClasses: function () {
                        return {
                            "theme--dark": this.rootIsDark,
                            "theme--light": !this.rootIsDark
                        }
                    }
                },
                watch: {
                    isDark: {
                        handler: function (t, e) {
                            t !== e && (this.themeableProvide.isDark = this.isDark)
                        },
                        immediate: !0
                    }
                }
            }),
            h = c;

        function d() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return a.a.extend({
                mixins: t
            })
        }
        var p = function () {
                return (p = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            f = d(h).extend({
                name: "v-app",
                props: {
                    dark: {
                        type: Boolean,
                        default: void 0
                    },
                    id: {
                        type: String,
                        default: "app"
                    },
                    light: {
                        type: Boolean,
                        default: void 0
                    }
                },
                computed: {
                    isDark: function () {
                        return this.$vuetify.theme.dark
                    }
                },
                beforeCreate: function () {
                    if (!this.$vuetify || this.$vuetify === this.$root) throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")
                },
                render: function (t) {
                    var e = t("div", {
                        staticClass: "v-application--wrap"
                    }, this.$slots.default);
                    return t("div", {
                        staticClass: "v-application",
                        class: p({
                            "v-application--is-rtl": this.$vuetify.rtl,
                            "v-application--is-ltr": !this.$vuetify.rtl
                        }, this.themeClasses),
                        attrs: {
                            "data-app": !0
                        },
                        domProps: {
                            id: this.id
                        }
                    }, [e])
                }
            });
        i(11), i(12), i(13);

        function v(t) {
            return function (e, i) {
                for (var n in i) Object.prototype.hasOwnProperty.call(e, n) || this.$delete(this.$data[t], n);
                for (var n in e) this.$set(this.$data[t], n, e[n])
            }
        }
        var m = a.a.extend({
            data: function () {
                return {
                    attrs$: {},
                    listeners$: {}
                }
            },
            created: function () {
                this.$watch("$attrs", v("attrs$"), {
                    immediate: !0
                }), this.$watch("$listeners", v("listeners$"), {
                    immediate: !0
                })
            }
        });

        function g(t, e, i) {
            if (i && (e = {
                    _isVue: !0,
                    $parent: i,
                    $options: e
                }), e) {
                if (e.$_alreadyWarned = e.$_alreadyWarned || [], e.$_alreadyWarned.includes(t)) return;
                e.$_alreadyWarned.push(t)
            }
            return "[Vuetify] " + t + (e ? function (t) {
                if (t._isVue && t.$parent) {
                    for (var e = [], i = 0; t;) {
                        if (e.length > 0) {
                            var n = e[e.length - 1];
                            if (n.constructor === t.constructor) {
                                i++, t = t.$parent;
                                continue
                            }
                            i > 0 && (e[e.length - 1] = [n, i], i = 0)
                        }
                        e.push(t), t = t.$parent
                    }
                    return "\n\nfound in\n\n" + e.map(function (t, e) {
                        return "" + (0 === e ? "---\x3e " : " ".repeat(5 + 2 * e)) + (Array.isArray(t) ? k(t[0]) + "... (" + t[1] + " recursive calls)" : k(t))
                    }).join("\n")
                }
                return "\n\n(found in " + k(t) + ")"
            }(e) : "")
        }

        function y(t, e, i) {
            var n = g(t, e, i);
            null != n && console.warn(n)
        }

        function b(t, e, i) {
            var n = g(t, e, i);
            null != n && console.error(n)
        }

        function S(t, e, i, n) {
            b("[BREAKING] '" + t + "' has been removed, use '" + e + "' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide", i, n)
        }

        function x(t, e, i) {
            y("[REMOVED] '" + t + "' has been removed. You can safely omit it.", e, i)
        }
        var w = /(?:^|[-_])(\w)/g,
            C = function (t) {
                return t.replace(w, function (t) {
                    return t.toUpperCase()
                }).replace(/[-_]/g, "")
            };

        function k(t, e) {
            if (t.$root === t) return "<Root>";
            var i = "function" == typeof t && null != t.cid ? t.options : t._isVue ? t.$options || t.constructor.options : t || {},
                n = i.name || i._componentTag,
                s = i.__file;
            if (!n && s) {
                var r = s.match(/([^/\\]+)\.vue$/);
                n = r && r[1]
            }
            return (n ? "<" + C(n) + ">" : "<Anonymous>") + (s && !1 !== e ? " at " + s : "")
        }
        var $ = function () {
                return ($ = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            I = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            };

        function O(t) {
            return !!t && !!t.match(/^(#|(rgb|hsl)a?\()/)
        }
        var _ = a.a.extend({
                name: "colorable",
                props: {
                    color: String
                },
                methods: {
                    setBackgroundColor: function (t, e) {
                        var i;
                        return void 0 === e && (e = {}), "string" == typeof e.style ? (b("style must be an object", this), e) : "string" == typeof e.class ? (b("class must be an object", this), e) : (O(t) ? e.style = $({}, e.style, {
                            "background-color": "" + t,
                            "border-color": "" + t
                        }) : t && (e.class = $({}, e.class, ((i = {})[t] = !0, i))), e)
                    },
                    setTextColor: function (t, e) {
                        var i;
                        if (void 0 === e && (e = {}), "string" == typeof e.style) return b("style must be an object", this), e;
                        if ("string" == typeof e.class) return b("class must be an object", this), e;
                        if (O(t)) e.style = $({}, e.style, {
                            color: "" + t,
                            "caret-color": "" + t
                        });
                        else if (t) {
                            var n = I(t.toString().trim().split(" ", 2), 2),
                                s = n[0],
                                r = n[1];
                            e.class = $({}, e.class, ((i = {})[s + "--text"] = !0, i)), r && (e.class["text--" + r] = !0)
                        }
                        return e
                    }
                }
            }),
            T = a.a.extend({
                name: "elevatable",
                props: {
                    elevation: [Number, String]
                },
                computed: {
                    computedElevation: function () {
                        return this.elevation
                    },
                    elevationClasses: function () {
                        var t, e = this.computedElevation;
                        return null == e ? {} : isNaN(parseInt(e)) ? {} : ((t = {})["elevation-" + this.elevation] = !0, t)
                    }
                }
            });
        var B = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            A = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(B(arguments[e]));
                return t
            };

        function E(t, e, i) {
            return void 0 === e && (e = "div"), a.a.extend({
                name: i || t.replace(/__/g, "-"),
                functional: !0,
                render: function (i, n) {
                    var s = n.data,
                        r = n.children;
                    return s.staticClass = (t + " " + (s.staticClass || "")).trim(), i(e, s, r)
                }
            })
        }

        function M(t, e, i, n) {
            void 0 === n && (n = !1);
            t.addEventListener(e, function s(r) {
                i(r), t.removeEventListener(e, s, n)
            }, n)
        }
        var D = !1;
        try {
            if ("undefined" != typeof window) {
                var V = Object.defineProperty({}, "passive", {
                    get: function () {
                        D = !0
                    }
                });
                window.addEventListener("testListener", V, V), window.removeEventListener("testListener", V, V)
            }
        } catch (t) {
            console.warn(t)
        }

        function P(t, e, i) {
            var n = e.length - 1;
            if (n < 0) return void 0 === t ? i : t;
            for (var s = 0; s < n; s++) {
                if (null == t) return i;
                t = t[e[s]]
            }
            return null == t ? i : void 0 === t[e[n]] ? i : t[e[n]]
        }

        function L(t, e) {
            if (t === e) return !0;
            if (t instanceof Date && e instanceof Date && t.getTime() !== e.getTime()) return !1;
            if (t !== Object(t) || e !== Object(e)) return !1;
            var i = Object.keys(t);
            return i.length === Object.keys(e).length && i.every(function (i) {
                return L(t[i], e[i])
            })
        }

        function H(t, e, i) {
            return null != t && e && "string" == typeof e ? void 0 !== t[e] ? t[e] : P(t, (e = (e = e.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), i) : i
        }

        function j(t, e, i) {
            if (null == e) return void 0 === t ? i : t;
            if (t !== Object(t)) return void 0 === i ? t : i;
            if ("string" == typeof e) return H(t, e, i);
            if (Array.isArray(e)) return P(t, e, i);
            if ("function" != typeof e) return i;
            var n = e(t, i);
            return void 0 === n ? i : n
        }

        function N(t) {
            return Array.from({
                length: t
            }, function (t, e) {
                return e
            })
        }

        function F(t) {
            if (!t || t.nodeType !== Node.ELEMENT_NODE) return 0;
            var e = +window.getComputedStyle(t).getPropertyValue("z-index");
            return e || F(t.parentNode)
        }
        var z = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;"
        };

        function W(t) {
            return t.replace(/[&<>]/g, function (t) {
                return z[t] || t
            })
        }

        function R(t, e) {
            for (var i = {}, n = 0; n < e.length; n++) {
                var s = e[n];
                void 0 !== t[s] && (i[s] = t[s])
            }
            return i
        }

        function Y(t, e) {
            return void 0 === e && (e = "px"), null == t || "" === t ? void 0 : isNaN(+t) ? String(t) : "" + Number(t) + e
        }

        function G(t) {
            return (t || "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }
        var U = Object.freeze({
            enter: 13,
            tab: 9,
            delete: 46,
            esc: 27,
            space: 32,
            up: 38,
            down: 40,
            left: 37,
            right: 39,
            end: 35,
            home: 36,
            del: 46,
            backspace: 8,
            insert: 45,
            pageup: 33,
            pagedown: 34
        });

        function q(t) {
            return Object.keys(t)
        }
        var X = /-(\w)/g,
            Z = function (t) {
                return t.replace(X, function (t, e) {
                    return e ? e.toUpperCase() : ""
                })
            };

        function K(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        function J(t) {
            return null != t ? Array.isArray(t) ? t : [t] : []
        }

        function Q(t, e, i) {
            return null != t && null != e && "boolean" != typeof t && -1 !== t.toString().toLocaleLowerCase().indexOf(e.toLocaleLowerCase())
        }

        function tt(t, e, i) {
            return t.$slots[e] && t.$scopedSlots[e] && t.$scopedSlots[e].name ? i ? "v-slot" : "scoped" : t.$slots[e] ? "normal" : t.$scopedSlots[e] ? "scoped" : void 0
        }

        function et(t, e) {
            return Object.keys(e).filter(function (e) {
                return e.startsWith(t)
            }).reduce(function (i, n) {
                return i[n.replace(t, "")] = e[n], i
            }, {})
        }

        function it(t, e, i, n) {
            return void 0 === e && (e = "default"), void 0 === n && (n = !1), t.$scopedSlots[e] ? t.$scopedSlots[e](i) : !t.$slots[e] || i && !n ? void 0 : t.$slots[e]
        }

        function nt(t, e, i) {
            return void 0 === e && (e = 0), void 0 === i && (i = 1), Math.max(e, Math.min(i, t))
        }

        function st(t, e, i) {
            return void 0 === i && (i = "0"), t + i.repeat(Math.max(0, e - t.length))
        }

        function rt(t, e) {
            void 0 === e && (e = !1);
            var i = e ? 1024 : 1e3;
            if (t < i) return t + " B";
            for (var n = e ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"], s = -1; Math.abs(t) >= i && s < n.length - 1;) t /= i, ++s;
            return t.toFixed(1) + " " + n[s] + "B"
        }

        function ot(t) {
            return t ? Object.keys(t).reduce(function (e, i) {
                return e[Z(i)] = t[i], e
            }, {}) : {}
        }
        var at = a.a.extend({
                name: "measurable",
                props: {
                    height: [Number, String],
                    maxHeight: [Number, String],
                    maxWidth: [Number, String],
                    minHeight: [Number, String],
                    minWidth: [Number, String],
                    width: [Number, String]
                },
                computed: {
                    measurableStyles: function () {
                        var t = {},
                            e = Y(this.height),
                            i = Y(this.minHeight),
                            n = Y(this.minWidth),
                            s = Y(this.maxHeight),
                            r = Y(this.maxWidth),
                            o = Y(this.width);
                        return e && (t.height = e), i && (t.minHeight = i), n && (t.minWidth = n), s && (t.maxHeight = s), r && (t.maxWidth = r), o && (t.width = o), t
                    }
                }
            }),
            lt = function () {
                return (lt = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            ut = d(m, _, T, at, h).extend({
                name: "v-sheet",
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    },
                    tile: Boolean
                },
                computed: {
                    classes: function () {
                        return lt({
                            "v-sheet": !0,
                            "v-sheet--tile": this.tile
                        }, this.themeClasses, this.elevationClasses)
                    },
                    styles: function () {
                        return this.measurableStyles
                    }
                },
                render: function (t) {
                    var e = {
                        class: this.classes,
                        style: this.styles,
                        on: this.listeners$
                    };
                    return t(this.tag, this.setBackgroundColor(this.color, e), this.$slots.default)
                }
            });
        i(14);

        function ct(t) {
            return (ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function ht(t) {
            t._observe && (t._observe.observer.unobserve(t), delete t._observe)
        }
        var dt = {
                inserted: function (t, e) {
                    var i = e.modifiers || {},
                        n = e.value,
                        s = "object" === ct(n) ? n.handler : n,
                        r = new IntersectionObserver(function (e, n) {
                            if (void 0 === e && (e = []), t._observe) {
                                if (s && (!i.quiet || t._observe.init)) {
                                    var r = Boolean(e.find(function (t) {
                                        return t.isIntersecting
                                    }));
                                    s(e, n, r)
                                }
                                t._observe.init && i.once ? ht(t) : t._observe.init = !0
                            }
                        }, n.options || {});
                    t._observe = {
                        init: !1,
                        observer: r
                    }, r.observe(t)
                },
                unbind: ht
            },
            pt = dt,
            ft = (i(15), d(at).extend({
                name: "v-responsive",
                props: {
                    aspectRatio: [String, Number]
                },
                computed: {
                    computedAspectRatio: function () {
                        return Number(this.aspectRatio)
                    },
                    aspectStyle: function () {
                        return this.computedAspectRatio ? {
                            paddingBottom: 1 / this.computedAspectRatio * 100 + "%"
                        } : void 0
                    },
                    __cachedSizer: function () {
                        return this.aspectStyle ? this.$createElement("div", {
                            style: this.aspectStyle,
                            staticClass: "v-responsive__sizer"
                        }) : []
                    }
                },
                methods: {
                    genContent: function () {
                        return this.$createElement("div", {
                            staticClass: "v-responsive__content"
                        }, this.$slots.default)
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-responsive",
                        style: this.measurableStyles,
                        on: this.$listeners
                    }, [this.__cachedSizer, this.genContent()])
                }
            })),
            vt = ft,
            mt = vt.extend({
                name: "v-img",
                directives: {
                    intersect: pt
                },
                props: {
                    alt: String,
                    contain: Boolean,
                    eager: Boolean,
                    gradient: String,
                    lazySrc: String,
                    options: {
                        type: Object,
                        default: function () {
                            return {
                                root: void 0,
                                rootMargin: void 0,
                                threshold: void 0
                            }
                        }
                    },
                    position: {
                        type: String,
                        default: "center center"
                    },
                    sizes: String,
                    src: {
                        type: [String, Object],
                        default: ""
                    },
                    srcset: String,
                    transition: {
                        type: [Boolean, String],
                        default: "fade-transition"
                    }
                },
                data: function () {
                    return {
                        currentSrc: "",
                        image: null,
                        isLoading: !0,
                        calculatedAspectRatio: void 0,
                        naturalWidth: void 0
                    }
                },
                computed: {
                    computedAspectRatio: function () {
                        return Number(this.normalisedSrc.aspect || this.calculatedAspectRatio)
                    },
                    hasIntersect: function () {
                        return "undefined" != typeof window && "IntersectionObserver" in window
                    },
                    normalisedSrc: function () {
                        return "string" == typeof this.src ? {
                            src: this.src,
                            srcset: this.srcset,
                            lazySrc: this.lazySrc,
                            aspect: Number(this.aspectRatio || 0)
                        } : {
                            src: this.src.src,
                            srcset: this.srcset || this.src.srcset,
                            lazySrc: this.lazySrc || this.src.lazySrc,
                            aspect: Number(this.aspectRatio || this.src.aspect)
                        }
                    },
                    __cachedImage: function () {
                        if (!this.normalisedSrc.src && !this.normalisedSrc.lazySrc) return [];
                        var t = [],
                            e = this.isLoading ? this.normalisedSrc.lazySrc : this.currentSrc;
                        this.gradient && t.push("linear-gradient(" + this.gradient + ")"), e && t.push('url("' + e + '")');
                        var i = this.$createElement("div", {
                            staticClass: "v-image__image",
                            class: {
                                "v-image__image--preload": this.isLoading, "v-image__image--contain": this.contain, "v-image__image--cover": !this.contain
                            },
                            style: {
                                backgroundImage: t.join(", "),
                                backgroundPosition: this.position
                            },
                            key: +this.isLoading
                        });
                        return this.transition ? this.$createElement("transition", {
                            attrs: {
                                name: this.transition,
                                mode: "in-out"
                            }
                        }, [i]) : i
                    }
                },
                watch: {
                    src: function () {
                        this.isLoading ? this.loadImage() : this.init(void 0, void 0, !0)
                    },
                    "$vuetify.breakpoint.width": "getSrc"
                },
                mounted: function () {
                    this.init()
                },
                methods: {
                    init: function (t, e, i) {
                        if (!this.hasIntersect || i || this.eager) {
                            if (this.normalisedSrc.lazySrc) {
                                var n = new Image;
                                n.src = this.normalisedSrc.lazySrc, this.pollForSize(n, null)
                            }
                            this.normalisedSrc.src && this.loadImage()
                        }
                    },
                    onLoad: function () {
                        this.getSrc(), this.isLoading = !1, this.$emit("load", this.src)
                    },
                    onError: function () {
                        b("Image load failed\n\nsrc: " + this.normalisedSrc.src, this), this.$emit("error", this.src)
                    },
                    getSrc: function () {
                        this.image && (this.currentSrc = this.image.currentSrc || this.image.src)
                    },
                    loadImage: function () {
                        var t = this,
                            e = new Image;
                        this.image = e, e.onload = function () {
                            e.decode ? e.decode().catch(function (e) {
                                y("Failed to decode image, trying to render anyway\n\nsrc: " + t.normalisedSrc.src + (e.message ? "\nOriginal error: " + e.message : ""), t)
                            }).then(t.onLoad) : t.onLoad()
                        }, e.onerror = this.onError, e.src = this.normalisedSrc.src, this.sizes && (e.sizes = this.sizes), this.normalisedSrc.srcset && (e.srcset = this.normalisedSrc.srcset), this.aspectRatio || this.pollForSize(e), this.getSrc()
                    },
                    pollForSize: function (t, e) {
                        var i = this;
                        void 0 === e && (e = 100);
                        ! function n() {
                            var s = t.naturalHeight,
                                r = t.naturalWidth;
                            s || r ? (i.naturalWidth = r, i.calculatedAspectRatio = r / s) : null != e && setTimeout(n, e)
                        }()
                    },
                    genContent: function () {
                        var t = vt.options.methods.genContent.call(this);
                        return this.naturalWidth && this._b(t.data, "div", {
                            style: {
                                width: this.naturalWidth + "px"
                            }
                        }), t
                    },
                    __genPlaceholder: function () {
                        if (this.$slots.placeholder) {
                            var t = this.isLoading ? [this.$createElement("div", {
                                staticClass: "v-image__placeholder"
                            }, this.$slots.placeholder)] : [];
                            return this.transition ? this.$createElement("transition", {
                                props: {
                                    appear: !0,
                                    name: this.transition
                                }
                            }, t) : t[0]
                        }
                    }
                },
                render: function (t) {
                    var e = vt.options.render.call(this, t);
                    return e.data.staticClass += " v-image", e.data.directives = this.hasIntersect ? [{
                        name: "intersect",
                        options: this.options,
                        modifiers: {
                            once: !0
                        },
                        value: this.init
                    }] : [], e.data.attrs = {
                        role: this.alt ? "img" : void 0,
                        "aria-label": this.alt
                    }, e.children = [this.__cachedSizer, this.__cachedImage, this.__genPlaceholder(), this.genContent()], t(e.tag, e.data, e.children)
                }
            }),
            gt = function () {
                return (gt = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            yt = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            bt = ut.extend({
                name: "v-toolbar",
                props: {
                    absolute: Boolean,
                    bottom: Boolean,
                    collapse: Boolean,
                    dense: Boolean,
                    extended: Boolean,
                    extensionHeight: {
                        default: 48,
                        type: [Number, String]
                    },
                    flat: Boolean,
                    floating: Boolean,
                    prominent: Boolean,
                    short: Boolean,
                    src: {
                        type: [String, Object],
                        default: ""
                    },
                    tag: {
                        type: String,
                        default: "header"
                    },
                    tile: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function () {
                    return {
                        isExtended: !1
                    }
                },
                computed: {
                    computedHeight: function () {
                        var t = this.computedContentHeight;
                        if (!this.isExtended) return t;
                        var e = parseInt(this.extensionHeight);
                        return this.isCollapsed ? t : t + (isNaN(e) ? 0 : e)
                    },
                    computedContentHeight: function () {
                        return this.height ? parseInt(this.height) : this.isProminent && this.dense ? 96 : this.isProminent && this.short ? 112 : this.isProminent ? 128 : this.dense ? 48 : this.short || this.$vuetify.breakpoint.smAndDown ? 56 : 64
                    },
                    classes: function () {
                        return gt({}, ut.options.computed.classes.call(this), {
                            "v-toolbar": !0,
                            "v-toolbar--absolute": this.absolute,
                            "v-toolbar--bottom": this.bottom,
                            "v-toolbar--collapse": this.collapse,
                            "v-toolbar--collapsed": this.isCollapsed,
                            "v-toolbar--dense": this.dense,
                            "v-toolbar--extended": this.isExtended,
                            "v-toolbar--flat": this.flat,
                            "v-toolbar--floating": this.floating,
                            "v-toolbar--prominent": this.isProminent
                        })
                    },
                    isCollapsed: function () {
                        return this.collapse
                    },
                    isProminent: function () {
                        return this.prominent
                    },
                    styles: function () {
                        return gt({}, this.measurableStyles, {
                            height: Y(this.computedHeight)
                        })
                    }
                },
                created: function () {
                    var t = this;
                    [
                        ["app", "<v-app-bar app>"],
                        ["manual-scroll", '<v-app-bar :value="false">'],
                        ["clipped-left", "<v-app-bar clipped-left>"],
                        ["clipped-right", "<v-app-bar clipped-right>"],
                        ["inverted-scroll", "<v-app-bar inverted-scroll>"],
                        ["scroll-off-screen", "<v-app-bar scroll-off-screen>"],
                        ["scroll-target", "<v-app-bar scroll-target>"],
                        ["scroll-threshold", "<v-app-bar scroll-threshold>"],
                        ["card", "<v-app-bar flat>"]
                    ].forEach(function (e) {
                        var i = yt(e, 2),
                            n = i[0],
                            s = i[1];
                        t.$attrs.hasOwnProperty(n) && S(n, s, t)
                    })
                },
                methods: {
                    genBackground: function () {
                        var t = {
                                height: Y(this.computedHeight),
                                src: this.src
                            },
                            e = this.$scopedSlots.img ? this.$scopedSlots.img({
                                props: t
                            }) : this.$createElement(mt, {
                                props: t
                            });
                        return this.$createElement("div", {
                            staticClass: "v-toolbar__image"
                        }, [e])
                    },
                    genContent: function () {
                        return this.$createElement("div", {
                            staticClass: "v-toolbar__content",
                            style: {
                                height: Y(this.computedContentHeight)
                            }
                        }, it(this))
                    },
                    genExtension: function () {
                        return this.$createElement("div", {
                            staticClass: "v-toolbar__extension",
                            style: {
                                height: Y(this.extensionHeight)
                            }
                        }, it(this, "extension"))
                    }
                },
                render: function (t) {
                    this.isExtended = this.extended || !!this.$scopedSlots.extension;
                    var e = [this.genContent()],
                        i = this.setBackgroundColor(this.color, {
                            class: this.classes,
                            style: this.styles,
                            on: this.$listeners
                        });
                    return this.isExtended && e.push(this.genExtension()), (this.src || this.$scopedSlots.img) && e.unshift(this.genBackground()), t(this.tag, i, e)
                }
            });
        var St = {
                inserted: function (t, e) {
                    var i = e.value,
                        n = e.options || {
                            passive: !0
                        },
                        s = e.arg ? document.querySelector(e.arg) : window;
                    s && (s.addEventListener("scroll", i, n), t._onScroll = {
                        callback: i,
                        options: n,
                        target: s
                    })
                },
                unbind: function (t) {
                    if (t._onScroll) {
                        var e = t._onScroll,
                            i = e.callback,
                            n = e.options;
                        e.target.removeEventListener("scroll", i, n), delete t._onScroll
                    }
                }
            },
            xt = St,
            wt = {
                absolute: Boolean,
                bottom: Boolean,
                fixed: Boolean,
                left: Boolean,
                right: Boolean,
                top: Boolean
            };

        function Ct(t) {
            return void 0 === t && (t = []), a.a.extend({
                name: "positionable",
                props: t.length ? R(wt, t) : wt
            })
        }
        var kt = Ct();

        function $t(t, e) {
            return void 0 === e && (e = []), d(Ct(["absolute", "fixed"])).extend({
                name: "applicationable",
                props: {
                    app: Boolean
                },
                computed: {
                    applicationProperty: function () {
                        return t
                    }
                },
                watch: {
                    app: function (t, e) {
                        e ? this.removeApplication(!0) : this.callUpdate()
                    },
                    applicationProperty: function (t, e) {
                        this.$vuetify.application.unregister(this._uid, e)
                    }
                },
                activated: function () {
                    this.callUpdate()
                },
                created: function () {
                    for (var t = 0, i = e.length; t < i; t++) this.$watch(e[t], this.callUpdate);
                    this.callUpdate()
                },
                mounted: function () {
                    this.callUpdate()
                },
                deactivated: function () {
                    this.removeApplication()
                },
                destroyed: function () {
                    this.removeApplication()
                },
                methods: {
                    callUpdate: function () {
                        this.app && this.$vuetify.application.register(this._uid, this.applicationProperty, this.updateApplication())
                    },
                    removeApplication: function (t) {
                        void 0 === t && (t = !1), (t || this.app) && this.$vuetify.application.unregister(this._uid, this.applicationProperty)
                    },
                    updateApplication: function () {
                        return 0
                    }
                }
            })
        }
        var It = a.a.extend({
                name: "scrollable",
                directives: {
                    Scroll: St
                },
                props: {
                    scrollTarget: String,
                    scrollThreshold: [String, Number]
                },
                data: function () {
                    return {
                        currentScroll: 0,
                        currentThreshold: 0,
                        isActive: !1,
                        isScrollingUp: !1,
                        previousScroll: 0,
                        savedScroll: 0,
                        target: null
                    }
                },
                computed: {
                    canScroll: function () {
                        return "undefined" != typeof window
                    },
                    computedScrollThreshold: function () {
                        return this.scrollThreshold ? Number(this.scrollThreshold) : 300
                    }
                },
                watch: {
                    isScrollingUp: function () {
                        this.savedScroll = this.savedScroll || this.currentScroll
                    },
                    isActive: function () {
                        this.savedScroll = 0
                    }
                },
                mounted: function () {
                    this.scrollTarget && (this.target = document.querySelector(this.scrollTarget), this.target || y("Unable to locate element with identifier " + this.scrollTarget, this))
                },
                methods: {
                    onScroll: function () {
                        var t = this;
                        this.canScroll && (this.previousScroll = this.currentScroll, this.currentScroll = this.target ? this.target.scrollTop : window.pageYOffset, this.isScrollingUp = this.currentScroll < this.previousScroll, this.currentThreshold = Math.abs(this.currentScroll - this.computedScrollThreshold), this.$nextTick(function () {
                            Math.abs(t.currentScroll - t.savedScroll) > t.computedScrollThreshold && t.thresholdMet()
                        }))
                    },
                    thresholdMet: function () {}
                }
            }),
            Ot = a.a.extend({
                name: "ssr-bootable",
                data: function () {
                    return {
                        isBooted: !1
                    }
                },
                mounted: function () {
                    var t = this;
                    window.requestAnimationFrame(function () {
                        t.$el.setAttribute("data-booted", "true"), t.isBooted = !0
                    })
                }
            });

        function _t(t, e) {
            var i, n;
            return void 0 === t && (t = "value"), void 0 === e && (e = "input"), a.a.extend({
                name: "toggleable",
                model: {
                    prop: t,
                    event: e
                },
                props: (i = {}, i[t] = {
                    required: !1
                }, i),
                data: function () {
                    return {
                        isActive: !!this[t]
                    }
                },
                watch: (n = {}, n[t] = function (t) {
                    this.isActive = !!t
                }, n.isActive = function (i) {
                    !!i !== this[t] && this.$emit(e, i)
                }, n)
            })
        }
        var Tt, Bt = _t(),
            At = function () {
                return (At = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Et = d(bt, It, Ot, Bt, $t("top", ["clippedLeft", "clippedRight", "computedHeight", "invertedScroll", "isExtended", "isProminent", "value"])).extend({
                name: "v-app-bar",
                directives: {
                    Scroll: xt
                },
                props: {
                    clippedLeft: Boolean,
                    clippedRight: Boolean,
                    collapseOnScroll: Boolean,
                    elevateOnScroll: Boolean,
                    fadeImgOnScroll: Boolean,
                    hideOnScroll: Boolean,
                    invertedScroll: Boolean,
                    scrollOffScreen: Boolean,
                    shrinkOnScroll: Boolean,
                    value: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function () {
                    return {
                        isActive: this.value
                    }
                },
                computed: {
                    applicationProperty: function () {
                        return this.bottom ? "bottom" : "top"
                    },
                    canScroll: function () {
                        return It.options.computed.canScroll.call(this) && (this.invertedScroll || this.elevateOnScroll || this.hideOnScroll || this.collapseOnScroll || this.isBooted || !this.value)
                    },
                    classes: function () {
                        return At({}, bt.options.computed.classes.call(this), {
                            "v-toolbar--collapse": this.collapse || this.collapseOnScroll,
                            "v-app-bar": !0,
                            "v-app-bar--clipped": this.clippedLeft || this.clippedRight,
                            "v-app-bar--fade-img-on-scroll": this.fadeImgOnScroll,
                            "v-app-bar--elevate-on-scroll": this.elevateOnScroll,
                            "v-app-bar--fixed": !this.absolute && (this.app || this.fixed),
                            "v-app-bar--hide-shadow": this.hideShadow,
                            "v-app-bar--is-scrolled": this.currentScroll > 0,
                            "v-app-bar--shrink-on-scroll": this.shrinkOnScroll
                        })
                    },
                    computedContentHeight: function () {
                        if (!this.shrinkOnScroll) return bt.options.computed.computedContentHeight.call(this);
                        var t = this.computedOriginalHeight,
                            e = this.dense ? 48 : 56,
                            i = t,
                            n = (i - e) / this.computedScrollThreshold,
                            s = this.currentScroll * n;
                        return Math.max(e, i - s)
                    },
                    computedFontSize: function () {
                        if (this.isProminent) {
                            var t = (this.dense ? 96 : 128) - this.computedContentHeight;
                            return Number((1.5 - .00347 * t).toFixed(2))
                        }
                    },
                    computedLeft: function () {
                        return !this.app || this.clippedLeft ? 0 : this.$vuetify.application.left
                    },
                    computedMarginTop: function () {
                        return this.app ? this.$vuetify.application.bar : 0
                    },
                    computedOpacity: function () {
                        if (this.fadeImgOnScroll) {
                            var t = Math.max((this.computedScrollThreshold - this.currentScroll) / this.computedScrollThreshold, 0);
                            return Number(parseFloat(t).toFixed(2))
                        }
                    },
                    computedOriginalHeight: function () {
                        var t = bt.options.computed.computedContentHeight.call(this);
                        return this.isExtended && (t += parseInt(this.extensionHeight)), t
                    },
                    computedRight: function () {
                        return !this.app || this.clippedRight ? 0 : this.$vuetify.application.right
                    },
                    computedScrollThreshold: function () {
                        return this.scrollThreshold ? Number(this.scrollThreshold) : this.computedOriginalHeight - (this.dense ? 48 : 56)
                    },
                    computedTransform: function () {
                        if (!this.canScroll || this.elevateOnScroll && 0 === this.currentScroll && this.isActive) return 0;
                        if (this.isActive) return 0;
                        var t = this.scrollOffScreen ? this.computedHeight : this.computedContentHeight;
                        return this.bottom ? t : -t
                    },
                    hideShadow: function () {
                        return this.elevateOnScroll && this.isExtended ? this.currentScroll < this.computedScrollThreshold : this.elevateOnScroll ? 0 === this.currentScroll || this.computedTransform < 0 : (!this.isExtended || this.scrollOffScreen) && 0 !== this.computedTransform
                    },
                    isCollapsed: function () {
                        return this.collapseOnScroll ? this.currentScroll > 0 : bt.options.computed.isCollapsed.call(this)
                    },
                    isProminent: function () {
                        return bt.options.computed.isProminent.call(this) || this.shrinkOnScroll
                    },
                    styles: function () {
                        return At({}, bt.options.computed.styles.call(this), {
                            fontSize: Y(this.computedFontSize, "rem"),
                            marginTop: Y(this.computedMarginTop),
                            transform: "translateY(" + Y(this.computedTransform) + ")",
                            left: Y(this.computedLeft),
                            right: Y(this.computedRight)
                        })
                    }
                },
                watch: {
                    canScroll: "onScroll",
                    computedTransform: function () {
                        this.canScroll && (this.clippedLeft || this.clippedRight) && this.callUpdate()
                    },
                    invertedScroll: function (t) {
                        this.isActive = !t
                    }
                },
                created: function () {
                    this.invertedScroll && (this.isActive = !1)
                },
                methods: {
                    genBackground: function () {
                        var t = bt.options.methods.genBackground.call(this);
                        return t.data = this._b(t.data || {}, t.tag, {
                            style: {
                                opacity: this.computedOpacity
                            }
                        }), t
                    },
                    updateApplication: function () {
                        return this.invertedScroll ? 0 : this.computedHeight + this.computedTransform
                    },
                    thresholdMet: function () {
                        this.invertedScroll ? this.isActive = this.currentScroll > this.computedScrollThreshold : this.currentThreshold < this.computedScrollThreshold || (this.hideOnScroll && (this.isActive = this.isScrollingUp), this.savedScroll = this.currentScroll)
                    }
                },
                render: function (t) {
                    var e = bt.options.render.call(this, t);
                    return e.data = e.data || {}, this.canScroll && (e.data.directives = e.data.directives || [], e.data.directives.push({
                        arg: this.scrollTarget,
                        name: "scroll",
                        value: this.onScroll
                    })), e
                }
            }),
            Mt = (i(19), a.a.extend({
                name: "sizeable",
                props: {
                    large: Boolean,
                    small: Boolean,
                    xLarge: Boolean,
                    xSmall: Boolean
                },
                computed: {
                    medium: function () {
                        return Boolean(!(this.xSmall || this.small || this.large || this.xLarge))
                    },
                    sizeableClasses: function () {
                        return {
                            "v-size--x-small": this.xSmall,
                            "v-size--small": this.small,
                            "v-size--default": this.medium,
                            "v-size--large": this.large,
                            "v-size--x-large": this.xLarge
                        }
                    }
                }
            })),
            Dt = function () {
                return (Dt = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            };
        ! function (t) {
            t.xSmall = "12px", t.small = "16px", t.default = "24px", t.medium = "28px", t.large = "36px", t.xLarge = "40px"
        }(Tt || (Tt = {}));
        var Vt = d(m, _, Mt, h).extend({
                name: "v-icon",
                props: {
                    dense: Boolean,
                    disabled: Boolean,
                    left: Boolean,
                    right: Boolean,
                    size: [Number, String],
                    tag: {
                        type: String,
                        required: !1,
                        default: "i"
                    }
                },
                computed: {
                    medium: function () {
                        return !1
                    }
                },
                methods: {
                    getIcon: function () {
                        var t = "";
                        return this.$slots.default && (t = this.$slots.default[0].text.trim()),
                            function (t, e) {
                                return e.startsWith("$") ? H(t, "$vuetify.icons.values." + e.split("$").pop().split(".").pop(), e) : e
                            }(this, t)
                    },
                    getSize: function () {
                        var t = {
                                xSmall: this.xSmall,
                                small: this.small,
                                medium: this.medium,
                                large: this.large,
                                xLarge: this.xLarge
                            },
                            e = q(t).find(function (e) {
                                return t[e]
                            });
                        return e && Tt[e] || Y(this.size)
                    },
                    getDefaultData: function () {
                        var t = Boolean(this.listeners$.click || this.listeners$["!click"]);
                        return {
                            staticClass: "v-icon notranslate",
                            class: {
                                "v-icon--disabled": this.disabled, "v-icon--left": this.left, "v-icon--link": t, "v-icon--right": this.right, "v-icon--dense": this.dense
                            },
                            attrs: Dt({
                                "aria-hidden": !t,
                                role: t ? "button" : null
                            }, this.attrs$),
                            on: this.listeners$
                        }
                    },
                    applyColors: function (t) {
                        t.class = Dt({}, t.class, this.themeClasses), this.setTextColor(this.color, t)
                    },
                    renderFontIcon: function (t, e) {
                        var i = [],
                            n = this.getDefaultData(),
                            s = "material-icons",
                            r = t.indexOf("-"),
                            o = r <= -1;
                        o ? i.push(t) : function (t) {
                            return ["fas", "far", "fal", "fab"].some(function (e) {
                                return t.includes(e)
                            })
                        }(s = t.slice(0, r)) && (s = ""), n.class[s] = !0, n.class[t] = !o;
                        var a = this.getSize();
                        return a && (n.style = {
                            fontSize: a
                        }), this.applyColors(n), e(this.tag, n, i)
                    },
                    renderSvgIcon: function (t, e) {
                        var i = this.getDefaultData();
                        i.class["v-icon--svg"] = !0, i.attrs = {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            height: "24",
                            width: "24",
                            role: "img",
                            "aria-hidden": !this.attrs$["aria-label"],
                            "aria-label": this.attrs$["aria-label"]
                        };
                        var n = this.getSize();
                        return n && (i.style = {
                            fontSize: n,
                            height: n,
                            width: n
                        }, i.attrs.height = n, i.attrs.width = n), this.applyColors(i), e("svg", i, [e("path", {
                            attrs: {
                                d: t
                            }
                        })])
                    },
                    renderSvgIconComponent: function (t, e) {
                        var i = this.getDefaultData();
                        i.class["v-icon--is-component"] = !0;
                        var n = this.getSize();
                        n && (i.style = {
                            fontSize: n,
                            height: n
                        }), this.applyColors(i);
                        var s = t.component;
                        return i.props = t.props, i.nativeOn = i.on, e(s, i)
                    }
                },
                render: function (t) {
                    var e = this.getIcon();
                    return "string" == typeof e ? function (t) {
                        return /^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t) && /[\dz]$/i.test(t) && t.length > 4
                    }(e) ? this.renderSvgIcon(e, t) : this.renderFontIcon(e, t) : this.renderSvgIconComponent(e, t)
                }
            }),
            Pt = a.a.extend({
                name: "v-icon",
                $_wrapperFor: Vt,
                functional: !0,
                render: function (t, e) {
                    var i = e.data,
                        n = e.children,
                        s = "";
                    return i.domProps && (s = i.domProps.textContent || i.domProps.innerHTML || s, delete i.domProps.textContent, delete i.domProps.innerHTML), t(Vt, i, s ? [s] : n)
                }
            }),
            Lt = Pt,
            Ht = (i(16), ut),
            jt = (i(18), _.extend({
                name: "v-progress-circular",
                props: {
                    button: Boolean,
                    indeterminate: Boolean,
                    rotate: {
                        type: [Number, String],
                        default: 0
                    },
                    size: {
                        type: [Number, String],
                        default: 32
                    },
                    width: {
                        type: [Number, String],
                        default: 4
                    },
                    value: {
                        type: [Number, String],
                        default: 0
                    }
                },
                data: function () {
                    return {
                        radius: 20
                    }
                },
                computed: {
                    calculatedSize: function () {
                        return Number(this.size) + (this.button ? 8 : 0)
                    },
                    circumference: function () {
                        return 2 * Math.PI * this.radius
                    },
                    classes: function () {
                        return {
                            "v-progress-circular--indeterminate": this.indeterminate,
                            "v-progress-circular--button": this.button
                        }
                    },
                    normalizedValue: function () {
                        return this.value < 0 ? 0 : this.value > 100 ? 100 : parseFloat(this.value)
                    },
                    strokeDashArray: function () {
                        return Math.round(1e3 * this.circumference) / 1e3
                    },
                    strokeDashOffset: function () {
                        return (100 - this.normalizedValue) / 100 * this.circumference + "px"
                    },
                    strokeWidth: function () {
                        return Number(this.width) / +this.size * this.viewBoxSize * 2
                    },
                    styles: function () {
                        return {
                            height: Y(this.calculatedSize),
                            width: Y(this.calculatedSize)
                        }
                    },
                    svgStyles: function () {
                        return {
                            transform: "rotate(" + Number(this.rotate) + "deg)"
                        }
                    },
                    viewBoxSize: function () {
                        return this.radius / (1 - Number(this.width) / +this.size)
                    }
                },
                methods: {
                    genCircle: function (t, e) {
                        return this.$createElement("circle", {
                            class: "v-progress-circular__" + t,
                            attrs: {
                                fill: "transparent",
                                cx: 2 * this.viewBoxSize,
                                cy: 2 * this.viewBoxSize,
                                r: this.radius,
                                "stroke-width": this.strokeWidth,
                                "stroke-dasharray": this.strokeDashArray,
                                "stroke-dashoffset": e
                            }
                        })
                    },
                    genSvg: function () {
                        var t = [this.indeterminate || this.genCircle("underlay", 0), this.genCircle("overlay", this.strokeDashOffset)];
                        return this.$createElement("svg", {
                            style: this.svgStyles,
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: this.viewBoxSize + " " + this.viewBoxSize + " " + 2 * this.viewBoxSize + " " + 2 * this.viewBoxSize
                            }
                        }, t)
                    },
                    genInfo: function () {
                        return this.$createElement("div", {
                            staticClass: "v-progress-circular__info"
                        }, this.$slots.default)
                    }
                },
                render: function (t) {
                    return t("div", this.setTextColor(this.color, {
                        staticClass: "v-progress-circular",
                        attrs: {
                            role: "progressbar",
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": this.indeterminate ? void 0 : this.normalizedValue
                        },
                        class: this.classes,
                        style: this.styles,
                        on: this.$listeners
                    }), [this.genSvg(), this.genInfo()])
                }
            })),
            Nt = jt;

        function Ft(t, e) {
            return function () {
                return y("The " + t + " component must be used inside a " + e)
            }
        }

        function zt(t, e, i) {
            var n, s = e && i ? {
                register: Ft(e, i),
                unregister: Ft(e, i)
            } : null;
            return a.a.extend({
                name: "registrable-inject",
                inject: (n = {}, n[t] = {
                    default: s
                }, n)
            })
        }

        function Wt(t, e) {
            return void 0 === e && (e = !1), a.a.extend({
                name: "registrable-provide",
                methods: e ? {} : {
                    register: null,
                    unregister: null
                },
                provide: function () {
                    var i;
                    return (i = {})[t] = e ? this : {
                        register: this.register,
                        unregister: this.unregister
                    }, i
                }
            })
        }

        function Rt(t, e, i) {
            return zt(t, e, i).extend({
                name: "groupable",
                props: {
                    activeClass: {
                        type: String,
                        default: function () {
                            if (this[t]) return this[t].activeClass
                        }
                    },
                    disabled: Boolean
                },
                data: function () {
                    return {
                        isActive: !1
                    }
                },
                computed: {
                    groupClasses: function () {
                        var t;
                        return this.activeClass ? ((t = {})[this.activeClass] = this.isActive, t) : {}
                    }
                },
                created: function () {
                    this[t] && this[t].register(this)
                },
                beforeDestroy: function () {
                    this[t] && this[t].unregister(this)
                },
                methods: {
                    toggle: function () {
                        this.$emit("change")
                    }
                }
            })
        }
        Rt("itemGroup"), i(17);

        function Yt(t, e) {
            t.style.transform = e, t.style.webkitTransform = e
        }

        function Gt(t, e) {
            t.style.opacity = e.toString()
        }

        function Ut(t) {
            return "TouchEvent" === t.constructor.name
        }
        var qt = {
            show: function (t, e, i) {
                if (void 0 === i && (i = {}), e._ripple && e._ripple.enabled) {
                    var n = document.createElement("span"),
                        s = document.createElement("span");
                    n.appendChild(s), n.className = "v-ripple__container", i.class && (n.className += " " + i.class);
                    var r = function (t, e, i) {
                            void 0 === i && (i = {});
                            var n = e.getBoundingClientRect(),
                                s = Ut(t) ? t.touches[t.touches.length - 1] : t,
                                r = s.clientX - n.left,
                                o = s.clientY - n.top,
                                a = 0,
                                l = .3;
                            e._ripple && e._ripple.circle ? (l = .15, a = e.clientWidth / 2, a = i.center ? a : a + Math.sqrt(Math.pow(r - a, 2) + Math.pow(o - a, 2)) / 4) : a = Math.sqrt(Math.pow(e.clientWidth, 2) + Math.pow(e.clientHeight, 2)) / 2;
                            var u = (e.clientWidth - 2 * a) / 2 + "px",
                                c = (e.clientHeight - 2 * a) / 2 + "px";
                            return {
                                radius: a,
                                scale: l,
                                x: i.center ? u : r - a + "px",
                                y: i.center ? c : o - a + "px",
                                centerX: u,
                                centerY: c
                            }
                        }(t, e, i),
                        o = r.radius,
                        a = r.scale,
                        l = r.x,
                        u = r.y,
                        c = r.centerX,
                        h = r.centerY,
                        d = 2 * o + "px";
                    s.className = "v-ripple__animation", s.style.width = d, s.style.height = d, e.appendChild(n);
                    var p = window.getComputedStyle(e);
                    p && "static" === p.position && (e.style.position = "relative", e.dataset.previousPosition = "static"), s.classList.add("v-ripple__animation--enter"), s.classList.add("v-ripple__animation--visible"), Yt(s, "translate(" + l + ", " + u + ") scale3d(" + a + "," + a + "," + a + ")"), Gt(s, 0), s.dataset.activated = String(performance.now()), setTimeout(function () {
                        s.classList.remove("v-ripple__animation--enter"), s.classList.add("v-ripple__animation--in"), Yt(s, "translate(" + c + ", " + h + ") scale3d(1,1,1)"), Gt(s, .25)
                    }, 0)
                }
            },
            hide: function (t) {
                if (t && t._ripple && t._ripple.enabled) {
                    var e = t.getElementsByClassName("v-ripple__animation");
                    if (0 !== e.length) {
                        var i = e[e.length - 1];
                        if (!i.dataset.isHiding) {
                            i.dataset.isHiding = "true";
                            var n = performance.now() - Number(i.dataset.activated),
                                s = Math.max(250 - n, 0);
                            setTimeout(function () {
                                i.classList.remove("v-ripple__animation--in"), i.classList.add("v-ripple__animation--out"), Gt(i, 0), setTimeout(function () {
                                    1 === t.getElementsByClassName("v-ripple__animation").length && t.dataset.previousPosition && (t.style.position = t.dataset.previousPosition, delete t.dataset.previousPosition), i.parentNode && t.removeChild(i.parentNode)
                                }, 300)
                            }, s)
                        }
                    }
                }
            }
        };

        function Xt(t) {
            return void 0 === t || !!t
        }

        function Zt(t) {
            var e = {},
                i = t.currentTarget;
            if (i && i._ripple && !i._ripple.touched) {
                if (Ut(t)) i._ripple.touched = !0, i._ripple.isTouch = !0;
                else if (i._ripple.isTouch) return;
                e.center = i._ripple.centered, i._ripple.class && (e.class = i._ripple.class), qt.show(t, i, e)
            }
        }

        function Kt(t) {
            var e = t.currentTarget;
            e && (window.setTimeout(function () {
                e._ripple && (e._ripple.touched = !1)
            }), qt.hide(e))
        }

        function Jt(t, e, i) {
            var n = Xt(e.value);
            n || qt.hide(t), t._ripple = t._ripple || {}, t._ripple.enabled = n;
            var s = e.value || {};
            s.center && (t._ripple.centered = !0), s.class && (t._ripple.class = e.value.class), s.circle && (t._ripple.circle = s.circle), n && !i ? (t.addEventListener("touchstart", Zt, {
                passive: !0
            }), t.addEventListener("touchend", Kt, {
                passive: !0
            }), t.addEventListener("touchcancel", Kt), t.addEventListener("mousedown", Zt), t.addEventListener("mouseup", Kt), t.addEventListener("mouseleave", Kt), t.addEventListener("dragstart", Kt, {
                passive: !0
            })) : !n && i && Qt(t)
        }

        function Qt(t) {
            t.removeEventListener("mousedown", Zt), t.removeEventListener("touchstart", Kt), t.removeEventListener("touchend", Kt), t.removeEventListener("touchcancel", Kt), t.removeEventListener("mouseup", Kt), t.removeEventListener("mouseleave", Kt), t.removeEventListener("dragstart", Kt)
        }
        var te = {
                bind: function (t, e, i) {
                    Jt(t, e, !1)
                },
                unbind: function (t) {
                    delete t._ripple, Qt(t)
                },
                update: function (t, e) {
                    e.value !== e.oldValue && Jt(t, e, Xt(e.oldValue))
                }
            },
            ee = te,
            ie = function () {
                return (ie = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            ne = a.a.extend({
                name: "routable",
                directives: {
                    Ripple: ee
                },
                props: {
                    activeClass: String,
                    append: Boolean,
                    disabled: Boolean,
                    exact: {
                        type: Boolean,
                        default: void 0
                    },
                    exactActiveClass: String,
                    link: Boolean,
                    href: [String, Object],
                    to: [String, Object],
                    nuxt: Boolean,
                    replace: Boolean,
                    ripple: {
                        type: [Boolean, Object],
                        default: null
                    },
                    tag: String,
                    target: String
                },
                data: function () {
                    return {
                        isActive: !1,
                        proxyClass: ""
                    }
                },
                computed: {
                    classes: function () {
                        var t = {};
                        return this.to ? t : (this.activeClass && (t[this.activeClass] = this.isActive), this.proxyClass && (t[this.proxyClass] = this.isActive), t)
                    },
                    computedRipple: function () {
                        return null != this.ripple ? this.ripple : !this.disabled && this.isClickable
                    },
                    isClickable: function () {
                        return !this.disabled && Boolean(this.isLink || this.$listeners.click || this.$listeners["!click"] || this.$attrs.tabindex)
                    },
                    isLink: function () {
                        return this.to || this.href || this.link
                    },
                    styles: function () {
                        return {}
                    }
                },
                watch: {
                    $route: "onRouteChange"
                },
                methods: {
                    click: function (t) {
                        this.$emit("click", t)
                    },
                    generateRouteLink: function () {
                        var t, e, i = this.exact,
                            n = ((t = {
                                attrs: {
                                    tabindex: "tabindex" in this.$attrs ? this.$attrs.tabindex : void 0
                                },
                                class: this.classes,
                                style: this.styles,
                                props: {},
                                directives: [{
                                    name: "ripple",
                                    value: this.computedRipple
                                }]
                            })[this.to ? "nativeOn" : "on"] = ie({}, this.$listeners, {
                                click: this.click
                            }), t.ref = "link", t);
                        if (void 0 === this.exact && (i = "/" === this.to || this.to === Object(this.to) && "/" === this.to.path), this.to) {
                            var s = this.activeClass,
                                r = this.exactActiveClass || s;
                            this.proxyClass && (s = (s + " " + this.proxyClass).trim(), r = (r + " " + this.proxyClass).trim()), e = this.nuxt ? "nuxt-link" : "router-link", Object.assign(n.props, {
                                to: this.to,
                                exact: i,
                                activeClass: s,
                                exactActiveClass: r,
                                append: this.append,
                                replace: this.replace
                            })
                        } else "a" === (e = (this.href ? "a" : this.tag) || "div") && this.href && (n.attrs.href = this.href);
                        return this.target && (n.attrs.target = this.target), {
                            tag: e,
                            data: n
                        }
                    },
                    onRouteChange: function () {
                        var t = this;
                        if (this.to && this.$refs.link && this.$route) {
                            var e = "_vnode.data.class." + (this.activeClass + " " + (this.proxyClass || "")).trim();
                            this.$nextTick(function () {
                                H(t.$refs.link, e) && t.toggle()
                            })
                        }
                    },
                    toggle: function () {}
                }
            });

        function se(t) {
            return (se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var re = function () {
                return (re = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            oe = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            ae = d(Ht, ne, kt, Mt, Rt("btnToggle"), _t("inputValue")).extend().extend({
                name: "v-btn",
                props: {
                    activeClass: {
                        type: String,
                        default: function () {
                            return this.btnToggle ? this.btnToggle.activeClass : ""
                        }
                    },
                    block: Boolean,
                    depressed: Boolean,
                    fab: Boolean,
                    icon: Boolean,
                    loading: Boolean,
                    outlined: Boolean,
                    retainFocusOnClick: Boolean,
                    rounded: Boolean,
                    tag: {
                        type: String,
                        default: "button"
                    },
                    text: Boolean,
                    type: {
                        type: String,
                        default: "button"
                    },
                    value: null
                },
                data: function () {
                    return {
                        proxyClass: "v-btn--active"
                    }
                },
                computed: {
                    classes: function () {
                        return re({
                            "v-btn": !0
                        }, ne.options.computed.classes.call(this), {
                            "v-btn--absolute": this.absolute,
                            "v-btn--block": this.block,
                            "v-btn--bottom": this.bottom,
                            "v-btn--contained": this.contained,
                            "v-btn--depressed": this.depressed || this.outlined,
                            "v-btn--disabled": this.disabled,
                            "v-btn--fab": this.fab,
                            "v-btn--fixed": this.fixed,
                            "v-btn--flat": this.isFlat,
                            "v-btn--icon": this.icon,
                            "v-btn--left": this.left,
                            "v-btn--loading": this.loading,
                            "v-btn--outlined": this.outlined,
                            "v-btn--right": this.right,
                            "v-btn--round": this.isRound,
                            "v-btn--rounded": this.rounded,
                            "v-btn--router": this.to,
                            "v-btn--text": this.text,
                            "v-btn--tile": this.tile,
                            "v-btn--top": this.top
                        }, this.themeClasses, this.groupClasses, this.elevationClasses, this.sizeableClasses)
                    },
                    contained: function () {
                        return Boolean(!this.isFlat && !this.depressed && !this.elevation)
                    },
                    computedRipple: function () {
                        var t = !this.icon && !this.fab || {
                            circle: !0
                        };
                        return !this.disabled && (null != this.ripple ? this.ripple : t)
                    },
                    isFlat: function () {
                        return Boolean(this.icon || this.text || this.outlined)
                    },
                    isRound: function () {
                        return Boolean(this.icon || this.fab)
                    },
                    styles: function () {
                        return re({}, this.measurableStyles)
                    }
                },
                created: function () {
                    var t = this;
                    [
                        ["flat", "text"],
                        ["outline", "outlined"],
                        ["round", "rounded"]
                    ].forEach(function (e) {
                        var i = oe(e, 2),
                            n = i[0],
                            s = i[1];
                        t.$attrs.hasOwnProperty(n) && S(n, s, t)
                    })
                },
                methods: {
                    click: function (t) {
                        !this.retainFocusOnClick && !this.fab && t.detail && this.$el.blur(), this.$emit("click", t), this.btnToggle && this.toggle()
                    },
                    genContent: function () {
                        return this.$createElement("span", {
                            staticClass: "v-btn__content"
                        }, this.$slots.default)
                    },
                    genLoader: function () {
                        return this.$createElement("span", {
                            class: "v-btn__loader"
                        }, this.$slots.loader || [this.$createElement(Nt, {
                            props: {
                                indeterminate: !0,
                                size: 23,
                                width: 2
                            }
                        })])
                    }
                },
                render: function (t) {
                    var e = [this.genContent(), this.loading && this.genLoader()],
                        i = this.isFlat ? this.setTextColor : this.setBackgroundColor,
                        n = this.generateRouteLink(),
                        s = n.tag,
                        r = n.data;
                    return "button" === s && (r.attrs.type = this.type, r.attrs.disabled = this.disabled), r.attrs.value = ["string", "number"].includes(se(this.value)) ? this.value : JSON.stringify(this.value), t(s, this.disabled ? r : i(this.color, r), e)
                }
            }),
            le = function () {
                return (le = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            ue = a.a.extend({
                name: "v-app-bar-nav-icon",
                functional: !0,
                render: function (t, e) {
                    var i = e.slots,
                        n = e.listeners,
                        s = e.props,
                        r = e.data,
                        o = Object.assign(r, {
                            staticClass: ("v-app-bar__nav-icon " + (r.staticClass || "")).trim(),
                            props: le({}, s, {
                                icon: !0
                            }),
                            on: n
                        }),
                        a = i().default;
                    return t(ae, o, a || [t(Lt, "$menu")])
                }
            }),
            ce = (i(20), ae),
            he = a.a.extend({
                name: "transitionable",
                props: {
                    mode: String,
                    origin: String,
                    transition: String
                }
            }),
            de = function () {
                return (de = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            pe = d(Ht, Bt, he).extend({
                name: "v-alert",
                props: {
                    border: {
                        type: String,
                        validator: function (t) {
                            return ["top", "right", "bottom", "left"].includes(t)
                        }
                    },
                    closeLabel: {
                        type: String,
                        default: "$vuetify.close"
                    },
                    coloredBorder: Boolean,
                    dense: Boolean,
                    dismissible: Boolean,
                    icon: {
                        default: "",
                        type: [Boolean, String],
                        validator: function (t) {
                            return "string" == typeof t || !1 === t
                        }
                    },
                    outlined: Boolean,
                    prominent: Boolean,
                    text: Boolean,
                    type: {
                        type: String,
                        validator: function (t) {
                            return ["info", "error", "success", "warning"].includes(t)
                        }
                    },
                    value: {
                        type: Boolean,
                        default: !0
                    }
                },
                computed: {
                    __cachedBorder: function () {
                        var t;
                        if (!this.border) return null;
                        var e = {
                            staticClass: "v-alert__border",
                            class: (t = {}, t["v-alert__border--" + this.border] = !0, t)
                        };
                        return this.coloredBorder && ((e = this.setBackgroundColor(this.computedColor, e)).class["v-alert__border--has-color"] = !0), this.$createElement("div", e)
                    },
                    __cachedDismissible: function () {
                        var t = this;
                        if (!this.dismissible) return null;
                        var e = this.iconColor;
                        return this.$createElement(ce, {
                            staticClass: "v-alert__dismissible",
                            props: {
                                color: e,
                                icon: !0,
                                small: !0
                            },
                            attrs: {
                                "aria-label": this.$vuetify.lang.t(this.closeLabel)
                            },
                            on: {
                                click: function () {
                                    return t.isActive = !1
                                }
                            }
                        }, [this.$createElement(Lt, {
                            props: {
                                color: e
                            }
                        }, "$cancel")])
                    },
                    __cachedIcon: function () {
                        return this.computedIcon ? this.$createElement(Lt, {
                            staticClass: "v-alert__icon",
                            props: {
                                color: this.iconColor
                            }
                        }, this.computedIcon) : null
                    },
                    classes: function () {
                        var t = de({}, Ht.options.computed.classes.call(this), {
                            "v-alert--border": Boolean(this.border),
                            "v-alert--dense": this.dense,
                            "v-alert--outlined": this.outlined,
                            "v-alert--prominent": this.prominent,
                            "v-alert--text": this.text
                        });
                        return this.border && (t["v-alert--border-" + this.border] = !0), t
                    },
                    computedColor: function () {
                        return this.color || this.type
                    },
                    computedIcon: function () {
                        return !1 !== this.icon && ("string" == typeof this.icon && this.icon ? this.icon : !!["error", "info", "success", "warning"].includes(this.type) && "$" + this.type)
                    },
                    hasColoredIcon: function () {
                        return this.hasText || Boolean(this.border) && this.coloredBorder
                    },
                    hasText: function () {
                        return this.text || this.outlined
                    },
                    iconColor: function () {
                        return this.hasColoredIcon ? this.computedColor : void 0
                    },
                    isDark: function () {
                        return !(!this.type || this.coloredBorder || this.outlined) || h.options.computed.isDark.call(this)
                    }
                },
                created: function () {
                    this.$attrs.hasOwnProperty("outline") && S("outline", "outlined", this)
                },
                methods: {
                    genWrapper: function () {
                        var t = [this.$slots.prepend || this.__cachedIcon, this.genContent(), this.__cachedBorder, this.$slots.append, this.$scopedSlots.close ? this.$scopedSlots.close({
                            toggle: this.toggle
                        }) : this.__cachedDismissible];
                        return this.$createElement("div", {
                            staticClass: "v-alert__wrapper"
                        }, t)
                    },
                    genContent: function () {
                        return this.$createElement("div", {
                            staticClass: "v-alert__content"
                        }, this.$slots.default)
                    },
                    genAlert: function () {
                        var t = {
                            staticClass: "v-alert",
                            attrs: {
                                role: "alert"
                            },
                            class: this.classes,
                            style: this.styles,
                            directives: [{
                                name: "show",
                                value: this.isActive
                            }]
                        };
                        this.coloredBorder || (t = (this.hasText ? this.setTextColor : this.setBackgroundColor)(this.computedColor, t));
                        return this.$createElement("div", t, [this.genWrapper()])
                    },
                    toggle: function () {
                        this.isActive = !this.isActive
                    }
                },
                render: function (t) {
                    var e = this.genAlert();
                    return this.transition ? t("transition", {
                        props: {
                            name: this.transition,
                            origin: this.origin,
                            mode: this.mode
                        }
                    }, [e]) : e
                }
            }),
            fe = (i(6), i(7), i(21), i(36), function () {
                return (fe = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            ve = function (t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    i = 0;
                return e ? e.call(t) : {
                    next: function () {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                }
            },
            me = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            ge = {
                styleList: /;(?![^(]*\))/g,
                styleProp: /:(.*)/
            };

        function ye(t) {
            var e, i, n = {};
            try {
                for (var s = ve(t.split(ge.styleList)), r = s.next(); !r.done; r = s.next()) {
                    var o = r.value,
                        a = me(o.split(ge.styleProp), 2),
                        l = a[0],
                        u = a[1];
                    (l = l.trim()) && ("string" == typeof u && (u = u.trim()), n[Z(l)] = u)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (i = s.return) && i.call(s)
                } finally {
                    if (e) throw e.error
                }
            }
            return n
        }

        function be() {
            for (var t, e, i, n, s, r, o = {}, a = arguments.length; a--;) try {
                for (var l = (t = void 0, ve(Object.keys(arguments[a]))), u = l.next(); !u.done; u = l.next()) switch (s = u.value) {
                    case "class":
                    case "style":
                    case "directives":
                        if (Array.isArray(o[s]) || (o[s] = []), "style" === s) {
                            var c = void 0;
                            c = Array.isArray(arguments[a].style) ? arguments[a].style : [arguments[a].style];
                            for (var h = 0; h < c.length; h++) {
                                var d = c[h];
                                "string" == typeof d && (c[h] = ye(d))
                            }
                            arguments[a].style = c
                        }
                        o[s] = o[s].concat(arguments[a][s]);
                        break;
                    case "staticClass":
                        if (!arguments[a][s]) break;
                        void 0 === o[s] && (o[s] = ""), o[s] && (o[s] += " "), o[s] += arguments[a][s].trim();
                        break;
                    case "on":
                    case "nativeOn":
                        o[s] || (o[s] = {});
                        var p = o[s];
                        try {
                            for (var f = (i = void 0, ve(Object.keys(arguments[a][s] || {}))), v = f.next(); !v.done; v = f.next()) p[r = v.value] ? p[r] = Array().concat(p[r], arguments[a][s][r]) : p[r] = arguments[a][s][r]
                        } catch (t) {
                            i = {
                                error: t
                            }
                        } finally {
                            try {
                                v && !v.done && (n = f.return) && n.call(f)
                            } finally {
                                if (i) throw i.error
                            }
                        }
                        break;
                    case "attrs":
                    case "props":
                    case "domProps":
                    case "scopedSlots":
                    case "staticStyle":
                    case "hook":
                    case "transition":
                        o[s] || (o[s] = {}), o[s] = fe({}, arguments[a][s], o[s]);
                        break;
                    case "slot":
                    case "key":
                    case "ref":
                    case "tag":
                    case "show":
                    case "keepAlive":
                    default:
                        o[s] || (o[s] = arguments[a][s])
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    u && !u.done && (e = l.return) && e.call(l)
                } finally {
                    if (t) throw t.error
                }
            }
            return o
        }
        var Se = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            xe = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Se(arguments[e]));
                return t
            };

        function we(t) {
            var e;
            void 0 === t && (t = []);
            for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
            return (e = Array()).concat.apply(e, xe([t], i))
        }

        function Ce(t, e, i) {
            return void 0 === e && (e = "top center 0"), {
                name: t,
                functional: !0,
                props: {
                    group: {
                        type: Boolean,
                        default: !1
                    },
                    hideOnLeave: {
                        type: Boolean,
                        default: !1
                    },
                    leaveAbsolute: {
                        type: Boolean,
                        default: !1
                    },
                    mode: {
                        type: String,
                        default: i
                    },
                    origin: {
                        type: String,
                        default: e
                    }
                },
                render: function (e, i) {
                    var n = "transition" + (i.props.group ? "-group" : ""),
                        s = {
                            props: {
                                name: t,
                                mode: i.props.mode
                            },
                            on: {
                                beforeEnter: function (t) {
                                    t.style.transformOrigin = i.props.origin, t.style.webkitTransformOrigin = i.props.origin
                                }
                            }
                        };
                    return i.props.leaveAbsolute && (s.on.leave = we(s.on.leave, function (t) {
                        return t.style.position = "absolute"
                    })), i.props.hideOnLeave && (s.on.leave = we(s.on.leave, function (t) {
                        return t.style.display = "none"
                    })), e(n, be(i.data, s), i.children)
                }
            }
        }

        function ke(t, e, i) {
            return void 0 === i && (i = "in-out"), {
                name: t,
                functional: !0,
                props: {
                    mode: {
                        type: String,
                        default: i
                    }
                },
                render: function (i, n) {
                    return i("transition", be(n.data, {
                        props: {
                            name: t
                        },
                        on: e
                    }), n.children)
                }
            }
        }
        var $e = function (t, e) {
                void 0 === t && (t = ""), void 0 === e && (e = !1);
                var i = e ? "width" : "height",
                    n = "offset" + K(i);
                return {
                    beforeEnter: function (t) {
                        var e;
                        t._parent = t.parentNode, t._initialStyle = ((e = {
                            transition: t.style.transition,
                            visibility: t.style.visibility,
                            overflow: t.style.overflow
                        })[i] = t.style[i], e)
                    },
                    enter: function (e) {
                        var s = e._initialStyle,
                            r = e[n] + "px";
                        e.style.setProperty("transition", "none", "important"), e.style.visibility = "hidden", e.style.visibility = s.visibility, e.style.overflow = "hidden", e.style[i] = "0", e.offsetHeight, e.style.transition = s.transition, t && e._parent && e._parent.classList.add(t), requestAnimationFrame(function () {
                            e.style[i] = r
                        })
                    },
                    afterEnter: r,
                    enterCancelled: r,
                    leave: function (t) {
                        var e;
                        t._initialStyle = ((e = {
                            transition: "",
                            visibility: "",
                            overflow: t.style.overflow
                        })[i] = t.style[i], e), t.style.overflow = "hidden", t.style[i] = t[n] + "px", t.offsetHeight, requestAnimationFrame(function () {
                            return t.style[i] = "0"
                        })
                    },
                    afterLeave: s,
                    leaveCancelled: s
                };

                function s(e) {
                    t && e._parent && e._parent.classList.remove(t), r(e)
                }

                function r(t) {
                    var e = t._initialStyle[i];
                    t.style.overflow = t._initialStyle.overflow, null != e && (t.style[i] = e), delete t._initialStyle
                }
            },
            Ie = Ce("carousel-transition"),
            Oe = Ce("carousel-reverse-transition"),
            _e = Ce("tab-transition"),
            Te = Ce("tab-reverse-transition"),
            Be = Ce("menu-transition"),
            Ae = Ce("fab-transition", "center center", "out-in"),
            Ee = Ce("dialog-transition"),
            Me = Ce("dialog-bottom-transition"),
            De = Ce("fade-transition"),
            Ve = Ce("scale-transition"),
            Pe = Ce("scroll-x-transition"),
            Le = Ce("scroll-x-reverse-transition"),
            He = Ce("scroll-y-transition"),
            je = Ce("scroll-y-reverse-transition"),
            Ne = Ce("slide-x-transition"),
            Fe = Ce("slide-x-reverse-transition"),
            ze = Ce("slide-y-transition"),
            We = Ce("slide-y-reverse-transition"),
            Re = ke("expand-transition", $e()),
            Ye = ke("expand-x-transition", $e("", !0)),
            Ge = function () {
                return (Ge = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Ue = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            qe = d(_, Mt, ne, h, Rt("chipGroup"), _t("inputValue")).extend({
                name: "v-chip",
                props: {
                    active: {
                        type: Boolean,
                        default: !0
                    },
                    activeClass: {
                        type: String,
                        default: function () {
                            return this.chipGroup ? this.chipGroup.activeClass : ""
                        }
                    },
                    close: Boolean,
                    closeIcon: {
                        type: String,
                        default: "$delete"
                    },
                    disabled: Boolean,
                    draggable: Boolean,
                    filter: Boolean,
                    filterIcon: {
                        type: String,
                        default: "$complete"
                    },
                    label: Boolean,
                    link: Boolean,
                    outlined: Boolean,
                    pill: Boolean,
                    tag: {
                        type: String,
                        default: "span"
                    },
                    textColor: String,
                    value: null
                },
                data: function () {
                    return {
                        proxyClass: "v-chip--active"
                    }
                },
                computed: {
                    classes: function () {
                        return Ge({
                            "v-chip": !0
                        }, ne.options.computed.classes.call(this), {
                            "v-chip--clickable": this.isClickable,
                            "v-chip--disabled": this.disabled,
                            "v-chip--draggable": this.draggable,
                            "v-chip--label": this.label,
                            "v-chip--link": this.isLink,
                            "v-chip--no-color": !this.color,
                            "v-chip--outlined": this.outlined,
                            "v-chip--pill": this.pill,
                            "v-chip--removable": this.hasClose
                        }, this.themeClasses, this.sizeableClasses, this.groupClasses)
                    },
                    hasClose: function () {
                        return Boolean(this.close)
                    },
                    isClickable: function () {
                        return Boolean(ne.options.computed.isClickable.call(this) || this.chipGroup)
                    }
                },
                created: function () {
                    var t = this;
                    [
                        ["outline", "outlined"],
                        ["selected", "input-value"],
                        ["value", "active"],
                        ["@input", "@active.sync"]
                    ].forEach(function (e) {
                        var i = Ue(e, 2),
                            n = i[0],
                            s = i[1];
                        t.$attrs.hasOwnProperty(n) && S(n, s, t)
                    })
                },
                methods: {
                    click: function (t) {
                        this.$emit("click", t), this.chipGroup && this.toggle()
                    },
                    genFilter: function () {
                        var t = [];
                        return this.isActive && t.push(this.$createElement(Lt, {
                            staticClass: "v-chip__filter",
                            props: {
                                left: !0
                            }
                        }, this.filterIcon)), this.$createElement(Ye, t)
                    },
                    genClose: function () {
                        var t = this;
                        return this.$createElement(Lt, {
                            staticClass: "v-chip__close",
                            props: {
                                right: !0
                            },
                            on: {
                                click: function (e) {
                                    e.stopPropagation(), t.$emit("click:close"), t.$emit("update:active", !1)
                                }
                            }
                        }, this.closeIcon)
                    },
                    genContent: function () {
                        return this.$createElement("span", {
                            staticClass: "v-chip__content"
                        }, [this.filter && this.genFilter(), this.$slots.default, this.hasClose && this.genClose()])
                    }
                },
                render: function (t) {
                    var e = [this.genContent()],
                        i = this.generateRouteLink(),
                        n = i.tag,
                        s = i.data;
                    s.attrs = Ge({}, s.attrs, {
                        draggable: this.draggable ? "true" : void 0,
                        tabindex: this.chipGroup && !this.disabled ? 0 : s.attrs.tabindex
                    }), s.directives.push({
                        name: "show",
                        value: this.active
                    }), s = this.setBackgroundColor(this.color, s);
                    var r = this.textColor || this.outlined && this.color;
                    return t(n, this.setTextColor(r, s), e)
                }
            }),
            Xe = qe,
            Ze = (i(37), a.a.extend().extend({
                name: "delayable",
                props: {
                    openDelay: {
                        type: [Number, String],
                        default: 0
                    },
                    closeDelay: {
                        type: [Number, String],
                        default: 0
                    }
                },
                data: function () {
                    return {
                        openTimeout: void 0,
                        closeTimeout: void 0
                    }
                },
                methods: {
                    clearDelay: function () {
                        clearTimeout(this.openTimeout), clearTimeout(this.closeTimeout)
                    },
                    runDelay: function (t, e) {
                        var i = this;
                        this.clearDelay();
                        var n = parseInt(this[t + "Delay"], 10);
                        this[t + "Timeout"] = setTimeout(e || function () {
                            i.isActive = {
                                open: !0,
                                close: !1
                            } [t]
                        }, n)
                    }
                }
            })),
            Ke = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            Je = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Ke(arguments[e]));
                return t
            };
        var Qe = d().extend({
                name: "dependent",
                data: function () {
                    return {
                        closeDependents: !0,
                        isActive: !1,
                        isDependent: !0
                    }
                },
                watch: {
                    isActive: function (t) {
                        if (!t)
                            for (var e = this.getOpenDependents(), i = 0; i < e.length; i++) e[i].isActive = !1
                    }
                },
                methods: {
                    getOpenDependents: function () {
                        return this.closeDependents ? function t(e) {
                            for (var i = [], n = 0; n < e.length; n++) {
                                var s = e[n];
                                s.isActive && s.isDependent ? i.push(s) : i.push.apply(i, Je(t(s.$children)))
                            }
                            return i
                        }(this.$children) : []
                    },
                    getOpenDependentElements: function () {
                        for (var t = [], e = this.getOpenDependents(), i = 0; i < e.length; i++) t.push.apply(t, Je(e[i].getClickableDependentElements()));
                        return t
                    },
                    getClickableDependentElements: function () {
                        var t = [this.$el];
                        return this.$refs.content && t.push(this.$refs.content), this.overlay && t.push(this.overlay.$el), t.push.apply(t, Je(this.getOpenDependentElements())), t
                    }
                }
            }),
            ti = a.a.extend().extend({
                name: "bootable",
                props: {
                    eager: Boolean
                },
                data: function () {
                    return {
                        isBooted: !1
                    }
                },
                computed: {
                    hasContent: function () {
                        return this.isBooted || this.eager || this.isActive
                    }
                },
                watch: {
                    isActive: function () {
                        this.isBooted = !0
                    }
                },
                created: function () {
                    "lazy" in this.$attrs && x("lazy", this)
                },
                methods: {
                    showLazyContent: function (t) {
                        return this.hasContent ? t : void 0
                    }
                }
            });

        function ei(t) {
            return (ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var ii = d(ti).extend({
                name: "detachable",
                props: {
                    attach: {
                        default: !1,
                        validator: function (t) {
                            var e = ei(t);
                            return "boolean" === e || "string" === e || t.nodeType === Node.ELEMENT_NODE
                        }
                    },
                    contentClass: {
                        type: String,
                        default: ""
                    }
                },
                data: function () {
                    return {
                        activatorNode: null,
                        hasDetached: !1
                    }
                },
                watch: {
                    attach: function () {
                        this.hasDetached = !1, this.initDetach()
                    },
                    hasContent: "initDetach"
                },
                beforeMount: function () {
                    var t = this;
                    this.$nextTick(function () {
                        t.activatorNode && (Array.isArray(t.activatorNode) ? t.activatorNode : [t.activatorNode]).forEach(function (e) {
                            if (e.elm && t.$el.parentNode) {
                                var i = t.$el === t.$el.parentNode.firstChild ? t.$el : t.$el.nextSibling;
                                t.$el.parentNode.insertBefore(e.elm, i)
                            }
                        })
                    })
                },
                mounted: function () {
                    this.hasContent && this.initDetach()
                },
                deactivated: function () {
                    this.isActive = !1
                },
                beforeDestroy: function () {
                    try {
                        if (this.$refs.content && this.$refs.content.parentNode && this.$refs.content.parentNode.removeChild(this.$refs.content), this.activatorNode)(Array.isArray(this.activatorNode) ? this.activatorNode : [this.activatorNode]).forEach(function (t) {
                            t.elm && t.elm.parentNode && t.elm.parentNode.removeChild(t.elm)
                        })
                    } catch (t) {
                        console.log(t)
                    }
                },
                methods: {
                    getScopeIdAttrs: function () {
                        var t, e = H(this.$vnode, "context.$options._scopeId");
                        return e && ((t = {})[e] = "", t)
                    },
                    initDetach: function () {
                        var t;
                        this._isDestroyed || !this.$refs.content || this.hasDetached || "" === this.attach || !0 === this.attach || "attach" === this.attach || ((t = !1 === this.attach ? document.querySelector("[data-app]") : "string" == typeof this.attach ? document.querySelector(this.attach) : this.attach) ? (t.insertBefore(this.$refs.content, t.firstChild), this.hasDetached = !0) : y("Unable to locate target " + (this.attach || "[data-app]"), this))
                    }
                }
            }),
            ni = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            si = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(ni(arguments[e]));
                return t
            },
            ri = a.a.extend().extend({
                name: "stackable",
                data: function () {
                    return {
                        stackElement: null,
                        stackExclude: null,
                        stackMinZIndex: 0,
                        isActive: !1
                    }
                },
                computed: {
                    activeZIndex: function () {
                        if ("undefined" == typeof window) return 0;
                        var t = this.stackElement || this.$refs.content,
                            e = this.isActive ? this.getMaxZIndex(this.stackExclude || [t]) + 2 : F(t);
                        return null == e ? e : parseInt(e)
                    }
                },
                methods: {
                    getMaxZIndex: function (t) {
                        void 0 === t && (t = []);
                        for (var e = this.$el, i = [this.stackMinZIndex, F(e)], n = si(document.getElementsByClassName("v-menu__content--active"), document.getElementsByClassName("v-dialog__content--active")), s = 0; s < n.length; s++) t.includes(n[s]) || i.push(F(n[s]));
                        return Math.max.apply(Math, si(i))
                    }
                }
            });

        function oi(t) {
            return (oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var ai = function (t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    i = 0;
                return e ? e.call(t) : {
                    next: function () {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                }
            },
            li = d(Ze, Bt).extend({
                name: "activatable",
                props: {
                    activator: {
                        default: null,
                        validator: function (t) {
                            return ["string", "object"].includes(oi(t))
                        }
                    },
                    disabled: Boolean,
                    internalActivator: Boolean,
                    openOnHover: Boolean
                },
                data: function () {
                    return {
                        activatorElement: null,
                        activatorNode: [],
                        events: ["click", "mouseenter", "mouseleave"],
                        listeners: {}
                    }
                },
                watch: {
                    activator: "resetActivator",
                    openOnHover: "resetActivator"
                },
                mounted: function () {
                    var t = tt(this, "activator", !0);
                    t && ["v-slot", "normal"].includes(t) && b('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'', this), this.addActivatorEvents()
                },
                beforeDestroy: function () {
                    this.removeActivatorEvents()
                },
                methods: {
                    addActivatorEvents: function () {
                        var t, e;
                        if (this.activator && !this.disabled && this.getActivator()) {
                            this.listeners = this.genActivatorListeners();
                            var i = Object.keys(this.listeners);
                            try {
                                for (var n = ai(i), s = n.next(); !s.done; s = n.next()) {
                                    var r = s.value;
                                    this.getActivator().addEventListener(r, this.listeners[r])
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (e = n.return) && e.call(n)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }
                    },
                    genActivator: function () {
                        var t = it(this, "activator", Object.assign(this.getValueProxy(), {
                            on: this.genActivatorListeners(),
                            attrs: this.genActivatorAttributes()
                        })) || [];
                        return this.activatorNode = t, t
                    },
                    genActivatorAttributes: function () {
                        return {
                            role: "button",
                            "aria-haspopup": !0,
                            "aria-expanded": String(this.isActive)
                        }
                    },
                    genActivatorListeners: function () {
                        var t = this;
                        if (this.disabled) return {};
                        var e = {};
                        return this.openOnHover ? (e.mouseenter = function (e) {
                            t.getActivator(e), t.runDelay("open")
                        }, e.mouseleave = function (e) {
                            t.getActivator(e), t.runDelay("close")
                        }) : e.click = function (e) {
                            var i = t.getActivator(e);
                            i && i.focus(), t.isActive = !t.isActive
                        }, e
                    },
                    getActivator: function (t) {
                        if (this.activatorElement) return this.activatorElement;
                        var e = null;
                        if (this.activator) {
                            var i = this.internalActivator ? this.$el : document;
                            e = "string" == typeof this.activator ? i.querySelector(this.activator) : this.activator.$el ? this.activator.$el : this.activator
                        } else if (1 === this.activatorNode.length || this.activatorNode.length && !t) {
                            var n = this.activatorNode[0].componentInstance;
                            e = n && n.$options.mixins && n.$options.mixins.some(function (t) {
                                return t.options && ["activatable", "menuable"].includes(t.options.name)
                            }) ? n.getActivator() : this.activatorNode[0].elm
                        } else t && (e = t.currentTarget || t.target);
                        return this.activatorElement = e, this.activatorElement
                    },
                    getContentSlot: function () {
                        return it(this, "default", this.getValueProxy(), !0)
                    },
                    getValueProxy: function () {
                        var t = this;
                        return {
                            get value() {
                                return t.isActive
                            },
                            set value(e) {
                                t.isActive = e
                            }
                        }
                    },
                    removeActivatorEvents: function () {
                        var t, e;
                        if (this.activator && this.activatorElement) {
                            var i = Object.keys(this.listeners);
                            try {
                                for (var n = ai(i), s = n.next(); !s.done; s = n.next()) {
                                    var r = s.value;
                                    this.activatorElement.removeEventListener(r, this.listeners[r])
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (e = n.return) && e.call(n)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            this.listeners = {}
                        }
                    },
                    resetActivator: function () {
                        this.activatorElement = null, this.getActivator(), this.addActivatorEvents()
                    }
                }
            }),
            ui = d(ri, kt, li).extend().extend({
                name: "menuable",
                props: {
                    allowOverflow: Boolean,
                    light: Boolean,
                    dark: Boolean,
                    maxWidth: {
                        type: [Number, String],
                        default: "auto"
                    },
                    minWidth: [Number, String],
                    nudgeBottom: {
                        type: [Number, String],
                        default: 0
                    },
                    nudgeLeft: {
                        type: [Number, String],
                        default: 0
                    },
                    nudgeRight: {
                        type: [Number, String],
                        default: 0
                    },
                    nudgeTop: {
                        type: [Number, String],
                        default: 0
                    },
                    nudgeWidth: {
                        type: [Number, String],
                        default: 0
                    },
                    offsetOverflow: Boolean,
                    openOnClick: Boolean,
                    positionX: {
                        type: Number,
                        default: null
                    },
                    positionY: {
                        type: Number,
                        default: null
                    },
                    zIndex: {
                        type: [Number, String],
                        default: null
                    }
                },
                data: function () {
                    return {
                        absoluteX: 0,
                        absoluteY: 0,
                        activatedBy: null,
                        activatorFixed: !1,
                        dimensions: {
                            activator: {
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                width: 0,
                                height: 0,
                                offsetTop: 0,
                                scrollHeight: 0,
                                offsetLeft: 0
                            },
                            content: {
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                width: 0,
                                height: 0,
                                offsetTop: 0,
                                scrollHeight: 0
                            }
                        },
                        hasJustFocused: !1,
                        hasWindow: !1,
                        inputActivator: !1,
                        isContentActive: !1,
                        pageWidth: 0,
                        pageYOffset: 0,
                        stackClass: "v-menu__content--active",
                        stackMinZIndex: 6
                    }
                },
                computed: {
                    computedLeft: function () {
                        var t = this.dimensions.activator,
                            e = this.dimensions.content,
                            i = (!1 !== this.attach ? t.offsetLeft : t.left) || 0,
                            n = Math.max(t.width, e.width),
                            s = 0;
                        if (s += this.left ? i - (n - t.width) : i, this.offsetX) {
                            var r = isNaN(Number(this.maxWidth)) ? t.width : Math.min(t.width, Number(this.maxWidth));
                            s += this.left ? -r : t.width
                        }
                        return this.nudgeLeft && (s -= parseInt(this.nudgeLeft)), this.nudgeRight && (s += parseInt(this.nudgeRight)), s
                    },
                    computedTop: function () {
                        var t = this.dimensions.activator,
                            e = this.dimensions.content,
                            i = 0;
                        return this.top && (i += t.height - e.height), !1 !== this.attach ? i += t.offsetTop : i += t.top + this.pageYOffset, this.offsetY && (i += this.top ? -t.height : t.height), this.nudgeTop && (i -= parseInt(this.nudgeTop)), this.nudgeBottom && (i += parseInt(this.nudgeBottom)), i
                    },
                    hasActivator: function () {
                        return !!(this.$slots.activator || this.$scopedSlots.activator || this.activator || this.inputActivator)
                    }
                },
                watch: {
                    disabled: function (t) {
                        t && this.callDeactivate()
                    },
                    isActive: function (t) {
                        this.disabled || (t ? this.callActivate() : this.callDeactivate())
                    },
                    positionX: "updateDimensions",
                    positionY: "updateDimensions"
                },
                beforeMount: function () {
                    this.hasWindow = "undefined" != typeof window
                },
                methods: {
                    absolutePosition: function () {
                        return {
                            offsetTop: 0,
                            offsetLeft: 0,
                            scrollHeight: 0,
                            top: this.positionY || this.absoluteY,
                            bottom: this.positionY || this.absoluteY,
                            left: this.positionX || this.absoluteX,
                            right: this.positionX || this.absoluteX,
                            height: 0,
                            width: 0
                        }
                    },
                    activate: function () {},
                    calcLeft: function (t) {
                        return Y(!1 !== this.attach ? this.computedLeft : this.calcXOverflow(this.computedLeft, t))
                    },
                    calcTop: function () {
                        return Y(!1 !== this.attach ? this.computedTop : this.calcYOverflow(this.computedTop))
                    },
                    calcXOverflow: function (t, e) {
                        var i = t + e - this.pageWidth + 12;
                        return (t = (!this.left || this.right) && i > 0 ? Math.max(t - i, 0) : Math.max(t, 12)) + this.getOffsetLeft()
                    },
                    calcYOverflow: function (t) {
                        var e = this.getInnerHeight(),
                            i = this.pageYOffset + e,
                            n = this.dimensions.activator,
                            s = this.dimensions.content.height,
                            r = i < t + s;
                        return r && this.offsetOverflow && n.top > s ? t = this.pageYOffset + (n.top - s) : r && !this.allowOverflow ? t = i - s - 12 : t < this.pageYOffset && !this.allowOverflow && (t = this.pageYOffset + 12), t < 12 ? 12 : t
                    },
                    callActivate: function () {
                        this.hasWindow && this.activate()
                    },
                    callDeactivate: function () {
                        this.isContentActive = !1, this.deactivate()
                    },
                    checkForPageYOffset: function () {
                        this.hasWindow && (this.pageYOffset = this.activatorFixed ? 0 : this.getOffsetTop())
                    },
                    checkActivatorFixed: function () {
                        if (!1 === this.attach) {
                            for (var t = this.getActivator(); t;) {
                                if ("fixed" === window.getComputedStyle(t).position) return void(this.activatorFixed = !0);
                                t = t.offsetParent
                            }
                            this.activatorFixed = !1
                        }
                    },
                    deactivate: function () {},
                    genActivatorListeners: function () {
                        var t = this,
                            e = li.options.methods.genActivatorListeners.call(this),
                            i = e.click;
                        return e.click = function (e) {
                            t.openOnClick && i && i(e), t.absoluteX = e.clientX, t.absoluteY = e.clientY
                        }, e
                    },
                    getInnerHeight: function () {
                        return this.hasWindow ? window.innerHeight || document.documentElement.clientHeight : 0
                    },
                    getOffsetLeft: function () {
                        return this.hasWindow ? window.pageXOffset || document.documentElement.scrollLeft : 0
                    },
                    getOffsetTop: function () {
                        return this.hasWindow ? window.pageYOffset || document.documentElement.scrollTop : 0
                    },
                    getRoundedBoundedClientRect: function (t) {
                        var e = t.getBoundingClientRect();
                        return {
                            top: Math.round(e.top),
                            left: Math.round(e.left),
                            bottom: Math.round(e.bottom),
                            right: Math.round(e.right),
                            width: Math.round(e.width),
                            height: Math.round(e.height)
                        }
                    },
                    measure: function (t) {
                        if (!t || !this.hasWindow) return null;
                        var e = this.getRoundedBoundedClientRect(t);
                        if (!1 !== this.attach) {
                            var i = window.getComputedStyle(t);
                            e.left = parseInt(i.marginLeft), e.top = parseInt(i.marginTop)
                        }
                        return e
                    },
                    sneakPeek: function (t) {
                        var e = this;
                        requestAnimationFrame(function () {
                            var i = e.$refs.content;
                            i && "none" === i.style.display ? (i.style.display = "inline-block", t(), i.style.display = "none") : t()
                        })
                    },
                    startTransition: function () {
                        var t = this;
                        return new Promise(function (e) {
                            return requestAnimationFrame(function () {
                                t.isContentActive = t.hasJustFocused = t.isActive, e()
                            })
                        })
                    },
                    updateDimensions: function () {
                        var t = this;
                        this.hasWindow = "undefined" != typeof window, this.checkActivatorFixed(), this.checkForPageYOffset(), this.pageWidth = document.documentElement.clientWidth;
                        var e = {};
                        if (!this.hasActivator || this.absolute) e.activator = this.absolutePosition();
                        else {
                            var i = this.getActivator();
                            if (!i) return;
                            e.activator = this.measure(i), e.activator.offsetLeft = i.offsetLeft, !1 !== this.attach ? e.activator.offsetTop = i.offsetTop : e.activator.offsetTop = 0
                        }
                        this.sneakPeek(function () {
                            e.content = t.measure(t.$refs.content), t.dimensions = e
                        })
                    }
                }
            }),
            ci = a.a.extend({
                name: "returnable",
                props: {
                    returnValue: null
                },
                data: function () {
                    return {
                        isActive: !1,
                        originalValue: null
                    }
                },
                watch: {
                    isActive: function (t) {
                        t ? this.originalValue = this.returnValue : this.$emit("update:return-value", this.originalValue)
                    }
                },
                methods: {
                    save: function (t) {
                        var e = this;
                        this.originalValue = t, setTimeout(function () {
                            e.isActive = !1
                        })
                    }
                }
            });

        function hi() {
            return !1
        }
        var di = {
                inserted: function (t, e) {
                    var i = function (i) {
                        return function (t, e, i) {
                            i.args = i.args || {};
                            var n = i.args.closeConditional || hi;
                            if (t && !1 !== n(t) && !("isTrusted" in t && !t.isTrusted || "pointerType" in t && !t.pointerType)) {
                                var s = (i.args.include || function () {
                                    return []
                                })();
                                s.push(e), !s.some(function (e) {
                                    return e.contains(t.target)
                                }) && setTimeout(function () {
                                    n(t) && i.value && i.value(t)
                                }, 0)
                            }
                        }(i, t, e)
                    };
                    (document.querySelector("[data-app]") || document.body).addEventListener("click", i, !0), t._clickOutside = i
                },
                unbind: function (t) {
                    if (t._clickOutside) {
                        var e = document.querySelector("[data-app]") || document.body;
                        e && e.removeEventListener("click", t._clickOutside, !0), delete t._clickOutside
                    }
                }
            },
            pi = di;
        var fi = {
                inserted: function (t, e) {
                    var i = e.value,
                        n = e.options || {
                            passive: !0
                        };
                    window.addEventListener("resize", i, n), t._onResize = {
                        callback: i,
                        options: n
                    }, e.modifiers && e.modifiers.quiet || i()
                },
                unbind: function (t) {
                    if (t._onResize) {
                        var e = t._onResize,
                            i = e.callback,
                            n = e.options;
                        window.removeEventListener("resize", i, n), delete t._onResize
                    }
                }
            },
            vi = fi,
            mi = d(h).extend({
                name: "theme-provider",
                props: {
                    root: Boolean
                },
                computed: {
                    isDark: function () {
                        return this.root ? this.rootIsDark : h.options.computed.isDark.call(this)
                    }
                },
                render: function () {
                    return this.$slots.default && this.$slots.default.find(function (t) {
                        return !t.isComment && " " !== t.text
                    })
                }
            }),
            gi = function () {
                return (gi = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            yi = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            bi = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(yi(arguments[e]));
                return t
            },
            Si = d(Qe, Ze, ii, ui, ci, Bt, h).extend({
                name: "v-menu",
                provide: function () {
                    return {
                        isInMenu: !0,
                        theme: this.theme
                    }
                },
                directives: {
                    ClickOutside: pi,
                    Resize: vi
                },
                props: {
                    auto: Boolean,
                    closeOnClick: {
                        type: Boolean,
                        default: !0
                    },
                    closeOnContentClick: {
                        type: Boolean,
                        default: !0
                    },
                    disabled: Boolean,
                    disableKeys: Boolean,
                    maxHeight: {
                        type: [Number, String],
                        default: "auto"
                    },
                    offsetX: Boolean,
                    offsetY: Boolean,
                    openOnClick: {
                        type: Boolean,
                        default: !0
                    },
                    openOnHover: Boolean,
                    origin: {
                        type: String,
                        default: "top left"
                    },
                    transition: {
                        type: [Boolean, String],
                        default: "v-menu-transition"
                    }
                },
                data: function () {
                    return {
                        calculatedTopAuto: 0,
                        defaultOffset: 8,
                        hasJustFocused: !1,
                        listIndex: -1,
                        resizeTimeout: 0,
                        selectedIndex: null,
                        tiles: []
                    }
                },
                computed: {
                    activeTile: function () {
                        return this.tiles[this.listIndex]
                    },
                    calculatedLeft: function () {
                        var t = Math.max(this.dimensions.content.width, parseFloat(this.calculatedMinWidth));
                        return this.auto ? Y(this.calcXOverflow(this.calcLeftAuto(), t)) || "0" : this.calcLeft(t) || "0"
                    },
                    calculatedMaxHeight: function () {
                        return (this.auto ? "200px" : Y(this.maxHeight)) || "0"
                    },
                    calculatedMaxWidth: function () {
                        return Y(this.maxWidth) || "0"
                    },
                    calculatedMinWidth: function () {
                        if (this.minWidth) return Y(this.minWidth) || "0";
                        var t = Math.min(this.dimensions.activator.width + Number(this.nudgeWidth) + (this.auto ? 16 : 0), Math.max(this.pageWidth - 24, 0)),
                            e = isNaN(parseInt(this.calculatedMaxWidth)) ? t : parseInt(this.calculatedMaxWidth);
                        return Y(Math.min(e, t)) || "0"
                    },
                    calculatedTop: function () {
                        return (this.auto ? Y(this.calcYOverflow(this.calculatedTopAuto)) : this.calcTop()) || "0"
                    },
                    hasClickableTiles: function () {
                        return Boolean(this.tiles.find(function (t) {
                            return t.tabIndex > -1
                        }))
                    },
                    styles: function () {
                        return {
                            maxHeight: this.calculatedMaxHeight,
                            minWidth: this.calculatedMinWidth,
                            maxWidth: this.calculatedMaxWidth,
                            top: this.calculatedTop,
                            left: this.calculatedLeft,
                            transformOrigin: this.origin,
                            zIndex: this.zIndex || this.activeZIndex
                        }
                    }
                },
                watch: {
                    isActive: function (t) {
                        t || (this.listIndex = -1)
                    },
                    isContentActive: function (t) {
                        this.hasJustFocused = t
                    },
                    listIndex: function (t, e) {
                        if (t in this.tiles) {
                            var i = this.tiles[t];
                            i.classList.add("v-list-item--highlighted"), this.$refs.content.scrollTop = i.offsetTop - i.clientHeight
                        }
                        e in this.tiles && this.tiles[e].classList.remove("v-list-item--highlighted")
                    }
                },
                created: function () {
                    this.$attrs.hasOwnProperty("full-width") && x("full-width", this)
                },
                mounted: function () {
                    this.isActive && this.callActivate()
                },
                methods: {
                    activate: function () {
                        var t = this;
                        this.updateDimensions(), requestAnimationFrame(function () {
                            t.startTransition().then(function () {
                                t.$refs.content && (t.calculatedTopAuto = t.calcTopAuto(), t.auto && (t.$refs.content.scrollTop = t.calcScrollPosition()))
                            })
                        })
                    },
                    calcScrollPosition: function () {
                        var t = this.$refs.content,
                            e = t.querySelector(".v-list-item--active"),
                            i = t.scrollHeight - t.offsetHeight;
                        return e ? Math.min(i, Math.max(0, e.offsetTop - t.offsetHeight / 2 + e.offsetHeight / 2)) : t.scrollTop
                    },
                    calcLeftAuto: function () {
                        return parseInt(this.dimensions.activator.left - 2 * this.defaultOffset)
                    },
                    calcTopAuto: function () {
                        var t = this.$refs.content,
                            e = t.querySelector(".v-list-item--active");
                        if (e || (this.selectedIndex = null), this.offsetY || !e) return this.computedTop;
                        this.selectedIndex = Array.from(this.tiles).indexOf(e);
                        var i = e.offsetTop - this.calcScrollPosition(),
                            n = t.querySelector(".v-list-item").offsetTop;
                        return this.computedTop - i - n - 1
                    },
                    changeListIndex: function (t) {
                        if (this.getTiles(), this.isActive && this.hasClickableTiles)
                            if (t.keyCode !== U.tab) {
                                if (t.keyCode === U.down) this.nextTile();
                                else if (t.keyCode === U.up) this.prevTile();
                                else {
                                    if (t.keyCode !== U.enter || -1 === this.listIndex) return;
                                    this.tiles[this.listIndex].click()
                                }
                                t.preventDefault()
                            } else this.isActive = !1
                    },
                    closeConditional: function (t) {
                        var e = t.target;
                        return this.isActive && !this._isDestroyed && this.closeOnClick && !this.$refs.content.contains(e)
                    },
                    genActivatorListeners: function () {
                        var t = ui.options.methods.genActivatorListeners.call(this);
                        return this.disableKeys || (t.keydown = this.onKeyDown), t
                    },
                    genTransition: function () {
                        return this.transition ? this.$createElement("transition", {
                            props: {
                                name: this.transition
                            }
                        }, [this.genContent()]) : this.genContent()
                    },
                    genDirectives: function () {
                        var t = this,
                            e = [{
                                name: "show",
                                value: this.isContentActive
                            }];
                        return !this.openOnHover && this.closeOnClick && e.push({
                            name: "click-outside",
                            value: function () {
                                t.isActive = !1
                            },
                            args: {
                                closeConditional: this.closeConditional,
                                include: function () {
                                    return bi([t.$el], t.getOpenDependentElements())
                                }
                            }
                        }), e
                    },
                    genContent: function () {
                        var t, e = this,
                            i = {
                                attrs: gi({}, this.getScopeIdAttrs(), {
                                    role: "role" in this.$attrs ? this.$attrs.role : "menu"
                                }),
                                staticClass: "v-menu__content",
                                class: gi({}, this.rootThemeClasses, (t = {
                                    "v-menu__content--auto": this.auto,
                                    "v-menu__content--fixed": this.activatorFixed,
                                    menuable__content__active: this.isActive
                                }, t[this.contentClass.trim()] = !0, t)),
                                style: this.styles,
                                directives: this.genDirectives(),
                                ref: "content",
                                on: {
                                    click: function (t) {
                                        t.stopPropagation(), t.target.getAttribute("disabled") || e.closeOnContentClick && (e.isActive = !1)
                                    },
                                    keydown: this.onKeyDown
                                }
                            };
                        return !this.disabled && this.openOnHover && (i.on = i.on || {}, i.on.mouseenter = this.mouseEnterHandler), this.openOnHover && (i.on = i.on || {}, i.on.mouseleave = this.mouseLeaveHandler), this.$createElement("div", i, this.showLazyContent(this.getContentSlot()))
                    },
                    getTiles: function () {
                        this.tiles = Array.from(this.$refs.content.querySelectorAll(".v-list-item"))
                    },
                    mouseEnterHandler: function () {
                        var t = this;
                        this.runDelay("open", function () {
                            t.hasJustFocused || (t.hasJustFocused = !0, t.isActive = !0)
                        })
                    },
                    mouseLeaveHandler: function (t) {
                        var e = this;
                        this.runDelay("close", function () {
                            e.$refs.content.contains(t.relatedTarget) || requestAnimationFrame(function () {
                                e.isActive = !1, e.callDeactivate()
                            })
                        })
                    },
                    nextTile: function () {
                        var t = this.tiles[this.listIndex + 1];
                        if (!t) {
                            if (!this.tiles.length) return;
                            return this.listIndex = -1, void this.nextTile()
                        }
                        this.listIndex++, -1 === t.tabIndex && this.nextTile()
                    },
                    prevTile: function () {
                        var t = this.tiles[this.listIndex - 1];
                        if (!t) {
                            if (!this.tiles.length) return;
                            return this.listIndex = this.tiles.length, void this.prevTile()
                        }
                        this.listIndex--, -1 === t.tabIndex && this.prevTile()
                    },
                    onKeyDown: function (t) {
                        var e = this;
                        if (t.keyCode === U.esc) {
                            setTimeout(function () {
                                e.isActive = !1
                            });
                            var i = this.getActivator();
                            this.$nextTick(function () {
                                return i && i.focus()
                            })
                        } else !this.isActive && [U.up, U.down].includes(t.keyCode) && (this.isActive = !0);
                        this.$nextTick(function () {
                            return e.changeListIndex(t)
                        })
                    },
                    onResize: function () {
                        this.isActive && (this.$refs.content.offsetWidth, this.updateDimensions(), clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(this.updateDimensions, 100))
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-menu",
                        class: {
                            "v-menu--attached": "" === this.attach || !0 === this.attach || "attach" === this.attach
                        },
                        directives: [{
                            arg: "500",
                            name: "resize",
                            value: this.onResize
                        }]
                    }, [!this.activator && this.genActivator(), this.$createElement(mi, {
                        props: {
                            root: !0,
                            light: this.light,
                            dark: this.dark
                        }
                    }, [this.genTransition()])])
                }
            }),
            xi = Si,
            wi = (i(3), i(28), function () {
                return (wi = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Ci = a.a.extend({
                name: "v-simple-checkbox",
                functional: !0,
                directives: {
                    ripple: ee
                },
                props: wi({}, _.options.props, h.options.props, {
                    disabled: Boolean,
                    ripple: {
                        type: Boolean,
                        default: !0
                    },
                    value: Boolean,
                    indeterminate: Boolean,
                    indeterminateIcon: {
                        type: String,
                        default: "$checkboxIndeterminate"
                    },
                    onIcon: {
                        type: String,
                        default: "$checkboxOn"
                    },
                    offIcon: {
                        type: String,
                        default: "$checkboxOff"
                    }
                }),
                render: function (t, e) {
                    var i = e.props,
                        n = e.data,
                        s = [];
                    if (i.ripple && !i.disabled) {
                        var r = t("div", _.options.methods.setTextColor(i.color, {
                            staticClass: "v-input--selection-controls__ripple",
                            directives: [{
                                name: "ripple",
                                value: {
                                    center: !0
                                }
                            }]
                        }));
                        s.push(r)
                    }
                    var o = i.offIcon;
                    i.indeterminate ? o = i.indeterminateIcon : i.value && (o = i.onIcon), s.push(t(Pt, _.options.methods.setTextColor(i.value && i.color, {
                        props: {
                            disabled: i.disabled,
                            dark: i.dark,
                            light: i.light
                        }
                    }), o));
                    var a = {
                        "v-simple-checkbox": !0,
                        "v-simple-checkbox--disabled": i.disabled
                    };
                    return t("div", wi({}, n, {
                        class: a,
                        on: {
                            click: function (t) {
                                t.stopPropagation(), n.on && n.on.input && !i.disabled && J(n.on.input).forEach(function (t) {
                                    return t(!i.value)
                                })
                            }
                        }
                    }), s)
                }
            }),
            ki = (i(29), function () {
                return (ki = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            $i = h.extend({
                name: "v-divider",
                props: {
                    inset: Boolean,
                    vertical: Boolean
                },
                render: function (t) {
                    var e;
                    return this.$attrs.role && "separator" !== this.$attrs.role || (e = this.vertical ? "vertical" : "horizontal"), t("hr", {
                        class: ki({
                            "v-divider": !0,
                            "v-divider--inset": this.inset,
                            "v-divider--vertical": this.vertical
                        }, this.themeClasses),
                        attrs: ki({
                            role: "separator",
                            "aria-orientation": e
                        }, this.$attrs),
                        on: this.$listeners
                    })
                }
            }),
            Ii = $i,
            Oi = (i(30), function () {
                return (Oi = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            _i = d(h).extend({
                name: "v-subheader",
                props: {
                    inset: Boolean
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-subheader",
                        class: Oi({
                            "v-subheader--inset": this.inset
                        }, this.themeClasses),
                        attrs: this.$attrs,
                        on: this.$listeners
                    }, this.$slots.default)
                }
            }),
            Ti = _i,
            Bi = (i(27), function () {
                return (Bi = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Ai = d(_, ne, h, Rt("listItemGroup"), _t("inputValue")).extend().extend({
                name: "v-list-item",
                directives: {
                    Ripple: ee
                },
                inheritAttrs: !1,
                inject: {
                    isInGroup: {
                        default: !1
                    },
                    isInList: {
                        default: !1
                    },
                    isInMenu: {
                        default: !1
                    },
                    isInNav: {
                        default: !1
                    }
                },
                props: {
                    activeClass: {
                        type: String,
                        default: function () {
                            return this.listItemGroup ? this.listItemGroup.activeClass : ""
                        }
                    },
                    dense: Boolean,
                    inactive: Boolean,
                    link: Boolean,
                    selectable: {
                        type: Boolean
                    },
                    tag: {
                        type: String,
                        default: "div"
                    },
                    threeLine: Boolean,
                    twoLine: Boolean,
                    value: null
                },
                data: function () {
                    return {
                        proxyClass: "v-list-item--active"
                    }
                },
                computed: {
                    classes: function () {
                        return Bi({
                            "v-list-item": !0
                        }, ne.options.computed.classes.call(this), {
                            "v-list-item--dense": this.dense,
                            "v-list-item--disabled": this.disabled,
                            "v-list-item--link": this.isClickable && !this.inactive,
                            "v-list-item--selectable": this.selectable,
                            "v-list-item--three-line": this.threeLine,
                            "v-list-item--two-line": this.twoLine
                        }, this.themeClasses)
                    },
                    isClickable: function () {
                        return Boolean(ne.options.computed.isClickable.call(this) || this.listItemGroup)
                    }
                },
                created: function () {
                    this.$attrs.hasOwnProperty("avatar") && x("avatar", this)
                },
                methods: {
                    click: function (t) {
                        t.detail && this.$el.blur(), this.$emit("click", t), this.to || this.toggle()
                    },
                    genAttrs: function () {
                        var t = Bi({
                            "aria-disabled": !!this.disabled || void 0,
                            tabindex: this.isClickable && !this.disabled ? 0 : -1
                        }, this.$attrs);
                        return this.$attrs.hasOwnProperty("role") || this.isInNav || (this.isInGroup ? (t.role = "listitem", t["aria-selected"] = String(this.isActive)) : this.isInMenu ? t.role = this.isClickable ? "menuitem" : void 0 : this.isInList && (t.role = "listitem")), t
                    }
                },
                render: function (t) {
                    var e = this,
                        i = this.generateRouteLink(),
                        n = i.tag,
                        s = i.data;
                    s.attrs = Bi({}, s.attrs, this.genAttrs()), s.on = Bi({}, s.on, {
                        click: this.click,
                        keydown: function (t) {
                            t.keyCode === U.enter && e.click(t), e.$emit("keydown", t)
                        }
                    });
                    var r = this.$scopedSlots.default ? this.$scopedSlots.default({
                        active: this.isActive,
                        toggle: this.toggle
                    }) : this.$slots.default;
                    return t(n = this.inactive ? "div" : n, this.setTextColor(this.color, s), r)
                }
            }),
            Ei = a.a.extend({
                name: "v-list-item-action",
                functional: !0,
                render: function (t, e) {
                    var i = e.data,
                        n = e.children,
                        s = void 0 === n ? [] : n;
                    return i.staticClass = i.staticClass ? "v-list-item__action " + i.staticClass : "v-list-item__action", s.filter(function (t) {
                        return !1 === t.isComment && " " !== t.text
                    }).length > 1 && (i.staticClass += " v-list-item__action--stack"), t("div", i, s)
                }
            }),
            Mi = (i(31), function () {
                return (Mi = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Di = function (t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    i = 0;
                return e ? e.call(t) : {
                    next: function () {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                }
            },
            Vi = ut.extend().extend({
                name: "v-list",
                provide: function () {
                    return {
                        isInList: !0,
                        list: this
                    }
                },
                inject: {
                    isInMenu: {
                        default: !1
                    },
                    isInNav: {
                        default: !1
                    }
                },
                props: {
                    dense: Boolean,
                    disabled: Boolean,
                    expand: Boolean,
                    flat: Boolean,
                    nav: Boolean,
                    rounded: Boolean,
                    shaped: Boolean,
                    subheader: Boolean,
                    threeLine: Boolean,
                    tile: {
                        type: Boolean,
                        default: !0
                    },
                    twoLine: Boolean
                },
                data: function () {
                    return {
                        groups: []
                    }
                },
                computed: {
                    classes: function () {
                        return Mi({}, ut.options.computed.classes.call(this), {
                            "v-list--dense": this.dense,
                            "v-list--disabled": this.disabled,
                            "v-list--flat": this.flat,
                            "v-list--nav": this.nav,
                            "v-list--rounded": this.rounded,
                            "v-list--shaped": this.shaped,
                            "v-list--subheader": this.subheader,
                            "v-list--two-line": this.twoLine,
                            "v-list--three-line": this.threeLine
                        })
                    }
                },
                methods: {
                    register: function (t) {
                        this.groups.push(t)
                    },
                    unregister: function (t) {
                        var e = this.groups.findIndex(function (e) {
                            return e._uid === t._uid
                        });
                        e > -1 && this.groups.splice(e, 1)
                    },
                    listClick: function (t) {
                        var e, i;
                        if (!this.expand) try {
                            for (var n = Di(this.groups), s = n.next(); !s.done; s = n.next()) {
                                s.value.toggle(t)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                s && !s.done && (i = n.return) && i.call(n)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }
                },
                render: function (t) {
                    var e = {
                        staticClass: "v-list",
                        class: this.classes,
                        style: this.styles,
                        attrs: Mi({
                            role: this.isInNav || this.isInMenu ? void 0 : "list"
                        }, this.attrs$)
                    };
                    return t("div", this.setBackgroundColor(this.color, e), [this.$slots.default])
                }
            }),
            Pi = (i(32), a.a.extend({
                name: "v-list-item-icon",
                functional: !0,
                render: function (t, e) {
                    var i = e.data,
                        n = e.children;
                    return i.staticClass = ("v-list-item__icon " + (i.staticClass || "")).trim(), t("div", i, n)
                }
            })),
            Li = function () {
                return (Li = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Hi = d(m, ti, _, zt("list"), Bt).extend().extend({
                name: "v-list-group",
                directives: {
                    ripple: ee
                },
                props: {
                    activeClass: {
                        type: String,
                        default: ""
                    },
                    appendIcon: {
                        type: String,
                        default: "$expand"
                    },
                    color: {
                        type: String,
                        default: "primary"
                    },
                    disabled: Boolean,
                    group: String,
                    noAction: Boolean,
                    prependIcon: String,
                    ripple: {
                        type: [Boolean, Object],
                        default: !0
                    },
                    subGroup: Boolean
                },
                computed: {
                    classes: function () {
                        return {
                            "v-list-group--active": this.isActive,
                            "v-list-group--disabled": this.disabled,
                            "v-list-group--no-action": this.noAction,
                            "v-list-group--sub-group": this.subGroup
                        }
                    }
                },
                watch: {
                    isActive: function (t) {
                        !this.subGroup && t && this.list && this.list.listClick(this._uid)
                    },
                    $route: "onRouteChange"
                },
                created: function () {
                    this.list && this.list.register(this), this.group && this.$route && null == this.value && (this.isActive = this.matchRoute(this.$route.path))
                },
                beforeDestroy: function () {
                    this.list && this.list.unregister(this)
                },
                methods: {
                    click: function (t) {
                        var e = this;
                        this.disabled || (this.isBooted = !0, this.$emit("click", t), this.$nextTick(function () {
                            return e.isActive = !e.isActive
                        }))
                    },
                    genIcon: function (t) {
                        return this.$createElement(Lt, t)
                    },
                    genAppendIcon: function () {
                        var t = !this.subGroup && this.appendIcon;
                        return t || this.$slots.appendIcon ? this.$createElement(Pi, {
                            staticClass: "v-list-group__header__append-icon"
                        }, [this.$slots.appendIcon || this.genIcon(t)]) : null
                    },
                    genHeader: function () {
                        var t;
                        return this.$createElement(Ai, {
                            staticClass: "v-list-group__header",
                            attrs: {
                                "aria-expanded": String(this.isActive),
                                role: "button"
                            },
                            class: (t = {}, t[this.activeClass] = this.isActive, t),
                            props: {
                                inputValue: this.isActive
                            },
                            directives: [{
                                name: "ripple",
                                value: this.ripple
                            }],
                            on: Li({}, this.listeners$, {
                                click: this.click
                            })
                        }, [this.genPrependIcon(), this.$slots.activator, this.genAppendIcon()])
                    },
                    genItems: function () {
                        return this.$createElement("div", {
                            staticClass: "v-list-group__items",
                            directives: [{
                                name: "show",
                                value: this.isActive
                            }]
                        }, this.showLazyContent([this.$createElement("div", this.$slots.default)]))
                    },
                    genPrependIcon: function () {
                        var t = this.prependIcon ? this.prependIcon : !!this.subGroup && "$subgroup";
                        return t || this.$slots.prependIcon ? this.$createElement(Pi, {
                            staticClass: "v-list-group__header__prepend-icon"
                        }, [this.$slots.prependIcon || this.genIcon(t)]) : null
                    },
                    onRouteChange: function (t) {
                        if (this.group) {
                            var e = this.matchRoute(t.path);
                            e && this.isActive !== e && this.list && this.list.listClick(this._uid), this.isActive = e
                        }
                    },
                    toggle: function (t) {
                        var e = this,
                            i = this._uid === t;
                        i && (this.isBooted = !0), this.$nextTick(function () {
                            return e.isActive = i
                        })
                    },
                    matchRoute: function (t) {
                        return null !== t.match(this.group)
                    }
                },
                render: function (t) {
                    return t("div", this.setTextColor(this.isActive && this.color, {
                        staticClass: "v-list-group",
                        class: this.classes
                    }), [this.genHeader(), t(Re, [this.genItems()])])
                }
            });
        i(34), i(35);
        var ji, Ni, Fi, zi, Wi = (void 0 === ji && (ji = "value"), void 0 === Ni && (Ni = "change"), a.a.extend({
                name: "proxyable",
                model: {
                    prop: ji,
                    event: Ni
                },
                props: (Fi = {}, Fi[ji] = {
                    required: !1
                }, Fi),
                data: function () {
                    return {
                        internalLazyValue: this[ji]
                    }
                },
                computed: {
                    internalValue: {
                        get: function () {
                            return this.internalLazyValue
                        },
                        set: function (t) {
                            t !== this.internalLazyValue && (this.internalLazyValue = t, this.$emit(Ni, t))
                        }
                    }
                },
                watch: (zi = {}, zi[ji] = function (t) {
                    this.internalLazyValue = t
                }, zi)
            })),
            Ri = function () {
                return (Ri = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Yi = d(Wi, h).extend({
                name: "base-item-group",
                props: {
                    activeClass: {
                        type: String,
                        default: "v-item--active"
                    },
                    mandatory: Boolean,
                    max: {
                        type: [Number, String],
                        default: null
                    },
                    multiple: Boolean
                },
                data: function () {
                    return {
                        internalLazyValue: void 0 !== this.value ? this.value : this.multiple ? [] : void 0,
                        items: []
                    }
                },
                computed: {
                    classes: function () {
                        return Ri({
                            "v-item-group": !0
                        }, this.themeClasses)
                    },
                    selectedIndex: function () {
                        return this.selectedItem && this.items.indexOf(this.selectedItem) || -1
                    },
                    selectedItem: function () {
                        if (!this.multiple) return this.selectedItems[0]
                    },
                    selectedItems: function () {
                        var t = this;
                        return this.items.filter(function (e, i) {
                            return t.toggleMethod(t.getValue(e, i))
                        })
                    },
                    selectedValues: function () {
                        return null == this.internalValue ? [] : Array.isArray(this.internalValue) ? this.internalValue : [this.internalValue]
                    },
                    toggleMethod: function () {
                        var t = this;
                        if (!this.multiple) return function (e) {
                            return t.internalValue === e
                        };
                        var e = this.internalValue;
                        return Array.isArray(e) ? function (t) {
                            return e.includes(t)
                        } : function () {
                            return !1
                        }
                    }
                },
                watch: {
                    internalValue: function () {
                        this.$nextTick(this.updateItemsState)
                    }
                },
                created: function () {
                    this.multiple && !Array.isArray(this.internalValue) && y("Model must be bound to an array if the multiple property is true.", this)
                },
                methods: {
                    genData: function () {
                        return {
                            class: this.classes
                        }
                    },
                    getValue: function (t, e) {
                        return null == t.value || "" === t.value ? e : t.value
                    },
                    onClick: function (t) {
                        this.updateInternalValue(this.getValue(t, this.items.indexOf(t)))
                    },
                    register: function (t) {
                        var e = this,
                            i = this.items.push(t) - 1;
                        t.$on("change", function () {
                            return e.onClick(t)
                        }), this.mandatory && null == this.internalLazyValue && this.updateMandatory(), this.updateItem(t, i)
                    },
                    unregister: function (t) {
                        if (!this._isDestroyed) {
                            var e = this.items.indexOf(t),
                                i = this.getValue(t, e);
                            if (this.items.splice(e, 1), !(this.selectedValues.indexOf(i) < 0)) {
                                if (!this.mandatory) return this.updateInternalValue(i);
                                this.multiple && Array.isArray(this.internalValue) ? this.internalValue = this.internalValue.filter(function (t) {
                                    return t !== i
                                }) : this.internalValue = void 0, this.selectedItems.length || this.updateMandatory(!0)
                            }
                        }
                    },
                    updateItem: function (t, e) {
                        var i = this.getValue(t, e);
                        t.isActive = this.toggleMethod(i)
                    },
                    updateItemsState: function () {
                        if (this.mandatory && !this.selectedItems.length) return this.updateMandatory();
                        this.items.forEach(this.updateItem)
                    },
                    updateInternalValue: function (t) {
                        this.multiple ? this.updateMultiple(t) : this.updateSingle(t)
                    },
                    updateMandatory: function (t) {
                        if (this.items.length) {
                            var e = this.items.slice();
                            t && e.reverse();
                            var i = e.find(function (t) {
                                return !t.disabled
                            });
                            if (i) {
                                var n = this.items.indexOf(i);
                                this.updateInternalValue(this.getValue(i, n))
                            }
                        }
                    },
                    updateMultiple: function (t) {
                        var e = (Array.isArray(this.internalValue) ? this.internalValue : []).slice(),
                            i = e.findIndex(function (e) {
                                return e === t
                            });
                        this.mandatory && i > -1 && e.length - 1 < 1 || null != this.max && i < 0 && e.length + 1 > this.max || (i > -1 ? e.splice(i, 1) : e.push(t), this.internalValue = e)
                    },
                    updateSingle: function (t) {
                        var e = t === this.internalValue;
                        this.mandatory && e || (this.internalValue = e ? void 0 : t)
                    }
                },
                render: function (t) {
                    return t("div", this.genData(), this.$slots.default)
                }
            }),
            Gi = Yi.extend({
                name: "v-item-group",
                provide: function () {
                    return {
                        itemGroup: this
                    }
                }
            }),
            Ui = function () {
                return (Ui = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            qi = d(Yi, _).extend({
                name: "v-list-item-group",
                provide: function () {
                    return {
                        isInGroup: !0,
                        listItemGroup: this
                    }
                },
                computed: {
                    classes: function () {
                        return Ui({}, Yi.options.computed.classes.call(this), {
                            "v-list-item-group": !0
                        })
                    }
                },
                methods: {
                    genData: function () {
                        return this.setTextColor(this.color, Ui({}, Yi.options.methods.genData.call(this), {
                            attrs: {
                                role: "listbox"
                            }
                        }))
                    }
                }
            }),
            Xi = (i(33), function () {
                return (Xi = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Zi = d(_, at).extend({
                name: "v-avatar",
                props: {
                    left: Boolean,
                    right: Boolean,
                    size: {
                        type: [Number, String],
                        default: 48
                    },
                    tile: Boolean
                },
                computed: {
                    classes: function () {
                        return {
                            "v-avatar--left": this.left,
                            "v-avatar--right": this.right,
                            "v-avatar--tile": this.tile
                        }
                    },
                    styles: function () {
                        return Xi({
                            height: Y(this.size),
                            minWidth: Y(this.size),
                            width: Y(this.size)
                        }, this.measurableStyles)
                    }
                },
                render: function (t) {
                    var e = {
                        staticClass: "v-avatar",
                        class: this.classes,
                        style: this.styles,
                        on: this.$listeners
                    };
                    return t("div", this.setBackgroundColor(this.color, e), this.$slots.default)
                }
            }),
            Ki = Zi,
            Ji = function () {
                return (Ji = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Qi = Ki.extend({
                name: "v-list-item-avatar",
                props: {
                    horizontal: Boolean,
                    size: {
                        type: [Number, String],
                        default: 40
                    }
                },
                computed: {
                    classes: function () {
                        return Ji({
                            "v-list-item__avatar--horizontal": this.horizontal
                        }, Ki.options.computed.classes.call(this), {
                            "v-avatar--tile": this.tile || this.horizontal
                        })
                    }
                },
                render: function (t) {
                    var e = Ki.options.render.call(this, t);
                    return e.data = e.data || {}, e.data.staticClass += " v-list-item__avatar", e
                }
            }),
            tn = E("v-list-item__action-text", "span"),
            en = E("v-list-item__content", "div"),
            nn = E("v-list-item__title", "div"),
            sn = E("v-list-item__subtitle", "div"),
            rn = function () {
                return (rn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            on = function (t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    i = 0;
                return e ? e.call(t) : {
                    next: function () {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                }
            },
            an = d(_, h).extend({
                name: "v-select-list",
                directives: {
                    ripple: ee
                },
                props: {
                    action: Boolean,
                    dense: Boolean,
                    hideSelected: Boolean,
                    items: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    itemDisabled: {
                        type: [String, Array, Function],
                        default: "disabled"
                    },
                    itemText: {
                        type: [String, Array, Function],
                        default: "text"
                    },
                    itemValue: {
                        type: [String, Array, Function],
                        default: "value"
                    },
                    noDataText: String,
                    noFilter: Boolean,
                    searchInput: {
                        default: null
                    },
                    selectedItems: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    }
                },
                computed: {
                    parsedItems: function () {
                        var t = this;
                        return this.selectedItems.map(function (e) {
                            return t.getValue(e)
                        })
                    },
                    tileActiveClass: function () {
                        return Object.keys(this.setTextColor(this.color).class || {}).join(" ")
                    },
                    staticNoDataTile: function () {
                        var t = {
                            attrs: {
                                role: void 0
                            },
                            on: {
                                mousedown: function (t) {
                                    return t.preventDefault()
                                }
                            }
                        };
                        return this.$createElement(Ai, t, [this.genTileContent(this.noDataText)])
                    }
                },
                methods: {
                    genAction: function (t, e) {
                        var i = this;
                        return this.$createElement(Ei, [this.$createElement(Ci, {
                            props: {
                                color: this.color,
                                value: e
                            },
                            on: {
                                input: function () {
                                    return i.$emit("select", t)
                                }
                            }
                        })])
                    },
                    genDivider: function (t) {
                        return this.$createElement(Ii, {
                            props: t
                        })
                    },
                    genFilteredText: function (t) {
                        if (t = t || "", !this.searchInput || this.noFilter) return W(t);
                        var e = this.getMaskedCharacters(t),
                            i = e.start,
                            n = e.middle,
                            s = e.end;
                        return "" + W(i) + this.genHighlight(n) + W(s)
                    },
                    genHeader: function (t) {
                        return this.$createElement(Ti, {
                            props: t
                        }, t.header)
                    },
                    genHighlight: function (t) {
                        return '<span class="v-list-item__mask">' + W(t) + "</span>"
                    },
                    genLabelledBy: function (t) {
                        return W(this.getText(t).split(" ").join("-").toLowerCase()) + "-list-item-" + this._uid
                    },
                    getMaskedCharacters: function (t) {
                        var e = (this.searchInput || "").toString().toLocaleLowerCase(),
                            i = t.toLocaleLowerCase().indexOf(e);
                        return i < 0 ? {
                            start: "",
                            middle: t,
                            end: ""
                        } : {
                            start: t.slice(0, i),
                            middle: t.slice(i, i + e.length),
                            end: t.slice(i + e.length)
                        }
                    },
                    genTile: function (t, e, i) {
                        var n = this;
                        void 0 === e && (e = null), void 0 === i && (i = !1), i || (i = this.hasItem(t)), t === Object(t) && (e = null !== e ? e : this.getDisabled(t));
                        var s = {
                            attrs: {
                                "aria-selected": String(i),
                                "aria-labelledby": this.genLabelledBy(t),
                                role: "option"
                            },
                            on: {
                                mousedown: function (t) {
                                    t.preventDefault()
                                },
                                click: function () {
                                    return e || n.$emit("select", t)
                                }
                            },
                            props: {
                                activeClass: this.tileActiveClass,
                                disabled: e,
                                ripple: !0,
                                inputValue: i
                            }
                        };
                        if (!this.$scopedSlots.item) return this.$createElement(Ai, s, [this.action && !this.hideSelected && this.items.length > 0 ? this.genAction(t, i) : null, this.genTileContent(t)]);
                        var r = this.$scopedSlots.item({
                            parent: this,
                            item: t,
                            attrs: rn({}, s.attrs, s.props),
                            on: s.on
                        });
                        return this.needsTile(r) ? this.$createElement(Ai, s, r) : r
                    },
                    genTileContent: function (t) {
                        var e = this.genFilteredText(this.getText(t));
                        return this.$createElement(en, [this.$createElement(nn, {
                            attrs: {
                                id: this.genLabelledBy(t)
                            },
                            domProps: {
                                innerHTML: e
                            }
                        })])
                    },
                    hasItem: function (t) {
                        return this.parsedItems.indexOf(this.getValue(t)) > -1
                    },
                    needsTile: function (t) {
                        return 1 !== t.length || null == t[0].componentOptions || "v-list-item" !== t[0].componentOptions.Ctor.options.name
                    },
                    getDisabled: function (t) {
                        return Boolean(j(t, this.itemDisabled, !1))
                    },
                    getText: function (t) {
                        return String(j(t, this.itemText, t))
                    },
                    getValue: function (t) {
                        return j(t, this.itemValue, this.getText(t))
                    }
                },
                render: function () {
                    var t, e, i = [];
                    try {
                        for (var n = on(this.items), s = n.next(); !s.done; s = n.next()) {
                            var r = s.value;
                            this.hideSelected && this.hasItem(r) || (null == r ? i.push(this.genTile(r)) : r.header ? i.push(this.genHeader(r)) : r.divider ? i.push(this.genDivider(r)) : i.push(this.genTile(r)))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (e = n.return) && e.call(n)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return i.length || i.push(this.$slots["no-data"] || this.staticNoDataTile), this.$slots["prepend-item"] && i.unshift(this.$slots["prepend-item"]), this.$slots["append-item"] && i.push(this.$slots["append-item"]), this.$createElement("div", {
                        staticClass: "v-select-list v-card",
                        class: this.themeClasses
                    }, [this.$createElement(Vi, {
                        attrs: {
                            id: this.$attrs.id,
                            role: "listbox",
                            tabindex: -1
                        },
                        props: {
                            dense: this.dense
                        }
                    }, i)])
                }
            }),
            ln = (i(22), i(23), function () {
                return (ln = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            un = d(h).extend({
                name: "v-label",
                functional: !0,
                props: {
                    absolute: Boolean,
                    color: {
                        type: String,
                        default: "primary"
                    },
                    disabled: Boolean,
                    focused: Boolean,
                    for: String,
                    left: {
                        type: [Number, String],
                        default: 0
                    },
                    right: {
                        type: [Number, String],
                        default: "auto"
                    },
                    value: Boolean
                },
                render: function (t, e) {
                    var i = e.children,
                        n = e.listeners,
                        s = e.props,
                        r = {
                            staticClass: "v-label",
                            class: ln({
                                "v-label--active": s.value,
                                "v-label--is-disabled": s.disabled
                            }, u(e)),
                            attrs: {
                                for: s.for,
                                "aria-hidden": !s.for
                            },
                            on: n,
                            style: {
                                left: Y(s.left),
                                right: Y(s.right),
                                position: s.absolute ? "absolute" : "relative"
                            },
                            ref: "label"
                        };
                    return t("label", _.options.methods.setTextColor(s.focused && s.color, r), i)
                }
            }),
            cn = un,
            hn = (i(24), d(_, h).extend({
                name: "v-messages",
                props: {
                    value: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    }
                },
                methods: {
                    genChildren: function () {
                        return this.$createElement("transition-group", {
                            staticClass: "v-messages__wrapper",
                            attrs: {
                                name: "message-transition",
                                tag: "div"
                            }
                        }, this.value.map(this.genMessage))
                    },
                    genMessage: function (t, e) {
                        return this.$createElement("div", {
                            staticClass: "v-messages__message",
                            key: e
                        }, it(this, "default", {
                            message: t,
                            key: e
                        }) || [t])
                    }
                },
                render: function (t) {
                    return t("div", this.setTextColor(this.color, {
                        staticClass: "v-messages",
                        class: this.themeClasses
                    }), [this.genChildren()])
                }
            })),
            dn = hn;

        function pn(t) {
            return (pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var fn = d(_, zt("form"), h).extend({
                name: "validatable",
                props: {
                    disabled: Boolean,
                    error: Boolean,
                    errorCount: {
                        type: [Number, String],
                        default: 1
                    },
                    errorMessages: {
                        type: [String, Array],
                        default: function () {
                            return []
                        }
                    },
                    messages: {
                        type: [String, Array],
                        default: function () {
                            return []
                        }
                    },
                    readonly: Boolean,
                    rules: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    success: Boolean,
                    successMessages: {
                        type: [String, Array],
                        default: function () {
                            return []
                        }
                    },
                    validateOnBlur: Boolean,
                    value: {
                        required: !1
                    }
                },
                data: function () {
                    return {
                        errorBucket: [],
                        hasColor: !1,
                        hasFocused: !1,
                        hasInput: !1,
                        isFocused: !1,
                        isResetting: !1,
                        lazyValue: this.value,
                        valid: !1
                    }
                },
                computed: {
                    computedColor: function () {
                        if (!this.disabled) return this.color ? this.color : this.isDark && !this.appIsDark ? "white" : "primary"
                    },
                    hasError: function () {
                        return this.internalErrorMessages.length > 0 || this.errorBucket.length > 0 || this.error
                    },
                    hasSuccess: function () {
                        return this.internalSuccessMessages.length > 0 || this.success
                    },
                    externalError: function () {
                        return this.internalErrorMessages.length > 0 || this.error
                    },
                    hasMessages: function () {
                        return this.validationTarget.length > 0
                    },
                    hasState: function () {
                        return !this.disabled && (this.hasSuccess || this.shouldValidate && this.hasError)
                    },
                    internalErrorMessages: function () {
                        return this.genInternalMessages(this.errorMessages)
                    },
                    internalMessages: function () {
                        return this.genInternalMessages(this.messages)
                    },
                    internalSuccessMessages: function () {
                        return this.genInternalMessages(this.successMessages)
                    },
                    internalValue: {
                        get: function () {
                            return this.lazyValue
                        },
                        set: function (t) {
                            this.lazyValue = t, this.$emit("input", t)
                        }
                    },
                    shouldValidate: function () {
                        return !!this.externalError || !this.isResetting && (this.validateOnBlur ? this.hasFocused && !this.isFocused : this.hasInput || this.hasFocused)
                    },
                    validations: function () {
                        return this.validationTarget.slice(0, Number(this.errorCount))
                    },
                    validationState: function () {
                        if (!this.disabled) return this.hasError && this.shouldValidate ? "error" : this.hasSuccess ? "success" : this.hasColor ? this.computedColor : void 0
                    },
                    validationTarget: function () {
                        return this.internalErrorMessages.length > 0 ? this.internalErrorMessages : this.successMessages.length > 0 ? this.internalSuccessMessages : this.messages.length > 0 ? this.internalMessages : this.shouldValidate ? this.errorBucket : []
                    }
                },
                watch: {
                    rules: {
                        handler: function (t, e) {
                            L(t, e) || this.validate()
                        },
                        deep: !0
                    },
                    internalValue: function () {
                        this.hasInput = !0, this.validateOnBlur || this.$nextTick(this.validate)
                    },
                    isFocused: function (t) {
                        t || this.disabled || (this.hasFocused = !0, this.validateOnBlur && this.validate())
                    },
                    isResetting: function () {
                        var t = this;
                        setTimeout(function () {
                            t.hasInput = !1, t.hasFocused = !1, t.isResetting = !1, t.validate()
                        }, 0)
                    },
                    hasError: function (t) {
                        this.shouldValidate && this.$emit("update:error", t)
                    },
                    value: function (t) {
                        this.lazyValue = t
                    }
                },
                beforeMount: function () {
                    this.validate()
                },
                created: function () {
                    this.form && this.form.register(this)
                },
                beforeDestroy: function () {
                    this.form && this.form.unregister(this)
                },
                methods: {
                    genInternalMessages: function (t) {
                        return t ? Array.isArray(t) ? t : [t] : []
                    },
                    reset: function () {
                        this.isResetting = !0, this.internalValue = Array.isArray(this.internalValue) ? [] : void 0
                    },
                    resetValidation: function () {
                        this.isResetting = !0
                    },
                    validate: function (t, e) {
                        void 0 === t && (t = !1);
                        var i = [];
                        e = e || this.internalValue, t && (this.hasInput = this.hasFocused = !0);
                        for (var n = 0; n < this.rules.length; n++) {
                            var s = this.rules[n],
                                r = "function" == typeof s ? s(e) : s;
                            "string" == typeof r ? i.push(r) : "boolean" != typeof r && b("Rules should return a string or boolean, received '" + pn(r) + "' instead", this)
                        }
                        return this.errorBucket = i, this.valid = 0 === i.length, this.valid
                    }
                }
            }),
            vn = function () {
                return (vn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            mn = d(m, fn).extend().extend({
                name: "v-input",
                inheritAttrs: !1,
                props: {
                    appendIcon: String,
                    backgroundColor: {
                        type: String,
                        default: ""
                    },
                    dense: Boolean,
                    height: [Number, String],
                    hideDetails: Boolean,
                    hint: String,
                    id: String,
                    label: String,
                    loading: Boolean,
                    persistentHint: Boolean,
                    prependIcon: String,
                    value: null
                },
                data: function () {
                    return {
                        lazyValue: this.value,
                        hasMouseDown: !1
                    }
                },
                computed: {
                    classes: function () {
                        return vn({
                            "v-input--has-state": this.hasState,
                            "v-input--hide-details": this.hideDetails,
                            "v-input--is-label-active": this.isLabelActive,
                            "v-input--is-dirty": this.isDirty,
                            "v-input--is-disabled": this.disabled,
                            "v-input--is-focused": this.isFocused,
                            "v-input--is-loading": !1 !== this.loading && void 0 !== this.loading,
                            "v-input--is-readonly": this.readonly,
                            "v-input--dense": this.dense
                        }, this.themeClasses)
                    },
                    computedId: function () {
                        return this.id || "input-" + this._uid
                    },
                    hasHint: function () {
                        return !this.hasMessages && !!this.hint && (this.persistentHint || this.isFocused)
                    },
                    hasLabel: function () {
                        return !(!this.$slots.label && !this.label)
                    },
                    internalValue: {
                        get: function () {
                            return this.lazyValue
                        },
                        set: function (t) {
                            this.lazyValue = t, this.$emit(this.$_modelEvent, t)
                        }
                    },
                    isDirty: function () {
                        return !!this.lazyValue
                    },
                    isDisabled: function () {
                        return this.disabled || this.readonly
                    },
                    isLabelActive: function () {
                        return this.isDirty
                    }
                },
                watch: {
                    value: function (t) {
                        this.lazyValue = t
                    }
                },
                beforeCreate: function () {
                    this.$_modelEvent = this.$options.model && this.$options.model.event || "input"
                },
                methods: {
                    genContent: function () {
                        return [this.genPrependSlot(), this.genControl(), this.genAppendSlot()]
                    },
                    genControl: function () {
                        return this.$createElement("div", {
                            staticClass: "v-input__control"
                        }, [this.genInputSlot(), this.genMessages()])
                    },
                    genDefaultSlot: function () {
                        return [this.genLabel(), this.$slots.default]
                    },
                    genIcon: function (t, e) {
                        var i = this,
                            n = this[t + "Icon"],
                            s = "click:" + G(t),
                            r = {
                                props: {
                                    color: this.validationState,
                                    dark: this.dark,
                                    disabled: this.disabled,
                                    light: this.light
                                },
                                on: this.listeners$[s] || e ? {
                                    click: function (t) {
                                        t.preventDefault(), t.stopPropagation(), i.$emit(s, t), e && e(t)
                                    },
                                    mouseup: function (t) {
                                        t.preventDefault(), t.stopPropagation()
                                    }
                                } : void 0
                            };
                        return this.$createElement("div", {
                            staticClass: "v-input__icon v-input__icon--" + G(t),
                            key: t + n
                        }, [this.$createElement(Lt, r, n)])
                    },
                    genInputSlot: function () {
                        return this.$createElement("div", this.setBackgroundColor(this.backgroundColor, {
                            staticClass: "v-input__slot",
                            style: {
                                height: Y(this.height)
                            },
                            on: {
                                click: this.onClick,
                                mousedown: this.onMouseDown,
                                mouseup: this.onMouseUp
                            },
                            ref: "input-slot"
                        }), [this.genDefaultSlot()])
                    },
                    genLabel: function () {
                        return this.hasLabel ? this.$createElement(cn, {
                            props: {
                                color: this.validationState,
                                dark: this.dark,
                                focused: this.hasState,
                                for: this.computedId,
                                light: this.light
                            }
                        }, this.$slots.label || this.label) : null
                    },
                    genMessages: function () {
                        var t = this;
                        if (this.hideDetails) return null;
                        var e = this.hasHint ? [this.hint] : this.validations;
                        return this.$createElement(dn, {
                            props: {
                                color: this.hasHint ? "" : this.validationState,
                                dark: this.dark,
                                light: this.light,
                                value: this.hasMessages || this.hasHint ? e : []
                            },
                            attrs: {
                                role: this.hasMessages ? "alert" : null
                            },
                            scopedSlots: {
                                default: function (e) {
                                    return it(t, "message", e)
                                }
                            }
                        })
                    },
                    genSlot: function (t, e, i) {
                        if (!i.length) return null;
                        var n = t + "-" + e;
                        return this.$createElement("div", {
                            staticClass: "v-input__" + n,
                            ref: n
                        }, i)
                    },
                    genPrependSlot: function () {
                        var t = [];
                        return this.$slots.prepend ? t.push(this.$slots.prepend) : this.prependIcon && t.push(this.genIcon("prepend")), this.genSlot("prepend", "outer", t)
                    },
                    genAppendSlot: function () {
                        var t = [];
                        return this.$slots.append ? t.push(this.$slots.append) : this.appendIcon && t.push(this.genIcon("append")), this.genSlot("append", "outer", t)
                    },
                    onClick: function (t) {
                        this.$emit("click", t)
                    },
                    onMouseDown: function (t) {
                        this.hasMouseDown = !0, this.$emit("mousedown", t)
                    },
                    onMouseUp: function (t) {
                        this.hasMouseDown = !1, this.$emit("mouseup", t)
                    }
                },
                render: function (t) {
                    return t("div", this.setTextColor(this.validationState, {
                        staticClass: "v-input",
                        class: this.classes
                    }), this.genContent())
                }
            }),
            gn = mn,
            yn = (i(26), function () {
                return (yn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            bn = d(h).extend({
                name: "v-counter",
                functional: !0,
                props: {
                    value: {
                        type: [Number, String],
                        default: ""
                    },
                    max: [Number, String]
                },
                render: function (t, e) {
                    var i = e.props,
                        n = parseInt(i.max, 10),
                        s = parseInt(i.value, 10),
                        r = n ? s + " / " + n : String(i.value);
                    return t("div", {
                        staticClass: "v-counter",
                        class: yn({
                            "error--text": n && s > n
                        }, u(e))
                    }, r)
                }
            }),
            Sn = bn,
            xn = (i(25), function () {
                return (xn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            wn = d(_, Ct(["absolute", "fixed", "top", "bottom"]), Wi, h).extend({
                name: "v-progress-linear",
                props: {
                    active: {
                        type: Boolean,
                        default: !0
                    },
                    backgroundColor: {
                        type: String,
                        default: null
                    },
                    backgroundOpacity: {
                        type: [Number, String],
                        default: null
                    },
                    bufferValue: {
                        type: [Number, String],
                        default: 100
                    },
                    color: {
                        type: String,
                        default: "primary"
                    },
                    height: {
                        type: [Number, String],
                        default: 4
                    },
                    indeterminate: Boolean,
                    query: Boolean,
                    rounded: Boolean,
                    stream: Boolean,
                    striped: Boolean,
                    value: {
                        type: [Number, String],
                        default: 0
                    }
                },
                data: function () {
                    return {
                        internalLazyValue: this.value || 0
                    }
                },
                computed: {
                    __cachedBackground: function () {
                        return this.$createElement("div", this.setBackgroundColor(this.backgroundColor || this.color, {
                            staticClass: "v-progress-linear__background",
                            style: this.backgroundStyle
                        }))
                    },
                    __cachedBar: function () {
                        return this.$createElement(this.computedTransition, [this.__cachedBarType])
                    },
                    __cachedBarType: function () {
                        return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate
                    },
                    __cachedBuffer: function () {
                        return this.$createElement("div", {
                            staticClass: "v-progress-linear__buffer",
                            style: this.styles
                        })
                    },
                    __cachedDeterminate: function () {
                        return this.$createElement("div", this.setBackgroundColor(this.color, {
                            staticClass: "v-progress-linear__determinate",
                            style: {
                                width: Y(this.normalizedValue, "%")
                            }
                        }))
                    },
                    __cachedIndeterminate: function () {
                        return this.$createElement("div", {
                            staticClass: "v-progress-linear__indeterminate",
                            class: {
                                "v-progress-linear__indeterminate--active": this.active
                            }
                        }, [this.genProgressBar("long"), this.genProgressBar("short")])
                    },
                    __cachedStream: function () {
                        return this.stream ? this.$createElement("div", this.setTextColor(this.color, {
                            staticClass: "v-progress-linear__stream",
                            style: {
                                width: Y(100 - this.normalizedBuffer, "%")
                            }
                        })) : null
                    },
                    backgroundStyle: function () {
                        var t;
                        return (t = {
                            opacity: null == this.backgroundOpacity ? this.backgroundColor ? 1 : .3 : parseFloat(this.backgroundOpacity)
                        })[this.$vuetify.rtl ? "right" : "left"] = Y(this.normalizedValue, "%"), t.width = Y(this.normalizedBuffer - this.normalizedValue, "%"), t
                    },
                    classes: function () {
                        return xn({
                            "v-progress-linear--absolute": this.absolute,
                            "v-progress-linear--fixed": this.fixed,
                            "v-progress-linear--query": this.query,
                            "v-progress-linear--reactive": this.reactive,
                            "v-progress-linear--rounded": this.rounded,
                            "v-progress-linear--striped": this.striped
                        }, this.themeClasses)
                    },
                    computedTransition: function () {
                        return this.indeterminate ? De : Ne
                    },
                    normalizedBuffer: function () {
                        return this.normalize(this.bufferValue)
                    },
                    normalizedValue: function () {
                        return this.normalize(this.internalLazyValue)
                    },
                    reactive: function () {
                        return Boolean(this.$listeners.change)
                    },
                    styles: function () {
                        var t = {};
                        return this.active || (t.height = 0), this.indeterminate || 100 === parseFloat(this.normalizedBuffer) || (t.width = Y(this.normalizedBuffer, "%")), t
                    }
                },
                methods: {
                    genContent: function () {
                        var t = it(this, "default", {
                            value: this.internalLazyValue
                        });
                        return t ? this.$createElement("div", {
                            staticClass: "v-progress-linear__content"
                        }, t) : null
                    },
                    genListeners: function () {
                        var t = this.$listeners;
                        return this.reactive && (t.click = this.onClick), t
                    },
                    genProgressBar: function (t) {
                        var e;
                        return this.$createElement("div", this.setBackgroundColor(this.color, {
                            staticClass: "v-progress-linear__indeterminate",
                            class: (e = {}, e[t] = !0, e)
                        }))
                    },
                    onClick: function (t) {
                        if (this.reactive) {
                            var e = this.$el.getBoundingClientRect().width;
                            this.internalValue = t.offsetX / e * 100
                        }
                    },
                    normalize: function (t) {
                        return t < 0 ? 0 : t > 100 ? 100 : parseFloat(t)
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-progress-linear",
                        attrs: {
                            role: "progressbar",
                            "aria-valuemin": 0,
                            "aria-valuemax": this.normalizedBuffer,
                            "aria-valuenow": this.indeterminate ? void 0 : this.normalizedValue
                        },
                        class: this.classes,
                        style: {
                            bottom: this.bottom ? 0 : void 0,
                            height: this.active ? Y(this.height) : 0,
                            top: this.top ? 0 : void 0
                        },
                        on: this.genListeners()
                    }, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()])
                }
            }),
            Cn = wn,
            kn = a.a.extend().extend({
                name: "loadable",
                props: {
                    loading: {
                        type: [Boolean, String],
                        default: !1
                    },
                    loaderHeight: {
                        type: [Number, String],
                        default: 2
                    }
                },
                methods: {
                    genProgress: function () {
                        return !1 === this.loading ? null : this.$slots.progress || this.$createElement(Cn, {
                            props: {
                                absolute: !0,
                                color: !0 === this.loading || "" === this.loading ? this.color || "primary" : this.loading,
                                height: this.loaderHeight,
                                indeterminate: !0
                            }
                        })
                    }
                }
            }),
            $n = function () {
                return ($n = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            In = d(gn, kn),
            On = ["color", "file", "time", "date", "datetime-local", "week", "month"],
            _n = In.extend().extend({
                name: "v-text-field",
                directives: {
                    ripple: ee
                },
                inheritAttrs: !1,
                props: {
                    appendOuterIcon: String,
                    autofocus: Boolean,
                    clearable: Boolean,
                    clearIcon: {
                        type: String,
                        default: "$clear"
                    },
                    counter: [Boolean, Number, String],
                    filled: Boolean,
                    flat: Boolean,
                    fullWidth: Boolean,
                    label: String,
                    outlined: Boolean,
                    placeholder: String,
                    prefix: String,
                    prependInnerIcon: String,
                    reverse: Boolean,
                    rounded: Boolean,
                    shaped: Boolean,
                    singleLine: Boolean,
                    solo: Boolean,
                    soloInverted: Boolean,
                    suffix: String,
                    type: {
                        type: String,
                        default: "text"
                    }
                },
                data: function () {
                    return {
                        badInput: !1,
                        labelWidth: 0,
                        prefixWidth: 0,
                        prependWidth: 0,
                        initialValue: null,
                        isBooted: !1,
                        isClearing: !1
                    }
                },
                computed: {
                    classes: function () {
                        return $n({}, gn.options.computed.classes.call(this), {
                            "v-text-field": !0,
                            "v-text-field--full-width": this.fullWidth,
                            "v-text-field--prefix": this.prefix,
                            "v-text-field--single-line": this.isSingle,
                            "v-text-field--solo": this.isSolo,
                            "v-text-field--solo-inverted": this.soloInverted,
                            "v-text-field--solo-flat": this.flat,
                            "v-text-field--filled": this.filled,
                            "v-text-field--is-booted": this.isBooted,
                            "v-text-field--enclosed": this.isEnclosed,
                            "v-text-field--reverse": this.reverse,
                            "v-text-field--outlined": this.outlined,
                            "v-text-field--placeholder": this.placeholder,
                            "v-text-field--rounded": this.rounded,
                            "v-text-field--shaped": this.shaped
                        })
                    },
                    counterValue: function () {
                        return (this.internalValue || "").toString().length
                    },
                    internalValue: {
                        get: function () {
                            return this.lazyValue
                        },
                        set: function (t) {
                            this.lazyValue = t, this.$emit("input", this.lazyValue)
                        }
                    },
                    isDirty: function () {
                        return null != this.lazyValue && this.lazyValue.toString().length > 0 || this.badInput
                    },
                    isEnclosed: function () {
                        return this.filled || this.isSolo || this.outlined || this.fullWidth
                    },
                    isLabelActive: function () {
                        return this.isDirty || On.includes(this.type)
                    },
                    isSingle: function () {
                        return this.isSolo || this.singleLine || this.fullWidth
                    },
                    isSolo: function () {
                        return this.solo || this.soloInverted
                    },
                    labelPosition: function () {
                        var t = this.prefix && !this.labelValue ? this.prefixWidth : 0;
                        return this.labelValue && this.prependWidth && (t -= this.prependWidth), this.$vuetify.rtl === this.reverse ? {
                            left: t,
                            right: "auto"
                        } : {
                            left: "auto",
                            right: t
                        }
                    },
                    showLabel: function () {
                        return this.hasLabel && (!this.isSingle || !this.isLabelActive && !this.placeholder)
                    },
                    labelValue: function () {
                        return !this.isSingle && Boolean(this.isFocused || this.isLabelActive || this.placeholder)
                    }
                },
                watch: {
                    labelValue: "setLabelWidth",
                    outlined: "setLabelWidth",
                    label: function () {
                        this.$nextTick(this.setLabelWidth)
                    },
                    prefix: function () {
                        this.$nextTick(this.setPrefixWidth)
                    },
                    isFocused: function (t) {
                        this.hasColor = t, t ? this.initialValue = this.lazyValue : this.initialValue !== this.lazyValue && this.$emit("change", this.lazyValue)
                    },
                    value: function (t) {
                        this.lazyValue = t
                    }
                },
                created: function () {
                    this.$attrs.hasOwnProperty("box") && S("box", "filled", this), this.$attrs.hasOwnProperty("browser-autocomplete") && S("browser-autocomplete", "autocomplete", this), this.shaped && !(this.filled || this.outlined || this.isSolo) && y("shaped should be used with either filled or outlined", this)
                },
                mounted: function () {
                    var t = this;
                    this.autofocus && this.onFocus(), this.setLabelWidth(), this.setPrefixWidth(), this.setPrependWidth(), requestAnimationFrame(function () {
                        return t.isBooted = !0
                    })
                },
                methods: {
                    focus: function () {
                        this.onFocus()
                    },
                    blur: function (t) {
                        var e = this;
                        window.requestAnimationFrame(function () {
                            e.$refs.input && e.$refs.input.blur()
                        })
                    },
                    clearableCallback: function () {
                        var t = this;
                        this.$refs.input && this.$refs.input.focus(), this.$nextTick(function () {
                            return t.internalValue = null
                        })
                    },
                    genAppendSlot: function () {
                        var t = [];
                        return this.$slots["append-outer"] ? t.push(this.$slots["append-outer"]) : this.appendOuterIcon && t.push(this.genIcon("appendOuter")), this.genSlot("append", "outer", t)
                    },
                    genPrependInnerSlot: function () {
                        var t = [];
                        return this.$slots["prepend-inner"] ? t.push(this.$slots["prepend-inner"]) : this.prependInnerIcon && t.push(this.genIcon("prependInner")), this.genSlot("prepend", "inner", t)
                    },
                    genIconSlot: function () {
                        var t = [];
                        return this.$slots.append ? t.push(this.$slots.append) : this.appendIcon && t.push(this.genIcon("append")), this.genSlot("append", "inner", t)
                    },
                    genInputSlot: function () {
                        var t = gn.options.methods.genInputSlot.call(this),
                            e = this.genPrependInnerSlot();
                        return e && (t.children = t.children || [], t.children.unshift(e)), t
                    },
                    genClearIcon: function () {
                        if (!this.clearable) return null;
                        var t = this.isDirty ? "clear" : "";
                        return this.genSlot("append", "inner", [this.genIcon(t, this.clearableCallback)])
                    },
                    genCounter: function () {
                        if (!1 === this.counter || null == this.counter) return null;
                        var t = !0 === this.counter ? this.attrs$.maxlength : this.counter;
                        return this.$createElement(Sn, {
                            props: {
                                dark: this.dark,
                                light: this.light,
                                max: t,
                                value: this.counterValue
                            }
                        })
                    },
                    genDefaultSlot: function () {
                        return [this.genFieldset(), this.genTextFieldSlot(), this.genClearIcon(), this.genIconSlot(), this.genProgress()]
                    },
                    genFieldset: function () {
                        return this.outlined ? this.$createElement("fieldset", {
                            attrs: {
                                "aria-hidden": !0
                            }
                        }, [this.genLegend()]) : null
                    },
                    genLabel: function () {
                        if (!this.showLabel) return null;
                        var t = {
                            props: {
                                absolute: !0,
                                color: this.validationState,
                                dark: this.dark,
                                disabled: this.disabled,
                                focused: !this.isSingle && (this.isFocused || !!this.validationState),
                                for: this.computedId,
                                left: this.labelPosition.left,
                                light: this.light,
                                right: this.labelPosition.right,
                                value: this.labelValue
                            }
                        };
                        return this.$createElement(cn, t, this.$slots.label || this.label)
                    },
                    genLegend: function () {
                        var t = this.singleLine || !this.labelValue && !this.isDirty ? 0 : this.labelWidth,
                            e = this.$createElement("span", {
                                domProps: {
                                    innerHTML: "&#8203;"
                                }
                            });
                        return this.$createElement("legend", {
                            style: {
                                width: this.isSingle ? void 0 : Y(t)
                            }
                        }, [e])
                    },
                    genInput: function () {
                        var t = Object.assign({}, this.listeners$);
                        return delete t.change, this.$createElement("input", {
                            style: {},
                            domProps: {
                                value: this.lazyValue
                            },
                            attrs: $n({}, this.attrs$, {
                                autofocus: this.autofocus,
                                disabled: this.disabled,
                                id: this.computedId,
                                placeholder: this.placeholder,
                                readonly: this.readonly,
                                type: this.type
                            }),
                            on: Object.assign(t, {
                                blur: this.onBlur,
                                input: this.onInput,
                                focus: this.onFocus,
                                keydown: this.onKeyDown
                            }),
                            ref: "input"
                        })
                    },
                    genMessages: function () {
                        return this.hideDetails ? null : this.$createElement("div", {
                            staticClass: "v-text-field__details"
                        }, [gn.options.methods.genMessages.call(this), this.genCounter()])
                    },
                    genTextFieldSlot: function () {
                        return this.$createElement("div", {
                            staticClass: "v-text-field__slot"
                        }, [this.genLabel(), this.prefix ? this.genAffix("prefix") : null, this.genInput(), this.suffix ? this.genAffix("suffix") : null])
                    },
                    genAffix: function (t) {
                        return this.$createElement("div", {
                            class: "v-text-field__" + t,
                            ref: t
                        }, this[t])
                    },
                    onBlur: function (t) {
                        var e = this;
                        this.isFocused = !1, t && this.$nextTick(function () {
                            return e.$emit("blur", t)
                        })
                    },
                    onClick: function () {
                        this.isFocused || this.disabled || !this.$refs.input || this.$refs.input.focus()
                    },
                    onFocus: function (t) {
                        if (this.$refs.input) return document.activeElement !== this.$refs.input ? this.$refs.input.focus() : void(this.isFocused || (this.isFocused = !0, t && this.$emit("focus", t)))
                    },
                    onInput: function (t) {
                        var e = t.target;
                        this.internalValue = e.value, this.badInput = e.validity && e.validity.badInput
                    },
                    onKeyDown: function (t) {
                        t.keyCode === U.enter && this.$emit("change", this.internalValue), this.$emit("keydown", t)
                    },
                    onMouseDown: function (t) {
                        t.target !== this.$refs.input && (t.preventDefault(), t.stopPropagation()), gn.options.methods.onMouseDown.call(this, t)
                    },
                    onMouseUp: function (t) {
                        this.hasMouseDown && this.focus(), gn.options.methods.onMouseUp.call(this, t)
                    },
                    setLabelWidth: function () {
                        this.outlined && this.$refs.label && (this.labelWidth = .75 * this.$refs.label.scrollWidth + 6)
                    },
                    setPrefixWidth: function () {
                        this.$refs.prefix && (this.prefixWidth = this.$refs.prefix.offsetWidth)
                    },
                    setPrependWidth: function () {
                        this.outlined && this.$refs["prepend-inner"] && (this.prependWidth = this.$refs["prepend-inner"].offsetWidth)
                    }
                }
            }),
            Tn = a.a.extend({
                name: "comparable",
                props: {
                    valueComparator: {
                        type: Function,
                        default: L
                    }
                }
            }),
            Bn = a.a.extend({
                name: "filterable",
                props: {
                    noDataText: {
                        type: String,
                        default: "$vuetify.noDataText"
                    }
                }
            }),
            An = function () {
                return (An = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            En = function (t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    i = 0;
                return e ? e.call(t) : {
                    next: function () {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                }
            },
            Mn = {
                closeOnClick: !1,
                closeOnContentClick: !1,
                disableKeys: !0,
                openOnClick: !1,
                maxHeight: 304
            },
            Dn = d(_n, Tn, Bn).extend().extend({
                name: "v-select",
                directives: {
                    ClickOutside: pi
                },
                props: {
                    appendIcon: {
                        type: String,
                        default: "$dropdown"
                    },
                    attach: {
                        default: !1
                    },
                    cacheItems: Boolean,
                    chips: Boolean,
                    clearable: Boolean,
                    deletableChips: Boolean,
                    eager: Boolean,
                    hideSelected: Boolean,
                    items: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    itemColor: {
                        type: String,
                        default: "primary"
                    },
                    itemDisabled: {
                        type: [String, Array, Function],
                        default: "disabled"
                    },
                    itemText: {
                        type: [String, Array, Function],
                        default: "text"
                    },
                    itemValue: {
                        type: [String, Array, Function],
                        default: "value"
                    },
                    menuProps: {
                        type: [String, Array, Object],
                        default: function () {
                            return Mn
                        }
                    },
                    multiple: Boolean,
                    openOnClear: Boolean,
                    returnObject: Boolean,
                    smallChips: Boolean
                },
                data: function () {
                    return {
                        cachedItems: this.cacheItems ? this.items : [],
                        content: null,
                        isBooted: !1,
                        isMenuActive: !1,
                        lastItem: 20,
                        lazyValue: void 0 !== this.value ? this.value : this.multiple ? [] : void 0,
                        selectedIndex: -1,
                        selectedItems: [],
                        keyboardLookupPrefix: "",
                        keyboardLookupLastTime: 0
                    }
                },
                computed: {
                    allItems: function () {
                        return this.filterDuplicates(this.cachedItems.concat(this.items))
                    },
                    classes: function () {
                        return An({}, _n.options.computed.classes.call(this), {
                            "v-select": !0,
                            "v-select--chips": this.hasChips,
                            "v-select--chips--small": this.smallChips,
                            "v-select--is-menu-active": this.isMenuActive,
                            "v-select--is-multi": this.multiple
                        })
                    },
                    computedItems: function () {
                        return this.allItems
                    },
                    computedOwns: function () {
                        return "list-" + this._uid
                    },
                    counterValue: function () {
                        return this.multiple ? this.selectedItems.length : (this.getText(this.selectedItems[0]) || "").toString().length
                    },
                    directives: function () {
                        return this.isFocused ? [{
                            name: "click-outside",
                            value: this.blur,
                            args: {
                                closeConditional: this.closeConditional
                            }
                        }] : void 0
                    },
                    dynamicHeight: function () {
                        return "auto"
                    },
                    hasChips: function () {
                        return this.chips || this.smallChips
                    },
                    hasSlot: function () {
                        return Boolean(this.hasChips || this.$scopedSlots.selection)
                    },
                    isDirty: function () {
                        return this.selectedItems.length > 0
                    },
                    listData: function () {
                        var t, e = this.$vnode && this.$vnode.context.$options._scopeId,
                            i = e ? ((t = {})[e] = !0, t) : {};
                        return {
                            attrs: An({}, i, {
                                id: this.computedOwns
                            }),
                            props: {
                                action: this.multiple,
                                color: this.itemColor,
                                dense: this.dense,
                                hideSelected: this.hideSelected,
                                items: this.virtualizedItems,
                                itemDisabled: this.itemDisabled,
                                itemText: this.itemText,
                                itemValue: this.itemValue,
                                noDataText: this.$vuetify.lang.t(this.noDataText),
                                selectedItems: this.selectedItems
                            },
                            on: {
                                select: this.selectItem
                            },
                            scopedSlots: {
                                item: this.$scopedSlots.item
                            }
                        }
                    },
                    staticList: function () {
                        return (this.$slots["no-data"] || this.$slots["prepend-item"] || this.$slots["append-item"]) && b("assert: staticList should not be called if slots are used"), this.$createElement(an, this.listData)
                    },
                    virtualizedItems: function () {
                        return this.$_menuProps.auto ? this.computedItems : this.computedItems.slice(0, this.lastItem)
                    },
                    menuCanShow: function () {
                        return !0
                    },
                    $_menuProps: function () {
                        var t = "string" == typeof this.menuProps ? this.menuProps.split(",") : this.menuProps;
                        return Array.isArray(t) && (t = t.reduce(function (t, e) {
                            return t[e.trim()] = !0, t
                        }, {})), An({}, Mn, {
                            eager: this.eager,
                            value: this.menuCanShow && this.isMenuActive,
                            nudgeBottom: t.offsetY ? 1 : 0
                        }, t)
                    }
                },
                watch: {
                    internalValue: function (t) {
                        this.initialValue = t, this.setSelectedItems()
                    },
                    isBooted: function () {
                        var t = this;
                        this.$nextTick(function () {
                            t.content && t.content.addEventListener && t.content.addEventListener("scroll", t.onScroll, !1)
                        })
                    },
                    isMenuActive: function (t) {
                        var e = this;
                        this.$nextTick(function () {
                            return e.onMenuActiveChange(t)
                        }), t && (this.isBooted = !0)
                    },
                    items: {
                        immediate: !0,
                        handler: function (t) {
                            var e = this;
                            this.cacheItems && this.$nextTick(function () {
                                e.cachedItems = e.filterDuplicates(e.cachedItems.concat(t))
                            }), this.setSelectedItems()
                        }
                    }
                },
                mounted: function () {
                    this.content = this.$refs.menu && this.$refs.menu.$refs.content
                },
                methods: {
                    blur: function (t) {
                        _n.options.methods.blur.call(this, t), this.isMenuActive = !1, this.isFocused = !1, this.selectedIndex = -1
                    },
                    activateMenu: function () {
                        this.disabled || this.readonly || this.isMenuActive || (this.isMenuActive = !0)
                    },
                    clearableCallback: function () {
                        var t = this;
                        this.setValue(this.multiple ? [] : void 0), this.$nextTick(function () {
                            return t.$refs.input && t.$refs.input.focus()
                        }), this.openOnClear && (this.isMenuActive = !0)
                    },
                    closeConditional: function (t) {
                        return !this._isDestroyed && this.content && !this.content.contains(t.target) && this.$el && !this.$el.contains(t.target) && t.target !== this.$el
                    },
                    filterDuplicates: function (t) {
                        for (var e = new Map, i = 0; i < t.length; ++i) {
                            var n = t[i],
                                s = this.getValue(n);
                            !e.has(s) && e.set(s, n)
                        }
                        return Array.from(e.values())
                    },
                    findExistingIndex: function (t) {
                        var e = this,
                            i = this.getValue(t);
                        return (this.internalValue || []).findIndex(function (t) {
                            return e.valueComparator(e.getValue(t), i)
                        })
                    },
                    genChipSelection: function (t, e) {
                        var i = this,
                            n = this.disabled || this.readonly || this.getDisabled(t);
                        return this.$createElement(Xe, {
                            staticClass: "v-chip--select",
                            attrs: {
                                tabindex: -1
                            },
                            props: {
                                close: this.deletableChips && !n,
                                disabled: n,
                                inputValue: e === this.selectedIndex,
                                small: this.smallChips
                            },
                            on: {
                                click: function (t) {
                                    n || (t.stopPropagation(), i.selectedIndex = e)
                                },
                                "click:close": function () {
                                    return i.onChipInput(t)
                                }
                            },
                            key: JSON.stringify(this.getValue(t))
                        }, this.getText(t))
                    },
                    genCommaSelection: function (t, e, i) {
                        var n = e === this.selectedIndex && this.computedColor,
                            s = this.disabled || this.getDisabled(t);
                        return this.$createElement("div", this.setTextColor(n, {
                            staticClass: "v-select__selection v-select__selection--comma",
                            class: {
                                "v-select__selection--disabled": s
                            },
                            key: JSON.stringify(this.getValue(t))
                        }), this.getText(t) + (i ? "" : ", "))
                    },
                    genDefaultSlot: function () {
                        var t = this.genSelections(),
                            e = this.genInput();
                        return Array.isArray(t) ? t.push(e) : (t.children = t.children || [], t.children.push(e)), [this.genFieldset(), this.$createElement("div", {
                            staticClass: "v-select__slot",
                            directives: this.directives
                        }, [this.genLabel(), this.prefix ? this.genAffix("prefix") : null, t, this.suffix ? this.genAffix("suffix") : null, this.genClearIcon(), this.genIconSlot(), this.genHiddenInput()]), this.genMenu(), this.genProgress()]
                    },
                    genInput: function () {
                        var t = _n.options.methods.genInput.call(this);
                        return delete t.data.attrs.name, t.data.domProps.value = null, t.data.attrs.readonly = !0, t.data.attrs.type = "text", t.data.attrs["aria-readonly"] = !0, t.data.on.keypress = this.onKeyPress, t
                    },
                    genHiddenInput: function () {
                        return this.$createElement("input", {
                            domProps: {
                                value: this.lazyValue
                            },
                            attrs: {
                                type: "hidden"
                            }
                        })
                    },
                    genInputSlot: function () {
                        var t = _n.options.methods.genInputSlot.call(this);
                        return t.data.attrs = An({}, t.data.attrs, {
                            role: "button",
                            "aria-haspopup": "listbox",
                            "aria-expanded": String(this.isMenuActive),
                            "aria-owns": this.computedOwns
                        }), t
                    },
                    genList: function () {
                        return this.$slots["no-data"] || this.$slots["prepend-item"] || this.$slots["append-item"] ? this.genListWithSlot() : this.staticList
                    },
                    genListWithSlot: function () {
                        var t = this,
                            e = ["prepend-item", "no-data", "append-item"].filter(function (e) {
                                return t.$slots[e]
                            }).map(function (e) {
                                return t.$createElement("template", {
                                    slot: e
                                }, t.$slots[e])
                            });
                        return this.$createElement(an, An({}, this.listData), e)
                    },
                    genMenu: function () {
                        var t = this,
                            e = this.$_menuProps;
                        return e.activator = this.$refs["input-slot"], "" === this.attach || !0 === this.attach || "attach" === this.attach ? e.attach = this.$el : e.attach = this.attach, this.$createElement(xi, {
                            attrs: {
                                role: void 0
                            },
                            props: e,
                            on: {
                                input: function (e) {
                                    t.isMenuActive = e, t.isFocused = e
                                }
                            },
                            ref: "menu"
                        }, [this.genList()])
                    },
                    genSelections: function () {
                        var t, e = this.selectedItems.length,
                            i = new Array(e);
                        for (t = this.$scopedSlots.selection ? this.genSlotSelection : this.hasChips ? this.genChipSelection : this.genCommaSelection; e--;) i[e] = t(this.selectedItems[e], e, e === i.length - 1);
                        return this.$createElement("div", {
                            staticClass: "v-select__selections"
                        }, i)
                    },
                    genSlotSelection: function (t, e) {
                        var i = this;
                        return this.$scopedSlots.selection({
                            attrs: {
                                class: "v-chip--select"
                            },
                            parent: this,
                            item: t,
                            index: e,
                            select: function (t) {
                                t.stopPropagation(), i.selectedIndex = e
                            },
                            selected: e === this.selectedIndex,
                            disabled: this.disabled || this.readonly
                        })
                    },
                    getMenuIndex: function () {
                        return this.$refs.menu ? this.$refs.menu.listIndex : -1
                    },
                    getDisabled: function (t) {
                        return j(t, this.itemDisabled, !1)
                    },
                    getText: function (t) {
                        return j(t, this.itemText, t)
                    },
                    getValue: function (t) {
                        return j(t, this.itemValue, this.getText(t))
                    },
                    onBlur: function (t) {
                        t && this.$emit("blur", t)
                    },
                    onChipInput: function (t) {
                        this.multiple ? this.selectItem(t) : this.setValue(null), 0 === this.selectedItems.length ? this.isMenuActive = !0 : this.isMenuActive = !1, this.selectedIndex = -1
                    },
                    onClick: function () {
                        this.isDisabled || (this.isMenuActive = !0, this.isFocused || (this.isFocused = !0, this.$emit("focus")))
                    },
                    onEscDown: function (t) {
                        t.preventDefault(), this.isMenuActive && (t.stopPropagation(), this.isMenuActive = !1)
                    },
                    onKeyPress: function (t) {
                        var e = this;
                        if (!this.multiple && !this.readonly) {
                            var i = performance.now();
                            i - this.keyboardLookupLastTime > 1e3 && (this.keyboardLookupPrefix = ""), this.keyboardLookupPrefix += t.key.toLowerCase(), this.keyboardLookupLastTime = i;
                            var n = this.allItems.findIndex(function (t) {
                                    return (e.getText(t) || "").toString().toLowerCase().startsWith(e.keyboardLookupPrefix)
                                }),
                                s = this.allItems[n]; - 1 !== n && (this.setValue(this.returnObject ? s : this.getValue(s)), setTimeout(function () {
                                return e.setMenuIndex(n)
                            }))
                        }
                    },
                    onKeyDown: function (t) {
                        var e = this,
                            i = t.keyCode,
                            n = this.$refs.menu;
                        if ([U.enter, U.space].includes(i) && this.activateMenu(), n) return this.isMenuActive && i !== U.tab && this.$nextTick(function () {
                            n.changeListIndex(t), e.$emit("update:list-index", n.listIndex)
                        }), !this.isMenuActive && [U.up, U.down].includes(i) ? this.onUpDown(t) : i === U.esc ? this.onEscDown(t) : i === U.tab ? this.onTabDown(t) : i === U.space ? this.onSpaceDown(t) : void 0
                    },
                    onMenuActiveChange: function (t) {
                        if (!(this.multiple && !t || this.getMenuIndex() > -1)) {
                            var e = this.$refs.menu;
                            if (e && this.isDirty)
                                for (var i = 0; i < e.tiles.length; i++)
                                    if ("true" === e.tiles[i].getAttribute("aria-selected")) {
                                        this.setMenuIndex(i);
                                        break
                                    }
                        }
                    },
                    onMouseUp: function (t) {
                        var e = this;
                        if (this.hasMouseDown && 3 !== t.which) {
                            var i = this.$refs["append-inner"];
                            this.isMenuActive && i && (i === t.target || i.contains(t.target)) ? this.$nextTick(function () {
                                return e.isMenuActive = !e.isMenuActive
                            }) : this.isEnclosed && !this.isDisabled && (this.isMenuActive = !0)
                        }
                        _n.options.methods.onMouseUp.call(this, t)
                    },
                    onScroll: function () {
                        var t = this;
                        if (this.isMenuActive) {
                            if (this.lastItem >= this.computedItems.length) return;
                            this.content.scrollHeight - (this.content.scrollTop + this.content.clientHeight) < 200 && (this.lastItem += 20)
                        } else requestAnimationFrame(function () {
                            return t.content.scrollTop = 0
                        })
                    },
                    onSpaceDown: function (t) {
                        t.preventDefault()
                    },
                    onTabDown: function (t) {
                        var e = this.$refs.menu;
                        if (e) {
                            var i = e.activeTile;
                            !this.multiple && i && this.isMenuActive ? (t.preventDefault(), t.stopPropagation(), i.click()) : this.blur(t)
                        }
                    },
                    onUpDown: function (t) {
                        var e = this.$refs.menu;
                        if (e) {
                            if (t.preventDefault(), this.multiple) return this.activateMenu();
                            var i = t.keyCode;
                            e.getTiles(), U.up === i ? e.prevTile() : e.nextTile(), e.activeTile && e.activeTile.click()
                        }
                    },
                    selectItem: function (t) {
                        var e = this;
                        if (this.multiple) {
                            var i = (this.internalValue || []).slice(),
                                n = this.findExistingIndex(t);
                            if (-1 !== n ? i.splice(n, 1) : i.push(t), this.setValue(i.map(function (t) {
                                    return e.returnObject ? t : e.getValue(t)
                                })), this.$nextTick(function () {
                                    e.$refs.menu && e.$refs.menu.updateDimensions()
                                }), !this.multiple) return;
                            var s = this.getMenuIndex();
                            if (this.setMenuIndex(-1), this.hideSelected) return;
                            this.$nextTick(function () {
                                return e.setMenuIndex(s)
                            })
                        } else this.setValue(this.returnObject ? t : this.getValue(t)), this.isMenuActive = !1
                    },
                    setMenuIndex: function (t) {
                        this.$refs.menu && (this.$refs.menu.listIndex = t)
                    },
                    setSelectedItems: function () {
                        var t, e, i = this,
                            n = [],
                            s = this.multiple && Array.isArray(this.internalValue) ? this.internalValue : [this.internalValue],
                            r = function (t) {
                                var e = o.allItems.findIndex(function (e) {
                                    return i.valueComparator(i.getValue(e), i.getValue(t))
                                });
                                e > -1 && n.push(o.allItems[e])
                            },
                            o = this;
                        try {
                            for (var a = En(s), l = a.next(); !l.done; l = a.next()) {
                                r(l.value)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                l && !l.done && (e = a.return) && e.call(a)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        this.selectedItems = n
                    },
                    setValue: function (t) {
                        var e = this.internalValue;
                        this.internalValue = t, t !== e && this.$emit("change", t)
                    }
                }
            }),
            Vn = function () {
                return (Vn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Pn = Vn({}, Mn, {
                offsetY: !0,
                offsetOverflow: !0,
                transition: !1
            }),
            Ln = Dn.extend({
                name: "v-autocomplete",
                props: {
                    allowOverflow: {
                        type: Boolean,
                        default: !0
                    },
                    autoSelectFirst: {
                        type: Boolean,
                        default: !1
                    },
                    filter: {
                        type: Function,
                        default: function (t, e, i) {
                            return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase()) > -1
                        }
                    },
                    hideNoData: Boolean,
                    menuProps: {
                        type: Dn.options.props.menuProps.type,
                        default: function () {
                            return Pn
                        }
                    },
                    noFilter: Boolean,
                    searchInput: {
                        type: String,
                        default: void 0
                    }
                },
                data: function () {
                    return {
                        lazySearch: this.searchInput
                    }
                },
                computed: {
                    classes: function () {
                        return Vn({}, Dn.options.computed.classes.call(this), {
                            "v-autocomplete": !0,
                            "v-autocomplete--is-selecting-index": this.selectedIndex > -1
                        })
                    },
                    computedItems: function () {
                        return this.filteredItems
                    },
                    selectedValues: function () {
                        var t = this;
                        return this.selectedItems.map(function (e) {
                            return t.getValue(e)
                        })
                    },
                    hasDisplayedItems: function () {
                        var t = this;
                        return this.hideSelected ? this.filteredItems.some(function (e) {
                            return !t.hasItem(e)
                        }) : this.filteredItems.length > 0
                    },
                    currentRange: function () {
                        return null == this.selectedItem ? 0 : String(this.getText(this.selectedItem)).length
                    },
                    filteredItems: function () {
                        var t = this;
                        return !this.isSearching || this.noFilter || null == this.internalSearch ? this.allItems : this.allItems.filter(function (e) {
                            return t.filter(e, String(t.internalSearch), String(t.getText(e)))
                        })
                    },
                    internalSearch: {
                        get: function () {
                            return this.lazySearch
                        },
                        set: function (t) {
                            this.lazySearch = t, this.$emit("update:search-input", t)
                        }
                    },
                    isAnyValueAllowed: function () {
                        return !1
                    },
                    isDirty: function () {
                        return this.searchIsDirty || this.selectedItems.length > 0
                    },
                    isSearching: function () {
                        return this.multiple && this.searchIsDirty || this.searchIsDirty && this.internalSearch !== this.getText(this.selectedItem)
                    },
                    menuCanShow: function () {
                        return !!this.isFocused && (this.hasDisplayedItems || !this.hideNoData)
                    },
                    $_menuProps: function () {
                        var t = Dn.options.computed.$_menuProps.call(this);
                        return t.contentClass = ("v-autocomplete__content " + (t.contentClass || "")).trim(), Vn({}, Pn, t)
                    },
                    searchIsDirty: function () {
                        return null != this.internalSearch && "" !== this.internalSearch
                    },
                    selectedItem: function () {
                        var t = this;
                        return this.multiple ? null : this.selectedItems.find(function (e) {
                            return t.valueComparator(t.getValue(e), t.getValue(t.internalValue))
                        })
                    },
                    listData: function () {
                        var t = Dn.options.computed.listData.call(this);
                        return t.props = Vn({}, t.props, {
                            items: this.virtualizedItems,
                            noFilter: this.noFilter || !this.isSearching || !this.filteredItems.length,
                            searchInput: this.internalSearch
                        }), t
                    }
                },
                watch: {
                    filteredItems: "onFilteredItemsChanged",
                    internalValue: "setSearch",
                    isFocused: function (t) {
                        t ? (document.addEventListener("copy", this.onCopy), this.$refs.input && this.$refs.input.select()) : (document.removeEventListener("copy", this.onCopy), this.updateSelf())
                    },
                    isMenuActive: function (t) {
                        !t && this.hasSlot && (this.lazySearch = void 0)
                    },
                    items: function (t, e) {
                        e && e.length || !this.hideNoData || !this.isFocused || this.isMenuActive || !t.length || this.activateMenu()
                    },
                    searchInput: function (t) {
                        this.lazySearch = t
                    },
                    internalSearch: "onInternalSearchChanged",
                    itemText: "updateSelf"
                },
                created: function () {
                    this.setSearch()
                },
                methods: {
                    onFilteredItemsChanged: function (t, e) {
                        var i = this;
                        t !== e && (this.setMenuIndex(-1), this.$nextTick(function () {
                            i.internalSearch && (1 === t.length || i.autoSelectFirst) && (i.$refs.menu.getTiles(), i.setMenuIndex(0))
                        }))
                    },
                    onInternalSearchChanged: function () {
                        this.updateMenuDimensions()
                    },
                    updateMenuDimensions: function () {
                        this.isMenuActive && this.$refs.menu && this.$refs.menu.updateDimensions()
                    },
                    changeSelectedIndex: function (t) {
                        this.searchIsDirty || (this.multiple && t === U.left ? -1 === this.selectedIndex ? this.selectedIndex = this.selectedItems.length - 1 : this.selectedIndex-- : this.multiple && t === U.right ? this.selectedIndex >= this.selectedItems.length - 1 ? this.selectedIndex = -1 : this.selectedIndex++ : t !== U.backspace && t !== U.delete || this.deleteCurrentItem())
                    },
                    deleteCurrentItem: function () {
                        if (!this.readonly) {
                            var t = this.selectedItems.length - 1;
                            if (-1 !== this.selectedIndex) {
                                var e = this.selectedItems[this.selectedIndex];
                                if (!this.getDisabled(e)) {
                                    var i = this.selectedIndex === t ? this.selectedIndex - 1 : this.selectedItems[this.selectedIndex + 1] ? this.selectedIndex : -1; - 1 === i ? this.setValue(this.multiple ? [] : void 0) : this.selectItem(e), this.selectedIndex = i
                                }
                            } else this.selectedIndex = t
                        }
                    },
                    clearableCallback: function () {
                        this.internalSearch = void 0, Dn.options.methods.clearableCallback.call(this)
                    },
                    genInput: function () {
                        var t = _n.options.methods.genInput.call(this);
                        return t.data = t.data || {}, t.data.attrs = t.data.attrs || {}, t.data.attrs.autocomplete = t.data.attrs.autocomplete || "disabled", t.data.domProps = t.data.domProps || {}, t.data.domProps.value = this.internalSearch, t
                    },
                    genInputSlot: function () {
                        var t = Dn.options.methods.genInputSlot.call(this);
                        return t.data.attrs.role = "combobox", t
                    },
                    genSelections: function () {
                        return this.hasSlot || this.multiple ? Dn.options.methods.genSelections.call(this) : []
                    },
                    onClick: function () {
                        this.isDisabled || (this.selectedIndex > -1 ? this.selectedIndex = -1 : this.onFocus(), this.activateMenu())
                    },
                    onInput: function (t) {
                        if (!(this.selectedIndex > -1) && t.target) {
                            var e = t.target,
                                i = e.value;
                            e.value && this.activateMenu(), this.internalSearch = i, this.badInput = e.validity && e.validity.badInput
                        }
                    },
                    onKeyDown: function (t) {
                        var e = t.keyCode;
                        Dn.options.methods.onKeyDown.call(this, t), this.changeSelectedIndex(e)
                    },
                    onSpaceDown: function (t) {},
                    onTabDown: function (t) {
                        Dn.options.methods.onTabDown.call(this, t), this.updateSelf()
                    },
                    onUpDown: function () {
                        this.activateMenu()
                    },
                    selectItem: function (t) {
                        Dn.options.methods.selectItem.call(this, t), this.setSearch()
                    },
                    setSelectedItems: function () {
                        Dn.options.methods.setSelectedItems.call(this), this.isFocused || this.setSearch()
                    },
                    setSearch: function () {
                        var t = this;
                        this.$nextTick(function () {
                            t.multiple && t.internalSearch && t.isMenuActive || (t.internalSearch = !t.selectedItems.length || t.multiple || t.hasSlot ? null : t.getText(t.selectedItem))
                        })
                    },
                    updateSelf: function () {
                        (this.searchIsDirty || this.internalValue) && (this.valueComparator(this.internalSearch, this.getValue(this.internalValue)) || this.setSearch())
                    },
                    hasItem: function (t) {
                        return this.selectedValues.indexOf(this.getValue(t)) > -1
                    },
                    onCopy: function (t) {
                        if (-1 !== this.selectedIndex) {
                            var e = this.selectedItems[this.selectedIndex],
                                i = this.getText(e);
                            t.clipboardData.setData("text/plain", i), t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain", i), t.preventDefault()
                        }
                    }
                }
            }),
            Hn = Ln,
            jn = (i(38), d(_, Bt, Ct(["left", "bottom"]), he).extend({
                name: "v-badge",
                props: {
                    color: {
                        type: String,
                        default: "primary"
                    },
                    overlap: Boolean,
                    transition: {
                        type: String,
                        default: "fab-transition"
                    },
                    value: {
                        default: !0
                    }
                },
                computed: {
                    classes: function () {
                        return {
                            "v-badge--bottom": this.bottom,
                            "v-badge--left": this.left,
                            "v-badge--overlap": this.overlap
                        }
                    }
                },
                render: function (t) {
                    var e = this.$slots.badge && [t("span", this.setBackgroundColor(this.color, {
                        staticClass: "v-badge__badge",
                        attrs: this.$attrs,
                        directives: [{
                            name: "show",
                            value: this.isActive
                        }]
                    }), this.$slots.badge)];
                    return t("span", {
                        staticClass: "v-badge",
                        class: this.classes
                    }, [this.$slots.default, this.transition ? t("transition", {
                        props: {
                            name: this.transition,
                            origin: this.origin,
                            mode: this.mode
                        }
                    }, e) : e])
                }
            })),
            Nn = (i(39), function () {
                return (Nn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Fn = d(Ht, Bt).extend({
                name: "v-banner",
                inheritAttrs: !1,
                props: {
                    icon: String,
                    iconColor: String,
                    mobileBreakPoint: {
                        type: [Number, String],
                        default: 960
                    },
                    singleLine: Boolean,
                    sticky: Boolean,
                    tile: {
                        type: Boolean,
                        default: !0
                    },
                    value: {
                        type: Boolean,
                        default: !0
                    }
                },
                computed: {
                    classes: function () {
                        return Nn({}, Ht.options.computed.classes.call(this), {
                            "v-banner--has-icon": this.hasIcon,
                            "v-banner--is-mobile": this.isMobile,
                            "v-banner--single-line": this.singleLine,
                            "v-banner--sticky": this.sticky
                        })
                    },
                    hasActions: function () {
                        return Boolean(this.$slots.actions || this.$scopedSlots.actions)
                    },
                    hasIcon: function () {
                        return Boolean(this.icon || this.$slots.icon)
                    },
                    isMobile: function () {
                        return this.$vuetify.breakpoint.width < Number(this.mobileBreakPoint)
                    },
                    styles: function () {
                        var t = Ht.options.computed.styles.call(this);
                        if (!this.sticky) return t;
                        var e = this.$vuetify.application,
                            i = e.bar,
                            n = e.top;
                        return Nn({}, t, {
                            position: "sticky",
                            top: i + n + "px",
                            zIndex: 1
                        })
                    }
                },
                methods: {
                    toggle: function () {
                        this.isActive = !this.isActive
                    },
                    iconClick: function (t) {
                        this.$emit("click:icon", t)
                    },
                    genIcon: function () {
                        var t;
                        if (this.hasIcon) return t = this.icon ? this.$createElement(Lt, {
                            props: {
                                color: this.iconColor,
                                size: 28
                            }
                        }, [this.icon]) : this.$slots.icon, this.$createElement(Ki, {
                            staticClass: "v-banner__icon",
                            props: {
                                color: this.color,
                                size: 40
                            },
                            on: {
                                click: this.iconClick
                            }
                        }, [t])
                    },
                    genText: function () {
                        return this.$createElement("div", {
                            staticClass: "v-banner__text"
                        }, this.$slots.default)
                    },
                    genActions: function () {
                        var t = this;
                        if (this.hasActions) {
                            var e = this.$scopedSlots.actions ? this.$scopedSlots.actions({
                                dismiss: function () {
                                    return t.isActive = !1
                                }
                            }) : this.$slots.actions;
                            return this.$createElement("div", {
                                staticClass: "v-banner__actions"
                            }, e)
                        }
                    },
                    genContent: function () {
                        return this.$createElement("div", {
                            staticClass: "v-banner__content"
                        }, [this.genIcon(), this.genText()])
                    },
                    genWrapper: function () {
                        return this.$createElement("div", {
                            staticClass: "v-banner__wrapper"
                        }, [this.genContent(), this.genActions()])
                    }
                },
                render: function (t) {
                    return t(Re, [t("div", {
                        staticClass: "v-banner",
                        class: this.classes,
                        style: this.styles,
                        directives: [{
                            name: "show",
                            value: this.isActive
                        }]
                    }, [this.genWrapper()])])
                }
            }),
            zn = (i(40), Yi.extend({
                name: "button-group",
                provide: function () {
                    return {
                        btnToggle: this
                    }
                },
                computed: {
                    classes: function () {
                        return Yi.options.computed.classes.call(this)
                    }
                },
                methods: {
                    genData: Yi.options.methods.genData
                }
            })),
            Wn = function () {
                return (Wn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Rn = d($t("bottom", ["height", "inputValue"]), _, at, _t("inputValue"), Wi, It, h).extend({
                name: "v-bottom-navigation",
                props: {
                    activeClass: {
                        type: String,
                        default: "v-btn--active"
                    },
                    backgroundColor: String,
                    grow: Boolean,
                    height: {
                        type: [Number, String],
                        default: 56
                    },
                    hideOnScroll: Boolean,
                    horizontal: Boolean,
                    inputValue: {
                        type: Boolean,
                        default: !0
                    },
                    mandatory: Boolean,
                    shift: Boolean
                },
                data: function () {
                    return {
                        isActive: this.inputValue
                    }
                },
                computed: {
                    canScroll: function () {
                        return It.options.computed.canScroll.call(this) && (this.hideOnScroll || !this.inputValue)
                    },
                    classes: function () {
                        return {
                            "v-bottom-navigation--absolute": this.absolute,
                            "v-bottom-navigation--grow": this.grow,
                            "v-bottom-navigation--fixed": !this.absolute && (this.app || this.fixed),
                            "v-bottom-navigation--horizontal": this.horizontal,
                            "v-bottom-navigation--shift": this.shift
                        }
                    },
                    styles: function () {
                        return Wn({}, this.measurableStyles, {
                            transform: this.isActive ? "none" : "translateY(100%)"
                        })
                    }
                },
                created: function () {
                    this.$attrs.hasOwnProperty("active") && S("active.sync", "value or v-model", this)
                },
                methods: {
                    thresholdMet: function () {
                        this.isActive = !this.isScrollingUp, this.$emit("update:input-value", this.isActive)
                    },
                    updateApplication: function () {
                        return this.$el ? this.$el.clientHeight : 0
                    },
                    updateValue: function (t) {
                        this.$emit("change", t)
                    }
                },
                render: function (t) {
                    var e = this.setBackgroundColor(this.backgroundColor, {
                        staticClass: "v-bottom-navigation",
                        class: this.classes,
                        style: this.styles,
                        props: {
                            activeClass: this.activeClass,
                            mandatory: Boolean(this.mandatory || void 0 !== this.value),
                            value: this.internalValue
                        },
                        on: {
                            change: this.updateValue
                        }
                    });
                    return this.canScroll && (e.directives = e.directives || [], e.directives.push({
                        arg: this.scrollTarget,
                        name: "scroll",
                        value: this.onScroll
                    })), t(zn, this.setTextColor(this.color, e), this.$slots.default)
                }
            }),
            Yn = (i(41), i(42), i(43), function () {
                return (Yn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Gn = d(_, h, Bt).extend({
                name: "v-overlay",
                props: {
                    absolute: Boolean,
                    color: {
                        type: String,
                        default: "#212121"
                    },
                    dark: {
                        type: Boolean,
                        default: !0
                    },
                    opacity: {
                        type: [Number, String],
                        default: .46
                    },
                    value: {
                        default: !0
                    },
                    zIndex: {
                        type: [Number, String],
                        default: 5
                    }
                },
                computed: {
                    __scrim: function () {
                        var t = this.setBackgroundColor(this.color, {
                            staticClass: "v-overlay__scrim",
                            style: {
                                opacity: this.computedOpacity
                            }
                        });
                        return this.$createElement("div", t)
                    },
                    classes: function () {
                        return Yn({
                            "v-overlay--absolute": this.absolute,
                            "v-overlay--active": this.isActive
                        }, this.themeClasses)
                    },
                    computedOpacity: function () {
                        return Number(this.isActive ? this.opacity : 0)
                    },
                    styles: function () {
                        return {
                            zIndex: this.zIndex
                        }
                    }
                },
                methods: {
                    genContent: function () {
                        return this.$createElement("div", {
                            staticClass: "v-overlay__content"
                        }, this.$slots.default)
                    }
                },
                render: function (t) {
                    var e = [this.__scrim];
                    return this.isActive && e.push(this.genContent()), t("div", {
                        staticClass: "v-overlay",
                        class: this.classes,
                        style: this.styles
                    }, e)
                }
            }),
            Un = Gn,
            qn = a.a.extend().extend({
                name: "overlayable",
                props: {
                    hideOverlay: Boolean,
                    overlayColor: String,
                    overlayOpacity: [Number, String]
                },
                data: function () {
                    return {
                        overlay: null
                    }
                },
                watch: {
                    hideOverlay: function (t) {
                        this.isActive && (t ? this.removeOverlay() : this.genOverlay())
                    }
                },
                beforeDestroy: function () {
                    this.removeOverlay()
                },
                methods: {
                    createOverlay: function () {
                        var t = new Un({
                            propsData: {
                                absolute: this.absolute,
                                value: !1,
                                color: this.overlayColor,
                                opacity: this.overlayOpacity
                            }
                        });
                        t.$mount();
                        var e = this.absolute ? this.$el.parentNode : document.querySelector("[data-app]");
                        e && e.insertBefore(t.$el, e.firstChild), this.overlay = t
                    },
                    genOverlay: function () {
                        var t = this;
                        if (this.hideScroll(), !this.hideOverlay) return this.overlay || this.createOverlay(), requestAnimationFrame(function () {
                            t.overlay && (void 0 !== t.activeZIndex ? t.overlay.zIndex = String(t.activeZIndex - 1) : t.$el && (t.overlay.zIndex = F(t.$el)), t.overlay.value = !0)
                        }), !0
                    },
                    removeOverlay: function (t) {
                        var e = this;
                        void 0 === t && (t = !0), this.overlay && (M(this.overlay.$el, "transitionend", function () {
                            e.overlay && e.overlay.$el && e.overlay.$el.parentNode && !e.overlay.value && (e.overlay.$el.parentNode.removeChild(e.overlay.$el), e.overlay.$destroy(), e.overlay = null)
                        }), this.overlay.value = !1), t && this.showScroll()
                    },
                    scrollListener: function (t) {
                        if ("keydown" === t.type) {
                            if (["INPUT", "TEXTAREA", "SELECT"].includes(t.target.tagName) || t.target.isContentEditable) return;
                            var e = [U.up, U.pageup],
                                i = [U.down, U.pagedown];
                            if (e.includes(t.keyCode)) t.deltaY = -1;
                            else {
                                if (!i.includes(t.keyCode)) return;
                                t.deltaY = 1
                            }
                        }(t.target === this.overlay || "keydown" !== t.type && t.target === document.body || this.checkPath(t)) && t.preventDefault()
                    },
                    hasScrollbar: function (t) {
                        if (!t || t.nodeType !== Node.ELEMENT_NODE) return !1;
                        var e = window.getComputedStyle(t);
                        return ["auto", "scroll"].includes(e.overflowY) && t.scrollHeight > t.clientHeight
                    },
                    shouldScroll: function (t, e) {
                        return 0 === t.scrollTop && e < 0 || t.scrollTop + t.clientHeight === t.scrollHeight && e > 0
                    },
                    isInside: function (t, e) {
                        return t === e || null !== t && t !== document.body && this.isInside(t.parentNode, e)
                    },
                    checkPath: function (t) {
                        var e = t.path || this.composedPath(t),
                            i = t.deltaY;
                        if ("keydown" === t.type && e[0] === document.body) {
                            var n = this.$refs.dialog,
                                s = window.getSelection().anchorNode;
                            return !(n && this.hasScrollbar(n) && this.isInside(s, n)) || this.shouldScroll(n, i)
                        }
                        for (var r = 0; r < e.length; r++) {
                            var o = e[r];
                            if (o === document) return !0;
                            if (o === document.documentElement) return !0;
                            if (o === this.$refs.content) return !0;
                            if (this.hasScrollbar(o)) return this.shouldScroll(o, i)
                        }
                        return !0
                    },
                    composedPath: function (t) {
                        if (t.composedPath) return t.composedPath();
                        for (var e = [], i = t.target; i;) {
                            if (e.push(i), "HTML" === i.tagName) return e.push(document), e.push(window), e;
                            i = i.parentElement
                        }
                        return e
                    },
                    hideScroll: function () {
                        var t, e, i, n;
                        this.$vuetify.breakpoint.smAndDown ? document.documentElement.classList.add("overflow-y-hidden") : (t = window, e = "wheel", i = this.scrollListener, n = {
                            passive: !1
                        }, t.addEventListener(e, i, !!D && n), window.addEventListener("keydown", this.scrollListener))
                    },
                    showScroll: function () {
                        document.documentElement.classList.remove("overflow-y-hidden"), window.removeEventListener("wheel", this.scrollListener), window.removeEventListener("keydown", this.scrollListener)
                    }
                }
            }),
            Xn = function () {
                return (Xn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Zn = d(li, Qe, ii, qn, ci, ri, Bt).extend({
                name: "v-dialog",
                directives: {
                    ClickOutside: pi
                },
                props: {
                    dark: Boolean,
                    disabled: Boolean,
                    fullscreen: Boolean,
                    light: Boolean,
                    maxWidth: {
                        type: [String, Number],
                        default: "none"
                    },
                    noClickAnimation: Boolean,
                    origin: {
                        type: String,
                        default: "center center"
                    },
                    persistent: Boolean,
                    retainFocus: {
                        type: Boolean,
                        default: !0
                    },
                    scrollable: Boolean,
                    transition: {
                        type: [String, Boolean],
                        default: "dialog-transition"
                    },
                    width: {
                        type: [String, Number],
                        default: "auto"
                    }
                },
                data: function () {
                    return {
                        activatedBy: null,
                        animate: !1,
                        animateTimeout: -1,
                        isActive: !!this.value,
                        stackMinZIndex: 200
                    }
                },
                computed: {
                    classes: function () {
                        var t;
                        return (t = {})[("v-dialog " + this.contentClass).trim()] = !0, t["v-dialog--active"] = this.isActive, t["v-dialog--persistent"] = this.persistent, t["v-dialog--fullscreen"] = this.fullscreen, t["v-dialog--scrollable"] = this.scrollable, t["v-dialog--animated"] = this.animate, t
                    },
                    contentClasses: function () {
                        return {
                            "v-dialog__content": !0,
                            "v-dialog__content--active": this.isActive
                        }
                    },
                    hasActivator: function () {
                        return Boolean(!!this.$slots.activator || !!this.$scopedSlots.activator)
                    }
                },
                watch: {
                    isActive: function (t) {
                        t ? (this.show(), this.hideScroll()) : (this.removeOverlay(), this.unbind())
                    },
                    fullscreen: function (t) {
                        this.isActive && (t ? (this.hideScroll(), this.removeOverlay(!1)) : (this.showScroll(), this.genOverlay()))
                    }
                },
                created: function () {
                    this.$attrs.hasOwnProperty("full-width") && x("full-width", this)
                },
                beforeMount: function () {
                    var t = this;
                    this.$nextTick(function () {
                        t.isBooted = t.isActive, t.isActive && t.show()
                    })
                },
                beforeDestroy: function () {
                    "undefined" != typeof window && this.unbind()
                },
                methods: {
                    animateClick: function () {
                        var t = this;
                        this.animate = !1, this.$nextTick(function () {
                            t.animate = !0, window.clearTimeout(t.animateTimeout), t.animateTimeout = window.setTimeout(function () {
                                return t.animate = !1
                            }, 150)
                        })
                    },
                    closeConditional: function (t) {
                        var e = t.target;
                        return !(this._isDestroyed || !this.isActive || this.$refs.content.contains(e) || this.overlay && e && !this.overlay.$el.contains(e))
                    },
                    hideScroll: function () {
                        this.fullscreen ? document.documentElement.classList.add("overflow-y-hidden") : qn.options.methods.hideScroll.call(this)
                    },
                    show: function () {
                        var t = this;
                        !this.fullscreen && !this.hideOverlay && this.genOverlay(), this.$nextTick(function () {
                            t.$refs.content.focus(), t.bind()
                        })
                    },
                    bind: function () {
                        window.addEventListener("focusin", this.onFocusin)
                    },
                    unbind: function () {
                        window.removeEventListener("focusin", this.onFocusin)
                    },
                    onClickOutside: function (t) {
                        this.$emit("click:outside", t), this.persistent ? this.noClickAnimation || this.animateClick() : this.activeZIndex >= this.getMaxZIndex() && (this.isActive = !1)
                    },
                    onKeydown: function (t) {
                        if (t.keyCode === U.esc && !this.getOpenDependents().length)
                            if (this.persistent) this.noClickAnimation || this.animateClick();
                            else {
                                this.isActive = !1;
                                var e = this.getActivator();
                                this.$nextTick(function () {
                                    return e && e.focus()
                                })
                            } this.$emit("keydown", t)
                    },
                    onFocusin: function (t) {
                        if (t && this.retainFocus) {
                            var e = t.target;
                            if (e && ![document, this.$refs.content].includes(e) && !this.$refs.content.contains(e) && this.activeZIndex >= this.getMaxZIndex() && !this.getOpenDependentElements().some(function (t) {
                                    return t.contains(e)
                                })) {
                                var i = this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                                i.length && i[0].focus()
                            }
                        }
                    }
                },
                render: function (t) {
                    var e = [],
                        i = {
                            class: this.classes,
                            ref: "dialog",
                            directives: [{
                                name: "click-outside",
                                value: this.onClickOutside,
                                args: {
                                    closeConditional: this.closeConditional,
                                    include: this.getOpenDependentElements
                                }
                            }, {
                                name: "show",
                                value: this.isActive
                            }],
                            on: {
                                click: function (t) {
                                    t.stopPropagation()
                                }
                            },
                            style: {}
                        };
                    this.fullscreen || (i.style = {
                        maxWidth: "none" === this.maxWidth ? void 0 : Y(this.maxWidth),
                        width: "auto" === this.width ? void 0 : Y(this.width)
                    }), e.push(this.genActivator());
                    var n = t("div", i, this.showLazyContent(this.getContentSlot()));
                    return this.transition && (n = t("transition", {
                        props: {
                            name: this.transition,
                            origin: this.origin
                        }
                    }, [n])), e.push(t("div", {
                        class: this.contentClasses,
                        attrs: Xn({
                            role: "document",
                            tabindex: this.isActive ? 0 : void 0
                        }, this.getScopeIdAttrs()),
                        on: {
                            keydown: this.onKeydown
                        },
                        style: {
                            zIndex: this.activeZIndex
                        },
                        ref: "content"
                    }, [this.$createElement(mi, {
                        props: {
                            root: !0,
                            light: this.light,
                            dark: this.dark
                        }
                    }, [n])])), t("div", {
                        staticClass: "v-dialog__container",
                        class: {
                            "v-dialog__container--attached": "" === this.attach || !0 === this.attach || "attach" === this.attach
                        },
                        attrs: {
                            role: "dialog"
                        }
                    }, e)
                }
            }),
            Kn = function () {
                return (Kn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Jn = Zn.extend({
                name: "v-bottom-sheet",
                props: {
                    inset: Boolean,
                    maxWidth: {
                        type: [String, Number],
                        default: "auto"
                    },
                    transition: {
                        type: String,
                        default: "bottom-sheet-transition"
                    }
                },
                computed: {
                    classes: function () {
                        return Kn({}, Zn.options.computed.classes.call(this), {
                            "v-bottom-sheet": !0,
                            "v-bottom-sheet--inset": this.inset
                        })
                    }
                }
            }),
            Qn = (i(44), function () {
                return (Qn = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            ts = d(ne).extend({
                name: "v-breadcrumbs-item",
                props: {
                    activeClass: {
                        type: String,
                        default: "v-breadcrumbs__item--disabled"
                    },
                    ripple: {
                        type: [Boolean, Object],
                        default: !1
                    }
                },
                computed: {
                    classes: function () {
                        var t;
                        return (t = {
                            "v-breadcrumbs__item": !0
                        })[this.activeClass] = this.disabled, t
                    }
                },
                render: function (t) {
                    var e = this.generateRouteLink(),
                        i = e.tag,
                        n = e.data;
                    return t("li", [t(i, Qn({}, n, {
                        attrs: Qn({}, n.attrs, {
                            "aria-current": this.isActive && this.isLink ? "page" : void 0
                        })
                    }), this.$slots.default)])
                }
            }),
            es = function () {
                return (es = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            is = d(h).extend({
                name: "v-breadcrumbs",
                props: {
                    divider: {
                        type: String,
                        default: "/"
                    },
                    items: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    large: Boolean
                },
                computed: {
                    classes: function () {
                        return es({
                            "v-breadcrumbs--large": this.large
                        }, this.themeClasses)
                    }
                },
                methods: {
                    genDivider: function () {
                        return this.$createElement(ns, this.$slots.divider ? this.$slots.divider : this.divider)
                    },
                    genItems: function () {
                        for (var t = [], e = !!this.$scopedSlots.item, i = [], n = 0; n < this.items.length; n++) {
                            var s = this.items[n];
                            i.push(s.text), e ? t.push(this.$scopedSlots.item({
                                item: s
                            })) : t.push(this.$createElement(ts, {
                                key: i.join("."),
                                props: s
                            }, [s.text])), n < this.items.length - 1 && t.push(this.genDivider())
                        }
                        return t
                    }
                },
                render: function (t) {
                    var e = this.$slots.default || this.genItems();
                    return t("ul", {
                        staticClass: "v-breadcrumbs",
                        class: this.classes
                    }, e)
                }
            }),
            ns = E("v-breadcrumbs__divider", "li"),
            ss = (i(45), function () {
                return (ss = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            rs = d(zn, _).extend({
                name: "v-btn-toggle",
                props: {
                    backgroundColor: String,
                    borderless: Boolean,
                    dense: Boolean,
                    group: Boolean,
                    rounded: Boolean,
                    shaped: Boolean,
                    tile: Boolean
                },
                computed: {
                    classes: function () {
                        return ss({}, zn.options.computed.classes.call(this), {
                            "v-btn-toggle": !0,
                            "v-btn-toggle--borderless": this.borderless,
                            "v-btn-toggle--dense": this.dense,
                            "v-btn-toggle--group": this.group,
                            "v-btn-toggle--rounded": this.rounded,
                            "v-btn-toggle--shaped": this.shaped,
                            "v-btn-toggle--tile": this.tile
                        }, this.themeClasses)
                    }
                },
                methods: {
                    genData: function () {
                        var t = this.setTextColor(this.color, ss({}, zn.options.methods.genData.call(this)));
                        return this.group ? t : this.setBackgroundColor(this.backgroundColor, t)
                    }
                }
            }),
            os = (i(46), a.a.extend({
                name: "localable",
                props: {
                    locale: String
                },
                computed: {
                    currentLocale: function () {
                        return this.locale || this.$vuetify.lang.current
                    }
                }
            })),
            as = a.a.extend({
                name: "mouse",
                methods: {
                    getDefaultMouseEventHandlers: function (t, e) {
                        var i;
                        return this.getMouseEventHandlers(((i = {})["click" + t] = {
                            event: "click"
                        }, i["contextmenu" + t] = {
                            event: "contextmenu",
                            prevent: !0,
                            result: !1
                        }, i["mousedown" + t] = {
                            event: "mousedown"
                        }, i["mousemove" + t] = {
                            event: "mousemove"
                        }, i["mouseup" + t] = {
                            event: "mouseup"
                        }, i["mouseenter" + t] = {
                            event: "mouseenter"
                        }, i["mouseleave" + t] = {
                            event: "mouseleave"
                        }, i["touchstart" + t] = {
                            event: "touchstart"
                        }, i["touchmove" + t] = {
                            event: "touchmove"
                        }, i["touchend" + t] = {
                            event: "touchend"
                        }, i), e)
                    },
                    getMouseEventHandlers: function (t, e) {
                        var i = this,
                            n = {},
                            s = function (s) {
                                var o = t[s];
                                if (!r.$listeners[s]) return "continue";
                                var a = (o.passive ? "&" : (o.once ? "~" : "") + (o.capture ? "!" : "")) + o.event,
                                    l = function (t) {
                                        var n = t;
                                        return (void 0 === o.button || n.buttons > 0 && n.button === o.button) && (o.prevent && t.preventDefault(), o.stop && t.stopPropagation(), i.$emit(s, e(t))), o.result
                                    };
                                a in n ? Array.isArray(n[a]) ? n[a].push(l) : n[a] = [n[a], l] : n[a] = l
                            },
                            r = this;
                        for (var o in t) s(o);
                        return n
                    }
                }
            });

        function ls(t) {
            return (ls = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var us = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/,
            cs = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/,
            hs = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            ds = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            ps = 28,
            fs = 12,
            vs = 1,
            ms = 1,
            gs = 7,
            ys = 60;

        function bs(t) {
            var e = Ms(t);
            return e.day = ms, Bs(e), As(e), e
        }

        function Ss(t) {
            var e = Ms(t);
            return e.day = Es(e.year, e.month), Bs(e), As(e), e
        }

        function xs(t) {
            if ("number" == typeof t) return t;
            if ("string" == typeof t) {
                var e = cs.exec(t);
                return !!e && 60 * parseInt(e[1]) + parseInt(e[3] || 0)
            }
            return "object" === ls(t) && ("number" == typeof t.hour && "number" == typeof t.minute && 60 * t.hour + t.minute)
        }

        function ws(t) {
            return !!us.exec(t)
        }

        function Cs(t, e) {
            var i = us.exec(t);
            if (!i) return null;
            var n = {
                date: t,
                time: "",
                year: parseInt(i[1]),
                month: parseInt(i[2]),
                day: parseInt(i[4]) || 1,
                hour: parseInt(i[6]) || 0,
                minute: parseInt(i[8]) || 0,
                weekday: 0,
                hasDay: !!i[4],
                hasTime: !(!i[6] || !i[8]),
                past: !1,
                present: !1,
                future: !1
            };
            return Bs(n), As(n), e && _s(n, e, n.hasTime), n
        }

        function ks(t) {
            return As({
                date: "",
                time: "",
                year: t.getFullYear(),
                month: t.getMonth() + 1,
                day: t.getDate(),
                weekday: t.getDay(),
                hour: t.getHours(),
                minute: t.getMinutes(),
                hasDay: !0,
                hasTime: !0,
                past: !1,
                present: !0,
                future: !1
            })
        }

        function $s(t) {
            return 1e4 * t.year + 100 * t.month + t.day
        }

        function Is(t) {
            return 100 * t.hour + t.minute
        }

        function Os(t) {
            return 1e4 * $s(t) + Is(t)
        }

        function _s(t, e, i) {
            void 0 === i && (i = !1);
            var n = $s(e),
                s = $s(t),
                r = n === s;
            return t.hasTime && i && r && (r = (n = Is(e)) === (s = Is(t))), t.past = s < n, t.present = r, t.future = s > n, t
        }

        function Ts(t, e, i) {
            return t.hasTime = !0, t.hour = Math.floor(e / ys), t.minute = e % ys, t.time = Vs(t), i && _s(t, i, !0), t
        }

        function Bs(t) {
            return t.weekday = function (t) {
                if (t.hasDay) {
                    var e = Math.floor,
                        i = t.day,
                        n = (t.month + 9) % fs + 1,
                        s = e(t.year / 100),
                        r = t.year % 100 - (t.month <= 2 ? 1 : 0);
                    return ((i + e(2.6 * n - .2) - 2 * s + r + e(r / 4) + e(s / 4)) % 7 + 7) % 7
                }
                return t.weekday
            }(t), t
        }

        function As(t) {
            return t.time = Vs(t), t.date = function (t) {
                var e = Ds(t.year, 4) + "-" + Ds(t.month, 2);
                t.hasDay && (e += "-" + Ds(t.day, 2));
                return e
            }(t), t
        }

        function Es(t, e) {
            return function (t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            }(t) ? ds[e] : hs[e]
        }

        function Ms(t) {
            return {
                date: t.date,
                time: t.time,
                year: t.year,
                month: t.month,
                day: t.day,
                weekday: t.weekday,
                hour: t.hour,
                minute: t.minute,
                hasDay: t.hasDay,
                hasTime: t.hasTime,
                past: t.past,
                present: t.present,
                future: t.future
            }
        }

        function Ds(t, e) {
            for (var i = String(t); i.length < e;) i = "0" + i;
            return i
        }

        function Vs(t) {
            return t.hasTime ? Ds(t.hour, 2) + ":" + Ds(t.minute, 2) : ""
        }

        function Ps(t) {
            return t.day++, t.weekday = (t.weekday + 1) % gs, t.day > ps && t.day > Es(t.year, t.month) && (t.day = ms, t.month++, t.month > fs && (t.month = vs, t.year++)), t
        }

        function Ls(t) {
            return t.day--, t.weekday = (t.weekday + 6) % gs, t.day < ms && (t.month--, t.month < vs && (t.year--, t.month = fs), t.day = Es(t.year, t.month)), t
        }

        function Hs(t, e, i) {
            for (void 0 === e && (e = Ps), void 0 === i && (i = 1); --i >= 0;) e(t);
            return t
        }

        function js(t, e, i, n) {
            for (void 0 === i && (i = Ps), void 0 === n && (n = 6); t.weekday !== e && --n >= 0;) i(t);
            return t
        }

        function Ns(t, e, i, n, s, r) {
            void 0 === s && (s = 42), void 0 === r && (r = 0);
            var o = $s(e),
                a = [],
                l = Ms(t),
                u = 0,
                c = u === o;
            if (o < $s(t)) throw new Error("End date is earlier than start date.");
            for (;
                (!c || a.length < r) && a.length < s;)
                if (u = $s(l), c = c || u === o, 0 !== n[l.weekday]) {
                    var h = Ms(l);
                    As(h), _s(h, i), a.push(h), l = Hs(l, Ps, n[l.weekday])
                } else l = Ps(l);
            if (!a.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
            return a
        }

        function Fs(t, e) {
            return "undefined" == typeof Intl || void 0 === Intl.DateTimeFormat ? function (t, e) {
                return ""
            } : function (i, n) {
                try {
                    var s = new Intl.DateTimeFormat(t || void 0, e(i, n)),
                        r = Ds(i.hour, 2) + ":" + Ds(i.minute, 2),
                        o = i.date;
                    return s.format(new Date(o + "T" + r + ":00+00:00"))
                } catch (t) {
                    return ""
                }
            }
        }
        var zs = a.a.extend({
                name: "times",
                props: {
                    now: {
                        type: String,
                        validator: ws
                    }
                },
                data: function () {
                    return {
                        times: {
                            now: Cs("0000-00-00 00:00"),
                            today: Cs("0000-00-00")
                        }
                    }
                },
                computed: {
                    parsedNow: function () {
                        return this.now ? Cs(this.now) : null
                    }
                },
                watch: {
                    parsedNow: "updateTimes"
                },
                created: function () {
                    this.updateTimes(), this.setPresent()
                },
                methods: {
                    setPresent: function () {
                        this.times.now.present = this.times.today.present = !0, this.times.now.past = this.times.today.past = !1, this.times.now.future = this.times.today.future = !1
                    },
                    updateTimes: function () {
                        var t = this.parsedNow || this.getNow();
                        this.updateDay(t, this.times.now), this.updateTime(t, this.times.now), this.updateDay(t, this.times.today)
                    },
                    getNow: function () {
                        return ks(new Date)
                    },
                    updateDay: function (t, e) {
                        t.date !== e.date && (e.year = t.year, e.month = t.month, e.day = t.day, e.weekday = t.weekday, e.date = t.date)
                    },
                    updateTime: function (t, e) {
                        t.time !== e.time && (e.hour = t.hour, e.minute = t.minute, e.time = t.time)
                    }
                }
            }),
            Ws = {
                base: {
                    start: {
                        type: String,
                        validate: ws,
                        default: function () {
                            return ks(new Date).date
                        }
                    },
                    end: {
                        type: String,
                        validate: ws
                    },
                    weekdays: {
                        type: [Array, String],
                        default: function () {
                            return [0, 1, 2, 3, 4, 5, 6]
                        },
                        validate: function (t) {
                            if ("string" == typeof t && (t = t.split(",")), Array.isArray(t)) {
                                if (t.length > gs || 0 === t.length) return !1;
                                for (var e = 0; e < t.length; e++) {
                                    var i = t[e];
                                    if (!Rs(i) || i < 0 || i >= gs) return !1
                                }
                                return !0
                            }
                            return !1
                        }
                    },
                    hideHeader: {
                        type: Boolean,
                        default: !1
                    },
                    shortWeekdays: {
                        type: Boolean,
                        default: !0
                    },
                    weekdayFormat: {
                        type: Function,
                        default: null
                    },
                    dayFormat: {
                        type: Function,
                        default: null
                    }
                },
                intervals: {
                    maxDays: {
                        type: Number,
                        default: 7
                    },
                    shortIntervals: {
                        type: Boolean,
                        default: !0
                    },
                    intervalHeight: {
                        type: [Number, String],
                        default: 40,
                        validate: Rs
                    },
                    intervalWidth: {
                        type: [Number, String],
                        default: 45,
                        validate: Rs
                    },
                    intervalMinutes: {
                        type: [Number, String],
                        default: 60,
                        validate: Rs
                    },
                    firstInterval: {
                        type: [Number, String],
                        default: 0,
                        validate: Rs
                    },
                    intervalCount: {
                        type: [Number, String],
                        default: 24,
                        validate: Rs
                    },
                    intervalFormat: {
                        type: Function,
                        default: null
                    },
                    intervalStyle: {
                        type: Function,
                        default: null
                    },
                    showIntervalLabel: {
                        type: Function,
                        default: null
                    }
                },
                weeks: {
                    minWeeks: {
                        validate: Rs,
                        default: 1
                    },
                    shortMonths: {
                        type: Boolean,
                        default: !0
                    },
                    showMonthOnFirst: {
                        type: Boolean,
                        default: !0
                    },
                    monthFormat: {
                        type: Function,
                        default: null
                    }
                },
                calendar: {
                    type: {
                        type: String,
                        default: "month"
                    },
                    value: {
                        type: String,
                        validate: ws
                    }
                },
                events: {
                    events: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    eventStart: {
                        type: String,
                        default: "start"
                    },
                    eventEnd: {
                        type: String,
                        default: "end"
                    },
                    eventHeight: {
                        type: Number,
                        default: 20
                    },
                    eventColor: {
                        type: [String, Function],
                        default: "secondary"
                    },
                    eventTextColor: {
                        type: [String, Function],
                        default: "white"
                    },
                    eventName: {
                        type: [String, Function],
                        default: "name"
                    },
                    eventOverlapThreshold: {
                        type: Number,
                        default: 60
                    },
                    eventMore: {
                        type: Boolean,
                        default: !0
                    },
                    eventMoreText: {
                        type: String,
                        default: "$vuetify.calendar.moreEvents"
                    },
                    eventRipple: {
                        type: [Boolean, Object],
                        default: null
                    },
                    eventMarginBottom: {
                        type: Number,
                        default: 1
                    }
                }
            };

        function Rs(t) {
            return isFinite(parseInt(t))
        }
        var Ys = d(_, os, as, h, zs).extend({
            name: "calendar-base",
            directives: {
                Resize: vi
            },
            props: Ws.base,
            computed: {
                parsedWeekdays: function () {
                    return Array.isArray(this.weekdays) ? this.weekdays : this.weekdays.split(",").map(function (t) {
                        return parseInt(t, 10)
                    })
                },
                weekdaySkips: function () {
                    return function (t) {
                        for (var e = [1, 1, 1, 1, 1, 1, 1], i = [0, 0, 0, 0, 0, 0, 0], n = 0; n < t.length; n++) i[t[n]] = 1;
                        for (var s = 0; s < gs; s++) {
                            for (var r = 1, o = 1; o < gs && !i[(s + o) % gs]; o++) r++;
                            e[s] = i[s] * r
                        }
                        return e
                    }(this.parsedWeekdays)
                },
                weekdaySkipsReverse: function () {
                    var t = this.weekdaySkips.slice();
                    return t.reverse(), t
                },
                parsedStart: function () {
                    return Cs(this.start)
                },
                parsedEnd: function () {
                    var t = this.parsedStart,
                        e = this.end && Cs(this.end) || t;
                    return Os(e) < Os(t) ? t : e
                },
                days: function () {
                    return Ns(this.parsedStart, this.parsedEnd, this.times.today, this.weekdaySkips)
                },
                dayFormatter: function () {
                    if (this.dayFormat) return this.dayFormat;
                    var t = {
                        timeZone: "UTC",
                        day: "numeric"
                    };
                    return Fs(this.currentLocale, function (e, i) {
                        return t
                    })
                },
                weekdayFormatter: function () {
                    if (this.weekdayFormat) return this.weekdayFormat;
                    var t = {
                            timeZone: "UTC",
                            weekday: "long"
                        },
                        e = {
                            timeZone: "UTC",
                            weekday: "short"
                        };
                    return Fs(this.currentLocale, function (i, n) {
                        return n ? e : t
                    })
                }
            },
            methods: {
                getRelativeClasses: function (t, e) {
                    return void 0 === e && (e = !1), {
                        "v-present": t.present,
                        "v-past": t.past,
                        "v-future": t.future,
                        "v-outside": e
                    }
                },
                getStartOfWeek: function (t) {
                    return function (t, e, i) {
                        var n = Ms(t);
                        return js(n, e[0], Ls), As(n), i && _s(n, i, n.hasTime), n
                    }(t, this.parsedWeekdays, this.times.today)
                },
                getEndOfWeek: function (t) {
                    return function (t, e, i) {
                        var n = Ms(t);
                        return js(n, e[e.length - 1]), As(n), i && _s(n, i, n.hasTime), n
                    }(t, this.parsedWeekdays, this.times.today)
                },
                getFormatter: function (t) {
                    return Fs(this.locale, function (e, i) {
                        return t
                    })
                }
            }
        });

        function Gs(t, e) {
            return e >= t.startIdentifier && e <= t.endIdentifier
        }
        var Us = function () {
                return (Us = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            qs = Ys.extend({
                name: "calendar-with-events",
                directives: {
                    ripple: ee
                },
                props: Ws.events,
                computed: {
                    noEvents: function () {
                        return 0 === this.events.length
                    },
                    parsedEvents: function () {
                        var t = this;
                        return this.events.map(function (e, i) {
                            return function (t, e, i, n) {
                                if (!(i in t)) throw new Error("The " + i + " property is required on all events to be a valid timestamp in the format YYYY-MM-DD or YYYY-MM-DD hh:mm");
                                var s = Cs(t[i]),
                                    r = t[n] ? Cs(t[n]) : s;
                                return {
                                    input: t,
                                    start: s,
                                    startIdentifier: $s(s),
                                    startTimestampIdentifier: Os(s),
                                    end: r,
                                    endIdentifier: $s(r),
                                    endTimestampIdentifier: Os(r),
                                    allDay: !s.hasTime,
                                    index: e
                                }
                            }(e, i, t.eventStart, t.eventEnd)
                        })
                    },
                    eventColorFunction: function () {
                        var t = this;
                        return "function" == typeof this.eventColor ? this.eventColor : function () {
                            return t.eventColor
                        }
                    },
                    eventTextColorFunction: function () {
                        var t = this;
                        return "function" == typeof this.eventTextColor ? this.eventTextColor : function () {
                            return t.eventTextColor
                        }
                    },
                    eventNameFunction: function () {
                        var t = this;
                        return "function" == typeof this.eventName ? this.eventName : function (e, i) {
                            var n = W(e.input[t.eventName]);
                            if (e.start.hasTime) {
                                if (i) {
                                    var s = e.start.hour < 12 && e.end.hour >= 12;
                                    return "<strong>" + n + "</strong><br>" + t.formatTime(e.start, s) + " - " + t.formatTime(e.end, !0)
                                }
                                return "<strong>" + t.formatTime(e.start, !0) + "</strong> " + n
                            }
                            return n
                        }
                    }
                },
                methods: {
                    formatTime: function (t, e) {
                        return this.getFormatter({
                            timeZone: "UTC",
                            hour: "numeric",
                            minute: t.minute > 0 ? "numeric" : void 0
                        })(t, !0)
                    },
                    updateEventVisibility: function () {
                        if (!this.noEvents && this.eventMore) {
                            var t = this.eventHeight,
                                e = this.getEventsMap();
                            for (var i in e) {
                                var n = e[i],
                                    s = n.parent,
                                    r = n.events,
                                    o = n.more;
                                if (!o) break;
                                for (var a = s.getBoundingClientRect(), l = r.length - 1, u = !1, c = 0, h = 0; h <= l; h++) {
                                    if (!u) u = r[h].getBoundingClientRect().bottom + t > a.bottom && h !== l || "none" === r[h].style.display;
                                    if (u) {
                                        var d = r[h].getAttribute("data-event");
                                        this.hideEvents(d), c++
                                    }
                                }
                                u ? (o.style.display = "", o.innerHTML = this.$vuetify.lang.t(this.eventMoreText, c)) : o.style.display = "none"
                            }
                        }
                    },
                    hideEvents: function (t) {
                        this.$refs.events.forEach(function (e) {
                            e.getAttribute("data-event") === t && (e.style.display = "none")
                        })
                    },
                    getEventsMap: function () {
                        var t = {},
                            e = this.$refs.events;
                        return e && e.forEach ? (e.forEach(function (e) {
                            var i = e.getAttribute("data-date");
                            e.parentElement && i && (i in t || (t[i] = {
                                parent: e.parentElement,
                                more: null,
                                events: []
                            }), e.getAttribute("data-more") ? t[i].more = e : (t[i].events.push(e), e.style.display = ""))
                        }), t) : t
                    },
                    genDayEvent: function (t, e, i) {
                        var n = t.offset,
                            s = t.event,
                            r = this.eventHeight,
                            o = this.eventMarginBottom,
                            a = (n - e) * (r + o),
                            l = $s(i),
                            u = l === s.startIdentifier,
                            c = l === s.endIdentifier,
                            h = {
                                event: s.input,
                                day: i,
                                outside: i.outside,
                                start: u,
                                end: c,
                                timed: !1
                            };
                        return this.genEvent(s, h, u || 0 === i.index, !1, {
                            staticClass: "v-event",
                            class: {
                                "v-event-start": u, "v-event-end": c
                            },
                            style: {
                                height: r + "px",
                                top: a + "px",
                                "margin-bottom": o + "px"
                            },
                            attrs: {
                                "data-date": i.date,
                                "data-event": s.index
                            },
                            key: s.index,
                            ref: "events",
                            refInFor: !0
                        })
                    },
                    genTimedEvent: function (t, e, i) {
                        var n = t.offset,
                            s = t.event,
                            r = t.columnCount,
                            o = t.column,
                            a = $s(i),
                            l = s.startIdentifier >= a,
                            u = s.endIdentifier > a,
                            c = l ? i.timeToY(s.start) : 0,
                            h = u ? i.timeToY(1440) : i.timeToY(s.end),
                            d = Math.max(this.eventHeight, h - c),
                            p = -1 === r ? 5 * n : 100 * o / r,
                            f = -1 === r ? 0 : Math.max(0, 100 * (r - o - 2) / r + 10),
                            v = {
                                event: s.input,
                                day: i,
                                outside: i.outside,
                                start: l,
                                end: u,
                                timed: !0
                            };
                        return this.genEvent(s, v, !0, !0, {
                            staticClass: "v-event-timed",
                            style: {
                                top: c + "px",
                                height: d + "px",
                                left: p + "%",
                                right: f + "%"
                            }
                        })
                    },
                    genEvent: function (t, e, i, n, s) {
                        var r = this.$scopedSlots.event,
                            o = this.eventTextColorFunction(t.input),
                            a = this.eventColorFunction(t.input);
                        return this.$createElement("div", this.setTextColor(o, this.setBackgroundColor(a, Us({
                            on: this.getDefaultMouseEventHandlers(":event", function (t) {
                                return Us({}, e, {
                                    nativeEvent: t
                                })
                            }),
                            directives: [{
                                name: "ripple",
                                value: null == this.eventRipple || this.eventRipple
                            }]
                        }, s))), r ? r(e) : i ? [this.genName(t, n)] : void 0)
                    },
                    genName: function (t, e) {
                        return this.$createElement("div", {
                            staticClass: "pl-1",
                            domProps: {
                                innerHTML: this.eventNameFunction(t, e)
                            }
                        })
                    },
                    genMore: function (t) {
                        var e = this;
                        return this.$createElement("div", {
                            staticClass: "v-event-more pl-1",
                            attrs: {
                                "data-date": t.date,
                                "data-more": 1
                            },
                            directives: [{
                                name: "ripple",
                                value: null == this.eventRipple || this.eventRipple
                            }],
                            on: {
                                click: function () {
                                    return e.$emit("click:more", t)
                                }
                            },
                            style: {
                                display: "none"
                            },
                            ref: "events",
                            refInFor: !0
                        })
                    },
                    getEventsForDay: function (t) {
                        var e = $s(t);
                        return this.parsedEvents.filter(function (t) {
                            return Gs(t, e)
                        })
                    },
                    getEventsForDayAll: function (t) {
                        var e = $s(t);
                        return this.parsedEvents.filter(function (t) {
                            return t.allDay && Gs(t, e)
                        })
                    },
                    getEventsForDayTimed: function (t) {
                        var e = $s(t);
                        return this.parsedEvents.filter(function (t) {
                            return !t.allDay && Gs(t, e)
                        })
                    },
                    isSameColumn: function (t, e) {
                        var i = xs(t.event.start) - xs(e.event.start);
                        return (i < 0 ? -i : i) < this.eventOverlapThreshold
                    },
                    isOverlapping: function (t, e) {
                        var i = xs(t.event.start),
                            n = xs(e.event.start);
                        if (t.offset < e.offset && n < i) {
                            var s = i + this.eventOverlapThreshold;
                            return !(i >= xs(e.event.end) || s <= n)
                        }
                        return !1
                    },
                    getScopedSlots: function () {
                        var t = this;
                        if (this.noEvents) return this.$scopedSlots;
                        var e = this.parsedEvents.map(function (t) {
                                return -1
                            }),
                            i = this.parsedWeekdays[0],
                            n = function (t, i) {
                                var n = e[t.event.index];
                                if (-1 === n) {
                                    var s = Number.MAX_SAFE_INTEGER,
                                        r = -1;
                                    i.forEach(function (t) {
                                        var i = e[t.event.index]; - 1 !== i && (s = Math.min(s, i), r = Math.max(r, i))
                                    }), n = s > 0 && -1 !== r ? s - 1 : r + 1, e[t.event.index] = n
                                }
                                return n
                            },
                            s = function (s, r, o, a) {
                                ! function (t) {
                                    if (t.weekday === i)
                                        for (var n = 0; n < e.length; n++) e[n] = -1
                                }(s);
                                var l = r(s);
                                return 0 === l.length ? void 0 : function (i, s) {
                                    var r = i.map(function (t) {
                                        return {
                                            event: t,
                                            offset: 0,
                                            columnCount: -1,
                                            column: -1
                                        }
                                    });
                                    return r.sort(function (t, e) {
                                        return t.event.startTimestampIdentifier - e.event.startTimestampIdentifier
                                    }), s ? (r.forEach(function (e) {
                                        if (-1 === e.columnCount) {
                                            var i = [];
                                            r.forEach(function (n) {
                                                -1 === n.columnCount && t.isSameColumn(e, n) && i.push(n)
                                            }), i.length > 1 && i.forEach(function (t, e) {
                                                t.column = e, t.columnCount = i.length
                                            })
                                        }
                                    }), r.forEach(function (t) {
                                        -1 === t.columnCount && (r.forEach(function (i) {
                                            -1 !== e[i.event.index] && i.event.endTimestampIdentifier <= t.event.startTimestampIdentifier && (e[i.event.index] = -1)
                                        }), t.offset = n(t, r))
                                    }), r.forEach(function (e) {
                                        if (-1 === e.columnCount) {
                                            var i = [e];
                                            r.forEach(function (n) {
                                                n !== e && -1 === n.columnCount && t.isOverlapping(e, n) && i.push(n)
                                            }), i.length > 1 && i.forEach(function (t, e) {
                                                t.column = e, t.columnCount = i.length
                                            })
                                        }
                                    })) : r.forEach(function (t) {
                                        t.offset = n(t, r)
                                    }), r.sort(function (t, e) {
                                        return t.offset - e.offset || t.column - e.column
                                    }), r
                                }(l, a).map(function (t, e) {
                                    return o(t, e, s)
                                })
                            },
                            r = this.$scopedSlots,
                            o = r.day,
                            a = r["day-header"],
                            l = r["day-body"];
                        return Us({}, r, {
                            day: function (e) {
                                var i = s(e, t.getEventsForDay, t.genDayEvent, !1);
                                if (i && i.length > 0 && t.eventMore && i.push(t.genMore(e)), o) {
                                    var n = o(e);
                                    n && (i = i ? i.concat(n) : n)
                                }
                                return i
                            },
                            "day-header": function (e) {
                                var i = s(e, t.getEventsForDayAll, t.genDayEvent, !1);
                                if (a) {
                                    var n = a(e);
                                    n && (i = i ? i.concat(n) : n)
                                }
                                return i
                            },
                            "day-body": function (e) {
                                var i = s(e, t.getEventsForDayTimed, t.genTimedEvent, !0),
                                    n = [t.$createElement("div", {
                                        staticClass: "v-event-timed-container"
                                    }, i)];
                                if (l) {
                                    var r = l(e);
                                    r && (n = n.concat(r))
                                }
                                return n
                            }
                        })
                    }
                }
            }),
            Xs = (i(8), function () {
                return (Xs = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Zs = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            Ks = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Zs(arguments[e]));
                return t
            },
            Js = Ys.extend({
                name: "v-calendar-weekly",
                props: Ws.weeks,
                computed: {
                    staticClass: function () {
                        return "v-calendar-weekly"
                    },
                    classes: function () {
                        return this.themeClasses
                    },
                    parsedMinWeeks: function () {
                        return parseInt(this.minWeeks)
                    },
                    days: function () {
                        var t = this.parsedMinWeeks * this.parsedWeekdays.length;
                        return Ns(this.getStartOfWeek(this.parsedStart), this.getEndOfWeek(this.parsedEnd), this.times.today, this.weekdaySkips, Number.MAX_SAFE_INTEGER, t)
                    },
                    todayWeek: function () {
                        var t = this.times.today;
                        return Ns(this.getStartOfWeek(t), this.getEndOfWeek(t), t, this.weekdaySkips, this.parsedWeekdays.length, this.parsedWeekdays.length)
                    },
                    monthFormatter: function () {
                        if (this.monthFormat) return this.monthFormat;
                        var t = {
                                timeZone: "UTC",
                                month: "long"
                            },
                            e = {
                                timeZone: "UTC",
                                month: "short"
                            };
                        return Fs(this.currentLocale, function (i, n) {
                            return n ? e : t
                        })
                    }
                },
                methods: {
                    isOutside: function (t) {
                        var e = $s(t);
                        return e < $s(this.parsedStart) || e > $s(this.parsedEnd)
                    },
                    genHead: function () {
                        return this.$createElement("div", {
                            staticClass: "v-calendar-weekly__head"
                        }, this.genHeadDays())
                    },
                    genHeadDays: function () {
                        return this.todayWeek.map(this.genHeadDay)
                    },
                    genHeadDay: function (t, e) {
                        var i = this.isOutside(this.days[e]),
                            n = t.present ? this.color : void 0;
                        return this.$createElement("div", this.setTextColor(n, {
                            key: t.date,
                            staticClass: "v-calendar-weekly__head-weekday",
                            class: this.getRelativeClasses(t, i)
                        }), this.weekdayFormatter(t, this.shortWeekdays))
                    },
                    genWeeks: function () {
                        for (var t = this.days, e = this.parsedWeekdays.length, i = [], n = 0; n < t.length; n += e) i.push(this.genWeek(t.slice(n, n + e)));
                        return i
                    },
                    genWeek: function (t) {
                        return this.$createElement("div", {
                            key: t[0].date,
                            staticClass: "v-calendar-weekly__week"
                        }, t.map(this.genDay))
                    },
                    genDay: function (t, e) {
                        var i = this.isOutside(t),
                            n = this.$scopedSlots.day,
                            s = Xs({
                                outside: i,
                                index: e
                            }, t);
                        return this.$createElement("div", {
                            key: t.date,
                            staticClass: "v-calendar-weekly__day",
                            class: this.getRelativeClasses(t, i),
                            on: this.getDefaultMouseEventHandlers(":day", function (e) {
                                return t
                            })
                        }, [this.genDayLabel(t), n ? n(s) : ""])
                    },
                    genDayLabel: function (t) {
                        var e = this.$scopedSlots["day-label"];
                        return this.$createElement("div", {
                            staticClass: "v-calendar-weekly__day-label"
                        }, [e ? e(t) : this.genDayLabelButton(t)])
                    },
                    genDayLabelButton: function (t) {
                        var e = t.present ? this.color : "transparent",
                            i = 1 === t.day && this.showMonthOnFirst;
                        return this.$createElement(ce, {
                            props: {
                                color: e,
                                fab: !0,
                                depressed: !0,
                                small: !0
                            },
                            on: this.getMouseEventHandlers({
                                "click:date": {
                                    event: "click",
                                    stop: !0
                                },
                                "contextmenu:date": {
                                    event: "contextmenu",
                                    stop: !0,
                                    prevent: !0,
                                    result: !1
                                }
                            }, function (e) {
                                return t
                            })
                        }, i ? this.monthFormatter(t, this.shortMonths) + " " + this.dayFormatter(t, !1) : this.dayFormatter(t, !1))
                    },
                    genDayMonth: function (t) {
                        var e = t.present ? this.color : void 0,
                            i = this.$scopedSlots["day-month"];
                        return this.$createElement("div", this.setTextColor(e, {
                            staticClass: "v-calendar-weekly__day-month"
                        }), i ? i(t) : this.monthFormatter(t, this.shortMonths))
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: this.staticClass,
                        class: this.classes,
                        nativeOn: {
                            dragstart: function (t) {
                                t.preventDefault()
                            }
                        }
                    }, Ks([this.hideHeader ? "" : this.genHead()], this.genWeeks()))
                }
            }),
            Qs = Js.extend({
                name: "v-calendar-monthly",
                computed: {
                    staticClass: function () {
                        return "v-calendar-monthly v-calendar-weekly"
                    },
                    parsedStart: function () {
                        return bs(Cs(this.start))
                    },
                    parsedEnd: function () {
                        return Ss(Cs(this.end))
                    }
                }
            }),
            tr = (i(47), Ys.extend({
                name: "calendar-with-intervals",
                props: Ws.intervals,
                computed: {
                    parsedFirstInterval: function () {
                        return parseInt(this.firstInterval)
                    },
                    parsedIntervalMinutes: function () {
                        return parseInt(this.intervalMinutes)
                    },
                    parsedIntervalCount: function () {
                        return parseInt(this.intervalCount)
                    },
                    parsedIntervalHeight: function () {
                        return parseFloat(this.intervalHeight)
                    },
                    firstMinute: function () {
                        return this.parsedFirstInterval * this.parsedIntervalMinutes
                    },
                    bodyHeight: function () {
                        return this.parsedIntervalCount * this.parsedIntervalHeight
                    },
                    days: function () {
                        return Ns(this.parsedStart, this.parsedEnd, this.times.today, this.weekdaySkips, this.maxDays)
                    },
                    intervals: function () {
                        var t = this.days,
                            e = this.parsedFirstInterval,
                            i = this.parsedIntervalMinutes,
                            n = this.parsedIntervalCount,
                            s = this.times.now;
                        return t.map(function (t) {
                            return function (t, e, i, n, s) {
                                for (var r = [], o = 0; o < n; o++) {
                                    var a = (e + o) * i,
                                        l = Ms(t);
                                    r.push(Ts(l, a, s))
                                }
                                return r
                            }(t, e, i, n, s)
                        })
                    },
                    intervalFormatter: function () {
                        if (this.intervalFormat) return this.intervalFormat;
                        var t = {
                                timeZone: "UTC",
                                hour: "2-digit",
                                minute: "2-digit"
                            },
                            e = {
                                timeZone: "UTC",
                                hour: "numeric",
                                minute: "2-digit"
                            },
                            i = {
                                timeZone: "UTC",
                                hour: "numeric"
                            };
                        return Fs(this.currentLocale, function (n, s) {
                            return s ? 0 === n.minute ? i : e : t
                        })
                    }
                },
                methods: {
                    showIntervalLabelDefault: function (t) {
                        var e = this.intervals[0][0];
                        return !(e.hour === t.hour && e.minute === t.minute)
                    },
                    intervalStyleDefault: function (t) {},
                    getTimestampAtEvent: function (t, e) {
                        var i = Ms(e),
                            n = t.currentTarget.getBoundingClientRect(),
                            s = this.firstMinute,
                            r = t,
                            o = t,
                            a = r.changedTouches || r.touches,
                            l = ((a && a[0] ? a[0].clientY : o.clientY) - n.top) / this.parsedIntervalHeight;
                        return Ts(i, s + Math.floor(l * this.parsedIntervalMinutes), this.times.now)
                    },
                    getSlotScope: function (t) {
                        var e = Ms(t);
                        return e.timeToY = this.timeToY, e.minutesToPixels = this.minutesToPixels, e
                    },
                    scrollToTime: function (t) {
                        var e = this.timeToY(t),
                            i = this.$refs.scrollArea;
                        return !(!1 === e || !i) && (i.scrollTop = e, !0)
                    },
                    minutesToPixels: function (t) {
                        return t / this.parsedIntervalMinutes * this.parsedIntervalHeight
                    },
                    timeToY: function (t, e) {
                        void 0 === e && (e = !0);
                        var i = xs(t);
                        if (!1 === i) return !1;
                        var n = (i - this.firstMinute) / (this.parsedIntervalCount * this.parsedIntervalMinutes) * this.bodyHeight;
                        return e && (n < 0 && (n = 0), n > this.bodyHeight && (n = this.bodyHeight)), n
                    }
                }
            })),
            er = function () {
                return (er = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            ir = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            nr = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(ir(arguments[e]));
                return t
            },
            sr = tr.extend({
                name: "v-calendar-daily",
                directives: {
                    Resize: vi
                },
                data: function () {
                    return {
                        scrollPush: 0
                    }
                },
                computed: {
                    classes: function () {
                        return er({
                            "v-calendar-daily": !0
                        }, this.themeClasses)
                    }
                },
                mounted: function () {
                    this.init()
                },
                methods: {
                    init: function () {
                        this.$nextTick(this.onResize)
                    },
                    onResize: function () {
                        this.scrollPush = this.getScrollPush()
                    },
                    getScrollPush: function () {
                        var t = this.$refs.scrollArea,
                            e = this.$refs.pane;
                        return t && e ? t.offsetWidth - e.offsetWidth : 0
                    },
                    genHead: function () {
                        return this.$createElement("div", {
                            staticClass: "v-calendar-daily__head",
                            style: {
                                marginRight: this.scrollPush + "px"
                            }
                        }, nr([this.genHeadIntervals()], this.genHeadDays()))
                    },
                    genHeadIntervals: function () {
                        var t = Y(this.intervalWidth);
                        return this.$createElement("div", {
                            staticClass: "v-calendar-daily__intervals-head",
                            style: {
                                width: t
                            }
                        })
                    },
                    genHeadDays: function () {
                        return this.days.map(this.genHeadDay)
                    },
                    genHeadDay: function (t, e) {
                        var i = this,
                            n = this.$scopedSlots["day-header"];
                        return this.$createElement("div", {
                            key: t.date,
                            staticClass: "v-calendar-daily_head-day",
                            class: this.getRelativeClasses(t),
                            on: this.getDefaultMouseEventHandlers(":day", function (e) {
                                return i.getSlotScope(t)
                            })
                        }, [this.genHeadWeekday(t), this.genHeadDayLabel(t), n ? n(er({}, t, {
                            index: e
                        })) : ""])
                    },
                    genHeadWeekday: function (t) {
                        var e = t.present ? this.color : void 0;
                        return this.$createElement("div", this.setTextColor(e, {
                            staticClass: "v-calendar-daily_head-weekday"
                        }), this.weekdayFormatter(t, this.shortWeekdays))
                    },
                    genHeadDayLabel: function (t) {
                        return this.$createElement("div", {
                            staticClass: "v-calendar-daily_head-day-label"
                        }, [this.genHeadDayButton(t)])
                    },
                    genHeadDayButton: function (t) {
                        var e = t.present ? this.color : "transparent";
                        return this.$createElement(ce, {
                            props: {
                                color: e,
                                fab: !0,
                                depressed: !0
                            },
                            on: this.getMouseEventHandlers({
                                "click:date": {
                                    event: "click",
                                    stop: !0
                                },
                                "contextmenu:date": {
                                    event: "contextmenu",
                                    stop: !0,
                                    prevent: !0,
                                    result: !1
                                }
                            }, function (e) {
                                return t
                            })
                        }, this.dayFormatter(t, !1))
                    },
                    genBody: function () {
                        return this.$createElement("div", {
                            staticClass: "v-calendar-daily__body"
                        }, [this.genScrollArea()])
                    },
                    genScrollArea: function () {
                        return this.$createElement("div", {
                            ref: "scrollArea",
                            staticClass: "v-calendar-daily__scroll-area"
                        }, [this.genPane()])
                    },
                    genPane: function () {
                        return this.$createElement("div", {
                            ref: "pane",
                            staticClass: "v-calendar-daily__pane",
                            style: {
                                height: Y(this.bodyHeight)
                            }
                        }, [this.genDayContainer()])
                    },
                    genDayContainer: function () {
                        return this.$createElement("div", {
                            staticClass: "v-calendar-daily__day-container"
                        }, nr([this.genBodyIntervals()], this.genDays()))
                    },
                    genDays: function () {
                        return this.days.map(this.genDay)
                    },
                    genDay: function (t, e) {
                        var i = this,
                            n = this.$scopedSlots["day-body"],
                            s = this.getSlotScope(t);
                        return this.$createElement("div", {
                            key: t.date,
                            staticClass: "v-calendar-daily__day",
                            class: this.getRelativeClasses(t),
                            on: this.getDefaultMouseEventHandlers(":time", function (e) {
                                return i.getSlotScope(i.getTimestampAtEvent(e, t))
                            })
                        }, nr(this.genDayIntervals(e), [n ? n(s) : ""]))
                    },
                    genDayIntervals: function (t) {
                        return this.intervals[t].map(this.genDayInterval)
                    },
                    genDayInterval: function (t) {
                        var e = Y(this.intervalHeight),
                            i = this.intervalStyle || this.intervalStyleDefault,
                            n = this.$scopedSlots.interval,
                            s = this.getSlotScope(t),
                            r = {
                                key: t.time,
                                staticClass: "v-calendar-daily__day-interval",
                                style: er({
                                    height: e
                                }, i(t))
                            },
                            o = n ? n(s) : void 0;
                        return this.$createElement("div", r, o)
                    },
                    genBodyIntervals: function () {
                        var t = this,
                            e = {
                                staticClass: "v-calendar-daily__intervals-body",
                                style: {
                                    width: Y(this.intervalWidth)
                                },
                                on: this.getDefaultMouseEventHandlers(":interval", function (e) {
                                    return t.getTimestampAtEvent(e, t.parsedStart)
                                })
                            };
                        return this.$createElement("div", e, this.genIntervalLabels())
                    },
                    genIntervalLabels: function () {
                        return this.intervals.length ? this.intervals[0].map(this.genIntervalLabel) : null
                    },
                    genIntervalLabel: function (t) {
                        var e = Y(this.intervalHeight),
                            i = this.shortIntervals,
                            n = (this.showIntervalLabel || this.showIntervalLabelDefault)(t) ? this.intervalFormatter(t, i) : void 0;
                        return this.$createElement("div", {
                            key: t.time,
                            staticClass: "v-calendar-daily__interval",
                            style: {
                                height: e
                            }
                        }, [this.$createElement("div", {
                            staticClass: "v-calendar-daily__interval-text"
                        }, n)])
                    }
                },
                render: function (t) {
                    return t("div", {
                        class: this.classes,
                        nativeOn: {
                            dragstart: function (t) {
                                t.preventDefault()
                            }
                        },
                        directives: [{
                            modifiers: {
                                quiet: !0
                            },
                            name: "resize",
                            value: this.onResize
                        }]
                    }, [this.hideHeader ? "" : this.genHead(), this.genBody()])
                }
            }),
            rr = function () {
                return (rr = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            or = qs.extend({
                name: "v-calendar",
                props: rr({}, Ws.calendar, Ws.weeks, Ws.intervals),
                data: function () {
                    return {
                        lastStart: null,
                        lastEnd: null
                    }
                },
                computed: {
                    parsedValue: function () {
                        return ws(this.value) ? Cs(this.value) : this.parsedStart || this.times.today
                    },
                    renderProps: function () {
                        var t = this.parsedValue,
                            e = null,
                            i = this.maxDays,
                            n = t,
                            s = t;
                        switch (this.type) {
                            case "month":
                                e = Qs, n = bs(t), s = Ss(t);
                                break;
                            case "week":
                                e = sr, n = this.getStartOfWeek(t), s = this.getEndOfWeek(t), i = 7;
                                break;
                            case "day":
                                e = sr, i = 1;
                                break;
                            case "4day":
                                e = sr, As(s = Hs(Ms(s), Ps, 4)), i = 4;
                                break;
                            case "custom-weekly":
                                e = Js, n = this.parsedStart || t, s = this.parsedEnd;
                                break;
                            case "custom-daily":
                                e = sr, n = this.parsedStart || t, s = this.parsedEnd;
                                break;
                            default:
                                throw new Error(this.type + " is not a valid Calendar type")
                        }
                        return {
                            component: e,
                            start: n,
                            end: s,
                            maxDays: i
                        }
                    }
                },
                watch: {
                    renderProps: "checkChange"
                },
                mounted: function () {
                    this.updateEventVisibility(), this.checkChange()
                },
                updated: function () {
                    this.updateEventVisibility()
                },
                methods: {
                    checkChange: function () {
                        var t = this.renderProps,
                            e = t.start,
                            i = t.end;
                        e === this.lastStart && i === this.lastEnd || (this.lastStart = e, this.lastEnd = i, this.$emit("change", {
                            start: e,
                            end: i
                        }))
                    },
                    move: function (t) {
                        void 0 === t && (t = 1);
                        for (var e = Ms(this.parsedValue), i = t > 0, n = i ? Ps : Ls, s = i ? 31 : ms, r = i ? t : -t; --r >= 0;) switch (this.type) {
                            case "month":
                                e.day = s, n(e);
                                break;
                            case "week":
                                Hs(e, n, gs);
                                break;
                            case "day":
                                var o = e.weekday;
                                Hs(e, n, i ? this.weekdaySkips[o] : this.weekdaySkipsReverse[o]);
                                break;
                            case "4day":
                                Hs(e, n, 4)
                        }
                        Bs(e), As(e), _s(e, this.times.now), this.$emit("input", e.date), this.$emit("moved", e)
                    },
                    next: function (t) {
                        void 0 === t && (t = 1), this.move(t)
                    },
                    prev: function (t) {
                        void 0 === t && (t = 1), this.move(-t)
                    },
                    timeToY: function (t, e) {
                        void 0 === e && (e = !0);
                        var i = this.$children[0];
                        return !(!i || !i.timeToY) && i.timeToY(t, e)
                    },
                    minutesToPixels: function (t) {
                        var e = this.$children[0];
                        return e && e.minutesToPixels ? e.minutesToPixels(t) : -1
                    },
                    scrollToTime: function (t) {
                        var e = this.$children[0];
                        return !(!e || !e.scrollToTime) && e.scrollToTime(t)
                    }
                },
                render: function (t) {
                    var e = this,
                        i = this.renderProps,
                        n = i.start,
                        s = i.end,
                        r = i.maxDays;
                    return t(i.component, {
                        staticClass: "v-calendar",
                        class: {
                            "v-calendar-events": !this.noEvents
                        },
                        props: rr({}, this.$props, {
                            start: n.date,
                            end: s.date,
                            maxDays: r
                        }),
                        directives: [{
                            modifiers: {
                                quiet: !0
                            },
                            name: "resize",
                            value: this.updateEventVisibility
                        }],
                        on: rr({}, this.$listeners, {
                            "click:date": function (t) {
                                e.$listeners.input && e.$emit("input", t.date), e.$listeners["click:date"] && e.$emit("click:date", t)
                            }
                        }),
                        scopedSlots: this.getScopedSlots()
                    })
                }
            }),
            ar = function () {
                return (ar = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            lr = d(kn, ne, Ht).extend({
                name: "v-card",
                props: {
                    flat: Boolean,
                    hover: Boolean,
                    img: String,
                    link: Boolean,
                    loaderHeight: {
                        type: [Number, String],
                        default: 4
                    },
                    outlined: Boolean,
                    raised: Boolean,
                    shaped: Boolean
                },
                computed: {
                    classes: function () {
                        return ar({
                            "v-card": !0
                        }, ne.options.computed.classes.call(this), {
                            "v-card--flat": this.flat,
                            "v-card--hover": this.hover,
                            "v-card--link": this.isClickable,
                            "v-card--loading": this.loading,
                            "v-card--disabled": this.loading || this.disabled,
                            "v-card--outlined": this.outlined,
                            "v-card--raised": this.raised,
                            "v-card--shaped": this.shaped
                        }, Ht.options.computed.classes.call(this))
                    },
                    styles: function () {
                        var t = ar({}, Ht.options.computed.styles.call(this));
                        return this.img && (t.background = 'url("' + this.img + '") center center / cover no-repeat'), t
                    }
                },
                methods: {
                    genProgress: function () {
                        var t = kn.options.methods.genProgress.call(this);
                        return t ? this.$createElement("div", {
                            staticClass: "v-card__progress"
                        }, [t]) : null
                    }
                },
                render: function (t) {
                    var e = this.generateRouteLink(),
                        i = e.tag,
                        n = e.data;
                    return n.style = this.styles, this.isClickable && (n.attrs = n.attrs || {}, n.attrs.tabindex = 0), t(i, this.setBackgroundColor(this.color, n), [this.genProgress(), this.$slots.default])
                }
            }),
            ur = E("v-card__actions"),
            cr = E("v-card__subtitle"),
            hr = E("v-card__text"),
            dr = E("v-card__title"),
            pr = (i(48), i(49), function (t) {
                var e = t.touchstartX,
                    i = t.touchendX,
                    n = t.touchstartY,
                    s = t.touchendY;
                t.offsetX = i - e, t.offsetY = s - n, Math.abs(t.offsetY) < .5 * Math.abs(t.offsetX) && (t.left && i < e - 16 && t.left(t), t.right && i > e + 16 && t.right(t)), Math.abs(t.offsetX) < .5 * Math.abs(t.offsetY) && (t.up && s < n - 16 && t.up(t), t.down && s > n + 16 && t.down(t))
            });

        function fr(t) {
            var e = {
                touchstartX: 0,
                touchstartY: 0,
                touchendX: 0,
                touchendY: 0,
                touchmoveX: 0,
                touchmoveY: 0,
                offsetX: 0,
                offsetY: 0,
                left: t.left,
                right: t.right,
                up: t.up,
                down: t.down,
                start: t.start,
                move: t.move,
                end: t.end
            };
            return {
                touchstart: function (t) {
                    return function (t, e) {
                        var i = t.changedTouches[0];
                        e.touchstartX = i.clientX, e.touchstartY = i.clientY, e.start && e.start(Object.assign(t, e))
                    }(t, e)
                },
                touchend: function (t) {
                    return function (t, e) {
                        var i = t.changedTouches[0];
                        e.touchendX = i.clientX, e.touchendY = i.clientY, e.end && e.end(Object.assign(t, e)), pr(e)
                    }(t, e)
                },
                touchmove: function (t) {
                    return function (t, e) {
                        var i = t.changedTouches[0];
                        e.touchmoveX = i.clientX, e.touchmoveY = i.clientY, e.move && e.move(Object.assign(t, e))
                    }(t, e)
                }
            }
        }
        var vr = {
                inserted: function (t, e, i) {
                    var n = e.value,
                        s = n.parent ? t.parentElement : t,
                        r = n.options || {
                            passive: !0
                        };
                    if (s) {
                        var o = fr(e.value);
                        s._touchHandlers = Object(s._touchHandlers), s._touchHandlers[i.context._uid] = o, q(o).forEach(function (t) {
                            s.addEventListener(t, o[t], r)
                        })
                    }
                },
                unbind: function (t, e, i) {
                    var n = e.value.parent ? t.parentElement : t;
                    if (n && n._touchHandlers) {
                        var s = n._touchHandlers[i.context._uid];
                        q(s).forEach(function (t) {
                            n.removeEventListener(t, s[t])
                        }), delete n._touchHandlers[i.context._uid]
                    }
                }
            },
            mr = vr,
            gr = function () {
                return (gr = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            yr = Yi.extend({
                name: "v-window",
                provide: function () {
                    return {
                        windowGroup: this
                    }
                },
                directives: {
                    Touch: mr
                },
                props: {
                    activeClass: {
                        type: String,
                        default: "v-window-item--active"
                    },
                    continuous: Boolean,
                    mandatory: {
                        type: Boolean,
                        default: !0
                    },
                    nextIcon: {
                        type: [Boolean, String],
                        default: "$next"
                    },
                    prevIcon: {
                        type: [Boolean, String],
                        default: "$prev"
                    },
                    reverse: {
                        type: Boolean,
                        default: void 0
                    },
                    showArrows: Boolean,
                    showArrowsOnHover: Boolean,
                    touch: Object,
                    touchless: Boolean,
                    value: {
                        required: !1
                    },
                    vertical: Boolean
                },
                data: function () {
                    return {
                        changedByDelimiters: !1,
                        internalHeight: void 0,
                        transitionHeight: void 0,
                        transitionCount: 0,
                        isBooted: !1,
                        isReverse: !1
                    }
                },
                computed: {
                    isActive: function () {
                        return this.transitionCount > 0
                    },
                    classes: function () {
                        return gr({}, Yi.options.computed.classes.call(this), {
                            "v-window--show-arrows-on-hover": this.showArrowsOnHover
                        })
                    },
                    computedTransition: function () {
                        if (!this.isBooted) return "";
                        var t = this.vertical ? "y" : "x";
                        return "v-window-" + t + ((this.$vuetify.rtl && "x" === t ? !this.internalReverse : this.internalReverse) ? "-reverse" : "") + "-transition"
                    },
                    hasActiveItems: function () {
                        return Boolean(this.items.find(function (t) {
                            return !t.disabled
                        }))
                    },
                    hasNext: function () {
                        return this.continuous || this.internalIndex < this.items.length - 1
                    },
                    hasPrev: function () {
                        return this.continuous || this.internalIndex > 0
                    },
                    internalIndex: function () {
                        var t = this;
                        return this.items.findIndex(function (e, i) {
                            return t.internalValue === t.getValue(e, i)
                        })
                    },
                    internalReverse: function () {
                        return void 0 !== this.reverse ? this.reverse : this.isReverse
                    }
                },
                watch: {
                    internalIndex: "updateReverse"
                },
                mounted: function () {
                    var t = this;
                    window.requestAnimationFrame(function () {
                        return t.isBooted = !0
                    })
                },
                methods: {
                    genContainer: function () {
                        var t = [this.$slots.default];
                        return this.showArrows && t.push(this.genControlIcons()), this.$createElement("div", {
                            staticClass: "v-window__container",
                            class: {
                                "v-window__container--is-active": this.isActive
                            },
                            style: {
                                height: this.internalHeight || this.transitionHeight
                            }
                        }, t)
                    },
                    genIcon: function (t, e, i) {
                        var n = this;
                        return this.$createElement("div", {
                            staticClass: "v-window__" + t
                        }, [this.$createElement(ce, {
                            props: {
                                icon: !0
                            },
                            attrs: {
                                "aria-label": this.$vuetify.lang.t("$vuetify.carousel." + t)
                            },
                            on: {
                                click: function () {
                                    n.changedByDelimiters = !0, i()
                                }
                            }
                        }, [this.$createElement(Lt, {
                            props: {
                                large: !0
                            }
                        }, e)])])
                    },
                    genControlIcons: function () {
                        var t = [],
                            e = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
                        this.hasPrev && e && "string" == typeof e && ((i = this.genIcon("prev", e, this.prev)) && t.push(i));
                        var i, n = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
                        this.hasNext && n && "string" == typeof n && ((i = this.genIcon("next", n, this.next)) && t.push(i));
                        return t
                    },
                    getNextIndex: function (t) {
                        var e = (t + 1) % this.items.length;
                        return this.items[e].disabled ? this.getNextIndex(e) : e
                    },
                    getPrevIndex: function (t) {
                        var e = (t + this.items.length - 1) % this.items.length;
                        return this.items[e].disabled ? this.getPrevIndex(e) : e
                    },
                    next: function () {
                        if (this.isReverse = this.$vuetify.rtl, this.hasActiveItems && this.hasNext) {
                            var t = this.getNextIndex(this.internalIndex),
                                e = this.items[t];
                            this.internalValue = this.getValue(e, t)
                        }
                    },
                    prev: function () {
                        if (this.isReverse = !this.$vuetify.rtl, this.hasActiveItems && this.hasPrev) {
                            var t = this.getPrevIndex(this.internalIndex),
                                e = this.items[t];
                            this.internalValue = this.getValue(e, t)
                        }
                    },
                    updateReverse: function (t, e) {
                        this.changedByDelimiters ? this.changedByDelimiters = !1 : this.isReverse = t < e
                    }
                },
                render: function (t) {
                    var e = this,
                        i = {
                            staticClass: "v-window",
                            class: this.classes,
                            directives: []
                        };
                    if (!this.touchless) {
                        var n = this.touch || {
                            left: function () {
                                e.$vuetify.rtl ? e.prev() : e.next()
                            },
                            right: function () {
                                e.$vuetify.rtl ? e.next() : e.prev()
                            },
                            end: function (t) {
                                t.stopPropagation()
                            },
                            start: function (t) {
                                t.stopPropagation()
                            }
                        };
                        i.directives.push({
                            name: "touch",
                            value: n
                        })
                    }
                    return t("div", i, [this.genContainer()])
                }
            }),
            br = function () {
                return (br = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Sr = yr.extend({
                name: "v-carousel",
                props: {
                    continuous: {
                        type: Boolean,
                        default: !0
                    },
                    cycle: Boolean,
                    delimiterIcon: {
                        type: String,
                        default: "$delimiter"
                    },
                    height: {
                        type: [Number, String],
                        default: 500
                    },
                    hideDelimiters: Boolean,
                    hideDelimiterBackground: Boolean,
                    interval: {
                        type: [Number, String],
                        default: 6e3,
                        validator: function (t) {
                            return t > 0
                        }
                    },
                    mandatory: {
                        type: Boolean,
                        default: !0
                    },
                    progress: Boolean,
                    progressColor: String,
                    showArrows: {
                        type: Boolean,
                        default: !0
                    },
                    verticalDelimiters: {
                        type: String,
                        default: void 0
                    }
                },
                data: function () {
                    return {
                        internalHeight: this.height,
                        slideTimeout: void 0
                    }
                },
                computed: {
                    classes: function () {
                        return br({}, yr.options.computed.classes.call(this), {
                            "v-carousel": !0,
                            "v-carousel--hide-delimiter-background": this.hideDelimiterBackground,
                            "v-carousel--vertical-delimiters": this.isVertical
                        })
                    },
                    isDark: function () {
                        return this.dark || !this.light
                    },
                    isVertical: function () {
                        return null != this.verticalDelimiters
                    }
                },
                watch: {
                    internalValue: "restartTimeout",
                    interval: "restartTimeout",
                    height: function (t, e) {
                        t !== e && t && (this.internalHeight = t)
                    },
                    cycle: function (t) {
                        t ? this.restartTimeout() : (clearTimeout(this.slideTimeout), this.slideTimeout = void 0)
                    }
                },
                created: function () {
                    this.$attrs.hasOwnProperty("hide-controls") && S("hide-controls", ':show-arrows="false"', this)
                },
                mounted: function () {
                    this.startTimeout()
                },
                methods: {
                    genControlIcons: function () {
                        return this.isVertical ? null : yr.options.methods.genControlIcons.call(this)
                    },
                    genDelimiters: function () {
                        return this.$createElement("div", {
                            staticClass: "v-carousel__controls",
                            style: {
                                left: "left" === this.verticalDelimiters && this.isVertical ? 0 : "auto",
                                right: "right" === this.verticalDelimiters ? 0 : "auto"
                            }
                        }, [this.genItems()])
                    },
                    genItems: function () {
                        for (var t = this, e = this.items.length, i = [], n = 0; n < e; n++) {
                            var s = this.$createElement(ce, {
                                staticClass: "v-carousel__controls__item",
                                attrs: {
                                    "aria-label": this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter", n + 1, e)
                                },
                                props: {
                                    icon: !0,
                                    small: !0,
                                    value: this.getValue(this.items[n], n)
                                }
                            }, [this.$createElement(Lt, {
                                props: {
                                    size: 18
                                }
                            }, this.delimiterIcon)]);
                            i.push(s)
                        }
                        return this.$createElement(zn, {
                            props: {
                                value: this.internalValue,
                                mandatory: this.mandatory
                            },
                            on: {
                                change: function (e) {
                                    t.internalValue = e
                                }
                            }
                        }, i)
                    },
                    genProgress: function () {
                        return this.$createElement(Cn, {
                            staticClass: "v-carousel__progress",
                            props: {
                                color: this.progressColor,
                                value: (this.internalIndex + 1) / this.items.length * 100
                            }
                        })
                    },
                    restartTimeout: function () {
                        this.slideTimeout && clearTimeout(this.slideTimeout), this.slideTimeout = void 0, window.requestAnimationFrame(this.startTimeout)
                    },
                    startTimeout: function () {
                        this.cycle && (this.slideTimeout = window.setTimeout(this.next, +this.interval > 0 ? +this.interval : 6e3))
                    }
                },
                render: function (t) {
                    var e = yr.options.render.call(this, t);
                    return e.data.style = "height: " + Y(this.height) + ";", this.hideDelimiters || e.children.push(this.genDelimiters()), (this.progress || this.progressColor) && e.children.push(this.genProgress()), e
                }
            }),
            xr = d(ti, Rt("windowGroup", "v-window-item", "v-window")).extend().extend().extend({
                name: "v-window-item",
                directives: {
                    Touch: mr
                },
                props: {
                    disabled: Boolean,
                    reverseTransition: {
                        type: [Boolean, String],
                        default: void 0
                    },
                    transition: {
                        type: [Boolean, String],
                        default: void 0
                    },
                    value: {
                        required: !1
                    }
                },
                data: function () {
                    return {
                        isActive: !1,
                        inTransition: !1
                    }
                },
                computed: {
                    classes: function () {
                        return this.groupClasses
                    },
                    computedTransition: function () {
                        return this.windowGroup.internalReverse ? void 0 !== this.reverseTransition ? this.reverseTransition || "" : this.windowGroup.computedTransition : void 0 !== this.transition ? this.transition || "" : this.windowGroup.computedTransition
                    }
                },
                methods: {
                    genDefaultSlot: function () {
                        return this.$slots.default
                    },
                    genWindowItem: function () {
                        return this.$createElement("div", {
                            staticClass: "v-window-item",
                            class: this.classes,
                            directives: [{
                                name: "show",
                                value: this.isActive
                            }],
                            on: this.$listeners
                        }, this.showLazyContent(this.genDefaultSlot()))
                    },
                    onAfterTransition: function () {
                        this.inTransition && (this.inTransition = !1, this.windowGroup.transitionCount > 0 && (this.windowGroup.transitionCount--, 0 === this.windowGroup.transitionCount && (this.windowGroup.transitionHeight = void 0)))
                    },
                    onBeforeTransition: function () {
                        this.inTransition || (this.inTransition = !0, 0 === this.windowGroup.transitionCount && (this.windowGroup.transitionHeight = Y(this.windowGroup.$el.clientHeight)), this.windowGroup.transitionCount++)
                    },
                    onTransitionCancelled: function () {
                        this.onAfterTransition()
                    },
                    onEnter: function (t) {
                        var e = this;
                        this.inTransition && this.$nextTick(function () {
                            e.computedTransition && e.inTransition && (e.windowGroup.transitionHeight = Y(t.clientHeight))
                        })
                    }
                },
                render: function (t) {
                    return t("transition", {
                        props: {
                            name: this.computedTransition
                        },
                        on: {
                            beforeEnter: this.onBeforeTransition,
                            afterEnter: this.onAfterTransition,
                            enterCancelled: this.onTransitionCancelled,
                            beforeLeave: this.onBeforeTransition,
                            afterLeave: this.onAfterTransition,
                            leaveCancelled: this.onTransitionCancelled,
                            enter: this.onEnter
                        }
                    }, [this.genWindowItem()])
                }
            }),
            wr = function () {
                return (wr = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Cr = d(xr, ne).extend({
                name: "v-carousel-item",
                inheritAttrs: !1,
                methods: {
                    genDefaultSlot: function () {
                        return [this.$createElement(mt, {
                            staticClass: "v-carousel__item",
                            props: wr({}, this.$attrs, {
                                height: this.windowGroup.internalHeight
                            }),
                            on: this.$listeners
                        }, [this.$slots.default, this.$createElement("template", {
                            slot: "placeholder"
                        }, this.$slots.placeholder)])]
                    },
                    genWindowItem: function () {
                        var t = this.generateRouteLink(),
                            e = t.tag,
                            i = t.data;
                        return i.staticClass = "v-window-item", i.directives.push({
                            name: "show",
                            value: this.isActive
                        }), this.$createElement(e, i, this.showLazyContent(this.genDefaultSlot()))
                    }
                }
            }),
            kr = (i(50), i(4), a.a.extend({
                name: "rippleable",
                directives: {
                    ripple: ee
                },
                props: {
                    ripple: {
                        type: [Boolean, Object],
                        default: !0
                    }
                },
                methods: {
                    genRipple: function (t) {
                        return void 0 === t && (t = {}), this.ripple ? (t.staticClass = "v-input--selection-controls__ripple", t.directives = t.directives || [], t.directives.push({
                            name: "ripple",
                            value: {
                                center: !0
                            }
                        }), t.on = Object.assign({
                            click: this.onChange
                        }, this.$listeners), this.$createElement("div", t)) : null
                    },
                    onChange: function () {}
                }
            })),
            $r = d(gn, kr, Tn).extend({
                name: "selectable",
                model: {
                    prop: "inputValue",
                    event: "change"
                },
                props: {
                    id: String,
                    inputValue: null,
                    falseValue: null,
                    trueValue: null,
                    multiple: {
                        type: Boolean,
                        default: null
                    },
                    label: String
                },
                data: function () {
                    return {
                        hasColor: this.inputValue,
                        lazyValue: this.inputValue
                    }
                },
                computed: {
                    computedColor: function () {
                        if (this.isActive) return this.color ? this.color : this.isDark && !this.appIsDark ? "white" : "accent"
                    },
                    isMultiple: function () {
                        return !0 === this.multiple || null === this.multiple && Array.isArray(this.internalValue)
                    },
                    isActive: function () {
                        var t = this,
                            e = this.value,
                            i = this.internalValue;
                        return this.isMultiple ? !!Array.isArray(i) && i.some(function (i) {
                            return t.valueComparator(i, e)
                        }) : void 0 === this.trueValue || void 0 === this.falseValue ? e ? this.valueComparator(e, i) : Boolean(i) : this.valueComparator(i, this.trueValue)
                    },
                    isDirty: function () {
                        return this.isActive
                    }
                },
                watch: {
                    inputValue: function (t) {
                        this.lazyValue = t, this.hasColor = t
                    }
                },
                methods: {
                    genLabel: function () {
                        var t = this,
                            e = gn.options.methods.genLabel.call(this);
                        return e ? (e.data.on = {
                            click: function (e) {
                                e.preventDefault(), t.onChange()
                            }
                        }, e) : e
                    },
                    genInput: function (t, e) {
                        return this.$createElement("input", {
                            attrs: Object.assign({
                                "aria-checked": this.isActive.toString(),
                                disabled: this.isDisabled,
                                id: this.computedId,
                                role: t,
                                type: t
                            }, e),
                            domProps: {
                                value: this.value,
                                checked: this.isActive
                            },
                            on: {
                                blur: this.onBlur,
                                change: this.onChange,
                                focus: this.onFocus,
                                keydown: this.onKeydown
                            },
                            ref: "input"
                        })
                    },
                    onBlur: function () {
                        this.isFocused = !1
                    },
                    onChange: function () {
                        var t = this;
                        if (!this.isDisabled) {
                            var e = this.value,
                                i = this.internalValue;
                            if (this.isMultiple) {
                                Array.isArray(i) || (i = []);
                                var n = i.length;
                                (i = i.filter(function (i) {
                                    return !t.valueComparator(i, e)
                                })).length === n && i.push(e)
                            } else i = void 0 !== this.trueValue && void 0 !== this.falseValue ? this.valueComparator(i, this.trueValue) ? this.falseValue : this.trueValue : e ? this.valueComparator(i, e) ? null : e : !i;
                            this.validate(!0, i), this.internalValue = i, this.hasColor = i
                        }
                    },
                    onFocus: function () {
                        this.isFocused = !0
                    },
                    onKeydown: function (t) {}
                }
            }),
            Ir = function () {
                return (Ir = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Or = $r.extend({
                name: "v-checkbox",
                props: {
                    indeterminate: Boolean,
                    indeterminateIcon: {
                        type: String,
                        default: "$checkboxIndeterminate"
                    },
                    offIcon: {
                        type: String,
                        default: "$checkboxOff"
                    },
                    onIcon: {
                        type: String,
                        default: "$checkboxOn"
                    }
                },
                data: function () {
                    return {
                        inputIndeterminate: this.indeterminate
                    }
                },
                computed: {
                    classes: function () {
                        return Ir({}, gn.options.computed.classes.call(this), {
                            "v-input--selection-controls": !0,
                            "v-input--checkbox": !0,
                            "v-input--indeterminate": this.inputIndeterminate
                        })
                    },
                    computedIcon: function () {
                        return this.inputIndeterminate ? this.indeterminateIcon : this.isActive ? this.onIcon : this.offIcon
                    },
                    validationState: function () {
                        if (!this.disabled || this.inputIndeterminate) return this.hasError && this.shouldValidate ? "error" : this.hasSuccess ? "success" : null !== this.hasColor ? this.computedColor : void 0
                    }
                },
                watch: {
                    indeterminate: function (t) {
                        var e = this;
                        this.$nextTick(function () {
                            return e.inputIndeterminate = t
                        })
                    },
                    inputIndeterminate: function (t) {
                        this.$emit("update:indeterminate", t)
                    },
                    isActive: function () {
                        this.indeterminate && (this.inputIndeterminate = !1)
                    }
                },
                methods: {
                    genCheckbox: function () {
                        return this.$createElement("div", {
                            staticClass: "v-input--selection-controls__input"
                        }, [this.genInput("checkbox", Ir({}, this.attrs$, {
                            "aria-checked": this.inputIndeterminate ? "mixed" : this.isActive.toString()
                        })), this.genRipple(this.setTextColor(this.validationState)), this.$createElement(Lt, this.setTextColor(this.validationState, {
                            props: {
                                dense: this.dense,
                                dark: this.dark,
                                light: this.light
                            }
                        }), this.computedIcon)])
                    },
                    genDefaultSlot: function () {
                        return [this.genCheckbox(), this.genLabel()]
                    }
                }
            }),
            _r = (i(51), i(52), function () {
                return (_r = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Tr = d(Yi).extend({
                name: "base-slide-group",
                directives: {
                    Resize: vi,
                    Touch: mr
                },
                props: {
                    activeClass: {
                        type: String,
                        default: "v-slide-item--active"
                    },
                    centerActive: Boolean,
                    nextIcon: {
                        type: String,
                        default: "$next"
                    },
                    mobileBreakPoint: {
                        type: [Number, String],
                        default: 1264,
                        validator: function (t) {
                            return !isNaN(parseInt(t))
                        }
                    },
                    prevIcon: {
                        type: String,
                        default: "$prev"
                    },
                    showArrows: Boolean
                },
                data: function () {
                    return {
                        internalItemsLength: 0,
                        isOverflowing: !1,
                        resizeTimeout: 0,
                        startX: 0,
                        scrollOffset: 0,
                        widths: {
                            content: 0,
                            wrapper: 0
                        }
                    }
                },
                computed: {
                    __cachedNext: function () {
                        return this.genTransition("next")
                    },
                    __cachedPrev: function () {
                        return this.genTransition("prev")
                    },
                    classes: function () {
                        return _r({}, Yi.options.computed.classes.call(this), {
                            "v-slide-group": !0,
                            "v-slide-group--has-affixes": this.hasAffixes,
                            "v-slide-group--is-overflowing": this.isOverflowing
                        })
                    },
                    hasAffixes: function () {
                        return (this.showArrows || !this.isMobile) && this.isOverflowing
                    },
                    hasNext: function () {
                        if (!this.hasAffixes) return !1;
                        var t = this.widths,
                            e = t.content,
                            i = t.wrapper;
                        return e > Math.abs(this.scrollOffset) + i
                    },
                    hasPrev: function () {
                        return this.hasAffixes && 0 !== this.scrollOffset
                    },
                    isMobile: function () {
                        return this.$vuetify.breakpoint.width < this.mobileBreakPoint
                    }
                },
                watch: {
                    internalValue: "setWidths",
                    isOverflowing: "setWidths",
                    scrollOffset: function (t) {
                        this.$refs.content.style.transform = "translateX(" + -t + "px)"
                    }
                },
                beforeUpdate: function () {
                    this.internalItemsLength = (this.$children || []).length
                },
                updated: function () {
                    this.internalItemsLength !== (this.$children || []).length && this.setWidths()
                },
                methods: {
                    genNext: function () {
                        var t = this;
                        if (!this.hasAffixes) return null;
                        var e = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
                        return this.$createElement("div", {
                            staticClass: "v-slide-group__next",
                            class: {
                                "v-slide-group__next--disabled": !this.hasNext
                            },
                            on: {
                                click: function () {
                                    return t.onAffixClick("next")
                                }
                            },
                            key: "next"
                        }, [e])
                    },
                    genContent: function () {
                        return this.$createElement("div", {
                            staticClass: "v-slide-group__content",
                            ref: "content"
                        }, this.$slots.default)
                    },
                    genData: function () {
                        return {
                            class: this.classes,
                            directives: [{
                                name: "resize",
                                value: this.onResize
                            }]
                        }
                    },
                    genIcon: function (t) {
                        var e = t;
                        this.$vuetify.rtl && "prev" === t ? e = "next" : this.$vuetify.rtl && "next" === t && (e = "prev");
                        var i = this["has" + ("" + t[0].toUpperCase() + t.slice(1))];
                        return this.showArrows || i ? this.$createElement(Lt, {
                            props: {
                                disabled: !i
                            }
                        }, this[e + "Icon"]) : null
                    },
                    genPrev: function () {
                        var t = this,
                            e = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
                        return this.$createElement("div", {
                            staticClass: "v-slide-group__prev",
                            class: {
                                "v-slide-group__prev--disabled": !this.hasPrev
                            },
                            on: {
                                click: function () {
                                    return t.onAffixClick("prev")
                                }
                            },
                            key: "prev"
                        }, [e])
                    },
                    genTransition: function (t) {
                        return this.$createElement(De, [this.genIcon(t)])
                    },
                    genWrapper: function () {
                        var t = this;
                        return this.$createElement("div", {
                            staticClass: "v-slide-group__wrapper",
                            directives: [{
                                name: "touch",
                                value: {
                                    start: function (e) {
                                        return t.overflowCheck(e, t.onTouchStart)
                                    },
                                    move: function (e) {
                                        return t.overflowCheck(e, t.onTouchMove)
                                    },
                                    end: function (e) {
                                        return t.overflowCheck(e, t.onTouchEnd)
                                    }
                                }
                            }],
                            ref: "wrapper"
                        }, [this.genContent()])
                    },
                    calculateNewOffset: function (t, e, i, n) {
                        var s = i ? -1 : 1,
                            r = s * n + ("prev" === t ? -1 : 1) * e.wrapper;
                        return s * Math.max(Math.min(r, e.content - e.wrapper), 0)
                    },
                    onAffixClick: function (t) {
                        this.$emit("click:" + t), this.scrollTo(t)
                    },
                    onResize: function () {
                        this._isDestroyed || this.setWidths()
                    },
                    onTouchStart: function (t) {
                        var e = this.$refs.content;
                        this.startX = this.scrollOffset + t.touchstartX, e.style.setProperty("transition", "none"), e.style.setProperty("willChange", "transform")
                    },
                    onTouchMove: function (t) {
                        this.scrollOffset = this.startX - t.touchmoveX
                    },
                    onTouchEnd: function () {
                        var t = this.$refs,
                            e = t.content,
                            i = t.wrapper,
                            n = e.clientWidth - i.clientWidth;
                        e.style.setProperty("transition", null), e.style.setProperty("willChange", null), this.$vuetify.rtl ? this.scrollOffset > 0 || !this.isOverflowing ? this.scrollOffset = 0 : this.scrollOffset <= -n && (this.scrollOffset = -n) : this.scrollOffset < 0 || !this.isOverflowing ? this.scrollOffset = 0 : this.scrollOffset >= n && (this.scrollOffset = n)
                    },
                    overflowCheck: function (t, e) {
                        t.stopPropagation(), this.isOverflowing && e(t)
                    },
                    scrollIntoView: function () {
                        this.selectedItem && (0 === this.selectedIndex || !this.centerActive && !this.isOverflowing ? this.scrollOffset = 0 : this.centerActive ? this.scrollOffset = this.calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl) : this.isOverflowing && (this.scrollOffset = this.calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset)))
                    },
                    calculateUpdatedOffset: function (t, e, i, n) {
                        var s = t.clientWidth,
                            r = i ? e.content - t.offsetLeft - s : t.offsetLeft;
                        i && (n = -n);
                        var o = e.wrapper + n,
                            a = s + r,
                            l = .4 * s;
                        return r < n ? n = Math.max(r - l, 0) : o < a && (n = Math.min(n - (o - a - l), e.content - e.wrapper)), i ? -n : n
                    },
                    calculateCenteredOffset: function (t, e, i) {
                        var n = t.offsetLeft,
                            s = t.clientWidth;
                        if (i) {
                            var r = e.content - n - s / 2 - e.wrapper / 2;
                            return -Math.min(e.content - e.wrapper, Math.max(0, r))
                        }
                        r = n + s / 2 - e.wrapper / 2;
                        return Math.min(e.content - e.wrapper, Math.max(0, r))
                    },
                    scrollTo: function (t) {
                        this.scrollOffset = this.calculateNewOffset(t, {
                            content: this.$refs.content ? this.$refs.content.clientWidth : 0,
                            wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
                        }, this.$vuetify.rtl, this.scrollOffset)
                    },
                    setWidths: function () {
                        var t = this;
                        window.requestAnimationFrame(function () {
                            var e = t.$refs,
                                i = e.content,
                                n = e.wrapper;
                            t.widths = {
                                content: i ? i.clientWidth : 0,
                                wrapper: n ? n.clientWidth : 0
                            }, t.isOverflowing = t.widths.wrapper < t.widths.content, t.scrollIntoView()
                        })
                    }
                },
                render: function (t) {
                    return t("div", this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()])
                }
            }),
            Br = Tr.extend({
                name: "v-slide-group",
                provide: function () {
                    return {
                        slideGroup: this
                    }
                }
            }),
            Ar = function () {
                return (Ar = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Er = d(Tr, _).extend({
                name: "v-chip-group",
                provide: function () {
                    return {
                        chipGroup: this
                    }
                },
                props: {
                    column: Boolean
                },
                computed: {
                    classes: function () {
                        return Ar({}, Tr.options.computed.classes.call(this), {
                            "v-chip-group": !0,
                            "v-chip-group--column": this.column
                        })
                    }
                },
                watch: {
                    column: function (t) {
                        t && (this.scrollOffset = 0), this.$nextTick(this.onResize)
                    }
                },
                methods: {
                    genData: function () {
                        return this.setTextColor(this.color, Ar({}, Tr.options.methods.genData.call(this)))
                    }
                }
            }),
            Mr = (i(53), i(56), i(57), function () {
                return (Mr = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Dr = d(gn, kn).extend({
                name: "v-slider",
                directives: {
                    ClickOutside: pi
                },
                mixins: [kn],
                props: {
                    disabled: Boolean,
                    inverseLabel: Boolean,
                    max: {
                        type: [Number, String],
                        default: 100
                    },
                    min: {
                        type: [Number, String],
                        default: 0
                    },
                    step: {
                        type: [Number, String],
                        default: 1
                    },
                    thumbColor: String,
                    thumbLabel: {
                        type: [Boolean, String],
                        default: null,
                        validator: function (t) {
                            return "boolean" == typeof t || "always" === t
                        }
                    },
                    thumbSize: {
                        type: [Number, String],
                        default: 32
                    },
                    tickLabels: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    ticks: {
                        type: [Boolean, String],
                        default: !1,
                        validator: function (t) {
                            return "boolean" == typeof t || "always" === t
                        }
                    },
                    tickSize: {
                        type: [Number, String],
                        default: 2
                    },
                    trackColor: String,
                    trackFillColor: String,
                    value: [Number, String],
                    vertical: Boolean
                },
                data: function () {
                    return {
                        app: null,
                        oldValue: null,
                        keyPressed: 0,
                        isFocused: !1,
                        isActive: !1,
                        lazyValue: 0,
                        noClick: !1
                    }
                },
                computed: {
                    classes: function () {
                        return Mr({}, gn.options.computed.classes.call(this), {
                            "v-input__slider": !0,
                            "v-input__slider--vertical": this.vertical,
                            "v-input__slider--inverse-label": this.inverseLabel
                        })
                    },
                    internalValue: {
                        get: function () {
                            return this.lazyValue
                        },
                        set: function (t) {
                            t = isNaN(t) ? this.minValue : t;
                            var e = this.roundValue(Math.min(Math.max(t, this.minValue), this.maxValue));
                            e !== this.lazyValue && (this.lazyValue = e, this.$emit("input", e))
                        }
                    },
                    trackTransition: function () {
                        return this.keyPressed >= 2 ? "none" : ""
                    },
                    minValue: function () {
                        return parseFloat(this.min)
                    },
                    maxValue: function () {
                        return parseFloat(this.max)
                    },
                    stepNumeric: function () {
                        return this.step > 0 ? parseFloat(this.step) : 0
                    },
                    inputWidth: function () {
                        return (this.roundValue(this.internalValue) - this.minValue) / (this.maxValue - this.minValue) * 100
                    },
                    trackFillStyles: function () {
                        var t, e = this.vertical ? "bottom" : "left",
                            i = this.vertical ? "top" : "right",
                            n = this.vertical ? "height" : "width",
                            s = this.$vuetify.rtl ? "auto" : "0",
                            r = this.$vuetify.rtl ? "0" : "auto",
                            o = this.disabled ? "calc(" + this.inputWidth + "% - 10px)" : this.inputWidth + "%";
                        return (t = {
                            transition: this.trackTransition
                        })[e] = s, t[i] = r, t[n] = o, t
                    },
                    trackStyles: function () {
                        var t, e = this.vertical ? this.$vuetify.rtl ? "bottom" : "top" : this.$vuetify.rtl ? "left" : "right",
                            i = this.vertical ? "height" : "width",
                            n = this.disabled ? "calc(" + (100 - this.inputWidth) + "% - 10px)" : "calc(" + (100 - this.inputWidth) + "%)";
                        return (t = {
                            transition: this.trackTransition
                        })[e] = "0px", t[i] = n, t
                    },
                    showTicks: function () {
                        return this.tickLabels.length > 0 || !(this.disabled || !this.stepNumeric || !this.ticks)
                    },
                    numTicks: function () {
                        return Math.ceil((this.maxValue - this.minValue) / this.stepNumeric)
                    },
                    showThumbLabel: function () {
                        return !(this.disabled || !this.thumbLabel && !this.$scopedSlots["thumb-label"])
                    },
                    computedTrackColor: function () {
                        if (!this.disabled) return this.trackColor ? this.trackColor : this.isDark ? this.validationState : this.validationState || "primary lighten-3"
                    },
                    computedTrackFillColor: function () {
                        if (!this.disabled) return this.trackFillColor ? this.trackFillColor : this.validationState || this.computedColor
                    },
                    computedThumbColor: function () {
                        return this.thumbColor ? this.thumbColor : this.validationState || this.computedColor
                    }
                },
                watch: {
                    min: function (t) {
                        var e = parseFloat(t);
                        e > this.internalValue && this.$emit("input", e)
                    },
                    max: function (t) {
                        var e = parseFloat(t);
                        e < this.internalValue && this.$emit("input", e)
                    },
                    value: {
                        handler: function (t) {
                            this.internalValue = t
                        }
                    }
                },
                beforeMount: function () {
                    this.internalValue = this.value
                },
                mounted: function () {
                    this.app = document.querySelector("[data-app]") || y("Missing v-app or a non-body wrapping element with the [data-app] attribute", this)
                },
                methods: {
                    genDefaultSlot: function () {
                        var t = [this.genLabel()],
                            e = this.genSlider();
                        return this.inverseLabel ? t.unshift(e) : t.push(e), t.push(this.genProgress()), t
                    },
                    genSlider: function () {
                        return this.$createElement("div", {
                            class: Mr({
                                "v-slider": !0,
                                "v-slider--horizontal": !this.vertical,
                                "v-slider--vertical": this.vertical,
                                "v-slider--focused": this.isFocused,
                                "v-slider--active": this.isActive,
                                "v-slider--disabled": this.disabled,
                                "v-slider--readonly": this.readonly
                            }, this.themeClasses),
                            directives: [{
                                name: "click-outside",
                                value: this.onBlur
                            }],
                            on: {
                                click: this.onSliderClick
                            }
                        }, this.genChildren())
                    },
                    genChildren: function () {
                        return [this.genInput(), this.genTrackContainer(), this.genSteps(), this.genThumbContainer(this.internalValue, this.inputWidth, this.isActive, this.isFocused, this.onThumbMouseDown, this.onFocus, this.onBlur)]
                    },
                    genInput: function () {
                        return this.$createElement("input", {
                            attrs: Mr({
                                value: this.internalValue,
                                id: this.computedId,
                                disabled: this.disabled,
                                readonly: !0,
                                tabindex: -1
                            }, this.$attrs)
                        })
                    },
                    genTrackContainer: function () {
                        var t = [this.$createElement("div", this.setBackgroundColor(this.computedTrackColor, {
                            staticClass: "v-slider__track-background",
                            style: this.trackStyles
                        })), this.$createElement("div", this.setBackgroundColor(this.computedTrackFillColor, {
                            staticClass: "v-slider__track-fill",
                            style: this.trackFillStyles
                        }))];
                        return this.$createElement("div", {
                            staticClass: "v-slider__track-container",
                            ref: "track"
                        }, t)
                    },
                    genSteps: function () {
                        var t = this;
                        if (!this.step || !this.showTicks) return null;
                        var e = parseFloat(this.tickSize),
                            i = N(this.numTicks + 1),
                            n = this.vertical ? "bottom" : "left",
                            s = this.vertical ? "right" : "top";
                        this.vertical && i.reverse();
                        var r = i.map(function (i) {
                            var r, o = t.$vuetify.rtl ? t.maxValue - i : i,
                                a = [];
                            t.tickLabels[o] && a.push(t.$createElement("div", {
                                staticClass: "v-slider__tick-label"
                            }, t.tickLabels[o]));
                            var l = i * (100 / t.numTicks),
                                u = t.$vuetify.rtl ? 100 - t.inputWidth < l : l < t.inputWidth;
                            return t.$createElement("span", {
                                key: i,
                                staticClass: "v-slider__tick",
                                class: {
                                    "v-slider__tick--filled": u
                                },
                                style: (r = {
                                    width: e + "px",
                                    height: e + "px"
                                }, r[n] = "calc(" + l + "% - " + e / 2 + "px)", r[s] = "calc(50% - " + e / 2 + "px)", r)
                            }, a)
                        });
                        return this.$createElement("div", {
                            staticClass: "v-slider__ticks-container",
                            class: {
                                "v-slider__ticks-container--always-show": "always" === this.ticks || this.tickLabels.length > 0
                            }
                        }, r)
                    },
                    genThumbContainer: function (t, e, i, n, s, r, o, a) {
                        void 0 === a && (a = "thumb");
                        var l = [this.genThumb()],
                            u = this.genThumbLabelContent(t);
                        return this.showThumbLabel && l.push(this.genThumbLabel(u)), this.$createElement("div", this.setTextColor(this.computedThumbColor, {
                            ref: a,
                            staticClass: "v-slider__thumb-container",
                            class: {
                                "v-slider__thumb-container--active": i, "v-slider__thumb-container--focused": n, "v-slider__thumb-container--show-label": this.showThumbLabel
                            },
                            style: this.getThumbContainerStyles(e),
                            attrs: Mr({
                                role: "slider",
                                tabindex: this.disabled || this.readonly ? -1 : this.$attrs.tabindex ? this.$attrs.tabindex : 0,
                                "aria-label": this.label,
                                "aria-valuemin": this.min,
                                "aria-valuemax": this.max,
                                "aria-valuenow": this.internalValue,
                                "aria-readonly": String(this.readonly),
                                "aria-orientation": this.vertical ? "vertical" : "horizontal"
                            }, this.$attrs),
                            on: {
                                focus: r,
                                blur: o,
                                keydown: this.onKeyDown,
                                keyup: this.onKeyUp,
                                touchstart: s,
                                mousedown: s
                            }
                        }), l)
                    },
                    genThumbLabelContent: function (t) {
                        return this.$scopedSlots["thumb-label"] ? this.$scopedSlots["thumb-label"]({
                            value: t
                        }) : [this.$createElement("span", [String(t)])]
                    },
                    genThumbLabel: function (t) {
                        var e = Y(this.thumbSize),
                            i = this.vertical ? "translateY(20%) translateY(" + (Number(this.thumbSize) / 3 - 1) + "px) translateX(55%) rotate(135deg)" : "translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";
                        return this.$createElement(Ve, {
                            props: {
                                origin: "bottom center"
                            }
                        }, [this.$createElement("div", {
                            staticClass: "v-slider__thumb-label-container",
                            directives: [{
                                name: "show",
                                value: this.isFocused || this.isActive || "always" === this.thumbLabel
                            }]
                        }, [this.$createElement("div", this.setBackgroundColor(this.computedThumbColor, {
                            staticClass: "v-slider__thumb-label",
                            style: {
                                height: e,
                                width: e,
                                transform: i
                            }
                        }), [this.$createElement("div", t)])])])
                    },
                    genThumb: function () {
                        return this.$createElement("div", this.setBackgroundColor(this.computedThumbColor, {
                            staticClass: "v-slider__thumb"
                        }))
                    },
                    getThumbContainerStyles: function (t) {
                        var e, i = this.vertical ? "top" : "left",
                            n = this.$vuetify.rtl ? 100 - t : t;
                        return n = this.vertical ? 100 - n : n, (e = {
                            transition: this.trackTransition
                        })[i] = n + "%", e
                    },
                    onThumbMouseDown: function (t) {
                        this.oldValue = this.internalValue, this.keyPressed = 2, this.isActive = !0;
                        var e = !D || {
                                passive: !0,
                                capture: !0
                            },
                            i = !!D && {
                                passive: !0
                            };
                        "touches" in t ? (this.app.addEventListener("touchmove", this.onMouseMove, i), M(this.app, "touchend", this.onSliderMouseUp, e)) : (this.app.addEventListener("mousemove", this.onMouseMove, i), M(this.app, "mouseup", this.onSliderMouseUp, e)), this.$emit("start", this.internalValue)
                    },
                    onSliderMouseUp: function (t) {
                        t.stopPropagation(), this.keyPressed = 0;
                        var e = !!D && {
                            passive: !0
                        };
                        this.app.removeEventListener("touchmove", this.onMouseMove, e), this.app.removeEventListener("mousemove", this.onMouseMove, e), this.$emit("end", this.internalValue), L(this.oldValue, this.internalValue) || (this.$emit("change", this.internalValue), this.noClick = !0), this.isActive = !1
                    },
                    onMouseMove: function (t) {
                        var e = this.parseMouseMove(t).value;
                        this.internalValue = e
                    },
                    onKeyDown: function (t) {
                        if (!this.disabled && !this.readonly) {
                            var e = this.parseKeyDown(t, this.internalValue);
                            null != e && (this.internalValue = e, this.$emit("change", e))
                        }
                    },
                    onKeyUp: function () {
                        this.keyPressed = 0
                    },
                    onSliderClick: function (t) {
                        this.noClick ? this.noClick = !1 : (this.$refs.thumb.focus(), this.onMouseMove(t), this.$emit("change", this.internalValue))
                    },
                    onBlur: function (t) {
                        this.isFocused = !1, this.$emit("blur", t)
                    },
                    onFocus: function (t) {
                        this.isFocused = !0, this.$emit("focus", t)
                    },
                    parseMouseMove: function (t) {
                        var e = this.vertical ? "top" : "left",
                            i = this.vertical ? "height" : "width",
                            n = this.vertical ? "clientY" : "clientX",
                            s = this.$refs.track.getBoundingClientRect(),
                            r = s[e],
                            o = s[i],
                            a = "touches" in t ? t.touches[0][n] : t[n],
                            l = Math.min(Math.max((a - r) / o, 0), 1) || 0;
                        this.vertical && (l = 1 - l), this.$vuetify.rtl && (l = 1 - l);
                        var u = a >= r && a <= r + o;
                        return {
                            value: parseFloat(this.min) + l * (this.maxValue - this.minValue),
                            isInsideTrack: u
                        }
                    },
                    parseKeyDown: function (t, e) {
                        if (!this.disabled) {
                            var i = U.pageup,
                                n = U.pagedown,
                                s = U.end,
                                r = U.home,
                                o = U.left,
                                a = U.right,
                                l = U.down,
                                u = U.up;
                            if ([i, n, s, r, o, a, l, u].includes(t.keyCode)) {
                                t.preventDefault();
                                var c = this.stepNumeric || 1,
                                    h = (this.maxValue - this.minValue) / c;
                                if ([o, a, l, u].includes(t.keyCode)) this.keyPressed += 1, e += ((this.$vuetify.rtl ? [o, u] : [a, u]).includes(t.keyCode) ? 1 : -1) * c * (t.shiftKey ? 3 : t.ctrlKey ? 2 : 1);
                                else if (t.keyCode === r) e = this.minValue;
                                else if (t.keyCode === s) e = this.maxValue;
                                else {
                                    e -= (t.keyCode === n ? 1 : -1) * c * (h > 100 ? h / 10 : 10)
                                }
                                return e
                            }
                        }
                    },
                    roundValue: function (t) {
                        if (!this.stepNumeric) return t;
                        var e = this.step.toString().trim(),
                            i = e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0,
                            n = this.minValue % this.stepNumeric,
                            s = Math.round((t - n) / this.stepNumeric) * this.stepNumeric + n;
                        return parseFloat(Math.min(s, this.maxValue).toFixed(i))
                    }
                }
            }),
            Vr = [
                [3.2406, -1.5372, -.4986],
                [-.9689, 1.8758, .0415],
                [.0557, -.204, 1.057]
            ],
            Pr = function (t) {
                return t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055
            },
            Lr = [
                [.4124, .3576, .1805],
                [.2126, .7152, .0722],
                [.0193, .1192, .9505]
            ],
            Hr = function (t) {
                return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            };

        function jr(t) {
            for (var e = Array(3), i = Pr, n = Vr, s = 0; s < 3; ++s) e[s] = Math.round(255 * nt(i(n[s][0] * t[0] + n[s][1] * t[1] + n[s][2] * t[2])));
            return (e[0] << 16) + (e[1] << 8) + (e[2] << 0)
        }

        function Nr(t) {
            for (var e = [0, 0, 0], i = Hr, n = Lr, s = i((t >> 16 & 255) / 255), r = i((t >> 8 & 255) / 255), o = i((t >> 0 & 255) / 255), a = 0; a < 3; ++a) e[a] = n[a][0] * s + n[a][1] * r + n[a][2] * o;
            return e
        }
        var Fr = function () {
                return (Fr = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            zr = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            };

        function Wr(t) {
            var e;
            if ("number" == typeof t) e = t;
            else {
                if ("string" != typeof t) throw new TypeError("Colors can only be numbers or strings, recieved " + (null == t ? t : t.constructor.name) + " instead");
                var i = "#" === t[0] ? t.substring(1) : t;
                3 === i.length && (i = i.split("").map(function (t) {
                    return t + t
                }).join("")), 6 !== i.length && y("'" + t + "' is not a valid rgb color"), e = parseInt(i, 16)
            }
            return e < 0 ? (y("Colors cannot be negative: '" + t + "'"), e = 0) : (e > 16777215 || isNaN(e)) && (y("'" + t + "' is not a valid rgb color"), e = 16777215), e
        }

        function Rr(t) {
            var e = t.toString(16);
            return e.length < 6 && (e = "0".repeat(6 - e.length) + e), "#" + e
        }

        function Yr(t) {
            var e = t.h,
                i = t.s,
                n = t.v,
                s = t.a,
                r = function (t) {
                    var s = (t + e / 60) % 6;
                    return n - n * i * Math.max(Math.min(s, 4 - s, 1), 0)
                },
                o = [r(5), r(3), r(1)].map(function (t) {
                    return Math.round(255 * t)
                });
            return {
                r: o[0],
                g: o[1],
                b: o[2],
                a: s
            }
        }

        function Gr(t) {
            if (!t) return {
                h: 0,
                s: 1,
                v: 1,
                a: 1
            };
            var e = t.r / 255,
                i = t.g / 255,
                n = t.b / 255,
                s = Math.max(e, i, n),
                r = Math.min(e, i, n),
                o = 0;
            s !== r && (s === e ? o = 60 * (0 + (i - n) / (s - r)) : s === i ? o = 60 * (2 + (n - e) / (s - r)) : s === n && (o = 60 * (4 + (e - i) / (s - r)))), o < 0 && (o += 360);
            var a = [o, 0 === s ? 0 : (s - r) / s, s];
            return {
                h: a[0],
                s: a[1],
                v: a[2],
                a: t.a
            }
        }

        function Ur(t) {
            var e = t.h,
                i = t.s,
                n = t.v,
                s = t.a,
                r = n - n * i / 2;
            return {
                h: e,
                s: 1 === r || 0 === r ? 0 : (n - r) / Math.min(r, 1 - r),
                l: r,
                a: s
            }
        }

        function qr(t) {
            return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")"
        }

        function Xr(t) {
            var e = function (t) {
                var e = Math.round(t).toString(16);
                return ("00".substr(0, 2 - e.length) + e).toUpperCase()
            };
            return "#" + [e(t.r), e(t.g), e(t.b), e(Math.round(255 * t.a))].join("")
        }

        function Zr(t) {
            return Gr(function (t) {
                var e = function (t, e) {
                    void 0 === e && (e = 1);
                    for (var i = [], n = 0; n < t.length;) i.push(t.substr(n, e)), n += e;
                    return i
                }(t.slice(1), 2).map(function (t) {
                    return parseInt(t, 16)
                });
                return {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: Math.round(e[3] / 255 * 100) / 100
                }
            }(t))
        }

        function Kr(t) {
            return Xr(Yr(t))
        }

        function Jr(t) {
            return t.startsWith("#") && (t = t.slice(1)), 3 === (t = t.replace(/([^0-9a-f])/gi, "F")).length && (t = t.split("").map(function (t) {
                return t + t
            }).join("")), ("#" + (t = 6 === t.length ? st(t, 8, "F") : st(st(t, 6), 8, "F"))).toUpperCase().substr(0, 9)
        }

        function Qr(t) {
            return (t.r << 16) + (t.g << 8) + t.b
        }

        function to(t, e) {
            var i = zr(Nr(Qr(t)), 2)[1],
                n = zr(Nr(Qr(e)), 2)[1];
            return (Math.max(i, n) + .05) / (Math.min(i, n) + .05)
        }

        function eo(t) {
            return (eo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var io = function () {
            return (io = Object.assign || function (t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                return t
            }).apply(this, arguments)
        };

        function no(t) {
            var e = Kr(t = io({}, t)),
                i = Ur(t),
                n = Yr(t);
            return {
                alpha: t.a,
                hex: e.substr(0, 7),
                hexa: e,
                hsla: i,
                hsva: t,
                hue: t.h,
                rgba: n
            }
        }

        function so(t) {
            var e, i, n, s, r, o, a = (i = (e = t).h, n = e.s, s = e.l, r = e.a, o = s + n * Math.min(s, 1 - s), {
                    h: i,
                    s: 0 === o ? 0 : 2 - 2 * s / o,
                    v: o,
                    a: r
                }),
                l = Kr(a),
                u = Yr(a);
            return {
                alpha: a.a,
                hex: l.substr(0, 7),
                hexa: l,
                hsla: t,
                hsva: a,
                hue: a.h,
                rgba: u
            }
        }

        function ro(t) {
            var e = Gr(t),
                i = Xr(t),
                n = Ur(e);
            return {
                alpha: e.a,
                hex: i.substr(0, 7),
                hexa: i,
                hsla: n,
                hsva: e,
                hue: e.h,
                rgba: t
            }
        }

        function oo(t) {
            var e = Zr(t),
                i = Ur(e),
                n = Yr(e);
            return {
                alpha: e.a,
                hex: t.substr(0, 7),
                hexa: t,
                hsla: i,
                hsva: e,
                hue: e.h,
                rgba: n
            }
        }

        function ao(t) {
            return oo(Jr(t))
        }

        function lo(t, e) {
            return e.every(function (e) {
                return t.hasOwnProperty(e)
            })
        }

        function uo(t, e) {
            if (!t) return ro({
                r: 255,
                g: 0,
                b: 0,
                a: 1
            });
            if ("string" == typeof t) {
                if ("transparent" === t) return oo("#00000000");
                var i = Jr(t);
                return e && i === e.hexa ? e : oo(i)
            }
            if ("object" === eo(t)) {
                if (t.hasOwnProperty("alpha")) return t;
                var n = t.hasOwnProperty("a") ? parseFloat(t.a) : 1;
                if (lo(t, ["r", "g", "b"])) return e && t === e.rgba ? e : ro(io({}, t, {
                    a: n
                }));
                if (lo(t, ["h", "s", "l"])) return e && t === e.hsla ? e : so(io({}, t, {
                    a: n
                }));
                if (lo(t, ["h", "s", "v"])) return e && t === e.hsva ? e : no(io({}, t, {
                    a: n
                }))
            }
            return ro({
                r: 255,
                g: 0,
                b: 0,
                a: 1
            })
        }
        var co = function () {
                return (co = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            ho = a.a.extend({
                name: "v-color-picker-preview",
                props: {
                    color: Object,
                    disabled: Boolean,
                    hideAlpha: Boolean
                },
                methods: {
                    genAlpha: function () {
                        var t, e = this;
                        return this.genTrack({
                            staticClass: "v-color-picker__alpha",
                            props: {
                                thumbColor: "grey lighten-2",
                                hideDetails: !0,
                                value: this.color.alpha,
                                step: 0,
                                min: 0,
                                max: 1
                            },
                            style: {
                                backgroundImage: this.disabled ? void 0 : "linear-gradient(to right, transparent, " + (t = this.color.rgba, qr(Fr({}, t, {
                                    a: 1
                                }))) + ")"
                            },
                            on: {
                                input: function (t) {
                                    return e.color.alpha !== t && e.$emit("update:color", no(co({}, e.color.hsva, {
                                        a: t
                                    })))
                                }
                            }
                        })
                    },
                    genSliders: function () {
                        return this.$createElement("div", {
                            staticClass: "v-color-picker__sliders"
                        }, [this.genHue(), !this.hideAlpha && this.genAlpha()])
                    },
                    genDot: function () {
                        return this.$createElement("div", {
                            staticClass: "v-color-picker__dot"
                        }, [this.$createElement("div", {
                            style: {
                                background: qr(this.color.rgba)
                            }
                        })])
                    },
                    genHue: function () {
                        var t = this;
                        return this.genTrack({
                            staticClass: "v-color-picker__hue",
                            props: {
                                thumbColor: "grey lighten-2",
                                hideDetails: !0,
                                value: this.color.hue,
                                step: 0,
                                min: 0,
                                max: 360
                            },
                            on: {
                                input: function (e) {
                                    return t.color.hue !== e && t.$emit("update:color", no(co({}, t.color.hsva, {
                                        h: e
                                    })))
                                }
                            }
                        })
                    },
                    genTrack: function (t) {
                        return this.$createElement(Dr, co({
                            class: "v-color-picker__track"
                        }, t, {
                            props: co({
                                disabled: this.disabled
                            }, t.props)
                        }))
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-color-picker__preview",
                        class: {
                            "v-color-picker__preview--hide-alpha": this.hideAlpha
                        }
                    }, [this.genDot(), this.genSliders()])
                }
            }),
            po = (i(55), a.a.extend({
                name: "v-color-picker-canvas",
                props: {
                    color: {
                        type: Object,
                        default: function () {
                            return ro({
                                r: 255,
                                g: 0,
                                b: 0,
                                a: 1
                            })
                        }
                    },
                    disabled: Boolean,
                    dotSize: {
                        type: [Number, String],
                        default: 10
                    },
                    height: {
                        type: [Number, String],
                        default: 150
                    },
                    width: {
                        type: [Number, String],
                        default: 300
                    }
                },
                data: function () {
                    return {
                        boundingRect: {
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        }
                    }
                },
                computed: {
                    dot: function () {
                        return this.color ? {
                            x: this.color.hsva.s * parseInt(this.width, 10),
                            y: (1 - this.color.hsva.v) * parseInt(this.height, 10)
                        } : {
                            x: 0,
                            y: 0
                        }
                    }
                },
                watch: {
                    "color.hue": "updateCanvas"
                },
                mounted: function () {
                    this.updateCanvas()
                },
                methods: {
                    emitColor: function (t, e) {
                        var i = this.boundingRect,
                            n = i.left,
                            s = i.top,
                            r = i.width,
                            o = i.height;
                        this.$emit("update:color", no({
                            h: this.color.hue,
                            s: nt(t - n, 0, r) / r,
                            v: 1 - nt(e - s, 0, o) / o,
                            a: this.color.alpha
                        }))
                    },
                    updateCanvas: function () {
                        if (this.color) {
                            var t = this.$refs.canvas,
                                e = t.getContext("2d");
                            if (e) {
                                var i = e.createLinearGradient(0, 0, t.width, 0);
                                i.addColorStop(0, "hsla(0, 0%, 100%, 1)"), i.addColorStop(1, "hsla(" + this.color.hue + ", 100%, 50%, 1)"), e.fillStyle = i, e.fillRect(0, 0, t.width, t.height);
                                var n = e.createLinearGradient(0, 0, 0, t.height);
                                n.addColorStop(0, "hsla(0, 0%, 100%, 0)"), n.addColorStop(1, "hsla(0, 0%, 0%, 1)"), e.fillStyle = n, e.fillRect(0, 0, t.width, t.height)
                            }
                        }
                    },
                    handleClick: function (t) {
                        this.disabled || (this.boundingRect = this.$el.getBoundingClientRect(), this.emitColor(t.clientX, t.clientY))
                    },
                    handleMouseDown: function (t) {
                        t.preventDefault(), this.disabled || (this.boundingRect = this.$el.getBoundingClientRect(), window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp))
                    },
                    handleMouseMove: function (t) {
                        this.disabled || this.emitColor(t.clientX, t.clientY)
                    },
                    handleMouseUp: function () {
                        window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp)
                    },
                    genCanvas: function () {
                        return this.$createElement("canvas", {
                            ref: "canvas",
                            attrs: {
                                width: this.width,
                                height: this.height
                            }
                        })
                    },
                    genDot: function () {
                        var t = parseInt(this.dotSize, 10) / 2,
                            e = Y(this.dot.x - t),
                            i = Y(this.dot.y - t);
                        return this.$createElement("div", {
                            staticClass: "v-color-picker__canvas-dot",
                            class: {
                                "v-color-picker__canvas-dot--disabled": this.disabled
                            },
                            style: {
                                width: Y(this.dotSize),
                                height: Y(this.dotSize),
                                transform: "translate(" + e + ", " + i + ")"
                            }
                        })
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-color-picker__canvas",
                        style: {
                            width: Y(this.width),
                            height: Y(this.height)
                        },
                        on: {
                            click: this.handleClick,
                            mousedown: this.handleMouseDown
                        }
                    }, [this.genCanvas(), this.genDot()])
                }
            })),
            fo = (i(54), function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            }),
            vo = {
                rgba: {
                    inputs: [
                        ["r", 255, "int"],
                        ["g", 255, "int"],
                        ["b", 255, "int"],
                        ["a", 1, "float"]
                    ],
                    from: ro
                },
                hsla: {
                    inputs: [
                        ["h", 360, "int"],
                        ["s", 1, "float"],
                        ["l", 1, "float"],
                        ["a", 1, "float"]
                    ],
                    from: so
                },
                hexa: {
                    from: oo
                }
            },
            mo = a.a.extend({
                name: "v-color-picker-edit",
                props: {
                    color: Object,
                    disabled: Boolean,
                    hideAlpha: Boolean,
                    hideModeSwitch: Boolean,
                    mode: {
                        type: String,
                        default: "rgba",
                        validator: function (t) {
                            return Object.keys(vo).includes(t)
                        }
                    }
                },
                data: function () {
                    return {
                        modes: vo,
                        internalMode: this.mode
                    }
                },
                computed: {
                    currentMode: function () {
                        return this.modes[this.internalMode]
                    }
                },
                watch: {
                    mode: function (t) {
                        this.internalMode = t
                    }
                },
                created: function () {
                    this.internalMode = this.mode
                },
                methods: {
                    getValue: function (t, e) {
                        return "float" === e ? Math.round(100 * t) / 100 : "int" === e ? Math.round(t) : 0
                    },
                    parseValue: function (t, e) {
                        return "float" === e ? parseFloat(t) : "int" === e && parseInt(t, 10) || 0
                    },
                    changeMode: function () {
                        var t = Object.keys(this.modes),
                            e = t.indexOf(this.internalMode),
                            i = t[(e + 1) % t.length];
                        this.internalMode = i, this.$emit("update:mode", i)
                    },
                    genInput: function (t, e, i, n) {
                        return this.$createElement("div", {
                            staticClass: "v-color-picker__input"
                        }, [this.$createElement("input", {
                            key: t,
                            attrs: e,
                            domProps: {
                                value: i
                            },
                            on: n
                        }), this.$createElement("span", t.toUpperCase())])
                    },
                    genInputs: function () {
                        var t = this;
                        switch (this.internalMode) {
                            case "hexa":
                                var e = this.color.hexa,
                                    i = this.hideAlpha && e.endsWith("FF") ? e.substr(0, 7) : e;
                                return this.genInput("hex", {
                                    maxlength: this.hideAlpha ? 7 : 9,
                                    disabled: this.disabled
                                }, i, {
                                    change: function (e) {
                                        var i = e.target;
                                        t.$emit("update:color", t.currentMode.from(Jr(i.value)))
                                    }
                                });
                            default:
                                return (this.hideAlpha ? this.currentMode.inputs.slice(0, -1) : this.currentMode.inputs).map(function (e) {
                                    var i = fo(e, 3),
                                        n = i[0],
                                        s = i[1],
                                        r = i[2],
                                        o = t.color[t.internalMode];
                                    return t.genInput(n, {
                                        type: "number",
                                        min: 0,
                                        max: s,
                                        step: "float" === r ? "0.01" : "int" === r ? "1" : void 0,
                                        disabled: t.disabled
                                    }, t.getValue(o[n], r), {
                                        input: function (e) {
                                            var i, s = e.target,
                                                a = t.parseValue(s.value || "0", r);
                                            t.$emit("update:color", t.currentMode.from(Object.assign({}, o, ((i = {})[n] = a, i)), t.color.alpha))
                                        }
                                    })
                                })
                        }
                    },
                    genSwitch: function () {
                        return this.$createElement(ce, {
                            props: {
                                small: !0,
                                icon: !0,
                                disabled: this.disabled
                            },
                            on: {
                                click: this.changeMode
                            }
                        }, [this.$createElement(Lt, "$unfold")])
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-color-picker__edit"
                    }, [this.genInputs(), !this.hideModeSwitch && this.genSwitch()])
                }
            }),
            go = (i(58), Object.freeze({
                base: "#f44336",
                lighten5: "#ffebee",
                lighten4: "#ffcdd2",
                lighten3: "#ef9a9a",
                lighten2: "#e57373",
                lighten1: "#ef5350",
                darken1: "#e53935",
                darken2: "#d32f2f",
                darken3: "#c62828",
                darken4: "#b71c1c",
                accent1: "#ff8a80",
                accent2: "#ff5252",
                accent3: "#ff1744",
                accent4: "#d50000"
            })),
            yo = Object.freeze({
                base: "#e91e63",
                lighten5: "#fce4ec",
                lighten4: "#f8bbd0",
                lighten3: "#f48fb1",
                lighten2: "#f06292",
                lighten1: "#ec407a",
                darken1: "#d81b60",
                darken2: "#c2185b",
                darken3: "#ad1457",
                darken4: "#880e4f",
                accent1: "#ff80ab",
                accent2: "#ff4081",
                accent3: "#f50057",
                accent4: "#c51162"
            }),
            bo = Object.freeze({
                base: "#9c27b0",
                lighten5: "#f3e5f5",
                lighten4: "#e1bee7",
                lighten3: "#ce93d8",
                lighten2: "#ba68c8",
                lighten1: "#ab47bc",
                darken1: "#8e24aa",
                darken2: "#7b1fa2",
                darken3: "#6a1b9a",
                darken4: "#4a148c",
                accent1: "#ea80fc",
                accent2: "#e040fb",
                accent3: "#d500f9",
                accent4: "#aa00ff"
            }),
            So = Object.freeze({
                base: "#673ab7",
                lighten5: "#ede7f6",
                lighten4: "#d1c4e9",
                lighten3: "#b39ddb",
                lighten2: "#9575cd",
                lighten1: "#7e57c2",
                darken1: "#5e35b1",
                darken2: "#512da8",
                darken3: "#4527a0",
                darken4: "#311b92",
                accent1: "#b388ff",
                accent2: "#7c4dff",
                accent3: "#651fff",
                accent4: "#6200ea"
            }),
            xo = Object.freeze({
                base: "#3f51b5",
                lighten5: "#e8eaf6",
                lighten4: "#c5cae9",
                lighten3: "#9fa8da",
                lighten2: "#7986cb",
                lighten1: "#5c6bc0",
                darken1: "#3949ab",
                darken2: "#303f9f",
                darken3: "#283593",
                darken4: "#1a237e",
                accent1: "#8c9eff",
                accent2: "#536dfe",
                accent3: "#3d5afe",
                accent4: "#304ffe"
            }),
            wo = Object.freeze({
                base: "#2196f3",
                lighten5: "#e3f2fd",
                lighten4: "#bbdefb",
                lighten3: "#90caf9",
                lighten2: "#64b5f6",
                lighten1: "#42a5f5",
                darken1: "#1e88e5",
                darken2: "#1976d2",
                darken3: "#1565c0",
                darken4: "#0d47a1",
                accent1: "#82b1ff",
                accent2: "#448aff",
                accent3: "#2979ff",
                accent4: "#2962ff"
            }),
            Co = Object.freeze({
                base: "#03a9f4",
                lighten5: "#e1f5fe",
                lighten4: "#b3e5fc",
                lighten3: "#81d4fa",
                lighten2: "#4fc3f7",
                lighten1: "#29b6f6",
                darken1: "#039be5",
                darken2: "#0288d1",
                darken3: "#0277bd",
                darken4: "#01579b",
                accent1: "#80d8ff",
                accent2: "#40c4ff",
                accent3: "#00b0ff",
                accent4: "#0091ea"
            }),
            ko = Object.freeze({
                base: "#00bcd4",
                lighten5: "#e0f7fa",
                lighten4: "#b2ebf2",
                lighten3: "#80deea",
                lighten2: "#4dd0e1",
                lighten1: "#26c6da",
                darken1: "#00acc1",
                darken2: "#0097a7",
                darken3: "#00838f",
                darken4: "#006064",
                accent1: "#84ffff",
                accent2: "#18ffff",
                accent3: "#00e5ff",
                accent4: "#00b8d4"
            }),
            $o = Object.freeze({
                base: "#009688",
                lighten5: "#e0f2f1",
                lighten4: "#b2dfdb",
                lighten3: "#80cbc4",
                lighten2: "#4db6ac",
                lighten1: "#26a69a",
                darken1: "#00897b",
                darken2: "#00796b",
                darken3: "#00695c",
                darken4: "#004d40",
                accent1: "#a7ffeb",
                accent2: "#64ffda",
                accent3: "#1de9b6",
                accent4: "#00bfa5"
            }),
            Io = Object.freeze({
                base: "#4caf50",
                lighten5: "#e8f5e9",
                lighten4: "#c8e6c9",
                lighten3: "#a5d6a7",
                lighten2: "#81c784",
                lighten1: "#66bb6a",
                darken1: "#43a047",
                darken2: "#388e3c",
                darken3: "#2e7d32",
                darken4: "#1b5e20",
                accent1: "#b9f6ca",
                accent2: "#69f0ae",
                accent3: "#00e676",
                accent4: "#00c853"
            }),
            Oo = Object.freeze({
                base: "#8bc34a",
                lighten5: "#f1f8e9",
                lighten4: "#dcedc8",
                lighten3: "#c5e1a5",
                lighten2: "#aed581",
                lighten1: "#9ccc65",
                darken1: "#7cb342",
                darken2: "#689f38",
                darken3: "#558b2f",
                darken4: "#33691e",
                accent1: "#ccff90",
                accent2: "#b2ff59",
                accent3: "#76ff03",
                accent4: "#64dd17"
            }),
            _o = Object.freeze({
                base: "#cddc39",
                lighten5: "#f9fbe7",
                lighten4: "#f0f4c3",
                lighten3: "#e6ee9c",
                lighten2: "#dce775",
                lighten1: "#d4e157",
                darken1: "#c0ca33",
                darken2: "#afb42b",
                darken3: "#9e9d24",
                darken4: "#827717",
                accent1: "#f4ff81",
                accent2: "#eeff41",
                accent3: "#c6ff00",
                accent4: "#aeea00"
            }),
            To = Object.freeze({
                base: "#ffeb3b",
                lighten5: "#fffde7",
                lighten4: "#fff9c4",
                lighten3: "#fff59d",
                lighten2: "#fff176",
                lighten1: "#ffee58",
                darken1: "#fdd835",
                darken2: "#fbc02d",
                darken3: "#f9a825",
                darken4: "#f57f17",
                accent1: "#ffff8d",
                accent2: "#ffff00",
                accent3: "#ffea00",
                accent4: "#ffd600"
            }),
            Bo = Object.freeze({
                base: "#ffc107",
                lighten5: "#fff8e1",
                lighten4: "#ffecb3",
                lighten3: "#ffe082",
                lighten2: "#ffd54f",
                lighten1: "#ffca28",
                darken1: "#ffb300",
                darken2: "#ffa000",
                darken3: "#ff8f00",
                darken4: "#ff6f00",
                accent1: "#ffe57f",
                accent2: "#ffd740",
                accent3: "#ffc400",
                accent4: "#ffab00"
            }),
            Ao = Object.freeze({
                base: "#ff9800",
                lighten5: "#fff3e0",
                lighten4: "#ffe0b2",
                lighten3: "#ffcc80",
                lighten2: "#ffb74d",
                lighten1: "#ffa726",
                darken1: "#fb8c00",
                darken2: "#f57c00",
                darken3: "#ef6c00",
                darken4: "#e65100",
                accent1: "#ffd180",
                accent2: "#ffab40",
                accent3: "#ff9100",
                accent4: "#ff6d00"
            }),
            Eo = Object.freeze({
                base: "#ff5722",
                lighten5: "#fbe9e7",
                lighten4: "#ffccbc",
                lighten3: "#ffab91",
                lighten2: "#ff8a65",
                lighten1: "#ff7043",
                darken1: "#f4511e",
                darken2: "#e64a19",
                darken3: "#d84315",
                darken4: "#bf360c",
                accent1: "#ff9e80",
                accent2: "#ff6e40",
                accent3: "#ff3d00",
                accent4: "#dd2c00"
            }),
            Mo = Object.freeze({
                base: "#795548",
                lighten5: "#efebe9",
                lighten4: "#d7ccc8",
                lighten3: "#bcaaa4",
                lighten2: "#a1887f",
                lighten1: "#8d6e63",
                darken1: "#6d4c41",
                darken2: "#5d4037",
                darken3: "#4e342e",
                darken4: "#3e2723"
            }),
            Do = Object.freeze({
                base: "#607d8b",
                lighten5: "#eceff1",
                lighten4: "#cfd8dc",
                lighten3: "#b0bec5",
                lighten2: "#90a4ae",
                lighten1: "#78909c",
                darken1: "#546e7a",
                darken2: "#455a64",
                darken3: "#37474f",
                darken4: "#263238"
            }),
            Vo = Object.freeze({
                base: "#9e9e9e",
                lighten5: "#fafafa",
                lighten4: "#f5f5f5",
                lighten3: "#eeeeee",
                lighten2: "#e0e0e0",
                lighten1: "#bdbdbd",
                darken1: "#757575",
                darken2: "#616161",
                darken3: "#424242",
                darken4: "#212121"
            }),
            Po = Object.freeze({
                black: "#000000",
                white: "#ffffff",
                transparent: "transparent"
            }),
            Lo = Object.freeze({
                red: go,
                pink: yo,
                purple: bo,
                deepPurple: So,
                indigo: xo,
                blue: wo,
                lightBlue: Co,
                cyan: ko,
                teal: $o,
                green: Io,
                lightGreen: Oo,
                lime: _o,
                yellow: To,
                amber: Bo,
                orange: Ao,
                deepOrange: Eo,
                brown: Mo,
                blueGrey: Do,
                grey: Vo,
                shades: Po
            });
        var Ho = ao("#FFFFFF").rgba,
            jo = ao("#000000").rgba,
            No = d(h).extend({
                name: "v-color-picker-swatches",
                props: {
                    swatches: {
                        type: Array,
                        default: function () {
                            return t = Lo, Object.keys(t).map(function (e) {
                                var i = t[e];
                                return i.base ? [i.base, i.darken4, i.darken3, i.darken2, i.darken1, i.lighten1, i.lighten2, i.lighten3, i.lighten4, i.lighten5] : [i.black, i.white, i.transparent]
                            });
                            var t
                        }
                    },
                    color: Object,
                    maxWidth: [Number, String],
                    maxHeight: [Number, String]
                },
                methods: {
                    genColor: function (t) {
                        var e = this,
                            i = this.$createElement("div", {
                                style: {
                                    background: t
                                }
                            }, [L(this.color, uo(t, null)) && this.$createElement(Lt, {
                                props: {
                                    small: !0,
                                    dark: to(this.color.rgba, Ho) > 2 && this.color.alpha > .5,
                                    light: to(this.color.rgba, jo) > 2 && this.color.alpha > .5
                                }
                            }, "$success")]);
                        return this.$createElement("div", {
                            staticClass: "v-color-picker__color",
                            on: {
                                click: function () {
                                    return e.$emit("update:color", ao("transparent" === t ? "#00000000" : t))
                                }
                            }
                        }, [i])
                    },
                    genSwatches: function () {
                        var t = this;
                        return this.swatches.map(function (e) {
                            var i = e.map(t.genColor);
                            return t.$createElement("div", {
                                staticClass: "v-color-picker__swatch"
                            }, i)
                        })
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-color-picker__swatches",
                        style: {
                            maxWidth: Y(this.maxWidth),
                            maxHeight: Y(this.maxHeight)
                        }
                    }, [this.$createElement("div", this.genSwatches())])
                }
            }),
            Fo = function () {
                return (Fo = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            zo = d(h).extend({
                name: "v-color-picker",
                props: {
                    canvasHeight: {
                        type: [String, Number],
                        default: 150
                    },
                    disabled: Boolean,
                    dotSize: {
                        type: [Number, String],
                        default: 10
                    },
                    flat: Boolean,
                    hideCanvas: Boolean,
                    hideInputs: Boolean,
                    hideModeSwitch: Boolean,
                    mode: {
                        type: String,
                        default: "rgba",
                        validator: function (t) {
                            return Object.keys(vo).includes(t)
                        }
                    },
                    showSwatches: Boolean,
                    swatches: Array,
                    swatchesMaxHeight: {
                        type: [Number, String],
                        default: 150
                    },
                    value: {
                        type: [Object, String]
                    },
                    width: {
                        type: [Number, String],
                        default: 300
                    }
                },
                data: function () {
                    return {
                        internalValue: ro({
                            r: 255,
                            g: 0,
                            b: 0,
                            a: 1
                        })
                    }
                },
                computed: {
                    hideAlpha: function () {
                        return this.value && !((t = this.value) && ("string" == typeof t ? t.length > 7 : "object" === eo(t) && lo(t, ["a"])));
                        var t
                    }
                },
                watch: {
                    value: {
                        handler: function (t) {
                            this.updateColor(uo(t, this.internalValue))
                        },
                        immediate: !0
                    }
                },
                methods: {
                    updateColor: function (t) {
                        this.internalValue = t;
                        var e = function (t, e) {
                            if (null == e) return t;
                            if ("string" == typeof e) return 7 === e.length ? t.hex : t.hexa;
                            if ("object" === eo(e)) {
                                if (lo(e, ["r", "g", "b"])) return t.rgba;
                                if (lo(e, ["h", "s", "l"])) return t.hsla;
                                if (lo(e, ["h", "s", "v"])) return t.hsva
                            }
                            return t
                        }(this.internalValue, this.value);
                        e !== this.value && (this.$emit("input", e), this.$emit("update:color", this.internalValue))
                    },
                    genCanvas: function () {
                        return this.$createElement(po, {
                            props: {
                                color: this.internalValue,
                                disabled: this.disabled,
                                dotSize: this.dotSize,
                                width: this.width,
                                height: this.canvasHeight
                            },
                            on: {
                                "update:color": this.updateColor
                            }
                        })
                    },
                    genControls: function () {
                        return this.$createElement("div", {
                            staticClass: "v-color-picker__controls"
                        }, [this.genPreview(), !this.hideInputs && this.genEdit()])
                    },
                    genEdit: function () {
                        var t = this;
                        return this.$createElement(mo, {
                            props: {
                                color: this.internalValue,
                                disabled: this.disabled,
                                hideAlpha: this.hideAlpha,
                                hideModeSwitch: this.hideModeSwitch,
                                mode: this.mode
                            },
                            on: {
                                "update:color": this.updateColor,
                                "update:mode": function (e) {
                                    return t.$emit("update:mode", e)
                                }
                            }
                        })
                    },
                    genPreview: function () {
                        return this.$createElement(ho, {
                            props: {
                                color: this.internalValue,
                                disabled: this.disabled,
                                hideAlpha: this.hideAlpha
                            },
                            on: {
                                "update:color": this.updateColor
                            }
                        })
                    },
                    genSwatches: function () {
                        return this.$createElement(No, {
                            props: {
                                dark: this.dark,
                                light: this.light,
                                swatches: this.swatches,
                                color: this.internalValue,
                                maxHeight: this.swatchesMaxHeight
                            },
                            on: {
                                "update:color": this.updateColor
                            }
                        })
                    }
                },
                render: function (t) {
                    return t(ut, {
                        staticClass: "v-color-picker",
                        class: Fo({
                            "v-color-picker--flat": this.flat
                        }, this.themeClasses),
                        props: {
                            maxWidth: this.width
                        }
                    }, [!this.hideCanvas && this.genCanvas(), this.genControls(), this.showSwatches && this.genSwatches()])
                }
            }),
            Wo = (i(59), Ot.extend({
                name: "v-content",
                props: {
                    tag: {
                        type: String,
                        default: "main"
                    }
                },
                computed: {
                    styles: function () {
                        var t = this.$vuetify.application,
                            e = t.bar;
                        return {
                            paddingTop: t.top + e + "px",
                            paddingRight: t.right + "px",
                            paddingBottom: t.footer + t.insetFooter + t.bottom + "px",
                            paddingLeft: t.left + "px"
                        }
                    }
                },
                render: function (t) {
                    var e = {
                        staticClass: "v-content",
                        style: this.styles,
                        ref: "content"
                    };
                    return t(this.tag, e, [t("div", {
                        staticClass: "v-content__wrap"
                    }, this.$slots.default)])
                }
            })),
            Ro = function () {
                return (Ro = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Yo = Ln.extend({
                name: "v-combobox",
                props: {
                    delimiters: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    returnObject: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function () {
                    return {
                        editingIndex: -1
                    }
                },
                computed: {
                    counterValue: function () {
                        return this.multiple ? this.selectedItems.length : (this.internalSearch || "").toString().length
                    },
                    hasSlot: function () {
                        return Dn.options.computed.hasSlot.call(this) || this.multiple
                    },
                    isAnyValueAllowed: function () {
                        return !0
                    },
                    menuCanShow: function () {
                        return !!this.isFocused && (this.hasDisplayedItems || !!this.$slots["no-data"] && !this.hideNoData)
                    }
                },
                methods: {
                    onInternalSearchChanged: function (t) {
                        if (t && this.multiple && this.delimiters.length) {
                            var e = this.delimiters.find(function (e) {
                                return t.endsWith(e)
                            });
                            null != e && (this.internalSearch = t.slice(0, t.length - e.length), this.updateTags())
                        }
                        this.updateMenuDimensions()
                    },
                    genInput: function () {
                        var t = Ln.options.methods.genInput.call(this);
                        return delete t.data.attrs.name, t.data.on.paste = this.onPaste, t
                    },
                    genChipSelection: function (t, e) {
                        var i = this,
                            n = Dn.options.methods.genChipSelection.call(this, t, e);
                        return this.multiple && (n.componentOptions.listeners = Ro({}, n.componentOptions.listeners, {
                            dblclick: function () {
                                i.editingIndex = e, i.internalSearch = i.getText(t), i.selectedIndex = -1
                            }
                        })), n
                    },
                    onChipInput: function (t) {
                        Dn.options.methods.onChipInput.call(this, t), this.editingIndex = -1
                    },
                    onEnterDown: function (t) {
                        var e = this;
                        t.preventDefault(), this.$nextTick(function () {
                            e.getMenuIndex() > -1 || e.updateSelf()
                        })
                    },
                    onFilteredItemsChanged: function (t, e) {
                        this.autoSelectFirst && Ln.options.methods.onFilteredItemsChanged.call(this, t, e)
                    },
                    onKeyDown: function (t) {
                        var e = t.keyCode;
                        Dn.options.methods.onKeyDown.call(this, t), this.multiple && e === U.left && 0 === this.$refs.input.selectionStart ? this.updateSelf() : e === U.enter && this.onEnterDown(t), this.changeSelectedIndex(e)
                    },
                    onTabDown: function (t) {
                        if (this.multiple && this.internalSearch && -1 === this.getMenuIndex()) return t.preventDefault(), t.stopPropagation(), this.updateTags();
                        Ln.options.methods.onTabDown.call(this, t)
                    },
                    selectItem: function (t) {
                        this.editingIndex > -1 ? this.updateEditing() : Ln.options.methods.selectItem.call(this, t)
                    },
                    setSelectedItems: function () {
                        null == this.internalValue || "" === this.internalValue ? this.selectedItems = [] : this.selectedItems = this.multiple ? this.internalValue : [this.internalValue]
                    },
                    setValue: function (t) {
                        Dn.options.methods.setValue.call(this, null != t ? t : this.internalSearch)
                    },
                    updateEditing: function () {
                        var t = this.internalValue.slice();
                        t[this.editingIndex] = this.internalSearch, this.setValue(t), this.editingIndex = -1
                    },
                    updateCombobox: function () {
                        var t = Boolean(this.$scopedSlots.selection) || this.hasChips;
                        t && !this.searchIsDirty || (this.internalSearch !== this.getText(this.internalValue) && this.setValue(), t && (this.internalSearch = void 0))
                    },
                    updateSelf: function () {
                        this.multiple ? this.updateTags() : this.updateCombobox()
                    },
                    updateTags: function () {
                        var t = this.getMenuIndex();
                        if (!(t < 0) || this.searchIsDirty) {
                            if (this.editingIndex > -1) return this.updateEditing();
                            var e = this.selectedItems.indexOf(this.internalSearch);
                            if (e > -1) {
                                var i = this.internalValue.slice();
                                i.splice(e, 1), this.setValue(i)
                            }
                            if (t > -1) return this.internalSearch = null;
                            this.selectItem(this.internalSearch), this.internalSearch = null
                        }
                    },
                    onPaste: function (t) {
                        if (this.multiple && !this.searchIsDirty) {
                            var e = t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");
                            e && -1 === this.findExistingIndex(e) && (t.preventDefault(), Dn.options.methods.selectItem.call(this, e))
                        }
                    }
                }
            }),
            Go = function () {
                return (Go = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Uo = a.a.extend({
                name: "v-data",
                inheritAttrs: !1,
                props: {
                    items: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    options: {
                        type: Object,
                        default: function () {
                            return {}
                        }
                    },
                    sortBy: {
                        type: [String, Array],
                        default: function () {
                            return []
                        }
                    },
                    sortDesc: {
                        type: [Boolean, Array],
                        default: function () {
                            return []
                        }
                    },
                    customSort: {
                        type: Function,
                        default: function (t, e, i, n, s) {
                            if (null === e || !e.length) return t;
                            var r = new Intl.Collator(n, {
                                sensitivity: "accent",
                                usage: "sort"
                            });
                            return t.sort(function (t, n) {
                                for (var o, a, l = 0; l < e.length; l++) {
                                    var u = e[l],
                                        c = H(t, u),
                                        h = H(n, u);
                                    if (i[l] && (c = (o = B([h, c], 2))[0], h = o[1]), s && s[u]) {
                                        var d = s[u](c, h);
                                        if (!d) continue;
                                        return d
                                    }
                                    if ((null !== c || null !== h) && (a = B([c, h].map(function (t) {
                                            return (t || "").toString().toLocaleLowerCase()
                                        }), 2), (c = a[0]) !== (h = a[1]))) return isNaN(c) || isNaN(h) ? r.compare(c, h) : Number(c) - Number(h)
                                }
                                return 0
                            })
                        }
                    },
                    mustSort: Boolean,
                    multiSort: Boolean,
                    page: {
                        type: Number,
                        default: 1
                    },
                    itemsPerPage: {
                        type: Number,
                        default: 10
                    },
                    groupBy: {
                        type: [String, Array],
                        default: function () {
                            return []
                        }
                    },
                    groupDesc: {
                        type: [Boolean, Array],
                        default: function () {
                            return []
                        }
                    },
                    locale: {
                        type: String,
                        default: "en-US"
                    },
                    disableSort: Boolean,
                    disablePagination: Boolean,
                    disableFiltering: Boolean,
                    search: String,
                    customFilter: {
                        type: Function,
                        default: function (t, e) {
                            return e ? "" === (e = e.toString().toLowerCase()).trim() ? t : t.filter(function (t) {
                                return Object.keys(t).some(function (i) {
                                    return Q(H(t, i), e)
                                })
                            }) : t
                        }
                    },
                    serverItemsLength: {
                        type: Number,
                        default: -1
                    }
                },
                data: function () {
                    var t = {
                        page: this.page,
                        itemsPerPage: this.itemsPerPage,
                        sortBy: J(this.sortBy),
                        sortDesc: J(this.sortDesc),
                        groupBy: J(this.groupBy),
                        groupDesc: J(this.groupDesc),
                        mustSort: this.mustSort,
                        multiSort: this.multiSort
                    };
                    return this.options && (t = Object.assign(t, this.options)), {
                        internalOptions: t
                    }
                },
                computed: {
                    itemsLength: function () {
                        return this.serverItemsLength >= 0 ? this.serverItemsLength : this.filteredItems.length
                    },
                    pageCount: function () {
                        return -1 === this.internalOptions.itemsPerPage ? 1 : Math.ceil(this.itemsLength / this.internalOptions.itemsPerPage)
                    },
                    pageStart: function () {
                        return -1 !== this.internalOptions.itemsPerPage && this.items.length ? (this.internalOptions.page - 1) * this.internalOptions.itemsPerPage : 0
                    },
                    pageStop: function () {
                        return -1 === this.internalOptions.itemsPerPage ? this.itemsLength : this.items.length ? Math.min(this.itemsLength, this.internalOptions.page * this.internalOptions.itemsPerPage) : 0
                    },
                    isGrouped: function () {
                        return !!this.internalOptions.groupBy.length
                    },
                    pagination: function () {
                        return {
                            page: this.internalOptions.page,
                            itemsPerPage: this.internalOptions.itemsPerPage,
                            pageStart: this.pageStart,
                            pageStop: this.pageStop,
                            pageCount: this.pageCount,
                            itemsLength: this.itemsLength
                        }
                    },
                    filteredItems: function () {
                        var t = this.items.slice();
                        return !this.disableFiltering && this.serverItemsLength <= 0 && (t = this.customFilter(t, this.search)), t
                    },
                    computedItems: function () {
                        var t = this.filteredItems.slice();
                        return !this.disableSort && this.serverItemsLength <= 0 && (t = this.sortItems(t)), !this.disablePagination && this.serverItemsLength <= 0 && (t = this.paginateItems(t)), t
                    },
                    groupedItems: function () {
                        return this.isGrouped ? (t = this.computedItems, e = this.internalOptions.groupBy[0], t.reduce(function (t, i) {
                            return (t[i[e]] = t[i[e]] || []).push(i), t
                        }, {})) : null;
                        var t, e
                    },
                    scopedProps: function () {
                        return {
                            sort: this.sort,
                            sortArray: this.sortArray,
                            group: this.group,
                            items: this.computedItems,
                            options: this.internalOptions,
                            updateOptions: this.updateOptions,
                            pagination: this.pagination,
                            groupedItems: this.groupedItems,
                            originalItemsLength: this.items.length
                        }
                    },
                    computedOptions: function () {
                        return Go({}, this.options)
                    }
                },
                watch: {
                    computedOptions: {
                        handler: function (t, e) {
                            L(t, e) || this.updateOptions(t)
                        },
                        deep: !0,
                        immediate: !0
                    },
                    internalOptions: {
                        handler: function (t, e) {
                            L(t, e) || (this.$emit("update:options", t), this.$emit("pagination", this.pagination))
                        },
                        deep: !0,
                        immediate: !0
                    },
                    page: function (t) {
                        this.updateOptions({
                            page: t
                        })
                    },
                    "internalOptions.page": function (t) {
                        this.$emit("update:page", t)
                    },
                    itemsPerPage: function (t) {
                        this.updateOptions({
                            itemsPerPage: t
                        })
                    },
                    "internalOptions.itemsPerPage": function (t) {
                        this.$emit("update:items-per-page", t)
                    },
                    sortBy: function (t) {
                        this.updateOptions({
                            sortBy: J(t)
                        })
                    },
                    "internalOptions.sortBy": function (t, e) {
                        !L(t, e) && this.$emit("update:sort-by", Array.isArray(this.sortBy) ? t : t[0])
                    },
                    sortDesc: function (t) {
                        this.updateOptions({
                            sortDesc: J(t)
                        })
                    },
                    "internalOptions.sortDesc": function (t, e) {
                        !L(t, e) && this.$emit("update:sort-desc", Array.isArray(this.sortDesc) ? t : t[0])
                    },
                    groupBy: function (t) {
                        this.updateOptions({
                            groupBy: J(t)
                        })
                    },
                    "internalOptions.groupBy": function (t, e) {
                        !L(t, e) && this.$emit("update:group-by", Array.isArray(this.groupBy) ? t : t[0])
                    },
                    groupDesc: function (t) {
                        this.updateOptions({
                            groupDesc: J(t)
                        })
                    },
                    "internalOptions.groupDesc": function (t, e) {
                        !L(t, e) && this.$emit("update:group-desc", Array.isArray(this.groupDesc) ? t : t[0])
                    },
                    multiSort: function (t) {
                        this.updateOptions({
                            multiSort: t
                        })
                    },
                    "internalOptions.multiSort": function (t) {
                        this.$emit("update:multi-sort", t)
                    },
                    mustSort: function (t) {
                        this.updateOptions({
                            mustSort: t
                        })
                    },
                    "internalOptions.mustSort": function (t) {
                        this.$emit("update:must-sort", t)
                    },
                    pageCount: {
                        handler: function (t) {
                            this.$emit("page-count", t)
                        },
                        immediate: !0
                    },
                    computedItems: {
                        handler: function (t) {
                            this.$emit("current-items", t)
                        },
                        immediate: !0
                    }
                },
                methods: {
                    toggle: function (t, e, i, n, s, r) {
                        var o = e.slice(),
                            a = i.slice(),
                            l = o.findIndex(function (e) {
                                return e === t
                            });
                        return l < 0 ? (r || (o = [], a = []), o.push(t), a.push(!1)) : l >= 0 && !a[l] ? a[l] = !0 : s ? a[l] = !1 : (o.splice(l, 1), a.splice(l, 1)), L(o, e) && L(a, i) || (n = 1), {
                            by: o,
                            desc: a,
                            page: n
                        }
                    },
                    group: function (t) {
                        var e = this.toggle(t, this.internalOptions.groupBy, this.internalOptions.groupDesc, this.internalOptions.page, !0, !1),
                            i = e.by,
                            n = e.desc,
                            s = e.page;
                        this.updateOptions({
                            groupBy: i,
                            groupDesc: n,
                            page: s
                        })
                    },
                    sort: function (t) {
                        if (Array.isArray(t)) return this.sortArray(t);
                        var e = this.toggle(t, this.internalOptions.sortBy, this.internalOptions.sortDesc, this.internalOptions.page, this.mustSort, this.multiSort),
                            i = e.by,
                            n = e.desc,
                            s = e.page;
                        this.updateOptions({
                            sortBy: i,
                            sortDesc: n,
                            page: s
                        })
                    },
                    sortArray: function (t) {
                        var e = this,
                            i = t.map(function (t) {
                                var i = e.internalOptions.sortBy.findIndex(function (e) {
                                    return e === t
                                });
                                return i > -1 && e.internalOptions.sortDesc[i]
                            });
                        this.updateOptions({
                            sortBy: t,
                            sortDesc: i
                        })
                    },
                    updateOptions: function (t) {
                        this.internalOptions = Go({}, this.internalOptions, t, {
                            page: this.serverItemsLength < 0 ? Math.max(1, Math.min(t.page || this.internalOptions.page, this.pageCount)) : t.page || this.internalOptions.page
                        })
                    },
                    sortItems: function (t) {
                        var e = this.internalOptions.groupBy.concat(this.internalOptions.sortBy),
                            i = this.internalOptions.groupDesc.concat(this.internalOptions.sortDesc);
                        return this.customSort(t, e, i, this.locale)
                    },
                    paginateItems: function (t) {
                        return -1 === this.serverItemsLength && t.length <= this.pageStart && (this.internalOptions.page = Math.max(1, this.internalOptions.page - 1)), t.slice(this.pageStart, this.pageStop)
                    }
                },
                render: function () {
                    return this.$scopedSlots.default && this.$scopedSlots.default(this.scopedProps)
                }
            });
        i(60);

        function qo(t) {
            return (qo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var Xo = a.a.extend({
                name: "v-data-footer",
                props: {
                    options: {
                        type: Object,
                        required: !0
                    },
                    pagination: {
                        type: Object,
                        required: !0
                    },
                    itemsPerPageOptions: {
                        type: Array,
                        default: function () {
                            return [5, 10, 15, -1]
                        }
                    },
                    prevIcon: {
                        type: String,
                        default: "$prev"
                    },
                    nextIcon: {
                        type: String,
                        default: "$next"
                    },
                    firstIcon: {
                        type: String,
                        default: "$first"
                    },
                    lastIcon: {
                        type: String,
                        default: "$last"
                    },
                    itemsPerPageText: {
                        type: String,
                        default: "$vuetify.dataFooter.itemsPerPageText"
                    },
                    itemsPerPageAllText: {
                        type: String,
                        default: "$vuetify.dataFooter.itemsPerPageAll"
                    },
                    showFirstLastPage: Boolean,
                    showCurrentPage: Boolean,
                    disablePagination: Boolean,
                    disableItemsPerPage: Boolean,
                    pageText: {
                        type: String,
                        default: "$vuetify.dataFooter.pageText"
                    }
                },
                computed: {
                    disableNextPageIcon: function () {
                        return this.options.itemsPerPage < 0 || this.options.page * this.options.itemsPerPage >= this.pagination.itemsLength || this.pagination.pageStop < 0
                    },
                    computedItemsPerPageOptions: function () {
                        var t = this;
                        return this.itemsPerPageOptions.map(function (e) {
                            return "object" === qo(e) ? e : t.genItemsPerPageOption(e)
                        })
                    }
                },
                methods: {
                    updateOptions: function (t) {
                        this.$emit("update:options", Object.assign({}, this.options, t))
                    },
                    onFirstPage: function () {
                        this.updateOptions({
                            page: 1
                        })
                    },
                    onPreviousPage: function () {
                        this.updateOptions({
                            page: this.options.page - 1
                        })
                    },
                    onNextPage: function () {
                        this.updateOptions({
                            page: this.options.page + 1
                        })
                    },
                    onLastPage: function () {
                        this.updateOptions({
                            page: this.pagination.pageCount
                        })
                    },
                    onChangeItemsPerPage: function (t) {
                        this.updateOptions({
                            itemsPerPage: t,
                            page: 1
                        })
                    },
                    genItemsPerPageOption: function (t) {
                        return {
                            text: -1 === t ? this.$vuetify.lang.t(this.itemsPerPageAllText) : String(t),
                            value: t
                        }
                    },
                    genItemsPerPageSelect: function () {
                        var t = this.options.itemsPerPage,
                            e = this.computedItemsPerPageOptions;
                        return e.length <= 1 ? null : (e.find(function (e) {
                            return e.value === t
                        }) || (t = e[0]), this.$createElement("div", {
                            staticClass: "v-data-footer__select"
                        }, [this.$vuetify.lang.t(this.itemsPerPageText), this.$createElement(Dn, {
                            attrs: {
                                "aria-label": this.itemsPerPageText
                            },
                            props: {
                                disabled: this.disableItemsPerPage,
                                items: e,
                                value: t,
                                hideDetails: !0,
                                auto: !0,
                                minWidth: "75px"
                            },
                            on: {
                                input: this.onChangeItemsPerPage
                            }
                        })]))
                    },
                    genPaginationInfo: function () {
                        var t = ["–"];
                        if (this.pagination.itemsLength) {
                            var e = this.pagination.itemsLength,
                                i = this.pagination.pageStart + 1,
                                n = e < this.pagination.pageStop || this.pagination.pageStop < 0 ? e : this.pagination.pageStop;
                            t = this.$scopedSlots["page-text"] ? [this.$scopedSlots["page-text"]({
                                pageStart: i,
                                pageStop: n,
                                itemsLength: e
                            })] : [this.$vuetify.lang.t(this.pageText, i, n, e)]
                        }
                        return this.$createElement("div", {
                            class: "v-data-footer__pagination"
                        }, t)
                    },
                    genIcon: function (t, e, i, n) {
                        return this.$createElement(ce, {
                            props: {
                                disabled: e || this.disablePagination,
                                icon: !0,
                                text: !0
                            },
                            on: {
                                click: t
                            },
                            attrs: {
                                "aria-label": i
                            }
                        }, [this.$createElement(Lt, n)])
                    },
                    genIcons: function () {
                        var t = [],
                            e = [];
                        return t.push(this.genIcon(this.onPreviousPage, 1 === this.options.page, this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"), this.$vuetify.rtl ? this.nextIcon : this.prevIcon)), e.push(this.genIcon(this.onNextPage, this.disableNextPageIcon, this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"), this.$vuetify.rtl ? this.prevIcon : this.nextIcon)), this.showFirstLastPage && (t.unshift(this.genIcon(this.onFirstPage, 1 === this.options.page, this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"), this.$vuetify.rtl ? this.lastIcon : this.firstIcon)), e.push(this.genIcon(this.onLastPage, this.options.page >= this.pagination.pageCount || -1 === this.options.itemsPerPage, this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"), this.$vuetify.rtl ? this.firstIcon : this.lastIcon))), [this.$createElement("div", {
                            staticClass: "v-data-footer__icons-before"
                        }, t), this.showCurrentPage && this.$createElement("span", [this.options.page.toString()]), this.$createElement("div", {
                            staticClass: "v-data-footer__icons-after"
                        }, e)]
                    }
                },
                render: function () {
                    return this.$createElement("div", {
                        staticClass: "v-data-footer"
                    }, [this.genItemsPerPageSelect(), this.genPaginationInfo(), this.genIcons()])
                }
            }),
            Zo = function () {
                return (Zo = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Ko = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            Jo = h.extend({
                name: "v-data-iterator",
                props: Zo({}, Uo.options.props, {
                    itemKey: {
                        type: String,
                        default: "id"
                    },
                    value: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    singleSelect: Boolean,
                    expanded: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    singleExpand: Boolean,
                    loading: [Boolean, String],
                    noResultsText: {
                        type: String,
                        default: "$vuetify.dataIterator.noResultsText"
                    },
                    noDataText: {
                        type: String,
                        default: "$vuetify.noDataText"
                    },
                    loadingText: {
                        type: String,
                        default: "$vuetify.dataIterator.loadingText"
                    },
                    hideDefaultFooter: Boolean,
                    footerProps: Object
                }),
                data: function () {
                    return {
                        selection: {},
                        expansion: {},
                        internalCurrentItems: []
                    }
                },
                computed: {
                    everyItem: function () {
                        var t = this;
                        return !!this.internalCurrentItems.length && this.internalCurrentItems.every(function (e) {
                            return t.isSelected(e)
                        })
                    },
                    someItems: function () {
                        var t = this;
                        return this.internalCurrentItems.some(function (e) {
                            return t.isSelected(e)
                        })
                    },
                    sanitizedFooterProps: function () {
                        return ot(this.footerProps)
                    }
                },
                watch: {
                    value: {
                        handler: function (t) {
                            var e = this;
                            this.selection = t.reduce(function (t, i) {
                                return t[H(i, e.itemKey)] = i, t
                            }, {})
                        },
                        immediate: !0
                    },
                    selection: function (t, e) {
                        L(Object.keys(t), Object.keys(e)) || this.$emit("input", Object.values(t))
                    },
                    expanded: {
                        handler: function (t) {
                            var e = this;
                            this.expansion = t.reduce(function (t, i) {
                                return t[H(i, e.itemKey)] = !0, t
                            }, {})
                        },
                        immediate: !0
                    },
                    expansion: function (t, e) {
                        var i = this;
                        if (!L(t, e)) {
                            var n = Object.keys(t).filter(function (e) {
                                    return t[e]
                                }),
                                s = n.length ? this.items.filter(function (t) {
                                    return n.includes(String(H(t, i.itemKey)))
                                }) : [];
                            this.$emit("update:expanded", s)
                        }
                    }
                },
                created: function () {
                    var t = this;
                    [
                        ["disable-initial-sort", "sort-by"],
                        ["filter", "custom-filter"],
                        ["pagination", "options"],
                        ["total-items", "server-items-length"],
                        ["hide-actions", "hide-default-footer"],
                        ["rows-per-page-items", "footer-props.items-per-page-options"],
                        ["rows-per-page-text", "footer-props.items-per-page-text"],
                        ["prev-icon", "footer-props.prev-icon"],
                        ["next-icon", "footer-props.next-icon"]
                    ].forEach(function (e) {
                        var i = Ko(e, 2),
                            n = i[0],
                            s = i[1];
                        t.$attrs.hasOwnProperty(n) && S(n, s, t)
                    });
                    ["expand", "content-class", "content-props", "content-tag"].forEach(function (e) {
                        t.$attrs.hasOwnProperty(e) && x(e)
                    })
                },
                methods: {
                    toggleSelectAll: function (t) {
                        var e = this,
                            i = Object.assign({}, this.selection);
                        this.internalCurrentItems.forEach(function (n) {
                            var s = H(n, e.itemKey);
                            t ? i[s] = n : delete i[s]
                        }), this.selection = i, this.$emit("toggle-select-all", {
                            value: t
                        })
                    },
                    isSelected: function (t) {
                        return !!this.selection[H(t, this.itemKey)] || !1
                    },
                    select: function (t, e, i) {
                        void 0 === e && (e = !0), void 0 === i && (i = !0);
                        var n = this.singleSelect ? {} : Object.assign({}, this.selection),
                            s = H(t, this.itemKey);
                        if (e ? n[s] = t : delete n[s], this.singleSelect && i) {
                            var r = Object.keys(this.selection),
                                o = r.length && H(this.selection[r[0]], this.itemKey);
                            o && o !== s && this.$emit("item-selected", {
                                item: this.selection[o],
                                value: !1
                            })
                        }
                        this.selection = n, i && this.$emit("item-selected", {
                            item: t,
                            value: e
                        })
                    },
                    isExpanded: function (t) {
                        return this.expansion[H(t, this.itemKey)] || !1
                    },
                    expand: function (t, e) {
                        void 0 === e && (e = !0);
                        var i = this.singleExpand ? {} : Object.assign({}, this.expansion),
                            n = H(t, this.itemKey);
                        e ? i[n] = !0 : delete i[n], this.expansion = i, this.$emit("item-expanded", {
                            item: t,
                            value: e
                        })
                    },
                    createItemProps: function (t) {
                        var e = this;
                        return {
                            item: t,
                            select: function (i) {
                                return e.select(t, i)
                            },
                            isSelected: this.isSelected(t),
                            expand: function (i) {
                                return e.expand(t, i)
                            },
                            isExpanded: this.isExpanded(t)
                        }
                    },
                    genEmptyWrapper: function (t) {
                        return this.$createElement("div", t)
                    },
                    genEmpty: function (t, e) {
                        if (0 === t && this.loading) {
                            var i = this.$slots.loading || this.$vuetify.lang.t(this.loadingText);
                            return this.genEmptyWrapper(i)
                        }
                        if (0 === t) {
                            var n = this.$slots["no-data"] || this.$vuetify.lang.t(this.noDataText);
                            return this.genEmptyWrapper(n)
                        }
                        if (0 === e) {
                            var s = this.$slots["no-results"] || this.$vuetify.lang.t(this.noResultsText);
                            return this.genEmptyWrapper(s)
                        }
                        return null
                    },
                    genItems: function (t) {
                        var e = this,
                            i = this.genEmpty(t.originalItemsLength, t.pagination.itemsLength);
                        return i ? [i] : this.$scopedSlots.default ? this.$scopedSlots.default(Zo({}, t, {
                            isSelected: this.isSelected,
                            select: this.select,
                            isExpanded: this.isExpanded,
                            expand: this.expand
                        })) : this.$scopedSlots.item ? t.items.map(function (t) {
                            return e.$scopedSlots.item(e.createItemProps(t))
                        }) : []
                    },
                    genFooter: function (t) {
                        if (this.hideDefaultFooter) return null;
                        var e = {
                                props: Zo({}, this.sanitizedFooterProps, {
                                    options: t.options,
                                    pagination: t.pagination
                                }),
                                on: {
                                    "update:options": function (e) {
                                        return t.updateOptions(e)
                                    }
                                }
                            },
                            i = et("footer.", this.$scopedSlots);
                        return this.$createElement(Xo, Zo({
                            scopedSlots: i
                        }, e))
                    },
                    genDefaultScopedSlot: function (t) {
                        var e = Zo({}, t, {
                            someItems: this.someItems,
                            everyItem: this.everyItem,
                            toggleSelectAll: this.toggleSelectAll
                        });
                        return this.$createElement("div", {
                            staticClass: "v-data-iterator"
                        }, [it(this, "header", e, !0), this.genItems(t), this.genFooter(t), it(this, "footer", e, !0)])
                    }
                },
                render: function () {
                    var t = this;
                    return this.$createElement(Uo, {
                        props: this.$props,
                        on: {
                            "update:options": function (e, i) {
                                return !L(e, i) && t.$emit("update:options", e)
                            },
                            "update:page": function (e) {
                                return t.$emit("update:page", e)
                            },
                            "update:items-per-page": function (e) {
                                return t.$emit("update:items-per-page", e)
                            },
                            "update:sort-by": function (e) {
                                return t.$emit("update:sort-by", e)
                            },
                            "update:sort-desc": function (e) {
                                return t.$emit("update:sort-desc", e)
                            },
                            "update:group-by": function (e) {
                                return t.$emit("update:group-by", e)
                            },
                            "update:group-desc": function (e) {
                                return t.$emit("update:group-desc", e)
                            },
                            pagination: function (e, i) {
                                return !L(e, i) && t.$emit("pagination", e)
                            },
                            "current-items": function (e) {
                                t.internalCurrentItems = e, t.$emit("current-items", e)
                            }
                        },
                        scopedSlots: {
                            default: this.genDefaultScopedSlot
                        }
                    })
                }
            });
        i(61), i(62);
        var Qo = function () {
                return (Qo = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            ta = d().extend({
                directives: {
                    ripple: ee
                },
                props: {
                    headers: {
                        type: Array,
                        required: !0
                    },
                    options: {
                        type: Object,
                        default: function () {
                            return {
                                page: 1,
                                itemsPerPage: 10,
                                sortBy: [],
                                sortDesc: [],
                                groupBy: [],
                                groupDesc: [],
                                multiSort: !1,
                                mustSort: !1
                            }
                        }
                    },
                    sortIcon: {
                        type: String,
                        default: "$sort"
                    },
                    everyItem: Boolean,
                    someItems: Boolean,
                    showGroupBy: Boolean,
                    singleSelect: Boolean,
                    disableSort: Boolean
                },
                methods: {
                    genSelectAll: function () {
                        var t = this,
                            e = {
                                props: {
                                    value: this.everyItem,
                                    indeterminate: !this.everyItem && this.someItems
                                },
                                on: {
                                    input: function (e) {
                                        return t.$emit("toggle-select-all", e)
                                    }
                                }
                            };
                        return this.$scopedSlots["data-table-select"] ? this.$scopedSlots["data-table-select"](e) : this.$createElement(Ci, Qo({
                            staticClass: "v-data-table__checkbox"
                        }, e))
                    },
                    genSortIcon: function () {
                        return this.$createElement(Lt, {
                            staticClass: "v-data-table-header__icon",
                            props: {
                                size: 18
                            }
                        }, [this.sortIcon])
                    }
                }
            }),
            ea = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            ia = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(ea(arguments[e]));
                return t
            },
            na = d(ta).extend({
                name: "v-data-table-header-mobile",
                props: {
                    sortByText: {
                        type: String,
                        default: "$vuetify.dataTable.sortBy"
                    }
                },
                methods: {
                    genSortChip: function (t) {
                        var e = this,
                            i = [t.item.text],
                            n = this.options.sortBy.findIndex(function (e) {
                                return e === t.item.value
                            }),
                            s = n >= 0,
                            r = this.options.sortDesc[n];
                        return i.push(this.$createElement("div", {
                            staticClass: "v-chip__close",
                            class: {
                                sortable: !0, active: s, asc: s && !r, desc: s && r
                            }
                        }, [this.genSortIcon()])), this.$createElement(Xe, {
                            staticClass: "sortable",
                            nativeOn: {
                                click: function (i) {
                                    i.stopPropagation(), e.$emit("sort", t.item.value)
                                }
                            }
                        }, i)
                    },
                    genSortSelect: function () {
                        var t = this,
                            e = this.headers.filter(function (t) {
                                return !1 !== t.sortable && "data-table-select" !== t.value
                            });
                        return this.$createElement(Dn, {
                            props: {
                                label: this.$vuetify.lang.t(this.sortByText),
                                items: e,
                                hideDetails: !0,
                                multiple: this.options.multiSort,
                                value: this.options.multiSort ? this.options.sortBy : this.options.sortBy[0],
                                disabled: 0 === e.length || this.disableSort
                            },
                            on: {
                                change: function (e) {
                                    return t.$emit("sort", e)
                                }
                            },
                            scopedSlots: {
                                selection: function (e) {
                                    return t.genSortChip(e)
                                }
                            }
                        })
                    }
                },
                render: function (t) {
                    var e = [],
                        i = this.headers.find(function (t) {
                            return "data-table-select" === t.value
                        });
                    i && !this.singleSelect && e.push(this.$createElement("div", {
                        class: ia(["v-data-table-header-mobile__select"], J(i.class)),
                        attrs: {
                            width: i.width
                        }
                    }, [this.genSelectAll()])), e.push(this.genSortSelect());
                    var n = t("th", [t("div", {
                            staticClass: "v-data-table-header-mobile__wrapper"
                        }, e)]),
                        s = t("tr", [n]);
                    return t("thead", {
                        staticClass: "v-data-table-header v-data-table-header-mobile"
                    }, [s])
                }
            }),
            sa = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            ra = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(sa(arguments[e]));
                return t
            },
            oa = d(ta).extend({
                name: "v-data-table-header-desktop",
                methods: {
                    genGroupByToggle: function (t) {
                        var e = this;
                        return this.$createElement("span", {
                            on: {
                                click: function () {
                                    return e.$emit("group", t.value)
                                }
                            }
                        }, ["group"])
                    },
                    genHeader: function (t) {
                        var e = this,
                            i = {},
                            n = [],
                            s = {
                                role: "columnheader",
                                scope: "col",
                                "aria-label": t.text || "",
                                "aria-sort": "none"
                            },
                            r = {
                                width: Y(t.width),
                                minWidth: Y(t.width)
                            },
                            o = ra(["text-" + (t.align || "start")], J(t.class), [t.divider && "v-data-table__divider"]);
                        if ("data-table-select" !== t.value || this.singleSelect) {
                            if (n.push(this.$scopedSlots[t.value] ? this.$scopedSlots[t.value]({
                                    header: t
                                }) : this.$createElement("span", [t.text])), !this.disableSort && (t.sortable || !t.hasOwnProperty("sortable"))) {
                                i.click = function () {
                                    return e.$emit("sort", t.value)
                                };
                                var a = this.options.sortBy.findIndex(function (e) {
                                        return e === t.value
                                    }),
                                    l = a >= 0,
                                    u = this.options.sortDesc[a];
                                o.push("sortable"), l ? (o.push("active"), o.push(u ? "desc" : "asc"), s["aria-sort"] = u ? "descending" : "ascending", s["aria-label"] += u ? this.$vuetify.lang.t("$vuetify.dataTable.ariaLabel.sortDescending") : this.$vuetify.lang.t("$vuetify.dataTable.ariaLabel.sortAscending")) : s["aria-label"] += this.$vuetify.lang.t("$vuetify.dataTable.ariaLabel.sortNone"), "end" === t.align ? n.unshift(this.genSortIcon()) : n.push(this.genSortIcon()), this.options.multiSort && l && n.push(this.$createElement("span", {
                                    class: "v-data-table-header__sort-badge"
                                }, [String(a + 1)]))
                            }
                            this.showGroupBy && n.push(this.genGroupByToggle(t))
                        } else n.push(this.genSelectAll());
                        return this.$createElement("th", {
                            attrs: s,
                            class: o,
                            style: r,
                            on: i
                        }, n)
                    }
                },
                render: function () {
                    var t = this;
                    return this.$createElement("thead", {
                        staticClass: "v-data-table-header"
                    }, [this.$createElement("tr", this.headers.map(function (e) {
                        return t.genHeader(e)
                    }))])
                }
            }),
            aa = a.a.extend({
                name: "v-data-table-header",
                functional: !0,
                props: {
                    mobile: Boolean
                },
                render: function (t, e) {
                    var i = e.props,
                        n = e.data,
                        s = e.slots;
                    ! function (t) {
                        if (t.model && t.on && t.on.input)
                            if (Array.isArray(t.on.input)) {
                                var e = t.on.input.indexOf(t.model.callback);
                                e > -1 && t.on.input.splice(e, 1)
                            } else delete t.on.input
                    }(n);
                    var r = function (t, e) {
                        var i = [];
                        for (var n in t) t.hasOwnProperty(n) && i.push(e("template", {
                            slot: n
                        }, t[n]));
                        return i
                    }(s(), t);
                    return i.mobile ? t(na, n, r) : t(oa, n, r)
                }
            }),
            la = a.a.extend({
                name: "row",
                functional: !0,
                props: {
                    headers: Array,
                    item: Object,
                    rtl: Boolean
                },
                render: function (t, e) {
                    var i = e.props,
                        n = e.slots,
                        s = e.data,
                        r = n(),
                        o = i.headers.map(function (e) {
                            var n, o = [],
                                a = H(i.item, e.value),
                                l = e.value,
                                u = s.scopedSlots && s.scopedSlots[l],
                                c = r[l];
                            u ? o.push(u({
                                item: i.item,
                                header: e,
                                value: a
                            })) : c ? o.push(c) : o.push(null == a ? a : String(a));
                            var h = "text-" + (e.align || "start");
                            return t("td", {
                                class: (n = {}, n[h] = !0, n["v-data-table__divider"] = e.divider, n)
                            }, o)
                        });
                    return t("tr", s, o)
                }
            }),
            ua = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            ca = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(ua(arguments[e]));
                return t
            },
            ha = a.a.extend({
                name: "row-group",
                functional: !0,
                props: {
                    value: {
                        type: Boolean,
                        default: !0
                    },
                    headerClass: {
                        type: String,
                        default: "v-row-group__header"
                    },
                    contentClass: String,
                    summaryClass: {
                        type: String,
                        default: "v-row-group__summary"
                    }
                },
                render: function (t, e) {
                    var i = e.slots,
                        n = e.props,
                        s = i(),
                        r = [];
                    return s["column.header"] ? r.push(t("tr", {
                        staticClass: n.headerClass
                    }, s["column.header"])) : s["row.header"] && r.push.apply(r, ca(s["row.header"])), s["row.content"] && n.value && r.push.apply(r, ca(s["row.content"])), s["column.summary"] ? r.push(t("tr", {
                        staticClass: n.summaryClass
                    }, s["column.summary"])) : s["row.summary"] && r.push.apply(r, ca(s["row.summary"])), r
                }
            }),
            da = (i(63), function () {
                return (da = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            pa = d(h).extend({
                name: "v-simple-table",
                props: {
                    dense: Boolean,
                    fixedHeader: Boolean,
                    height: [Number, String]
                },
                computed: {
                    classes: function () {
                        return da({
                            "v-data-table--dense": this.dense,
                            "v-data-table--fixed-height": !!this.height && !this.fixedHeader,
                            "v-data-table--fixed-header": this.fixedHeader
                        }, this.themeClasses)
                    }
                },
                methods: {
                    genWrapper: function () {
                        return this.$slots.wrapper || this.$createElement("div", {
                            staticClass: "v-data-table__wrapper",
                            style: {
                                height: Y(this.height)
                            }
                        }, [this.$createElement("table", this.$slots.default)])
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-data-table",
                        class: this.classes
                    }, [this.$slots.top, this.genWrapper(), this.$slots.bottom])
                }
            }),
            fa = function () {
                return (fa = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            va = a.a.extend({
                name: "row",
                functional: !0,
                props: {
                    headers: Array,
                    item: Object,
                    rtl: Boolean
                },
                render: function (t, e) {
                    var i = e.props,
                        n = e.slots,
                        s = e.data,
                        r = n(),
                        o = i.headers.map(function (e) {
                            var n = [],
                                o = H(i.item, e.value),
                                a = e.value,
                                l = s.scopedSlots && s.scopedSlots[a],
                                u = r[a];
                            l ? n.push(l({
                                item: i.item,
                                header: e,
                                value: o
                            })) : u ? n.push(u) : n.push(null == o ? o : String(o));
                            var c = [t("div", {
                                staticClass: "v-data-table__mobile-row__cell"
                            }, n)];
                            return "dataTableSelect" !== e.value && c.unshift(t("div", {
                                staticClass: "v-data-table__mobile-row__header"
                            }, [e.text])), t("td", {
                                class: {
                                    "v-data-table__mobile-row": !0
                                }
                            }, c)
                        });
                    return t("tr", fa({}, s, {
                        staticClass: "v-data-table__mobile-table-row"
                    }), o)
                }
            });

        function ma(t) {
            return (ma = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var ga = function () {
                return (ga = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            ya = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            };

        function ba(t, e, i) {
            return function (n) {
                var s = H(t, n.value);
                return n.filter ? n.filter(s, e, t) : i(s, e, t)
            }
        }
        var Sa = Jo.extend({
                name: "v-data-table",
                directives: {
                    ripple: ee
                },
                props: {
                    headers: {
                        type: Array
                    },
                    showSelect: Boolean,
                    showExpand: Boolean,
                    showGroupBy: Boolean,
                    mobileBreakpoint: {
                        type: Number,
                        default: 600
                    },
                    height: [Number, String],
                    hideDefaultHeader: Boolean,
                    caption: String,
                    dense: Boolean,
                    headerProps: Object,
                    calculateWidths: Boolean,
                    fixedHeader: Boolean,
                    headersLength: Number,
                    expandIcon: {
                        type: String,
                        default: "$expand"
                    },
                    customFilter: {
                        type: Function,
                        default: Q
                    }
                },
                data: function () {
                    return {
                        internalGroupBy: [],
                        openCache: {},
                        widths: []
                    }
                },
                computed: {
                    computedHeaders: function () {
                        var t = this;
                        if (!this.headers) return [];
                        var e, i = this.headers.filter(function (e) {
                                return void 0 === e.value || !t.internalGroupBy.find(function (t) {
                                    return t === e.value
                                })
                            }),
                            n = {
                                text: "",
                                sortable: !1,
                                width: "1px"
                            };
                        this.showSelect && ((e = i.findIndex(function (t) {
                            return "data-table-select" === t.value
                        })) < 0 ? i.unshift(ga({}, n, {
                            value: "data-table-select"
                        })) : i.splice(e, 1, ga({}, n, i[e])));
                        this.showExpand && ((e = i.findIndex(function (t) {
                            return "data-table-expand" === t.value
                        })) < 0 ? i.unshift(ga({}, n, {
                            value: "data-table-expand"
                        })) : i.splice(e, 1, ga({}, n, i[e])));
                        return i
                    },
                    colspanAttrs: function () {
                        return this.isMobile ? void 0 : {
                            colspan: this.headersLength || this.computedHeaders.length
                        }
                    },
                    isMobile: function () {
                        return 0 !== this.$vuetify.breakpoint.width && this.$vuetify.breakpoint.width < this.mobileBreakpoint
                    },
                    columnSorters: function () {
                        return this.computedHeaders.reduce(function (t, e) {
                            return e.sort && (t[e.value] = e.sort), t
                        }, {})
                    },
                    headersWithCustomFilters: function () {
                        return this.computedHeaders.filter(function (t) {
                            return t.filter && (!t.hasOwnProperty("filterable") || !0 === t.filterable)
                        })
                    },
                    headersWithoutCustomFilters: function () {
                        return this.computedHeaders.filter(function (t) {
                            return !(t.filter || t.hasOwnProperty("filterable") && !0 !== t.filterable)
                        })
                    },
                    sanitizedHeaderProps: function () {
                        return ot(this.headerProps)
                    },
                    computedItemsPerPage: function () {
                        var t = this.options && this.options.itemsPerPage ? this.options.itemsPerPage : this.itemsPerPage,
                            e = this.sanitizedFooterProps.itemsPerPageOptions;
                        if (e && !e.find(function (e) {
                                return "number" == typeof e ? e === t : e.value === t
                            })) {
                            var i = e[0];
                            return "object" === ma(i) ? i.value : i
                        }
                        return t
                    }
                },
                created: function () {
                    var t = this;
                    [
                        ["sort-icon", "header-props.sort-icon"],
                        ["hide-headers", "hide-default-header"],
                        ["select-all", "show-select"]
                    ].forEach(function (e) {
                        var i = ya(e, 2),
                            n = i[0],
                            s = i[1];
                        t.$attrs.hasOwnProperty(n) && S(n, s, t)
                    })
                },
                mounted: function () {
                    this.calculateWidths && (window.addEventListener("resize", this.calcWidths), this.calcWidths())
                },
                beforeDestroy: function () {
                    this.calculateWidths && window.removeEventListener("resize", this.calcWidths)
                },
                methods: {
                    calcWidths: function () {
                        this.widths = Array.from(this.$el.querySelectorAll("th")).map(function (t) {
                            return t.clientWidth
                        })
                    },
                    customFilterWithColumns: function (t, e) {
                        return function (t, e, i, n, s) {
                            var r = t;
                            return (e = "string" == typeof e ? e.trim() : null) && n.length && (r = t.filter(function (t) {
                                return n.some(ba(t, e, s))
                            })), i.length && (r = r.filter(function (t) {
                                return i.every(ba(t, e, Q))
                            })), r
                        }(t, e, this.headersWithCustomFilters, this.headersWithoutCustomFilters, this.customFilter)
                    },
                    customSortWithHeaders: function (t, e, i, n) {
                        return this.customSort(t, e, i, n, this.columnSorters)
                    },
                    createItemProps: function (t) {
                        var e = Jo.options.methods.createItemProps.call(this, t);
                        return Object.assign(e, {
                            headers: this.computedHeaders
                        })
                    },
                    genCaption: function (t) {
                        return this.caption ? [this.$createElement("caption", [this.caption])] : it(this, "caption", t, !0)
                    },
                    genColgroup: function (t) {
                        var e = this;
                        return this.$createElement("colgroup", this.computedHeaders.map(function (t) {
                            return e.$createElement("col", {
                                class: {
                                    divider: t.divider
                                }
                            })
                        }))
                    },
                    genLoading: function () {
                        var t = this.$slots.progress ? this.$slots.progress : this.$createElement(Cn, {
                                props: {
                                    color: !0 === this.loading ? "primary" : this.loading,
                                    height: 2,
                                    indeterminate: !0
                                }
                            }),
                            e = this.$createElement("th", {
                                staticClass: "column",
                                attrs: this.colspanAttrs
                            }, [t]),
                            i = this.$createElement("tr", {
                                staticClass: "v-data-table__progress"
                            }, [e]);
                        return this.$createElement("thead", [i])
                    },
                    genHeaders: function (t) {
                        var e = {
                                props: ga({}, this.sanitizedHeaderProps, {
                                    headers: this.computedHeaders,
                                    options: t.options,
                                    mobile: this.isMobile,
                                    showGroupBy: this.showGroupBy,
                                    someItems: this.someItems,
                                    everyItem: this.everyItem,
                                    singleSelect: this.singleSelect,
                                    disableSort: this.disableSort
                                }),
                                on: {
                                    sort: t.sort,
                                    group: t.group,
                                    "toggle-select-all": this.toggleSelectAll
                                }
                            },
                            i = [it(this, "header", e)];
                        if (!this.hideDefaultHeader) {
                            var n = et("header.", this.$scopedSlots);
                            i.push(this.$createElement(aa, ga({}, e, {
                                scopedSlots: n
                            })))
                        }
                        return this.loading && i.push(this.genLoading()), i
                    },
                    genEmptyWrapper: function (t) {
                        return this.$createElement("tr", {
                            staticClass: "v-data-table__empty-wrapper"
                        }, [this.$createElement("td", {
                            attrs: this.colspanAttrs
                        }, t)])
                    },
                    genItems: function (t, e) {
                        var i = this.genEmpty(e.originalItemsLength, e.pagination.itemsLength);
                        return i ? [i] : e.groupedItems ? this.genGroupedRows(e.groupedItems, e) : this.genRows(t, e)
                    },
                    genGroupedRows: function (t, e) {
                        var i = this;
                        return Object.keys(t || {}).map(function (n) {
                            return i.openCache.hasOwnProperty(n) || i.$set(i.openCache, n, !0), i.$scopedSlots.group ? i.$scopedSlots.group({
                                group: n,
                                options: e.options,
                                items: t[n],
                                headers: i.computedHeaders
                            }) : i.genDefaultGroupedRow(n, t[n], e)
                        })
                    },
                    genDefaultGroupedRow: function (t, e, i) {
                        var n = this,
                            s = !!this.openCache[t],
                            r = [this.$createElement("template", {
                                slot: "row.content"
                            }, this.genDefaultRows(e, i))],
                            o = function () {
                                return n.$set(n.openCache, t, !n.openCache[t])
                            },
                            a = function () {
                                return i.updateOptions({
                                    groupBy: [],
                                    groupDesc: []
                                })
                            };
                        if (this.$scopedSlots["group.header"]) r.unshift(this.$createElement("template", {
                            slot: "column.header"
                        }, [this.$scopedSlots["group.header"]({
                            group: t,
                            groupBy: i.options.groupBy,
                            items: e,
                            headers: this.computedHeaders,
                            toggle: o,
                            remove: a
                        })]));
                        else {
                            var l = this.$createElement(ce, {
                                    staticClass: "ma-0",
                                    props: {
                                        icon: !0,
                                        small: !0
                                    },
                                    on: {
                                        click: o
                                    }
                                }, [this.$createElement(Lt, [s ? "$minus" : "$plus"])]),
                                u = this.$createElement(ce, {
                                    staticClass: "ma-0",
                                    props: {
                                        icon: !0,
                                        small: !0
                                    },
                                    on: {
                                        click: a
                                    }
                                }, [this.$createElement(Lt, ["$close"])]),
                                c = this.$createElement("td", {
                                    staticClass: "text-start",
                                    attrs: this.colspanAttrs
                                }, [l, i.options.groupBy[0] + ": " + t, u]);
                            r.unshift(this.$createElement("template", {
                                slot: "column.header"
                            }, [c]))
                        }
                        return this.$scopedSlots["group.summary"] && r.push(this.$createElement("template", {
                            slot: "column.summary"
                        }, [this.$scopedSlots["group.summary"]({
                            group: t,
                            groupBy: i.options.groupBy,
                            items: e,
                            headers: this.computedHeaders
                        })])), this.$createElement(ha, {
                            key: t,
                            props: {
                                value: s
                            }
                        }, r)
                    },
                    genRows: function (t, e) {
                        return this.$scopedSlots.item ? this.genScopedRows(t, e) : this.genDefaultRows(t, e)
                    },
                    genScopedRows: function (t, e) {
                        for (var i = [], n = 0; n < t.length; n++) {
                            var s = t[n];
                            i.push(this.$scopedSlots.item(ga({}, this.createItemProps(s), {
                                index: n
                            }))), this.isExpanded(s) && i.push(this.$scopedSlots["expanded-item"]({
                                item: s,
                                headers: this.computedHeaders
                            }))
                        }
                        return i
                    },
                    genDefaultRows: function (t, e) {
                        var i = this;
                        return this.$scopedSlots["expanded-item"] ? t.map(function (t) {
                            return i.genDefaultExpandedRow(t)
                        }) : t.map(function (t) {
                            return i.genDefaultSimpleRow(t)
                        })
                    },
                    genDefaultExpandedRow: function (t) {
                        var e = this.isExpanded(t),
                            i = {
                                "v-data-table__expanded v-data-table__expanded__row": e
                            },
                            n = this.genDefaultSimpleRow(t, i),
                            s = this.$createElement("tr", {
                                staticClass: "v-data-table__expanded v-data-table__expanded__content"
                            }, [this.$scopedSlots["expanded-item"]({
                                item: t,
                                headers: this.computedHeaders
                            })]);
                        return this.$createElement(ha, {
                            props: {
                                value: e
                            }
                        }, [this.$createElement("template", {
                            slot: "row.header"
                        }, [n]), this.$createElement("template", {
                            slot: "row.content"
                        }, [s])])
                    },
                    genDefaultSimpleRow: function (t, e) {
                        var i = this;
                        void 0 === e && (e = {});
                        var n = et("item.", this.$scopedSlots),
                            s = this.createItemProps(t);
                        if (this.showSelect) {
                            var r = n["data-table-select"];
                            n["data-table-select"] = r ? function () {
                                return r(s)
                            } : function () {
                                return i.$createElement(Ci, {
                                    staticClass: "v-data-table__checkbox",
                                    props: {
                                        value: s.isSelected
                                    },
                                    on: {
                                        input: function (t) {
                                            return s.select(t)
                                        }
                                    }
                                })
                            }
                        }
                        if (this.showExpand) {
                            var o = n["data-table-expand"];
                            n["data-table-expand"] = o ? function () {
                                return o(s)
                            } : function () {
                                return i.$createElement(Lt, {
                                    staticClass: "v-data-table__expand-icon",
                                    class: {
                                        "v-data-table__expand-icon--active": s.isExpanded
                                    },
                                    on: {
                                        click: function (t) {
                                            t.stopPropagation(), s.expand(!s.isExpanded)
                                        }
                                    }
                                }, [i.expandIcon])
                            }
                        }
                        return this.$createElement(this.isMobile ? va : la, {
                            key: H(t, this.itemKey),
                            class: ga({}, e, {
                                "v-data-table__selected": s.isSelected
                            }),
                            props: {
                                headers: this.computedHeaders,
                                item: t,
                                rtl: this.$vuetify.rtl
                            },
                            scopedSlots: n,
                            on: {
                                click: function () {
                                    return i.$emit("click:row", t)
                                }
                            }
                        })
                    },
                    genBody: function (t) {
                        var e = ga({}, t, {
                            isMobile: this.isMobile,
                            headers: this.computedHeaders
                        });
                        return this.$scopedSlots.body ? this.$scopedSlots.body(e) : this.$createElement("tbody", [it(this, "body.prepend", e, !0), this.genItems(t.items, t), it(this, "body.append", e, !0)])
                    },
                    genFooters: function (t) {
                        var e = {
                                props: ga({
                                    options: t.options,
                                    pagination: t.pagination,
                                    itemsPerPageText: "$vuetify.dataTable.itemsPerPageText"
                                }, this.sanitizedFooterProps),
                                on: {
                                    "update:options": function (e) {
                                        return t.updateOptions(e)
                                    }
                                },
                                widths: this.widths,
                                headers: this.computedHeaders
                            },
                            i = [it(this, "footer", e, !0)];
                        return this.hideDefaultFooter || i.push(this.$createElement(Xo, ga({}, e, {
                            scopedSlots: et("footer.", this.$scopedSlots)
                        }))), i
                    },
                    genDefaultScopedSlot: function (t) {
                        var e = {
                            height: this.height,
                            fixedHeader: this.fixedHeader,
                            dense: this.dense
                        };
                        return this.$createElement(pa, {
                            props: e
                        }, [this.proxySlot("top", it(this, "top", t, !0)), this.genCaption(t), this.genColgroup(t), this.genHeaders(t), this.genBody(t), this.proxySlot("bottom", this.genFooters(t))])
                    },
                    proxySlot: function (t, e) {
                        return this.$createElement("template", {
                            slot: t
                        }, e)
                    }
                },
                render: function () {
                    var t = this;
                    return this.$createElement(Uo, {
                        props: ga({}, this.$props, {
                            customFilter: this.customFilterWithColumns,
                            customSort: this.customSortWithHeaders,
                            itemsPerPage: this.computedItemsPerPage
                        }),
                        on: {
                            "update:options": function (e, i) {
                                t.internalGroupBy = e.groupBy || [], !L(e, i) && t.$emit("update:options", e)
                            },
                            "update:page": function (e) {
                                return t.$emit("update:page", e)
                            },
                            "update:items-per-page": function (e) {
                                return t.$emit("update:items-per-page", e)
                            },
                            "update:sort-by": function (e) {
                                return t.$emit("update:sort-by", e)
                            },
                            "update:sort-desc": function (e) {
                                return t.$emit("update:sort-desc", e)
                            },
                            "update:group-by": function (e) {
                                return t.$emit("update:group-by", e)
                            },
                            "update:group-desc": function (e) {
                                return t.$emit("update:group-desc", e)
                            },
                            pagination: function (e, i) {
                                return !L(e, i) && t.$emit("pagination", e)
                            },
                            "current-items": function (e) {
                                t.internalCurrentItems = e, t.$emit("current-items", e)
                            },
                            "page-count": function (e) {
                                return t.$emit("page-count", e)
                            }
                        },
                        scopedSlots: {
                            default: this.genDefaultScopedSlot
                        }
                    })
                }
            }),
            xa = (i(64), d(ci, h).extend({
                name: "v-edit-dialog",
                props: {
                    cancelText: {
                        default: "Cancel"
                    },
                    large: Boolean,
                    eager: Boolean,
                    persistent: Boolean,
                    saveText: {
                        default: "Save"
                    },
                    transition: {
                        type: String,
                        default: "slide-x-reverse-transition"
                    }
                },
                data: function () {
                    return {
                        isActive: !1
                    }
                },
                watch: {
                    isActive: function (t) {
                        t ? (this.$emit("open"), setTimeout(this.focus, 50)) : this.$emit("close")
                    }
                },
                methods: {
                    cancel: function () {
                        this.isActive = !1, this.$emit("cancel")
                    },
                    focus: function () {
                        var t = this.$refs.content.querySelector("input");
                        t && t.focus()
                    },
                    genButton: function (t, e) {
                        return this.$createElement(ce, {
                            props: {
                                text: !0,
                                color: "primary",
                                light: !0
                            },
                            on: {
                                click: t
                            }
                        }, e)
                    },
                    genActions: function () {
                        var t = this;
                        return this.$createElement("div", {
                            class: "v-small-dialog__actions"
                        }, [this.genButton(this.cancel, this.cancelText), this.genButton(function () {
                            t.save(t.returnValue), t.$emit("save")
                        }, this.saveText)])
                    },
                    genContent: function () {
                        var t = this;
                        return this.$createElement("div", {
                            staticClass: "v-small-dialog__content",
                            on: {
                                keydown: function (e) {
                                    var i = t.$refs.content.querySelector("input");
                                    e.keyCode === U.esc && t.cancel(), e.keyCode === U.enter && i && (t.save(i.value), t.$emit("save"))
                                }
                            },
                            ref: "content"
                        }, [this.$slots.input])
                    }
                },
                render: function (t) {
                    var e = this;
                    return t(xi, {
                        staticClass: "v-small-dialog",
                        class: this.themeClasses,
                        props: {
                            contentClass: "v-small-dialog__menu-content",
                            transition: this.transition,
                            origin: "top right",
                            right: !0,
                            value: this.isActive,
                            closeOnClick: !this.persistent,
                            closeOnContentClick: !1,
                            eager: this.eager,
                            light: this.light,
                            dark: this.dark
                        },
                        on: {
                            input: function (t) {
                                return e.isActive = t
                            }
                        },
                        scopedSlots: {
                            activator: function (i) {
                                var n = i.on;
                                return t("div", {
                                    staticClass: "v-small-dialog__activator",
                                    on: n
                                }, [t("span", {
                                    staticClass: "v-small-dialog__activator__content"
                                }, e.$slots.default)])
                            }
                        }
                    }, [this.genContent(), this.large ? this.genActions() : null])
                }
            })),
            wa = (i(65), d(pa).extend().extend({
                name: "v-virtual-table",
                props: {
                    chunkSize: {
                        type: Number,
                        default: 25
                    },
                    headerHeight: {
                        type: Number,
                        default: 48
                    },
                    items: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    rowHeight: {
                        type: Number,
                        default: 48
                    }
                },
                data: function () {
                    return {
                        scrollTop: 0,
                        oldChunk: 0,
                        scrollDebounce: null,
                        invalidateCache: !1
                    }
                },
                computed: {
                    itemsLength: function () {
                        return this.items.length
                    },
                    totalHeight: function () {
                        return this.itemsLength * this.rowHeight + this.headerHeight
                    },
                    topIndex: function () {
                        return Math.floor(this.scrollTop / this.rowHeight)
                    },
                    chunkIndex: function () {
                        return Math.floor(this.topIndex / this.chunkSize)
                    },
                    startIndex: function () {
                        return Math.max(0, this.chunkIndex * this.chunkSize - this.chunkSize)
                    },
                    offsetTop: function () {
                        return Math.max(0, this.startIndex * this.rowHeight)
                    },
                    stopIndex: function () {
                        return Math.min(this.startIndex + 3 * this.chunkSize, this.itemsLength)
                    },
                    offsetBottom: function () {
                        return Math.max(0, (this.itemsLength - this.stopIndex - this.startIndex) * this.rowHeight)
                    }
                },
                watch: {
                    chunkIndex: function (t, e) {
                        this.oldChunk = e
                    },
                    items: function () {
                        this.cachedItems = null, this.$refs.table.scrollTop = 0
                    }
                },
                created: function () {
                    this.cachedItems = null
                },
                mounted: function () {
                    var t, e, i;
                    this.scrollDebounce = (t = this.onScroll, e = 50, i = 0, function () {
                        for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                        clearTimeout(i), i = setTimeout(function () {
                            return t.apply(void 0, A(n))
                        }, e)
                    }), this.$refs.table.addEventListener("scroll", this.scrollDebounce, {
                        passive: !0
                    })
                },
                beforeDestroy: function () {
                    this.$refs.table.removeEventListener("scroll", this.scrollDebounce)
                },
                methods: {
                    createStyleHeight: function (t) {
                        return {
                            height: t + "px"
                        }
                    },
                    genBody: function () {
                        return null !== this.cachedItems && this.chunkIndex === this.oldChunk || (this.cachedItems = this.genItems(), this.oldChunk = this.chunkIndex), this.$createElement("tbody", [this.$createElement("tr", {
                            style: this.createStyleHeight(this.offsetTop)
                        }), this.cachedItems, this.$createElement("tr", {
                            style: this.createStyleHeight(this.offsetBottom)
                        })])
                    },
                    genItems: function () {
                        return this.$scopedSlots.items({
                            items: this.items.slice(this.startIndex, this.stopIndex)
                        })
                    },
                    onScroll: function (t) {
                        var e = t.target;
                        this.scrollTop = e.scrollTop
                    },
                    genTable: function () {
                        return this.$createElement("div", {
                            ref: "table",
                            staticClass: "v-virtual-table__table"
                        }, [this.$createElement("table", [this.$slots["body.before"], this.genBody(), this.$slots["body.after"]])])
                    },
                    genWrapper: function () {
                        return this.$createElement("div", {
                            staticClass: "v-virtual-table__wrapper",
                            style: {
                                height: Y(this.height)
                            }
                        }, [this.genTable()])
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-data-table v-virtual-table",
                        class: this.classes
                    }, [this.$slots.top, this.genWrapper(), this.$slots.bottom])
                }
            })),
            Ca = E("v-table__overflow"),
            ka = (i(67), d(_).extend({
                methods: {
                    genPickerButton: function (t, e, i, n, s) {
                        var r = this;
                        void 0 === n && (n = !1), void 0 === s && (s = "");
                        var o = this[t] === e;
                        return this.$createElement("div", {
                            staticClass: ("v-picker__title__btn " + s).trim(),
                            class: {
                                "v-picker__title__btn--active": o, "v-picker__title__btn--readonly": n
                            },
                            on: o || n ? void 0 : {
                                click: function (i) {
                                    i.stopPropagation(), r.$emit("update:" + G(t), e)
                                }
                            }
                        }, Array.isArray(i) ? i : [i])
                    }
                }
            })),
            $a = d(ka).extend({
                name: "v-date-picker-title",
                props: {
                    date: {
                        type: String,
                        default: ""
                    },
                    disabled: Boolean,
                    readonly: Boolean,
                    selectingYear: Boolean,
                    value: {
                        type: String
                    },
                    year: {
                        type: [Number, String],
                        default: ""
                    },
                    yearIcon: {
                        type: String
                    }
                },
                data: function () {
                    return {
                        isReversing: !1
                    }
                },
                computed: {
                    computedTransition: function () {
                        return this.isReversing ? "picker-reverse-transition" : "picker-transition"
                    }
                },
                watch: {
                    value: function (t, e) {
                        this.isReversing = t < e
                    }
                },
                methods: {
                    genYearIcon: function () {
                        return this.$createElement(Lt, {
                            props: {
                                dark: !0
                            }
                        }, this.yearIcon)
                    },
                    getYearBtn: function () {
                        return this.genPickerButton("selectingYear", !0, [String(this.year), this.yearIcon ? this.genYearIcon() : null], !1, "v-date-picker-title__year")
                    },
                    genTitleText: function () {
                        return this.$createElement("transition", {
                            props: {
                                name: this.computedTransition
                            }
                        }, [this.$createElement("div", {
                            domProps: {
                                innerHTML: this.date || "&nbsp;"
                            },
                            key: this.value
                        })])
                    },
                    genTitleDate: function () {
                        return this.genPickerButton("selectingYear", !1, [this.genTitleText()], !1, "v-date-picker-title__date")
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-date-picker-title",
                        class: {
                            "v-date-picker-title--disabled": this.disabled
                        }
                    }, [this.getYearBtn(), this.genTitleDate()])
                }
            }),
            Ia = (i(68), function (t, e) {
                return void 0 === e && (e = 2), i = t, n = e, s = "0", n >>= 0, i = String(i), s = String(s), i.length > n ? String(i) : ((n -= i.length) > s.length && (s += s.repeat(n / s.length)), s.slice(0, n) + String(i));
                var i, n, s
            }),
            Oa = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            };
        var _a = function (t, e, i) {
                void 0 === i && (i = {
                    start: 0,
                    length: 0
                });
                var n = function (t) {
                    var e = Oa(t.trim().split(" ")[0].split("-"), 3),
                        i = e[0],
                        n = e[1],
                        s = e[2];
                    return [Ia(i, 4), Ia(n || 1), Ia(s || 1)].join("-")
                };
                try {
                    var s = new Intl.DateTimeFormat(t || void 0, e);
                    return function (t) {
                        return s.format(new Date(n(t) + "T00:00:00+00:00"))
                    }
                } catch (t) {
                    return i.start || i.length ? function (t) {
                        return n(t).substr(i.start || 0, i.length)
                    } : void 0
                }
            },
            Ta = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            Ba = function (t, e) {
                var i = Ta(t.split("-").map(Number), 2),
                    n = i[0],
                    s = i[1];
                return s + e === 0 ? n - 1 + "-12" : s + e === 13 ? n + 1 + "-01" : n + "-" + Ia(s + e)
            },
            Aa = function () {
                return (Aa = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Ea = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            Ma = d(_, os, h).extend({
                name: "v-date-picker-header",
                props: {
                    disabled: Boolean,
                    format: Function,
                    min: String,
                    max: String,
                    nextIcon: {
                        type: String,
                        default: "$next"
                    },
                    prevIcon: {
                        type: String,
                        default: "$prev"
                    },
                    readonly: Boolean,
                    value: {
                        type: [Number, String],
                        required: !0
                    }
                },
                data: function () {
                    return {
                        isReversing: !1
                    }
                },
                computed: {
                    formatter: function () {
                        return this.format ? this.format : String(this.value).split("-")[1] ? _a(this.currentLocale, {
                            month: "long",
                            year: "numeric",
                            timeZone: "UTC"
                        }, {
                            length: 7
                        }) : _a(this.currentLocale, {
                            year: "numeric",
                            timeZone: "UTC"
                        }, {
                            length: 4
                        })
                    }
                },
                watch: {
                    value: function (t, e) {
                        this.isReversing = t < e
                    }
                },
                methods: {
                    genBtn: function (t) {
                        var e = this,
                            i = this.disabled || t < 0 && this.min && this.calculateChange(t) < this.min || t > 0 && this.max && this.calculateChange(t) > this.max;
                        return this.$createElement(ce, {
                            props: {
                                dark: this.dark,
                                disabled: i,
                                icon: !0,
                                light: this.light
                            },
                            nativeOn: {
                                click: function (i) {
                                    i.stopPropagation(), e.$emit("input", e.calculateChange(t))
                                }
                            }
                        }, [this.$createElement(Lt, t < 0 == !this.$vuetify.rtl ? this.prevIcon : this.nextIcon)])
                    },
                    calculateChange: function (t) {
                        var e = Ea(String(this.value).split("-").map(Number), 2),
                            i = e[0];
                        return null == e[1] ? "" + (i + t) : Ba(String(this.value), t)
                    },
                    genHeader: function () {
                        var t = this,
                            e = !this.disabled && (this.color || "accent"),
                            i = this.$createElement("div", this.setTextColor(e, {
                                key: String(this.value)
                            }), [this.$createElement("button", {
                                attrs: {
                                    type: "button"
                                },
                                on: {
                                    click: function () {
                                        return t.$emit("toggle")
                                    }
                                }
                            }, [this.$slots.default || this.formatter(String(this.value))])]),
                            n = this.$createElement("transition", {
                                props: {
                                    name: this.isReversing === !this.$vuetify.rtl ? "tab-reverse-transition" : "tab-transition"
                                }
                            }, [i]);
                        return this.$createElement("div", {
                            staticClass: "v-date-picker-header__value",
                            class: {
                                "v-date-picker-header__value--disabled": this.disabled
                            }
                        }, [n])
                    }
                },
                render: function () {
                    return this.$createElement("div", {
                        staticClass: "v-date-picker-header",
                        class: Aa({
                            "v-date-picker-header--disabled": this.disabled
                        }, this.themeClasses)
                    }, [this.genBtn(-1), this.genHeader(), this.genBtn(1)])
                }
            });
        i(69);

        function Da(t, e, i, n) {
            return (!n || n(t)) && (!e || t >= e.substr(0, 10)) && (!i || t <= i)
        }
        var Va = function () {
                return (Va = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Pa = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            La = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Pa(arguments[e]));
                return t
            },
            Ha = d(_, os, h).extend({
                directives: {
                    Touch: mr
                },
                props: {
                    allowedDates: Function,
                    current: String,
                    disabled: Boolean,
                    format: Function,
                    events: {
                        type: [Array, Function, Object],
                        default: function () {
                            return null
                        }
                    },
                    eventColor: {
                        type: [Array, Function, Object, String],
                        default: function () {
                            return "warning"
                        }
                    },
                    min: String,
                    max: String,
                    range: Boolean,
                    readonly: Boolean,
                    scrollable: Boolean,
                    tableDate: {
                        type: String,
                        required: !0
                    },
                    value: [String, Array]
                },
                data: function () {
                    return {
                        isReversing: !1
                    }
                },
                computed: {
                    computedTransition: function () {
                        return this.isReversing === !this.$vuetify.rtl ? "tab-reverse-transition" : "tab-transition"
                    },
                    displayedMonth: function () {
                        return Number(this.tableDate.split("-")[1]) - 1
                    },
                    displayedYear: function () {
                        return Number(this.tableDate.split("-")[0])
                    }
                },
                watch: {
                    tableDate: function (t, e) {
                        this.isReversing = t < e
                    }
                },
                methods: {
                    genButtonClasses: function (t, e, i, n) {
                        return Va({
                            "v-size--default": !e,
                            "v-btn--active": i,
                            "v-btn--flat": !t || this.disabled,
                            "v-btn--text": i === n,
                            "v-btn--rounded": e,
                            "v-btn--disabled": !t || this.disabled,
                            "v-btn--outlined": n && !i
                        }, this.themeClasses)
                    },
                    genButtonEvents: function (t, e, i) {
                        var n = this;
                        if (!this.disabled) return {
                            click: function () {
                                e && !n.readonly && n.$emit("input", t), n.$emit("click:" + i, t)
                            },
                            dblclick: function () {
                                return n.$emit("dblclick:" + i, t)
                            }
                        }
                    },
                    genButton: function (t, e, i, n) {
                        var s = Da(t, this.min, this.max, this.allowedDates),
                            r = this.isSelected(t),
                            o = t === this.current,
                            a = r ? this.setBackgroundColor : this.setTextColor,
                            l = (r || o) && (this.color || "accent");
                        return this.$createElement("button", a(l, {
                            staticClass: "v-btn",
                            class: this.genButtonClasses(s, e, r, o),
                            attrs: {
                                type: "button"
                            },
                            domProps: {
                                disabled: this.disabled || !s
                            },
                            on: this.genButtonEvents(t, s, i)
                        }), [this.$createElement("div", {
                            staticClass: "v-btn__content"
                        }, [n(t)]), this.genEvents(t)])
                    },
                    getEventColors: function (t) {
                        var e, i = function (t) {
                            return Array.isArray(t) ? t : [t]
                        };
                        return (e = Array.isArray(this.events) ? this.events.includes(t) : this.events instanceof Function ? this.events(t) || !1 : this.events && this.events[t] || !1) ? (!0 !== e ? i(e) : "string" == typeof this.eventColor ? [this.eventColor] : "function" == typeof this.eventColor ? i(this.eventColor(t)) : Array.isArray(this.eventColor) ? this.eventColor : i(this.eventColor[t])).filter(function (t) {
                            return t
                        }) : []
                    },
                    genEvents: function (t) {
                        var e = this,
                            i = this.getEventColors(t);
                        return i.length ? this.$createElement("div", {
                            staticClass: "v-date-picker-table__events"
                        }, i.map(function (t) {
                            return e.$createElement("div", e.setBackgroundColor(t))
                        })) : null
                    },
                    wheel: function (t, e) {
                        t.preventDefault(), this.$emit("update:table-date", e(t.deltaY))
                    },
                    touch: function (t, e) {
                        this.$emit("update:table-date", e(t))
                    },
                    genTable: function (t, e, i) {
                        var n = this,
                            s = this.$createElement("transition", {
                                props: {
                                    name: this.computedTransition
                                }
                            }, [this.$createElement("table", {
                                key: this.tableDate
                            }, e)]),
                            r = {
                                name: "touch",
                                value: {
                                    left: function (t) {
                                        return t.offsetX < -15 && n.touch(1, i)
                                    },
                                    right: function (t) {
                                        return t.offsetX > 15 && n.touch(-1, i)
                                    }
                                }
                            };
                        return this.$createElement("div", {
                            staticClass: t,
                            class: Va({
                                "v-date-picker-table--disabled": this.disabled
                            }, this.themeClasses),
                            on: !this.disabled && this.scrollable ? {
                                wheel: function (t) {
                                    return n.wheel(t, i)
                                }
                            } : void 0,
                            directives: [r]
                        }, [s])
                    },
                    isSelected: function (t) {
                        if (Array.isArray(this.value)) {
                            if (this.range && 2 === this.value.length) {
                                var e = Pa(La(this.value).sort(), 2),
                                    i = e[0],
                                    n = e[1];
                                return i <= t && t <= n
                            }
                            return -1 !== this.value.indexOf(t)
                        }
                        return t === this.value
                    }
                }
            }),
            ja = d(Ha).extend({
                name: "v-date-picker-date-table",
                props: {
                    firstDayOfWeek: {
                        type: [String, Number],
                        default: 0
                    },
                    showWeek: Boolean,
                    weekdayFormat: Function
                },
                computed: {
                    formatter: function () {
                        return this.format || _a(this.currentLocale, {
                            day: "numeric",
                            timeZone: "UTC"
                        }, {
                            start: 8,
                            length: 2
                        })
                    },
                    weekdayFormatter: function () {
                        return this.weekdayFormat || _a(this.currentLocale, {
                            weekday: "narrow",
                            timeZone: "UTC"
                        })
                    },
                    weekDays: function () {
                        var t = this,
                            e = parseInt(this.firstDayOfWeek, 10);
                        return this.weekdayFormatter ? N(7).map(function (i) {
                            return t.weekdayFormatter("2017-01-" + (e + i + 15))
                        }) : N(7).map(function (t) {
                            return ["S", "M", "T", "W", "T", "F", "S"][(t + e) % 7]
                        })
                    }
                },
                methods: {
                    calculateTableDate: function (t) {
                        return Ba(this.tableDate, Math.sign(t || 1))
                    },
                    genTHead: function () {
                        var t = this,
                            e = this.weekDays.map(function (e) {
                                return t.$createElement("th", e)
                            });
                        return this.showWeek && e.unshift(this.$createElement("th")), this.$createElement("thead", this.genTR(e))
                    },
                    weekDaysBeforeFirstDayOfTheMonth: function () {
                        return (new Date(this.displayedYear + "-" + Ia(this.displayedMonth + 1) + "-01T00:00:00+00:00").getUTCDay() - parseInt(this.firstDayOfWeek) + 7) % 7
                    },
                    getWeekNumber: function () {
                        var t = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][this.displayedMonth];
                        this.displayedMonth > 1 && (this.displayedYear % 4 == 0 && this.displayedYear % 100 != 0 || this.displayedYear % 400 == 0) && t++;
                        var e = (this.displayedYear + (this.displayedYear - 1 >> 2) - Math.floor((this.displayedYear - 1) / 100) + Math.floor((this.displayedYear - 1) / 400) - Number(this.firstDayOfWeek)) % 7;
                        return Math.floor((t + e) / 7) + 1
                    },
                    genWeekNumber: function (t) {
                        return this.$createElement("td", [this.$createElement("small", {
                            staticClass: "v-date-picker-table--date__week"
                        }, String(t).padStart(2, "0"))])
                    },
                    genTBody: function () {
                        var t = [],
                            e = new Date(this.displayedYear, this.displayedMonth + 1, 0).getDate(),
                            i = [],
                            n = this.weekDaysBeforeFirstDayOfTheMonth(),
                            s = this.getWeekNumber();
                        for (this.showWeek && i.push(this.genWeekNumber(s++)); n--;) i.push(this.$createElement("td"));
                        for (n = 1; n <= e; n++) {
                            var r = this.displayedYear + "-" + Ia(this.displayedMonth + 1) + "-" + Ia(n);
                            i.push(this.$createElement("td", [this.genButton(r, !0, "date", this.formatter)])), i.length % (this.showWeek ? 8 : 7) == 0 && (t.push(this.genTR(i)), i = [], n < e && this.showWeek && i.push(this.genWeekNumber(s++)))
                        }
                        return i.length && t.push(this.genTR(i)), this.$createElement("tbody", t)
                    },
                    genTR: function (t) {
                        return [this.$createElement("tr", t)]
                    }
                },
                render: function () {
                    return this.genTable("v-date-picker-table v-date-picker-table--date", [this.genTHead(), this.genTBody()], this.calculateTableDate)
                }
            }),
            Na = d(Ha).extend({
                name: "v-date-picker-month-table",
                computed: {
                    formatter: function () {
                        return this.format || _a(this.currentLocale, {
                            month: "short",
                            timeZone: "UTC"
                        }, {
                            start: 5,
                            length: 2
                        })
                    }
                },
                methods: {
                    calculateTableDate: function (t) {
                        return "" + (parseInt(this.tableDate, 10) + Math.sign(t || 1))
                    },
                    genTBody: function () {
                        for (var t = this, e = [], i = Array(3).fill(null), n = 12 / i.length, s = function (n) {
                                var s = i.map(function (e, s) {
                                    var r = n * i.length + s,
                                        o = t.displayedYear + "-" + Ia(r + 1);
                                    return t.$createElement("td", {
                                        key: r
                                    }, [t.genButton(o, !1, "month", t.formatter)])
                                });
                                e.push(r.$createElement("tr", {
                                    key: n
                                }, s))
                            }, r = this, o = 0; o < n; o++) s(o);
                        return this.$createElement("tbody", e)
                    }
                },
                render: function () {
                    return this.genTable("v-date-picker-table v-date-picker-table--month", [this.genTBody()], this.calculateTableDate)
                }
            }),
            Fa = (i(70), d(_, os).extend({
                name: "v-date-picker-years",
                props: {
                    format: Function,
                    min: [Number, String],
                    max: [Number, String],
                    readonly: Boolean,
                    value: [Number, String]
                },
                data: function () {
                    return {
                        defaultColor: "primary"
                    }
                },
                computed: {
                    formatter: function () {
                        return this.format || _a(this.currentLocale, {
                            year: "numeric",
                            timeZone: "UTC"
                        }, {
                            length: 4
                        })
                    }
                },
                mounted: function () {
                    var t = this;
                    setTimeout(function () {
                        var e = t.$el.getElementsByClassName("active")[0];
                        e ? t.$el.scrollTop = e.offsetTop - t.$el.offsetHeight / 2 + e.offsetHeight / 2 : t.min && !t.max ? t.$el.scrollTop = t.$el.scrollHeight : !t.min && t.max ? t.$el.scrollTop = 0 : t.$el.scrollTop = t.$el.scrollHeight / 2 - t.$el.offsetHeight / 2
                    })
                },
                methods: {
                    genYearItem: function (t) {
                        var e = this,
                            i = this.formatter("" + t),
                            n = parseInt(this.value, 10) === t,
                            s = n && (this.color || "primary");
                        return this.$createElement("li", this.setTextColor(s, {
                            key: t,
                            class: {
                                active: n
                            },
                            on: {
                                click: function () {
                                    return e.$emit("input", t)
                                }
                            }
                        }), i)
                    },
                    genYearItems: function () {
                        for (var t = [], e = this.value ? parseInt(this.value, 10) : (new Date).getFullYear(), i = this.max ? parseInt(this.max, 10) : e + 100, n = Math.min(i, this.min ? parseInt(this.min, 10) : e - 100), s = i; s >= n; s--) t.push(this.genYearItem(s));
                        return t
                    }
                },
                render: function () {
                    return this.$createElement("ul", {
                        staticClass: "v-date-picker-years",
                        ref: "years"
                    }, this.genYearItems())
                }
            })),
            za = (i(66), function () {
                return (za = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Wa = d(_, h).extend({
                name: "v-picker",
                props: {
                    fullWidth: Boolean,
                    landscape: Boolean,
                    noTitle: Boolean,
                    transition: {
                        type: String,
                        default: "fade-transition"
                    },
                    width: {
                        type: [Number, String],
                        default: 290
                    }
                },
                computed: {
                    computedTitleColor: function () {
                        var t = !this.isDark && (this.color || "primary");
                        return this.color || t
                    }
                },
                methods: {
                    genTitle: function () {
                        return this.$createElement("div", this.setBackgroundColor(this.computedTitleColor, {
                            staticClass: "v-picker__title",
                            class: {
                                "v-picker__title--landscape": this.landscape
                            }
                        }), this.$slots.title)
                    },
                    genBodyTransition: function () {
                        return this.$createElement("transition", {
                            props: {
                                name: this.transition
                            }
                        }, this.$slots.default)
                    },
                    genBody: function () {
                        return this.$createElement("div", {
                            staticClass: "v-picker__body",
                            class: za({
                                "v-picker__body--no-title": this.noTitle
                            }, this.themeClasses),
                            style: this.fullWidth ? void 0 : {
                                width: Y(this.width)
                            }
                        }, [this.genBodyTransition()])
                    },
                    genActions: function () {
                        return this.$createElement("div", {
                            staticClass: "v-picker__actions v-card__actions",
                            class: {
                                "v-picker__actions--no-title": this.noTitle
                            }
                        }, this.$slots.actions)
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-picker v-card",
                        class: za({
                            "v-picker--landscape": this.landscape,
                            "v-picker--full-width": this.fullWidth
                        }, this.themeClasses)
                    }, [this.$slots.title ? this.genTitle() : null, this.genBody(), this.$slots.actions ? this.genActions() : null])
                }
            }),
            Ra = Wa,
            Ya = d(_, h).extend({
                name: "picker",
                props: {
                    fullWidth: Boolean,
                    headerColor: String,
                    landscape: Boolean,
                    noTitle: Boolean,
                    width: {
                        type: [Number, String],
                        default: 290
                    }
                },
                methods: {
                    genPickerTitle: function () {
                        return null
                    },
                    genPickerBody: function () {
                        return null
                    },
                    genPickerActionsSlot: function () {
                        return this.$scopedSlots.default ? this.$scopedSlots.default({
                            save: this.save,
                            cancel: this.cancel
                        }) : this.$slots.default
                    },
                    genPicker: function (t) {
                        var e = [];
                        if (!this.noTitle) {
                            var i = this.genPickerTitle();
                            i && e.push(i)
                        }
                        var n = this.genPickerBody();
                        return n && e.push(n), e.push(this.$createElement("template", {
                            slot: "actions"
                        }, [this.genPickerActionsSlot()])), this.$createElement(Ra, {
                            staticClass: t,
                            props: {
                                color: this.headerColor || this.color,
                                dark: this.dark,
                                fullWidth: this.fullWidth,
                                landscape: this.landscape,
                                light: this.light,
                                width: this.width,
                                noTitle: this.noTitle
                            }
                        }, e)
                    }
                }
            }),
            Ga = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            Ua = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Ga(arguments[e]));
                return t
            };

        function qa(t, e) {
            var i = Ga(t.split("-"), 3),
                n = i[0],
                s = i[1],
                r = void 0 === s ? 1 : s,
                o = i[2],
                a = void 0 === o ? 1 : o;
            return (n + "-" + Ia(r) + "-" + Ia(a)).substr(0, {
                date: 10,
                month: 7,
                year: 4
            } [e])
        }
        var Xa = d(os, Ya).extend({
                name: "v-date-picker",
                props: {
                    allowedDates: Function,
                    dayFormat: Function,
                    disabled: Boolean,
                    events: {
                        type: [Array, Function, Object],
                        default: function () {
                            return null
                        }
                    },
                    eventColor: {
                        type: [Array, Function, Object, String],
                        default: function () {
                            return "warning"
                        }
                    },
                    firstDayOfWeek: {
                        type: [String, Number],
                        default: 0
                    },
                    headerDateFormat: Function,
                    max: String,
                    min: String,
                    monthFormat: Function,
                    multiple: Boolean,
                    nextIcon: {
                        type: String,
                        default: "$next"
                    },
                    pickerDate: String,
                    prevIcon: {
                        type: String,
                        default: "$prev"
                    },
                    range: Boolean,
                    reactive: Boolean,
                    readonly: Boolean,
                    scrollable: Boolean,
                    showCurrent: {
                        type: [Boolean, String],
                        default: !0
                    },
                    selectedItemsText: {
                        type: String,
                        default: "$vuetify.datePicker.itemsSelected"
                    },
                    showWeek: Boolean,
                    titleDateFormat: Function,
                    type: {
                        type: String,
                        default: "date",
                        validator: function (t) {
                            return ["date", "month"].includes(t)
                        }
                    },
                    value: [Array, String],
                    weekdayFormat: Function,
                    yearFormat: Function,
                    yearIcon: String
                },
                data: function () {
                    var t = this,
                        e = new Date;
                    return {
                        activePicker: this.type.toUpperCase(),
                        inputDay: null,
                        inputMonth: null,
                        inputYear: null,
                        isReversing: !1,
                        now: e,
                        tableDate: t.pickerDate ? t.pickerDate : qa((t.multiple || t.range ? t.value[t.value.length - 1] : t.value) || e.getFullYear() + "-" + (e.getMonth() + 1), "date" === t.type ? "month" : "year")
                    }
                },
                computed: {
                    isMultiple: function () {
                        return this.multiple || this.range
                    },
                    lastValue: function () {
                        return this.isMultiple ? this.value[this.value.length - 1] : this.value
                    },
                    selectedMonths: function () {
                        return this.value && this.value.length && "month" !== this.type ? this.isMultiple ? this.value.map(function (t) {
                            return t.substr(0, 7)
                        }) : this.value.substr(0, 7) : this.value
                    },
                    current: function () {
                        return !0 === this.showCurrent ? qa(this.now.getFullYear() + "-" + (this.now.getMonth() + 1) + "-" + this.now.getDate(), this.type) : this.showCurrent || null
                    },
                    inputDate: function () {
                        return "date" === this.type ? this.inputYear + "-" + Ia(this.inputMonth + 1) + "-" + Ia(this.inputDay) : this.inputYear + "-" + Ia(this.inputMonth + 1)
                    },
                    tableMonth: function () {
                        return Number((this.pickerDate || this.tableDate).split("-")[1]) - 1
                    },
                    tableYear: function () {
                        return Number((this.pickerDate || this.tableDate).split("-")[0])
                    },
                    minMonth: function () {
                        return this.min ? qa(this.min, "month") : null
                    },
                    maxMonth: function () {
                        return this.max ? qa(this.max, "month") : null
                    },
                    minYear: function () {
                        return this.min ? qa(this.min, "year") : null
                    },
                    maxYear: function () {
                        return this.max ? qa(this.max, "year") : null
                    },
                    formatters: function () {
                        return {
                            year: this.yearFormat || _a(this.currentLocale, {
                                year: "numeric",
                                timeZone: "UTC"
                            }, {
                                length: 4
                            }),
                            titleDate: this.titleDateFormat || (this.isMultiple ? this.defaultTitleMultipleDateFormatter : this.defaultTitleDateFormatter)
                        }
                    },
                    defaultTitleMultipleDateFormatter: function () {
                        var t = this;
                        return function (e) {
                            return e.length ? 1 === e.length ? t.defaultTitleDateFormatter(e[0]) : t.$vuetify.lang.t(t.selectedItemsText, e.length) : "-"
                        }
                    },
                    defaultTitleDateFormatter: function () {
                        var t = _a(this.currentLocale, {
                            year: {
                                year: "numeric",
                                timeZone: "UTC"
                            },
                            month: {
                                month: "long",
                                timeZone: "UTC"
                            },
                            date: {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                                timeZone: "UTC"
                            }
                        } [this.type], {
                            start: 0,
                            length: {
                                date: 10,
                                month: 7,
                                year: 4
                            } [this.type]
                        });
                        return this.landscape ? function (e) {
                            return t(e).replace(/([^\d\s])([\d])/g, function (t, e, i) {
                                return e + " " + i
                            }).replace(", ", ",<br>")
                        } : t
                    }
                },
                watch: {
                    tableDate: function (t, e) {
                        var i = "month" === this.type ? "year" : "month";
                        this.isReversing = qa(t, i) < qa(e, i), this.$emit("update:picker-date", t)
                    },
                    pickerDate: function (t) {
                        t ? this.tableDate = t : this.lastValue && "date" === this.type ? this.tableDate = qa(this.lastValue, "month") : this.lastValue && "month" === this.type && (this.tableDate = qa(this.lastValue, "year"))
                    },
                    value: function (t, e) {
                        this.checkMultipleProp(), this.setInputDate(), this.isMultiple || !this.value || this.pickerDate ? this.isMultiple && this.value.length && !e.length && !this.pickerDate && (this.tableDate = qa(this.inputDate, "month" === this.type ? "year" : "month")) : this.tableDate = qa(this.inputDate, "month" === this.type ? "year" : "month")
                    },
                    type: function (t) {
                        if (this.activePicker = t.toUpperCase(), this.value && this.value.length) {
                            var e = (this.isMultiple ? this.value : [this.value]).map(function (e) {
                                return qa(e, t)
                            }).filter(this.isDateAllowed);
                            this.$emit("input", this.isMultiple ? e : e[0])
                        }
                    }
                },
                created: function () {
                    this.checkMultipleProp(), this.pickerDate !== this.tableDate && this.$emit("update:picker-date", this.tableDate), this.setInputDate()
                },
                methods: {
                    emitInput: function (t) {
                        if (this.range && this.value) 2 === this.value.length ? this.$emit("input", [t]) : this.$emit("input", Ua(this.value, [t]));
                        else {
                            var e = this.multiple ? -1 === this.value.indexOf(t) ? this.value.concat([t]) : this.value.filter(function (e) {
                                return e !== t
                            }) : t;
                            this.$emit("input", e), this.multiple || this.$emit("change", t)
                        }
                    },
                    checkMultipleProp: function () {
                        if (null != this.value) {
                            var t = this.value.constructor.name,
                                e = this.isMultiple ? "Array" : "String";
                            t !== e && y("Value must be " + (this.isMultiple ? "an" : "a") + " " + e + ", got " + t, this)
                        }
                    },
                    isDateAllowed: function (t) {
                        return Da(t, this.min, this.max, this.allowedDates)
                    },
                    yearClick: function (t) {
                        this.inputYear = t, "month" === this.type ? this.tableDate = "" + t : this.tableDate = t + "-" + Ia((this.tableMonth || 0) + 1), this.activePicker = "MONTH", this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate) && this.$emit("input", this.inputDate)
                    },
                    monthClick: function (t) {
                        this.inputYear = parseInt(t.split("-")[0], 10), this.inputMonth = parseInt(t.split("-")[1], 10) - 1, "date" === this.type ? (this.inputDay && (this.inputDay = Math.min(this.inputDay, Es(this.inputYear, this.inputMonth + 1))), this.tableDate = t, this.activePicker = "DATE", this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate) && this.$emit("input", this.inputDate)) : this.emitInput(this.inputDate)
                    },
                    dateClick: function (t) {
                        this.inputYear = parseInt(t.split("-")[0], 10), this.inputMonth = parseInt(t.split("-")[1], 10) - 1, this.inputDay = parseInt(t.split("-")[2], 10), this.emitInput(this.inputDate)
                    },
                    genPickerTitle: function () {
                        var t = this;
                        return this.$createElement($a, {
                            props: {
                                date: this.value ? this.formatters.titleDate(this.value) : "",
                                disabled: this.disabled,
                                readonly: this.readonly,
                                selectingYear: "YEAR" === this.activePicker,
                                year: this.formatters.year(this.value ? "" + this.inputYear : this.tableDate),
                                yearIcon: this.yearIcon,
                                value: this.isMultiple ? this.value[0] : this.value
                            },
                            slot: "title",
                            on: {
                                "update:selecting-year": function (e) {
                                    return t.activePicker = e ? "YEAR" : t.type.toUpperCase()
                                }
                            }
                        })
                    },
                    genTableHeader: function () {
                        var t = this;
                        return this.$createElement(Ma, {
                            props: {
                                nextIcon: this.nextIcon,
                                color: this.color,
                                dark: this.dark,
                                disabled: this.disabled,
                                format: this.headerDateFormat,
                                light: this.light,
                                locale: this.locale,
                                min: "DATE" === this.activePicker ? this.minMonth : this.minYear,
                                max: "DATE" === this.activePicker ? this.maxMonth : this.maxYear,
                                prevIcon: this.prevIcon,
                                readonly: this.readonly,
                                value: "DATE" === this.activePicker ? Ia(this.tableYear, 4) + "-" + Ia(this.tableMonth + 1) : "" + Ia(this.tableYear, 4)
                            },
                            on: {
                                toggle: function () {
                                    return t.activePicker = "DATE" === t.activePicker ? "MONTH" : "YEAR"
                                },
                                input: function (e) {
                                    return t.tableDate = e
                                }
                            }
                        })
                    },
                    genDateTable: function () {
                        var t = this;
                        return this.$createElement(ja, {
                            props: {
                                allowedDates: this.allowedDates,
                                color: this.color,
                                current: this.current,
                                dark: this.dark,
                                disabled: this.disabled,
                                events: this.events,
                                eventColor: this.eventColor,
                                firstDayOfWeek: this.firstDayOfWeek,
                                format: this.dayFormat,
                                light: this.light,
                                locale: this.locale,
                                min: this.min,
                                max: this.max,
                                range: this.range,
                                readonly: this.readonly,
                                scrollable: this.scrollable,
                                showWeek: this.showWeek,
                                tableDate: Ia(this.tableYear, 4) + "-" + Ia(this.tableMonth + 1),
                                value: this.value,
                                weekdayFormat: this.weekdayFormat
                            },
                            ref: "table",
                            on: {
                                input: this.dateClick,
                                "update:table-date": function (e) {
                                    return t.tableDate = e
                                },
                                "click:date": function (e) {
                                    return t.$emit("click:date", e)
                                },
                                "dblclick:date": function (e) {
                                    return t.$emit("dblclick:date", e)
                                }
                            }
                        })
                    },
                    genMonthTable: function () {
                        var t = this;
                        return this.$createElement(Na, {
                            props: {
                                allowedDates: "month" === this.type ? this.allowedDates : null,
                                color: this.color,
                                current: this.current ? qa(this.current, "month") : null,
                                dark: this.dark,
                                disabled: this.disabled,
                                events: "month" === this.type ? this.events : null,
                                eventColor: "month" === this.type ? this.eventColor : null,
                                format: this.monthFormat,
                                light: this.light,
                                locale: this.locale,
                                min: this.minMonth,
                                max: this.maxMonth,
                                readonly: this.readonly && "month" === this.type,
                                scrollable: this.scrollable,
                                value: this.selectedMonths,
                                tableDate: "" + Ia(this.tableYear, 4)
                            },
                            ref: "table",
                            on: {
                                input: this.monthClick,
                                "update:table-date": function (e) {
                                    return t.tableDate = e
                                },
                                "click:month": function (e) {
                                    return t.$emit("click:month", e)
                                },
                                "dblclick:month": function (e) {
                                    return t.$emit("dblclick:month", e)
                                }
                            }
                        })
                    },
                    genYears: function () {
                        return this.$createElement(Fa, {
                            props: {
                                color: this.color,
                                format: this.yearFormat,
                                locale: this.locale,
                                min: this.minYear,
                                max: this.maxYear,
                                value: this.tableYear
                            },
                            on: {
                                input: this.yearClick
                            }
                        })
                    },
                    genPickerBody: function () {
                        var t = "YEAR" === this.activePicker ? [this.genYears()] : [this.genTableHeader(), "DATE" === this.activePicker ? this.genDateTable() : this.genMonthTable()];
                        return this.$createElement("div", {
                            key: this.activePicker
                        }, t)
                    },
                    setInputDate: function () {
                        if (this.lastValue) {
                            var t = this.lastValue.split("-");
                            this.inputYear = parseInt(t[0], 10), this.inputMonth = parseInt(t[1], 10) - 1, "date" === this.type && (this.inputDay = parseInt(t[2], 10))
                        } else this.inputYear = this.inputYear || this.now.getFullYear(), this.inputMonth = null == this.inputMonth ? this.inputMonth : this.now.getMonth(), this.inputDay = this.inputDay || this.now.getDate()
                    }
                },
                render: function () {
                    return this.genPicker("v-picker--date")
                }
            }),
            Za = (i(71), function () {
                return (Za = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Ka = Yi.extend({
                name: "v-expansion-panels",
                provide: function () {
                    return {
                        expansionPanels: this
                    }
                },
                props: {
                    accordion: Boolean,
                    disabled: Boolean,
                    focusable: Boolean,
                    inset: Boolean,
                    popout: Boolean,
                    readonly: Boolean
                },
                computed: {
                    classes: function () {
                        return Za({}, Yi.options.computed.classes.call(this), {
                            "v-expansion-panels": !0,
                            "v-expansion-panels--accordion": this.accordion,
                            "v-expansion-panels--focusable": this.focusable,
                            "v-expansion-panels--inset": this.inset,
                            "v-expansion-panels--popout": this.popout
                        })
                    }
                },
                created: function () {
                    this.$attrs.hasOwnProperty("expand") && S("expand", "multiple", this), Array.isArray(this.value) && this.value.length > 0 && "boolean" == typeof this.value[0] && S(':value="[true, false, true]"', ':value="[0, 2]"', this)
                },
                methods: {
                    updateItem: function (t, e) {
                        var i = this.getValue(t, e),
                            n = this.getValue(t, e + 1);
                        t.isActive = this.toggleMethod(i), t.nextIsActive = this.toggleMethod(n)
                    }
                }
            }),
            Ja = function () {
                return (Ja = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Qa = d(Rt("expansionPanels", "v-expansion-panel", "v-expansion-panels"), Wt("expansionPanel", !0)).extend({
                name: "v-expansion-panel",
                props: {
                    disabled: Boolean,
                    readonly: Boolean
                },
                data: function () {
                    return {
                        content: null,
                        header: null,
                        nextIsActive: !1
                    }
                },
                computed: {
                    classes: function () {
                        return Ja({
                            "v-expansion-panel--active": this.isActive,
                            "v-expansion-panel--next-active": this.nextIsActive,
                            "v-expansion-panel--disabled": this.isDisabled
                        }, this.groupClasses)
                    },
                    isDisabled: function () {
                        return this.expansionPanels.disabled || this.disabled
                    },
                    isReadonly: function () {
                        return this.expansionPanels.readonly || this.readonly
                    }
                },
                methods: {
                    registerContent: function (t) {
                        this.content = t
                    },
                    unregisterContent: function () {
                        this.content = null
                    },
                    registerHeader: function (t) {
                        this.header = t, t.$on("click", this.onClick)
                    },
                    unregisterHeader: function () {
                        this.header = null
                    },
                    onClick: function (t) {
                        t.detail && this.header.$el.blur(), this.$emit("click", t), this.isReadonly || this.isDisabled || this.toggle()
                    },
                    toggle: function () {
                        var t = this;
                        this.content && (this.content.isBooted = !0), this.$nextTick(function () {
                            return t.$emit("change")
                        })
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-expansion-panel",
                        class: this.classes,
                        attrs: {
                            "aria-expanded": String(this.isActive)
                        }
                    }, it(this))
                }
            }),
            tl = d(ti, zt("expansionPanel", "v-expansion-panel-content", "v-expansion-panel")).extend().extend({
                name: "v-expansion-panel-content",
                computed: {
                    isActive: function () {
                        return this.expansionPanel.isActive
                    }
                },
                created: function () {
                    this.expansionPanel.registerContent(this)
                },
                beforeDestroy: function () {
                    this.expansionPanel.unregisterContent()
                },
                render: function (t) {
                    return t(Re, [t("div", {
                        staticClass: "v-expansion-panel-content",
                        directives: [{
                            name: "show",
                            value: this.isActive
                        }]
                    }, this.showLazyContent([t("div", {
                        class: "v-expansion-panel-content__wrap"
                    }, it(this))]))])
                }
            }),
            el = function () {
                return (el = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            il = d(zt("expansionPanel", "v-expansion-panel-header", "v-expansion-panel")).extend().extend({
                name: "v-expansion-panel-header",
                directives: {
                    ripple: ee
                },
                props: {
                    disableIconRotate: Boolean,
                    expandIcon: {
                        type: String,
                        default: "$expand"
                    },
                    hideActions: Boolean,
                    ripple: {
                        type: [Boolean, Object],
                        default: !1
                    }
                },
                data: function () {
                    return {
                        hasMousedown: !1
                    }
                },
                computed: {
                    classes: function () {
                        return {
                            "v-expansion-panel-header--active": this.isActive,
                            "v-expansion-panel-header--mousedown": this.hasMousedown
                        }
                    },
                    isActive: function () {
                        return this.expansionPanel.isActive
                    },
                    isDisabled: function () {
                        return this.expansionPanel.isDisabled
                    },
                    isReadonly: function () {
                        return this.expansionPanel.isReadonly
                    }
                },
                created: function () {
                    this.expansionPanel.registerHeader(this)
                },
                beforeDestroy: function () {
                    this.expansionPanel.unregisterHeader()
                },
                methods: {
                    onClick: function (t) {
                        this.$emit("click", t)
                    },
                    genIcon: function () {
                        var t = it(this, "actions") || [this.$createElement(Lt, this.expandIcon)];
                        return this.$createElement(De, [this.$createElement("div", {
                            staticClass: "v-expansion-panel-header__icon",
                            class: {
                                "v-expansion-panel-header__icon--disable-rotate": this.disableIconRotate
                            },
                            directives: [{
                                name: "show",
                                value: !this.isDisabled
                            }]
                        }, t)])
                    }
                },
                render: function (t) {
                    var e = this;
                    return t("button", {
                        staticClass: "v-expansion-panel-header",
                        class: this.classes,
                        attrs: {
                            tabindex: this.isDisabled ? -1 : null,
                            type: "button"
                        },
                        directives: [{
                            name: "ripple",
                            value: this.ripple
                        }],
                        on: el({}, this.$listeners, {
                            click: this.onClick,
                            mousedown: function () {
                                return e.hasMousedown = !0
                            },
                            mouseup: function () {
                                return e.hasMousedown = !1
                            }
                        })
                    }, [it(this, "default", {
                        open: this.isActive
                    }, !0), this.hideActions || this.genIcon()])
                }
            }),
            nl = (i(72), _n);

        function sl(t) {
            return (sl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var rl = function () {
                return (rl = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            ol = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            al = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(ol(arguments[e]));
                return t
            },
            ll = nl.extend({
                name: "v-file-input",
                model: {
                    prop: "value",
                    event: "change"
                },
                props: {
                    chips: Boolean,
                    clearable: {
                        type: Boolean,
                        default: !0
                    },
                    counterSizeString: {
                        type: String,
                        default: "$vuetify.fileInput.counterSize"
                    },
                    counterString: {
                        type: String,
                        default: "$vuetify.fileInput.counter"
                    },
                    placeholder: String,
                    prependIcon: {
                        type: String,
                        default: "$file"
                    },
                    readonly: {
                        type: Boolean,
                        default: !1
                    },
                    showSize: {
                        type: [Boolean, Number],
                        default: !1,
                        validator: function (t) {
                            return "boolean" == typeof t || [1e3, 1024].includes(t)
                        }
                    },
                    smallChips: Boolean,
                    truncateLength: {
                        type: [Number, String],
                        default: 22
                    },
                    type: {
                        type: String,
                        default: "file"
                    },
                    value: {
                        default: function () {
                            return []
                        },
                        validator: function (t) {
                            return "object" === sl(t) || Array.isArray(t)
                        }
                    }
                },
                computed: {
                    classes: function () {
                        return rl({}, nl.options.computed.classes.call(this), {
                            "v-file-input": !0
                        })
                    },
                    counterValue: function () {
                        var t = this.isMultiple && this.lazyValue ? this.lazyValue.length : this.lazyValue instanceof File ? 1 : 0;
                        if (!this.showSize) return this.$vuetify.lang.t(this.counterString, t);
                        var e = this.internalArrayValue.reduce(function (t, e) {
                            return t + e.size
                        }, 0);
                        return this.$vuetify.lang.t(this.counterSizeString, t, rt(e, 1024 === this.base))
                    },
                    internalArrayValue: function () {
                        return Array.isArray(this.internalValue) ? this.internalValue : J(this.internalValue)
                    },
                    internalValue: {
                        get: function () {
                            return this.lazyValue
                        },
                        set: function (t) {
                            this.lazyValue = t, this.$emit("change", this.lazyValue)
                        }
                    },
                    isDirty: function () {
                        return this.internalArrayValue.length > 0
                    },
                    isLabelActive: function () {
                        return this.isDirty
                    },
                    isMultiple: function () {
                        return this.$attrs.hasOwnProperty("multiple")
                    },
                    text: function () {
                        var t = this;
                        return this.isDirty ? this.internalArrayValue.map(function (e) {
                            var i = t.truncateText(e.name);
                            return t.showSize ? i + " (" + rt(e.size, 1024 === t.base) + ")" : i
                        }) : [this.placeholder]
                    },
                    base: function () {
                        return "boolean" != typeof this.showSize ? this.showSize : void 0
                    },
                    hasChips: function () {
                        return this.chips || this.smallChips
                    }
                },
                watch: {
                    readonly: {
                        handler: function (t) {
                            !0 === t && b("readonly is not supported on <v-file-input>", this)
                        },
                        immediate: !0
                    },
                    value: function (t) {
                        var e = this.isMultiple ? t : t ? [t] : [];
                        L(e, this.$refs.input.files) || (this.$refs.input.value = "")
                    }
                },
                methods: {
                    clearableCallback: function () {
                        this.internalValue = this.isMultiple ? [] : null, this.$refs.input.value = ""
                    },
                    genChips: function () {
                        var t = this;
                        return this.isDirty ? this.text.map(function (e, i) {
                            return t.$createElement(qe, {
                                props: {
                                    small: t.smallChips
                                },
                                on: {
                                    "click:close": function () {
                                        var e = t.internalValue;
                                        e.splice(i, 1), t.internalValue = e
                                    }
                                }
                            }, [e])
                        }) : []
                    },
                    genInput: function () {
                        var t = nl.options.methods.genInput.call(this);
                        return delete t.data.domProps.value, delete t.data.on.input, t.data.on.change = this.onInput, [this.genSelections(), t]
                    },
                    genPrependSlot: function () {
                        var t = this;
                        if (!this.prependIcon) return null;
                        var e = this.genIcon("prepend", function () {
                            t.$refs.input.click()
                        });
                        return this.genSlot("prepend", "outer", [e])
                    },
                    genSelectionText: function () {
                        var t = this.text.length;
                        return t < 2 ? this.text : this.showSize && !this.counter ? [this.counterValue] : [this.$vuetify.lang.t(this.counterString, t)]
                    },
                    genSelections: function () {
                        var t = this,
                            e = [];
                        return this.isDirty && this.$scopedSlots.selection ? this.internalArrayValue.forEach(function (i, n) {
                            t.$scopedSlots.selection && e.push(t.$scopedSlots.selection({
                                text: t.text[n],
                                file: i,
                                index: n
                            }))
                        }) : e.push(this.hasChips && this.isDirty ? this.genChips() : this.genSelectionText()), this.$createElement("div", {
                            staticClass: "v-file-input__text",
                            class: {
                                "v-file-input__text--placeholder": this.placeholder && !this.isDirty, "v-file-input__text--chips": this.hasChips && !this.$scopedSlots.selection
                            },
                            on: {
                                click: function () {
                                    return t.$refs.input.click()
                                }
                            }
                        }, e)
                    },
                    onInput: function (t) {
                        var e = al(t.target.files || []);
                        this.internalValue = this.isMultiple ? e : e[0], this.initialValue = this.internalValue
                    },
                    onKeyDown: function (t) {
                        this.$emit("keydown", t)
                    },
                    truncateText: function (t) {
                        if (t.length < Number(this.truncateLength)) return t;
                        var e = Math.floor((Number(this.truncateLength) - 1) / 2);
                        return t.slice(0, e) + "…" + t.slice(t.length - e)
                    }
                }
            }),
            ul = (i(73), function () {
                return (ul = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            cl = d(ut, $t("footer", ["height", "inset"]), Ot).extend({
                name: "v-footer",
                props: {
                    height: {
                        default: "auto",
                        type: [Number, String]
                    },
                    inset: Boolean,
                    padless: Boolean,
                    tile: {
                        type: Boolean,
                        default: !0
                    }
                },
                computed: {
                    applicationProperty: function () {
                        return this.inset ? "insetFooter" : "footer"
                    },
                    classes: function () {
                        return ul({}, ut.options.computed.classes.call(this), {
                            "v-footer--absolute": this.absolute,
                            "v-footer--fixed": !this.absolute && (this.app || this.fixed),
                            "v-footer--padless": this.padless,
                            "v-footer--inset": this.inset
                        })
                    },
                    computedBottom: function () {
                        if (this.isPositioned) return this.app ? this.$vuetify.application.bottom : 0
                    },
                    computedLeft: function () {
                        if (this.isPositioned) return this.app && this.inset ? this.$vuetify.application.left : 0
                    },
                    computedRight: function () {
                        if (this.isPositioned) return this.app && this.inset ? this.$vuetify.application.right : 0
                    },
                    isPositioned: function () {
                        return Boolean(this.absolute || this.fixed || this.app)
                    },
                    styles: function () {
                        var t = parseInt(this.height);
                        return ul({}, ut.options.computed.styles.call(this), {
                            height: isNaN(t) ? t : Y(t),
                            left: Y(this.computedLeft),
                            right: Y(this.computedRight),
                            bottom: Y(this.computedBottom)
                        })
                    }
                },
                methods: {
                    updateApplication: function () {
                        var t = parseInt(this.height);
                        return isNaN(t) ? this.$el ? this.$el.clientHeight : 0 : t
                    }
                },
                render: function (t) {
                    return t("footer", this.setBackgroundColor(this.color, {
                        staticClass: "v-footer",
                        class: this.classes,
                        style: this.styles
                    }), this.$slots.default)
                }
            }),
            hl = function () {
                return (hl = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            dl = d(m, Wt("form")).extend({
                name: "v-form",
                inheritAttrs: !1,
                props: {
                    lazyValidation: Boolean,
                    value: Boolean
                },
                data: function () {
                    return {
                        inputs: [],
                        watchers: [],
                        errorBag: {}
                    }
                },
                watch: {
                    errorBag: {
                        handler: function (t) {
                            var e = Object.values(t).includes(!0);
                            this.$emit("input", !e)
                        },
                        deep: !0,
                        immediate: !0
                    }
                },
                methods: {
                    watchInput: function (t) {
                        var e = this,
                            i = function (t) {
                                return t.$watch("hasError", function (i) {
                                    e.$set(e.errorBag, t._uid, i)
                                }, {
                                    immediate: !0
                                })
                            },
                            n = {
                                _uid: t._uid,
                                valid: function () {},
                                shouldValidate: function () {}
                            };
                        return this.lazyValidation ? n.shouldValidate = t.$watch("shouldValidate", function (s) {
                            s && (e.errorBag.hasOwnProperty(t._uid) || (n.valid = i(t)))
                        }) : n.valid = i(t), n
                    },
                    validate: function () {
                        return 0 === this.inputs.filter(function (t) {
                            return !t.validate(!0)
                        }).length
                    },
                    reset: function () {
                        this.inputs.forEach(function (t) {
                            return t.reset()
                        }), this.resetErrorBag()
                    },
                    resetErrorBag: function () {
                        var t = this;
                        this.lazyValidation && setTimeout(function () {
                            t.errorBag = {}
                        }, 0)
                    },
                    resetValidation: function () {
                        this.inputs.forEach(function (t) {
                            return t.resetValidation()
                        }), this.resetErrorBag()
                    },
                    register: function (t) {
                        this.inputs.push(t), this.watchers.push(this.watchInput(t))
                    },
                    unregister: function (t) {
                        var e = this.inputs.find(function (e) {
                            return e._uid === t._uid
                        });
                        if (e) {
                            var i = this.watchers.find(function (t) {
                                return t._uid === e._uid
                            });
                            i && (i.valid(), i.shouldValidate()), this.watchers = this.watchers.filter(function (t) {
                                return t._uid !== e._uid
                            }), this.inputs = this.inputs.filter(function (t) {
                                return t._uid !== e._uid
                            }), this.$delete(this.errorBag, e._uid)
                        }
                    }
                },
                render: function (t) {
                    var e = this;
                    return t("form", {
                        staticClass: "v-form",
                        attrs: hl({
                            novalidate: !0
                        }, this.attrs$),
                        on: {
                            submit: function (t) {
                                return e.$emit("submit", t)
                            }
                        }
                    }, this.$slots.default)
                }
            });
        i(2), i(5);

        function pl(t) {
            return a.a.extend({
                name: "v-" + t,
                functional: !0,
                props: {
                    id: String,
                    tag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function (e, i) {
                    var n = i.props,
                        s = i.data,
                        r = i.children;
                    s.staticClass = (t + " " + (s.staticClass || "")).trim();
                    var o = s.attrs;
                    if (o) {
                        s.attrs = {};
                        var a = Object.keys(o).filter(function (t) {
                            if ("slot" === t) return !1;
                            var e = o[t];
                            return t.startsWith("data-") ? (s.attrs[t] = e, !1) : e || "string" == typeof e
                        });
                        a.length && (s.staticClass += " " + a.join(" "))
                    }
                    return n.id && (s.domProps = s.domProps || {}, s.domProps.id = n.id), e(n.tag, s, r)
                }
            })
        }
        var fl = pl("container").extend({
                name: "v-container",
                functional: !0,
                props: {
                    id: String,
                    tag: {
                        type: String,
                        default: "div"
                    },
                    fluid: {
                        type: Boolean,
                        default: !1
                    }
                },
                render: function (t, e) {
                    var i, n = e.props,
                        s = e.data,
                        r = e.children,
                        o = s.attrs;
                    return o && (s.attrs = {}, i = Object.keys(o).filter(function (t) {
                        if ("slot" === t) return !1;
                        var e = o[t];
                        return t.startsWith("data-") ? (s.attrs[t] = e, !1) : e || "string" == typeof e
                    })), n.id && (s.domProps = s.domProps || {}, s.domProps.id = n.id), t(n.tag, be(s, {
                        staticClass: "container",
                        class: Array({
                            "container--fluid": n.fluid
                        }).concat(i || [])
                    }), r)
                }
            }),
            vl = function () {
                return (vl = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            ml = ["sm", "md", "lg", "xl"],
            gl = ml.reduce(function (t, e) {
                return t[e] = {
                    type: [Boolean, String, Number],
                    default: !1
                }, t
            }, {}),
            yl = ml.reduce(function (t, e) {
                return t["offset" + K(e)] = {
                    type: [String, Number],
                    default: null
                }, t
            }, {}),
            bl = ml.reduce(function (t, e) {
                return t["order" + K(e)] = {
                    type: [String, Number],
                    default: null
                }, t
            }, {}),
            Sl = {
                col: Object.keys(gl),
                offset: Object.keys(yl),
                order: Object.keys(bl)
            };

        function xl(t, e, i) {
            var n = t;
            if (null != i && !1 !== i) {
                if (e) n += "-" + e.replace(t, "");
                return "col" !== t || "" !== i && !0 !== i ? (n += "-" + i).toLowerCase() : n.toLowerCase()
            }
        }
        var wl = new Map,
            Cl = a.a.extend({
                name: "v-col",
                functional: !0,
                props: vl({
                    cols: {
                        type: [Boolean, String, Number],
                        default: !1
                    }
                }, gl, {
                    offset: {
                        type: [String, Number],
                        default: null
                    }
                }, yl, {
                    order: {
                        type: [String, Number],
                        default: null
                    }
                }, bl, {
                    alignSelf: {
                        type: String,
                        default: null,
                        validator: function (t) {
                            return ["auto", "start", "end", "center", "baseline", "stretch"].includes(t)
                        }
                    },
                    justifySelf: {
                        type: String,
                        default: null,
                        validator: function (t) {
                            return ["auto", "start", "end", "center", "baseline", "stretch"].includes(t)
                        }
                    },
                    tag: {
                        type: String,
                        default: "div"
                    }
                }),
                render: function (t, e) {
                    var i, n = e.props,
                        s = e.data,
                        r = e.children,
                        o = (e.parent, "");
                    for (var a in n) o += String(n[a]);
                    var l = wl.get(o);
                    if (!l) {
                        var u;
                        for (u in l = [], Sl) Sl[u].forEach(function (t) {
                            var e = n[t],
                                i = xl(u, t, e);
                            i && l.push(i)
                        });
                        var c = l.some(function (t) {
                            return t.startsWith("col-")
                        });
                        l.push(((i = {
                            col: !c || !n.cols
                        })["col-" + n.cols] = n.cols, i["offset-" + n.offset] = n.offset, i["order-" + n.order] = n.order, i["align-self-" + n.alignSelf] = n.alignSelf, i["justify-self-" + n.justifySelf] = n.justifySelf, i)), wl.set(o, l)
                    }
                    return t(n.tag, be(s, {
                        class: l
                    }), r)
                }
            }),
            kl = function () {
                return (kl = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            $l = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            Il = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat($l(arguments[e]));
                return t
            },
            Ol = ["sm", "md", "lg", "xl"],
            _l = ["start", "end", "center"];

        function Tl(t, e) {
            return Ol.reduce(function (i, n) {
                return i[t + K(n)] = e(), i
            }, {})
        }
        var Bl = function (t) {
                return Il(_l, ["baseline", "stretch"]).includes(t)
            },
            Al = Tl("align", function () {
                return {
                    type: String,
                    default: null,
                    validator: Bl
                }
            }),
            El = function (t) {
                return Il(_l, ["space-between", "space-around"]).includes(t)
            },
            Ml = Tl("justify", function () {
                return {
                    type: String,
                    default: null,
                    validator: El
                }
            }),
            Dl = function (t) {
                return Il(_l, ["space-between", "space-around", "stretch"]).includes(t)
            },
            Vl = Tl("alignContent", function () {
                return {
                    type: String,
                    default: null,
                    validator: Dl
                }
            }),
            Pl = {
                align: Object.keys(Al),
                justify: Object.keys(Ml),
                alignContent: Object.keys(Vl)
            },
            Ll = {
                align: "align",
                justify: "justify",
                alignContent: "align-content"
            };

        function Hl(t, e, i) {
            var n = Ll[t];
            if (null != i) {
                if (e) n += "-" + e.replace(t, "");
                return (n += "-" + i).toLowerCase()
            }
        }
        var jl = new Map,
            Nl = a.a.extend({
                name: "v-row",
                functional: !0,
                props: kl({
                    tag: {
                        type: String,
                        default: "div"
                    },
                    dense: Boolean,
                    noGutters: Boolean,
                    align: {
                        type: String,
                        default: null,
                        validator: Bl
                    }
                }, Al, {
                    justify: {
                        type: String,
                        default: null,
                        validator: El
                    }
                }, Ml, {
                    alignContent: {
                        type: String,
                        default: null,
                        validator: Dl
                    }
                }, Vl),
                render: function (t, e) {
                    var i, n = e.props,
                        s = e.data,
                        r = e.children,
                        o = "";
                    for (var a in n) o += String(n[a]);
                    var l = jl.get(o);
                    if (!l) {
                        var u;
                        for (u in l = [], Pl) Pl[u].forEach(function (t) {
                            var e = n[t],
                                i = Hl(u, t, e);
                            i && l.push(i)
                        });
                        l.push(((i = {
                            "no-gutters": n.noGutters,
                            "row--dense": n.dense
                        })["align-" + n.align] = n.align, i["justify-" + n.justify] = n.justify, i["align-content-" + n.alignContent] = n.alignContent, i)), jl.set(o, l)
                    }
                    return t(n.tag, be(s, {
                        staticClass: "row",
                        class: l
                    }), r)
                }
            }),
            Fl = E("spacer", "div", "v-spacer"),
            zl = pl("layout"),
            Wl = pl("flex"),
            Rl = d(Ze, Bt).extend({
                name: "v-hover",
                props: {
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    value: {
                        type: Boolean,
                        default: void 0
                    }
                },
                methods: {
                    onMouseEnter: function () {
                        this.runDelay("open")
                    },
                    onMouseLeave: function () {
                        this.runDelay("close")
                    }
                },
                render: function () {
                    return this.$scopedSlots.default || void 0 !== this.value ? (this.$scopedSlots.default && (t = this.$scopedSlots.default({
                        hover: this.isActive
                    })), Array.isArray(t) && 1 === t.length && (t = t[0]), t && !Array.isArray(t) && t.tag ? (this.disabled || (t.data = t.data || {}, this._g(t.data, {
                        mouseenter: this.onMouseEnter,
                        mouseleave: this.onMouseLeave
                    })), t) : (y("v-hover should only contain a single element", this), t)) : (y("v-hover is missing a default scopedSlot or bound value", this), null);
                    var t
                }
            }),
            Yl = a.a.extend({
                props: {
                    activeClass: String,
                    value: {
                        required: !1
                    }
                },
                data: function () {
                    return {
                        isActive: !1
                    }
                },
                methods: {
                    toggle: function () {
                        this.isActive = !this.isActive
                    }
                },
                render: function () {
                    var t, e;
                    return this.$scopedSlots.default ? (this.$scopedSlots.default && (e = this.$scopedSlots.default({
                        active: this.isActive,
                        toggle: this.toggle
                    })), Array.isArray(e) && 1 === e.length && (e = e[0]), e && !Array.isArray(e) && e.tag ? (e.data = this._b(e.data || {}, e.tag, {
                        class: (t = {}, t[this.activeClass] = this.isActive, t)
                    }), e) : (y("v-item should only contain a single element", this), e)) : (y("v-item is missing a default scopedSlot", this), null)
                }
            }),
            Gl = d(Yl, Rt("itemGroup", "v-item", "v-item-group")).extend({
                name: "v-item"
            }),
            Ul = d(Bt).extend({
                name: "VLazy",
                directives: {
                    intersect: pt
                },
                props: {
                    minHeight: [Number, String],
                    options: {
                        type: Object,
                        default: function () {
                            return {
                                root: void 0,
                                rootMargin: void 0,
                                threshold: void 0
                            }
                        }
                    },
                    transition: {
                        type: String,
                        default: "fade-transition"
                    }
                },
                computed: {
                    styles: function () {
                        return {
                            minHeight: parseInt(this.minHeight) ? Y(this.minHeight) : this.minHeight
                        }
                    }
                },
                methods: {
                    genContent: function () {
                        var t = it(this);
                        if (!this.transition) return t;
                        var e = [];
                        return this.isActive && e.push(t), this.$createElement("transition", {
                            props: {
                                name: this.transition
                            }
                        }, e)
                    },
                    onObserve: function (t, e, i) {
                        this.isActive || (this.isActive = i)
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-lazy",
                        attrs: this.$attrs,
                        directives: [{
                            name: "intersect",
                            value: {
                                handler: this.onObserve,
                                options: this.options
                            }
                        }],
                        on: this.$listeners,
                        style: this.styles
                    }, [this.genContent()])
                }
            }),
            ql = (i(74), function () {
                return (ql = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Xl = d($t("left", ["isActive", "isMobile", "miniVariant", "expandOnHover", "permanent", "right", "temporary", "width"]), _, Qe, qn, Ot, h).extend({
                name: "v-navigation-drawer",
                provide: function () {
                    return {
                        isInNav: "nav" === this.tag
                    }
                },
                directives: {
                    ClickOutside: pi,
                    Resize: vi,
                    Touch: mr
                },
                props: {
                    bottom: Boolean,
                    clipped: Boolean,
                    disableResizeWatcher: Boolean,
                    disableRouteWatcher: Boolean,
                    expandOnHover: Boolean,
                    floating: Boolean,
                    height: {
                        type: [Number, String],
                        default: function () {
                            return this.app ? "100vh" : "100%"
                        }
                    },
                    miniVariant: Boolean,
                    miniVariantWidth: {
                        type: [Number, String],
                        default: 80
                    },
                    mobileBreakPoint: {
                        type: [Number, String],
                        default: 1264
                    },
                    permanent: Boolean,
                    right: Boolean,
                    src: {
                        type: [String, Object],
                        default: ""
                    },
                    stateless: Boolean,
                    tag: {
                        type: String,
                        default: function () {
                            return this.app ? "nav" : "aside"
                        }
                    },
                    temporary: Boolean,
                    touchless: Boolean,
                    width: {
                        type: [Number, String],
                        default: 256
                    },
                    value: {
                        required: !1
                    }
                },
                data: function () {
                    return {
                        isMouseover: !1,
                        touchArea: {
                            left: 0,
                            right: 0
                        },
                        stackMinZIndex: 6
                    }
                },
                computed: {
                    applicationProperty: function () {
                        return this.right ? "right" : "left"
                    },
                    classes: function () {
                        return ql({
                            "v-navigation-drawer": !0,
                            "v-navigation-drawer--absolute": this.absolute,
                            "v-navigation-drawer--bottom": this.bottom,
                            "v-navigation-drawer--clipped": this.clipped,
                            "v-navigation-drawer--close": !this.isActive,
                            "v-navigation-drawer--fixed": !this.absolute && (this.app || this.fixed),
                            "v-navigation-drawer--floating": this.floating,
                            "v-navigation-drawer--is-mobile": this.isMobile,
                            "v-navigation-drawer--is-mouseover": this.isMouseover,
                            "v-navigation-drawer--mini-variant": this.isMiniVariant,
                            "v-navigation-drawer--open": this.isActive,
                            "v-navigation-drawer--open-on-hover": this.expandOnHover,
                            "v-navigation-drawer--right": this.right,
                            "v-navigation-drawer--temporary": this.temporary
                        }, this.themeClasses)
                    },
                    computedMaxHeight: function () {
                        if (!this.hasApp) return null;
                        var t = this.$vuetify.application.bottom + this.$vuetify.application.footer + this.$vuetify.application.bar;
                        return this.clipped ? t + this.$vuetify.application.top : t
                    },
                    computedTop: function () {
                        if (!this.hasApp) return 0;
                        var t = this.$vuetify.application.bar;
                        return t += this.clipped ? this.$vuetify.application.top : 0, t
                    },
                    computedTransform: function () {
                        return this.isActive ? 0 : this.isBottom ? 100 : this.right ? 100 : -100
                    },
                    computedWidth: function () {
                        return this.isMiniVariant ? this.miniVariantWidth : this.width
                    },
                    hasApp: function () {
                        return this.app && !this.isMobile && !this.temporary
                    },
                    isBottom: function () {
                        return this.bottom && this.isMobile
                    },
                    isMiniVariant: function () {
                        return !this.expandOnHover && this.miniVariant || this.expandOnHover && !this.isMouseover
                    },
                    isMobile: function () {
                        return !this.stateless && !this.permanent && this.$vuetify.breakpoint.width < parseInt(this.mobileBreakPoint, 10)
                    },
                    reactsToClick: function () {
                        return !this.stateless && !this.permanent && (this.isMobile || this.temporary)
                    },
                    reactsToMobile: function () {
                        return this.app && !this.disableResizeWatcher && !this.permanent && !this.stateless && !this.temporary
                    },
                    reactsToResize: function () {
                        return !this.disableResizeWatcher && !this.stateless
                    },
                    reactsToRoute: function () {
                        return !this.disableRouteWatcher && !this.stateless && (this.temporary || this.isMobile)
                    },
                    showOverlay: function () {
                        return this.isActive && (this.isMobile || this.temporary)
                    },
                    styles: function () {
                        var t = this.isBottom ? "translateY" : "translateX",
                            e = {
                                height: Y(this.height),
                                top: this.isBottom ? "auto" : Y(this.computedTop),
                                maxHeight: null != this.computedMaxHeight ? "calc(100% - " + Y(this.computedMaxHeight) + ")" : void 0,
                                transform: t + "(" + Y(this.computedTransform, "%") + ")",
                                width: Y(this.computedWidth)
                            };
                        return e
                    }
                },
                watch: {
                    $route: "onRouteChange",
                    isActive: function (t) {
                        this.$emit("input", t)
                    },
                    isMobile: function (t, e) {
                        !t && this.isActive && !this.temporary && this.removeOverlay(), null != e && this.reactsToResize && this.reactsToMobile && (this.isActive = !t)
                    },
                    permanent: function (t) {
                        t && (this.isActive = !0)
                    },
                    showOverlay: function (t) {
                        t ? this.genOverlay() : this.removeOverlay()
                    },
                    value: function (t) {
                        this.permanent || (null != t ? t !== this.isActive && (this.isActive = t) : this.init())
                    },
                    expandOnHover: "updateMiniVariant",
                    isMouseover: function (t) {
                        this.updateMiniVariant(!t)
                    }
                },
                beforeMount: function () {
                    this.init()
                },
                methods: {
                    calculateTouchArea: function () {
                        var t = this.$el.parentNode;
                        if (t) {
                            var e = t.getBoundingClientRect();
                            this.touchArea = {
                                left: e.left + 50,
                                right: e.right - 50
                            }
                        }
                    },
                    closeConditional: function () {
                        return this.isActive && !this._isDestroyed && this.reactsToClick
                    },
                    genAppend: function () {
                        return this.genPosition("append")
                    },
                    genBackground: function () {
                        var t = {
                                height: "100%",
                                width: "100%",
                                src: this.src
                            },
                            e = this.$scopedSlots.img ? this.$scopedSlots.img(t) : this.$createElement(mt, {
                                props: t
                            });
                        return this.$createElement("div", {
                            staticClass: "v-navigation-drawer__image"
                        }, [e])
                    },
                    genDirectives: function () {
                        var t = this,
                            e = [{
                                name: "click-outside",
                                value: function () {
                                    return t.isActive = !1
                                },
                                args: {
                                    closeConditional: this.closeConditional,
                                    include: this.getOpenDependentElements
                                }
                            }];
                        return this.touchless || this.stateless || e.push({
                            name: "touch",
                            value: {
                                parent: !0,
                                left: this.swipeLeft,
                                right: this.swipeRight
                            }
                        }), e
                    },
                    genListeners: function () {
                        var t = this,
                            e = {
                                transitionend: function (e) {
                                    if (e.target === e.currentTarget) {
                                        t.$emit("transitionend", e);
                                        var i = document.createEvent("UIEvents");
                                        i.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(i)
                                    }
                                }
                            };
                        return this.miniVariant && (e.click = function () {
                            return t.$emit("update:mini-variant", !1)
                        }), this.expandOnHover && (e.mouseenter = function () {
                            return t.isMouseover = !0
                        }, e.mouseleave = function () {
                            return t.isMouseover = !1
                        }), e
                    },
                    genPosition: function (t) {
                        var e = it(this, t);
                        return e ? this.$createElement("div", {
                            staticClass: "v-navigation-drawer__" + t
                        }, e) : e
                    },
                    genPrepend: function () {
                        return this.genPosition("prepend")
                    },
                    genContent: function () {
                        return this.$createElement("div", {
                            staticClass: "v-navigation-drawer__content"
                        }, this.$slots.default)
                    },
                    genBorder: function () {
                        return this.$createElement("div", {
                            staticClass: "v-navigation-drawer__border"
                        })
                    },
                    init: function () {
                        this.permanent ? this.isActive = !0 : this.stateless || null != this.value ? this.isActive = this.value : this.temporary || (this.isActive = !this.isMobile)
                    },
                    onRouteChange: function () {
                        this.reactsToRoute && this.closeConditional() && (this.isActive = !1)
                    },
                    swipeLeft: function (t) {
                        this.isActive && this.right || (this.calculateTouchArea(), Math.abs(t.touchendX - t.touchstartX) < 100 || (this.right && t.touchstartX >= this.touchArea.right ? this.isActive = !0 : !this.right && this.isActive && (this.isActive = !1)))
                    },
                    swipeRight: function (t) {
                        this.isActive && !this.right || (this.calculateTouchArea(), Math.abs(t.touchendX - t.touchstartX) < 100 || (!this.right && t.touchstartX <= this.touchArea.left ? this.isActive = !0 : this.right && this.isActive && (this.isActive = !1)))
                    },
                    updateApplication: function () {
                        if (!this.isActive || this.isMobile || this.temporary || !this.$el) return 0;
                        var t = Number(this.computedWidth);
                        return isNaN(t) ? this.$el.clientWidth : t
                    },
                    updateMiniVariant: function (t) {
                        this.miniVariant !== t && this.$emit("update:mini-variant", t)
                    }
                },
                render: function (t) {
                    var e = [this.genPrepend(), this.genContent(), this.genAppend(), this.genBorder()];
                    return (this.src || it(this, "img")) && e.unshift(this.genBackground()), t(this.tag, this.setBackgroundColor(this.color, {
                        class: this.classes,
                        style: this.styles,
                        directives: this.genDirectives(),
                        on: this.genListeners()
                    }), e)
                }
            }),
            Zl = (i(75), function () {
                return (Zl = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Kl = Hn.extend({
                name: "v-overflow-btn",
                props: {
                    editable: Boolean,
                    segmented: Boolean
                },
                computed: {
                    classes: function () {
                        return Zl({}, Hn.options.computed.classes.call(this), {
                            "v-overflow-btn": !0,
                            "v-overflow-btn--segmented": this.segmented,
                            "v-overflow-btn--editable": this.editable
                        })
                    },
                    isAnyValueAllowed: function () {
                        return this.editable || Hn.options.computed.isAnyValueAllowed.call(this)
                    },
                    isSingle: function () {
                        return !0
                    },
                    computedItems: function () {
                        return this.segmented ? this.allItems : this.filteredItems
                    }
                },
                methods: {
                    genSelections: function () {
                        return this.editable ? Hn.options.methods.genSelections.call(this) : Dn.options.methods.genSelections.call(this)
                    },
                    genCommaSelection: function (t, e, i) {
                        return this.segmented ? this.genSegmentedBtn(t) : Dn.options.methods.genCommaSelection.call(this, t, e, i)
                    },
                    genInput: function () {
                        var t = _n.options.methods.genInput.call(this);
                        return t.data = t.data || {}, t.data.domProps.value = this.editable ? this.internalSearch : "", t.data.attrs.readonly = !this.isAnyValueAllowed, t
                    },
                    genLabel: function () {
                        if (this.editable && this.isFocused) return null;
                        var t = _n.options.methods.genLabel.call(this);
                        return t ? (t.data = t.data || {}, t.data.style = {}, t) : t
                    },
                    genSegmentedBtn: function (t) {
                        var e = this,
                            i = this.getValue(t),
                            n = this.computedItems.find(function (t) {
                                return e.getValue(t) === i
                            }) || t;
                        return n.text && n.callback ? this.$createElement(ce, {
                            props: {
                                text: !0
                            },
                            on: {
                                click: function (t) {
                                    t.stopPropagation(), n.callback(t)
                                }
                            }
                        }, [n.text]) : (y("When using 'segmented' prop without a selection slot, items must contain both a text and callback property", this), null)
                    }
                }
            }),
            Jl = (i(76), function () {
                return (Jl = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Ql = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            tu = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Ql(arguments[e]));
                return t
            },
            eu = d(_, h).extend({
                name: "v-pagination",
                directives: {
                    Resize: vi
                },
                props: {
                    circle: Boolean,
                    disabled: Boolean,
                    length: {
                        type: Number,
                        default: 0,
                        validator: function (t) {
                            return t % 1 == 0
                        }
                    },
                    nextIcon: {
                        type: String,
                        default: "$next"
                    },
                    prevIcon: {
                        type: String,
                        default: "$prev"
                    },
                    totalVisible: [Number, String],
                    value: {
                        type: Number,
                        default: 0
                    }
                },
                data: function () {
                    return {
                        maxButtons: 0,
                        selected: null
                    }
                },
                computed: {
                    classes: function () {
                        return Jl({
                            "v-pagination": !0,
                            "v-pagination--circle": this.circle,
                            "v-pagination--disabled": this.disabled
                        }, this.themeClasses)
                    },
                    items: function () {
                        var t = parseInt(this.totalVisible, 10),
                            e = Math.min(Math.max(0, t) || this.length, Math.max(0, this.maxButtons) || this.length, this.length);
                        if (this.length <= e) return this.range(1, this.length);
                        var i = e % 2 == 0 ? 1 : 0,
                            n = Math.floor(e / 2),
                            s = this.length - n + 1 + i;
                        if (this.value > n && this.value < s) {
                            var r = this.value - n + 2,
                                o = this.value + n - 2 - i;
                            return tu([1, "..."], this.range(r, o), ["...", this.length])
                        }
                        if (this.value === n) {
                            o = this.value + n - 1 - i;
                            return tu(this.range(1, o), ["...", this.length])
                        }
                        if (this.value === s) {
                            r = this.value - n + 1;
                            return tu([1, "..."], this.range(r, this.length))
                        }
                        return tu(this.range(1, n), ["..."], this.range(s, this.length))
                    }
                },
                watch: {
                    value: function () {
                        this.init()
                    }
                },
                mounted: function () {
                    this.init()
                },
                methods: {
                    init: function () {
                        var t = this;
                        this.selected = null, this.$nextTick(this.onResize), setTimeout(function () {
                            return t.selected = t.value
                        }, 100)
                    },
                    onResize: function () {
                        var t = this.$el && this.$el.parentElement ? this.$el.parentElement.clientWidth : window.innerWidth;
                        this.maxButtons = Math.floor((t - 96) / 42)
                    },
                    next: function (t) {
                        t.preventDefault(), this.$emit("input", this.value + 1), this.$emit("next")
                    },
                    previous: function (t) {
                        t.preventDefault(), this.$emit("input", this.value - 1), this.$emit("previous")
                    },
                    range: function (t, e) {
                        for (var i = [], n = t = t > 0 ? t : 1; n <= e; n++) i.push(n);
                        return i
                    },
                    genIcon: function (t, e, i, n) {
                        return t("li", [t("button", {
                            staticClass: "v-pagination__navigation",
                            class: {
                                "v-pagination__navigation--disabled": i
                            },
                            attrs: {
                                type: "button"
                            },
                            on: i ? {} : {
                                click: n
                            }
                        }, [t(Lt, [e])])])
                    },
                    genItem: function (t, e) {
                        var i = this,
                            n = e === this.value && (this.color || "primary");
                        return t("button", this.setBackgroundColor(n, {
                            staticClass: "v-pagination__item",
                            class: {
                                "v-pagination__item--active": e === this.value
                            },
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function () {
                                    return i.$emit("input", e)
                                }
                            }
                        }), [e.toString()])
                    },
                    genItems: function (t) {
                        var e = this;
                        return this.items.map(function (i, n) {
                            return t("li", {
                                key: n
                            }, [isNaN(Number(i)) ? t("span", {
                                class: "v-pagination__more"
                            }, [i.toString()]) : e.genItem(t, i)])
                        })
                    }
                },
                render: function (t) {
                    var e = [this.genIcon(t, this.$vuetify.rtl ? this.nextIcon : this.prevIcon, this.value <= 1, this.previous), this.genItems(t), this.genIcon(t, this.$vuetify.rtl ? this.prevIcon : this.nextIcon, this.value >= this.length, this.next)];
                    return t("ul", {
                        directives: [{
                            modifiers: {
                                quiet: !0
                            },
                            name: "resize",
                            value: this.onResize
                        }],
                        class: this.classes
                    }, e)
                }
            }),
            iu = (i(77), d(a.a.extend({
                name: "translatable",
                props: {
                    height: Number
                },
                data: function () {
                    return {
                        elOffsetTop: 0,
                        parallax: 0,
                        parallaxDist: 0,
                        percentScrolled: 0,
                        scrollTop: 0,
                        windowHeight: 0,
                        windowBottom: 0
                    }
                },
                computed: {
                    imgHeight: function () {
                        return this.objHeight()
                    }
                },
                beforeDestroy: function () {
                    window.removeEventListener("scroll", this.translate, !1), window.removeEventListener("resize", this.translate, !1)
                },
                methods: {
                    calcDimensions: function () {
                        var t = this.$el.getBoundingClientRect();
                        this.scrollTop = window.pageYOffset, this.parallaxDist = this.imgHeight - this.height, this.elOffsetTop = t.top + this.scrollTop, this.windowHeight = window.innerHeight, this.windowBottom = this.scrollTop + this.windowHeight
                    },
                    listeners: function () {
                        window.addEventListener("scroll", this.translate, !1), window.addEventListener("resize", this.translate, !1)
                    },
                    objHeight: function () {
                        throw new Error("Not implemented !")
                    },
                    translate: function () {
                        this.calcDimensions(), this.percentScrolled = (this.windowBottom - this.elOffsetTop) / (parseInt(this.height) + this.windowHeight), this.parallax = Math.round(this.parallaxDist * this.percentScrolled)
                    }
                }
            })).extend().extend({
                name: "v-parallax",
                props: {
                    alt: {
                        type: String,
                        default: ""
                    },
                    height: {
                        type: [String, Number],
                        default: 500
                    },
                    src: String
                },
                data: function () {
                    return {
                        isBooted: !1
                    }
                },
                computed: {
                    styles: function () {
                        return {
                            display: "block",
                            opacity: this.isBooted ? 1 : 0,
                            transform: "translate(-50%, " + this.parallax + "px)"
                        }
                    }
                },
                mounted: function () {
                    this.init()
                },
                methods: {
                    init: function () {
                        var t = this,
                            e = this.$refs.img;
                        e && (e.complete ? (this.translate(), this.listeners()) : e.addEventListener("load", function () {
                            t.translate(), t.listeners()
                        }, !1), this.isBooted = !0)
                    },
                    objHeight: function () {
                        return this.$refs.img.naturalHeight
                    }
                },
                render: function (t) {
                    var e = t("div", {
                            staticClass: "v-parallax__image-container"
                        }, [t("img", {
                            staticClass: "v-parallax__image",
                            style: this.styles,
                            attrs: {
                                src: this.src,
                                alt: this.alt
                            },
                            ref: "img"
                        })]),
                        i = t("div", {
                            staticClass: "v-parallax__content"
                        }, this.$slots.default);
                    return t("div", {
                        staticClass: "v-parallax",
                        style: {
                            height: this.height + "px"
                        },
                        on: this.$listeners
                    }, [e, i])
                }
            })),
            nu = (i(78), function () {
                return (nu = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            su = d(Tn, Yi, gn).extend({
                name: "v-radio-group",
                provide: function () {
                    return {
                        radioGroup: this
                    }
                },
                props: {
                    column: {
                        type: Boolean,
                        default: !0
                    },
                    height: {
                        type: [Number, String],
                        default: "auto"
                    },
                    name: String,
                    row: Boolean,
                    value: {
                        default: null
                    }
                },
                computed: {
                    classes: function () {
                        return nu({}, gn.options.computed.classes.call(this), {
                            "v-input--selection-controls v-input--radio-group": !0,
                            "v-input--radio-group--column": this.column && !this.row,
                            "v-input--radio-group--row": this.row
                        })
                    }
                },
                methods: {
                    genDefaultSlot: function () {
                        return this.$createElement("div", {
                            staticClass: "v-input--radio-group__input",
                            attrs: {
                                id: this.id,
                                role: "radiogroup",
                                "aria-labelledby": this.computedId
                            }
                        }, gn.options.methods.genDefaultSlot.call(this))
                    },
                    genInputSlot: function () {
                        var t = gn.options.methods.genInputSlot.call(this);
                        return delete t.data.on.click, t
                    },
                    genLabel: function () {
                        var t = gn.options.methods.genLabel.call(this);
                        return t ? (t.data.attrs.id = this.computedId, delete t.data.attrs.for, t.tag = "div", t) : null
                    },
                    onClick: Yi.options.methods.onClick
                }
            }),
            ru = (i(79), function () {
                return (ru = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            ou = d(m, _, kr, Rt("radioGroup"), h).extend().extend({
                name: "v-radio",
                inheritAttrs: !1,
                props: {
                    disabled: Boolean,
                    id: String,
                    label: String,
                    name: String,
                    offIcon: {
                        type: String,
                        default: "$radioOff"
                    },
                    onIcon: {
                        type: String,
                        default: "$radioOn"
                    },
                    readonly: Boolean,
                    value: {
                        default: null
                    }
                },
                data: function () {
                    return {
                        isFocused: !1
                    }
                },
                computed: {
                    classes: function () {
                        return ru({
                            "v-radio--is-disabled": this.isDisabled,
                            "v-radio--is-focused": this.isFocused
                        }, this.themeClasses, this.groupClasses)
                    },
                    computedColor: function () {
                        return $r.options.computed.computedColor.call(this)
                    },
                    computedIcon: function () {
                        return this.isActive ? this.onIcon : this.offIcon
                    },
                    computedId: function () {
                        return gn.options.computed.computedId.call(this)
                    },
                    hasLabel: gn.options.computed.hasLabel,
                    hasState: function () {
                        return (this.radioGroup || {}).hasState
                    },
                    isDisabled: function () {
                        return this.disabled || !!(this.radioGroup || {}).disabled
                    },
                    isReadonly: function () {
                        return this.readonly || !!(this.radioGroup || {}).readonly
                    },
                    computedName: function () {
                        return this.name || !this.radioGroup ? this.name : this.radioGroup.name || "radio-" + this.radioGroup._uid
                    },
                    validationState: function () {
                        return (this.radioGroup || {}).validationState || this.computedColor
                    }
                },
                methods: {
                    genInput: function (t) {
                        return $r.options.methods.genInput.call(this, "radio", t)
                    },
                    genLabel: function () {
                        var t = this;
                        return this.hasLabel ? this.$createElement(cn, {
                            on: {
                                click: function (e) {
                                    e.preventDefault(), t.onChange()
                                }
                            },
                            attrs: {
                                for: this.computedId
                            },
                            props: {
                                color: this.validationState,
                                focused: this.hasState
                            }
                        }, it(this, "label") || this.label) : null
                    },
                    genRadio: function () {
                        return this.$createElement("div", {
                            staticClass: "v-input--selection-controls__input"
                        }, [this.genInput(ru({
                            name: this.computedName,
                            value: this.value
                        }, this.attrs$)), this.genRipple(this.setTextColor(this.validationState)), this.$createElement(Lt, this.setTextColor(this.validationState, {
                            props: {
                                dense: this.radioGroup && this.radioGroup.dense
                            }
                        }), this.computedIcon)])
                    },
                    onFocus: function (t) {
                        this.isFocused = !0, this.$emit("focus", t)
                    },
                    onBlur: function (t) {
                        this.isFocused = !1, this.$emit("blur", t)
                    },
                    onChange: function () {
                        this.isDisabled || this.isReadonly || this.isActive || this.toggle()
                    },
                    onKeydown: function () {}
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-radio",
                        class: this.classes
                    }, [this.genRadio(), this.genLabel()])
                }
            }),
            au = (i(80), Dr),
            lu = function () {
                return (lu = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            uu = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            cu = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(uu(arguments[e]));
                return t
            },
            hu = au.extend({
                name: "v-range-slider",
                props: {
                    value: {
                        type: Array,
                        default: function () {
                            return [0, 0]
                        }
                    }
                },
                data: function () {
                    return {
                        activeThumb: null,
                        lazyValue: this.value
                    }
                },
                computed: {
                    classes: function () {
                        return lu({}, au.options.computed.classes.call(this), {
                            "v-input--range-slider": !0
                        })
                    },
                    internalValue: {
                        get: function () {
                            return this.lazyValue
                        },
                        set: function (t) {
                            var e = this,
                                i = t.map(function (t) {
                                    return e.roundValue(Math.min(Math.max(t, e.minValue), e.maxValue))
                                });
                            if (i[0] > i[1] || i[1] < i[0]) {
                                if (null !== this.activeThumb) {
                                    var n = 1 === this.activeThumb ? 0 : 1;
                                    this.$refs["thumb_" + n].focus()
                                }
                                i = [i[1], i[0]]
                            }
                            this.lazyValue = i, L(i, this.value) || this.$emit("input", i), this.validate()
                        }
                    },
                    inputWidth: function () {
                        var t = this;
                        return this.internalValue.map(function (e) {
                            return (t.roundValue(e) - t.minValue) / (t.maxValue - t.minValue) * 100
                        })
                    },
                    trackFillStyles: function () {
                        var t = au.options.computed.trackFillStyles.call(this),
                            e = Math.abs(this.inputWidth[0] - this.inputWidth[1]),
                            i = this.vertical ? "height" : "width",
                            n = this.vertical ? this.$vuetify.rtl ? "top" : "bottom" : this.$vuetify.rtl ? "right" : "left";
                        return t[i] = e + "%", t[n] = this.inputWidth[0] + "%", t
                    }
                },
                methods: {
                    getTrackStyle: function (t, e, i, n) {
                        var s;
                        void 0 === i && (i = 0), void 0 === n && (n = 0);
                        var r = this.vertical ? this.$vuetify.rtl ? "top" : "bottom" : this.$vuetify.rtl ? "right" : "left",
                            o = this.vertical ? "height" : "width",
                            a = "calc(" + t + "% + " + i + "px)",
                            l = "calc(" + e + "% + " + n + "px)";
                        return (s = {
                            transition: this.trackTransition
                        })[r] = a, s[o] = l, s
                    },
                    getIndexOfClosestValue: function (t, e) {
                        return Math.abs(t[0] - e) < Math.abs(t[1] - e) ? 0 : 1
                    },
                    genInput: function () {
                        var t = this;
                        return N(2).map(function (e) {
                            var i = au.options.methods.genInput.call(t);
                            return i.data = i.data || {}, i.data.attrs = i.data.attrs || {}, i.data.attrs.value = t.internalValue[e], i
                        })
                    },
                    genTrackContainer: function () {
                        var t = this,
                            e = [];
                        if (this.disabled) {
                            var i = [
                                [0, this.inputWidth[0], 0, -10],
                                [this.inputWidth[0], Math.abs(this.inputWidth[1] - this.inputWidth[0]), 10, -20],
                                [this.inputWidth[1], Math.abs(100 - this.inputWidth[1]), 10, 0]
                            ];
                            this.$vuetify.rtl && i.reverse(), e.push.apply(e, cu(i.map(function (e) {
                                return t.$createElement("div", t.setBackgroundColor(t.computedTrackColor, {
                                    staticClass: "v-slider__track-background",
                                    style: t.getTrackStyle.apply(t, cu(e))
                                }))
                            })))
                        } else e.push(this.$createElement("div", this.setBackgroundColor(this.computedTrackColor, {
                            staticClass: "v-slider__track-background",
                            style: this.getTrackStyle(0, 100)
                        })), this.$createElement("div", this.setBackgroundColor(this.computedColor, {
                            staticClass: "v-slider__track-fill",
                            style: this.trackFillStyles
                        })));
                        return this.$createElement("div", {
                            staticClass: "v-slider__track-container",
                            ref: "track"
                        }, e)
                    },
                    genChildren: function () {
                        var t = this;
                        return [this.genInput(), this.genTrackContainer(), this.genSteps(), N(2).map(function (e) {
                            var i = t.internalValue[e],
                                n = t.inputWidth[e],
                                s = t.isActive && t.activeThumb === e,
                                r = t.isFocused && t.activeThumb === e;
                            return t.genThumbContainer(i, n, s, r, function (i) {
                                t.isActive = !0, t.activeThumb = e, t.onThumbMouseDown(i)
                            }, function (i) {
                                t.isFocused = !0, t.activeThumb = e, t.$emit("focus", i)
                            }, function (e) {
                                t.isFocused = !1, t.activeThumb = null, t.$emit("blur", e)
                            }, "thumb_" + e)
                        })]
                    },
                    onSliderClick: function (t) {
                        if (!this.isActive) {
                            if (this.noClick) return void(this.noClick = !1);
                            var e = this.parseMouseMove(t),
                                i = e.value;
                            if (e.isInsideTrack) {
                                this.activeThumb = this.getIndexOfClosestValue(this.internalValue, i);
                                var n = "thumb_" + this.activeThumb;
                                this.$refs[n].focus()
                            }
                            this.setInternalValue(i), this.$emit("change", this.internalValue)
                        }
                    },
                    onMouseMove: function (t) {
                        var e = this.parseMouseMove(t),
                            i = e.value;
                        e.isInsideTrack && null === this.activeThumb && (this.activeThumb = this.getIndexOfClosestValue(this.internalValue, i)), this.setInternalValue(i)
                    },
                    onKeyDown: function (t) {
                        if (null !== this.activeThumb) {
                            var e = this.parseKeyDown(t, this.internalValue[this.activeThumb]);
                            null != e && (this.setInternalValue(e), this.$emit("change", this.internalValue))
                        }
                    },
                    setInternalValue: function (t) {
                        var e = this;
                        this.internalValue = this.internalValue.map(function (i, n) {
                            return n === e.activeThumb ? t : Number(i)
                        })
                    }
                }
            }),
            du = (i(81), d(_, Ze, kr, Mt, h).extend({
                name: "v-rating",
                props: {
                    backgroundColor: {
                        type: String,
                        default: "accent"
                    },
                    color: {
                        type: String,
                        default: "primary"
                    },
                    clearable: Boolean,
                    dense: Boolean,
                    emptyIcon: {
                        type: String,
                        default: "$ratingEmpty"
                    },
                    fullIcon: {
                        type: String,
                        default: "$ratingFull"
                    },
                    halfIcon: {
                        type: String,
                        default: "$ratingHalf"
                    },
                    halfIncrements: Boolean,
                    hover: Boolean,
                    length: {
                        type: [Number, String],
                        default: 5
                    },
                    readonly: Boolean,
                    size: [Number, String],
                    value: {
                        type: Number,
                        default: 0
                    }
                },
                data: function () {
                    return {
                        hoverIndex: -1,
                        internalValue: this.value
                    }
                },
                computed: {
                    directives: function () {
                        return this.readonly || !this.ripple ? [] : [{
                            name: "ripple",
                            value: {
                                circle: !0
                            }
                        }]
                    },
                    iconProps: function () {
                        var t = this.$props,
                            e = t.dark,
                            i = t.large,
                            n = t.light,
                            s = t.medium,
                            r = t.small;
                        return {
                            dark: e,
                            large: i,
                            light: n,
                            medium: s,
                            size: t.size,
                            small: r,
                            xLarge: t.xLarge,
                            xSmall: t.xSmall
                        }
                    },
                    isHovering: function () {
                        return this.hover && this.hoverIndex >= 0
                    }
                },
                watch: {
                    internalValue: function (t) {
                        t !== this.value && this.$emit("input", t)
                    },
                    value: function (t) {
                        this.internalValue = t
                    }
                },
                methods: {
                    createClickFn: function (t) {
                        var e = this;
                        return function (i) {
                            if (!e.readonly) {
                                var n = e.genHoverIndex(i, t);
                                e.clearable && e.internalValue === n ? e.internalValue = 0 : e.internalValue = n
                            }
                        }
                    },
                    createProps: function (t) {
                        var e = {
                            index: t,
                            value: this.internalValue,
                            click: this.createClickFn(t),
                            isFilled: Math.floor(this.internalValue) > t,
                            isHovered: Math.floor(this.hoverIndex) > t
                        };
                        return this.halfIncrements && (e.isHalfHovered = !e.isHovered && (this.hoverIndex - t) % 1 > 0, e.isHalfFilled = !e.isFilled && (this.internalValue - t) % 1 > 0), e
                    },
                    genHoverIndex: function (t, e) {
                        var i = this.isHalfEvent(t);
                        return this.$vuetify.rtl && (i = !i), e + (i ? .5 : 1)
                    },
                    getIconName: function (t) {
                        var e = this.isHovering ? t.isHovered : t.isFilled,
                            i = this.isHovering ? t.isHalfHovered : t.isHalfFilled;
                        return e ? this.fullIcon : i ? this.halfIcon : this.emptyIcon
                    },
                    getColor: function (t) {
                        if (this.isHovering) {
                            if (t.isHovered || t.isHalfHovered) return this.color
                        } else if (t.isFilled || t.isHalfFilled) return this.color;
                        return this.backgroundColor
                    },
                    isHalfEvent: function (t) {
                        if (this.halfIncrements) {
                            var e = t.target && t.target.getBoundingClientRect();
                            if (e && t.pageX - e.left < e.width / 2) return !0
                        }
                        return !1
                    },
                    onMouseEnter: function (t, e) {
                        var i = this;
                        this.runDelay("open", function () {
                            i.hoverIndex = i.genHoverIndex(t, e)
                        })
                    },
                    onMouseLeave: function () {
                        var t = this;
                        this.runDelay("close", function () {
                            return t.hoverIndex = -1
                        })
                    },
                    genItem: function (t) {
                        var e = this,
                            i = this.createProps(t);
                        if (this.$scopedSlots.item) return this.$scopedSlots.item(i);
                        var n = {
                            click: i.click
                        };
                        return this.hover && (n.mouseenter = function (i) {
                            return e.onMouseEnter(i, t)
                        }, n.mouseleave = this.onMouseLeave, this.halfIncrements && (n.mousemove = function (i) {
                            return e.onMouseEnter(i, t)
                        })), this.$createElement(Lt, this.setTextColor(this.getColor(i), {
                            directives: this.directives,
                            props: this.iconProps,
                            on: n
                        }), [this.getIconName(i)])
                    }
                },
                render: function (t) {
                    var e = this,
                        i = N(Number(this.length)).map(function (t) {
                            return e.genItem(t)
                        });
                    return t("div", {
                        staticClass: "v-rating",
                        class: {
                            "v-rating--readonly": this.readonly, "v-rating--dense": this.dense
                        }
                    }, i)
                }
            })),
            pu = (i(82), function () {
                return (pu = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            fu = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            vu = d(T, at, h).extend({
                name: "VSkeletonLoader",
                props: {
                    boilerplate: Boolean,
                    loading: Boolean,
                    tile: Boolean,
                    transition: String,
                    type: String,
                    types: {
                        type: Object,
                        default: function () {
                            return {}
                        }
                    }
                },
                computed: {
                    attrs: function () {
                        return this.isLoading ? this.boilerplate ? {} : pu({
                            "aria-busy": !0,
                            "aria-live": "polite",
                            role: "alert"
                        }, this.$attrs) : this.$attrs
                    },
                    classes: function () {
                        return pu({
                            "v-skeleton-loader--boilerplate": this.boilerplate,
                            "v-skeleton-loader--is-loading": this.isLoading,
                            "v-skeleton-loader--tile": this.tile
                        }, this.themeClasses, this.elevationClasses)
                    },
                    isLoading: function () {
                        return Boolean(!it(this) || this.loading)
                    },
                    rootTypes: function () {
                        return pu({
                            actions: "button@2",
                            article: "heading, paragraph",
                            avatar: "avatar",
                            button: "button",
                            card: "image, card-heading",
                            "card-avatar": "image, list-item-avatar",
                            "card-heading": "heading",
                            chip: "chip",
                            "date-picker": "list-item, card-heading, divider, date-picker-options, date-picker-days, actions",
                            "date-picker-options": "text, avatar@2",
                            "date-picker-days": "avatar@28",
                            heading: "heading",
                            image: "image",
                            "list-item": "text",
                            "list-item-avatar": "avatar, text",
                            "list-item-two-line": "sentences",
                            "list-item-avatar-two-line": "avatar, sentences",
                            "list-item-three-line": "paragraph",
                            "list-item-avatar-three-line": "avatar, paragraph",
                            paragraph: "text@3",
                            sentences: "text@2",
                            table: "table-heading, table-thead, table-tbody, table-tfoot",
                            "table-heading": "heading, text",
                            "table-thead": "heading@6",
                            "table-tbody": "table-row-divider@6",
                            "table-row-divider": "table-row, divider",
                            "table-row": "table-cell@6",
                            "table-cell": "text",
                            "table-tfoot": "text@2, avatar@2",
                            text: "text"
                        }, this.types)
                    }
                },
                methods: {
                    genBone: function (t, e) {
                        return this.$createElement("div", {
                            staticClass: "v-skeleton-loader__" + t + " v-skeleton-loader__bone"
                        }, e)
                    },
                    genBones: function (t) {
                        var e = this,
                            i = fu(t.split("@"), 2),
                            n = i[0],
                            s = i[1];
                        return Array.from({
                            length: s
                        }).map(function () {
                            return e.genStructure(n)
                        })
                    },
                    genStructure: function (t) {
                        var e = [];
                        t = t || this.type || "";
                        var i = this.rootTypes[t] || "";
                        if (t === i);
                        else {
                            if (t.indexOf(",") > -1) return this.mapBones(t);
                            if (t.indexOf("@") > -1) return this.genBones(t);
                            i.indexOf(",") > -1 ? e = this.mapBones(i) : i.indexOf("@") > -1 ? e = this.genBones(i) : i && e.push(this.genStructure(i))
                        }
                        return [this.genBone(t, e)]
                    },
                    genSkeleton: function () {
                        var t = this,
                            e = [],
                            i = it(this);
                        return this.isLoading ? e.push(this.genStructure()) : e.push(i), this.transition ? this.$createElement("transition", {
                            props: {
                                name: this.transition
                            },
                            on: {
                                enter: function (e) {
                                    t.isLoading && (e.style.transition = "none")
                                },
                                beforeLeave: function (t) {
                                    t.style.display = "none"
                                }
                            }
                        }, e) : e
                    },
                    mapBones: function (t) {
                        return t.replace(/\s/g, "").split(",").map(this.genStructure)
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-skeleton-loader",
                        attrs: this.attrs,
                        on: this.$listeners,
                        class: this.classes,
                        style: this.isLoading ? this.measurableStyles : void 0
                    }, [this.genSkeleton()])
                }
            }),
            mu = d(Yl, Rt("slideGroup")).extend({
                name: "v-slide-item"
            }),
            gu = (i(83), d(_, Bt, Ct(["absolute", "top", "bottom", "left", "right"])).extend({
                name: "v-snackbar",
                props: {
                    multiLine: Boolean,
                    timeout: {
                        type: Number,
                        default: 6e3
                    },
                    vertical: Boolean
                },
                data: function () {
                    return {
                        activeTimeout: -1
                    }
                },
                computed: {
                    classes: function () {
                        return {
                            "v-snack--active": this.isActive,
                            "v-snack--absolute": this.absolute,
                            "v-snack--bottom": this.bottom || !this.top,
                            "v-snack--left": this.left,
                            "v-snack--multi-line": this.multiLine && !this.vertical,
                            "v-snack--right": this.right,
                            "v-snack--top": this.top,
                            "v-snack--vertical": this.vertical
                        }
                    }
                },
                watch: {
                    isActive: function () {
                        this.setTimeout()
                    }
                },
                created: function () {
                    this.$attrs.hasOwnProperty("auto-height") && x("auto-height", this)
                },
                mounted: function () {
                    this.setTimeout()
                },
                methods: {
                    setTimeout: function () {
                        var t = this;
                        window.clearTimeout(this.activeTimeout), this.isActive && this.timeout && (this.activeTimeout = window.setTimeout(function () {
                            t.isActive = !1
                        }, this.timeout))
                    }
                },
                render: function (t) {
                    return t("transition", {
                        attrs: {
                            name: "v-snack-transition"
                        }
                    }, [this.isActive && t("div", {
                        staticClass: "v-snack",
                        class: this.classes,
                        on: this.$listeners
                    }, [t("div", this.setBackgroundColor(this.color, {
                        staticClass: "v-snack__wrapper"
                    }), [t("div", {
                        staticClass: "v-snack__content"
                    }, this.$slots.default)])])])
                }
            })),
            yu = (i(84), function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            }),
            bu = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(yu(arguments[e]));
                return t
            };

        function Su(t, e) {
            var i = e.minX,
                n = e.maxX,
                s = e.minY,
                r = e.maxY,
                o = t.length,
                a = Math.max.apply(Math, bu(t)),
                l = Math.min.apply(Math, bu(t)),
                u = (n - i) / (o - 1),
                c = (r - s) / (a - l || 1);
            return t.map(function (t, e) {
                return {
                    x: i + e * u,
                    y: r - (t - l) * c + 1e-5 * +(e === o - 1) - 1e-5 * +(0 === e),
                    value: t
                }
            })
        }

        function xu(t, e) {
            var i = e.minX,
                n = e.maxX,
                s = e.minY,
                r = e.maxY,
                o = t.length,
                a = Math.max.apply(Math, bu(t)),
                l = Math.min.apply(Math, bu(t));
            l > 0 && (l = 0), a < 0 && (a = 0);
            var u = n / o,
                c = (r - s) / (a - l),
                h = r - Math.abs(l * c);
            return t.map(function (t, e) {
                var n = Math.abs(c * t);
                return {
                    x: i + e * u,
                    y: h - n + +(t < 0) * n,
                    height: n,
                    value: t
                }
            })
        }

        function wu(t) {
            return parseInt(t, 10)
        }

        function Cu(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }

        function ku(t, e, i) {
            var n = t.x - e.x,
                s = t.y - e.y,
                r = Math.sqrt(n * n + s * s),
                o = n / r,
                a = s / r;
            return {
                x: e.x + o * i,
                y: e.y + a * i
            }
        }

        function $u(t, e, i, n) {
            void 0 === i && (i = !1), void 0 === n && (n = 75);
            var s = t.shift(),
                r = t[t.length - 1];
            return (i ? "M" + s.x + " " + (n - s.x + 2) + " L" + s.x + " " + s.y : "M" + s.x + " " + s.y) + t.map(function (i, n) {
                var r, o, a, l = t[n + 1],
                    u = t[n - 1] || s,
                    c = l && (o = i, a = u, wu((r = l).x + a.x) === wu(2 * o.x) && wu(r.y + a.y) === wu(2 * o.y));
                if (!l || c) return "L" + i.x + " " + i.y;
                var h = Math.min(Cu(u, i), Cu(l, i)),
                    d = h / 2 < e ? h / 2 : e,
                    p = ku(u, i, d),
                    f = ku(l, i, d);
                return "L" + p.x + " " + p.y + "S" + i.x + " " + i.y + " " + f.x + " " + f.y
            }).join("") + (i ? "L" + r.x + " " + (n - s.x + 2) + " Z" : "")
        }

        function Iu(t) {
            return (Iu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var Ou, _u = function () {
                return (_u = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Tu = d(_, h).extend({
                name: "VSparkline",
                inheritAttrs: !1,
                props: {
                    autoDraw: Boolean,
                    autoDrawDuration: {
                        type: Number,
                        default: 2e3
                    },
                    autoDrawEasing: {
                        type: String,
                        default: "ease"
                    },
                    autoLineWidth: {
                        type: Boolean,
                        default: !1
                    },
                    color: {
                        type: String,
                        default: "primary"
                    },
                    fill: {
                        type: Boolean,
                        default: !1
                    },
                    gradient: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    gradientDirection: {
                        type: String,
                        validator: function (t) {
                            return ["top", "bottom", "left", "right"].includes(t)
                        },
                        default: "top"
                    },
                    height: {
                        type: [String, Number],
                        default: 75
                    },
                    labels: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    labelSize: {
                        type: [Number, String],
                        default: 7
                    },
                    lineWidth: {
                        type: [String, Number],
                        default: 4
                    },
                    padding: {
                        type: [String, Number],
                        default: 8
                    },
                    showLabels: Boolean,
                    smooth: {
                        type: [Boolean, Number, String],
                        default: !1
                    },
                    type: {
                        type: String,
                        default: "trend",
                        validator: function (t) {
                            return ["trend", "bar"].includes(t)
                        }
                    },
                    value: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    width: {
                        type: [Number, String],
                        default: 300
                    }
                },
                data: function () {
                    return {
                        lastLength: 0
                    }
                },
                computed: {
                    classes: function () {
                        return _u({
                            "v-sparkline": !0
                        }, this.themeClasses)
                    },
                    parsedPadding: function () {
                        return Number(this.padding)
                    },
                    parsedWidth: function () {
                        return Number(this.width)
                    },
                    parsedHeight: function () {
                        return parseInt(this.height, 10)
                    },
                    parsedLabelSize: function () {
                        return parseInt(this.labelSize, 10) || 7
                    },
                    totalHeight: function () {
                        var t = this.parsedHeight;
                        return this.hasLabels && (t += 1.5 * parseInt(this.labelSize, 10)), t
                    },
                    totalWidth: function () {
                        var t = this.parsedWidth;
                        return "bar" === this.type && (t = Math.max(this.value.length * this._lineWidth, t)), t
                    },
                    totalValues: function () {
                        return this.value.length
                    },
                    _lineWidth: function () {
                        if (this.autoLineWidth && "trend" !== this.type) {
                            var t = this.parsedPadding * (this.totalValues + 1);
                            return (this.parsedWidth - t) / this.totalValues
                        }
                        return parseFloat(this.lineWidth) || 4
                    },
                    boundary: function () {
                        if ("bar" === this.type) return {
                            minX: 0,
                            maxX: this.totalWidth,
                            minY: 0,
                            maxY: this.parsedHeight
                        };
                        var t = this.parsedPadding;
                        return {
                            minX: t,
                            maxX: this.totalWidth - t,
                            minY: t,
                            maxY: this.parsedHeight - t
                        }
                    },
                    hasLabels: function () {
                        return Boolean(this.showLabels || this.labels.length > 0 || this.$scopedSlots.label)
                    },
                    parsedLabels: function () {
                        for (var t = [], e = this._values, i = e.length, n = 0; t.length < i; n++) {
                            var s = e[n],
                                r = this.labels[n];
                            r || (r = "object" === Iu(s) ? s.value : s), t.push({
                                x: s.x,
                                value: String(r)
                            })
                        }
                        return t
                    },
                    normalizedValues: function () {
                        return this.value.map(function (t) {
                            return "number" == typeof t ? t : t.value
                        })
                    },
                    _values: function () {
                        return "trend" === this.type ? Su(this.normalizedValues, this.boundary) : xu(this.normalizedValues, this.boundary)
                    },
                    textY: function () {
                        var t = this.parsedHeight;
                        return "trend" === this.type && (t -= 4), t
                    },
                    _radius: function () {
                        return !0 === this.smooth ? 8 : Number(this.smooth)
                    }
                },
                watch: {
                    value: {
                        immediate: !0,
                        handler: function () {
                            var t = this;
                            this.$nextTick(function () {
                                if (t.autoDraw && "bar" !== t.type) {
                                    var e = t.$refs.path,
                                        i = e.getTotalLength();
                                    t.fill ? (e.style.transformOrigin = "bottom center", e.style.transition = "none", e.style.transform = "scaleY(0)", e.getBoundingClientRect(), e.style.transition = "transform " + t.autoDrawDuration + "ms " + t.autoDrawEasing, e.style.transform = "scaleY(1)") : (e.style.transition = "none", e.style.strokeDasharray = i + " " + i, e.style.strokeDashoffset = Math.abs(i - (t.lastLength || 0)).toString(), e.getBoundingClientRect(), e.style.transition = "stroke-dashoffset " + t.autoDrawDuration + "ms " + t.autoDrawEasing, e.style.strokeDashoffset = "0"), t.lastLength = i
                                }
                            })
                        }
                    }
                },
                methods: {
                    genGradient: function () {
                        var t = this,
                            e = this.gradientDirection,
                            i = this.gradient.slice();
                        i.length || i.push("");
                        var n = Math.max(i.length - 1, 1),
                            s = i.reverse().map(function (e, i) {
                                return t.$createElement("stop", {
                                    attrs: {
                                        offset: i / n,
                                        "stop-color": e || t.color || "currentColor"
                                    }
                                })
                            });
                        return this.$createElement("defs", [this.$createElement("linearGradient", {
                            attrs: {
                                id: this._uid,
                                x1: +("left" === e),
                                y1: +("top" === e),
                                x2: +("right" === e),
                                y2: +("bottom" === e)
                            }
                        }, s)])
                    },
                    genG: function (t) {
                        return this.$createElement("g", {
                            style: {
                                fontSize: "8",
                                textAnchor: "middle",
                                dominantBaseline: "mathematical",
                                fill: this.color || "currentColor"
                            }
                        }, t)
                    },
                    genPath: function () {
                        var t = Su(this.normalizedValues, this.boundary);
                        return this.$createElement("path", {
                            attrs: {
                                id: this._uid,
                                d: $u(t, this._radius, this.fill, this.parsedHeight),
                                fill: this.fill ? "url(#" + this._uid + ")" : "none",
                                stroke: this.fill ? "none" : "url(#" + this._uid + ")"
                            },
                            ref: "path"
                        })
                    },
                    genLabels: function (t) {
                        var e = this,
                            i = this.parsedLabels.map(function (i, n) {
                                return e.$createElement("text", {
                                    attrs: {
                                        x: i.x + t + e._lineWidth / 2,
                                        y: e.textY + .75 * e.parsedLabelSize,
                                        "font-size": Number(e.labelSize) || 7
                                    }
                                }, [e.genLabel(i, n)])
                            });
                        return this.genG(i)
                    },
                    genLabel: function (t, e) {
                        return this.$scopedSlots.label ? this.$scopedSlots.label({
                            index: e,
                            value: t.value
                        }) : t.value
                    },
                    genBars: function () {
                        if (this.value && !(this.totalValues < 2)) {
                            var t = xu(this.normalizedValues, this.boundary),
                                e = (Math.abs(t[0].x - t[1].x) - this._lineWidth) / 2;
                            return this.$createElement("svg", {
                                attrs: {
                                    display: "block",
                                    viewBox: "0 0 " + this.totalWidth + " " + this.totalHeight
                                },
                                class: this.classes
                            }, [this.genGradient(), this.genClipPath(t, e, this._lineWidth, "sparkline-bar-" + this._uid), this.hasLabels ? this.genLabels(e) : void 0, this.$createElement("g", {
                                attrs: {
                                    "clip-path": "url(#sparkline-bar-" + this._uid + "-clip)",
                                    fill: "url(#" + this._uid + ")"
                                }
                            }, [this.$createElement("rect", {
                                attrs: {
                                    x: 0,
                                    y: 0,
                                    width: this.totalWidth,
                                    height: this.height
                                }
                            })])])
                        }
                    },
                    genClipPath: function (t, e, i, n) {
                        var s = this,
                            r = "number" == typeof this.smooth ? this.smooth : this.smooth ? 2 : 0;
                        return this.$createElement("clipPath", {
                            attrs: {
                                id: n + "-clip"
                            }
                        }, t.map(function (t) {
                            return s.$createElement("rect", {
                                attrs: {
                                    x: t.x + e,
                                    y: t.y,
                                    width: i,
                                    height: t.height,
                                    rx: r,
                                    ry: r
                                }
                            }, [s.autoDraw ? s.$createElement("animate", {
                                attrs: {
                                    attributeName: "height",
                                    from: 0,
                                    to: t.height,
                                    dur: s.autoDrawDuration + "ms",
                                    fill: "freeze"
                                }
                            }) : void 0])
                        }))
                    },
                    genTrend: function () {
                        return this.$createElement("svg", this.setTextColor(this.color, {
                            attrs: _u({}, this.$attrs, {
                                display: "block",
                                "stroke-width": this._lineWidth || 1,
                                viewBox: "0 0 " + this.width + " " + this.totalHeight
                            }),
                            class: this.classes
                        }), [this.genGradient(), this.hasLabels && this.genLabels(-this._lineWidth / 2), this.genPath()])
                    }
                },
                render: function (t) {
                    if (!(this.totalValues < 2)) return "trend" === this.type ? this.genTrend() : this.genBars()
                }
            }),
            Bu = (i(85), d(kt, Bt, he).extend({
                name: "v-speed-dial",
                directives: {
                    ClickOutside: pi
                },
                props: {
                    direction: {
                        type: String,
                        default: "top",
                        validator: function (t) {
                            return ["top", "right", "bottom", "left"].includes(t)
                        }
                    },
                    openOnHover: Boolean,
                    transition: {
                        type: String,
                        default: "scale-transition"
                    }
                },
                computed: {
                    classes: function () {
                        var t;
                        return (t = {
                            "v-speed-dial": !0,
                            "v-speed-dial--top": this.top,
                            "v-speed-dial--right": this.right,
                            "v-speed-dial--bottom": this.bottom,
                            "v-speed-dial--left": this.left,
                            "v-speed-dial--absolute": this.absolute,
                            "v-speed-dial--fixed": this.fixed
                        })["v-speed-dial--direction-" + this.direction] = !0, t["v-speed-dial--is-active"] = this.isActive, t
                    }
                },
                render: function (t) {
                    var e = this,
                        i = [],
                        n = {
                            class: this.classes,
                            directives: [{
                                name: "click-outside",
                                value: function () {
                                    return e.isActive = !1
                                }
                            }],
                            on: {
                                click: function () {
                                    return e.isActive = !e.isActive
                                }
                            }
                        };
                    if (this.openOnHover && (n.on.mouseenter = function () {
                            return e.isActive = !0
                        }, n.on.mouseleave = function () {
                            return e.isActive = !1
                        }), this.isActive) {
                        var s = 0;
                        i = (this.$slots.default || []).map(function (e, i) {
                            return !e.tag || void 0 === e.componentOptions || "v-btn" !== e.componentOptions.Ctor.options.name && "v-tooltip" !== e.componentOptions.Ctor.options.name ? (e.key = i, e) : t("div", {
                                style: {
                                    transitionDelay: .05 * ++s + "s"
                                },
                                key: i
                            }, [e])
                        })
                    }
                    var r = t("transition-group", {
                        class: "v-speed-dial__list",
                        props: {
                            name: this.transition,
                            mode: this.mode,
                            origin: this.origin,
                            tag: "div"
                        }
                    }, i);
                    return t("div", n, [this.$slots.activator, r])
                }
            })),
            Au = (i(86), function () {
                return (Au = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Eu = d(Wt("stepper"), Wi, h).extend({
                name: "v-stepper",
                provide: function () {
                    return {
                        stepClick: this.stepClick,
                        isVertical: this.vertical
                    }
                },
                props: {
                    altLabels: Boolean,
                    nonLinear: Boolean,
                    vertical: Boolean
                },
                data: function () {
                    return {
                        isBooted: !1,
                        steps: [],
                        content: [],
                        isReverse: !1
                    }
                },
                computed: {
                    classes: function () {
                        return Au({
                            "v-stepper--is-booted": this.isBooted,
                            "v-stepper--vertical": this.vertical,
                            "v-stepper--alt-labels": this.altLabels,
                            "v-stepper--non-linear": this.nonLinear
                        }, this.themeClasses)
                    }
                },
                watch: {
                    internalValue: function (t, e) {
                        this.isReverse = Number(t) < Number(e), e && (this.isBooted = !0), this.updateView()
                    }
                },
                created: function () {
                    this.$listeners.input && S("@input", "@change", this)
                },
                mounted: function () {
                    this.internalLazyValue = this.value || (this.steps[0] || {}).step || 1, this.updateView()
                },
                methods: {
                    register: function (t) {
                        "v-stepper-step" === t.$options.name ? this.steps.push(t) : "v-stepper-content" === t.$options.name && (t.isVertical = this.vertical, this.content.push(t))
                    },
                    unregister: function (t) {
                        "v-stepper-step" === t.$options.name ? this.steps = this.steps.filter(function (e) {
                            return e !== t
                        }) : "v-stepper-content" === t.$options.name && (t.isVertical = this.vertical, this.content = this.content.filter(function (e) {
                            return e !== t
                        }))
                    },
                    stepClick: function (t) {
                        var e = this;
                        this.$nextTick(function () {
                            return e.internalValue = t
                        })
                    },
                    updateView: function () {
                        for (var t = this.steps.length; --t >= 0;) this.steps[t].toggle(this.internalValue);
                        for (t = this.content.length; --t >= 0;) this.content[t].toggle(this.internalValue, this.isReverse)
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-stepper",
                        class: this.classes
                    }, this.$slots.default)
                }
            }),
            Mu = d(_, zt("stepper", "v-stepper-step", "v-stepper")).extend().extend({
                name: "v-stepper-step",
                directives: {
                    ripple: ee
                },
                inject: ["stepClick"],
                props: {
                    color: {
                        type: String,
                        default: "primary"
                    },
                    complete: Boolean,
                    completeIcon: {
                        type: String,
                        default: "$complete"
                    },
                    editable: Boolean,
                    editIcon: {
                        type: String,
                        default: "$edit"
                    },
                    errorIcon: {
                        type: String,
                        default: "$error"
                    },
                    rules: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    step: [Number, String]
                },
                data: function () {
                    return {
                        isActive: !1,
                        isInactive: !0
                    }
                },
                computed: {
                    classes: function () {
                        return {
                            "v-stepper__step--active": this.isActive,
                            "v-stepper__step--editable": this.editable,
                            "v-stepper__step--inactive": this.isInactive,
                            "v-stepper__step--error error--text": this.hasError,
                            "v-stepper__step--complete": this.complete
                        }
                    },
                    hasError: function () {
                        return this.rules.some(function (t) {
                            return !0 !== t()
                        })
                    }
                },
                mounted: function () {
                    this.stepper && this.stepper.register(this)
                },
                beforeDestroy: function () {
                    this.stepper && this.stepper.unregister(this)
                },
                methods: {
                    click: function (t) {
                        t.stopPropagation(), this.$emit("click", t), this.editable && this.stepClick(this.step)
                    },
                    genIcon: function (t) {
                        return this.$createElement(Lt, t)
                    },
                    genLabel: function () {
                        return this.$createElement("div", {
                            staticClass: "v-stepper__label"
                        }, this.$slots.default)
                    },
                    genStep: function () {
                        var t = !(this.hasError || !this.complete && !this.isActive) && this.color;
                        return this.$createElement("span", this.setBackgroundColor(t, {
                            staticClass: "v-stepper__step__step"
                        }), this.genStepContent())
                    },
                    genStepContent: function () {
                        var t = [];
                        return this.hasError ? t.push(this.genIcon(this.errorIcon)) : this.complete ? this.editable ? t.push(this.genIcon(this.editIcon)) : t.push(this.genIcon(this.completeIcon)) : t.push(String(this.step)), t
                    },
                    toggle: function (t) {
                        this.isActive = t.toString() === this.step.toString(), this.isInactive = Number(t) < Number(this.step)
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-stepper__step",
                        class: this.classes,
                        directives: [{
                            name: "ripple",
                            value: this.editable
                        }],
                        on: {
                            click: this.click
                        }
                    }, [this.genStep(), this.genLabel()])
                }
            }),
            Du = d(zt("stepper", "v-stepper-content", "v-stepper")).extend().extend({
                name: "v-stepper-content",
                inject: {
                    isVerticalProvided: {
                        from: "isVertical"
                    }
                },
                props: {
                    step: {
                        type: [Number, String],
                        required: !0
                    }
                },
                data: function () {
                    return {
                        height: 0,
                        isActive: null,
                        isReverse: !1,
                        isVertical: this.isVerticalProvided
                    }
                },
                computed: {
                    computedTransition: function () {
                        return (this.$vuetify.rtl ? !this.isReverse : this.isReverse) ? Te : _e
                    },
                    styles: function () {
                        return this.isVertical ? {
                            height: Y(this.height)
                        } : {}
                    }
                },
                watch: {
                    isActive: function (t, e) {
                        t && null == e ? this.height = "auto" : this.isVertical && (this.isActive ? this.enter() : this.leave())
                    }
                },
                mounted: function () {
                    this.$refs.wrapper.addEventListener("transitionend", this.onTransition, !1), this.stepper && this.stepper.register(this)
                },
                beforeDestroy: function () {
                    this.$refs.wrapper.removeEventListener("transitionend", this.onTransition, !1), this.stepper && this.stepper.unregister(this)
                },
                methods: {
                    onTransition: function (t) {
                        this.isActive && "height" === t.propertyName && (this.height = "auto")
                    },
                    enter: function () {
                        var t = this,
                            e = 0;
                        requestAnimationFrame(function () {
                            e = t.$refs.wrapper.scrollHeight
                        }), this.height = 0, setTimeout(function () {
                            return t.isActive && (t.height = e || "auto")
                        }, 450)
                    },
                    leave: function () {
                        var t = this;
                        this.height = this.$refs.wrapper.clientHeight, setTimeout(function () {
                            return t.height = 0
                        }, 10)
                    },
                    toggle: function (t, e) {
                        this.isActive = t.toString() === this.step.toString(), this.isReverse = e
                    }
                },
                render: function (t) {
                    var e = {
                            staticClass: "v-stepper__content"
                        },
                        i = {
                            staticClass: "v-stepper__wrapper",
                            style: this.styles,
                            ref: "wrapper"
                        };
                    this.isVertical || (e.directives = [{
                        name: "show",
                        value: this.isActive
                    }]);
                    var n = t("div", i, [this.$slots.default]),
                        s = t("div", e, [n]);
                    return t(this.computedTransition, {
                        on: this.$listeners
                    }, [s])
                }
            }),
            Vu = E("v-stepper__header"),
            Pu = E("v-stepper__items"),
            Lu = (i(87), function () {
                return (Lu = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Hu = $r.extend({
                name: "v-switch",
                directives: {
                    Touch: mr
                },
                props: {
                    inset: Boolean,
                    loading: {
                        type: [Boolean, String],
                        default: !1
                    },
                    flat: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    classes: function () {
                        return Lu({}, gn.options.computed.classes.call(this), {
                            "v-input--selection-controls v-input--switch": !0,
                            "v-input--switch--flat": this.flat,
                            "v-input--switch--inset": this.inset
                        })
                    },
                    attrs: function () {
                        return {
                            "aria-checked": String(this.isActive),
                            "aria-disabled": String(this.disabled),
                            role: "switch"
                        }
                    },
                    validationState: function () {
                        return this.hasError && this.shouldValidate ? "error" : this.hasSuccess ? "success" : null !== this.hasColor ? this.computedColor : void 0
                    },
                    switchData: function () {
                        return this.setTextColor(this.loading ? void 0 : this.validationState, {
                            class: this.themeClasses
                        })
                    }
                },
                methods: {
                    genDefaultSlot: function () {
                        return [this.genSwitch(), this.genLabel()]
                    },
                    genSwitch: function () {
                        return this.$createElement("div", {
                            staticClass: "v-input--selection-controls__input"
                        }, [this.genInput("checkbox", Lu({}, this.attrs, this.attrs$)), this.genRipple(this.setTextColor(this.validationState, {
                            directives: [{
                                name: "touch",
                                value: {
                                    left: this.onSwipeLeft,
                                    right: this.onSwipeRight
                                }
                            }]
                        })), this.$createElement("div", Lu({
                            staticClass: "v-input--switch__track"
                        }, this.switchData)), this.$createElement("div", Lu({
                            staticClass: "v-input--switch__thumb"
                        }, this.switchData), [this.genProgress()])])
                    },
                    genProgress: function () {
                        return this.$createElement(Ae, {}, [!1 === this.loading ? null : this.$slots.progress || this.$createElement(jt, {
                            props: {
                                color: !0 === this.loading || "" === this.loading ? this.color || "primary" : this.loading,
                                size: 16,
                                width: 2,
                                indeterminate: !0
                            }
                        })])
                    },
                    onSwipeLeft: function () {
                        this.isActive && this.onChange()
                    },
                    onSwipeRight: function () {
                        this.isActive || this.onChange()
                    },
                    onKeydown: function (t) {
                        (t.keyCode === U.left && this.isActive || t.keyCode === U.right && !this.isActive) && this.onChange()
                    }
                }
            }),
            ju = (i(88), function () {
                return (ju = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Nu = d($t("bar", ["height", "window"]), _, h).extend({
                name: "v-system-bar",
                props: {
                    height: [Number, String],
                    lightsOut: Boolean,
                    window: Boolean
                },
                computed: {
                    classes: function () {
                        return ju({
                            "v-system-bar--lights-out": this.lightsOut,
                            "v-system-bar--absolute": this.absolute,
                            "v-system-bar--fixed": !this.absolute && (this.app || this.fixed),
                            "v-system-bar--window": this.window
                        }, this.themeClasses)
                    },
                    computedHeight: function () {
                        return this.height ? isNaN(parseInt(this.height)) ? this.height : parseInt(this.height) : this.window ? 32 : 24
                    },
                    styles: function () {
                        return {
                            height: Y(this.computedHeight)
                        }
                    }
                },
                methods: {
                    updateApplication: function () {
                        return this.$el ? this.$el.clientHeight : this.computedHeight
                    }
                },
                render: function (t) {
                    var e = {
                        staticClass: "v-system-bar",
                        class: this.classes,
                        style: this.styles,
                        on: this.$listeners
                    };
                    return t("div", this.setBackgroundColor(this.color, e), it(this))
                }
            }),
            Fu = (i(89), function () {
                return (Fu = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            zu = function (t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    i = 0;
                return e ? e.call(t) : {
                    next: function () {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                }
            },
            Wu = d(Tr, Ot, h).extend({
                name: "v-tabs-bar",
                provide: function () {
                    return {
                        tabsBar: this
                    }
                },
                computed: {
                    classes: function () {
                        return Fu({}, Tr.options.computed.classes.call(this), {
                            "v-tabs-bar": !0,
                            "v-tabs-bar--is-mobile": this.isMobile,
                            "v-tabs-bar--show-arrows": this.showArrows
                        }, this.themeClasses)
                    }
                },
                watch: {
                    items: "callSlider",
                    internalValue: "callSlider",
                    $route: "onRouteChange"
                },
                methods: {
                    callSlider: function () {
                        this.isBooted && this.$emit("call:slider")
                    },
                    genContent: function () {
                        var t = Tr.options.methods.genContent.call(this);
                        return t.data = t.data || {}, t.data.staticClass += " v-tabs-bar__content", t
                    },
                    onRouteChange: function (t, e) {
                        var i, n;
                        if (!this.mandatory) {
                            var s = this.items,
                                r = t.path,
                                o = e.path,
                                a = !1,
                                l = !1;
                            try {
                                for (var u = zu(s), c = u.next(); !c.done; c = u.next()) {
                                    var h = c.value;
                                    if (h.to === r ? a = !0 : h.to === o && (l = !0), a && l) break
                                }
                            } catch (t) {
                                i = {
                                    error: t
                                }
                            } finally {
                                try {
                                    c && !c.done && (n = u.return) && n.call(u)
                                } finally {
                                    if (i) throw i.error
                                }
                            }!a && l && (this.internalValue = void 0)
                        }
                    }
                },
                render: function (t) {
                    var e = Tr.options.render.call(this, t);
                    return e.data.attrs = {
                        role: "tablist"
                    }, e
                }
            }),
            Ru = function () {
                return (Ru = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Yu = yr.extend({
                name: "v-tabs-items",
                props: {
                    mandatory: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    classes: function () {
                        return Ru({}, yr.options.computed.classes.call(this), {
                            "v-tabs-items": !0
                        })
                    },
                    isDark: function () {
                        return this.rootIsDark
                    }
                },
                methods: {
                    getValue: function (t, e) {
                        return t.id || Yi.options.methods.getValue.call(this, t, e)
                    }
                }
            }),
            Gu = d(_).extend({
                name: "v-tabs-slider",
                render: function (t) {
                    return t("div", this.setBackgroundColor(this.color, {
                        staticClass: "v-tabs-slider"
                    }))
                }
            }),
            Uu = function () {
                return (Uu = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            qu = d(_, Wi, h).extend().extend({
                name: "v-tabs",
                directives: {
                    Resize: vi
                },
                props: {
                    activeClass: {
                        type: String,
                        default: ""
                    },
                    alignWithTitle: Boolean,
                    backgroundColor: String,
                    centerActive: Boolean,
                    centered: Boolean,
                    fixedTabs: Boolean,
                    grow: Boolean,
                    height: {
                        type: [Number, String],
                        default: void 0
                    },
                    hideSlider: Boolean,
                    iconsAndText: Boolean,
                    mobileBreakPoint: {
                        type: [Number, String],
                        default: 1264
                    },
                    nextIcon: {
                        type: String,
                        default: "$next"
                    },
                    optional: Boolean,
                    prevIcon: {
                        type: String,
                        default: "$prev"
                    },
                    right: Boolean,
                    showArrows: Boolean,
                    sliderColor: String,
                    sliderSize: {
                        type: [Number, String],
                        default: 2
                    },
                    vertical: Boolean
                },
                data: function () {
                    return {
                        resizeTimeout: 0,
                        slider: {
                            height: null,
                            left: null,
                            right: null,
                            top: null,
                            width: null
                        },
                        transitionTime: 300
                    }
                },
                computed: {
                    classes: function () {
                        return Uu({
                            "v-tabs--align-with-title": this.alignWithTitle,
                            "v-tabs--centered": this.centered,
                            "v-tabs--fixed-tabs": this.fixedTabs,
                            "v-tabs--grow": this.grow,
                            "v-tabs--icons-and-text": this.iconsAndText,
                            "v-tabs--right": this.right,
                            "v-tabs--vertical": this.vertical
                        }, this.themeClasses)
                    },
                    isReversed: function () {
                        return this.$vuetify.rtl && this.vertical
                    },
                    sliderStyles: function () {
                        return {
                            height: Y(this.slider.height),
                            left: this.isReversed ? void 0 : Y(this.slider.left),
                            right: this.isReversed ? Y(this.slider.right) : void 0,
                            top: this.vertical ? Y(this.slider.top) : void 0,
                            transition: null != this.slider.left ? null : "none",
                            width: Y(this.slider.width)
                        }
                    },
                    computedColor: function () {
                        return this.color ? this.color : this.isDark && !this.appIsDark ? "white" : "primary"
                    }
                },
                watch: {
                    alignWithTitle: "callSlider",
                    centered: "callSlider",
                    centerActive: "callSlider",
                    fixedTabs: "callSlider",
                    grow: "callSlider",
                    right: "callSlider",
                    showArrows: "callSlider",
                    vertical: "callSlider",
                    "$vuetify.application.left": "onResize",
                    "$vuetify.application.right": "onResize",
                    "$vuetify.rtl": "onResize"
                },
                mounted: function () {
                    var t = this;
                    this.$nextTick(function () {
                        window.setTimeout(t.callSlider, 30)
                    })
                },
                methods: {
                    callSlider: function () {
                        var t = this;
                        return !this.hideSlider && this.$refs.items && this.$refs.items.selectedItems.length ? (this.$nextTick(function () {
                            var e = t.$refs.items.selectedItems[0];
                            if (!e || !e.$el) return t.slider.width = 0, void(t.slider.left = 0);
                            var i = e.$el;
                            t.slider = {
                                height: t.vertical ? i.scrollHeight : Number(t.sliderSize),
                                left: t.vertical ? 0 : i.offsetLeft,
                                right: t.vertical ? 0 : i.offsetLeft + i.offsetWidth,
                                top: i.offsetTop,
                                width: t.vertical ? Number(t.sliderSize) : i.scrollWidth
                            }
                        }), !0) : (this.slider.width = 0, !1)
                    },
                    genBar: function (t, e) {
                        var i = this,
                            n = {
                                style: {
                                    height: Y(this.height)
                                },
                                props: {
                                    activeClass: this.activeClass,
                                    centerActive: this.centerActive,
                                    dark: this.dark,
                                    light: this.light,
                                    mandatory: !this.optional,
                                    mobileBreakPoint: this.mobileBreakPoint,
                                    nextIcon: this.nextIcon,
                                    prevIcon: this.prevIcon,
                                    showArrows: this.showArrows,
                                    value: this.internalValue
                                },
                                on: {
                                    "call:slider": this.callSlider,
                                    change: function (t) {
                                        i.internalValue = t
                                    }
                                },
                                ref: "items"
                            };
                        return this.setTextColor(this.computedColor, n), this.setBackgroundColor(this.backgroundColor, n), this.$createElement(Wu, n, [this.genSlider(e), t])
                    },
                    genItems: function (t, e) {
                        var i = this;
                        return t || (e.length ? this.$createElement(Yu, {
                            props: {
                                value: this.internalValue
                            },
                            on: {
                                change: function (t) {
                                    i.internalValue = t
                                }
                            }
                        }, e) : null)
                    },
                    genSlider: function (t) {
                        return this.hideSlider ? null : (t || (t = this.$createElement(Gu, {
                            props: {
                                color: this.sliderColor
                            }
                        })), this.$createElement("div", {
                            staticClass: "v-tabs-slider-wrapper",
                            style: this.sliderStyles
                        }, [t]))
                    },
                    onResize: function () {
                        this._isDestroyed || (clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(this.callSlider, 0))
                    },
                    parseNodes: function () {
                        for (var t = null, e = null, i = [], n = [], s = this.$slots.default || [], r = s.length, o = 0; o < r; o++) {
                            var a = s[o];
                            if (a.componentOptions) switch (a.componentOptions.Ctor.options.name) {
                                case "v-tabs-slider":
                                    e = a;
                                    break;
                                case "v-tabs-items":
                                    t = a;
                                    break;
                                case "v-tab-item":
                                    i.push(a);
                                    break;
                                default:
                                    n.push(a)
                            } else n.push(a)
                        }
                        return {
                            tab: n,
                            slider: e,
                            items: t,
                            item: i
                        }
                    }
                },
                render: function (t) {
                    var e = this.parseNodes(),
                        i = e.tab,
                        n = e.slider,
                        s = e.items,
                        r = e.item;
                    return t("div", {
                        staticClass: "v-tabs",
                        class: this.classes,
                        directives: [{
                            name: "resize",
                            modifiers: {
                                quiet: !0
                            },
                            value: this.onResize
                        }]
                    }, [this.genBar(i, n), this.genItems(s, r)])
                }
            }),
            Xu = function () {
                return (Xu = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Zu = d(ne, Rt("tabsBar"), h).extend().extend().extend({
                name: "v-tab",
                props: {
                    ripple: {
                        type: [Boolean, Object],
                        default: !0
                    }
                },
                data: function () {
                    return {
                        proxyClass: "v-tab--active"
                    }
                },
                computed: {
                    classes: function () {
                        return Xu({
                            "v-tab": !0
                        }, ne.options.computed.classes.call(this), {
                            "v-tab--disabled": this.disabled
                        }, this.groupClasses)
                    },
                    value: function () {
                        var t = this.to || this.href || "";
                        this.$router && this.to === Object(this.to) && (t = this.$router.resolve(this.to, this.$route, this.append).href);
                        return t.replace("#", "")
                    }
                },
                mounted: function () {
                    this.onRouteChange()
                },
                methods: {
                    click: function (t) {
                        this.href && this.href.indexOf("#") > -1 && t.preventDefault(), t.detail && this.$el.blur(), this.$emit("click", t), this.to || this.toggle()
                    }
                },
                render: function (t) {
                    var e = this,
                        i = this.generateRouteLink(),
                        n = i.tag,
                        s = i.data;
                    return s.attrs = Xu({}, s.attrs, {
                        "aria-selected": String(this.isActive),
                        role: "tab",
                        tabindex: 0
                    }), s.on = Xu({}, s.on, {
                        keydown: function (t) {
                            t.keyCode === U.enter && e.click(t), e.$emit("keydown", t)
                        }
                    }), t(n, s, this.$slots.default)
                }
            }),
            Ku = xr.extend({
                name: "v-tab-item",
                props: {
                    id: String
                },
                methods: {
                    genWindowItem: function () {
                        var t = xr.options.methods.genWindowItem.call(this);
                        return t.data.domProps = t.data.domProps || {}, t.data.domProps.id = this.id || this.value, t
                    }
                }
            }),
            Ju = (i(90), function () {
                return (Ju = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            Qu = d(_n).extend({
                name: "v-textarea",
                props: {
                    autoGrow: Boolean,
                    noResize: Boolean,
                    rowHeight: {
                        type: [Number, String],
                        default: 24,
                        validator: function (t) {
                            return !isNaN(parseFloat(t))
                        }
                    },
                    rows: {
                        type: [Number, String],
                        default: 5,
                        validator: function (t) {
                            return !isNaN(parseInt(t, 10))
                        }
                    }
                },
                computed: {
                    classes: function () {
                        return Ju({
                            "v-textarea": !0,
                            "v-textarea--auto-grow": this.autoGrow,
                            "v-textarea--no-resize": this.noResizeHandle
                        }, _n.options.computed.classes.call(this))
                    },
                    noResizeHandle: function () {
                        return this.noResize || this.autoGrow
                    }
                },
                watch: {
                    lazyValue: function () {
                        this.autoGrow && this.$nextTick(this.calculateInputHeight)
                    },
                    rowHeight: function () {
                        this.autoGrow && this.$nextTick(this.calculateInputHeight)
                    }
                },
                mounted: function () {
                    var t = this;
                    setTimeout(function () {
                        t.autoGrow && t.calculateInputHeight()
                    }, 0)
                },
                methods: {
                    calculateInputHeight: function () {
                        var t = this.$refs.input;
                        if (t) {
                            t.style.height = "0";
                            var e = t.scrollHeight,
                                i = parseInt(this.rows, 10) * parseFloat(this.rowHeight);
                            t.style.height = Math.max(i, e) + "px"
                        }
                    },
                    genInput: function () {
                        var t = _n.options.methods.genInput.call(this);
                        return t.tag = "textarea", delete t.data.attrs.type, t.data.attrs.rows = this.rows, t
                    },
                    onInput: function (t) {
                        _n.options.methods.onInput.call(this, t), this.autoGrow && this.calculateInputHeight()
                    },
                    onKeyDown: function (t) {
                        this.isFocused && 13 === t.keyCode && t.stopPropagation(), this.$emit("keydown", t)
                    }
                }
            }),
            tc = (i(91), function () {
                return (tc = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            ec = d(h).extend({
                name: "v-timeline",
                provide: function () {
                    return {
                        timeline: this
                    }
                },
                props: {
                    alignTop: Boolean,
                    dense: Boolean,
                    reverse: Boolean
                },
                computed: {
                    classes: function () {
                        return tc({
                            "v-timeline--align-top": this.alignTop,
                            "v-timeline--dense": this.dense,
                            "v-timeline--reverse": this.reverse
                        }, this.themeClasses)
                    }
                },
                render: function (t) {
                    return t("div", {
                        staticClass: "v-timeline",
                        class: this.classes
                    }, this.$slots.default)
                }
            }),
            ic = function () {
                return (ic = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            nc = d(_, h).extend().extend({
                name: "v-timeline-item",
                inject: ["timeline"],
                props: {
                    color: {
                        type: String,
                        default: "primary"
                    },
                    fillDot: Boolean,
                    hideDot: Boolean,
                    icon: String,
                    iconColor: String,
                    large: Boolean,
                    left: Boolean,
                    right: Boolean,
                    small: Boolean
                },
                computed: {
                    hasIcon: function () {
                        return !!this.icon || !!this.$slots.icon
                    }
                },
                methods: {
                    genBody: function () {
                        return this.$createElement("div", {
                            staticClass: "v-timeline-item__body"
                        }, this.$slots.default)
                    },
                    genIcon: function () {
                        return this.$slots.icon ? this.$slots.icon : this.$createElement(Lt, {
                            props: {
                                color: this.iconColor,
                                dark: !this.theme.isDark,
                                small: this.small
                            }
                        }, this.icon)
                    },
                    genInnerDot: function () {
                        var t = this.setBackgroundColor(this.color);
                        return this.$createElement("div", ic({
                            staticClass: "v-timeline-item__inner-dot"
                        }, t), [this.hasIcon && this.genIcon()])
                    },
                    genDot: function () {
                        return this.$createElement("div", {
                            staticClass: "v-timeline-item__dot",
                            class: {
                                "v-timeline-item__dot--small": this.small, "v-timeline-item__dot--large": this.large
                            }
                        }, [this.genInnerDot()])
                    },
                    genDivider: function () {
                        var t = [];
                        return this.hideDot || t.push(this.genDot()), this.$createElement("div", {
                            staticClass: "v-timeline-item__divider"
                        }, t)
                    },
                    genOpposite: function () {
                        return this.$createElement("div", {
                            staticClass: "v-timeline-item__opposite"
                        }, this.$slots.opposite)
                    }
                },
                render: function (t) {
                    var e = [this.genBody(), this.genDivider()];
                    return this.$slots.opposite && e.push(this.genOpposite()), t("div", {
                        staticClass: "v-timeline-item",
                        class: ic({
                            "v-timeline-item--fill-dot": this.fillDot,
                            "v-timeline-item--before": this.timeline.reverse ? this.right : this.left,
                            "v-timeline-item--after": this.timeline.reverse ? this.left : this.right
                        }, this.themeClasses)
                    }, e)
                }
            }),
            sc = (i(93), d(ka).extend({
                name: "v-time-picker-title",
                props: {
                    ampm: Boolean,
                    disabled: Boolean,
                    hour: Number,
                    minute: Number,
                    second: Number,
                    period: {
                        type: String,
                        validator: function (t) {
                            return "am" === t || "pm" === t
                        }
                    },
                    readonly: Boolean,
                    useSeconds: Boolean,
                    selecting: Number
                },
                methods: {
                    genTime: function () {
                        var t = this.hour;
                        this.ampm && (t = t ? (t - 1) % 12 + 1 : 12);
                        var e = null == this.hour ? "--" : this.ampm ? String(t) : Ia(t),
                            i = null == this.minute ? "--" : Ia(this.minute),
                            n = [this.genPickerButton("selecting", Ou.Hour, e, this.disabled), this.$createElement("span", ":"), this.genPickerButton("selecting", Ou.Minute, i, this.disabled)];
                        if (this.useSeconds) {
                            var s = null == this.second ? "--" : Ia(this.second);
                            n.push(this.$createElement("span", ":")), n.push(this.genPickerButton("selecting", Ou.Second, s, this.disabled))
                        }
                        return this.$createElement("div", {
                            class: "v-time-picker-title__time"
                        }, n)
                    },
                    genAmPm: function () {
                        return this.$createElement("div", {
                            staticClass: "v-time-picker-title__ampm"
                        }, [this.genPickerButton("period", "am", this.$vuetify.lang.t("$vuetify.timePicker.am"), this.disabled || this.readonly), this.genPickerButton("period", "pm", this.$vuetify.lang.t("$vuetify.timePicker.pm"), this.disabled || this.readonly)])
                    }
                },
                render: function (t) {
                    var e = [this.genTime()];
                    return this.ampm && e.push(this.genAmPm()), t("div", {
                        staticClass: "v-time-picker-title"
                    }, e)
                }
            })),
            rc = (i(92), function () {
                return (rc = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            oc = d(_, h).extend({
                name: "v-time-picker-clock",
                props: {
                    allowedValues: Function,
                    ampm: Boolean,
                    disabled: Boolean,
                    double: Boolean,
                    format: {
                        type: Function,
                        default: function (t) {
                            return t
                        }
                    },
                    max: {
                        type: Number,
                        required: !0
                    },
                    min: {
                        type: Number,
                        required: !0
                    },
                    scrollable: Boolean,
                    readonly: Boolean,
                    rotate: {
                        type: Number,
                        default: 0
                    },
                    step: {
                        type: Number,
                        default: 1
                    },
                    value: Number
                },
                data: function () {
                    return {
                        inputValue: this.value,
                        isDragging: !1,
                        valueOnMouseDown: null,
                        valueOnMouseUp: null
                    }
                },
                computed: {
                    count: function () {
                        return this.max - this.min + 1
                    },
                    degreesPerUnit: function () {
                        return 360 / this.roundCount
                    },
                    degrees: function () {
                        return this.degreesPerUnit * Math.PI / 180
                    },
                    displayedValue: function () {
                        return null == this.value ? this.min : this.value
                    },
                    innerRadiusScale: function () {
                        return .62
                    },
                    roundCount: function () {
                        return this.double ? this.count / 2 : this.count
                    }
                },
                watch: {
                    value: function (t) {
                        this.inputValue = t
                    }
                },
                methods: {
                    wheel: function (t) {
                        t.preventDefault();
                        var e = Math.sign(-t.deltaY || 1),
                            i = this.displayedValue;
                        do {
                            i = ((i += e) - this.min + this.count) % this.count + this.min
                        } while (!this.isAllowed(i) && i !== this.displayedValue);
                        i !== this.displayedValue && this.update(i)
                    },
                    isInner: function (t) {
                        return this.double && t - this.min >= this.roundCount
                    },
                    handScale: function (t) {
                        return this.isInner(t) ? this.innerRadiusScale : 1
                    },
                    isAllowed: function (t) {
                        return !this.allowedValues || this.allowedValues(t)
                    },
                    genValues: function () {
                        for (var t = [], e = this.min; e <= this.max; e += this.step) {
                            var i = e === this.value && (this.color || "accent");
                            t.push(this.$createElement("span", this.setBackgroundColor(i, {
                                staticClass: "v-time-picker-clock__item",
                                class: {
                                    "v-time-picker-clock__item--active": e === this.displayedValue, "v-time-picker-clock__item--disabled": this.disabled || !this.isAllowed(e)
                                },
                                style: this.getTransform(e),
                                domProps: {
                                    innerHTML: "<span>" + this.format(e) + "</span>"
                                }
                            })))
                        }
                        return t
                    },
                    genHand: function () {
                        var t = "scaleY(" + this.handScale(this.displayedValue) + ")",
                            e = this.rotate + this.degreesPerUnit * (this.displayedValue - this.min),
                            i = null != this.value && (this.color || "accent");
                        return this.$createElement("div", this.setBackgroundColor(i, {
                            staticClass: "v-time-picker-clock__hand",
                            class: {
                                "v-time-picker-clock__hand--inner": this.isInner(this.value)
                            },
                            style: {
                                transform: "rotate(" + e + "deg) " + t
                            }
                        }))
                    },
                    getTransform: function (t) {
                        var e = this.getPosition(t);
                        return {
                            left: 50 + 50 * e.x + "%",
                            top: 50 + 50 * e.y + "%"
                        }
                    },
                    getPosition: function (t) {
                        var e = this.rotate * Math.PI / 180;
                        return {
                            x: Math.sin((t - this.min) * this.degrees + e) * this.handScale(t),
                            y: -Math.cos((t - this.min) * this.degrees + e) * this.handScale(t)
                        }
                    },
                    onMouseDown: function (t) {
                        t.preventDefault(), this.valueOnMouseDown = null, this.valueOnMouseUp = null, this.isDragging = !0, this.onDragMove(t)
                    },
                    onMouseUp: function (t) {
                        t.stopPropagation(), this.isDragging = !1, null !== this.valueOnMouseUp && this.isAllowed(this.valueOnMouseUp) && this.$emit("change", this.valueOnMouseUp)
                    },
                    onDragMove: function (t) {
                        if (t.preventDefault(), this.isDragging || "click" === t.type) {
                            var e, i = this.$refs.clock.getBoundingClientRect(),
                                n = i.width,
                                s = i.top,
                                r = i.left,
                                o = this.$refs.innerClock.getBoundingClientRect().width,
                                a = "touches" in t ? t.touches[0] : t,
                                l = {
                                    x: n / 2,
                                    y: -n / 2
                                },
                                u = {
                                    x: a.clientX - r,
                                    y: s - a.clientY
                                },
                                c = Math.round(this.angle(l, u) - this.rotate + 360) % 360,
                                h = this.double && this.euclidean(l, u) < (o + o * this.innerRadiusScale) / 4,
                                d = (Math.round(c / this.degreesPerUnit) + (h ? this.roundCount : 0)) % this.count + this.min;
                            e = c >= 360 - this.degreesPerUnit / 2 ? h ? this.max - this.roundCount + 1 : this.min : d, this.isAllowed(d) && (null === this.valueOnMouseDown && (this.valueOnMouseDown = e), this.valueOnMouseUp = e, this.update(e))
                        }
                    },
                    update: function (t) {
                        this.inputValue !== t && (this.inputValue = t, this.$emit("input", t))
                    },
                    euclidean: function (t, e) {
                        var i = e.x - t.x,
                            n = e.y - t.y;
                        return Math.sqrt(i * i + n * n)
                    },
                    angle: function (t, e) {
                        var i = 2 * Math.atan2(e.y - t.y - this.euclidean(t, e), e.x - t.x);
                        return Math.abs(180 * i / Math.PI)
                    }
                },
                render: function (t) {
                    var e = this;
                    return t("div", {
                        staticClass: "v-time-picker-clock",
                        class: rc({
                            "v-time-picker-clock--indeterminate": null == this.value
                        }, this.themeClasses),
                        on: this.readonly || this.disabled ? void 0 : Object.assign({
                            mousedown: this.onMouseDown,
                            mouseup: this.onMouseUp,
                            mouseleave: function (t) {
                                return e.isDragging && e.onMouseUp(t)
                            },
                            touchstart: this.onMouseDown,
                            touchend: this.onMouseUp,
                            mousemove: this.onDragMove,
                            touchmove: this.onDragMove
                        }, this.scrollable ? {
                            wheel: this.wheel
                        } : {}),
                        ref: "clock"
                    }, [t("div", {
                        staticClass: "v-time-picker-clock__inner",
                        ref: "innerClock"
                    }, [this.genHand(), this.genValues()])])
                }
            }),
            ac = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            lc = N(24),
            uc = N(12),
            cc = uc.map(function (t) {
                return t + 12
            }),
            hc = N(60);
        ! function (t) {
            t[t.Hour = 1] = "Hour", t[t.Minute = 2] = "Minute", t[t.Second = 3] = "Second"
        }(Ou || (Ou = {}));
        var dc = {
                1: "hour",
                2: "minute",
                3: "second"
            },
            pc = d(Ya, ka).extend({
                name: "v-time-picker",
                props: {
                    allowedHours: {
                        type: [Function, Array]
                    },
                    allowedMinutes: {
                        type: [Function, Array]
                    },
                    allowedSeconds: {
                        type: [Function, Array]
                    },
                    disabled: Boolean,
                    format: {
                        type: String,
                        default: "ampm",
                        validator: function (t) {
                            return ["ampm", "24hr"].includes(t)
                        }
                    },
                    min: String,
                    max: String,
                    readonly: Boolean,
                    scrollable: Boolean,
                    useSeconds: Boolean,
                    value: null,
                    ampmInTitle: Boolean
                },
                data: function () {
                    return {
                        inputHour: null,
                        inputMinute: null,
                        inputSecond: null,
                        lazyInputHour: null,
                        lazyInputMinute: null,
                        lazyInputSecond: null,
                        period: "am",
                        selecting: Ou.Hour
                    }
                },
                computed: {
                    selectingHour: {
                        get: function () {
                            return this.selecting === Ou.Hour
                        },
                        set: function (t) {
                            this.selecting = Ou.Hour
                        }
                    },
                    selectingMinute: {
                        get: function () {
                            return this.selecting === Ou.Minute
                        },
                        set: function (t) {
                            this.selecting = Ou.Minute
                        }
                    },
                    selectingSecond: {
                        get: function () {
                            return this.selecting === Ou.Second
                        },
                        set: function (t) {
                            this.selecting = Ou.Second
                        }
                    },
                    isAllowedHourCb: function () {
                        var t, e = this;
                        if (t = this.allowedHours instanceof Array ? function (t) {
                                return e.allowedHours.includes(t)
                            } : this.allowedHours, !this.min && !this.max) return t;
                        var i = this.min ? Number(this.min.split(":")[0]) : 0,
                            n = this.max ? Number(this.max.split(":")[0]) : 23;
                        return function (e) {
                            return e >= 1 * i && e <= 1 * n && (!t || t(e))
                        }
                    },
                    isAllowedMinuteCb: function () {
                        var t, e = this,
                            i = !this.isAllowedHourCb || null === this.inputHour || this.isAllowedHourCb(this.inputHour);
                        if (t = this.allowedMinutes instanceof Array ? function (t) {
                                return e.allowedMinutes.includes(t)
                            } : this.allowedMinutes, !this.min && !this.max) return i ? t : function () {
                            return !1
                        };
                        var n = ac(this.min ? this.min.split(":").map(Number) : [0, 0], 2),
                            s = n[0],
                            r = n[1],
                            o = ac(this.max ? this.max.split(":").map(Number) : [23, 59], 2),
                            a = o[0],
                            l = o[1],
                            u = 60 * s + 1 * r,
                            c = 60 * a + 1 * l;
                        return function (n) {
                            var s = 60 * e.inputHour + n;
                            return s >= u && s <= c && i && (!t || t(n))
                        }
                    },
                    isAllowedSecondCb: function () {
                        var t, e = this,
                            i = (!this.isAllowedHourCb || null === this.inputHour || this.isAllowedHourCb(this.inputHour)) && (!this.isAllowedMinuteCb || null === this.inputMinute || this.isAllowedMinuteCb(this.inputMinute));
                        if (t = this.allowedSeconds instanceof Array ? function (t) {
                                return e.allowedSeconds.includes(t)
                            } : this.allowedSeconds, !this.min && !this.max) return i ? t : function () {
                            return !1
                        };
                        var n = ac(this.min ? this.min.split(":").map(Number) : [0, 0, 0], 3),
                            s = n[0],
                            r = n[1],
                            o = n[2],
                            a = ac(this.max ? this.max.split(":").map(Number) : [23, 59, 59], 3),
                            l = a[0],
                            u = a[1],
                            c = a[2],
                            h = 3600 * s + 60 * r + 1 * (o || 0),
                            d = 3600 * l + 60 * u + 1 * (c || 0);
                        return function (n) {
                            var s = 3600 * e.inputHour + 60 * e.inputMinute + n;
                            return s >= h && s <= d && i && (!t || t(n))
                        }
                    },
                    isAmPm: function () {
                        return "ampm" === this.format
                    }
                },
                watch: {
                    value: "setInputData"
                },
                mounted: function () {
                    this.setInputData(this.value), this.$on("update:period", this.setPeriod)
                },
                methods: {
                    genValue: function () {
                        return null == this.inputHour || null == this.inputMinute || this.useSeconds && null == this.inputSecond ? null : Ia(this.inputHour) + ":" + Ia(this.inputMinute) + (this.useSeconds ? ":" + Ia(this.inputSecond) : "")
                    },
                    emitValue: function () {
                        var t = this.genValue();
                        null !== t && this.$emit("input", t)
                    },
                    setPeriod: function (t) {
                        if (this.period = t, null != this.inputHour) {
                            var e = this.inputHour + ("am" === t ? -12 : 12);
                            this.inputHour = this.firstAllowed("hour", e), this.emitValue()
                        }
                    },
                    setInputData: function (t) {
                        if (null == t || "" === t) this.inputHour = null, this.inputMinute = null, this.inputSecond = null;
                        else if (t instanceof Date) this.inputHour = t.getHours(), this.inputMinute = t.getMinutes(), this.inputSecond = t.getSeconds();
                        else {
                            var e = ac(t.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6), 6),
                                i = e[1],
                                n = e[2],
                                s = e[4],
                                r = e[5];
                            this.inputHour = r ? this.convert12to24(parseInt(i, 10), r) : parseInt(i, 10), this.inputMinute = parseInt(n, 10), this.inputSecond = parseInt(s || 0, 10)
                        }
                        this.period = null == this.inputHour || this.inputHour < 12 ? "am" : "pm"
                    },
                    convert24to12: function (t) {
                        return t ? (t - 1) % 12 + 1 : 12
                    },
                    convert12to24: function (t, e) {
                        return t % 12 + ("pm" === e ? 12 : 0)
                    },
                    onInput: function (t) {
                        this.selecting === Ou.Hour ? this.inputHour = this.isAmPm ? this.convert12to24(t, this.period) : t : this.selecting === Ou.Minute ? this.inputMinute = t : this.inputSecond = t, this.emitValue()
                    },
                    onChange: function (t) {
                        this.$emit("click:" + dc[this.selecting], t);
                        var e = this.selecting === (this.useSeconds ? Ou.Second : Ou.Minute);
                        if (this.selecting === Ou.Hour ? this.selecting = Ou.Minute : this.useSeconds && this.selecting === Ou.Minute && (this.selecting = Ou.Second), this.inputHour !== this.lazyInputHour || this.inputMinute !== this.lazyInputMinute || this.useSeconds && this.inputSecond !== this.lazyInputSecond) {
                            var i = this.genValue();
                            null !== i && (this.lazyInputHour = this.inputHour, this.lazyInputMinute = this.inputMinute, this.useSeconds && (this.lazyInputSecond = this.inputSecond), e && this.$emit("change", i))
                        }
                    },
                    firstAllowed: function (t, e) {
                        var i = "hour" === t ? this.isAllowedHourCb : "minute" === t ? this.isAllowedMinuteCb : this.isAllowedSecondCb;
                        if (!i) return e;
                        var n = "minute" === t ? hc : "second" === t ? hc : this.isAmPm ? e < 12 ? uc : cc : lc;
                        return ((n.find(function (t) {
                            return i((t + e) % n.length + n[0])
                        }) || 0) + e) % n.length + n[0]
                    },
                    genClock: function () {
                        return this.$createElement(oc, {
                            props: {
                                allowedValues: this.selecting === Ou.Hour ? this.isAllowedHourCb : this.selecting === Ou.Minute ? this.isAllowedMinuteCb : this.isAllowedSecondCb,
                                color: this.color,
                                dark: this.dark,
                                disabled: this.disabled,
                                double: this.selecting === Ou.Hour && !this.isAmPm,
                                format: this.selecting === Ou.Hour ? this.isAmPm ? this.convert24to12 : function (t) {
                                    return t
                                } : function (t) {
                                    return Ia(t, 2)
                                },
                                light: this.light,
                                max: this.selecting === Ou.Hour ? this.isAmPm && "am" === this.period ? 11 : 23 : 59,
                                min: this.selecting === Ou.Hour && this.isAmPm && "pm" === this.period ? 12 : 0,
                                readonly: this.readonly,
                                scrollable: this.scrollable,
                                size: Number(this.width) - (!this.fullWidth && this.landscape ? 80 : 20),
                                step: this.selecting === Ou.Hour ? 1 : 5,
                                value: this.selecting === Ou.Hour ? this.inputHour : this.selecting === Ou.Minute ? this.inputMinute : this.inputSecond
                            },
                            on: {
                                input: this.onInput,
                                change: this.onChange
                            },
                            ref: "clock"
                        })
                    },
                    genClockAmPm: function () {
                        return this.$createElement("div", this.setTextColor(this.color || "primary", {
                            staticClass: "v-time-picker-clock__ampm"
                        }), [this.genPickerButton("period", "am", this.$vuetify.lang.t("$vuetify.timePicker.am"), this.disabled || this.readonly), this.genPickerButton("period", "pm", this.$vuetify.lang.t("$vuetify.timePicker.pm"), this.disabled || this.readonly)])
                    },
                    genPickerBody: function () {
                        return this.$createElement("div", {
                            staticClass: "v-time-picker-clock__container",
                            key: this.selecting
                        }, [!this.ampmInTitle && this.isAmPm && this.genClockAmPm(), this.genClock()])
                    },
                    genPickerTitle: function () {
                        var t = this;
                        return this.$createElement(sc, {
                            props: {
                                ampm: this.ampmInTitle && this.isAmPm,
                                disabled: this.disabled,
                                hour: this.inputHour,
                                minute: this.inputMinute,
                                second: this.inputSecond,
                                period: this.period,
                                readonly: this.readonly,
                                useSeconds: this.useSeconds,
                                selecting: this.selecting
                            },
                            on: {
                                "update:selecting": function (e) {
                                    return t.selecting = e
                                },
                                "update:period": this.setPeriod
                            },
                            ref: "title",
                            slot: "title"
                        })
                    }
                },
                render: function () {
                    return this.genPicker("v-picker--time")
                }
            }),
            fc = E("v-toolbar__title"),
            vc = E("v-toolbar__items"),
            mc = (i(94), d(_, Ze, Qe, ii, ui, Bt).extend({
                name: "v-tooltip",
                props: {
                    closeDelay: {
                        type: [Number, String],
                        default: 0
                    },
                    disabled: Boolean,
                    fixed: {
                        type: Boolean,
                        default: !0
                    },
                    openDelay: {
                        type: [Number, String],
                        default: 0
                    },
                    openOnHover: {
                        type: Boolean,
                        default: !0
                    },
                    tag: {
                        type: String,
                        default: "span"
                    },
                    transition: String,
                    zIndex: {
                        default: null
                    }
                },
                data: function () {
                    return {
                        calculatedMinWidth: 0,
                        closeDependents: !1
                    }
                },
                computed: {
                    calculatedLeft: function () {
                        var t = this.dimensions,
                            e = t.activator,
                            i = t.content,
                            n = !(this.bottom || this.left || this.top || this.right),
                            s = !1 !== this.attach ? e.offsetLeft : e.left,
                            r = 0;
                        return this.top || this.bottom || n ? r = s + e.width / 2 - i.width / 2 : (this.left || this.right) && (r = s + (this.right ? e.width : -i.width) + (this.right ? 10 : -10)), this.nudgeLeft && (r -= parseInt(this.nudgeLeft)), this.nudgeRight && (r += parseInt(this.nudgeRight)), this.calcXOverflow(r, this.dimensions.content.width) + "px"
                    },
                    calculatedTop: function () {
                        var t = this.dimensions,
                            e = t.activator,
                            i = t.content,
                            n = !1 !== this.attach ? e.offsetTop : e.top,
                            s = 0;
                        return this.top || this.bottom ? s = n + (this.bottom ? e.height : -i.height) + (this.bottom ? 10 : -10) : (this.left || this.right) && (s = n + e.height / 2 - i.height / 2), this.nudgeTop && (s -= parseInt(this.nudgeTop)), this.nudgeBottom && (s += parseInt(this.nudgeBottom)), this.calcYOverflow(s + this.pageYOffset) + "px"
                    },
                    classes: function () {
                        return {
                            "v-tooltip--top": this.top,
                            "v-tooltip--right": this.right,
                            "v-tooltip--bottom": this.bottom,
                            "v-tooltip--left": this.left,
                            "v-tooltip--attached": "" === this.attach || !0 === this.attach || "attach" === this.attach
                        }
                    },
                    computedTransition: function () {
                        return this.transition ? this.transition : this.isActive ? "scale-transition" : "fade-transition"
                    },
                    offsetY: function () {
                        return this.top || this.bottom
                    },
                    offsetX: function () {
                        return this.left || this.right
                    },
                    styles: function () {
                        return {
                            left: this.calculatedLeft,
                            maxWidth: Y(this.maxWidth),
                            minWidth: Y(this.minWidth),
                            opacity: this.isActive ? .9 : 0,
                            top: this.calculatedTop,
                            zIndex: this.zIndex || this.activeZIndex
                        }
                    }
                },
                beforeMount: function () {
                    var t = this;
                    this.$nextTick(function () {
                        t.value && t.callActivate()
                    })
                },
                mounted: function () {
                    "v-slot" === tt(this, "activator", !0) && b("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'", this)
                },
                methods: {
                    activate: function () {
                        this.updateDimensions(), requestAnimationFrame(this.startTransition)
                    },
                    deactivate: function () {
                        this.runDelay("close")
                    },
                    genActivatorListeners: function () {
                        var t = this,
                            e = li.options.methods.genActivatorListeners.call(this);
                        return e.focus = function (e) {
                            t.getActivator(e), t.runDelay("open")
                        }, e.blur = function (e) {
                            t.getActivator(e), t.runDelay("close")
                        }, e.keydown = function (e) {
                            e.keyCode === U.esc && (t.getActivator(e), t.runDelay("close"))
                        }, e
                    }
                },
                render: function (t) {
                    var e, i = t("div", this.setBackgroundColor(this.color, {
                        staticClass: "v-tooltip__content",
                        class: (e = {}, e[this.contentClass] = !0, e.menuable__content__active = this.isActive, e["v-tooltip__content--fixed"] = this.activatorFixed, e),
                        style: this.styles,
                        attrs: this.getScopeIdAttrs(),
                        directives: [{
                            name: "show",
                            value: this.isContentActive
                        }],
                        ref: "content"
                    }), this.showLazyContent(this.getContentSlot()));
                    return t(this.tag, {
                        staticClass: "v-tooltip",
                        class: this.classes
                    }, [t("transition", {
                        props: {
                            name: this.computedTransition
                        }
                    }, [i]), this.genActivator()])
                }
            })),
            gc = (i(95), function () {
                return (gc = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            }),
            yc = d(_, zt("treeview")),
            bc = {
                activatable: Boolean,
                activeClass: {
                    type: String,
                    default: "v-treeview-node--active"
                },
                color: {
                    type: String,
                    default: "primary"
                },
                expandIcon: {
                    type: String,
                    default: "$subgroup"
                },
                indeterminateIcon: {
                    type: String,
                    default: "$checkboxIndeterminate"
                },
                itemChildren: {
                    type: String,
                    default: "children"
                },
                itemDisabled: {
                    type: String,
                    default: "disabled"
                },
                itemKey: {
                    type: String,
                    default: "id"
                },
                itemText: {
                    type: String,
                    default: "name"
                },
                loadChildren: Function,
                loadingIcon: {
                    type: String,
                    default: "$loading"
                },
                offIcon: {
                    type: String,
                    default: "$checkboxOff"
                },
                onIcon: {
                    type: String,
                    default: "$checkboxOn"
                },
                openOnClick: Boolean,
                rounded: Boolean,
                selectable: Boolean,
                selectedColor: {
                    type: String,
                    default: "accent"
                },
                shaped: Boolean,
                transition: Boolean
            },
            Sc = yc.extend().extend({
                name: "v-treeview-node",
                inject: {
                    treeview: {
                        default: null
                    }
                },
                props: gc({
                    item: {
                        type: Object,
                        default: function () {
                            return null
                        }
                    }
                }, bc),
                data: function () {
                    return {
                        hasLoaded: !1,
                        isActive: !1,
                        isIndeterminate: !1,
                        isLoading: !1,
                        isOpen: !1,
                        isSelected: !1
                    }
                },
                computed: {
                    disabled: function () {
                        return H(this.item, this.itemDisabled)
                    },
                    key: function () {
                        return H(this.item, this.itemKey)
                    },
                    children: function () {
                        return H(this.item, this.itemChildren)
                    },
                    text: function () {
                        return H(this.item, this.itemText)
                    },
                    scopedProps: function () {
                        return {
                            item: this.item,
                            leaf: !this.children,
                            selected: this.isSelected,
                            indeterminate: this.isIndeterminate,
                            active: this.isActive,
                            open: this.isOpen
                        }
                    },
                    computedIcon: function () {
                        return this.isIndeterminate ? this.indeterminateIcon : this.isSelected ? this.onIcon : this.offIcon
                    },
                    hasChildren: function () {
                        return !(!this.children || !this.children.length && !this.loadChildren)
                    }
                },
                created: function () {
                    this.treeview.register(this)
                },
                beforeDestroy: function () {
                    this.treeview.unregister(this)
                },
                methods: {
                    checkChildren: function () {
                        var t = this;
                        return new Promise(function (e) {
                            if (!t.children || t.children.length || !t.loadChildren || t.hasLoaded) return e();
                            t.isLoading = !0, e(t.loadChildren(t.item))
                        }).then(function () {
                            t.isLoading = !1, t.hasLoaded = !0
                        })
                    },
                    open: function () {
                        this.isOpen = !this.isOpen, this.treeview.updateOpen(this.key, this.isOpen), this.treeview.emitOpen()
                    },
                    genLabel: function () {
                        var t = [];
                        return this.$scopedSlots.label ? t.push(this.$scopedSlots.label(this.scopedProps)) : t.push(this.text), this.$createElement("div", {
                            slot: "label",
                            staticClass: "v-treeview-node__label"
                        }, t)
                    },
                    genContent: function () {
                        var t = [this.$scopedSlots.prepend && this.$scopedSlots.prepend(this.scopedProps), this.genLabel(), this.$scopedSlots.append && this.$scopedSlots.append(this.scopedProps)];
                        return this.$createElement("div", {
                            staticClass: "v-treeview-node__content"
                        }, t)
                    },
                    genToggle: function () {
                        var t = this;
                        return this.$createElement(Pt, {
                            staticClass: "v-treeview-node__toggle",
                            class: {
                                "v-treeview-node__toggle--open": this.isOpen, "v-treeview-node__toggle--loading": this.isLoading
                            },
                            slot: "prepend",
                            on: {
                                click: function (e) {
                                    t.disabled || (e.stopPropagation(), t.isLoading || t.checkChildren().then(function () {
                                        return t.open()
                                    }))
                                }
                            }
                        }, [this.isLoading ? this.loadingIcon : this.expandIcon])
                    },
                    genCheckbox: function () {
                        var t = this;
                        return this.$createElement(Pt, {
                            staticClass: "v-treeview-node__checkbox",
                            props: {
                                color: this.isSelected ? this.selectedColor : void 0
                            },
                            on: {
                                click: function (e) {
                                    t.disabled || (e.stopPropagation(), t.isLoading || t.checkChildren().then(function () {
                                        t.$nextTick(function () {
                                            t.isSelected = !t.isSelected, t.isIndeterminate = !1, t.treeview.updateSelected(t.key, t.isSelected), t.treeview.emitSelected()
                                        })
                                    }))
                                }
                            }
                        }, [this.computedIcon])
                    },
                    genNode: function () {
                        var t, e = this,
                            i = [this.genContent()];
                        return this.selectable && i.unshift(this.genCheckbox()), this.hasChildren && i.unshift(this.genToggle()), this.$createElement("div", this.setTextColor(this.isActive && this.color, {
                            staticClass: "v-treeview-node__root",
                            class: (t = {}, t[this.activeClass] = this.isActive, t),
                            on: {
                                click: function () {
                                    e.disabled || (e.openOnClick && e.hasChildren ? e.open() : e.activatable && (e.isActive = !e.isActive, e.treeview.updateActive(e.key, e.isActive), e.treeview.emitActive()))
                                }
                            }
                        }), i)
                    },
                    genChild: function (t) {
                        return this.$createElement(Sc, {
                            key: H(t, this.itemKey),
                            props: {
                                activatable: this.activatable,
                                activeClass: this.activeClass,
                                item: t,
                                selectable: this.selectable,
                                selectedColor: this.selectedColor,
                                color: this.color,
                                expandIcon: this.expandIcon,
                                indeterminateIcon: this.indeterminateIcon,
                                offIcon: this.offIcon,
                                onIcon: this.onIcon,
                                loadingIcon: this.loadingIcon,
                                itemKey: this.itemKey,
                                itemText: this.itemText,
                                itemDisabled: this.itemDisabled,
                                itemChildren: this.itemChildren,
                                loadChildren: this.loadChildren,
                                transition: this.transition,
                                openOnClick: this.openOnClick,
                                rounded: this.rounded,
                                shaped: this.shaped
                            },
                            scopedSlots: this.$scopedSlots
                        })
                    },
                    genChildrenWrapper: function () {
                        if (!this.isOpen || !this.children) return null;
                        var t = [this.children.map(this.genChild)];
                        return this.$createElement("div", {
                            staticClass: "v-treeview-node__children"
                        }, t)
                    },
                    genTransition: function () {
                        return this.$createElement(Re, [this.genChildrenWrapper()])
                    }
                },
                render: function (t) {
                    var e = [this.genNode()];
                    return this.transition ? e.push(this.genTransition()) : e.push(this.genChildrenWrapper()), t("div", {
                        staticClass: "v-treeview-node",
                        class: {
                            "v-treeview-node--leaf": !this.hasChildren, "v-treeview-node--click": this.openOnClick, "v-treeview-node--disabled": this.disabled, "v-treeview-node--rounded": this.rounded, "v-treeview-node--shaped": this.shaped, "v-treeview-node--selected": this.isSelected, "v-treeview-node--excluded": this.treeview.isExcluded(this.key)
                        },
                        attrs: {
                            "aria-expanded": String(this.isOpen)
                        }
                    }, e)
                }
            });

        function xc(t, e, i) {
            return H(t, i).toLocaleLowerCase().indexOf(e.toLocaleLowerCase()) > -1
        }

        function wc(t, e, i, n, s, r, o) {
            if (t(e, i, s)) return !0;
            var a = H(e, r);
            if (a) {
                for (var l = !1, u = 0; u < a.length; u++) wc(t, a[u], i, n, s, r, o) && (l = !0);
                if (l) return !0
            }
            return o.add(H(e, n)), !1
        }
        var Cc = function () {
                return (Cc = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            kc = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            $c = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(kc(arguments[e]));
                return t
            },
            Ic = function (t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    i = 0;
                return e ? e.call(t) : {
                    next: function () {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                }
            },
            Oc = d(Wt("treeview"), h).extend({
                name: "v-treeview",
                provide: function () {
                    return {
                        treeview: this
                    }
                },
                props: Cc({
                    active: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    dense: Boolean,
                    filter: Function,
                    hoverable: Boolean,
                    items: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    multipleActive: Boolean,
                    open: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    },
                    openAll: Boolean,
                    returnObject: {
                        type: Boolean,
                        default: !1
                    },
                    search: String,
                    selectionType: {
                        type: String,
                        default: "leaf",
                        validator: function (t) {
                            return ["leaf", "independent"].includes(t)
                        }
                    },
                    value: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    }
                }, bc),
                data: function () {
                    return {
                        activeCache: new Set,
                        nodes: {},
                        openCache: new Set,
                        selectedCache: new Set
                    }
                },
                computed: {
                    excludedItems: function () {
                        var t = new Set;
                        if (!this.search) return t;
                        for (var e = 0; e < this.items.length; e++) wc(this.filter || xc, this.items[e], this.search, this.itemKey, this.itemText, this.itemChildren, t);
                        return t
                    }
                },
                watch: {
                    items: {
                        handler: function () {
                            var t = this,
                                e = Object.keys(this.nodes).map(function (e) {
                                    return H(t.nodes[e].item, t.itemKey)
                                }),
                                i = this.getKeys(this.items),
                                n = function (t, e) {
                                    for (var i = [], n = 0; n < e.length; n++) t.indexOf(e[n]) < 0 && i.push(e[n]);
                                    return i
                                }(i, e);
                            if (n.length || !(i.length < e.length)) {
                                n.forEach(function (e) {
                                    return delete t.nodes[e]
                                });
                                var s = $c(this.selectedCache);
                                this.selectedCache = new Set, this.activeCache = new Set, this.openCache = new Set, this.buildTree(this.items), L(s, $c(this.selectedCache)) || this.emitSelected()
                            }
                        },
                        deep: !0
                    },
                    active: function (t) {
                        this.handleNodeCacheWatcher(t, this.activeCache, this.updateActive, this.emitActive)
                    },
                    value: function (t) {
                        this.handleNodeCacheWatcher(t, this.selectedCache, this.updateSelected, this.emitSelected)
                    },
                    open: function (t) {
                        this.handleNodeCacheWatcher(t, this.openCache, this.updateOpen, this.emitOpen)
                    }
                },
                created: function () {
                    var t = this;
                    this.buildTree(this.items), this.value.forEach(function (e) {
                        return t.updateSelected(t.returnObject ? H(e, t.itemKey) : e, !0)
                    }), this.active.forEach(function (e) {
                        return t.updateActive(t.returnObject ? H(e, t.itemKey) : e, !0)
                    })
                },
                mounted: function () {
                    var t = this;
                    (this.$slots.prepend || this.$slots.append) && y("The prepend and append slots require a slot-scope attribute", this), this.openAll ? this.updateAll(!0) : (this.open.forEach(function (e) {
                        return t.updateOpen(t.returnObject ? H(e, t.itemKey) : e, !0)
                    }), this.emitOpen())
                },
                methods: {
                    updateAll: function (t) {
                        var e = this;
                        Object.keys(this.nodes).forEach(function (i) {
                            return e.updateOpen(H(e.nodes[i].item, e.itemKey), t)
                        }), this.emitOpen()
                    },
                    getKeys: function (t, e) {
                        void 0 === e && (e = []);
                        for (var i = 0; i < t.length; i++) {
                            var n = H(t[i], this.itemKey);
                            e.push(n);
                            var s = H(t[i], this.itemChildren);
                            s && e.push.apply(e, $c(this.getKeys(s)))
                        }
                        return e
                    },
                    buildTree: function (t, e) {
                        var i = this;
                        void 0 === e && (e = null);
                        for (var n = 0; n < t.length; n++) {
                            var s = t[n],
                                r = H(s, this.itemKey),
                                o = H(s, this.itemChildren, []),
                                a = this.nodes.hasOwnProperty(r) ? this.nodes[r] : {
                                    isSelected: !1,
                                    isIndeterminate: !1,
                                    isActive: !1,
                                    isOpen: !1,
                                    vnode: null
                                },
                                l = {
                                    vnode: a.vnode,
                                    parent: e,
                                    children: o.map(function (t) {
                                        return H(t, i.itemKey)
                                    }),
                                    item: s
                                };
                            this.buildTree(o, r), !this.nodes.hasOwnProperty(r) && null !== e && this.nodes.hasOwnProperty(e) ? (l.isSelected = this.nodes[e].isSelected, l.isIndeterminate = this.nodes[e].isIndeterminate) : (l.isSelected = a.isSelected, l.isIndeterminate = a.isIndeterminate), l.isActive = a.isActive, l.isOpen = a.isOpen, this.nodes[r] = o.length ? this.calculateState(l, this.nodes) : l, this.nodes[r].isSelected && this.selectedCache.add(r), this.nodes[r].isActive && this.activeCache.add(r), this.nodes[r].isOpen && this.openCache.add(r), this.updateVnodeState(r)
                        }
                    },
                    calculateState: function (t, e) {
                        var i = t.children.reduce(function (t, i) {
                            return t[0] += +Boolean(e[i].isSelected), t[1] += +Boolean(e[i].isIndeterminate), t
                        }, [0, 0]);
                        return t.isSelected = !!t.children.length && i[0] === t.children.length, t.isIndeterminate = !t.isSelected && (i[0] > 0 || i[1] > 0), t
                    },
                    emitOpen: function () {
                        this.emitNodeCache("update:open", this.openCache)
                    },
                    emitSelected: function () {
                        this.emitNodeCache("input", this.selectedCache)
                    },
                    emitActive: function () {
                        this.emitNodeCache("update:active", this.activeCache)
                    },
                    emitNodeCache: function (t, e) {
                        var i = this;
                        this.$emit(t, this.returnObject ? $c(e).map(function (t) {
                            return i.nodes[t].item
                        }) : $c(e))
                    },
                    handleNodeCacheWatcher: function (t, e, i, n) {
                        var s = this;
                        t = this.returnObject ? t.map(function (t) {
                            return H(t, s.itemKey)
                        }) : t;
                        var r = $c(e);
                        L(r, t) || (r.forEach(function (t) {
                            return i(t, !1)
                        }), t.forEach(function (t) {
                            return i(t, !0)
                        }), n())
                    },
                    getDescendants: function (t, e) {
                        void 0 === e && (e = []);
                        var i = this.nodes[t].children;
                        e.push.apply(e, $c(i));
                        for (var n = 0; n < i.length; n++) e = this.getDescendants(i[n], e);
                        return e
                    },
                    getParents: function (t) {
                        for (var e = this.nodes[t].parent, i = []; null !== e;) i.push(e), e = this.nodes[e].parent;
                        return i
                    },
                    register: function (t) {
                        var e = H(t.item, this.itemKey);
                        this.nodes[e].vnode = t, this.updateVnodeState(e)
                    },
                    unregister: function (t) {
                        var e = H(t.item, this.itemKey);
                        this.nodes[e] && (this.nodes[e].vnode = null)
                    },
                    isParent: function (t) {
                        return this.nodes[t].children && this.nodes[t].children.length
                    },
                    updateActive: function (t, e) {
                        var i = this;
                        if (this.nodes.hasOwnProperty(t)) {
                            this.multipleActive || this.activeCache.forEach(function (t) {
                                i.nodes[t].isActive = !1, i.updateVnodeState(t), i.activeCache.delete(t)
                            });
                            var n = this.nodes[t];
                            n && (e ? this.activeCache.add(t) : this.activeCache.delete(t), n.isActive = e, this.updateVnodeState(t))
                        }
                    },
                    updateSelected: function (t, e) {
                        var i, n, s = this;
                        if (this.nodes.hasOwnProperty(t)) {
                            var r = new Map;
                            if ("independent" !== this.selectionType) $c([t], this.getDescendants(t)).forEach(function (t) {
                                s.nodes[t].isSelected = e, s.nodes[t].isIndeterminate = !1, r.set(t, e)
                            }), this.getParents(t).forEach(function (t) {
                                s.nodes[t] = s.calculateState(s.nodes[t], s.nodes), r.set(t, s.nodes[t].isSelected)
                            });
                            else this.nodes[t].isSelected = e, this.nodes[t].isIndeterminate = !1, r.set(t, e);
                            try {
                                for (var o = Ic(r.entries()), a = o.next(); !a.done; a = o.next()) {
                                    var l = kc(a.value, 2),
                                        u = l[0],
                                        c = l[1];
                                    this.updateVnodeState(u), "leaf" === this.selectionType && this.isParent(u) || (!0 === c ? this.selectedCache.add(u) : this.selectedCache.delete(u))
                                }
                            } catch (t) {
                                i = {
                                    error: t
                                }
                            } finally {
                                try {
                                    a && !a.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                        }
                    },
                    updateOpen: function (t, e) {
                        var i = this;
                        if (this.nodes.hasOwnProperty(t)) {
                            var n = this.nodes[t],
                                s = H(n.item, this.itemChildren);
                            s && !s.length && n.vnode && !n.vnode.hasLoaded ? n.vnode.checkChildren().then(function () {
                                return i.updateOpen(t, e)
                            }) : s && s.length && (n.isOpen = e, n.isOpen ? this.openCache.add(t) : this.openCache.delete(t), this.updateVnodeState(t))
                        }
                    },
                    updateVnodeState: function (t) {
                        var e = this.nodes[t];
                        e && e.vnode && (e.vnode.isSelected = e.isSelected, e.vnode.isIndeterminate = e.isIndeterminate, e.vnode.isActive = e.isActive, e.vnode.isOpen = e.isOpen)
                    },
                    isExcluded: function (t) {
                        return !!this.search && this.excludedItems.has(t)
                    }
                },
                render: function (t) {
                    var e = this.items.length ? this.items.map(Sc.options.methods.genChild.bind(this)) : this.$slots.default;
                    return t("div", {
                        staticClass: "v-treeview",
                        class: Cc({
                            "v-treeview--hoverable": this.hoverable,
                            "v-treeview--dense": this.dense
                        }, this.themeClasses)
                    }, e)
                }
            });

        function _c(t) {
            return (_c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var Tc = function (t, e) {
            var i = {};
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]])
            }
            return i
        };

        function Bc(t) {
            t._mutate && (t._mutate.observer.disconnect(), delete t._mutate)
        }
        var Ac = {
            inserted: function (t, e) {
                var i = e.modifiers || {},
                    n = e.value,
                    s = "object" === _c(n),
                    r = s ? n.handler : n,
                    o = i.once,
                    a = Tc(i, ["once"]),
                    l = Object.keys(a).length > 0,
                    u = s && n.options ? n.options : l ? {
                        attributes: a.attr,
                        childList: a.child,
                        subtree: a.sub,
                        characterData: a.char
                    } : {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    },
                    c = new MutationObserver(function (e, i) {
                        t._mutate && (r(e, i), o && Bc(t))
                    });
                c.observe(t, u), t._mutate = {
                    observer: c
                }
            },
            unbind: Bc
        };

        function Ec(t, e) {
            if (void 0 === e && (e = {}), !Ec.installed) {
                Ec.installed = !0, a.a !== t && b("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");
                var i = e.components || {},
                    n = e.directives || {};
                for (var s in n) {
                    var r = n[s];
                    t.directive(s, r)
                }! function e(i) {
                    if (i) {
                        for (var n in i) {
                            var s = i[n];
                            s && !e(s.$_vuetify_subcomponents) && t.component(n, s)
                        }
                        return !0
                    }
                    return !1
                }(i), t.$_vuetify_installed || (t.$_vuetify_installed = !0, t.mixin({
                    beforeCreate: function () {
                        var e = this.$options;
                        e.vuetify ? (e.vuetify.init(this, e.ssrContext), this.$vuetify = t.observable(e.vuetify.framework)) : this.$vuetify = e.parent && e.parent.$vuetify || this
                    }
                }))
            }
        }
        var Mc, Dc = function () {
                function t() {
                    this.framework = {}
                }
                return t.prototype.init = function (t, e) {}, t
            }(),
            Vc = (Mc = function (t, e) {
                return (Mc = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }
                Mc(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            Pc = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bar = 0, e.top = 0, e.left = 0, e.insetFooter = 0, e.right = 0, e.bottom = 0, e.footer = 0, e.application = {
                        bar: {},
                        top: {},
                        left: {},
                        insetFooter: {},
                        right: {},
                        bottom: {},
                        footer: {}
                    }, e
                }
                return Vc(e, t), e.prototype.register = function (t, e, i) {
                    this.application[e][t] = i, this.update(e)
                }, e.prototype.unregister = function (t, e) {
                    null != this.application[e][t] && (delete this.application[e][t], this.update(e))
                }, e.prototype.update = function (t) {
                    this[t] = Object.values(this.application[t]).reduce(function (t, e) {
                        return t + e
                    }, 0)
                }, e.property = "application", e
            }(Dc),
            Lc = function () {
                var t = function (e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            Hc = function () {
                return (Hc = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            jc = function (t) {
                function e(e) {
                    void 0 === e && (e = {});
                    var i = t.call(this) || this;
                    return i.xs = !1, i.sm = !1, i.md = !1, i.lg = !1, i.xl = !1, i.xsOnly = !1, i.smOnly = !1, i.smAndDown = !1, i.smAndUp = !1, i.mdOnly = !1, i.mdAndDown = !1, i.mdAndUp = !1, i.lgOnly = !1, i.lgAndDown = !1, i.lgAndUp = !1, i.xlOnly = !1, i.name = "", i.height = 0, i.width = 0, i.thresholds = {
                        xs: 600,
                        sm: 960,
                        md: 1280,
                        lg: 1920
                    }, i.scrollBarWidth = 16, i.resizeTimeout = 0, i.thresholds = Hc({}, i.thresholds, e.thresholds), i.scrollBarWidth = null != e.scrollBarWidth ? e.scrollBarWidth : i.scrollBarWidth, i.init(), i
                }
                return Lc(e, t), e.prototype.init = function () {
                    "undefined" != typeof window && (window.addEventListener("resize", this.onResize.bind(this), {
                        passive: !0
                    }), this.update())
                }, e.prototype.onResize = function () {
                    clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(this.update.bind(this), 200)
                }, e.prototype.update = function () {
                    var t = this.getClientHeight(),
                        e = this.getClientWidth(),
                        i = e < this.thresholds.xs,
                        n = e < this.thresholds.sm && !i,
                        s = e < this.thresholds.md - this.scrollBarWidth && !(n || i),
                        r = e < this.thresholds.lg - this.scrollBarWidth && !(s || n || i),
                        o = e >= this.thresholds.lg - this.scrollBarWidth;
                    switch (this.height = t, this.width = e, this.xs = i, this.sm = n, this.md = s, this.lg = r, this.xl = o, this.xsOnly = i, this.smOnly = n, this.smAndDown = (i || n) && !(s || r || o), this.smAndUp = !i && (n || s || r || o), this.mdOnly = s, this.mdAndDown = (i || n || s) && !(r || o), this.mdAndUp = !(i || n) && (s || r || o), this.lgOnly = r, this.lgAndDown = (i || n || s || r) && !o, this.lgAndUp = !(i || n || s) && (r || o), this.xlOnly = o, !0) {
                        case i:
                            this.name = "xs";
                            break;
                        case n:
                            this.name = "sm";
                            break;
                        case s:
                            this.name = "md";
                            break;
                        case r:
                            this.name = "lg";
                            break;
                        default:
                            this.name = "xl"
                    }
                }, e.prototype.getClientWidth = function () {
                    return "undefined" == typeof document ? 0 : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
                }, e.prototype.getClientHeight = function () {
                    return "undefined" == typeof document ? 0 : Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                }, e.property = "breakpoint", e
            }(Dc),
            Nc = function (t) {
                return t
            },
            Fc = function (t) {
                return Math.pow(t, 2)
            },
            zc = function (t) {
                return t * (2 - t)
            },
            Wc = function (t) {
                return t < .5 ? 2 * Math.pow(t, 2) : (4 - 2 * t) * t - 1
            },
            Rc = function (t) {
                return Math.pow(t, 3)
            },
            Yc = function (t) {
                return Math.pow(--t, 3) + 1
            },
            Gc = function (t) {
                return t < .5 ? 4 * Math.pow(t, 3) : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            },
            Uc = function (t) {
                return Math.pow(t, 4)
            },
            qc = function (t) {
                return 1 - Math.pow(--t, 4)
            },
            Xc = function (t) {
                return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
            },
            Zc = function (t) {
                return Math.pow(t, 5)
            },
            Kc = function (t) {
                return 1 + Math.pow(--t, 5)
            },
            Jc = function (t) {
                return t < .5 ? 16 * Math.pow(t, 5) : 1 + 16 * Math.pow(--t, 5)
            };

        function Qc(t) {
            if ("number" == typeof t) return t;
            var e = eh(t);
            if (!e) throw "string" == typeof t ? new Error('Target element "' + t + '" not found.') : new TypeError("Target must be a Number/Selector/HTMLElement/VueComponent, received " + th(t) + " instead.");
            for (var i = 0; e;) i += e.offsetTop, e = e.offsetParent;
            return i
        }

        function th(t) {
            return null == t ? t : t.constructor.name
        }

        function eh(t) {
            return "string" == typeof t ? document.querySelector(t) : t && t._isVue ? t.$el : t instanceof HTMLElement ? t : null
        }
        var ih = function () {
                var t = function (e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            nh = function () {
                return (nh = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            };

        function sh(t, e) {
            void 0 === e && (e = {});
            var i = nh({
                    container: document.scrollingElement || document.body || document.documentElement,
                    duration: 500,
                    offset: 0,
                    easing: "easeInOutCubic",
                    appOffset: !0
                }, e),
                n = function (t) {
                    var e = eh(t);
                    if (e) return e;
                    throw "string" == typeof t ? new Error('Container element "' + t + '" not found.') : new TypeError("Container must be a Selector/HTMLElement/VueComponent, received " + th(t) + " instead.")
                }(i.container);
            if (i.appOffset && sh.framework.application) {
                var s = n.classList.contains("v-navigation-drawer"),
                    o = n.classList.contains("v-navigation-drawer--clipped"),
                    a = sh.framework.application,
                    l = a.bar,
                    u = a.top;
                i.offset += l, s && !o || (i.offset += u)
            }
            var c, h = performance.now();
            c = "number" == typeof t ? Qc(t) - i.offset : Qc(t) - Qc(n) - i.offset;
            var d = n.scrollTop;
            if (c === d) return Promise.resolve(c);
            var p = "function" == typeof i.easing ? i.easing : r[i.easing];
            if (!p) throw new TypeError('Easing function "' + i.easing + '" not found.');
            return new Promise(function (t) {
                return requestAnimationFrame(function e(s) {
                    var r = s - h,
                        o = Math.abs(i.duration ? Math.min(r / i.duration, 1) : 1);
                    n.scrollTop = Math.floor(d + (c - d) * p(o));
                    var a = n === document.body ? document.documentElement.clientHeight : n.clientHeight;
                    if (1 === o || a + n.scrollTop === n.scrollHeight) return t(c);
                    requestAnimationFrame(e)
                })
            })
        }
        sh.framework = {}, sh.init = function () {};
        var rh = function (t) {
                function e() {
                    t.call(this);
                    return sh
                }
                return ih(e, t), e.property = "goTo", e
            }(Dc),
            oh = {
                complete: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
                cancel: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
                close: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
                delete: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
                clear: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
                success: "M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",
                info: "M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
                warning: "M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",
                error: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",
                prev: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
                next: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
                checkboxOn: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
                checkboxOff: "M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
                checkboxIndeterminate: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
                delimiter: "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
                sort: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
                expand: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
                menu: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
                subgroup: "M7,10L12,15L17,10H7Z",
                dropdown: "M7,10L12,15L17,10H7Z",
                radioOn: "M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",
                radioOff: "M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
                edit: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
                ratingEmpty: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
                ratingFull: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
                ratingHalf: "M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
                loading: "M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",
                first: "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",
                last: "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",
                unfold: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
                file: "M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",
                plus: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
                minus: "M19,13H5V11H19V13Z"
            },
            ah = {
                complete: "check",
                cancel: "cancel",
                close: "close",
                delete: "cancel",
                clear: "clear",
                success: "check_circle",
                info: "info",
                warning: "priority_high",
                error: "warning",
                prev: "chevron_left",
                next: "chevron_right",
                checkboxOn: "check_box",
                checkboxOff: "check_box_outline_blank",
                checkboxIndeterminate: "indeterminate_check_box",
                delimiter: "fiber_manual_record",
                sort: "arrow_upward",
                expand: "keyboard_arrow_down",
                menu: "menu",
                subgroup: "arrow_drop_down",
                dropdown: "arrow_drop_down",
                radioOn: "radio_button_checked",
                radioOff: "radio_button_unchecked",
                edit: "edit",
                ratingEmpty: "star_border",
                ratingFull: "star",
                ratingHalf: "star_half",
                loading: "cached",
                first: "first_page",
                last: "last_page",
                unfold: "unfold_more",
                file: "attach_file",
                plus: "add",
                minus: "remove"
            },
            lh = {
                complete: "mdi-check",
                cancel: "mdi-close-circle",
                close: "mdi-close",
                delete: "mdi-close-circle",
                clear: "mdi-close",
                success: "mdi-check-circle",
                info: "mdi-information",
                warning: "mdi-exclamation",
                error: "mdi-alert",
                prev: "mdi-chevron-left",
                next: "mdi-chevron-right",
                checkboxOn: "mdi-checkbox-marked",
                checkboxOff: "mdi-checkbox-blank-outline",
                checkboxIndeterminate: "mdi-minus-box",
                delimiter: "mdi-circle",
                sort: "mdi-arrow-up",
                expand: "mdi-chevron-down",
                menu: "mdi-menu",
                subgroup: "mdi-menu-down",
                dropdown: "mdi-menu-down",
                radioOn: "mdi-radiobox-marked",
                radioOff: "mdi-radiobox-blank",
                edit: "mdi-pencil",
                ratingEmpty: "mdi-star-outline",
                ratingFull: "mdi-star",
                ratingHalf: "mdi-star-half",
                loading: "mdi-cached",
                first: "mdi-page-first",
                last: "mdi-page-last",
                unfold: "mdi-unfold-more-horizontal",
                file: "mdi-paperclip",
                plus: "mdi-plus",
                minus: "mdi-minus"
            },
            uh = {
                complete: "fas fa-check",
                cancel: "fas fa-times-circle",
                close: "fas fa-times",
                delete: "fas fa-times-circle",
                clear: "fas fa-times-circle",
                success: "fas fa-check-circle",
                info: "fas fa-info-circle",
                warning: "fas fa-exclamation",
                error: "fas fa-exclamation-triangle",
                prev: "fas fa-chevron-left",
                next: "fas fa-chevron-right",
                checkboxOn: "fas fa-check-square",
                checkboxOff: "far fa-square",
                checkboxIndeterminate: "fas fa-minus-square",
                delimiter: "fas fa-circle",
                sort: "fas fa-sort-up",
                expand: "fas fa-chevron-down",
                menu: "fas fa-bars",
                subgroup: "fas fa-caret-down",
                dropdown: "fas fa-caret-down",
                radioOn: "far fa-dot-circle",
                radioOff: "far fa-circle",
                edit: "fas fa-edit",
                ratingEmpty: "far fa-star",
                ratingFull: "fas fa-star",
                ratingHalf: "fas fa-star-half",
                loading: "fas fa-sync",
                first: "fas fa-step-backward",
                last: "fas fa-step-forward",
                unfold: "fas fa-arrows-alt-v",
                file: "fas fa-paperclip",
                plus: "fas fa-plus",
                minus: "fas fa-minus"
            },
            ch = {
                complete: "fa fa-check",
                cancel: "fa fa-times-circle",
                close: "fa fa-times",
                delete: "fa fa-times-circle",
                clear: "fa fa-times-circle",
                success: "fa fa-check-circle",
                info: "fa fa-info-circle",
                warning: "fa fa-exclamation",
                error: "fa fa-exclamation-triangle",
                prev: "fa fa-chevron-left",
                next: "fa fa-chevron-right",
                checkboxOn: "fa fa-check-square",
                checkboxOff: "far fa-square",
                checkboxIndeterminate: "fa fa-minus-square",
                delimiter: "fa fa-circle",
                sort: "fa fa-sort-up",
                expand: "fa fa-chevron-down",
                menu: "fa fa-bars",
                subgroup: "fa fa-caret-down",
                dropdown: "fa fa-caret-down",
                radioOn: "fa fa-dot-circle-o",
                radioOff: "fa fa-circle-o",
                edit: "fa fa-pencil",
                ratingEmpty: "fa fa-star-o",
                ratingFull: "fa fa-star",
                ratingHalf: "fa fa-star-half-o",
                loading: "fa fa-refresh",
                first: "fa fa-step-backward",
                last: "fa fa-step-forward",
                unfold: "fa fa-angle-double-down",
                file: "fa fa-paperclip",
                plus: "fa fa-plus",
                minus: "fa fa-minus"
            },
            hh = Object.freeze({
                mdiSvg: oh,
                md: ah,
                mdi: lh,
                fa: uh,
                fa4: ch
            }),
            dh = function () {
                var t = function (e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            ph = function () {
                return (ph = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            fh = function (t) {
                function e(e) {
                    void 0 === e && (e = {});
                    var i = t.call(this) || this;
                    return i.iconfont = "mdi", i.values = hh[i.iconfont], e.iconfont && (i.iconfont = e.iconfont), i.values = ph({}, hh[i.iconfont], e.values || {}), i
                }
                return dh(e, t), e.property = "icons", e
            }(Dc),
            vh = {
                close: "Close",
                dataIterator: {
                    noResultsText: "No matching records found",
                    loadingText: "Loading items..."
                },
                dataTable: {
                    itemsPerPageText: "Rows per page:",
                    ariaLabel: {
                        sortDescending: ": Sorted descending. Activate to remove sorting.",
                        sortAscending: ": Sorted ascending. Activate to sort descending.",
                        sortNone: ": Not sorted. Activate to sort ascending."
                    },
                    sortBy: "Sort by"
                },
                dataFooter: {
                    itemsPerPageText: "Items per page:",
                    itemsPerPageAll: "All",
                    nextPage: "Next page",
                    prevPage: "Previous page",
                    firstPage: "First page",
                    lastPage: "Last page",
                    pageText: "{0}-{1} of {2}"
                },
                datePicker: {
                    itemsSelected: "{0} selected"
                },
                noDataText: "No data available",
                carousel: {
                    prev: "Previous visual",
                    next: "Next visual",
                    ariaLabel: {
                        delimiter: "Carousel slide {0} of {1}"
                    }
                },
                calendar: {
                    moreEvents: "{0} more"
                },
                fileInput: {
                    counter: "{0} files",
                    counterSize: "{0} files ({1} in total)"
                },
                timePicker: {
                    am: "AM",
                    pm: "PM"
                }
            },
            mh = function () {
                var t = function (e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            gh = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            },
            yh = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(gh(arguments[e]));
                return t
            },
            bh = "$vuetify.",
            Sh = Symbol("Lang fallback");
        var xh = function (t) {
                function e(e) {
                    void 0 === e && (e = {});
                    var i = t.call(this) || this;
                    return i.current = e.current || "en", i.locales = Object.assign({
                        en: vh
                    }, e.locales), i.translator = e.t, i
                }
                return mh(e, t), e.prototype.t = function (t) {
                    for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                    if (!t.startsWith(bh)) return this.replace(t, e);
                    if (this.translator) return this.translator.apply(this, yh([t], e));
                    var n = function t(e, i, n) {
                        void 0 === n && (n = !1);
                        var s = i.replace(bh, ""),
                            r = H(e, s, Sh);
                        return r === Sh && (n ? (b('Translation key "' + s + '" not found in fallback'), r = i) : (y('Translation key "' + s + '" not found, falling back to default'), r = t(vh, i, !0))), r
                    }(this.locales[this.current], t);
                    return this.replace(n, e)
                }, e.prototype.replace = function (t, e) {
                    return t.replace(/\{(\d+)\}/g, function (t, i) {
                        return String(e[+i])
                    })
                }, e.property = "lang", e
            }(Dc),
            wh = function (t) {
                return t > Math.pow(.20689655172413793, 3) ? Math.cbrt(t) : t / (3 * Math.pow(.20689655172413793, 2)) + 4 / 29
            },
            Ch = function (t) {
                return t > .20689655172413793 ? Math.pow(t, 3) : 3 * Math.pow(.20689655172413793, 2) * (t - 4 / 29)
            };

        function kh(t) {
            var e = wh,
                i = e(t[1]);
            return [116 * i - 16, 500 * (e(t[0] / .95047) - i), 200 * (i - e(t[2] / 1.08883))]
        }

        function $h(t) {
            var e = Ch,
                i = (t[0] + 16) / 116;
            return [.95047 * e(i + t[1] / 500), e(i), 1.08883 * e(i - t[2] / 200)]
        }

        function Ih(t) {
            return (Ih = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var Oh = function (t, e) {
                var i = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var s = 0;
                    for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]])
                }
                return i
            },
            _h = function (t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, s, r = i.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) o.push(n.value)
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            };
        var Th = function (t, e) {
                return "\n.v-application ." + t + " {\n  background-color: " + e + " !important;\n  border-color: " + e + " !important;\n}\n.v-application ." + t + "--text {\n  color: " + e + " !important;\n  caret-color: " + e + " !important;\n}"
            },
            Bh = function (t, e, i) {
                var n = _h(e.split(/(\d)/, 2), 2),
                    s = n[0],
                    r = n[1];
                return "\n.v-application ." + t + "." + s + "-" + r + " {\n  background-color: " + i + " !important;\n  border-color: " + i + " !important;\n}\n.v-application ." + t + "--text.text--" + s + "-" + r + " {\n  color: " + i + " !important;\n  caret-color: " + i + " !important;\n}"
            },
            Ah = function (t, e) {
                return void 0 === e && (e = "base"), "--v-" + t + "-" + e
            },
            Eh = function (t, e) {
                return void 0 === e && (e = "base"), "var(" + Ah(t, e) + ")"
            };

        function Mh(t, e) {
            for (var i = {
                    base: Rr(e)
                }, n = 5; n > 0; --n) i["lighten" + n] = Rr(Dh(e, n));
            for (n = 1; n <= 4; ++n) i["darken" + n] = Rr(Vh(e, n));
            return i
        }

        function Dh(t, e) {
            var i = kh(Nr(t));
            return i[0] = i[0] + 10 * e, jr($h(i))
        }

        function Vh(t, e) {
            var i = kh(Nr(t));
            return i[0] = i[0] - 10 * e, jr($h(i))
        }
        var Ph = function () {
                var t = function (e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            Lh = function (t) {
                function e(e) {
                    void 0 === e && (e = {});
                    var i = t.call(this) || this;
                    if (i.disabled = !1, i.themes = {
                            light: {
                                primary: "#1976D2",
                                secondary: "#424242",
                                accent: "#82B1FF",
                                error: "#FF5252",
                                info: "#2196F3",
                                success: "#4CAF50",
                                warning: "#FB8C00"
                            },
                            dark: {
                                primary: "#2196F3",
                                secondary: "#424242",
                                accent: "#FF4081",
                                error: "#FF5252",
                                info: "#2196F3",
                                success: "#4CAF50",
                                warning: "#FB8C00"
                            }
                        }, i.defaults = i.themes, i.isDark = null, i.vueInstance = null, i.vueMeta = null, e.disable) return i.disabled = !0, i;
                    i.options = e.options, i.dark = Boolean(e.dark);
                    var n = e.themes || {};
                    return i.themes = {
                        dark: i.fillVariant(n.dark, !0),
                        light: i.fillVariant(n.light, !1)
                    }, i
                }
                return Ph(e, t), Object.defineProperty(e.prototype, "css", {
                    set: function (t) {
                        this.vueMeta ? this.isVueMeta23 && this.applyVueMeta23() : this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "dark", {
                    get: function () {
                        return Boolean(this.isDark)
                    },
                    set: function (t) {
                        var e = this.isDark;
                        this.isDark = t, null != e && this.applyTheme()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.applyTheme = function () {
                    if (this.disabled) return this.clearCss();
                    this.css = this.generatedStyles
                }, e.prototype.clearCss = function () {
                    this.css = ""
                }, e.prototype.init = function (t, e) {
                    this.disabled || (t.$meta ? this.initVueMeta(t) : e && this.initSSR(e), this.initTheme())
                }, e.prototype.setTheme = function (t, e) {
                    this.themes[t] = Object.assign(this.themes[t], e), this.applyTheme()
                }, e.prototype.resetThemes = function () {
                    this.themes.light = Object.assign({}, this.defaults.light), this.themes.dark = Object.assign({}, this.defaults.dark), this.applyTheme()
                }, e.prototype.checkOrCreateStyleElement = function () {
                    return this.styleEl = document.getElementById("vuetify-theme-stylesheet"), !!this.styleEl || (this.genStyleElement(), Boolean(this.styleEl))
                }, e.prototype.fillVariant = function (t, e) {
                    void 0 === t && (t = {});
                    var i = this.themes[e ? "dark" : "light"];
                    return Object.assign({}, i, t)
                }, e.prototype.genStyleElement = function () {
                    if ("undefined" != typeof document) {
                        var t = this.options || {};
                        this.styleEl = document.createElement("style"), this.styleEl.type = "text/css", this.styleEl.id = "vuetify-theme-stylesheet", t.cspNonce && this.styleEl.setAttribute("nonce", t.cspNonce), document.head.appendChild(this.styleEl)
                    }
                }, e.prototype.initVueMeta = function (t) {
                    var e = this;
                    if (this.vueMeta = t.$meta(), this.isVueMeta23) t.$nextTick(function () {
                        e.applyVueMeta23()
                    });
                    else {
                        var i = "function" == typeof this.vueMeta.getOptions ? this.vueMeta.getOptions().keyName : "metaInfo",
                            n = t.$options[i] || {};
                        t.$options[i] = function () {
                            n.style = n.style || [];
                            var t = n.style.find(function (t) {
                                return "vuetify-theme-stylesheet" === t.id
                            });
                            return t ? t.cssText = e.generatedStyles : n.style.push({
                                cssText: e.generatedStyles,
                                type: "text/css",
                                id: "vuetify-theme-stylesheet",
                                nonce: (e.options || {}).cspNonce
                            }), n
                        }
                    }
                }, e.prototype.applyVueMeta23 = function () {
                    (0, this.vueMeta.addApp("vuetify").set)({
                        style: [{
                            cssText: this.generatedStyles,
                            type: "text/css",
                            id: "vuetify-theme-stylesheet",
                            nonce: (this.options || {}).cspNonce
                        }]
                    })
                }, e.prototype.initSSR = function (t) {
                    var e = this.options || {},
                        i = e.cspNonce ? ' nonce="' + e.cspNonce + '"' : "";
                    t.head = t.head || "", t.head += '<style type="text/css" id="vuetify-theme-stylesheet"' + i + ">" + this.generatedStyles + "</style>"
                }, e.prototype.initTheme = function () {
                    var t = this;
                    "undefined" != typeof document && (this.vueInstance && this.vueInstance.$destroy(), this.vueInstance = new a.a({
                        data: {
                            themes: this.themes
                        },
                        watch: {
                            themes: {
                                immediate: !0,
                                deep: !0,
                                handler: function () {
                                    return t.applyTheme()
                                }
                            }
                        }
                    }))
                }, Object.defineProperty(e.prototype, "currentTheme", {
                    get: function () {
                        var t = this.dark ? "dark" : "light";
                        return this.themes[t]
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "generatedStyles", {
                    get: function () {
                        var t, e = this.parsedTheme,
                            i = this.options || {};
                        return null != i.themeCache && null != (t = i.themeCache.get(e)) ? t : (t = function (t, e) {
                            void 0 === e && (e = !1);
                            var i = t.anchor,
                                n = Oh(t, ["anchor"]),
                                s = Object.keys(n);
                            if (!s.length) return "";
                            var r = "",
                                o = "";
                            o += ".v-application a { color: " + (e ? Eh("anchor") : i) + "; }", e && (r += "  " + Ah("anchor") + ": " + i + ";\n");
                            for (var a = 0; a < s.length; ++a) {
                                var l = s[a],
                                    u = t[l];
                                o += Th(l, e ? Eh(l) : u.base), e && (r += "  " + Ah(l) + ": " + u.base + ";\n");
                                for (var c = Object.keys(u), h = 0; h < c.length; ++h) {
                                    var d = c[h],
                                        p = u[d];
                                    "base" !== d && (o += Bh(l, d, e ? Eh(l, d) : p), e && (r += "  " + Ah(l, d) + ": " + p + ";\n"))
                                }
                            }
                            return e && (r = ":root {\n" + r + "}\n\n"), r + o
                        }(e, i.customProperties), null != i.minifyTheme && (t = i.minifyTheme(t)), null != i.themeCache && i.themeCache.set(e, t), t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "parsedTheme", {
                    get: function () {
                        return function t(e, i) {
                            void 0 === i && (i = !1);
                            for (var n = e.anchor, s = Oh(e, ["anchor"]), r = Object.keys(s), o = {}, a = 0; a < r.length; ++a) {
                                var l = r[a],
                                    u = e[l];
                                null != u && (i ? ("base" === l || l.startsWith("lighten") || l.startsWith("darken")) && (o[l] = Rr(Wr(u))) : "object" === Ih(u) ? o[l] = t(u, !0) : o[l] = Mh(0, Wr(u)))
                            }
                            return i || (o.anchor = n || o.base || o.primary.base), o
                        }(this.currentTheme || {})
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isVueMeta23", {
                    get: function () {
                        return "function" == typeof this.vueMeta.addApp
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.property = "theme", e
            }(Dc),
            Hh = (i(9), function () {
                function t(t) {
                    void 0 === t && (t = {}), this.framework = {}, this.installed = [], this.preset = {}, this.preset = t, this.use(Pc), this.use(jc), this.use(rh), this.use(fh), this.use(xh), this.use(Lh)
                }
                return t.prototype.init = function (t, e) {
                    var i = this;
                    this.installed.forEach(function (n) {
                        var s = i.framework[n];
                        s.framework = i.framework, s.init(t, e)
                    }), this.framework.rtl = Boolean(this.preset.rtl)
                }, t.prototype.use = function (t) {
                    var e = t.property;
                    this.installed.includes(e) || (this.framework[e] = new t(this.preset[e]), this.installed.push(e))
                }, t.install = Ec, t.installed = !1, t.version = "2.1.13", t
            }()),
            jh = function () {
                return (jh = Object.assign || function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                    return t
                }).apply(this, arguments)
            },
            Nh = (e.default = Hh, Hh.install);
        Hh.install = function (t, e) {
            Nh.call(Hh, t, jh({
                components: n,
                directives: s
            }, e))
        }, "undefined" != typeof window && window.Vue && window.Vue.use(Hh)
    }]).default
});