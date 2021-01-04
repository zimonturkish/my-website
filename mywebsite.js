// javascript plugin
function dotsThrottle(a, b, c) {
  var d,
    e,
    f,
    g = null,
    h = 0;
  c || (c = {});
  var i = function () {
    (h = !1 === c.leading ? 0 : Date.now()),
      (g = null),
      (f = a.apply(d, e)),
      g || (d = e = null);
  };
  return function () {
    var j = Date.now();
    h || !1 !== c.leading || (h = j);
    var k = b - (j - h);
    return (
      (d = this),
      (e = arguments),
      0 >= k || k > b
        ? (g && (clearTimeout(g), (g = null)),
          (h = j),
          (f = a.apply(d, e)),
          !g && (d = e = null))
        : !g && !1 !== c.trailing && (g = setTimeout(i, k)),
      f
    );
  };
}
let dotFixedNavPresent = !1,
  dotFixedNavId = "",
  dotFixedNavUp = !1;
function easyScrollDots(a) {
  let b = document.querySelectorAll(".scroll-indicator");
  if (
    (!0 === a.fixedNav ? (dotFixedNavPresent = !0) : dotFixedNavPresent,
    (dotFixedNavId = "" !== a.fixedNavId && a.fixedNavId),
    !0 === a.fixedNavUpward ? (dotFixedNavUp = !0) : dotFixedNavUp,
    b.length)
  ) {
    document
      .querySelector("body")
      .lastElementChild.insertAdjacentHTML(
        "afterend",
        '<div class="scroll-indicator-controller"><span></span></div>'
      );
    const a = document.querySelector(".scroll-indicator-controller");
    ("undefined" != typeof window.orientation ||
      -1 !== navigator.userAgent.indexOf("IEMobile")) &&
      a.classList.add("indi-mobile");
    const d = Array.prototype.slice.call(b);
    d.forEach(function (b, c) {
      const d = b.getAttribute("id"),
        e = b.getAttribute("data-scroll-indicator-title");
      let f = "";
      0 == c && (f = "active"),
        a.lastElementChild.insertAdjacentHTML(
          "afterend",
          '<div class="' +
            f +
            '" data-indi-controller-id="' +
            d +
            '" onclick="scrollIndiClicked(\'' +
            d +
            "');\"><span>" +
            e +
            "</span><div></div></div>"
        );
    });
    const f = a.querySelectorAll("[data-indi-controller-id]");
    var c = dotsThrottle(function () {
      let b = {};
      d.forEach(function (a) {
        const c = a.getAttribute("id"),
          d = a.getBoundingClientRect().top;
        b[c] = d;
      });
      const c = Object.keys(b).map(function (a) {
          return b[a];
        }),
        g = function () {
          const a = c.filter(function (a) {
            return -150 < a;
          });
          return Math.min.apply(null, a);
        };
      Object.keys(b).forEach(function (c) {
        b[c] == g() &&
          (Array.prototype.forEach.call(f, function (a) {
            a.classList.contains("active") && a.classList.remove("active");
          }),
          a
            .querySelector('[data-indi-controller-id="' + c + '"]')
            .classList.add("active"));
      });
    }, 300);
    window.onscroll = function () {
      c();
    };
  }
}
// function to scroll the pages
function scrollIndiClicked(a) {
  if (window.jQuery) {
    if (!0 == dotFixedNavPresent && dotFixedNavId.length) {
      const b = document.getElementById(dotFixedNavId),
        c = b.clientHeight,
        d = $("html, body"),
        e = $("#" + a);
      if (!0 === dotFixedNavUp) {
        d.animate({ scrollTop: e.offset().top }, 700);
        const a = document.body.getBoundingClientRect().top;
        setTimeout(function () {
          document.body.getBoundingClientRect().top > a &&
            d.animate({ scrollTop: e.offset().top - c }, 400);
        }, 400);
      } else d.animate({ scrollTop: e.offset().top - c }, 700);
    } else $("html, body").animate({ scrollTop: $("#" + a).offset().top }, 700);
  } else if (!0 == dotFixedNavPresent && dotFixedNavId.length) {
    const b = document.getElementById(dotFixedNavId),
      c = b.clientHeight,
      d = document.getElementById(a);
    if (!0 === dotFixedNavUp) {
      window.scrollTo({ top: d.offsetTop, left: 0, behavior: "smooth" });
      const a = document.body.getBoundingClientRect().top;
      setTimeout(function () {
        document.body.getBoundingClientRect().top > a &&
          window.scrollTo({
            top: d.offsetTop - c,
            left: 0,
            behavior: "smooth",
          });
      }, 400);
    } else
      window.scrollTo({ top: d.offsetTop - c, left: 0, behavior: "smooth" });
  } else
    window.scrollTo({
      top: document.getElementById(a).offsetTop,
      left: 0,
      behavior: "smooth",
    });
}

// function for skills section animation
window.addEventListener("scroll", function () {
  document.getElementById("skills1").style =
    "width: 470px; transition-duration: 1.8s; transition-timing-function: ease;";
  document.getElementById("skills2").style =
    "width: 420px; transition-duration: 1.8s; transition-timing-function: ease";
  document.getElementById("skills3").style =
    "width: 380px; transition-duration: 1.8s; transition-timing-function: ease";
  document.getElementById("skills4").style =
    "width: 100px; transition-duration: 1.8s; transition-timing-function: ease";
  document.getElementById("skills5").style =
    "width: 50px; transition-duration: 1.8s; transition-timing-function: ease";
});

window.addEventListener("scroll", function () {
  let text_aboutme = document.getElementById("first_trans");
  text_aboutme.classList.add("first_trans");
});

window.addEventListener("load", function () {
  let one = document.getElementById("first_home");
  one.classList.add("first_home");

  let two = document.getElementById("second_home");
  two.classList.add("second_home");

  let three = document.getElementById("third_home");
  three.classList.add("third_home");
});
