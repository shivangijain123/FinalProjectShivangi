exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 1852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-cookie-consent"
var external_react_cookie_consent_ = __webpack_require__(9779);
var external_react_cookie_consent_default = /*#__PURE__*/__webpack_require__.n(external_react_cookie_consent_);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./utils/ga-utils.js

const initGA = (trackingID)=>{
    external_react_ga_default().initialize(trackingID);
    external_react_ga_default().pageview(window.location.pathname + window.location.search);
};

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js



 // Assuming this path is correct.

function MyApp({ Component, pageProps }) {
    const handleAcceptCookie = ()=>{
        if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
            console.log("Accepted cookies. Initializing GA...");
            initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
        }
    };
    const handleDeclineCookie = ()=>{
        console.log("Declined cookies. Removing GA...");
        external_react_cookie_consent_.Cookies.remove("_ga");
        external_react_cookie_consent_.Cookies.remove("_gat");
        external_react_cookie_consent_.Cookies.remove("_gid");
    };
    (0,external_react_.useEffect)(()=>{
        console.log("Checking cookie consent value...");
        const isConsent = (0,external_react_cookie_consent_.getCookieConsentValue)();
        console.log("Cookie Consent Value:", isConsent);
        if (isConsent === "true") {
            handleAcceptCookie();
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "App",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime.jsx((external_react_cookie_consent_default()), {
                className: "cookie-consent-banner",
                style: {
                    background: "red"
                },
                buttonStyle: {
                    background: "white",
                    color: "black"
                },
                declineButtonStyle: {
                    background: "black",
                    color: "white"
                },
                enableDeclineButton: true,
                onAccept: handleAcceptCookie,
                onDecline: handleDeclineCookie,
                children: "This website uses cookies to enhance the user experience."
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
// pages/_document.js


class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            async: true,
                            src: "https://www.googletagmanager.com/gtag/js?id=G-Y1KK7VETZ9"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y1KK7VETZ9');
            `
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;