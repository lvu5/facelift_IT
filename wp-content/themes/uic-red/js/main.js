function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++)
            i[e] = t[e];
        return i
    }
    return Array.from(t)
}
function randomizePridePoints(t) {
    if (t) {
        var e = t.children.length > 3;
        if (e)
            for (var i = t.children.length; i >= 0; i--)
                t.appendChild(t.children[Math.random() * i | 0])
    }
}
function searchPrimo(t) {
    var e = "component-search-form__" + t
      , i = Array.from(document.querySelectorAll("#" + e + "-primo-query-temp"))
      , n = i.find(function(t) {
        return t.value
    })
      , r = n.closest("form")
      , o = r.querySelector("#" + e + "-field").value;
    "any" != o && (r.querySelector("#" + e + "-mode").value = "advanced");
    var s = r.querySelectorAll("input[name='" + e + "_search_scope']");
    s.length > 1 && s[1].checked && (r.querySelector("#" + e + "-tab").value = "NewDiscoveryNetwork");
    var a = n.value
      , l = a.replace(/[,]/g, " ");
    "" == l ? window.location.replace("https://i-share-uic.primo.exlibrisgroup.com/discovery/search?vid=01CARLI_UIC:CARLI_UIC&tab=LibraryCatalogPlus") : (r.querySelector("#" + e + "-primo-query").value = o + ",contains," + l,
    r.submit())
}
function searchHelp(t) {
    var e = "component-search-form__" + t
      , i = Array.from(document.querySelectorAll("#" + e + "-primo-query-temp"))
      , n = i.reduce(function(t, e) {
        return t || e.value
    }, "");
    n = n.replace(/[,]/g, " ").split(" ").join("+");
    var r = "https://ask.library.uic.edu/search/?t=0&q=" + n;
    return window.location.href = r,
    !1
}
function detectTimelineScroll(t) {
    function e() {
        0 === r ? i.setAttribute("disabled", "disabled") : i.removeAttribute("disabled"),
        100 === r ? n.setAttribute("disabled", "disabled") : n.removeAttribute("disabled")
    }
    var i = t.parentNode.nextSibling.nextSibling.children[0]
      , n = t.parentNode.nextSibling.nextSibling.children[1]
      , r = Math.round(100 * t.scrollLeft / (t.scrollWidth - t.clientWidth));
    i.setAttribute("disabled", "disabled"),
    t.addEventListener("scroll", function() {
        r = Math.round(100 * this.scrollLeft / (this.scrollWidth - this.clientWidth)),
        e()
    }),
    window.addEventListener("resize", function() {
        r = Math.round(100 * t.scrollLeft / (t.scrollWidth - t.clientWidth)),
        e()
    })
}
function leftRightNavigation(t) {
    var e = t.childNodes[1].clientWidth
      , i = 0
      , n = window.innerWidth
      , r = .8 * n
      , o = t.parentNode.nextSibling.nextSibling.children[0]
      , s = t.parentNode.nextSibling.nextSibling.children[1];
    o.addEventListener("click", function() {
        i = t.scrollLeft,
        i = i + r < 0 ? 0 : i - .8 * n,
        t.scrollTo({
            left: i,
            behavior: "smooth"
        })
    }),
    s.addEventListener("click", function() {
        i <= e && (i = t.scrollLeft,
        i += r,
        i = i >= e ? e - r : i,
        t.scrollTo({
            left: i,
            behavior: "smooth"
        }))
    }),
    window.addEventListener("resize", function() {
        n = window.innerWidth,
        r = .8 * n
    })
}
function timelineSwipe(t) {
    var e, i, n = !1;
    t.addEventListener("mousedown", function(r) {
        n = !0,
        e = r.pageX - t.offsetLeft,
        i = t.scrollLeft
    }),
    t.addEventListener("mouseleave", function() {
        n = !1
    }),
    t.addEventListener("mouseup", function() {
        n = !1
    }),
    t.addEventListener("mousemove", function(r) {
        if (n) {
            r.preventDefault();
            var o = r.pageX - t.offsetLeft
              , s = 3 * (o - e);
            t.scrollLeft = i - s
        }
    })
}
function isScreenWiderThanImage(t) {
    var e = t.childNodes[1]
      , i = t.parentNode.nextSibling.nextSibling;
    window.innerWidth >= e.naturalWidth ? (t.classList.add("centered-image"),
    i.classList.add("centered-image")) : (t.classList.remove("centered-image"),
    i.classList.remove("centered-image")),
    window.addEventListener("resize", function() {
        window.innerWidth >= e.naturalWidth ? (t.classList.add("centered-image"),
        i.classList.add("centered-image")) : (t.classList.remove("centered-image"),
        i.classList.remove("centered-image"))
    })
}
function isVisible(t) {
    var e = t.getBoundingClientRect().top
      , i = t.getBoundingClientRect().bottom
      , n = window.innerHeight || document.documentElement.clientHeight;
    return (e > 0 || i > 0) && e < n
}
!function(t) {
    "use strict";
    var e = function(e, i, n) {
        function r(t) {
            return a.body ? t() : void setTimeout(function() {
                r(t)
            })
        }
        function o() {
            l.addEventListener && l.removeEventListener("load", o),
            l.media = n || "all"
        }
        var s, a = t.document, l = a.createElement("link");
        if (i)
            s = i;
        else {
            var c = (a.body || a.getElementsByTagName("head")[0]).childNodes;
            s = c[c.length - 1]
        }
        var d = a.styleSheets;
        l.rel = "stylesheet",
        l.href = e,
        l.media = "only x",
        r(function() {
            s.parentNode.insertBefore(l, i ? s : s.nextSibling)
        });
        var u = function(t) {
            for (var e = l.href, i = d.length; i--; )
                if (d[i].href === e)
                    return t();
            setTimeout(function() {
                u(t)
            })
        };
        return l.addEventListener && l.addEventListener("load", o),
        l.onloadcssdefined = u,
        u(o),
        l
    };
    "undefined" != typeof exports ? exports.loadCSS = e : t.loadCSS = e
}("undefined" != typeof global ? global : this),
!function(t) {
    if (t.loadCSS) {
        var e = loadCSS.relpreload = {};
        if (e.support = function() {
            try {
                return t.document.createElement("link").relList.supports("preload")
            } catch (e) {
                return !1
            }
        }
        ,
        e.poly = function() {
            for (var e = t.document.getElementsByTagName("link"), i = 0; i < e.length; i++) {
                var n = e[i];
                "preload" === n.rel && "style" === n.getAttribute("as") && (t.loadCSS(n.href, n, n.getAttribute("media")),
                n.rel = null)
            }
        }
        ,
        !e.support()) {
            e.poly();
            var i = t.setInterval(e.poly, 300);
            t.addEventListener && t.addEventListener("load", function() {
                e.poly(),
                t.clearInterval(i)
            }),
            t.attachEvent && t.attachEvent("onload", function() {
                t.clearInterval(i)
            })
        }
    }
}(this),
document.addEventListener("DOMContentLoaded", function() {
    function t(t) {
        var e = t.currentTarget
          , i = e.getAttribute("aria-controls")
          , n = document.querySelector("#" + i);
        "false" === e.getAttribute("aria-expanded") ? (transition({
            element: n,
            val: "auto",
            prop: "height"
        }),
        e.setAttribute("aria-expanded", "true"),
        n.classList.add("component-accordion__content--expanded"),
        n.classList.remove("component-accordion__content--collapsed")) : (transition({
            element: n,
            val: "0",
            prop: "height"
        }),
        e.setAttribute("aria-expanded", "false"),
        n.classList.add("component-accordion__content--collapsed"),
        n.classList.remove("component-accordion__content--expanded"))
    }
    var e = Array.from(document.querySelectorAll(".js-toggle-acc"));
    e.forEach(function(e) {
        e.addEventListener("click", t, !1)
    }),
    Array.prototype.slice.call(document.querySelectorAll(".js-component-accordion")).forEach(function(t) {
        var e = Array.prototype.slice.call(t.querySelectorAll(".js-toggle-acc"));
        t.addEventListener("keydown", function(t) {
            var i = t.target
              , n = t.which.toString()
              , r = new RegExp("35")
              , o = new RegExp("36")
              , s = new RegExp("37")
              , a = new RegExp("38")
              , l = new RegExp("39")
              , c = new RegExp("40");
            if (i.classList.contains("js-toggle-acc"))
                if (n.match(c) || n.match(a) || n.match(s) || n.match(l)) {
                    var d = e.indexOf(i)
                      , u = n.match(l) || n.match(c) ? 1 : -1
                      , h = e.length
                      , p = (d + h + u) % h;
                    e[p].focus(),
                    t.preventDefault()
                } else
                    n.match(o) ? e[0].focus() : n.match(r) && e[e.length - 1].focus()
        })
    })
}),
document.querySelectorAll("a.component-title-link").forEach(function(t) {
    var e = t.nextElementSibling;
    e.addEventListener("click", function(i) {
        var n = t.href;
        navigator.clipboard.writeText(n);
        var r = "Link copied";
        e.querySelector(".tooltiptext").innerHTML = r
    })
}),
$(document).ready(function() {
    if ($(".carousel").length && ($("[data-carousel-gallery]").each(function(t, e) {
        var i = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            prevArrow: $(e).parent().find("[data-button-prev]"),
            nextArrow: $(e).parent().find("[data-button-next]"),
            dots: !0,
            infinite: !0,
            centerMode: !0,
            variableWidth: !0,
            asNavFor: $(e).parent().find("[data-carousel-captions]").length ? $(e).parent().find("[data-carousel-captions]") : null,
            focusOnChange: !1,
            accessibility: !0
        };
        if ($(".carousel__item.highlight")) {
            var n = $("[data-carousel-gallery] .carousel__item").length
              , r = Math.floor(Math.random() * n)
              , o = {
                initialSlide: r
            };
            i = Object.assign({}, i, o)
        }
        $(e).slick(i)
    }),
    $("[data-carousel-captions]").each(function(t, e) {
        $(e).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: !0,
            arrows: !1,
            centerMode: !0,
            asNavFor: $(e).parent().find("[data-carousel-gallery]"),
            accessibility: !1
        })
    }),
    $(".carousel__item.highlight"))) {
        $(".carousel__item.highlight").css("width", $(document).find(".carousel").width()),
        document.querySelectorAll(".carousel__item.highlight ._quote").forEach(function(t) {
            $(t).height() < 160 && $(t).css("font-size", $(t).height() > 80 ? "24px" : "28px")
        });
        var t = 0
          , e = null;
        $(".carousel__item.highlight ._content").each(function() {
            var i = $(this).height();
            i > t && (t = i,
            e = this,
            $(e).addClass("tallest"))
        }),
        $(".carousel__item.highlight ._content:not(.tallest)").height($(e).height()),
        $(window).resize(function() {
            $(".carousel__item.highlight").css("width", $(document).find(".carousel").width()),
            $(".carousel__item.highlight ._content:not(.tallest)").height($(e).height())
        })
    }
}),
document.addEventListener("DOMContentLoaded", function() {
    var t = document.querySelector(".component-chat-widget__header")
      , e = document.querySelector(".component-chat-widget__close")
      , i = document.querySelector(".component-chat-widget__embed");
    t && e && i && (t.addEventListener("click", function() {
        event.stopPropagation(),
        event.preventDefault(),
        i.style.height = "350px",
        i.style.padding = "0px 10px 10px 10px",
        e.style.visibility = "visible"
    }),
    e.addEventListener("click", function(t) {
        t.stopPropagation(),
        t.preventDefault(),
        i.style.height = 0,
        e.style.visibility = "hidden",
        setTimeout(function() {
            i.style.padding = 0
        }, 350)
    }))
}),
document.addEventListener("DOMContentLoaded", function() {
    function t() {
        var t = Array.from(document.querySelectorAll(".js-directory-filter-toggle"));
        t.forEach(function(t) {
            t.addEventListener("click", e, !1)
        })
    }
    function e(t) {
        var e = t.target
          , r = e.getAttribute("data-status")
          , o = "open" === r
          , a = s(e)
          , l = a + " js-directory-filter-toggle " + a;
        l += o ? "--closed" : "--open",
        o ? e.setAttribute("data-status", "closed") : e.setAttribute("data-status", "open"),
        i(r),
        n(e, r),
        e.className = l,
        e.setAttribute("aria-pressed", !o)
    }
    function i(t) {
        var e = "open" === t ? "closed" : "open"
          , i = "open" === e
          , n = document.querySelectorAll(".js-directory-form")[0];
        n.setAttribute("aria-expanded", i),
        n.setAttribute("aria-hidden", !i),
        i ? n.removeAttribute("inert") : n.setAttribute("inert", "true")
    }
    function n(t, e) {
        var i = "open" === e ? "closed" : "open"
          , n = t.parentNode
          , r = s(n);
        n.className = r + " " + r + "--" + i
    }
    function r() {
        var t = Array.from(document.querySelectorAll(".js-checkbox"));
        t.forEach(function(t) {
            t.addEventListener("click", o, !1)
        })
    }
    function o(t) {
        var e = t.target
          , i = e.nextElementSibling
          , n = s(i)
          , r = n + " js-checkbox";
        e.checked && (r += " " + n + "--checked"),
        i.className = r
    }
    function s(t) {
        return t.classList[0]
    }
    t(),
    r()
}),
function(t) {
    "use strict";
    function e(t, i) {
        if (!(this instanceof e)) {
            var n = new e(t,i);
            return n.open(),
            n
        }
        this.id = e.id++,
        this.setup(t, i),
        this.chainCallbacks(e._callbackChain)
    }
    function i(t, e) {
        var i = {};
        for (var n in t)
            n in e && (i[n] = t[n],
            delete t[n]);
        return i
    }
    function n(t, e) {
        var i = {}
          , n = new RegExp("^" + e + "([A-Z])(.*)");
        for (var r in t) {
            var o = r.match(n);
            if (o) {
                var s = (o[1] + o[2].replace(/([A-Z])/g, "-$1")).toLowerCase();
                i[s] = t[r]
            }
        }
        return i
    }
    if ("undefined" == typeof t)
        return void ("console"in window && window.console.info("Too much lightness, Featherlight needs jQuery."));
    if (t.fn.jquery.match(/-ajax/))
        return void ("console"in window && window.console.info("Featherlight needs regular jQuery, not the slim version."));
    var r = []
      , o = function(e) {
        return r = t.grep(r, function(t) {
            return t !== e && t.$instance.closest("body").length > 0
        })
    }
      , s = {
        allow: 1,
        allowfullscreen: 1,
        frameborder: 1,
        height: 1,
        longdesc: 1,
        marginheight: 1,
        marginwidth: 1,
        mozallowfullscreen: 1,
        name: 1,
        referrerpolicy: 1,
        sandbox: 1,
        scrolling: 1,
        src: 1,
        srcdoc: 1,
        style: 1,
        webkitallowfullscreen: 1,
        width: 1
    }
      , a = {
        keyup: "onKeyUp",
        resize: "onResize"
    }
      , l = function(i) {
        t.each(e.opened().reverse(), function() {
            if (!i.isDefaultPrevented() && !1 === this[a[i.type]](i))
                return i.preventDefault(),
                i.stopPropagation(),
                !1
        })
    }
      , c = function(i) {
        if (i !== e._globalHandlerInstalled) {
            e._globalHandlerInstalled = i;
            var n = t.map(a, function(t, i) {
                return i + "." + e.prototype.namespace
            }).join(" ");
            t(window)[i ? "on" : "off"](n, l)
        }
    };
    e.prototype = {
        constructor: e,
        namespace: "featherlight",
        targetAttr: "data-featherlight",
        variant: null,
        resetCss: !1,
        background: null,
        openTrigger: "click",
        closeTrigger: "click",
        filter: null,
        root: "body",
        openSpeed: 250,
        closeSpeed: 250,
        closeOnClick: "background",
        closeOnEsc: !0,
        closeIcon: "&#10005;",
        loading: "",
        persist: !1,
        otherClose: null,
        beforeOpen: t.noop,
        beforeContent: t.noop,
        beforeClose: t.noop,
        afterOpen: t.noop,
        afterContent: t.noop,
        afterClose: t.noop,
        onKeyUp: t.noop,
        onResize: t.noop,
        type: null,
        contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
        setup: function(e, i) {
            "object" != typeof e || e instanceof t != !1 || i || (i = e,
            e = void 0);
            var n = t.extend(this, i, {
                target: e
            })
              , r = n.resetCss ? n.namespace + "-reset" : n.namespace
              , o = t(n.background || ['<div class="' + r + "-loading " + r + '">', '<div class="' + r + '-content">', '<button class="' + r + "-close-icon " + n.namespace + '-close" aria-label="Close">', n.closeIcon, "</button>", '<div class="' + n.namespace + '-inner">' + n.loading + "</div>", "</div>", "</div>"].join(""))
              , s = "." + n.namespace + "-close" + (n.otherClose ? "," + n.otherClose : "");
            return n.$instance = o.clone().addClass(n.variant),
            n.$instance.on(n.closeTrigger + "." + n.namespace, function(e) {
                if (!e.isDefaultPrevented()) {
                    var i = t(e.target);
                    ("background" === n.closeOnClick && i.is("." + n.namespace) || "anywhere" === n.closeOnClick || i.closest(s).length) && (n.close(e),
                    e.preventDefault())
                }
            }),
            this
        },
        getContent: function() {
            if (this.persist !== !1 && this.$content)
                return this.$content;
            var e = this
              , i = this.constructor.contentFilters
              , n = function(t) {
                return e.$currentTarget && e.$currentTarget.attr(t)
            }
              , r = n(e.targetAttr)
              , o = e.target || r || ""
              , s = i[e.type];
            if (!s && o in i && (s = i[o],
            o = e.target && r),
            o = o || n("href") || "",
            !s)
                for (var a in i)
                    e[a] && (s = i[a],
                    o = e[a]);
            if (!s) {
                var l = o;
                if (o = null,
                t.each(e.contentFilters, function() {
                    return s = i[this],
                    s.test && (o = s.test(l)),
                    !o && s.regex && l.match && l.match(s.regex) && (o = l),
                    !o
                }),
                !o)
                    return "console"in window && window.console.error("Featherlight: no content filter found " + (l ? ' for "' + l + '"' : " (no target specified)")),
                    !1
            }
            return s.process.call(e, o)
        },
        setContent: function(e) {
            return this.$instance.removeClass(this.namespace + "-loading"),
            this.$instance.toggleClass(this.namespace + "-iframe", e.is("iframe")),
            this.$instance.find("." + this.namespace + "-inner").not(e).slice(1).remove().end().replaceWith(t.contains(this.$instance[0], e[0]) ? "" : e),
            this.$content = e.addClass(this.namespace + "-inner"),
            this
        },
        open: function(e) {
            var i = this;
            if (i.$instance.hide().appendTo(i.root),
            !(e && e.isDefaultPrevented() || i.beforeOpen(e) === !1)) {
                e && e.preventDefault();
                var n = i.getContent();
                if (n)
                    return r.push(i),
                    c(!0),
                    i.$instance.fadeIn(i.openSpeed),
                    i.beforeContent(e),
                    t.when(n).always(function(t) {
                        i.setContent(t),
                        i.afterContent(e)
                    }).then(i.$instance.promise()).done(function() {
                        i.afterOpen(e)
                    })
            }
            return i.$instance.detach(),
            t.Deferred().reject().promise()
        },
        close: function(e) {
            var i = this
              , n = t.Deferred();
            return i.beforeClose(e) === !1 ? n.reject() : (0 === o(i).length && c(!1),
            i.$instance.fadeOut(i.closeSpeed, function() {
                i.$instance.detach(),
                i.afterClose(e),
                n.resolve()
            })),
            n.promise()
        },
        resize: function(t, e) {
            if (t && e) {
                this.$content.css("width", "").css("height", "");
                var i = Math.max(t / (this.$content.parent().width() - 1), e / (this.$content.parent().height() - 1));
                i > 1 && (i = e / Math.floor(e / i),
                this.$content.css("width", "" + t / i + "px").css("height", "" + e / i + "px"))
            }
        },
        chainCallbacks: function(e) {
            for (var i in e)
                this[i] = t.proxy(e[i], this, t.proxy(this[i], this))
        }
    },
    t.extend(e, {
        id: 0,
        autoBind: "[data-featherlight]",
        defaults: e.prototype,
        contentFilters: {
            jquery: {
                regex: /^[#.]\w/,
                test: function(e) {
                    return e instanceof t && e
                },
                process: function(e) {
                    return this.persist !== !1 ? t(e) : t(e).clone(!0)
                }
            },
            image: {
                regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
                process: function(e) {
                    var i = this
                      , n = t.Deferred()
                      , r = new Image
                      , o = t('<img src="' + e + '" alt="" class="' + i.namespace + '-image" />');
                    return r.onload = function() {
                        o.naturalWidth = r.width,
                        o.naturalHeight = r.height,
                        n.resolve(o)
                    }
                    ,
                    r.onerror = function() {
                        n.reject(o)
                    }
                    ,
                    r.src = e,
                    n.promise()
                }
            },
            html: {
                regex: /^\s*<[\w!][^<]*>/,
                process: function(e) {
                    return t(e)
                }
            },
            ajax: {
                regex: /./,
                process: function(e) {
                    var i = t.Deferred()
                      , n = t("<div></div>").load(e, function(t, e) {
                        "error" !== e && i.resolve(n.contents()),
                        i.fail()
                    });
                    return i.promise()
                }
            },
            iframe: {
                process: function(e) {
                    var r = new t.Deferred
                      , o = t("<iframe/>")
                      , a = n(this, "iframe")
                      , l = i(a, s);
                    return o.hide().attr("src", e).attr(l).css(a).on("load", function() {
                        r.resolve(o.show())
                    }).appendTo(this.$instance.find("." + this.namespace + "-content")),
                    r.promise()
                }
            },
            text: {
                process: function(e) {
                    return t("<div>", {
                        text: e
                    })
                }
            }
        },
        functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
        readElementConfig: function(e, i) {
            var n = this
              , r = new RegExp("^data-" + i + "-(.*)")
              , o = {};
            return e && e.attributes && t.each(e.attributes, function() {
                var e = this.name.match(r);
                if (e) {
                    var i = this.value
                      , s = t.camelCase(e[1]);
                    if (t.inArray(s, n.functionAttributes) >= 0)
                        i = new Function(i);
                    else
                        try {
                            i = JSON.parse(i)
                        } catch (a) {}
                    o[s] = i
                }
            }),
            o
        },
        extend: function(e, i) {
            var n = function() {
                this.constructor = e
            };
            return n.prototype = this.prototype,
            e.prototype = new n,
            e.__super__ = this.prototype,
            t.extend(e, this, i),
            e.defaults = e.prototype,
            e
        },
        attach: function(e, i, n) {
            var r = this;
            "object" != typeof i || i instanceof t != !1 || n || (n = i,
            i = void 0),
            n = t.extend({}, n);
            var o, s = n.namespace || r.defaults.namespace, a = t.extend({}, r.defaults, r.readElementConfig(e[0], s), n), l = function(s) {
                var l = t(s.currentTarget)
                  , c = t.extend({
                    $source: e,
                    $currentTarget: l
                }, r.readElementConfig(e[0], a.namespace), r.readElementConfig(s.currentTarget, a.namespace), n)
                  , d = o || l.data("featherlight-persisted") || new r(i,c);
                "shared" === d.persist ? o = d : d.persist !== !1 && l.data("featherlight-persisted", d),
                c.$currentTarget.blur && c.$currentTarget.blur(),
                d.open(s)
            };
            return e.on(a.openTrigger + "." + a.namespace, a.filter, l),
            {
                filter: a.filter,
                handler: l
            }
        },
        current: function() {
            var t = this.opened();
            return t[t.length - 1] || null
        },
        opened: function() {
            var e = this;
            return o(),
            t.grep(r, function(t) {
                return t instanceof e
            })
        },
        close: function(t) {
            var e = this.current();
            if (e)
                return e.close(t)
        },
        _onReady: function() {
            var e = this;
            if (e.autoBind) {
                var i = t(e.autoBind);
                i.each(function() {
                    e.attach(t(this))
                }),
                t(document).on("click", e.autoBind, function(n) {
                    if (!n.isDefaultPrevented()) {
                        var r = t(n.currentTarget)
                          , o = i.length;
                        if (i = i.add(r),
                        o !== i.length) {
                            var s = e.attach(r);
                            (!s.filter || t(n.target).parentsUntil(r, s.filter).length > 0) && s.handler(n)
                        }
                    }
                })
            }
        },
        _callbackChain: {
            onKeyUp: function(e, i) {
                return 27 === i.keyCode ? (this.closeOnEsc && t.featherlight.close(i),
                !1) : e(i)
            },
            beforeOpen: function(e, i) {
                return t(document.documentElement).addClass("with-featherlight"),
                this._previouslyActive = document.activeElement,
                this._$previouslyTabbable = t("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")),
                this._$previouslyWithTabIndex = t("[tabindex]").not('[tabindex="-1"]'),
                this._previousWithTabIndices = this._$previouslyWithTabIndex.map(function(e, i) {
                    return t(i).attr("tabindex")
                }),
                this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex", -1),
                document.activeElement.blur && document.activeElement.blur(),
                e(i)
            },
            afterClose: function(i, n) {
                var r = i(n)
                  , o = this;
                return this._$previouslyTabbable.removeAttr("tabindex"),
                this._$previouslyWithTabIndex.each(function(e, i) {
                    t(i).attr("tabindex", o._previousWithTabIndices[e])
                }),
                this._previouslyActive.focus(),
                0 === e.opened().length && t(document.documentElement).removeClass("with-featherlight"),
                r
            },
            onResize: function(t, e) {
                return this.resize(this.$content.naturalWidth, this.$content.naturalHeight),
                t(e)
            },
            afterContent: function(t, e) {
                var i = t(e);
                return this.$instance.find("[autofocus]:not([disabled])").focus(),
                this.onResize(e),
                i
            }
        }
    }),
    t.featherlight = e,
    t.fn.featherlight = function(t, i) {
        return e.attach(this, t, i),
        this
    }
    ,
    t(document).ready(function() {
        e._onReady()
    })
}(jQuery),
function(t) {
    "use strict";
    function e(i, n) {
        if (!(this instanceof e)) {
            var r = new e(t.extend({
                $source: i,
                $currentTarget: i.first()
            }, n));
            return r.open(),
            r
        }
        t.featherlight.apply(this, arguments),
        this.chainCallbacks(a)
    }
    var i = function(t) {
        window.console && window.console.warn && window.console.warn("FeatherlightGallery: " + t)
    };
    if ("undefined" == typeof t)
        return i("Too much lightness, Featherlight needs jQuery.");
    if (!t.featherlight)
        return i("Load the featherlight plugin before the gallery plugin");
    var n = "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch
      , r = t.event && t.event.special.swipeleft && t
      , o = window.Hammer && function(t) {
        var e = new window.Hammer.Manager(t[0]);
        return e.add(new window.Hammer.Swipe),
        e
    }
      , s = n && (r || o);
    n && !s && i("No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.");
    var a = {
        afterClose: function(t, e) {
            var i = this;
            return i.$instance.off("next." + i.namespace + " previous." + i.namespace),
            i._swiper && (i._swiper.off("swipeleft", i._swipeleft).off("swiperight", i._swiperight),
            i._swiper = null),
            t(e)
        },
        beforeOpen: function(t, e) {
            var i = this;
            return i.$instance.on("next." + i.namespace + " previous." + i.namespace, function(t) {
                var e = "next" === t.type ? 1 : -1;
                i.navigateTo(i.currentNavigation() + e)
            }),
            s && (i._swiper = s(i.$instance).on("swipeleft", i._swipeleft = function() {
                i.$instance.trigger("next")
            }
            ).on("swiperight", i._swiperight = function() {
                i.$instance.trigger("previous")
            }
            ),
            i.$instance.addClass(this.namespace + "-swipe-aware", s)),
            i.$instance.find("." + i.namespace + "-content").append(i.createNavigation("previous")).append(i.createNavigation("next")),
            t(e)
        },
        beforeContent: function(t, e) {
            var i = this.currentNavigation()
              , n = this.slides().length;
            return this.$instance.toggleClass(this.namespace + "-first-slide", 0 === i).toggleClass(this.namespace + "-last-slide", i === n - 1),
            t(e)
        },
        onKeyUp: function(t, e) {
            var i = {
                37: "previous",
                39: "next"
            }[e.keyCode];
            return i ? (this.$instance.trigger(i),
            !1) : t(e)
        }
    };
    t.featherlight.extend(e, {
        autoBind: "[data-featherlight-gallery]"
    }),
    t.extend(e.prototype, {
        previousIcon: "&#9664;",
        nextIcon: "&#9654;",
        galleryFadeIn: 100,
        galleryFadeOut: 300,
        slides: function() {
            return this.filter ? this.$source.find(this.filter) : this.$source
        },
        images: function() {
            return i("images is deprecated, please use slides instead"),
            this.slides()
        },
        currentNavigation: function() {
            return this.slides().index(this.$currentTarget)
        },
        navigateTo: function(e) {
            var i = this
              , n = i.slides()
              , r = n.length
              , o = i.$instance.find("." + i.namespace + "-inner");
            return e = (e % r + r) % r,
            i.$currentTarget = n.eq(e),
            i.beforeContent(),
            t.when(i.getContent(), o.fadeTo(i.galleryFadeOut, .2)).always(function(t) {
                i.setContent(t),
                i.afterContent(),
                t.fadeTo(i.galleryFadeIn, 1)
            })
        },
        createNavigation: function(e) {
            var i = this;
            return t('<span title="' + e + '" class="' + this.namespace + "-" + e + '"><span>' + this[e + "Icon"] + "</span></span>").click(function(n) {
                t(this).trigger(e + "." + i.namespace),
                n.preventDefault()
            })
        }
    }),
    t.featherlightGallery = e,
    t.fn.featherlightGallery = function(t) {
        return e.attach(this, t),
        this
    }
    ,
    t(document).ready(function() {
        e._onReady()
    })
}(jQuery),
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? exports.flight = e() : t.flight = e()
}(this, function() {
    return function(t) {
        function e(n) {
            if (i[n])
                return i[n].exports;
            var r = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(r.exports, r, r.exports, e),
            r.loaded = !0,
            r.exports
        }
        var i = {};
        return e.m = t,
        e.c = i,
        e.p = "",
        e(0)
    }([function(t, e, i) {
        var n, r;
        n = [i(1), i(2), i(3), i(4), i(5), i(6), i(7)],
        r = function(t, e, i, n, r, o, s) {
            "use strict";
            return {
                advice: t,
                component: e,
                compose: i,
                debug: n,
                logger: r,
                registry: o,
                utils: s
            }
        }
        .apply(e, n),
        !(void 0 !== r && (t.exports = r))
    }
    , function(t, e, i) {
        var n, r;
        n = [i(7)],
        r = function(t) {
            "use strict";
            var e = {
                around: function(t, e) {
                    return function() {
                        var i = 0
                          , n = arguments.length
                          , r = new Array(n + 1);
                        for (r[0] = t.bind(this); n > i; i++)
                            r[i + 1] = arguments[i];
                        return e.apply(this, r)
                    }
                },
                before: function(t, e) {
                    var i = "function" == typeof e ? e : e.obj[e.fnName];
                    return function() {
                        return i.apply(this, arguments),
                        t.apply(this, arguments)
                    }
                },
                after: function(t, e) {
                    var i = "function" == typeof e ? e : e.obj[e.fnName];
                    return function() {
                        var e = (t.unbound || t).apply(this, arguments);
                        return i.apply(this, arguments),
                        e
                    }
                },
                withAdvice: function() {
                    ["before", "after", "around"].forEach(function(i) {
                        this[i] = function(n, r) {
                            var o = n.trim().split(" ");
                            o.forEach(function(n) {
                                t.mutateProperty(this, n, function() {
                                    return this[n] = "function" == typeof this[n] ? e[i](this[n], r) : r,
                                    this[n]
                                })
                            }, this)
                        }
                    }, this)
                }
            };
            return e
        }
        .apply(e, n),
        !(void 0 !== r && (t.exports = r))
    }
    , function(t, e, i) {
        var n, r;
        n = [i(1), i(7), i(3), i(8), i(6), i(5), i(4)],
        r = function(t, e, i, n, r, o, s) {
            "use strict";
            function a() {
                var t = r.findComponentInfo(this);
                t && Object.keys(t.instances).forEach(function(e) {
                    var i = t.instances[e];
                    i && i.instance && i.instance.teardown()
                })
            }
            function l(t) {
                for (var i = arguments.length, n = new Array(i - 1), o = 1; i > o; o++)
                    n[o - 1] = arguments[o];
                if (!t)
                    throw new Error("Component needs to be attachTo'd a jQuery object, native node or selector string");
                var s = e.merge.apply(e, n)
                  , a = r.findComponentInfo(this);
                $(t).each(function(t, e) {
                    a && a.isAttachedTo(e) || (new this).initialize(e, s)
                }
                .bind(this))
            }
            function c() {
                var t = this.mixedIn || this.prototype.mixedIn || [];
                return t.map(function(t) {
                    if (null == t.name) {
                        var e = t.toString().match(u);
                        return e && e[1] ? e[1] : ""
                    }
                    return h[t.name] ? "" : t.name
                }).filter(Boolean).join(", ")
            }
            function d() {
                for (var u = arguments.length, h = new Array(u), p = 0; u > p; p++)
                    h[p] = arguments[p];
                var f = function() {};
                return f.toString = f.prototype.toString = c,
                s.enabled && (f.describe = f.prototype.describe = f.toString()),
                f.attachTo = l,
                f.mixin = function() {
                    var t = d()
                      , n = Object.create(f.prototype);
                    return n.mixedIn = [].concat(f.prototype.mixedIn),
                    n.defaults = e.merge(f.prototype.defaults),
                    n.attrDef = f.prototype.attrDef,
                    i.mixin(n, arguments),
                    t.prototype = n,
                    t.prototype.constructor = t,
                    t
                }
                ,
                f.teardownAll = a,
                s.enabled && h.unshift(o),
                h.unshift(n, t.withAdvice, r.withRegistration),
                i.mixin(f.prototype, h),
                f
            }
            var u = /function (.*?)\s?\(/
              , h = {
                withBase: !0,
                withLogging: !0
            };
            return d.teardownAll = function() {
                r.components.slice().forEach(function(t) {
                    t.component.teardownAll()
                }),
                r.reset()
            }
            ,
            d
        }
        .apply(e, n),
        !(void 0 !== r && (t.exports = r))
    }
    , function(t, e, i) {
        var n, r;
        n = [i(7)],
        r = function(t) {
            "use strict";
            function e(e, i) {
                Object.keys(e).forEach(function(r) {
                    n.indexOf(r) < 0 && t.propertyWritability(e, r, i)
                })
            }
            function i(t, i) {
                t.mixedIn = Object.prototype.hasOwnProperty.call(t, "mixedIn") ? t.mixedIn : [];
                for (var n = 0; n < i.length; n++)
                    -1 == t.mixedIn.indexOf(i[n]) && (e(t, !1),
                    i[n].call(t),
                    t.mixedIn.push(i[n]));
                e(t, !0)
            }
            var n = ["mixedIn", "attrDef"];
            return {
                mixin: i
            }
        }
        .apply(e, n),
        !(void 0 !== r && (t.exports = r))
    }
    , function(t, e, i) {
        var n, r;
        n = [i(6)],
        r = function(t) {
            "use strict";
            function e(t, i, n) {
                n = n || {};
                var r = n.obj || window
                  , o = n.path || (r == window ? "window" : "")
                  , s = Object.keys(r);
                s.forEach(function(n) {
                    (v[t] || t)(i, r, n) && console.log([o, ".", n].join(""), "->", ["(", typeof r[n], ")"].join(""), r[n]),
                    "[object Object]" == Object.prototype.toString.call(r[n]) && r[n] != r && -1 == o.split(".").indexOf(n) && e(t, i, {
                        obj: r[n],
                        path: [o, n].join(".")
                    })
                })
            }
            function i(t, i, n, r) {
                i && typeof n != i ? console.error([n, "must be", i].join(" ")) : e(t, n, r)
            }
            function n(t, e) {
                i("name", "string", t, e)
            }
            function r(t, e) {
                i("nameContains", "string", t, e)
            }
            function o(t, e) {
                i("type", "function", t, e)
            }
            function s(t, e) {
                i("value", null, t, e)
            }
            function a(t, e) {
                i("valueCoerced", null, t, e)
            }
            function l(t, i) {
                e(t, null, i)
            }
            function c() {
                var t = [].slice.call(arguments);
                g.eventNames.length || (g.eventNames = m),
                g.actions = t.length ? t : m,
                p()
            }
            function d() {
                var t = [].slice.call(arguments);
                g.actions.length || (g.actions = m),
                g.eventNames = t.length ? t : m,
                p()
            }
            function u() {
                g.actions = [],
                g.eventNames = [],
                p()
            }
            function h() {
                g.actions = m,
                g.eventNames = m,
                p()
            }
            function p() {
                try {
                    window.localStorage && (localStorage.setItem("logFilter_eventNames", g.eventNames),
                    localStorage.setItem("logFilter_actions", g.actions))
                } catch (t) {}
            }
            function f() {
                var t, e;
                try {
                    t = window.localStorage && localStorage.getItem("logFilter_eventNames"),
                    e = window.localStorage && localStorage.getItem("logFilter_actions")
                } catch (i) {
                    return
                }
                t && (g.eventNames = t),
                e && (g.actions = e),
                Object.keys(g).forEach(function(t) {
                    var e = g[t];
                    "string" == typeof e && e !== m && (g[t] = e ? e.split(",") : [])
                })
            }
            var v = {
                name: function(t, e, i) {
                    return t == i
                },
                nameContains: function(t, e, i) {
                    return i.indexOf(t) > -1
                },
                type: function(t, e, i) {
                    return e[i]instanceof t
                },
                value: function(t, e, i) {
                    return e[i] === t
                },
                valueCoerced: function(t, e, i) {
                    return e[i] == t
                }
            }
              , m = "all"
              , g = {
                eventNames: [],
                actions: []
            };
            return {
                enable: function(t) {
                    this.enabled = !!t,
                    t && window.console && (console.info("Booting in DEBUG mode"),
                    console.info("You can configure event logging with DEBUG.events.logAll()/logNone()/logByName()/logByAction()")),
                    f(),
                    window.DEBUG = this
                },
                warn: function() {
                    if (window.console) {
                        var t = console.warn || console.log
                          , e = [].slice.call(arguments);
                        e.unshift(this.toString() + ":"),
                        t.apply(console, e)
                    }
                },
                registry: t,
                find: {
                    byName: n,
                    byNameContains: r,
                    byType: o,
                    byValue: s,
                    byValueCoerced: a,
                    custom: l
                },
                events: {
                    logFilter: g,
                    logByAction: c,
                    logByName: d,
                    logAll: h,
                    logNone: u
                }
            }
        }
        .apply(e, n),
        !(void 0 !== r && (t.exports = r))
    }
    , function(t, e, i) {
        var n, r;
        n = [i(7)],
        r = function(t) {
            "use strict";
            function e(t) {
                var e = t.tagName ? t.tagName.toLowerCase() : t.toString()
                  , i = t.className ? "." + t.className : ""
                  , n = e + i;
                return t.tagName ? ["'", "'"].join(n) : n
            }
            function i(t, i, n) {
                if (window.DEBUG && window.DEBUG.enabled) {
                    var o, s, a, l, c, d, u, h, p, f;
                    "function" == typeof n[n.length - 1] && (l = n.pop(),
                    l = l.unbound || l),
                    1 == n.length ? (a = i.$node[0],
                    s = n[0]) : 2 != n.length || "object" != typeof n[1] || n[1].type ? (a = n[0],
                    s = n[1],
                    "trigger" == t && (c = n[2])) : (a = i.$node[0],
                    s = n[0],
                    "trigger" == t && (c = n[1])),
                    o = "object" == typeof s ? s.type : s,
                    d = window.DEBUG.events.logFilter,
                    h = "all" == d.actions || d.actions.indexOf(t) > -1,
                    u = function(t) {
                        return t.test ? t : new RegExp("^" + t.replace(/\*/g, ".*") + "$")
                    }
                    ,
                    p = "all" == d.eventNames || d.eventNames.some(function(t) {
                        return u(t).test(o)
                    }),
                    h && p && (f = [r[t], t, "[" + o + "]"],
                    c && f.push(c),
                    f.push(e(a)),
                    f.push(i.constructor.describe.split(" ").slice(0, 3).join(" ")),
                    console.groupCollapsed && "trigger" == t && console.groupCollapsed(t, o),
                    Function.prototype.apply.call(console.info, console, f))
                }
            }
            function n() {
                this.before("trigger", function() {
                    i("trigger", this, t.toArray(arguments))
                }),
                console.groupCollapsed && this.after("trigger", function() {
                    console.groupEnd()
                }),
                this.before("on", function() {
                    i("on", this, t.toArray(arguments))
                }),
                this.before("off", function() {
                    i("off", this, t.toArray(arguments))
                })
            }
            var r = {
                on: "<-",
                trigger: "->",
                off: "x "
            };
            return n
        }
        .apply(e, n),
        !(void 0 !== r && (t.exports = r))
    }
    , function(t, e) {
        var i, n;
        i = [],
        n = function() {
            "use strict";
            function t(t, e) {
                var i, n, r, o = e.length;
                return "function" == typeof e[o - 1] && (o -= 1,
                r = e[o]),
                "object" == typeof e[o - 1] && (o -= 1),
                2 == o ? (i = e[0],
                n = e[1]) : (i = t.node,
                n = e[0]),
                {
                    element: i,
                    type: n,
                    callback: r
                }
            }
            function e(t, e) {
                return t.element == e.element && t.type == e.type && (null == e.callback || t.callback == e.callback)
            }
            function i() {
                function i(t) {
                    this.component = t,
                    this.attachedTo = [],
                    this.instances = {},
                    this.addInstance = function(t) {
                        var e = new n(t);
                        return this.instances[t.identity] = e,
                        this.attachedTo.push(t.node),
                        e
                    }
                    ,
                    this.removeInstance = function(t) {
                        delete this.instances[t.identity];
                        var e = this.attachedTo.indexOf(t.node);
                        e > -1 && this.attachedTo.splice(e, 1),
                        Object.keys(this.instances).length || r.removeComponentInfo(this)
                    }
                    ,
                    this.isAttachedTo = function(t) {
                        return this.attachedTo.indexOf(t) > -1
                    }
                }
                function n(t) {
                    this.instance = t,
                    this.events = [],
                    this.addBind = function(t) {
                        this.events.push(t),
                        r.events.push(t)
                    }
                    ,
                    this.removeBind = function(t) {
                        for (var i, n = 0; i = this.events[n]; n++)
                            e(i, t) && this.events.splice(n, 1)
                    }
                }
                var r = this;
                (this.reset = function() {
                    this.components = [],
                    this.allInstances = {},
                    this.events = []
                }
                ).call(this),
                this.addInstance = function(t) {
                    var e = this.findComponentInfo(t);
                    e || (e = new i(t.constructor),
                    this.components.push(e));
                    var n = e.addInstance(t);
                    return this.allInstances[t.identity] = n,
                    e
                }
                ,
                this.removeInstance = function(t) {
                    var e = this.findComponentInfo(t);
                    e && e.removeInstance(t),
                    delete this.allInstances[t.identity]
                }
                ,
                this.removeComponentInfo = function(t) {
                    var e = this.components.indexOf(t);
                    e > -1 && this.components.splice(e, 1)
                }
                ,
                this.findComponentInfo = function(t) {
                    for (var e, i = t.attachTo ? t : t.constructor, n = 0; e = this.components[n]; n++)
                        if (e.component === i)
                            return e;
                    return null
                }
                ,
                this.findInstanceInfo = function(t) {
                    return this.allInstances[t.identity] || null
                }
                ,
                this.getBoundEventNames = function(t) {
                    return this.findInstanceInfo(t).events.map(function(t) {
                        return t.type
                    })
                }
                ,
                this.findInstanceInfoByNode = function(t) {
                    var e = [];
                    return Object.keys(this.allInstances).forEach(function(i) {
                        var n = this.allInstances[i];
                        n.instance.node === t && e.push(n)
                    }, this),
                    e
                }
                ,
                this.on = function(e) {
                    for (var i, n = r.findInstanceInfo(this), o = arguments.length, s = 1, a = new Array(o - 1); o > s; s++)
                        a[s - 1] = arguments[s];
                    if (n) {
                        i = e.apply(null, a),
                        i && (a[a.length - 1] = i);
                        var l = t(this, a);
                        n.addBind(l)
                    }
                }
                ,
                this.off = function() {
                    var i = t(this, arguments)
                      , n = r.findInstanceInfo(this);
                    n && n.removeBind(i);
                    for (var o, s = 0; o = r.events[s]; s++)
                        e(o, i) && r.events.splice(s, 1)
                }
                ,
                r.trigger = function() {}
                ,
                this.teardown = function() {
                    r.removeInstance(this)
                }
                ,
                this.withRegistration = function() {
                    this.after("initialize", function() {
                        r.addInstance(this)
                    }),
                    this.around("on", r.on),
                    this.after("off", r.off),
                    window.DEBUG && (!1).enabled && this.after("trigger", r.trigger),
                    this.after("teardown", {
                        obj: r,
                        fnName: "teardown"
                    })
                }
            }
            return new i
        }
        .apply(e, i),
        !(void 0 !== n && (t.exports = n))
    }
    , function(t, e, i) {
        var n, r;
        n = [i(4)],
        r = function(t) {
            "use strict";
            function e() {
                var e = t.enabled && !Object.propertyIsEnumerable("getOwnPropertyDescriptor");
                if (e)
                    try {
                        Object.getOwnPropertyDescriptor(Object, "keys")
                    } catch (i) {
                        return !1
                    }
                return e
            }
            var i = 100
              , n = {
                isDomObj: function(t) {
                    return !(!t.nodeType && t !== window)
                },
                toArray: function(t, e) {
                    e = e || 0;
                    for (var i = t.length, n = new Array(i - e), r = e; i > r; r++)
                        n[r - e] = t[r];
                    return n
                },
                merge: function() {
                    var t = arguments.length
                      , e = new Array(t + 1);
                    if (0 === t)
                        return {};
                    for (var i = 0; t > i; i++)
                        e[i + 1] = arguments[i];
                    return e[0] = {},
                    e[e.length - 1] === !0 && (e.pop(),
                    e.unshift(!0)),
                    $.extend.apply(void 0, e)
                },
                push: function(t, e, i) {
                    return t && Object.keys(e || {}).forEach(function(n) {
                        if (t[n] && i)
                            throw new Error('utils.push attempted to overwrite "' + n + '" while running in protected mode');
                        "object" == typeof t[n] && "object" == typeof e[n] ? this.push(t[n], e[n]) : t[n] = e[n]
                    }, this),
                    t
                },
                getEnumerableProperty: function(t, e) {
                    return t.propertyIsEnumerable(e) ? t[e] : void 0
                },
                compose: function() {
                    var t = arguments;
                    return function() {
                        for (var e = arguments, i = t.length - 1; i >= 0; i--)
                            e = [t[i].apply(this, e)];
                        return e[0]
                    }
                },
                uniqueArray: function(t) {
                    for (var e = {}, i = [], n = 0, r = t.length; r > n; ++n)
                        e.hasOwnProperty(t[n]) || (i.push(t[n]),
                        e[t[n]] = 1);
                    return i
                },
                debounce: function(t, e, n) {
                    "number" != typeof e && (e = i);
                    var r, o;
                    return function() {
                        var i = this
                          , s = arguments
                          , a = function() {
                            r = null,
                            n || (o = t.apply(i, s))
                        }
                          , l = n && !r;
                        return r && clearTimeout(r),
                        r = setTimeout(a, e),
                        l && (o = t.apply(i, s)),
                        o
                    }
                },
                throttle: function(t, e) {
                    "number" != typeof e && (e = i);
                    var n, r, o, s, a, l, c = this.debounce(function() {
                        a = s = !1
                    }, e);
                    return function() {
                        n = this,
                        r = arguments;
                        var i = function() {
                            o = null,
                            a && (l = t.apply(n, r)),
                            c()
                        };
                        return o || (o = setTimeout(i, e)),
                        s ? a = !0 : (s = !0,
                        l = t.apply(n, r)),
                        c(),
                        l
                    }
                },
                countThen: function(t, e) {
                    return function() {
                        return --t ? void 0 : e.apply(this, arguments)
                    }
                },
                delegate: function(t) {
                    return function(e, i) {
                        var n, r = $(e.target);
                        Object.keys(t).forEach(function(o) {
                            return !e.isPropagationStopped() && (n = r.closest(o)).length ? (i = i || {},
                            e.currentTarget = i.el = n[0],
                            t[o].apply(this, [e, i])) : void 0
                        }, this)
                    }
                },
                once: function(t) {
                    var e, i;
                    return function() {
                        return e ? i : (e = !0,
                        i = t.apply(this, arguments))
                    }
                },
                propertyWritability: function(t, i, n) {
                    e() && t.hasOwnProperty(i) && Object.defineProperty(t, i, {
                        writable: n
                    })
                },
                mutateProperty: function(t, i, n) {
                    var r;
                    return e() && t.hasOwnProperty(i) ? (r = Object.getOwnPropertyDescriptor(t, i).writable,
                    Object.defineProperty(t, i, {
                        writable: !0
                    }),
                    n.call(t),
                    void Object.defineProperty(t, i, {
                        writable: r
                    })) : void n.call(t)
                }
            };
            return n
        }
        .apply(e, n),
        !(void 0 !== r && (t.exports = r))
    }
    , function(t, e, i) {
        var n, r;
        n = [i(7), i(6), i(4)],
        r = function(t, e, i) {
            "use strict";
            function n(t) {
                t.events.slice().forEach(function(t) {
                    var e = [t.type];
                    t.element && e.unshift(t.element),
                    "function" == typeof t.callback && e.push(t.callback),
                    this.off.apply(this, e)
                }, t.instance)
            }
            function r(t, e) {
                try {
                    window.postMessage(e, "*")
                } catch (n) {
                    i.warn.call(this, ['Event "', t, '" was triggered with non-serializable data. ', "Flight recommends you avoid passing non-serializable data in events."].join(""))
                }
            }
            function o(t) {
                i.warn.call(this, ['Attribute "', t, '" defaults to an array or object. ', "Enclose this in a function to avoid sharing between component instances."].join(""))
            }
            function s(t) {
                var e, n = [];
                if (this.attr = new this.attrDef,
                i.enabled && window.console) {
                    for (var r in this.attrDef.prototype)
                        n.push(r);
                    e = Object.keys(t);
                    for (var s = e.length - 1; s >= 0; s--)
                        if (-1 == n.indexOf(e[s])) {
                            i.warn.call(this, 'Passed unused attribute "' + e[s] + '".');
                            break
                        }
                }
                for (var r in this.attrDef.prototype) {
                    if ("undefined" == typeof t[r]) {
                        if (null === this.attr[r])
                            throw new Error('Required attribute "' + r + '" not specified in attachTo for component "' + this.toString() + '".');
                        i.enabled && "object" == typeof this.attr[r] && o.call(this, r)
                    } else
                        this.attr[r] = t[r];
                    "function" == typeof this.attr[r] && (this.attr[r] = this.attr[r].call(this))
                }
            }
            function a(t) {
                i.enabled && i.warn.call(this, "defaultAttrs will be removed in a future version. Please use attributes.");
                var e = Object.create(t);
                for (var n in this.defaults)
                    t.hasOwnProperty(n) || (e[n] = this.defaults[n],
                    i.enabled && "object" == typeof this.defaults[n] && o.call(this, n));
                this.attr = e,
                Object.keys(this.defaults || {}).forEach(function(t) {
                    if (null === this.defaults[t] && null === this.attr[t])
                        throw new Error('Required attribute "' + t + '" not specified in attachTo for component "' + this.toString() + '".')
                }, this)
            }
            function l(t) {
                return function(e, i) {
                    $(e.target).trigger(t, i)
                }
            }
            function c() {
                this.trigger = function() {
                    var t, e, n, o, s, a = arguments.length - 1, l = arguments[a];
                    return "string" == typeof l || l && l.defaultBehavior || (a--,
                    n = l),
                    1 == a ? (t = $(arguments[0]),
                    o = arguments[1]) : (t = this.$node,
                    o = arguments[0]),
                    o.defaultBehavior && (s = o.defaultBehavior,
                    o = $.Event(o.type)),
                    e = o.type || o,
                    i.enabled && window.postMessage && r.call(this, e, n),
                    "object" == typeof this.attr.eventData && (n = $.extend(!0, {}, this.attr.eventData, n)),
                    t.trigger(o || e, n),
                    s && !o.isDefaultPrevented() && (this[s] || s).call(this, o, n),
                    t
                }
                ,
                this.on = function() {
                    var e, i, n, r, o = arguments.length - 1, s = arguments[o];
                    if (r = "object" == typeof s ? t.delegate(this.resolveDelegateRules(s)) : "string" == typeof s ? l(s) : s,
                    2 == o ? (e = $(arguments[0]),
                    i = arguments[1]) : (e = this.$node,
                    i = arguments[0]),
                    "function" != typeof r && "object" != typeof r)
                        throw new Error('Unable to bind to "' + i + '" because the given callback is not a function or an object');
                    return n = r.bind(this),
                    n.target = r,
                    n.context = this,
                    e.on(i, n),
                    r.bound || (r.bound = []),
                    r.bound.push(n),
                    n
                }
                ,
                this.off = function() {
                    var t, i, n, r = arguments.length - 1;
                    if ("function" == typeof arguments[r] && (n = arguments[r],
                    r -= 1),
                    1 == r ? (t = $(arguments[0]),
                    i = arguments[1]) : (t = this.$node,
                    i = arguments[0]),
                    n) {
                        var o = n.target ? n.target.bound : n.bound || [];
                        o && o.some(function(t, e, i) {
                            return t.context && this.identity == t.context.identity ? (i.splice(e, 1),
                            n = t,
                            !0) : void 0
                        }, this),
                        t.off(i, n)
                    } else
                        e.findInstanceInfo(this).events.forEach(function(e) {
                            i == e.type && t.off(i, e.callback)
                        });
                    return t
                }
                ,
                this.resolveDelegateRules = function(t) {
                    var e = {};
                    return Object.keys(t).forEach(function(i) {
                        if (!(i in this.attr))
                            throw new Error('Component "' + this.toString() + '" wants to listen on "' + i + '" but no such attribute was defined.');
                        e[this.attr[i]] = "string" == typeof t[i] ? l(t[i]) : t[i]
                    }, this),
                    e
                }
                ,
                this.select = function(t) {
                    return this.$node.find(this.attr[t])
                }
                ,
                this.attributes = function(t) {
                    var e = function() {};
                    this.attrDef && (e.prototype = new this.attrDef);
                    for (var i in t)
                        e.prototype[i] = t[i];
                    this.attrDef = e
                }
                ,
                this.defaultAttrs = function(e) {
                    t.push(this.defaults, e, !0) || (this.defaults = e)
                }
                ,
                this.initialize = function(t, e) {
                    if (e = e || {},
                    this.identity || (this.identity = d++),
                    !t)
                        throw new Error("Component needs a node");
                    return t.jquery ? (this.node = t[0],
                    this.$node = t) : (this.node = t,
                    this.$node = $(t)),
                    this.attrDef ? s.call(this, e) : a.call(this, e),
                    this
                }
                ,
                this.teardown = function() {
                    n(e.findInstanceInfo(this))
                }
            }
            var d = 0;
            return c
        }
        .apply(e, n),
        !(void 0 !== r && (t.exports = r))
    }
    ])
}),
jQuery(function(t) {
    function e() {
        var e = t(":focus").parents().andSelf()
          , r = i.not(e.get());
        r.each(function() {
            t.inArray(this, n) != -1 && t(this).trigger("focuslost")
        }),
        i = e
    }
    var i = t()
      , n = [];
    t("a").on("focus blur", function(t) {
        setTimeout(e, 0)
    }),
    t.fn.focuslost = function(e) {
        return this.each(function() {
            t.inArray(this, n) == -1 && n.push(this),
            t(this).bind("focuslost", e)
        })
    }
}),
jQuery(function(t) {
    t(document).ready(function() {
        function e(t) {
            var e = !1;
            return t && (i(t) >= r ? e = !0 : alert("Not enough funds to submit")),
            e
        }
        function i(e) {
            var i = 0;
            return e && t(e).find("input[id^='GIFT_AMOUNT']").each(function() {
                isNaN(this.value) || 0 == this.value.length || "hidden" == this.type || (i += Number(this.value))
            }),
            i
        }
        function n(e) {
            var i = !1;
            if (e) {
                var n = t(e).val();
                t.isNumeric(n) && (0 == n || n >= r) && (i = !0)
            }
            return i
        }
        var r = 5;
        t("form[id^='giving-form-']").submit(function(t) {
            return t.preventBubble = !0,
            form_id = "#" + t.target.id,
            !!e(form_id)
        }),
        t("input[id^='GIFT_AMOUNT']").change(function(e) {
            var i = "#" + e.target.id;
            n(i) || (alert("Invalid or less than $" + r + " gift amount"),
            t(i).attr("placeholder", "0").val("").focus())
        })
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    function t(t) {
        t.currentTarget.classList.add(s);
        var e = t.currentTarget.getAttribute("data-content-id");
        document.getElementById(e).classList.add(l)
    }
    function e(t) {
        t.currentTarget.classList.remove(s);
        var e = t.currentTarget.getAttribute("data-content-id");
        document.getElementById(e).classList.remove(l)
    }
    function i(t) {
        t.currentTarget.classList.add(l);
        var e = t.currentTarget.getAttribute("data-image-id");
        document.getElementById(e).classList.add(s)
    }
    function n(t) {
        t.currentTarget.classList.remove(l);
        var e = t.currentTarget.getAttribute("data-image-id");
        document.getElementById(e).classList.remove(s)
    }
    function r(t) {
        var e = t.currentTarget.getAttribute("data-href");
        e && window.location.assign(e)
    }
    var o = "grid__image-item--clickable"
      , s = "grid__image-item--hovered"
      , a = "grid__content-item--clickable"
      , l = "grid__content-item--hovered"
      , c = Array.from(document.querySelectorAll(".js-grid-content-item"))
      , d = Array.from(document.querySelectorAll(".js-grid-image-item"));
    d.forEach(function(i) {
        i.classList.add(o),
        i.addEventListener("mouseenter", t),
        i.addEventListener("mouseleave", e),
        i.addEventListener("click", r)
    }),
    c.forEach(function(t) {
        t.classList.add(a),
        t.addEventListener("mouseenter", i),
        t.addEventListener("mouseleave", n),
        t.addEventListener("click", r)
    })
}),
!function(t, e, i, n) {
    "use strict";
    function r(t, e, i) {
        return setTimeout(c(t, i), e)
    }
    function o(t, e, i) {
        return !!Array.isArray(t) && (s(t, i[e], i),
        !0)
    }
    function s(t, e, i) {
        var r;
        if (t)
            if (t.forEach)
                t.forEach(e, i);
            else if (t.length !== n)
                for (r = 0; r < t.length; )
                    e.call(i, t[r], r, t),
                    r++;
            else
                for (r in t)
                    t.hasOwnProperty(r) && e.call(i, t[r], r, t)
    }
    function a(e, i, n) {
        var r = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
        return function() {
            var i = new Error("get-stack-trace")
              , n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , o = t.console && (t.console.warn || t.console.log);
            return o && o.call(t.console, r, n),
            e.apply(this, arguments)
        }
    }
    function l(t, e, i) {
        var n, r = e.prototype;
        n = t.prototype = Object.create(r),
        n.constructor = t,
        n._super = r,
        i && ut(n, i)
    }
    function c(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function d(t, e) {
        return typeof t == ft ? t.apply(e ? e[0] || n : n, e) : t
    }
    function u(t, e) {
        return t === n ? e : t
    }
    function h(t, e, i) {
        s(m(e), function(e) {
            t.addEventListener(e, i, !1)
        })
    }
    function p(t, e, i) {
        s(m(e), function(e) {
            t.removeEventListener(e, i, !1)
        })
    }
    function f(t, e) {
        for (; t; ) {
            if (t == e)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function v(t, e) {
        return t.indexOf(e) > -1
    }
    function m(t) {
        return t.trim().split(/\s+/g)
    }
    function g(t, e, i) {
        if (t.indexOf && !i)
            return t.indexOf(e);
        for (var n = 0; n < t.length; ) {
            if (i && t[n][i] == e || !i && t[n] === e)
                return n;
            n++
        }
        return -1
    }
    function y(t) {
        return Array.prototype.slice.call(t, 0)
    }
    function b(t, e, i) {
        for (var n = [], r = [], o = 0; o < t.length; ) {
            var s = e ? t[o][e] : t[o];
            g(r, s) < 0 && n.push(t[o]),
            r[o] = s,
            o++
        }
        return i && (n = e ? n.sort(function(t, i) {
            return t[e] > i[e]
        }) : n.sort()),
        n
    }
    function w(t, e) {
        for (var i, r, o = e[0].toUpperCase() + e.slice(1), s = 0; s < ht.length; ) {
            if (i = ht[s],
            r = i ? i + o : e,
            r in t)
                return r;
            s++
        }
        return n
    }
    function T() {
        return wt++
    }
    function C(e) {
        var i = e.ownerDocument || e;
        return i.defaultView || i.parentWindow || t
    }
    function k(t, e) {
        var i = this;
        this.manager = t,
        this.callback = e,
        this.element = t.element,
        this.target = t.options.inputTarget,
        this.domHandler = function(e) {
            d(t.options.enable, [t]) && i.handler(e)
        }
        ,
        this.init()
    }
    function S(t) {
        var e, i = t.options.inputClass;
        return new (e = i ? i : kt ? N : St ? q : Ct ? W : M)(t,_)
    }
    function _(t, e, i) {
        var n = i.pointers.length
          , r = i.changedPointers.length
          , o = e & It && n - r === 0
          , s = e & (Pt | Lt) && n - r === 0;
        i.isFirst = !!o,
        i.isFinal = !!s,
        o && (t.session = {}),
        i.eventType = e,
        x(t, i),
        t.emit("hammer.input", i),
        t.recognize(i),
        t.session.prevInput = i
    }
    function x(t, e) {
        var i = t.session
          , n = e.pointers
          , r = n.length;
        i.firstInput || (i.firstInput = $(e)),
        r > 1 && !i.firstMultiple ? i.firstMultiple = $(e) : 1 === r && (i.firstMultiple = !1);
        var o = i.firstInput
          , s = i.firstMultiple
          , a = s ? s.center : o.center
          , l = e.center = I(n);
        e.timeStamp = gt(),
        e.deltaTime = e.timeStamp - o.timeStamp,
        e.angle = F(a, l),
        e.distance = L(a, l),
        E(i, e),
        e.offsetDirection = P(e.deltaX, e.deltaY);
        var c = O(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = c.x,
        e.overallVelocityY = c.y,
        e.overallVelocity = mt(c.x) > mt(c.y) ? c.x : c.y,
        e.scale = s ? j(s.pointers, n) : 1,
        e.rotation = s ? D(s.pointers, n) : 0,
        e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
        A(i, e);
        var d = t.element;
        f(e.srcEvent.target, d) && (d = e.srcEvent.target),
        e.target = d
    }
    function E(t, e) {
        var i = e.center
          , n = t.offsetDelta || {}
          , r = t.prevDelta || {}
          , o = t.prevInput || {};
        e.eventType !== It && o.eventType !== Pt || (r = t.prevDelta = {
            x: o.deltaX || 0,
            y: o.deltaY || 0
        },
        n = t.offsetDelta = {
            x: i.x,
            y: i.y
        }),
        e.deltaX = r.x + (i.x - n.x),
        e.deltaY = r.y + (i.y - n.y)
    }
    function A(t, e) {
        var i, r, o, s, a = t.lastInterval || e, l = e.timeStamp - a.timeStamp;
        if (e.eventType != Lt && (l > $t || a.velocity === n)) {
            var c = e.deltaX - a.deltaX
              , d = e.deltaY - a.deltaY
              , u = O(l, c, d);
            r = u.x,
            o = u.y,
            i = mt(u.x) > mt(u.y) ? u.x : u.y,
            s = P(c, d),
            t.lastInterval = e
        } else
            i = a.velocity,
            r = a.velocityX,
            o = a.velocityY,
            s = a.direction;
        e.velocity = i,
        e.velocityX = r,
        e.velocityY = o,
        e.direction = s
    }
    function $(t) {
        for (var e = [], i = 0; i < t.pointers.length; )
            e[i] = {
                clientX: vt(t.pointers[i].clientX),
                clientY: vt(t.pointers[i].clientY)
            },
            i++;
        return {
            timeStamp: gt(),
            pointers: e,
            center: I(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }
    function I(t) {
        var e = t.length;
        if (1 === e)
            return {
                x: vt(t[0].clientX),
                y: vt(t[0].clientY)
            };
        for (var i = 0, n = 0, r = 0; e > r; )
            i += t[r].clientX,
            n += t[r].clientY,
            r++;
        return {
            x: vt(i / e),
            y: vt(n / e)
        }
    }
    function O(t, e, i) {
        return {
            x: e / t || 0,
            y: i / t || 0
        }
    }
    function P(t, e) {
        return t === e ? Ft : mt(t) >= mt(e) ? 0 > t ? Dt : jt : 0 > e ? Mt : Nt
    }
    function L(t, e, i) {
        i || (i = Rt);
        var n = e[i[0]] - t[i[0]]
          , r = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + r * r)
    }
    function F(t, e, i) {
        i || (i = Rt);
        var n = e[i[0]] - t[i[0]]
          , r = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(r, n) / Math.PI
    }
    function D(t, e) {
        return F(e[1], e[0], Wt) + F(t[1], t[0], Wt)
    }
    function j(t, e) {
        return L(e[0], e[1], Wt) / L(t[0], t[1], Wt)
    }
    function M() {
        this.evEl = Ut,
        this.evWin = Vt,
        this.pressed = !1,
        k.apply(this, arguments)
    }
    function N() {
        this.evEl = Gt,
        this.evWin = Zt,
        k.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function z() {
        this.evTarget = Qt,
        this.evWin = Jt,
        this.started = !1,
        k.apply(this, arguments)
    }
    function H(t, e) {
        var i = y(t.touches)
          , n = y(t.changedTouches);
        return e & (Pt | Lt) && (i = b(i.concat(n), "identifier", !0)),
        [i, n]
    }
    function q() {
        this.evTarget = ee,
        this.targetIds = {},
        k.apply(this, arguments)
    }
    function R(t, e) {
        var i = y(t.touches)
          , n = this.targetIds;
        if (e & (It | Ot) && 1 === i.length)
            return n[i[0].identifier] = !0,
            [i, i];
        var r, o, s = y(t.changedTouches), a = [], l = this.target;
        if (o = i.filter(function(t) {
            return f(t.target, l)
        }),
        e === It)
            for (r = 0; r < o.length; )
                n[o[r].identifier] = !0,
                r++;
        for (r = 0; r < s.length; )
            n[s[r].identifier] && a.push(s[r]),
            e & (Pt | Lt) && delete n[s[r].identifier],
            r++;
        return a.length ? [b(o.concat(a), "identifier", !0), a] : void 0
    }
    function W() {
        k.apply(this, arguments);
        var t = c(this.handler, this);
        this.touch = new q(this.manager,t),
        this.mouse = new M(this.manager,t),
        this.primaryTouch = null,
        this.lastTouches = []
    }
    function B(t, e) {
        t & It ? (this.primaryTouch = e.changedPointers[0].identifier,
        U.call(this, e)) : t & (Pt | Lt) && U.call(this, e)
    }
    function U(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var i = {
                x: e.clientX,
                y: e.clientY
            };
            this.lastTouches.push(i);
            var n = this.lastTouches
              , r = function() {
                var t = n.indexOf(i);
                t > -1 && n.splice(t, 1)
            };
            setTimeout(r, ie)
        }
    }
    function V(t) {
        for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var r = this.lastTouches[n]
              , o = Math.abs(e - r.x)
              , s = Math.abs(i - r.y);
            if (ne >= o && ne >= s)
                return !0
        }
        return !1
    }
    function Y(t, e) {
        this.manager = t,
        this.set(e)
    }
    function X(t) {
        if (v(t, ce))
            return ce;
        var e = v(t, de)
          , i = v(t, ue);
        return e && i ? ce : e || i ? e ? de : ue : v(t, le) ? le : ae
    }
    function G() {
        if (!oe)
            return !1;
        var e = {}
          , i = t.CSS && t.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
            e[n] = !i || t.CSS.supports("touch-action", n)
        }),
        e
    }
    function Z(t) {
        this.options = ut({}, this.defaults, t || {}),
        this.id = T(),
        this.manager = null,
        this.options.enable = u(this.options.enable, !0),
        this.state = pe,
        this.simultaneous = {},
        this.requireFail = []
    }
    function K(t) {
        return t & ye ? "cancel" : t & me ? "end" : t & ve ? "move" : t & fe ? "start" : ""
    }
    function Q(t) {
        return t == Nt ? "down" : t == Mt ? "up" : t == Dt ? "left" : t == jt ? "right" : ""
    }
    function J(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }
    function tt() {
        Z.apply(this, arguments)
    }
    function et() {
        tt.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function it() {
        tt.apply(this, arguments)
    }
    function nt() {
        Z.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function rt() {
        tt.apply(this, arguments)
    }
    function ot() {
        tt.apply(this, arguments)
    }
    function st() {
        Z.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function at(t, e) {
        return e = e || {},
        e.recognizers = u(e.recognizers, at.defaults.preset),
        new lt(t,e)
    }
    function lt(t, e) {
        this.options = ut({}, at.defaults, e || {}),
        this.options.inputTarget = this.options.inputTarget || t,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = t,
        this.input = S(this),
        this.touchAction = new Y(this,this.options.touchAction),
        ct(this, !0),
        s(this.options.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]),
            t[3] && e.requireFailure(t[3])
        }, this)
    }
    function ct(t, e) {
        var i = t.element;
        if (i.style) {
            var n;
            s(t.options.cssProps, function(r, o) {
                n = w(i.style, o),
                e ? (t.oldCssProps[n] = i.style[n],
                i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""
            }),
            e || (t.oldCssProps = {})
        }
    }
    function dt(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0),
        n.gesture = i,
        i.target.dispatchEvent(n)
    }
    var ut, ht = ["", "webkit", "Moz", "MS", "ms", "o"], pt = e.createElement("div"), ft = "function", vt = Math.round, mt = Math.abs, gt = Date.now;
    ut = "function" != typeof Object.assign ? function(t) {
        if (t === n || null === t)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            if (r !== n && null !== r)
                for (var o in r)
                    r.hasOwnProperty(o) && (e[o] = r[o])
        }
        return e
    }
    : Object.assign;
    var yt = a(function(t, e, i) {
        for (var r = Object.keys(e), o = 0; o < r.length; )
            (!i || i && t[r[o]] === n) && (t[r[o]] = e[r[o]]),
            o++;
        return t
    }, "extend", "Use `assign`.")
      , bt = a(function(t, e) {
        return yt(t, e, !0)
    }, "merge", "Use `assign`.")
      , wt = 1
      , Tt = /mobile|tablet|ip(ad|hone|od)|android/i
      , Ct = "ontouchstart"in t
      , kt = w(t, "PointerEvent") !== n
      , St = Ct && Tt.test(navigator.userAgent)
      , _t = "touch"
      , xt = "pen"
      , Et = "mouse"
      , At = "kinect"
      , $t = 25
      , It = 1
      , Ot = 2
      , Pt = 4
      , Lt = 8
      , Ft = 1
      , Dt = 2
      , jt = 4
      , Mt = 8
      , Nt = 16
      , zt = Dt | jt
      , Ht = Mt | Nt
      , qt = zt | Ht
      , Rt = ["x", "y"]
      , Wt = ["clientX", "clientY"];
    k.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && h(this.element, this.evEl, this.domHandler),
            this.evTarget && h(this.target, this.evTarget, this.domHandler),
            this.evWin && h(C(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler),
            this.evTarget && p(this.target, this.evTarget, this.domHandler),
            this.evWin && p(C(this.element), this.evWin, this.domHandler)
        }
    };
    var Bt = {
        mousedown: It,
        mousemove: Ot,
        mouseup: Pt
    }
      , Ut = "mousedown"
      , Vt = "mousemove mouseup";
    l(M, k, {
        handler: function(t) {
            var e = Bt[t.type];
            e & It && 0 === t.button && (this.pressed = !0),
            e & Ot && 1 !== t.which && (e = Pt),
            this.pressed && (e & Pt && (this.pressed = !1),
            this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: Et,
                srcEvent: t
            }))
        }
    });
    var Yt = {
        pointerdown: It,
        pointermove: Ot,
        pointerup: Pt,
        pointercancel: Lt,
        pointerout: Lt
    }
      , Xt = {
        2: _t,
        3: xt,
        4: Et,
        5: At
    }
      , Gt = "pointerdown"
      , Zt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (Gt = "MSPointerDown",
    Zt = "MSPointerMove MSPointerUp MSPointerCancel"),
    l(N, k, {
        handler: function(t) {
            var e = this.store
              , i = !1
              , n = t.type.toLowerCase().replace("ms", "")
              , r = Yt[n]
              , o = Xt[t.pointerType] || t.pointerType
              , s = o == _t
              , a = g(e, t.pointerId, "pointerId");
            r & It && (0 === t.button || s) ? 0 > a && (e.push(t),
            a = e.length - 1) : r & (Pt | Lt) && (i = !0),
            0 > a || (e[a] = t,
            this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t
            }),
            i && e.splice(a, 1))
        }
    });
    var Kt = {
        touchstart: It,
        touchmove: Ot,
        touchend: Pt,
        touchcancel: Lt
    }
      , Qt = "touchstart"
      , Jt = "touchstart touchmove touchend touchcancel";
    l(z, k, {
        handler: function(t) {
            var e = Kt[t.type];
            if (e === It && (this.started = !0),
            this.started) {
                var i = H.call(this, t, e);
                e & (Pt | Lt) && i[0].length - i[1].length === 0 && (this.started = !1),
                this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: _t,
                    srcEvent: t
                })
            }
        }
    });
    var te = {
        touchstart: It,
        touchmove: Ot,
        touchend: Pt,
        touchcancel: Lt
    }
      , ee = "touchstart touchmove touchend touchcancel";
    l(q, k, {
        handler: function(t) {
            var e = te[t.type]
              , i = R.call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: _t,
                srcEvent: t
            })
        }
    });
    var ie = 2500
      , ne = 25;
    l(W, k, {
        handler: function(t, e, i) {
            var n = i.pointerType == _t
              , r = i.pointerType == Et;
            if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (n)
                    B.call(this, e, i);
                else if (r && V.call(this, i))
                    return;
                this.callback(t, e, i)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var re = w(pt.style, "touchAction")
      , oe = re !== n
      , se = "compute"
      , ae = "auto"
      , le = "manipulation"
      , ce = "none"
      , de = "pan-x"
      , ue = "pan-y"
      , he = G();
    Y.prototype = {
        set: function(t) {
            t == se && (t = this.compute()),
            oe && this.manager.element.style && he[t] && (this.manager.element.style[re] = t),
            this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return s(this.manager.recognizers, function(e) {
                d(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }),
            X(t.join(" "))
        },
        preventDefaults: function(t) {
            var e = t.srcEvent
              , i = t.offsetDirection;
            if (this.manager.session.prevented)
                return void e.preventDefault();
            var n = this.actions
              , r = v(n, ce) && !he[ce]
              , o = v(n, ue) && !he[ue]
              , s = v(n, de) && !he[de];
            if (r) {
                var a = 1 === t.pointers.length
                  , l = t.distance < 2
                  , c = t.deltaTime < 250;
                if (a && l && c)
                    return
            }
            return s && o ? void 0 : r || o && i & zt || s && i & Ht ? this.preventSrc(e) : void 0
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0,
            t.preventDefault()
        }
    };
    var pe = 1
      , fe = 2
      , ve = 4
      , me = 8
      , ge = me
      , ye = 16
      , be = 32;
    Z.prototype = {
        defaults: {},
        set: function(t) {
            return ut(this.options, t),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(t) {
            if (o(t, "recognizeWith", this))
                return this;
            var e = this.simultaneous;
            return t = J(t, this),
            e[t.id] || (e[t.id] = t,
            t.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(t) {
            return o(t, "dropRecognizeWith", this) ? this : (t = J(t, this),
            delete this.simultaneous[t.id],
            this)
        },
        requireFailure: function(t) {
            if (o(t, "requireFailure", this))
                return this;
            var e = this.requireFail;
            return t = J(t, this),
            -1 === g(e, t) && (e.push(t),
            t.requireFailure(this)),
            this
        },
        dropRequireFailure: function(t) {
            if (o(t, "dropRequireFailure", this))
                return this;
            t = J(t, this);
            var e = g(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(e) {
                i.manager.emit(e, t)
            }
            var i = this
              , n = this.state;
            me > n && e(i.options.event + K(n)),
            e(i.options.event),
            t.additionalEvent && e(t.additionalEvent),
            n >= me && e(i.options.event + K(n))
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void (this.state = be)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length; ) {
                if (!(this.requireFail[t].state & (be | pe)))
                    return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = ut({}, t);
            return d(this.options.enable, [this, e]) ? (this.state & (ge | ye | be) && (this.state = pe),
            this.state = this.process(e),
            void (this.state & (fe | ve | me | ye) && this.tryEmit(e))) : (this.reset(),
            void (this.state = be))
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    l(tt, Z, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state
              , i = t.eventType
              , n = e & (fe | ve)
              , r = this.attrTest(t);
            return n && (i & Lt || !r) ? e | ye : n || r ? i & Pt ? e | me : e & fe ? e | ve : fe : be
        }
    }),
    l(et, tt, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: qt
        },
        getTouchAction: function() {
            var t = this.options.direction
              , e = [];
            return t & zt && e.push(ue),
            t & Ht && e.push(de),
            e
        },
        directionTest: function(t) {
            var e = this.options
              , i = !0
              , n = t.distance
              , r = t.direction
              , o = t.deltaX
              , s = t.deltaY;
            return r & e.direction || (e.direction & zt ? (r = 0 === o ? Ft : 0 > o ? Dt : jt,
            i = o != this.pX,
            n = Math.abs(t.deltaX)) : (r = 0 === s ? Ft : 0 > s ? Mt : Nt,
            i = s != this.pY,
            n = Math.abs(t.deltaY))),
            t.direction = r,
            i && n > e.threshold && r & e.direction
        },
        attrTest: function(t) {
            return tt.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX,
            this.pY = t.deltaY;
            var e = Q(t.direction);
            e && (t.additionalEvent = this.options.event + e),
            this._super.emit.call(this, t)
        }
    }),
    l(it, tt, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ce]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe)
        },
        emit: function(t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }),
    l(nt, Z, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [ae]
        },
        process: function(t) {
            var e = this.options
              , i = t.pointers.length === e.pointers
              , n = t.distance < e.threshold
              , o = t.deltaTime > e.time;
            if (this._input = t,
            !n || !i || t.eventType & (Pt | Lt) && !o)
                this.reset();
            else if (t.eventType & It)
                this.reset(),
                this._timer = r(function() {
                    this.state = ge,
                    this.tryEmit()
                }, e.time, this);
            else if (t.eventType & Pt)
                return ge;
            return be
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === ge && (t && t.eventType & Pt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = gt(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    l(rt, tt, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ce]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe)
        }
    }),
    l(ot, tt, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: zt | Ht,
            pointers: 1
        },
        getTouchAction: function() {
            return et.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, i = this.options.direction;
            return i & (zt | Ht) ? e = t.overallVelocity : i & zt ? e = t.overallVelocityX : i & Ht && (e = t.overallVelocityY),
            this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && mt(e) > this.options.velocity && t.eventType & Pt
        },
        emit: function(t) {
            var e = Q(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t),
            this.manager.emit(this.options.event, t)
        }
    }),
    l(st, Z, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [le]
        },
        process: function(t) {
            var e = this.options
              , i = t.pointers.length === e.pointers
              , n = t.distance < e.threshold
              , o = t.deltaTime < e.time;
            if (this.reset(),
            t.eventType & It && 0 === this.count)
                return this.failTimeout();
            if (n && o && i) {
                if (t.eventType != Pt)
                    return this.failTimeout();
                var s = !this.pTime || t.timeStamp - this.pTime < e.interval
                  , a = !this.pCenter || L(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp,
                this.pCenter = t.center,
                a && s ? this.count += 1 : this.count = 1,
                this._input = t;
                var l = this.count % e.taps;
                if (0 === l)
                    return this.hasRequireFailures() ? (this._timer = r(function() {
                        this.state = ge,
                        this.tryEmit()
                    }, e.interval, this),
                    fe) : ge
            }
            return be
        },
        failTimeout: function() {
            return this._timer = r(function() {
                this.state = be
            }, this.options.interval, this),
            be
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ge && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    at.VERSION = "2.0.8",
    at.defaults = {
        domEvents: !1,
        touchAction: se,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[rt, {
            enable: !1
        }], [it, {
            enable: !1
        }, ["rotate"]], [ot, {
            direction: zt
        }], [et, {
            direction: zt
        }, ["swipe"]], [st], [st, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [nt]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var we = 1
      , Te = 2;
    lt.prototype = {
        set: function(t) {
            return ut(this.options, t),
            t.touchAction && this.touchAction.update(),
            t.inputTarget && (this.input.destroy(),
            this.input.target = t.inputTarget,
            this.input.init()),
            this
        },
        stop: function(t) {
            this.session.stopped = t ? Te : we
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers, r = e.curRecognizer;
                (!r || r && r.state & ge) && (r = e.curRecognizer = null);
                for (var o = 0; o < n.length; )
                    i = n[o],
                    e.stopped === Te || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t),
                    !r && i.state & (fe | ve | me) && (r = e.curRecognizer = i),
                    o++
            }
        },
        get: function(t) {
            if (t instanceof Z)
                return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t)
                    return e[i];
            return null
        },
        add: function(t) {
            if (o(t, "add", this))
                return this;
            var e = this.get(t.options.event);
            return e && this.remove(e),
            this.recognizers.push(t),
            t.manager = this,
            this.touchAction.update(),
            t
        },
        remove: function(t) {
            if (o(t, "remove", this))
                return this;
            if (t = this.get(t)) {
                var e = this.recognizers
                  , i = g(e, t);
                -1 !== i && (e.splice(i, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(t, e) {
            if (t !== n && e !== n) {
                var i = this.handlers;
                return s(m(t), function(t) {
                    i[t] = i[t] || [],
                    i[t].push(e)
                }),
                this
            }
        },
        off: function(t, e) {
            if (t !== n) {
                var i = this.handlers;
                return s(m(t), function(t) {
                    e ? i[t] && i[t].splice(g(i[t], e), 1) : delete i[t]
                }),
                this
            }
        },
        emit: function(t, e) {
            this.options.domEvents && dt(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t,
                e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                }
                ;
                for (var n = 0; n < i.length; )
                    i[n](e),
                    n++
            }
        },
        destroy: function() {
            this.element && ct(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    ut(at, {
        INPUT_START: It,
        INPUT_MOVE: Ot,
        INPUT_END: Pt,
        INPUT_CANCEL: Lt,
        STATE_POSSIBLE: pe,
        STATE_BEGAN: fe,
        STATE_CHANGED: ve,
        STATE_ENDED: me,
        STATE_RECOGNIZED: ge,
        STATE_CANCELLED: ye,
        STATE_FAILED: be,
        DIRECTION_NONE: Ft,
        DIRECTION_LEFT: Dt,
        DIRECTION_RIGHT: jt,
        DIRECTION_UP: Mt,
        DIRECTION_DOWN: Nt,
        DIRECTION_HORIZONTAL: zt,
        DIRECTION_VERTICAL: Ht,
        DIRECTION_ALL: qt,
        Manager: lt,
        Input: k,
        TouchAction: Y,
        TouchInput: q,
        MouseInput: M,
        PointerEventInput: N,
        TouchMouseInput: W,
        SingleTouchInput: z,
        Recognizer: Z,
        AttrRecognizer: tt,
        Tap: st,
        Pan: et,
        Swipe: ot,
        Pinch: it,
        Rotate: rt,
        Press: nt,
        on: h,
        off: p,
        each: s,
        merge: bt,
        extend: yt,
        assign: ut,
        inherit: l,
        bindFn: c,
        prefixed: w
    });
    var Ce = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
    Ce.Hammer = at,
    "function" == typeof define && define.amd ? define(function() {
        return at
    }) : "undefined" != typeof module && module.exports ? module.exports = at : t[i] = at
}(window, document, "Hammer"),
flight.component(function() {
    this.currentSlideIndex = 0,
    this.slides = [],
    this.playIntervalHandle = null,
    this.playSpeed = 5e3,
    this.defaultAttrs({
        pauseButtonSelector: ".header-carousel-navigation__pause",
        nextButtonSelector: ".header-carousel-navigation__next",
        previousButtonSelector: ".header-carousel-navigation__previous",
        pagerButtonSelector: ".header-carousel-navigation-pager__item",
        carouselItemLinks: ".header-carousel-text__link"
    }),
    this.after("initialize", function() {
        this.initializeClickHandlers(),
        this.initializeFocusHandlers(),
        this.initializeSlides(),
        this.startPlaying()
    }),
    this.handlePauseClick = function() {
        this.isPlaying() ? this.stopPlaying() : this.startPlaying()
    }
    ,
    this.stopPlaying = function() {
        this.isPlaying() && clearInterval(this.playIntervalHandle),
        this.setPlayButtonState("pause"),
        this.playIntervalHandle = null
    }
    ,
    this.startPlaying = function() {
        this.playIntervalHandle = setInterval(this.advanceToNextSlide.bind(this), this.playSpeed),
        this.setPlayButtonState("play")
    }
    ,
    this.handleNextClick = function() {
        this.stopPlaying(),
        this.advanceToNextSlide()
    }
    ,
    this.handlePreviousClick = function() {
        this.stopPlaying(),
        this.incrementCurrentSlideIndex(-1),
        this.updateCarouselItemPositions()
    }
    ,
    this.handlePagerClick = function(t, e) {
        this.stopPlaying(),
        this.advanceToSlideIndex(e.el.getAttribute("data-item-index"))
    }
    ,
    this.handleLinkClick = function() {
        this.stopPlaying()
    }
    ,
    this.handleLinkFocus = function(t, e) {
        var i = t.target.getAttribute("data-item-index");
        this.advanceToSlideIndex(i)
    }
    ,
    this.advanceToNextSlide = function() {
        this.incrementCurrentSlideIndex(1),
        this.updateCarouselItemPositions()
    }
    ,
    this.advanceToSlideIndex = function(t) {
        this.currentSlideIndex = t,
        this.updateCarouselItemPositions()
    }
    ,
    this.updateCarouselItemPositions = function() {
        function t(t) {
            for (var i = 0; i < t.length; i++)
                e(t[i], "")
        }
        function e(t, e) {
            t.textItem.setAttribute("data-item-position", e),
            t.imageItem.setAttribute("data-item-position", e),
            t.pagerItem.setAttribute("data-item-position", e)
        }
        t(this.slides),
        e(this.getNextSlide(), "next"),
        e(this.getCurrentSlide(), "current"),
        e(this.getPreviousSlide(), "previous")
    }
    ,
    this.getNextSlide = function() {
        return this.slides[this.incrementArrayIndex(this.currentSlideIndex, 1, this.slides.length)]
    }
    ,
    this.getPreviousSlide = function() {
        return this.slides[this.incrementArrayIndex(this.currentSlideIndex, -1, this.slides.length)]
    }
    ,
    this.getCurrentSlide = function() {
        return this.slides[this.currentSlideIndex]
    }
    ,
    this.incrementCurrentSlideIndex = function(t) {
        this.currentSlideIndex = this.incrementArrayIndex(this.currentSlideIndex, t, this.slides.length)
    }
    ,
    this.incrementArrayIndex = function(t, e, i) {
        var n = parseInt(t) + parseInt(e);
        return n < 0 ? i + n : n % i
    }
    ,
    this.initializeClickHandlers = function() {
        this.on("click", {
            pauseButtonSelector: this.makeCallbackHandler(this.handlePauseClick.bind(this)),
            nextButtonSelector: this.makeCallbackHandler(this.handleNextClick.bind(this)),
            previousButtonSelector: this.makeCallbackHandler(this.handlePreviousClick.bind(this)),
            pagerButtonSelector: this.makeCallbackHandler(this.handlePagerClick.bind(this))
        }),
        this.on(this.attr.carouselItemLinks, "mousedown", this.makeCallbackHandler(this.handleLinkClick.bind(this)))
    }
    ,
    this.initializeFocusHandlers = function() {
        this.on(this.attr.carouselItemLinks, "focus", this.makeCallbackHandler(this.handleLinkFocus.bind(this)))
    }
    ,
    this.makeCallbackHandler = function(t) {
        return function(e, i) {
            e.preventDefault(),
            e.stopPropagation(),
            t(e, i)
        }
    }
    ,
    this.initializeSlides = function() {
        var t = document.querySelectorAll(".header-carousel-images__item")
          , e = document.querySelectorAll(".header-carousel-text__item")
          , i = document.querySelectorAll(".header-carousel-navigation-pager__item");
        this.slides = Object.keys(t).map(function(e) {
            return t[e]
        }).map(function(t, n) {
            return {
                imageItem: t,
                textItem: e[n],
                pagerItem: i[n]
            }
        })
    }
    ,
    this.isPlaying = function() {
        return !!this.playIntervalHandle
    }
    ,
    this.setPlayButtonState = function(t) {
        var e = this.$node.find(".header-carousel-navigation__pause")[0];
        e.setAttribute("data-play-state", t)
    }
}).attachTo(".header-carousel"),
window.addEventListener("load", function() {
    function t(t, e, i) {
        if (0 > e) {
            if (t.previousElementSibling) {
                for (t = t.previousElementSibling; t.lastElementChild; )
                    t = t.lastElementChild;
                return t
            }
            return t.parentElement
        }
        if (t != i && t.firstElementChild)
            return t.firstElementChild;
        for (; null != t; ) {
            if (t.nextElementSibling)
                return t.nextElementSibling;
            t = t.parentElement
        }
        return null
    }
    function e(t) {
        for (; t && t !== document.documentElement; ) {
            if (t.hasAttribute("inert"))
                return t;
            t = t.parentElement
        }
        return null
    }
    !function(t) {
        var e = document.createElement("style");
        e.type = "text/css",
        e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
        document.body.appendChild(e)
    }("/*[inert]*/[inert]{position:relative!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}[inert]::before{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0}");
    var i = 0;
    document.addEventListener("keydown", function(t) {
        i = 9 === t.keyCode ? t.shiftKey ? -1 : 1 : 0
    }),
    document.addEventListener("mousedown", function() {
        i = 0
    }),
    document.body.addEventListener("focus", function(n) {
        var r = n.target
          , o = e(r);
        if (o) {
            if (document.hasFocus() && 0 !== i) {
                var s = document.activeElement
                  , a = new KeyboardEvent("keydown",{
                    keyCode: 9,
                    which: 9,
                    key: "Tab",
                    code: "Tab",
                    keyIdentifier: "U+0009",
                    shiftKey: !!(0 > i),
                    bubbles: !0
                });
                if (Object.defineProperty(a, "keyCode", {
                    value: 9
                }),
                document.activeElement.dispatchEvent(a),
                s != document.activeElement)
                    return;
                for (s = o; s = t(s, i, o),
                s; )
                    if (a = r,
                    a = !(0 > s.tabIndex || (s.focus(),
                    document.activeElement === a)))
                        return
            }
            r.blur(),
            n.preventDefault(),
            n.stopPropagation()
        }
    }, !0),
    document.addEventListener("click", function(t) {
        e(t.target) && (t.preventDefault(),
        t.stopPropagation())
    }, !0)
}),
document.addEventListener("DOMContentLoaded", function() {
    function t(t) {
        var e = document.getElementById(v).getAttribute("data-loc-id")
          , i = parseInt(e, 10)
          , n = t.locations.filter(function(t) {
            return t.lid === i || t.parent_lid === i
        });
        return n
    }
    function e() {
        var t = document.getElementById(v)
          , e = document.createElement("table")
          , r = i()
          , o = n()
          , s = a()
          , c = l();
        t.innerHTML = " ",
        e.classList.add(v + "__table"),
        e.appendChild(s),
        e.appendChild(c),
        t.appendChild(r),
        t.appendChild(o),
        t.appendChild(e),
        f(w)
    }
    function i() {
        var t = document.createElement("h2");
        return t.innerText = m[0].name,
        t.classList.add(v + "__title"),
        t
    }
    function n() {
        var t = document.createElement("div")
          , e = r()
          , i = o()
          , n = s(m, v);
        return t.classList.add(v + "__header"),
        t.appendChild(e),
        t.appendChild(i),
        t.appendChild(n),
        t
    }
    function r() {
        var t = document.createElement("h3")
          , e = m[0].weeks[g][T[0]].date
          , i = m[0].weeks[g][T[6]].date;
        return t.classList.add(v + "__header-title"),
        t.innerText = u(e, i),
        t
    }
    function o() {
        var t, i, n, r = document.createElement("div"), o = 0 === g;
        return t = d("Previous Week", o, function(t) {
            g > 0 && (g--,
            w = t.target.getAttribute("id"),
            e())
        }),
        o = !1,
        i = d("Current Week", o, function(t) {
            g = 0,
            w = t.target.getAttribute("id"),
            e()
        }),
        o = g === y - 1,
        n = d("Next Week", o, function(t) {
            g < y - 1 && (g++,
            w = t.target.getAttribute("id"),
            e())
        }),
        r.classList.add(v + "__header-week-select"),
        r.appendChild(t),
        r.appendChild(i),
        r.appendChild(n),
        r
    }
    function s(t, i) {
        var n, r, o = document.createElement("div");
        return o.classList.add(i + "__header-column-select"),
        t.forEach(function(t) {
            n = document.createElement("button"),
            n.setAttribute("data-id", t.lid),
            n.setAttribute("class", i + "__radio-button"),
            n.setAttribute("id", i + "__radio-button-" + t.lid),
            b === t.lid ? (n.classList.add(i + "__radio-button--selected"),
            n.setAttribute("aria-pressed", !0)) : n.setAttribute("aria-pressed", !1),
            n.innerText = t.name,
            n.addEventListener("click", function(t) {
                r = t.target.getAttribute("data-id"),
                b = parseInt(r, 10),
                w = t.target.getAttribute("id"),
                e()
            }),
            o.appendChild(n)
        }),
        o
    }
    function a() {
        var t, e = document.createElement("tr"), i = document.createElement("tr"), n = document.createElement("thead");
        return e.appendChild(document.createElement("th")),
        i.appendChild(document.createElement("th")),
        m.forEach(function(n) {
            t = document.createElement("th"),
            t.innerText = n.name,
            e.appendChild(t),
            t = document.createElement("th"),
            t.innerHTML = n.desc,
            b !== n.lid && t.classList.add(v + "__table--hidden"),
            i.appendChild(t)
        }),
        n.appendChild(e),
        n.appendChild(i),
        n
    }
    function l() {
        var t, e, i, n, r, o, s, a = document.createElement("tbody");
        return T.forEach(function(l) {
            t = document.createElement("tr"),
            i = document.createDocumentFragment(),
            m.forEach(function(t) {
                o = t.weeks[g],
                r = o[l],
                n = document.createElement("td"),
                "closed" === r.times.status && n.classList.add(v + "__table--closed"),
                b !== t.lid && n.classList.add(v + "__table--hidden"),
                n.innerText = r.rendered.split("\n")[0],
                i.appendChild(n)
            }),
            s = new Date(r.date),
            e = c(s, l),
            t.appendChild(e),
            t.appendChild(i),
            p(s) && t.classList.add(v + "__table-today"),
            a.appendChild(t)
        }),
        a
    }
    function c(t, e) {
        var i = t.getUTCDate()
          , n = document.createElement("th")
          , r = document.createElement("span")
          , o = document.createElement("span");
        return r.classList.add(v + "__table-row-heading-day"),
        r.innerText = e,
        o.classList.add(v + "__table-row-heading-date"),
        o.innerText = i,
        n.appendChild(r),
        n.appendChild(o),
        n
    }
    function d(t, e, i) {
        var n = document.createElement("button")
          , r = t.trim().toLowerCase().split(" ").join("-");
        return n.innerText = t,
        n.addEventListener("click", i),
        n.classList.add(v + "__button"),
        n.setAttribute("id", v + "__button-" + r),
        e && (n.classList.add(v + "__button--disabled"),
        n.setAttribute("tabindex", -1)),
        n
    }
    function u(t, e) {
        var i, n;
        try {
            i = h(t),
            n = h(e)
        } catch (r) {
            return ""
        }
        return i + " — " + n
    }
    function h(t) {
        var e = new Date(t)
          , i = e.toUTCString()
          , n = i.split(" ")
          , r = n[2] + " " + n[1] + ", " + n[3];
        return r
    }
    function p(t) {
        var e = new Date
          , i = t.getUTCFullYear() == e.getUTCFullYear() && t.getUTCMonth() == e.getUTCMonth() && t.getUTCDate() == e.getUTCDate();
        return i
    }
    function f(t) {
        if (t) {
            var e = document.getElementById(t);
            e && e.focus()
        }
    }
    var v = "component-location-hours-api"
      , m = []
      , g = 0
      , y = 0
      , b = -1
      , w = null
      , T = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      , C = document.getElementById(v);
    if (C)
        try {
            var k = document.getElementById("component-location-hours-api__initialData")
              , S = JSON.parse(k.innerText);
            m = t(S),
            y = m[0].weeks.length,
            b = m[0].lid,
            e()
        } catch (_) {
            console.error("API Location Hours: Unsupported JSON format. \n" + _)
        }
}),
jQuery(function(t) {
    function e() {
        u = !1
    }
    function i() {
        l.addClass("open"),
        d.addClass("active"),
        c.prop("disabled", !1).attr("tabindex", "0").focus()
    }
    function n() {
        l.removeClass("open"),
        d.removeClass("active"),
        c.prop("disabled", !0).attr("tabindex", "-1")
    }
    function r() {
        m = !1
    }
    function o() {
        t(".js-nav-header-toggle").removeClass("is-active"),
        t(".js-header-menus").removeClass("is-active"),
        v.addClass("is-open"),
        h.addClass("open"),
        f.addClass("active"),
        p.prop("disabled", !1).attr("tabindex", "0").focus()
    }
    function s() {
        v.removeClass("is-open"),
        h.removeClass("open"),
        f.removeClass("active"),
        p.prop("disabled", !0).attr("tabindex", "-1")
    }
    function a(t, e, i) {
        var n = "";
        if (i) {
            var r = new Date;
            r.setDate(r.getDate() + i),
            n = "; expires=" + r.toUTCString()
        }
        document.cookie = t + "=" + e + n
    }
    t(".js-nav-header-toggle").on("click", function() {
        t(this).toggleClass("is-active"),
        t(".js-header-menus").toggleClass("is-active"),
        t("body").toggleClass("is-menu-open")
    });
    var l = t(".search-input-container")
      , c = t(".search-input")
      , d = t(".search-toggle")
      , u = !1;
    d.click(function(t) {
        u || (l.hasClass("open") ? n() : i())
    }),
    c.blur(function(i) {
        "" === t(this).val() && (n(),
        u = !0,
        setTimeout(e, 500))
    });
    var h = t(".search-input-container-mobile")
      , p = t(".search-input-mobile")
      , f = t(".search-toggle-mobile")
      , v = t(".eyebrow-mobile-wrapper")
      , m = !1;
    f.click(function(t) {
        m || (h.hasClass("open") ? s() : o())
    }),
    p.blur(function(e) {
        "" === t(this).val() && (s(),
        m = !0,
        setTimeout(r, 500))
    });
    var g = t("ul#menu-main > li.menu-item-has-children")
      , y = t(".js-expand-item");
    y.on("click", function() {
        t(this).siblings(".menu-main__submenus-container").toggleClass("is-active"),
        t(this).closest("li").toggleClass("is-active"),
        t(this).toggleClass("is-active")
    }),
    g.on("focusin", function(e) {
        t(this).addClass("is-active")
    }),
    g.on("focusout", function(e) {
        t(e.relatedTarget).closest(g).is(t(e.currentTarget)) || t(this).removeClass("is-active")
    });
    var b = 0
      , w = 10;
    t(window).scroll(function(e) {
        var i = t("#main");
        if (!t(".splash-page", i).length) {
            var n = t(window).scrollTop()
              , r = i.length > 0 ? i.offset().top : 0
              , o = r - n
              , s = t(this).scrollTop()
              , a = t(".eyebrow-mobile-wrapper").is(":visible") ? t(".eyebrow-mobile-wrapper").outerHeight(!0) : 0;
            menuHeight = t(".header-navigation__site-title").outerHeight() + t(".header-navigation__eyebrow").outerHeight() + a,
            t("body div").hasClass("admin-bar") && t("body").addClass("admin-bar"),
            n > menuHeight ? t("body").addClass("is-scrolled-past-header") : t("body").removeClass("is-scrolled-past-header"),
            o < 1 ? t("body").addClass("is-scrolled-to-content") : t("body").removeClass("is-scrolled-to-content"),
            Math.abs(b - s) >= w && (s > b ? t("body").removeClass("is-scroll-up") : t("body").addClass("is-scroll-up"),
            b = s),
            t("body").get(0).style.setProperty("--header-height", menuHeight + "px")
        }
    }),
    t('a[href^="#"]').click(function(e) {
        var i = "#" + this.href.split("#")[1];
        t(i).attr("tabindex", -1).on("blur focusout", function() {
            t(this).removeAttr("tabindex")
        }).focus()
    });
    var T = document.documentElement;
    T.setAttribute("data-useragent", navigator.userAgent),
    setTimeout(function() {
        t(".goog-logo-link img").attr("alt", "Google logo"),
        t(".goog-te-combo").attr("id", "selectlanguage"),
        t(".goog-te-combo").after('<label for="selectlanguage" class="assistive-text">Select language</label>'),
        t(".google-translate").removeClass("u-hide")
    }, 1e3),
    t(".js-close-maintenance-notice").on("click", function() {
        t(".maintenance-notice").toggleClass("is-hidden")
    }),
    t(".disabled-input input") && t(".disabled-input input").attr("readonly", "readonly"),
    t(document).ready(function() {
        t("a.ior-single-award_preview").featherlightGallery({
            gallery: {
                previous: "«",
                next: "»",
                fadeIn: 300
            },
            openSpeed: 300
        }),
        t("a.ior-second-link").on("click", function(e) {
            $galleryTarget = t(e.target).closest("article").find("a.ior-single-award_preview"),
            $galleryTarget.click()
        })
    }),
    t(function() {
        t("li.validate_email input").parsley("validate")
    }),
    t("#reset-url").click(function() {
        var t = window.location.toString();
        if (t.indexOf("?") > 0) {
            var e = t.substring(0, t.indexOf("?"));
            window.history.replaceState({}, document.title, e)
        }
        location.reload()
    });
    var C = 1
      , k = "Red_Notification_Id";
    t(".notification__close").click(function(e) {
        e.preventDefault();
        var i = t("#notification_id").val();
        return t("#wpadminbar").length || a(k, i, C),
        t("#noticeblock").addClass("notification__block"),
        !1
    }),
    t("#notification__action").click(function(e) {
        e.preventDefault();
        var i = t("#notification_id").val();
        return t("#wpadminbar").length || a(k, i, C),
        t("#noticeblock").addClass("notification__block"),
        window.open(t(this).attr("href"), "_blank"),
        !0
    })
});
var _slice = Array.prototype.slice
  , _slicedToArray = function() {
    function t(t, e) {
        var i = []
          , n = !0
          , r = !1
          , o = void 0;
        try {
            for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
            !e || i.length !== e); n = !0)
                ;
        } catch (l) {
            r = !0,
            o = l
        } finally {
            try {
                !n && a["return"] && a["return"]()
            } finally {
                if (r)
                    throw o
            }
        }
        return i
    }
    return function(e, i) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e))
            return t(e, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}()
  , _extends = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
    }
    return t
}
;
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : t.parsley = e(t.jQuery)
}(this, function(t) {
    "use strict";
    function e(t, e) {
        return t.parsleyAdaptedCallback || (t.parsleyAdaptedCallback = function() {
            var i = Array.prototype.slice.call(arguments, 0);
            i.unshift(this),
            t.apply(e || P, i)
        }
        ),
        t.parsleyAdaptedCallback
    }
    function i(t) {
        return 0 === t.lastIndexOf(F, 0) ? t.substr(F.length) : t
    }
    function n() {
        var e = this
          , i = window || global;
        _extends(this, {
            isNativeEvent: function(t) {
                return t.originalEvent && t.originalEvent.isTrusted !== !1
            },
            fakeInputEvent: function(i) {
                e.isNativeEvent(i) && t(i.target).trigger("input")
            },
            misbehaves: function(i) {
                e.isNativeEvent(i) && (e.behavesOk(i),
                t(document).on("change.inputevent", i.data.selector, e.fakeInputEvent),
                e.fakeInputEvent(i))
            },
            behavesOk: function(i) {
                e.isNativeEvent(i) && t(document).off("input.inputevent", i.data.selector, e.behavesOk).off("change.inputevent", i.data.selector, e.misbehaves)
            },
            install: function() {
                if (!i.inputEventPatched) {
                    i.inputEventPatched = "0.0.3";
                    for (var n = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], r = 0; r < n.length; r++) {
                        var o = n[r];
                        t(document).on("input.inputevent", o, {
                            selector: o
                        }, e.behavesOk).on("change.inputevent", o, {
                            selector: o
                        }, e.misbehaves)
                    }
                }
            },
            uninstall: function() {
                delete i.inputEventPatched,
                t(document).off(".inputevent")
            }
        })
    }
    var r = 1
      , o = {}
      , s = {
        attr: function(t, e, i) {
            var n, r, o, s = new RegExp("^" + e,"i");
            if ("undefined" == typeof i)
                i = {};
            else
                for (n in i)
                    i.hasOwnProperty(n) && delete i[n];
            if (!t)
                return i;
            for (o = t.attributes,
            n = o.length; n--; )
                r = o[n],
                r && r.specified && s.test(r.name) && (i[this.camelize(r.name.slice(e.length))] = this.deserializeValue(r.value));
            return i
        },
        checkAttr: function(t, e, i) {
            return t.hasAttribute(e + i)
        },
        setAttr: function(t, e, i, n) {
            t.setAttribute(this.dasherize(e + i), String(n))
        },
        getType: function(t) {
            return t.getAttribute("type") || "text"
        },
        generateID: function() {
            return "" + r++
        },
        deserializeValue: function(t) {
            var e;
            try {
                return t ? "true" == t || "false" != t && ("null" == t ? null : isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? JSON.parse(t) : t : e) : t
            } catch (i) {
                return t
            }
        },
        camelize: function(t) {
            return t.replace(/-+(.)?/g, function(t, e) {
                return e ? e.toUpperCase() : ""
            })
        },
        dasherize: function(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        },
        warn: function() {
            var t;
            window.console && "function" == typeof window.console.warn && (t = window.console).warn.apply(t, arguments)
        },
        warnOnce: function(t) {
            o[t] || (o[t] = !0,
            this.warn.apply(this, arguments))
        },
        _resetWarnings: function() {
            o = {}
        },
        trimString: function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        parse: {
            date: function M(t) {
                var e = t.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                if (!e)
                    return null;
                var i = e.map(function(t) {
                    return parseInt(t, 10)
                })
                  , n = _slicedToArray(i, 4)
                  , r = (n[0],
                n[1])
                  , o = n[2]
                  , s = n[3]
                  , M = new Date(r,o - 1,s);
                return M.getFullYear() !== r || M.getMonth() + 1 !== o || M.getDate() !== s ? null : M
            },
            string: function(t) {
                return t
            },
            integer: function(t) {
                return isNaN(t) ? null : parseInt(t, 10)
            },
            number: function(t) {
                if (isNaN(t))
                    throw null;
                return parseFloat(t)
            },
            "boolean": function(t) {
                return !/^\s*false\s*$/i.test(t)
            },
            object: function(t) {
                return s.deserializeValue(t)
            },
            regexp: function(t) {
                var e = "";
                return /^\/.*\/(?:[gimy]*)$/.test(t) ? (e = t.replace(/.*\/([gimy]*)$/, "$1"),
                t = t.replace(new RegExp("^/(.*?)/" + e + "$"), "$1")) : t = "^" + t + "$",
                new RegExp(t,e)
            }
        },
        parseRequirement: function(t, e) {
            var i = this.parse[t || "string"];
            if (!i)
                throw 'Unknown requirement specification: "' + t + '"';
            var n = i(e);
            if (null === n)
                throw "Requirement is not a " + t + ': "' + e + '"';
            return n
        },
        namespaceEvents: function(e, i) {
            return e = this.trimString(e || "").split(/\s+/),
            e[0] ? t.map(e, function(t) {
                return t + "." + i
            }).join(" ") : ""
        },
        difference: function(e, i) {
            var n = [];
            return t.each(e, function(t, e) {
                i.indexOf(e) == -1 && n.push(e)
            }),
            n
        },
        all: function(e) {
            return t.when.apply(t, _toConsumableArray(e).concat([42, 42]))
        },
        objectCreate: Object.create || function() {
            var t = function() {};
            return function(e) {
                if (arguments.length > 1)
                    throw Error("Second argument not supported");
                if ("object" != typeof e)
                    throw TypeError("Argument must be an object");
                t.prototype = e;
                var i = new t;
                return t.prototype = null,
                i
            }
        }(),
        _SubmitSelector: 'input[type="submit"], button:submit'
    }
      , a = {
        namespace: "data-parsley-",
        inputs: "input, textarea, select",
        excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
        priorityEnabled: !0,
        multiple: null,
        group: null,
        uiEnabled: !0,
        validationThreshold: 3,
        focus: "first",
        trigger: !1,
        triggerAfterFailure: "input",
        errorClass: "parsley-error",
        successClass: "parsley-success",
        classHandler: function(t) {},
        errorsContainer: function(t) {},
        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
        errorTemplate: "<li></li>"
    }
      , l = function() {
        this.__id__ = s.generateID()
    };
    l.prototype = {
        asyncSupport: !0,
        _pipeAccordingToValidationResult: function() {
            var e = this
              , i = function() {
                var i = t.Deferred();
                return !0 !== e.validationResult && i.reject(),
                i.resolve().promise()
            };
            return [i, i]
        },
        actualizeOptions: function() {
            return s.attr(this.element, this.options.namespace, this.domOptions),
            this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(),
            this
        },
        _resetOptions: function(t) {
            this.domOptions = s.objectCreate(this.parent.options),
            this.options = s.objectCreate(this.domOptions);
            for (var e in t)
                t.hasOwnProperty(e) && (this.options[e] = t[e]);
            this.actualizeOptions()
        },
        _listeners: null,
        on: function(t, e) {
            this._listeners = this._listeners || {};
            var i = this._listeners[t] = this._listeners[t] || [];
            return i.push(e),
            this
        },
        subscribe: function(e, i) {
            t.listenTo(this, e.toLowerCase(), i)
        },
        off: function(t, e) {
            var i = this._listeners && this._listeners[t];
            if (i)
                if (e)
                    for (var n = i.length; n--; )
                        i[n] === e && i.splice(n, 1);
                else
                    delete this._listeners[t];
            return this
        },
        unsubscribe: function(e, i) {
            t.unsubscribeTo(this, e.toLowerCase())
        },
        trigger: function(t, e, i) {
            e = e || this;
            var n, r = this._listeners && this._listeners[t];
            if (r)
                for (var o = r.length; o--; )
                    if (n = r[o].call(e, e, i),
                    n === !1)
                        return n;
            return !this.parent || this.parent.trigger(t, e, i)
        },
        asyncIsValid: function(t, e) {
            return s.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),
            this.whenValid({
                group: t,
                force: e
            })
        },
        _findRelated: function() {
            return this.options.multiple ? t(this.parent.element.querySelectorAll("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')) : this.$element
        }
    };
    var c = function(t, e) {
        var i = t.match(/^\s*\[(.*)\]\s*$/);
        if (!i)
            throw 'Requirement is not an array: "' + t + '"';
        var n = i[1].split(",").map(s.trimString);
        if (n.length !== e)
            throw "Requirement has " + n.length + " values when " + e + " are needed";
        return n
    }
      , d = function(t, e, i) {
        var n = null
          , r = {};
        for (var o in t)
            if (o) {
                var a = i(o);
                "string" == typeof a && (a = s.parseRequirement(t[o], a)),
                r[o] = a
            } else
                n = s.parseRequirement(t[o], e);
        return [n, r]
    }
      , u = function(e) {
        t.extend(!0, this, e)
    };
    u.prototype = {
        validate: function(t, e) {
            if (this.fn)
                return arguments.length > 3 && (e = [].slice.call(arguments, 1, -1)),
                this.fn(t, e);
            if (Array.isArray(t)) {
                if (!this.validateMultiple)
                    throw "Validator `" + this.name + "` does not handle multiple values";
                return this.validateMultiple.apply(this, arguments)
            }
            var i = arguments[arguments.length - 1];
            if (this.validateDate && i._isDateInput())
                return arguments[0] = s.parse.date(arguments[0]),
                null !== arguments[0] && this.validateDate.apply(this, arguments);
            if (this.validateNumber)
                return !isNaN(t) && (arguments[0] = parseFloat(arguments[0]),
                this.validateNumber.apply(this, arguments));
            if (this.validateString)
                return this.validateString.apply(this, arguments);
            throw "Validator `" + this.name + "` only handles multiple values"
        },
        parseRequirements: function(e, i) {
            if ("string" != typeof e)
                return Array.isArray(e) ? e : [e];
            var n = this.requirementType;
            if (Array.isArray(n)) {
                for (var r = c(e, n.length), o = 0; o < r.length; o++)
                    r[o] = s.parseRequirement(n[o], r[o]);
                return r
            }
            return t.isPlainObject(n) ? d(n, e, i) : [s.parseRequirement(n, e)]
        },
        requirementType: "string",
        priority: 2
    };
    var h = function(t, e) {
        this.__class__ = "ValidatorRegistry",
        this.locale = "en",
        this.init(t || {}, e || {})
    }
      , p = {
        email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,
        number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
        integer: /^-?\d+$/,
        digits: /^\d+$/,
        alphanum: /^\w+$/i,
        date: {
            test: function(t) {
                return null !== s.parse.date(t)
            }
        },
        url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$")
    };
    p.range = p.number;
    var f = function(t) {
        var e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0
    }
      , v = function(t, e) {
        return e.map(s.parse[t])
    }
      , m = function(t, e) {
        return function(i) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                r[o - 1] = arguments[o];
            return r.pop(),
            e.apply(void 0, [i].concat(_toConsumableArray(v(t, r))))
        }
    }
      , g = function(t) {
        return {
            validateDate: m("date", t),
            validateNumber: m("number", t),
            requirementType: t.length <= 2 ? "string" : ["string", "string"],
            priority: 30
        }
    };
    h.prototype = {
        init: function(t, e) {
            this.catalog = e,
            this.validators = _extends({}, this.validators);
            for (var i in t)
                this.addValidator(i, t[i].fn, t[i].priority);
            window.Parsley.trigger("parsley:validator:init")
        },
        setLocale: function(t) {
            if ("undefined" == typeof this.catalog[t])
                throw new Error(t + " is not available in the catalog");
            return this.locale = t,
            this
        },
        addCatalog: function(t, e, i) {
            return "object" == typeof e && (this.catalog[t] = e),
            !0 === i ? this.setLocale(t) : this
        },
        addMessage: function(t, e, i) {
            return "undefined" == typeof this.catalog[t] && (this.catalog[t] = {}),
            this.catalog[t][e] = i,
            this
        },
        addMessages: function(t, e) {
            for (var i in e)
                this.addMessage(t, i, e[i]);
            return this
        },
        addValidator: function(t, e, i) {
            if (this.validators[t])
                s.warn('Validator "' + t + '" is already defined.');
            else if (a.hasOwnProperty(t))
                return void s.warn('"' + t + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator.apply(this, arguments)
        },
        hasValidator: function(t) {
            return !!this.validators[t]
        },
        updateValidator: function(t, e, i) {
            return this.validators[t] ? this._setValidator.apply(this, arguments) : (s.warn('Validator "' + t + '" is not already defined.'),
            this.addValidator.apply(this, arguments))
        },
        removeValidator: function(t) {
            return this.validators[t] || s.warn('Validator "' + t + '" is not defined.'),
            delete this.validators[t],
            this
        },
        _setValidator: function(t, e, i) {
            "object" != typeof e && (e = {
                fn: e,
                priority: i
            }),
            e.validate || (e = new u(e)),
            this.validators[t] = e;
            for (var n in e.messages || {})
                this.addMessage(n, t, e.messages[n]);
            return this
        },
        getErrorMessage: function(t) {
            var e;
            if ("type" === t.name) {
                var i = this.catalog[this.locale][t.name] || {};
                e = i[t.requirements]
            } else
                e = this.formatMessage(this.catalog[this.locale][t.name], t.requirements);
            return e || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
        },
        formatMessage: function(t, e) {
            if ("object" == typeof e) {
                for (var i in e)
                    t = this.formatMessage(t, e[i]);
                return t
            }
            return "string" == typeof t ? t.replace(/%s/i, e) : ""
        },
        validators: {
            notblank: {
                validateString: function(t) {
                    return /\S/.test(t)
                },
                priority: 2
            },
            required: {
                validateMultiple: function(t) {
                    return t.length > 0
                },
                validateString: function(t) {
                    return /\S/.test(t)
                },
                priority: 512
            },
            type: {
                validateString: function(t, e) {
                    var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2]
                      , n = i.step
                      , r = void 0 === n ? "any" : n
                      , o = i.base
                      , s = void 0 === o ? 0 : o
                      , a = p[e];
                    if (!a)
                        throw new Error("validator type `" + e + "` is not supported");
                    if (!a.test(t))
                        return !1;
                    if ("number" === e && !/^any$/i.test(r || "")) {
                        var l = Number(t)
                          , c = Math.max(f(r), f(s));
                        if (f(l) > c)
                            return !1;
                        var d = function(t) {
                            return Math.round(t * Math.pow(10, c))
                        };
                        if ((d(l) - d(s)) % d(r) != 0)
                            return !1
                    }
                    return !0
                },
                requirementType: {
                    "": "string",
                    step: "string",
                    base: "number"
                },
                priority: 256
            },
            pattern: {
                validateString: function(t, e) {
                    return e.test(t)
                },
                requirementType: "regexp",
                priority: 64
            },
            minlength: {
                validateString: function(t, e) {
                    return t.length >= e
                },
                requirementType: "integer",
                priority: 30
            },
            maxlength: {
                validateString: function(t, e) {
                    return t.length <= e
                },
                requirementType: "integer",
                priority: 30
            },
            length: {
                validateString: function(t, e, i) {
                    return t.length >= e && t.length <= i
                },
                requirementType: ["integer", "integer"],
                priority: 30
            },
            mincheck: {
                validateMultiple: function(t, e) {
                    return t.length >= e
                },
                requirementType: "integer",
                priority: 30
            },
            maxcheck: {
                validateMultiple: function(t, e) {
                    return t.length <= e
                },
                requirementType: "integer",
                priority: 30
            },
            check: {
                validateMultiple: function(t, e, i) {
                    return t.length >= e && t.length <= i
                },
                requirementType: ["integer", "integer"],
                priority: 30
            },
            min: g(function(t, e) {
                return t >= e
            }),
            max: g(function(t, e) {
                return t <= e
            }),
            range: g(function(t, e, i) {
                return t >= e && t <= i
            }),
            equalto: {
                validateString: function(e, i) {
                    var n = t(i);
                    return n.length ? e === n.val() : e === i
                },
                priority: 256
            }
        }
    };
    var y = {}
      , b = function N(t, e, i) {
        for (var n = [], r = [], o = 0; o < t.length; o++) {
            for (var s = !1, a = 0; a < e.length; a++)
                if (t[o].assert.name === e[a].assert.name) {
                    s = !0;
                    break
                }
            s ? r.push(t[o]) : n.push(t[o])
        }
        return {
            kept: r,
            added: n,
            removed: i ? [] : N(e, t, !0).added
        }
    };
    y.Form = {
        _actualizeTriggers: function() {
            var t = this;
            this.$element.on("submit.Parsley", function(e) {
                t.onSubmitValidate(e)
            }),
            this.$element.on("click.Parsley", s._SubmitSelector, function(e) {
                t.onSubmitButton(e)
            }),
            !1 !== this.options.uiEnabled && this.element.setAttribute("novalidate", "")
        },
        focus: function() {
            if (this._focusedField = null,
            !0 === this.validationResult || "none" === this.options.focus)
                return null;
            for (var t = 0; t < this.fields.length; t++) {
                var e = this.fields[t];
                if (!0 !== e.validationResult && e.validationResult.length > 0 && "undefined" == typeof e.options.noFocus && (this._focusedField = e.$element,
                "first" === this.options.focus))
                    break
            }
            return null === this._focusedField ? null : this._focusedField.focus()
        },
        _destroyUI: function() {
            this.$element.off(".Parsley")
        }
    },
    y.Field = {
        _reflowUI: function() {
            if (this._buildUI(),
            this._ui) {
                var t = b(this.validationResult, this._ui.lastValidationResult);
                this._ui.lastValidationResult = this.validationResult,
                this._manageStatusClass(),
                this._manageErrorsMessages(t),
                this._actualizeTriggers(),
                !t.kept.length && !t.added.length || this._failedOnce || (this._failedOnce = !0,
                this._actualizeTriggers())
            }
        },
        getErrorsMessages: function() {
            if (!0 === this.validationResult)
                return [];
            for (var t = [], e = 0; e < this.validationResult.length; e++)
                t.push(this.validationResult[e].errorMessage || this._getErrorMessage(this.validationResult[e].assert));
            return t
        },
        addError: function(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
              , i = e.message
              , n = e.assert
              , r = e.updateClass
              , o = void 0 === r || r;
            this._buildUI(),
            this._addError(t, {
                message: i,
                assert: n
            }),
            o && this._errorClass()
        },
        updateError: function(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
              , i = e.message
              , n = e.assert
              , r = e.updateClass
              , o = void 0 === r || r;
            this._buildUI(),
            this._updateError(t, {
                message: i,
                assert: n
            }),
            o && this._errorClass()
        },
        removeError: function(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
              , i = e.updateClass
              , n = void 0 === i || i;
            this._buildUI(),
            this._removeError(t),
            n && this._manageStatusClass()
        },
        _manageStatusClass: function() {
            this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass()
        },
        _manageErrorsMessages: function(e) {
            if ("undefined" == typeof this.options.errorsMessagesDisabled) {
                if ("undefined" != typeof this.options.errorMessage)
                    return e.added.length || e.kept.length ? (this._insertErrorWrapper(),
                    0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(t(this.options.errorTemplate).addClass("parsley-custom-error-message")),
                    this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var i = 0; i < e.removed.length; i++)
                    this._removeError(e.removed[i].assert.name);
                for (i = 0; i < e.added.length; i++)
                    this._addError(e.added[i].assert.name, {
                        message: e.added[i].errorMessage,
                        assert: e.added[i].assert
                    });
                for (i = 0; i < e.kept.length; i++)
                    this._updateError(e.kept[i].assert.name, {
                        message: e.kept[i].errorMessage,
                        assert: e.kept[i].assert
                    })
            }
        },
        _addError: function(e, i) {
            var n = i.message
              , r = i.assert;
            this._insertErrorWrapper(),
            this._ui.$errorClassHandler.attr("aria-describedby", this._ui.errorsWrapperId),
            this._ui.$errorsWrapper.addClass("filled").append(t(this.options.errorTemplate).addClass("parsley-" + e).html(n || this._getErrorMessage(r)))
        },
        _updateError: function(t, e) {
            var i = e.message
              , n = e.assert;
            this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + t).html(i || this._getErrorMessage(n))
        },
        _removeError: function(t) {
            this._ui.$errorClassHandler.removeAttr("aria-describedby"),
            this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + t).remove()
        },
        _getErrorMessage: function(t) {
            var e = t.name + "Message";
            return "undefined" != typeof this.options[e] ? window.Parsley.formatMessage(this.options[e], t.requirements) : window.Parsley.getErrorMessage(t)
        },
        _buildUI: function() {
            if (!this._ui && !1 !== this.options.uiEnabled) {
                var e = {};
                this.element.setAttribute(this.options.namespace + "id", this.__id__),
                e.$errorClassHandler = this._manageClassHandler(),
                e.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__),
                e.$errorsWrapper = t(this.options.errorsWrapper).attr("id", e.errorsWrapperId),
                e.lastValidationResult = [],
                e.validationInformationVisible = !1,
                this._ui = e
            }
        },
        _manageClassHandler: function() {
            if ("string" == typeof this.options.classHandler && t(this.options.classHandler).length)
                return t(this.options.classHandler);
            var e = this.options.classHandler;
            if ("string" == typeof this.options.classHandler && "function" == typeof window[this.options.classHandler] && (e = window[this.options.classHandler]),
            "function" == typeof e) {
                var i = e.call(this, this);
                if ("undefined" != typeof i && i.length)
                    return i
            } else {
                if ("object" == typeof e && e instanceof jQuery && e.length)
                    return e;
                e && s.warn("The class handler `" + e + "` does not exist in DOM nor as a global JS function")
            }
            return this._inputHolder()
        },
        _inputHolder: function() {
            return this.options.multiple && "SELECT" !== this.element.nodeName ? this.$element.parent() : this.$element
        },
        _insertErrorWrapper: function() {
            var e = this.options.errorsContainer;
            if (0 !== this._ui.$errorsWrapper.parent().length)
                return this._ui.$errorsWrapper.parent();
            if ("string" == typeof e) {
                if (t(e).length)
                    return t(e).append(this._ui.$errorsWrapper);
                "function" == typeof window[e] ? e = window[e] : s.warn("The errors container `" + e + "` does not exist in DOM nor as a global JS function")
            }
            return "function" == typeof e && (e = e.call(this, this)),
            "object" == typeof e && e.length ? e.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper)
        },
        _actualizeTriggers: function() {
            var t, e = this, i = this._findRelated();
            i.off(".Parsley"),
            this._failedOnce ? i.on(s.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() {
                e._validateIfNeeded()
            }) : (t = s.namespaceEvents(this.options.trigger, "Parsley")) && i.on(t, function(t) {
                e._validateIfNeeded(t)
            })
        },
        _validateIfNeeded: function(t) {
            var e = this;
            t && /key|input/.test(t.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || (this.options.debounce ? (window.clearTimeout(this._debounced),
            this._debounced = window.setTimeout(function() {
                return e.validate()
            }, this.options.debounce)) : this.validate())
        },
        _resetUI: function() {
            this._failedOnce = !1,
            this._actualizeTriggers(),
            "undefined" != typeof this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(),
            this._resetClass(),
            this._ui.lastValidationResult = [],
            this._ui.validationInformationVisible = !1);
        },
        _destroyUI: function() {
            this._resetUI(),
            "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(),
            delete this._ui
        },
        _successClass: function() {
            this._ui.validationInformationVisible = !0,
            this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
        },
        _errorClass: function() {
            this._ui.validationInformationVisible = !0,
            this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
        },
        _resetClass: function() {
            this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
        }
    };
    var w = function(e, i, n) {
        this.__class__ = "Form",
        this.element = e,
        this.$element = t(e),
        this.domOptions = i,
        this.options = n,
        this.parent = window.Parsley,
        this.fields = [],
        this.validationResult = null
    }
      , T = {
        pending: null,
        resolved: !0,
        rejected: !1
    };
    w.prototype = {
        onSubmitValidate: function(t) {
            var e = this;
            if (!0 !== t.parsley) {
                var i = this._submitSource || this.$element.find(s._SubmitSelector)[0];
                if (this._submitSource = null,
                this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0),
                !i || null === i.getAttribute("formnovalidate")) {
                    window.Parsley._remoteCache = {};
                    var n = this.whenValidate({
                        event: t
                    });
                    "resolved" === n.state() && !1 !== this._trigger("submit") || (t.stopImmediatePropagation(),
                    t.preventDefault(),
                    "pending" === n.state() && n.done(function() {
                        e._submit(i)
                    }))
                }
            }
        },
        onSubmitButton: function(t) {
            this._submitSource = t.currentTarget
        },
        _submit: function(e) {
            if (!1 !== this._trigger("submit")) {
                if (e) {
                    var i = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                    0 === i.length && (i = t('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)),
                    i.attr({
                        name: e.getAttribute("name"),
                        value: e.getAttribute("value")
                    })
                }
                this.$element.trigger(_extends(t.Event("submit"), {
                    parsley: !0
                }))
            }
        },
        validate: function(e) {
            if (arguments.length >= 1 && !t.isPlainObject(e)) {
                s.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments)
                  , n = i[0]
                  , r = i[1]
                  , o = i[2];
                e = {
                    group: n,
                    force: r,
                    event: o
                }
            }
            return T[this.whenValidate(e).state()]
        },
        whenValidate: function() {
            var e, i = this, n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], r = n.group, o = n.force, a = n.event;
            this.submitEvent = a,
            a && (this.submitEvent = _extends({}, a, {
                preventDefault: function() {
                    s.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"),
                    i.validationResult = !1
                }
            })),
            this.validationResult = !0,
            this._trigger("validate"),
            this._refreshFields();
            var l = this._withoutReactualizingFormOptions(function() {
                return t.map(i.fields, function(t) {
                    return t.whenValidate({
                        force: o,
                        group: r
                    })
                })
            });
            return (e = s.all(l).done(function() {
                i._trigger("success")
            }).fail(function() {
                i.validationResult = !1,
                i.focus(),
                i._trigger("error")
            }).always(function() {
                i._trigger("validated")
            })).pipe.apply(e, _toConsumableArray(this._pipeAccordingToValidationResult()))
        },
        isValid: function(e) {
            if (arguments.length >= 1 && !t.isPlainObject(e)) {
                s.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments)
                  , n = i[0]
                  , r = i[1];
                e = {
                    group: n,
                    force: r
                }
            }
            return T[this.whenValid(e).state()]
        },
        whenValid: function() {
            var e = this
              , i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
              , n = i.group
              , r = i.force;
            this._refreshFields();
            var o = this._withoutReactualizingFormOptions(function() {
                return t.map(e.fields, function(t) {
                    return t.whenValid({
                        group: n,
                        force: r
                    })
                })
            });
            return s.all(o)
        },
        refresh: function() {
            return this._refreshFields(),
            this
        },
        reset: function() {
            for (var t = 0; t < this.fields.length; t++)
                this.fields[t].reset();
            this._trigger("reset")
        },
        destroy: function() {
            this._destroyUI();
            for (var t = 0; t < this.fields.length; t++)
                this.fields[t].destroy();
            this.$element.removeData("Parsley"),
            this._trigger("destroy")
        },
        _refreshFields: function() {
            return this.actualizeOptions()._bindFields()
        },
        _bindFields: function() {
            var e = this
              , i = this.fields;
            return this.fields = [],
            this.fieldsMappedById = {},
            this._withoutReactualizingFormOptions(function() {
                e.$element.find(e.options.inputs).not(e.options.excluded).each(function(t, i) {
                    var n = new window.Parsley.Factory(i,{},e);
                    if (("Field" === n.__class__ || "FieldMultiple" === n.__class__) && !0 !== n.options.excluded) {
                        var r = n.__class__ + "-" + n.__id__;
                        "undefined" == typeof e.fieldsMappedById[r] && (e.fieldsMappedById[r] = n,
                        e.fields.push(n))
                    }
                }),
                t.each(s.difference(i, e.fields), function(t, e) {
                    e.reset()
                })
            }),
            this
        },
        _withoutReactualizingFormOptions: function(t) {
            var e = this.actualizeOptions;
            this.actualizeOptions = function() {
                return this
            }
            ;
            var i = t();
            return this.actualizeOptions = e,
            i
        },
        _trigger: function(t) {
            return this.trigger("form:" + t)
        }
    };
    var C = function(t, e, i, n, r) {
        var o = window.Parsley._validatorRegistry.validators[e]
          , s = new u(o);
        n = n || t.options[e + "Priority"] || s.priority,
        r = !0 === r,
        _extends(this, {
            validator: s,
            name: e,
            requirements: i,
            priority: n,
            isDomConstraint: r
        }),
        this._parseRequirements(t.options)
    }
      , k = function(t) {
        var e = t[0].toUpperCase();
        return e + t.slice(1)
    };
    C.prototype = {
        validate: function(t, e) {
            var i;
            return (i = this.validator).validate.apply(i, [t].concat(_toConsumableArray(this.requirementList), [e]))
        },
        _parseRequirements: function(t) {
            var e = this;
            this.requirementList = this.validator.parseRequirements(this.requirements, function(i) {
                return t[e.name + k(i)]
            })
        }
    };
    var S = function(e, i, n, r) {
        this.__class__ = "Field",
        this.element = e,
        this.$element = t(e),
        "undefined" != typeof r && (this.parent = r),
        this.options = n,
        this.domOptions = i,
        this.constraints = [],
        this.constraintsByName = {},
        this.validationResult = !0,
        this._bindConstraints()
    }
      , _ = {
        pending: null,
        resolved: !0,
        rejected: !1
    };
    S.prototype = {
        validate: function(e) {
            arguments.length >= 1 && !t.isPlainObject(e) && (s.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."),
            e = {
                options: e
            });
            var i = this.whenValidate(e);
            if (!i)
                return !0;
            switch (i.state()) {
            case "pending":
                return null;
            case "resolved":
                return !0;
            case "rejected":
                return this.validationResult
            }
        },
        whenValidate: function() {
            var t, e = this, i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], n = i.force, r = i.group;
            if (this.refresh(),
            !r || this._isInGroup(r))
                return this.value = this.getValue(),
                this._trigger("validate"),
                (t = this.whenValid({
                    force: n,
                    value: this.value,
                    _refreshed: !0
                }).always(function() {
                    e._reflowUI()
                }).done(function() {
                    e._trigger("success")
                }).fail(function() {
                    e._trigger("error")
                }).always(function() {
                    e._trigger("validated")
                })).pipe.apply(t, _toConsumableArray(this._pipeAccordingToValidationResult()))
        },
        hasConstraints: function() {
            return 0 !== this.constraints.length
        },
        needsValidation: function(t) {
            return "undefined" == typeof t && (t = this.getValue()),
            !(!t.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty)
        },
        _isInGroup: function(e) {
            return Array.isArray(this.options.group) ? -1 !== t.inArray(e, this.options.group) : this.options.group === e
        },
        isValid: function(e) {
            if (arguments.length >= 1 && !t.isPlainObject(e)) {
                s.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments)
                  , n = i[0]
                  , r = i[1];
                e = {
                    force: n,
                    value: r
                }
            }
            var o = this.whenValid(e);
            return !o || _[o.state()]
        },
        whenValid: function() {
            var e = this
              , i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
              , n = i.force
              , r = void 0 !== n && n
              , o = i.value
              , a = i.group
              , l = i._refreshed;
            if (l || this.refresh(),
            !a || this._isInGroup(a)) {
                if (this.validationResult = !0,
                !this.hasConstraints())
                    return t.when();
                if ("undefined" != typeof o && null !== o || (o = this.getValue()),
                !this.needsValidation(o) && !0 !== r)
                    return t.when();
                var c = this._getGroupedConstraints()
                  , d = [];
                return t.each(c, function(i, n) {
                    var r = s.all(t.map(n, function(t) {
                        return e._validateConstraint(o, t)
                    }));
                    if (d.push(r),
                    "rejected" === r.state())
                        return !1
                }),
                s.all(d)
            }
        },
        _validateConstraint: function(e, i) {
            var n = this
              , r = i.validate(e, this);
            return !1 === r && (r = t.Deferred().reject()),
            s.all([r]).fail(function(t) {
                n.validationResult instanceof Array || (n.validationResult = []),
                n.validationResult.push({
                    assert: i,
                    errorMessage: "string" == typeof t && t
                })
            })
        },
        getValue: function() {
            var t;
            return t = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val(),
            "undefined" == typeof t || null === t ? "" : this._handleWhitespace(t)
        },
        reset: function() {
            return this._resetUI(),
            this._trigger("reset")
        },
        destroy: function() {
            this._destroyUI(),
            this.$element.removeData("Parsley"),
            this.$element.removeData("FieldMultiple"),
            this._trigger("destroy")
        },
        refresh: function() {
            return this._refreshConstraints(),
            this
        },
        _refreshConstraints: function() {
            return this.actualizeOptions()._bindConstraints()
        },
        refreshConstraints: function() {
            return s.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"),
            this.refresh()
        },
        addConstraint: function(t, e, i, n) {
            if (window.Parsley._validatorRegistry.validators[t]) {
                var r = new C(this,t,e,i,n);
                "undefined" !== this.constraintsByName[r.name] && this.removeConstraint(r.name),
                this.constraints.push(r),
                this.constraintsByName[r.name] = r
            }
            return this
        },
        removeConstraint: function(t) {
            for (var e = 0; e < this.constraints.length; e++)
                if (t === this.constraints[e].name) {
                    this.constraints.splice(e, 1);
                    break
                }
            return delete this.constraintsByName[t],
            this
        },
        updateConstraint: function(t, e, i) {
            return this.removeConstraint(t).addConstraint(t, e, i)
        },
        _bindConstraints: function() {
            for (var t = [], e = {}, i = 0; i < this.constraints.length; i++)
                !1 === this.constraints[i].isDomConstraint && (t.push(this.constraints[i]),
                e[this.constraints[i].name] = this.constraints[i]);
            this.constraints = t,
            this.constraintsByName = e;
            for (var n in this.options)
                this.addConstraint(n, this.options[n], void 0, !0);
            return this._bindHtml5Constraints()
        },
        _bindHtml5Constraints: function() {
            null !== this.element.getAttribute("required") && this.addConstraint("required", !0, void 0, !0),
            null !== this.element.getAttribute("pattern") && this.addConstraint("pattern", this.element.getAttribute("pattern"), void 0, !0);
            var t = this.element.getAttribute("min")
              , e = this.element.getAttribute("max");
            null !== t && null !== e ? this.addConstraint("range", [t, e], void 0, !0) : null !== t ? this.addConstraint("min", t, void 0, !0) : null !== e && this.addConstraint("max", e, void 0, !0),
            null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength") ? this.addConstraint("length", [this.element.getAttribute("minlength"), this.element.getAttribute("maxlength")], void 0, !0) : null !== this.element.getAttribute("minlength") ? this.addConstraint("minlength", this.element.getAttribute("minlength"), void 0, !0) : null !== this.element.getAttribute("maxlength") && this.addConstraint("maxlength", this.element.getAttribute("maxlength"), void 0, !0);
            var i = s.getType(this.element);
            return "number" === i ? this.addConstraint("type", ["number", {
                step: this.element.getAttribute("step") || "1",
                base: t || this.element.getAttribute("value")
            }], void 0, !0) : /^(email|url|range|date)$/i.test(i) ? this.addConstraint("type", i, void 0, !0) : this
        },
        _isRequired: function() {
            return "undefined" != typeof this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
        },
        _trigger: function(t) {
            return this.trigger("field:" + t)
        },
        _handleWhitespace: function(t) {
            return !0 === this.options.trimValue && s.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),
            "squish" === this.options.whitespace && (t = t.replace(/\s{2,}/g, " ")),
            "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (t = s.trimString(t)),
            t
        },
        _isDateInput: function() {
            var t = this.constraintsByName.type;
            return t && "date" === t.requirements
        },
        _getGroupedConstraints: function() {
            if (!1 === this.options.priorityEnabled)
                return [this.constraints];
            for (var t = [], e = {}, i = 0; i < this.constraints.length; i++) {
                var n = this.constraints[i].priority;
                e[n] || t.push(e[n] = []),
                e[n].push(this.constraints[i])
            }
            return t.sort(function(t, e) {
                return e[0].priority - t[0].priority
            }),
            t
        }
    };
    var x = S
      , E = function() {
        this.__class__ = "FieldMultiple"
    };
    E.prototype = {
        addElement: function(t) {
            return this.$elements.push(t),
            this
        },
        _refreshConstraints: function() {
            var e;
            if (this.constraints = [],
            "SELECT" === this.element.nodeName)
                return this.actualizeOptions()._bindConstraints(),
                this;
            for (var i = 0; i < this.$elements.length; i++)
                if (t("html").has(this.$elements[i]).length) {
                    e = this.$elements[i].data("FieldMultiple")._refreshConstraints().constraints;
                    for (var n = 0; n < e.length; n++)
                        this.addConstraint(e[n].name, e[n].requirements, e[n].priority, e[n].isDomConstraint)
                } else
                    this.$elements.splice(i, 1);
            return this
        },
        getValue: function() {
            if ("function" == typeof this.options.value)
                return this.options.value(this);
            if ("undefined" != typeof this.options.value)
                return this.options.value;
            if ("INPUT" === this.element.nodeName) {
                var e = s.getType(this.element);
                if ("radio" === e)
                    return this._findRelated().filter(":checked").val() || "";
                if ("checkbox" === e) {
                    var i = [];
                    return this._findRelated().filter(":checked").each(function() {
                        i.push(t(this).val())
                    }),
                    i
                }
            }
            return "SELECT" === this.element.nodeName && null === this.$element.val() ? [] : this.$element.val()
        },
        _init: function() {
            return this.$elements = [this.$element],
            this
        }
    };
    var A = function(e, i, n) {
        this.element = e,
        this.$element = t(e);
        var r = this.$element.data("Parsley");
        if (r)
            return "undefined" != typeof n && r.parent === window.Parsley && (r.parent = n,
            r._resetOptions(r.options)),
            "object" == typeof i && _extends(r.options, i),
            r;
        if (!this.$element.length)
            throw new Error("You must bind Parsley on an existing element.");
        if ("undefined" != typeof n && "Form" !== n.__class__)
            throw new Error("Parent instance must be a Form instance");
        return this.parent = n || window.Parsley,
        this.init(i)
    };
    A.prototype = {
        init: function(t) {
            return this.__class__ = "Parsley",
            this.__version__ = "2.8.1",
            this.__id__ = s.generateID(),
            this._resetOptions(t),
            "FORM" === this.element.nodeName || s.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
        },
        isMultiple: function() {
            var t = s.getType(this.element);
            return "radio" === t || "checkbox" === t || "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")
        },
        handleMultiple: function() {
            var e, i, n = this;
            if (this.options.multiple = this.options.multiple || (e = this.element.getAttribute("name")) || this.element.getAttribute("id"),
            "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple"))
                return this.options.multiple = this.options.multiple || this.__id__,
                this.bind("parsleyFieldMultiple");
            if (!this.options.multiple)
                return s.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element),
                this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""),
            e && t('input[name="' + e + '"]').each(function(t, e) {
                var i = s.getType(e);
                "radio" !== i && "checkbox" !== i || e.setAttribute(n.options.namespace + "multiple", n.options.multiple)
            });
            for (var r = this._findRelated(), o = 0; o < r.length; o++)
                if (i = t(r.get(o)).data("Parsley"),
                "undefined" != typeof i) {
                    this.$element.data("FieldMultiple") || i.addElement(this.$element);
                    break
                }
            return this.bind("parsleyField", !0),
            i || this.bind("parsleyFieldMultiple")
        },
        bind: function(e, i) {
            var n;
            switch (e) {
            case "parsleyForm":
                n = t.extend(new w(this.element,this.domOptions,this.options), new l, window.ParsleyExtend)._bindFields();
                break;
            case "parsleyField":
                n = t.extend(new x(this.element,this.domOptions,this.options,this.parent), new l, window.ParsleyExtend);
                break;
            case "parsleyFieldMultiple":
                n = t.extend(new x(this.element,this.domOptions,this.options,this.parent), new E, new l, window.ParsleyExtend)._init();
                break;
            default:
                throw new Error(e + "is not a supported Parsley type")
            }
            return this.options.multiple && s.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple),
            "undefined" != typeof i ? (this.$element.data("FieldMultiple", n),
            n) : (this.$element.data("Parsley", n),
            n._actualizeTriggers(),
            n._trigger("init"),
            n)
        }
    };
    var $ = t.fn.jquery.split(".");
    if (parseInt($[0]) <= 1 && parseInt($[1]) < 8)
        throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    $.forEach || s.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
    var I = _extends(new l, {
        element: document,
        $element: t(document),
        actualizeOptions: null,
        _resetOptions: null,
        Factory: A,
        version: "2.8.1"
    });
    _extends(x.prototype, y.Field, l.prototype),
    _extends(w.prototype, y.Form, l.prototype),
    _extends(A.prototype, l.prototype),
    t.fn.parsley = t.fn.psly = function(e) {
        if (this.length > 1) {
            var i = [];
            return this.each(function() {
                i.push(t(this).parsley(e))
            }),
            i
        }
        if (0 != this.length)
            return new A(this[0],e)
    }
    ,
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}),
    I.options = _extends(s.objectCreate(a), window.ParsleyConfig),
    window.ParsleyConfig = I.options,
    window.Parsley = window.psly = I,
    I.Utils = s,
    window.ParsleyUtils = {},
    t.each(s, function(t, e) {
        "function" == typeof e && (window.ParsleyUtils[t] = function() {
            return s.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."),
            s[t].apply(s, arguments)
        }
        )
    });
    var O = window.Parsley._validatorRegistry = new h(window.ParsleyConfig.validators,window.ParsleyConfig.i18n);
    window.ParsleyValidator = {},
    t.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "), function(t, e) {
        window.Parsley[e] = function() {
            return O[e].apply(O, arguments)
        }
        ,
        window.ParsleyValidator[e] = function() {
            var t;
            return s.warnOnce("Accessing the method '" + e + "' through Validator is deprecated. Simply call 'window.Parsley." + e + "(...)'"),
            (t = window.Parsley)[e].apply(t, arguments)
        }
    }),
    window.Parsley.UI = y,
    window.ParsleyUI = {
        removeError: function(t, e, i) {
            var n = !0 !== i;
            return s.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."),
            t.removeError(e, {
                updateClass: n
            })
        },
        getErrorsMessages: function(t) {
            return s.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."),
            t.getErrorsMessages()
        }
    },
    t.each("addError updateError".split(" "), function(t, e) {
        window.ParsleyUI[e] = function(t, i, n, r, o) {
            var a = !0 !== o;
            return s.warnOnce("Accessing UI is deprecated. Call '" + e + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."),
            t[e](i, {
                message: n,
                assert: r,
                updateClass: a
            })
        }
    }),
    !1 !== window.ParsleyConfig.autoBind && t(function() {
        t("[data-parsley-validate]").length && t("[data-parsley-validate]").parsley()
    });
    var P = t({})
      , L = function() {
        s.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
    }
      , F = "parsley:";
    t.listen = function(t, n) {
        var r;
        if (L(),
        "object" == typeof arguments[1] && "function" == typeof arguments[2] && (r = arguments[1],
        n = arguments[2]),
        "function" != typeof n)
            throw new Error("Wrong parameters");
        window.Parsley.on(i(t), e(n, r))
    }
    ,
    t.listenTo = function(t, n, r) {
        if (L(),
        !(t instanceof x || t instanceof w))
            throw new Error("Must give Parsley instance");
        if ("string" != typeof n || "function" != typeof r)
            throw new Error("Wrong parameters");
        t.on(i(n), e(r))
    }
    ,
    t.unsubscribe = function(t, e) {
        if (L(),
        "string" != typeof t || "function" != typeof e)
            throw new Error("Wrong arguments");
        window.Parsley.off(i(t), e.parsleyAdaptedCallback)
    }
    ,
    t.unsubscribeTo = function(t, e) {
        if (L(),
        !(t instanceof x || t instanceof w))
            throw new Error("Must give Parsley instance");
        t.off(i(e))
    }
    ,
    t.unsubscribeAll = function(e) {
        L(),
        window.Parsley.off(i(e)),
        t("form,input,textarea,select").each(function() {
            var n = t(this).data("Parsley");
            n && n.off(i(e))
        })
    }
    ,
    t.emit = function(t, e) {
        var n;
        L();
        var r = e instanceof x || e instanceof w
          , o = Array.prototype.slice.call(arguments, r ? 2 : 1);
        o.unshift(i(t)),
        r || (e = window.Parsley),
        (n = e).trigger.apply(n, _toConsumableArray(o))
    }
    ,
    t.extend(!0, I, {
        asyncValidators: {
            "default": {
                fn: function(t) {
                    return t.status >= 200 && t.status < 300
                },
                url: !1
            },
            reverse: {
                fn: function(t) {
                    return t.status < 200 || t.status >= 300
                },
                url: !1
            }
        },
        addAsyncValidator: function(t, e, i, n) {
            return I.asyncValidators[t] = {
                fn: e,
                url: i || !1,
                options: n || {}
            },
            this
        }
    }),
    I.addValidator("remote", {
        requirementType: {
            "": "string",
            validator: "string",
            reverse: "boolean",
            options: "object"
        },
        validateString: function(e, i, n, r) {
            var o, s, a = {}, l = n.validator || (!0 === n.reverse ? "reverse" : "default");
            if ("undefined" == typeof I.asyncValidators[l])
                throw new Error("Calling an undefined async validator: `" + l + "`");
            i = I.asyncValidators[l].url || i,
            i.indexOf("{value}") > -1 ? i = i.replace("{value}", encodeURIComponent(e)) : a[r.element.getAttribute("name") || r.element.getAttribute("id")] = e;
            var c = t.extend(!0, n.options || {}, I.asyncValidators[l].options);
            o = t.extend(!0, {}, {
                url: i,
                data: a,
                type: "GET"
            }, c),
            r.trigger("field:ajaxoptions", r, o),
            s = t.param(o),
            "undefined" == typeof I._remoteCache && (I._remoteCache = {});
            var d = I._remoteCache[s] = I._remoteCache[s] || t.ajax(o)
              , u = function() {
                var e = I.asyncValidators[l].fn.call(r, d, i, n);
                return e || (e = t.Deferred().reject()),
                t.when(e)
            };
            return d.then(u, u)
        },
        priority: -1
    }),
    I.on("form:submit", function() {
        I._remoteCache = {}
    }),
    l.prototype.addAsyncValidator = function() {
        return s.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"),
        I.addAsyncValidator.apply(I, arguments)
    }
    ,
    I.addMessages("en", {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    }),
    I.setLocale("en");
    var D = new n;
    D.install();
    var j = I;
    return j
});
var pridePointsContainer = document.querySelector(".js-pride-points-items-container");
randomizePridePoints(pridePointsContainer),
document.addEventListener("DOMContentLoaded", function() {
    function t() {
        var t = Array.from(document.querySelectorAll(".js-program-finder-filter-toggle"));
        t.forEach(function(t, e) {
            t.addEventListener("click", i, !1),
            t.index = e
        }),
        document.addEventListener("click", function(t) {
            var i = Array.from(document.querySelectorAll(".program-finder-filter__dropdown"));
            !t.target == i || $(t.target).parents(".program-finder-filter__dropdown").length || $(t.target).parents(".program-finder-filter__sort-by").length || e()
        })
    }
    function e() {
        var t = Array.from(document.querySelectorAll(".js-program-finder-filter-toggle"));
        t.forEach(function(t, e) {
            var i = r(t)
              , n = i + " js-program-finder-filter-toggle " + i + "--closed";
            t.setAttribute("data-status", "closed"),
            t.className = n,
            t.setAttribute("aria-pressed", !1);
            var o = document.querySelectorAll(".program-finder-filter__dropdown-inner")[e];
            o.setAttribute("aria-expanded", !1),
            o.setAttribute("aria-hidden", !0),
            o.setAttribute("inert", "true")
        })
    }
    function i(t) {
        var e = t.target
          , i = e.getAttribute("data-status")
          , o = "open" === i
          , s = r(e)
          , a = s + " js-program-finder-filter-toggle " + s;
        a += o ? "--closed" : "--open",
        o ? e.setAttribute("data-status", "closed") : e.setAttribute("data-status", "open"),
        n(i, t.currentTarget.index),
        e.className = a,
        e.setAttribute("aria-pressed", !o)
    }
    function n(t, e) {
        var i = "open" === t ? "closed" : "open"
          , n = "open" === i
          , r = document.querySelectorAll(".program-finder-filter__dropdown-inner")[e];
        r.setAttribute("aria-expanded", n),
        r.setAttribute("aria-hidden", !n),
        n ? r.removeAttribute("inert") : r.setAttribute("inert", "true")
    }
    function r(t) {
        if (null !== t)
            return t.classList[0]
    }
    function o() {
        var t = Array.from(document.querySelectorAll(".js-applied-tag"));
        t.forEach(function(t) {
            var e = window.location.href.replace(new RegExp("(?:interest|program-type)(?:%5B%5D|%5B[0-9]%5D)=" + t.getAttribute("name") + "(?:([&?])|)"), "");
            e = e.replace(/page\/[0-9]\//, ""),
            t.setAttribute("href", e)
        })
    }
    function s() {
        if ("navigate" === performance.getEntriesByType("navigation")[0].type && window.location.href.includes("?")) {
            var t = document.getElementsByClassName("_program-details");
            t[0] && t[0].focus()
        }
    }
    function a() {
        document.addEventListener("keydown", function(t) {
            if ("Enter" === t.key) {
                var e = t.target;
                "radio" !== e.type && "checkbox" !== e.type || (t.preventDefault(),
                e.checked = !e.checked)
            }
        })
    }
    function l() {
        var t = document.getElementsByClassName("program-finder-filter__apply-button")[0]
          , e = document.querySelectorAll('.program-finder-filter__dropdown input[type="radio"], .program-finder-filter__dropdown input[type="checkbox"]');
        e.forEach(function(i) {
            i.addEventListener("change", function() {
                var i = Array.from(e).some(function(t) {
                    return t.checked
                });
                t.disabled = !i
            })
        })
    }
    function c() {
        var t = document.getElementById("program-finder-filter__form")
          , e = t.querySelectorAll('input[name="order"]');
        e.forEach(function(e) {
            e.addEventListener("change", function() {
                t.submit()
            })
        })
    }
    document.getElementsByClassName("program-finder-filter__apply-button") && (t(),
    o(),
    a(),
    s(),
    l(),
    c())
}),
flight.component(function() {
    this.attributes({
        activeCollaborationClass: "program-grid-story--active",
        collaborationSelector: ".program-grid-story",
        disciplineSelector: ".program-grid__discipline",
        disciplineLinkSelector: ".program-grid__discipline a",
        primaryDisciplineClass: "program-grid__discipline--primary",
        nextButtonSelector: ".program-grid-story__next",
        previousButtonSelector: ".program-grid-story__previous"
    }),
    this.after("initialize", function() {
        this.initializeClickHandlers(),
        this.$collaborations = this.select("collaborationSelector"),
        this.on(this.attr.collaborationSelector + " a", "focus", this.handleCollaborationContentFocus),
        this.activateFirstStory()
    }),
    this.activateFirstStory = function() {
        var t = this.$collaborations.get(0);
        this.showStory($(t).data("primary"))
    }
    ,
    this.getPrimaryCollaboration = function(t) {
        return this.$collaborations.filter('[data-primary="' + t + '"]')
    }
    ,
    this.getDiscipline = function(t) {
        return this.$node.find(this.attr.disciplineSelector + '[data-name="' + t + '"]')
    }
    ,
    this.handleCollaborationContentFocus = function(t) {
        var e = $(t.target).closest(this.attr.collaborationSelector);
        this.showStory(e.data("primary"))
    }
    ,
    this.handleDisciplineLinkClick = function(t) {
        t.preventDefault(),
        t.stopPropagation();
        var e = $(t.target).closest(this.attr.disciplineSelector).data("name");
        this.showStory(e)
    }
    ,
    this.setActivePrimaryDiscipline = function(t) {
        var e = this.attr.primaryDisciplineClass;
        this.$node.find(this.attr.disciplineSelector).removeClass(e),
        this.getDiscipline(t).addClass(e)
    }
    ,
    this.handleNextButtonClick = function(t) {
        t.preventDefault(),
        t.stopPropagation();
        var e = $(t.target).closest(this.attr.collaborationSelector);
        e.next().length > 0 ? this.showStory(e.next().data("primary")) : this.showFirstCollaboration()
    }
    ,
    this.handlePreviousButtonClick = function(t) {
        t.preventDefault(),
        t.stopPropagation();
        var e = $(t.target).closest(this.attr.collaborationSelector);
        e.prev().length > 0 ? this.showStory(e.prev().data("primary")) : this.showLastCollaboration()
    }
    ,
    this.showFirstCollaboration = function() {
        this.showStory(this.$collaborations.first().data("primary"))
    }
    ,
    this.showLastCollaboration = function() {
        this.showStory(this.$collaborations.last().data("primary"))
    }
    ,
    this.showStory = function(t) {
        var e = this.attr.activeCollaborationClass;
        this.$collaborations.removeClass(e);
        var i = this.getPrimaryCollaboration(t);
        i.addClass(e),
        this.setActivePrimaryDiscipline(t)
    }
    ,
    this.makeCallbackHandler = function(t) {
        return function(e, i) {
            e.preventDefault(),
            e.stopPropagation(),
            t(e, i)
        }
    }
    ,
    this.initializeClickHandlers = function() {
        this.on("click", {
            disciplineLinkSelector: this.makeCallbackHandler(this.handleDisciplineLinkClick.bind(this)),
            nextButtonSelector: this.makeCallbackHandler(this.handleNextButtonClick.bind(this)),
            previousButtonSelector: this.makeCallbackHandler(this.handlePreviousButtonClick.bind(this))
        })
    }
}).attachTo(".program-grid"),
document.addEventListener("DOMContentLoaded", function() {
    var t = Array.from(document.getElementsByClassName("component-search-form__radio-checkmark"));
    t.forEach(function(t) {
        t.addEventListener("keydown", function(t) {
            if (13 === t.keyCode) {
                var e = t.target.previousElementSibling;
                e.checked = !0
            }
        })
    });
    var e = Array.from(document.getElementsByClassName("component-search-form__checkbox-checkmark"));
    e.forEach(function(t) {
        t.addEventListener("keydown", function(t) {
            if (13 === t.keyCode) {
                var e = t.target.previousElementSibling;
                e.checked = !e.checked
            }
        })
    });
    var i = Array.from(document.getElementsByClassName("component-search-form__radio-container"));
    i.forEach(function(t) {
        t.addEventListener("click", function() {
            var e = t.querySelector("input");
            e && (e.checked = !0)
        })
    });
    var n = Array.from(document.getElementsByClassName("component-search-form__checkbox-container"));
    n.forEach(function(t) {
        t.addEventListener("click", function() {
            var e = t.querySelector("input");
            e && (e.checked = !e.checked)
        })
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    var t = {
        TAB: 9,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    }
      , e = "is-open"
      , i = Array.from(document.querySelectorAll(".component-search-tab__tabs"));
    i = i.concat(Array.from(document.querySelectorAll(".component-search-tab-sm__tabs"))),
    i.forEach(function(i) {
        function n() {
            var t = window.location.hash.substring(1)
              , e = d.find(function(e) {
                return e.id == t && e
            });
            o(window.location.hash && e ? e : d[0])
        }
        function r(t) {
            function i() {
                var t = c(n);
                t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e)
            }
            var n = t.currentTarget;
            o(n),
            i()
        }
        function o(t) {
            d.forEach(function(e, i) {
                var n = e === t;
                e.setAttribute("aria-selected", n ? "true" : "false");
                var r = e.getAttribute("aria-controls")
                  , o = document.getElementById(r);
                n ? o.removeAttribute("hidden") : o.setAttribute("hidden", "true")
            })
        }
        function s(e) {
            function i() {
                return [t.LEFT, t.UP, t.RIGHT, t.DOWN].indexOf(s) > -1
            }
            function n(t) {
                return (d.indexOf(o) + d.length + t) % d.length
            }
            function r() {
                return t.TAB === s && "true" === o.getAttribute("aria-selected") && e.shiftKey === !1
            }
            if ("tab" === e.target.getAttribute("role")) {
                var o = e.target
                  , s = e.which;
                if (i()) {
                    var c = [t.RIGHT, t.DOWN].indexOf(s) > -1 ? 1 : -1
                      , u = n(c);
                    d[u].focus(),
                    e.preventDefault()
                }
                if (t.HOME === s && (a(),
                e.preventDefault()),
                t.END === s && (l(),
                e.preventDefault()),
                r()) {
                    var h = o.getAttribute("aria-controls");
                    document.getElementById(h).focus(),
                    e.preventDefault()
                }
            }
        }
        function a() {
            d[0].focus()
        }
        function l() {
            d[d.length - 1].focus()
        }
        function c(t) {
            return "tablist" === t.parentNode.getAttribute("role") ? t.parentNode : c(t.parentNode)
        }
        var d = Array.from(i.querySelectorAll('[role="tab"]'));
        n(),
        d.forEach(function(t) {
            t.addEventListener("click", r, !1)
        }),
        i.addEventListener("keydown", s, !1)
    })
}),
jQuery(function(t) {
    var e = {
        center: "screen",
        createNew: !0,
        height: 500,
        left: 0,
        location: !1,
        menubar: !1,
        name: null,
        onUnload: null,
        resizable: !1,
        scrollbars: !1,
        status: !1,
        toolbar: !1,
        top: 0,
        width: 500
    };
    t.popupWindow = function(i, n) {
        var r = t.extend({}, e, n);
        if ("parent" === r.center)
            r.top = window.screenY + Math.round((t(window).height() - r.height) / 2),
            r.left = window.screenX + Math.round((t(window).width() - r.width) / 2);
        else if (r.center === !0 || "screen" === r.center) {
            var o = "undefined" != typeof window.screenLeft ? window.screenLeft : screen.left;
            r.top = (screen.height - r.height) / 2 - 50,
            r.left = o + (screen.width - r.width) / 2
        }
        var s = [];
        s.push("location=" + (r.location ? "yes" : "no")),
        s.push("menubar=" + (r.menubar ? "yes" : "no")),
        s.push("toolbar=" + (r.toolbar ? "yes" : "no")),
        s.push("scrollbars=" + (r.scrollbars ? "yes" : "no")),
        s.push("status=" + (r.status ? "yes" : "no")),
        s.push("resizable=" + (r.resizable ? "yes" : "no")),
        s.push("height=" + r.height),
        s.push("width=" + r.width),
        s.push("left=" + r.left),
        s.push("top=" + r.top);
        var a = (new Date).getTime()
          , l = r.name || (r.createNew ? "popup_window_" + a : "popup_window")
          , c = window.open(i, l, s.join(","));
        if (r.onUnload && "function" == typeof r.onUnload)
            var d = setInterval(function() {
                c && !c.closed || (clearInterval(d),
                r.onUnload())
            }, 50);
        return c && c.focus && c.focus(),
        c
    }
    ,
    t("a.popup").on("click", function(e) {
        e.preventDefault();
        var i = t(this).attr("href");
        t.popupWindow(i, {
            width: 550,
            height: 420
        })
    })
}),
flight.component(function() {
    this.defaultAttrs({
        activeNavItemClass: "slideshow-navigation__slide--active",
        activeSlideClass: "slideshow__slide--active",
        navigationLinkSelector: ".slideshow-navigation__slide a",
        navItemSelector: ".slideshow-navigation__slide",
        slideButtonSelector: ".slideshow-slide__button",
        slideButtonLinkSelector: ".slideshow-slide__button a",
        slideSelector: ".slideshow__slide"
    }),
    this.after("initialize", function() {
        this.on("click", {
            navigationLinkSelector: this.handleNavigationLinkClick,
            slideButtonLinkSelector: this.handleSlideButtonClick
        }),
        this.on(this.attr.slideButtonLinkSelector, "focus", this.handleSlideButtonFocus)
    }),
    this.handleNavigationLinkClick = function(t, e) {
        t.preventDefault(),
        t.stopPropagation();
        var i = $(t.target).closest(this.attr.navItemSelector).data("slideIndex");
        this.setActiveSlide(i)
    }
    ,
    this.handleSlideButtonClick = function(t, e) {
        t.preventDefault(),
        t.stopPropagation();
        var i = $(t.target).closest(this.attr.slideButtonSelector).data("slideIndex");
        this.setActiveSlide(i)
    }
    ,
    this.handleSlideButtonFocus = function(t, e) {
        var i = $(t.target).closest(this.attr.slideSelector).data("slideIndex");
        this.setActiveSlide(i)
    }
    ,
    this.setActiveSlide = function(t) {
        var e = this.attr.activeSlideClass;
        this.select("slideSelector").removeClass(e);
        var i = this.attr.slideSelector + '[data-slide-index="' + t + '"]';
        $(i).addClass(e),
        console.log("setActiveSlide");
        var n = this.attr.activeNavItemClass;
        this.select("navItemSelector").removeClass(this.attr.activeNavItemClass);
        var r = this.attr.navItemSelector + '[data-slide-index="' + t + '"]';
        $(r).addClass(n)
    }
}).attachTo(".slideshow"),
$(function() {
    $(".js-sort-toggle-state").on("click", function() {
        t($(this))
    });
    var t = function(t, i) {
        var n = t.closest("article")
          , r = n.find(".js-teaser-list")
          , o = r.children("article");
        r.append(o.get().reverse()),
        e()
    }
      , e = function() {
        var t = $(".js-sort-toggle-state");
        t.hasClass("-desc") ? t.removeClass("-desc").addClass("-asc") : t.removeClass("-asc").addClass("-desc")
    }
}),
jQuery(function(t) {
    !function(t, e) {
        "function" == typeof define && define.amd ? define([], function() {
            return t.svg4everybody = e()
        }) : "object" == typeof exports ? module.exports = e() : t.svg4everybody = e()
    }(this, function() {
        function t(t, e) {
            if (e) {
                var i = document.createDocumentFragment()
                  , n = !t.getAttribute("viewBox") && e.getAttribute("viewBox");
                n && t.setAttribute("viewBox", n);
                for (var r = e.cloneNode(!0); r.childNodes.length; )
                    i.appendChild(r.firstChild);
                t.appendChild(i)
            }
        }
        function e(e) {
            e.onreadystatechange = function() {
                if (4 === e.readyState) {
                    var i = e._cachedDocument;
                    i || (i = e._cachedDocument = document.implementation.createHTMLDocument(""),
                    i.body.innerHTML = e.responseText,
                    e._cachedTarget = {}),
                    e._embeds.splice(0).map(function(n) {
                        var r = e._cachedTarget[n.id];
                        r || (r = e._cachedTarget[n.id] = i.getElementById(n.id)),
                        t(n.svg, r)
                    })
                }
            }
            ,
            e.onreadystatechange()
        }
        function i(i) {
            function n() {
                for (var i = 0; i < u.length; ) {
                    var s = u[i]
                      , a = s.parentNode;
                    if (a && /svg/i.test(a.nodeName)) {
                        var l = s.getAttribute("xlink:href");
                        if (r && (!o.validate || o.validate(l, a, s))) {
                            a.removeChild(s);
                            var h = l.split("#")
                              , p = h.shift()
                              , f = h.join("#");
                            if (p.length) {
                                var v = c[p];
                                v || (v = c[p] = new XMLHttpRequest,
                                v.open("GET", p),
                                v.send(),
                                v._embeds = []),
                                v._embeds.push({
                                    svg: a,
                                    id: f
                                }),
                                e(v)
                            } else
                                t(a, document.getElementById(f))
                        }
                    } else
                        ++i
                }
                d(n, 67)
            }
            var r, o = Object(i), s = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, a = /\bAppleWebKit\/(\d+)\b/, l = /\bEdge\/12\.(\d+)\b/;
            r = "polyfill"in o ? o.polyfill : s.test(navigator.userAgent) || (navigator.userAgent.match(l) || [])[1] < 10547 || (navigator.userAgent.match(a) || [])[1] < 537;
            var c = {}
              , d = window.requestAnimationFrame || setTimeout
              , u = document.getElementsByTagName("use");
            r && n()
        }
        return i
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    var t = {
        TAB: 9,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    }
      , e = "is-open"
      , i = Array.from(document.querySelectorAll(".js-component-tab-group"));
    i.forEach(function(i) {
        function n() {
            var t = window.location.hash.substring(1)
              , e = d.find(function(e) {
                return e.id == t && e
            });
            o(window.location.hash && e ? e : d[0])
        }
        function r(t) {
            function i() {
                var t = c(n);
                t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e)
            }
            var n = t.currentTarget;
            o(n),
            i()
        }
        function o(t) {
            d.forEach(function(e, i) {
                var n = e === t;
                e.setAttribute("aria-selected", n ? "true" : "false");
                var r = e.getAttribute("aria-controls")
                  , o = document.getElementById(r);
                n ? o.removeAttribute("hidden") : o.setAttribute("hidden", "true")
            })
        }
        function s(e) {
            function i() {
                return [t.LEFT, t.UP, t.RIGHT, t.DOWN].indexOf(s) > -1
            }
            function n(t) {
                return (d.indexOf(o) + d.length + t) % d.length
            }
            function r() {
                return t.TAB === s && "true" === o.getAttribute("aria-selected") && e.shiftKey === !1
            }
            if ("tab" === e.target.getAttribute("role")) {
                var o = e.target
                  , s = e.which;
                if (i()) {
                    var c = [t.RIGHT, t.DOWN].indexOf(s) > -1 ? 1 : -1
                      , u = n(c);
                    d[u].focus(),
                    e.preventDefault()
                }
                if (t.HOME === s && (a(),
                e.preventDefault()),
                t.END === s && (l(),
                e.preventDefault()),
                r()) {
                    var h = o.getAttribute("aria-controls");
                    document.getElementById(h).focus(),
                    e.preventDefault()
                }
            }
        }
        function a() {
            d[0].focus()
        }
        function l() {
            d[d.length - 1].focus()
        }
        function c(t) {
            return "tablist" === t.parentNode.getAttribute("role") ? t.parentNode : c(t.parentNode)
        }
        var d = Array.from(i.querySelectorAll('[role="tab"]'));
        n(),
        d.forEach(function(t) {
            t.addEventListener("click", r, !1)
        }),
        i.addEventListener("keydown", s, !1)
    })
});
var timelines = document.querySelectorAll("[data-timeline-scroll-view]");
document.body.contains(timelines[0]) && timelines.forEach(function(t) {
    leftRightNavigation(t),
    timelineSwipe(t),
    detectTimelineScroll(t),
    isScreenWiderThanImage(t)
}),
Array.from || (Array.from = function() {
    var t = Object.prototype.toString
      , e = function(e) {
        return "function" == typeof e || "[object Function]" === t.call(e)
    }
      , i = function(t) {
        var e = Number(t);
        return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
    }
      , n = Math.pow(2, 53) - 1
      , r = function(t) {
        var e = i(t);
        return Math.min(Math.max(e, 0), n)
    };
    return function(t) {
        var i = this
          , n = Object(t);
        if (null == t)
            throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var o, s = arguments.length > 1 ? arguments[1] : void 0;
        if ("undefined" != typeof s) {
            if (!e(s))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (o = arguments[2])
        }
        for (var a, l = r(n.length), c = e(i) ? Object(new i(l)) : new Array(l), d = 0; d < l; )
            a = n[d],
            s ? c[d] = "undefined" == typeof o ? s(a, d) : s.call(o, a, d) : c[d] = a,
            d += 1;
        return c.length = l,
        c
    }
}()),
"inert"in HTMLElement.prototype || (Object.defineProperty(HTMLElement.prototype, "inert", {
    enumerable: !0,
    get: function() {
        return this.hasAttribute("inert")
    },
    set: function(t) {
        t ? this.setAttribute("inert", "") : this.removeAttribute("inert")
    }
}),
window.addEventListener("load", function() {
    function t(t) {
        var e = null;
        try {
            e = new KeyboardEvent("keydown",{
                keyCode: 9,
                which: 9,
                key: "Tab",
                code: "Tab",
                keyIdentifier: "U+0009",
                shiftKey: !!t,
                bubbles: !0
            })
        } catch (i) {
            try {
                e = document.createEvent("KeyboardEvent"),
                e.initKeyboardEvent("keydown", !0, !0, window, "Tab", 0, t ? "Shift" : "", !1, "en")
            } catch (n) {}
        }
        if (e) {
            try {
                Object.defineProperty(e, "keyCode", {
                    value: 9
                })
            } catch (i) {}
            document.dispatchEvent(e)
        }
    }
    function e(t) {
        for (; t && t !== document.documentElement; ) {
            if (t.hasAttribute("inert"))
                return t;
            t = t.parentElement
        }
        return null
    }
    function i(t) {
        var e = t.path;
        return e && e[0] || t.target
    }
    function n(t) {
        t.path[t.path.length - 1] !== window && (r(i(t)),
        t.preventDefault(),
        t.stopPropagation())
    }
    function r(i) {
        var n = e(i);
        if (n) {
            if (document.hasFocus() && 0 !== s) {
                var r = (a || document).activeElement;
                if (t(0 > s),
                r != (a || document).activeElement)
                    return;
                var o = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: function(t) {
                        return !t || !t.focus || 0 > t.tabIndex ? NodeFilter.FILTER_SKIP : n.contains(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                    }
                });
                o.currentNode = n,
                o = (-1 === Math.sign(s) ? o.previousNode : o.nextNode).bind(o);
                for (var l; l = o(); )
                    if (l.focus(),
                    (a || document).activeElement !== r)
                        return
            }
            i.blur()
        }
    }
    !function(t) {
        var e = document.createElement("style");
        e.type = "text/css",
        e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
        document.body.appendChild(e)
    }("/*[inert]*/*[inert]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}");
    var o = function(t) {
        return null
    };
    window.ShadowRoot && (o = function(t) {
        for (; t && t !== document.documentElement; ) {
            if (t instanceof window.ShadowRoot)
                return t;
            t = t.parentNode
        }
        return null
    }
    );
    var s = 0;
    document.addEventListener("keydown", function(t) {
        s = 9 === t.keyCode ? t.shiftKey ? -1 : 1 : 0
    }),
    document.addEventListener("mousedown", function(t) {
        s = 0
    });
    var a = null;
    document.body.addEventListener("focus", function(t) {
        var e = i(t);
        if (t = e == t.target ? null : o(e),
        t != a) {
            if (a) {
                if (!(a instanceof window.ShadowRoot))
                    throw Error("not shadow root: " + a);
                a.removeEventListener("focusin", n, !0)
            }
            t && t.addEventListener("focusin", n, !0),
            a = t
        }
        r(e)
    }, !0),
    document.addEventListener("click", function(t) {
        var n = i(t);
        e(n) && (t.preventDefault(),
        t.stopPropagation())
    }, !0)
})),
!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(i, n) {
            var r, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            t.extend(o, o.initials),
            o.activeBreakpoint = null,
            o.animType = null,
            o.animProp = null,
            o.breakpoints = [],
            o.breakpointSettings = [],
            o.cssTransitions = !1,
            o.focussed = !1,
            o.interrupted = !1,
            o.hidden = "hidden",
            o.paused = !0,
            o.positionProp = null,
            o.respondTo = null,
            o.rowCount = 1,
            o.shouldClick = !0,
            o.$slider = t(i),
            o.$slidesCache = null,
            o.transformType = null,
            o.transitionType = null,
            o.visibilityChange = "visibilitychange",
            o.windowWidth = 0,
            o.windowTimer = null,
            r = t(i).data("slick") || {},
            o.options = t.extend({}, o.defaults, n, r),
            o.currentSlide = o.options.initialSlide,
            o.originalSettings = o.options,
            void 0 !== document.mozHidden ? (o.hidden = "mozHidden",
            o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden",
            o.visibilityChange = "webkitvisibilitychange"),
            o.autoPlay = t.proxy(o.autoPlay, o),
            o.autoPlayClear = t.proxy(o.autoPlayClear, o),
            o.autoPlayIterator = t.proxy(o.autoPlayIterator, o),
            o.changeSlide = t.proxy(o.changeSlide, o),
            o.clickHandler = t.proxy(o.clickHandler, o),
            o.selectHandler = t.proxy(o.selectHandler, o),
            o.setPosition = t.proxy(o.setPosition, o),
            o.swipeHandler = t.proxy(o.swipeHandler, o),
            o.dragHandler = t.proxy(o.dragHandler, o),
            o.keyHandler = t.proxy(o.keyHandler, o),
            o.instanceUid = e++,
            o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            o.registerBreakpoints(),
            o.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var r = this;
        if ("boolean" == typeof i)
            n = i,
            i = null;
        else if (i < 0 || i >= r.slideCount)
            return !1;
        r.unload(),
        "number" == typeof i ? 0 === i && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : n ? t(e).insertBefore(r.$slides.eq(i)) : t(e).insertAfter(r.$slides.eq(i)) : !0 === n ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack),
        r.$slides = r.$slideTrack.children(this.options.slide),
        r.$slideTrack.children(this.options.slide).detach(),
        r.$slideTrack.append(r.$slides),
        r.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }),
        r.$slidesCache = r.$slides,
        r.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, i) {
        var n = {}
          , r = this;
        r.animateHeight(),
        !0 === r.options.rtl && !1 === r.options.vertical && (e = -e),
        !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
            left: e
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: e
        }, r.options.speed, r.options.easing, i) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft),
        t({
            animStart: r.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                !1 === r.options.vertical ? (n[r.animType] = "translate(" + t + "px, 0px)",
                r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + t + "px)",
                r.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (r.applyTransition(),
        e = Math.ceil(e),
        !1 === r.options.vertical ? n[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + e + "px, 0px)",
        r.$slideTrack.css(n),
        i && setTimeout(function() {
            r.disableTransition(),
            i.call()
        }, r.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)),
        i
    }
    ,
    e.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(t) {
        var e = this
          , i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
        t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var t = this
          , e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
        t.currentSlide - 1 == 0 && (t.direction = 1))),
        t.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, i, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"),
            i = t("<ul />").addClass(n.options.dotsClass),
            e = 0; e <= n.getDotCount(); e += 1)
                i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var t, e, i, n, r, o, s, a = this;
        if (n = document.createDocumentFragment(),
        o = a.$slider.children(),
        a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows,
            r = Math.ceil(o.length / s),
            t = 0; t < r; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = t * s + (e * a.options.slidesPerRow + i);
                        o.get(d) && c.appendChild(o.get(d))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, i) {
        var n, r, o, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === s.respondTo ? o = c : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(c, l)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            r = null;
            for (n in s.breakpoints)
                s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[n] && (r = s.breakpoints[n]) : o > s.breakpoints[n] && (r = s.breakpoints[n]));
            null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || i) && (s.activeBreakpoint = r,
            "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = r) : (s.activeBreakpoint = r,
            "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e),
            a = r),
            e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }
    ,
    e.prototype.changeSlide = function(e, i) {
        var n, r, o, s = this, a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(),
        a.is("li") || (a = a.closest("li")),
        o = s.slideCount % s.options.slidesToScroll != 0,
        n = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
        e.data.message) {
        case "previous":
            r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
            break;
        case "next":
            r = 0 === n ? s.options.slidesToScroll : n,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
            break;
        case "index":
            var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, i),
            a.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(t) {
        var e, i;
        if (e = this.getNavigableIndexes(),
        i = 0,
        t > e[e.length - 1])
            t = e[e.length - 1];
        else
            for (var n in e) {
                if (t < e[n]) {
                    t = i;
                    break
                }
                i = e[n]
            }
        return t
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        t(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(t))
    }
    ,
    e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(),
        i.touchObject = {},
        i.cleanUpEvents(),
        t(".slick-cloned", i.$slider).detach(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides)),
        i.cleanUpRows(),
        i.$slider.removeClass("slick-slider"),
        i.$slider.removeClass("slick-initialized"),
        i.$slider.removeClass("slick-dotted"),
        i.unslicked = !0,
        e || i.$slider.trigger("destroy", [i])
    }
    ,
    e.prototype.disableTransition = function(t) {
        var e = this
          , i = {};
        i[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
        i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        e && setTimeout(function() {
            i.disableTransition(t),
            e.call()
        }, i.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t),
        e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var t = this
          , e = 0
          , i = 0
          , n = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow)
                ++n;
            else
                for (; e < t.slideCount; )
                    ++n,
                    e = i + t.options.slidesToScroll,
                    i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode)
            n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount; )
                ++n,
                e = i + t.options.slidesToScroll,
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else
            n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }
    ,
    e.prototype.getLeft = function(t) {
        var e, i, n, r, o = this, s = 0;
        return o.slideOffset = 0,
        i = o.$slides.first().outerHeight(!0),
        !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        r = -1,
        !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)),
        s = i * o.options.slidesToShow * r),
        o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1,
        s = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        s = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        s = (t + o.options.slidesToShow - o.slideCount) * i),
        o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
        s = 0),
        !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s,
        !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow),
        e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1),
        e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        e += (o.$list.width() - n.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var t, e = this, i = 0, n = 0, r = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll,
        n = -1 * e.options.slidesToScroll,
        t = 2 * e.slideCount); i < t; )
            r.push(i),
            i = n + e.options.slidesToScroll,
            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return r
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0,
        !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(r, o) {
            if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft)
                return e = o,
                !1
        }),
        Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots(),
        i.checkResponsive(!0),
        i.focusHandler()),
        e && i.$slider.trigger("init", [i]),
        !0 === i.options.accessibility && i.initADA(),
        i.options.autoplay && (i.paused = !1,
        i.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , i = Math.ceil(e.slideCount / e.options.slidesToShow)
          , n = e.getNavigableIndexes().filter(function(t) {
            return t >= 0 && t < e.slideCount
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            var r = n.indexOf(i);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + i,
                tabindex: -1
            }),
            -1 !== r && t(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + r
            })
        }),
        e.$dots.attr("role", "tablist").find("li").each(function(r) {
            var o = n[r];
            t(this).attr({
                role: "presentation"
            }),
            t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + r,
                "aria-controls": "slick-slide" + e.instanceUid + o,
                "aria-label": r + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var r = e.currentSlide, o = r + e.options.slidesToShow; r < o; r++)
            e.$slides.eq(r).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide),
        t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide),
        !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler),
        t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this)
                  , i = t(this).attr("data-lazy")
                  , n = t(this).attr("data-srcset")
                  , r = t(this).attr("data-sizes") || o.$slider.attr("data-sizes")
                  , s = document.createElement("img");
                s.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (e.attr("srcset", n),
                        r && e.attr("sizes", r)),
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        o.$slider.trigger("lazyLoaded", [o, e, i])
                    })
                }
                ,
                s.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    o.$slider.trigger("lazyLoadError", [o, e, i])
                }
                ,
                s.src = i
            })
        }
        var i, n, r, o = this;
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? r = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)),
        r = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide,
        r = Math.ceil(n + o.options.slidesToShow),
        !0 === o.options.fade && (n > 0 && n--,
        r <= o.slideCount && r++)),
        i = o.$slider.find(".slick-slide").slice(n, r),
        "anticipated" === o.options.lazyLoad)
            for (var s = n - 1, a = r, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++)
                s < 0 && (s = o.slideCount - 1),
                i = (i = i.add(l.eq(s))).add(l.eq(a)),
                s--,
                a++;
        e(i),
        o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(),
        t.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(),
        t.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(),
        t.options.autoplay = !0,
        t.paused = !1,
        t.focussed = !1,
        t.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]),
        i.animating = !1,
        i.slideCount > i.options.slidesToShow && i.setPosition(),
        i.swipeLeft = null,
        i.options.autoplay && i.autoPlay(),
        !0 === i.options.accessibility && (i.initADA(),
        i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, n, r, o, s, a = this, l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(),
        n = i.attr("data-lazy"),
        r = i.attr("data-srcset"),
        o = i.attr("data-sizes") || a.$slider.attr("data-sizes"),
        (s = document.createElement("img")).onload = function() {
            r && (i.attr("srcset", r),
            o && i.attr("sizes", o)),
            i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === a.options.adaptiveHeight && a.setPosition(),
            a.$slider.trigger("lazyLoaded", [a, i, n]),
            a.progressiveLazyLoad()
        }
        ,
        s.onerror = function() {
            e < 3 ? setTimeout(function() {
                a.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            a.$slider.trigger("lazyLoadError", [a, i, n]),
            a.progressiveLazyLoad())
        }
        ,
        s.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }
    ,
    e.prototype.refresh = function(e) {
        var i, n, r = this;
        n = r.slideCount - r.options.slidesToShow,
        !r.options.infinite && r.currentSlide > n && (r.currentSlide = n),
        r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0),
        i = r.currentSlide,
        r.destroy(!0),
        t.extend(r, r.initials, {
            currentSlide: i
        }),
        r.init(),
        e || r.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, i, n, r = this, o = r.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
            r.respondTo = r.options.respondTo || "window";
            for (e in o)
                if (n = r.breakpoints.length - 1,
                o.hasOwnProperty(e)) {
                    for (i = o[e].breakpoint; n >= 0; )
                        r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1),
                        n--;
                    r.breakpoints.push(i),
                    r.breakpointSettings[i] = o[e].settings
                }
            r.breakpoints.sort(function(t, e) {
                return r.options.mobileFirst ? t - e : e - t
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this;
        return t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t,
        !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(),
        !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slidesCache = n.$slides,
        n.reinit(),
        void 0)
    }
    ,
    e.prototype.setCSS = function(t) {
        var e, i, n = this, r = {};
        !0 === n.options.rtl && (t = -t),
        e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px",
        i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px",
        r[n.positionProp] = t,
        !1 === n.transformsEnabled ? n.$slideTrack.css(r) : (r = {},
        !1 === n.cssTransitions ? (r[n.animType] = "translate(" + e + ", " + i + ")",
        n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)",
        n.$slideTrack.css(r)))
    }
    ,
    e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(n, r) {
            e = i.slideWidth * n * -1,
            !0 === i.options.rtl ? t(r).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(r).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, n, r, o, s = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0],
        a = arguments[1],
        o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0],
        r = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")),
        "single" === o)
            s.options[n] = r;
        else if ("multiple" === o)
            t.each(n, function(t, e) {
                s.options[t] = e
            });
        else if ("responsive" === o)
            for (i in r)
                if ("array" !== t.type(s.options.responsive))
                    s.options.responsive = [r[i]];
                else {
                    for (e = s.options.responsive.length - 1; e >= 0; )
                        s.options.responsive[e].breakpoint === r[i].breakpoint && s.options.responsive.splice(e, 1),
                        e--;
                    s.options.responsive.push(r[i])
                }
        a && (s.unload(),
        s.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger("setPosition", [t])
    }
    ,
    e.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left",
        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0),
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
        void 0 !== e.OTransform && (t.animType = "OTransform",
        t.transformType = "-o-transform",
        t.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = "MozTransform",
        t.transformType = "-moz-transform",
        t.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
        t.transformType = "-webkit-transform",
        t.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = "msTransform",
        t.transformType = "-ms-transform",
        t.transitionType = "msTransition",
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
        t.transformType = "transform",
        t.transitionType = "transition"),
        t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }
    ,
    e.prototype.setSlideClasses = function(t) {
        var e, i, n, r, o = this;
        if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        o.$slides.eq(t).addClass("slick-current"),
        !0 === o.options.centerMode) {
            var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(o.options.slidesToShow / 2),
            !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + s, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t,
            i.slice(n - e + 1 + s, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")),
            o.$slides.eq(t).addClass("slick-center")
        } else
            t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow,
            n = !0 === o.options.infinite ? o.options.slidesToShow + t : t,
            o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, i, n, r = this;
        if (!0 === r.options.fade && (r.options.centerMode = !1),
        !0 === r.options.infinite && !1 === r.options.fade && (i = null,
        r.slideCount > r.options.slidesToShow)) {
            for (n = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow,
            e = r.slideCount; e > r.slideCount - n; e -= 1)
                i = e - 1,
                t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + r.slideCount; e += 1)
                i = e,
                t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
            r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(t) {
        var e = this;
        t || e.autoPlay(),
        e.interrupted = t
    }
    ,
    e.prototype.selectHandler = function(e) {
        var i = this
          , n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
          , r = parseInt(n.attr("data-slick-index"));
        r || (r = 0),
        i.slideCount <= i.options.slidesToShow ? i.slideHandler(r, !1, !0) : i.slideHandler(r)
    }
    ,
    e.prototype.slideHandler = function(t, e, i) {
        var n, r, o, s, a, l = null, c = this;
        if (e = e || !1,
        !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
            if (!1 === e && c.asNavFor(t),
            n = t,
            l = c.getLeft(n),
            s = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                !1 === c.options.fade && (n = c.currentSlide,
                !0 !== i ? c.animateSlide(s, function() {
                    c.postSlide(n)
                }) : c.postSlide(n));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                !1 === c.options.fade && (n = c.currentSlide,
                !0 !== i ? c.animateSlide(s, function() {
                    c.postSlide(n)
                }) : c.postSlide(n));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                r = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n,
                c.animating = !0,
                c.$slider.trigger("beforeChange", [c, c.currentSlide, r]),
                o = c.currentSlide,
                c.currentSlide = r,
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
                    return !0 !== i ? (c.fadeSlideOut(o),
                    c.fadeSlide(r, function() {
                        c.postSlide(r)
                    })) : c.postSlide(r),
                    void c.animateHeight();
                !0 !== i ? c.animateSlide(l, function() {
                    c.postSlide(r)
                }) : c.postSlide(r)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var t, e, i, n, r = this;
        return t = r.touchObject.startX - r.touchObject.curX,
        e = r.touchObject.startY - r.touchObject.curY,
        i = Math.atan2(e, t),
        (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
        n <= 45 && n >= 0 ? !1 === r.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === r.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(t) {
        var e, i, n = this;
        if (n.dragging = !1,
        n.swiping = !1,
        n.scrolling)
            return n.scrolling = !1,
            !1;
        if (n.interrupted = !1,
        n.shouldClick = !(n.touchObject.swipeLength > 10),
        void 0 === n.touchObject.curX)
            return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
        n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
            case "left":
            case "down":
                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                n.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e),
            n.touchObject = {},
            n.$slider.trigger("swipe", [n, i]))
        } else
            n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
            n.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
            }
    }
    ,
    e.prototype.swipeMove = function(t) {
        var e, i, n, r, o, s, a = this;
        return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !(!a.dragging || a.scrolling || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide),
        a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX,
        a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY,
        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
        s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
        !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0,
        !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
        i = a.swipeDirection(),
        void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
        t.preventDefault()),
        r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
        !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
        n = a.touchObject.swipeLength,
        a.touchObject.edgeHit = !1,
        !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction,
        a.touchObject.edgeHit = !0),
        !1 === a.options.vertical ? a.swipeLeft = e + n * r : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * r,
        !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * r),
        !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
        !1) : void a.setCSS(a.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(t) {
        var e, i = this;
        return i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {},
        !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        i.dragging = !0,
        void 0)
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(),
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }
    ,
    t.fn.slick = function() {
        var t, i, n = this, r = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = n.length;
        for (t = 0; t < s; t++)
            if ("object" == typeof r || void 0 === r ? n[t].slick = new e(n[t],r) : i = n[t].slick[r].apply(n[t].slick, o),
            void 0 !== i)
                return i;
        return n
    }
}),
function(t, e) {
    "use strict";
    function i(t, e) {
        var i, n, r = t.element, a = t.val, l = t.prop, u = r.style;
        if (!c)
            return u[l] = a;
        if (r.hasAttribute(s))
            r.removeEventListener(d, e.l);
        else {
            if (u[c] = "none",
            i = o(r)[l],
            u[l] = "auto",
            n = o(r)[l],
            i === a || "auto" === a && i === n)
                return;
            e.auto = n,
            r.setAttribute(s, 1),
            u[l] = i,
            r.offsetWidth,
            u[c] = t.style
        }
        u[l] = "auto" === a ? e.auto : a,
        e.l = function(t) {
            t.propertyName === l && (r.removeAttribute(s),
            r.removeEventListener(d, e.l),
            "auto" === a && (u[c] = "none",
            u[l] = a))
        }
        ,
        r.addEventListener(d, e.l)
    }
    function n(t) {
        var n, r, o = t.element;
        "string" == typeof o && (o = e.querySelector(o)),
        o = t.element = o instanceof Node && o,
        t.prop = t.prop || "height",
        t.style = t.style || "",
        o && (r = a.indexOf(o),
        ~r ? n = l[r] : (n = {},
        a.push(o),
        l.push(n)),
        i(t, n))
    }
    var r, o = t.getComputedStyle, s = "data-ttfaInTransition", a = [], l = [], c = !1, d = !1, u = e.createElement("a").style;
    void 0 !== u[r = "webkitTransition"] && (c = r,
    d = r + "End"),
    void 0 !== u[r = "transition"] && (c = r,
    d = r + "end"),
    n.prop = c,
    n.end = d,
    "object" == typeof module && module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(function() {
        return n
    }) : t.transition = n
}(window, document),
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.inView = e() : t.inView = e()
}(this, function() {
    return function(t) {
        function e(n) {
            if (i[n])
                return i[n].exports;
            var r = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(r.exports, r, r.exports, e),
            r.loaded = !0,
            r.exports
        }
        var i = {};
        return e.m = t,
        e.c = i,
        e.p = "",
        e(0)
    }([function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var r = i(2)
          , o = n(r);
        t.exports = o["default"]
    }
    , function(t, e) {
        function i(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
        t.exports = i
    }
    , function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(9)
          , o = n(r)
          , s = i(3)
          , a = n(s)
          , l = i(4)
          , c = function() {
            if ("undefined" != typeof window) {
                var t = 100
                  , e = ["scroll", "resize", "load"]
                  , i = {
                    history: []
                }
                  , n = {
                    offset: {},
                    threshold: 0,
                    test: l.inViewport
                }
                  , r = (0,
                o["default"])(function() {
                    i.history.forEach(function(t) {
                        i[t].check()
                    })
                }, t);
                e.forEach(function(t) {
                    return addEventListener(t, r)
                }),
                window.MutationObserver && addEventListener("DOMContentLoaded", function() {
                    new MutationObserver(r).observe(document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    })
                });
                var s = function(t) {
                    if ("string" == typeof t) {
                        var e = [].slice.call(document.querySelectorAll(t));
                        return i.history.indexOf(t) > -1 ? i[t].elements = e : (i[t] = (0,
                        a["default"])(e, n),
                        i.history.push(t)),
                        i[t]
                    }
                };
                return s.offset = function(t) {
                    if (void 0 === t)
                        return n.offset;
                    var e = function(t) {
                        return "number" == typeof t
                    };
                    return ["top", "right", "bottom", "left"].forEach(e(t) ? function(e) {
                        return n.offset[e] = t
                    }
                    : function(i) {
                        return e(t[i]) ? n.offset[i] = t[i] : null
                    }
                    ),
                    n.offset
                }
                ,
                s.threshold = function(t) {
                    return "number" == typeof t && t >= 0 && t <= 1 ? n.threshold = t : n.threshold
                }
                ,
                s.test = function(t) {
                    return "function" == typeof t ? n.test = t : n.test
                }
                ,
                s.is = function(t) {
                    return n.test(t, n)
                }
                ,
                s.offset(0),
                s
            }
        };
        e["default"] = c()
    }
    , function(t, e) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , r = function() {
            function t(e, n) {
                i(this, t),
                this.options = n,
                this.elements = e,
                this.current = [],
                this.handlers = {
                    enter: [],
                    exit: []
                },
                this.singles = {
                    enter: [],
                    exit: []
                }
            }
            return n(t, [{
                key: "check",
                value: function() {
                    var t = this;
                    return this.elements.forEach(function(e) {
                        var i = t.options.test(e, t.options)
                          , n = t.current.indexOf(e)
                          , r = n > -1
                          , o = i && !r
                          , s = !i && r;
                        o && (t.current.push(e),
                        t.emit("enter", e)),
                        s && (t.current.splice(n, 1),
                        t.emit("exit", e))
                    }),
                    this
                }
            }, {
                key: "on",
                value: function(t, e) {
                    return this.handlers[t].push(e),
                    this
                }
            }, {
                key: "once",
                value: function(t, e) {
                    return this.singles[t].unshift(e),
                    this
                }
            }, {
                key: "emit",
                value: function(t, e) {
                    for (; this.singles[t].length; )
                        this.singles[t].pop()(e);
                    for (var i = this.handlers[t].length; --i > -1; )
                        this.handlers[t][i](e);
                    return this
                }
            }]),
            t
        }();
        e["default"] = function(t, e) {
            return new r(t,e)
        }
    }
    , function(t, e) {
        "use strict";
        function i(t, e) {
            var i = t.getBoundingClientRect()
              , n = i.top
              , r = i.right
              , o = i.bottom
              , s = i.left
              , a = i.width
              , l = i.height
              , c = {
                t: o,
                r: window.innerWidth - s,
                b: window.innerHeight - n,
                l: r
            }
              , d = {
                x: e.threshold * a,
                y: e.threshold * l
            };
            return c.t > e.offset.top + d.y && c.r > e.offset.right + d.x && c.b > e.offset.bottom + d.y && c.l > e.offset.left + d.x
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.inViewport = i
    }
    , function(t, e) {
        (function(e) {
            var i = "object" == typeof e && e && e.Object === Object && e;
            t.exports = i
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, i) {
        var n = i(5)
          , r = "object" == typeof self && self && self.Object === Object && self
          , o = n || r || Function("return this")();
        t.exports = o
    }
    , function(t, e, i) {
        function n(t, e, i) {
            function n(e) {
                var i = y
                  , n = b;
                return y = b = void 0,
                S = e,
                T = t.apply(n, i)
            }
            function d(t) {
                return S = t,
                C = setTimeout(p, e),
                _ ? n(t) : T
            }
            function u(t) {
                var i = t - k
                  , n = t - S
                  , r = e - i;
                return x ? c(r, w - n) : r
            }
            function h(t) {
                var i = t - k
                  , n = t - S;
                return void 0 === k || i >= e || i < 0 || x && n >= w
            }
            function p() {
                var t = o();
                return h(t) ? f(t) : void (C = setTimeout(p, u(t)))
            }
            function f(t) {
                return C = void 0,
                E && y ? n(t) : (y = b = void 0,
                T)
            }
            function v() {
                void 0 !== C && clearTimeout(C),
                S = 0,
                y = k = b = C = void 0
            }
            function m() {
                return void 0 === C ? T : f(o())
            }
            function g() {
                var t = o()
                  , i = h(t);
                if (y = arguments,
                b = this,
                k = t,
                i) {
                    if (void 0 === C)
                        return d(k);
                    if (x)
                        return C = setTimeout(p, e),
                        n(k)
                }
                return void 0 === C && (C = setTimeout(p, e)),
                T
            }
            var y, b, w, T, C, k, S = 0, _ = !1, x = !1, E = !0;
            if ("function" != typeof t)
                throw new TypeError(a);
            return e = s(e) || 0,
            r(i) && (_ = !!i.leading,
            x = "maxWait"in i,
            w = x ? l(s(i.maxWait) || 0, e) : w,
            E = "trailing"in i ? !!i.trailing : E),
            g.cancel = v,
            g.flush = m,
            g
        }
        var r = i(1)
          , o = i(8)
          , s = i(10)
          , a = "Expected a function"
          , l = Math.max
          , c = Math.min;
        t.exports = n
    }
    , function(t, e, i) {
        var n = i(6)
          , r = function() {
            return n.Date.now()
        };
        t.exports = r
    }
    , function(t, e, i) {
        function n(t, e, i) {
            var n = !0
              , a = !0;
            if ("function" != typeof t)
                throw new TypeError(s);
            return o(i) && (n = "leading"in i ? !!i.leading : n,
            a = "trailing"in i ? !!i.trailing : a),
            r(t, e, {
                leading: n,
                maxWait: e,
                trailing: a
            })
        }
        var r = i(7)
          , o = i(1)
          , s = "Expected a function";
        t.exports = n
    }
    , function(t, e) {
        function i(t) {
            return t
        }
        t.exports = i
    }
    ])
}),
document.addEventListener("DOMContentLoaded", function() {
    var t = ".js-text"
      , e = Array.from(document.querySelectorAll(t))
      , i = "text--enter-setup"
      , n = "text--enter-active";
    document.documentElement.scrollHeight > document.documentElement.clientHeight && (e.forEach(function(t) {
        t.classList.add(i)
    }),
    inView.offset(200),
    inView(t).on("enter", function(t) {
        t.classList.add(n)
    }))
});
