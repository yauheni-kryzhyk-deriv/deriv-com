(window.webpackJsonp=window.webpackJsonp||[]).push([[44,103],{"3OHM":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d}));var a=n("vOnD"),r=n("O4Du"),c=n("Z/CU"),i=n("aC/h"),o=a.c.div.withConfig({displayName:"_help-centre-style__ArticleWrapper",componentId:"xgb5w4-0"})(["max-width:71.2rem;display:flex;flex-direction:column;justify-content:flex-start;height:100%;font-size:var(--text-size-s);line-height:1.5;margin-left:12.6rem;margin-top:1.6rem;@media ","{margin-left:",";}@media ","{margin-left:0;}"],i.a.laptopL,(function(e){var t=e.margin_left;return null!=t?t:"12.6rem"}),i.a.tabletL),l=Object(a.c)(c.d).withConfig({displayName:"_help-centre-style__ExternalLink",componentId:"xgb5w4-1"})(["text-decoration:none;font-size:var(--text-size-s);font-weight:bold;color:var(--color-red);:hover{text-decoration:underline;}"]),s=Object(a.c)(r.l).withConfig({displayName:"_help-centre-style__StyledHeader",componentId:"xgb5w4-2"})(["font-size:2.4rem;margin-bottom:2.4rem;"]),d=Object(a.c)(r.x).withConfig({displayName:"_help-centre-style__StyledText",componentId:"xgb5w4-3"})(["margin-top:1.7rem;"])},"J/Db":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("q1tI"),r=n.n(a),c=n("vOnD"),i=n("omHr"),o=n("8k0H"),l=n("Z/CU"),s=n("O4Du"),d=n("g2Kc"),u=n("aC/h"),m=c.c.div.withConfig({displayName:"_article__Content",componentId:"sc-17ehp3-0"})(["display:flex;flex-direction:row;justify-content:center;width:100%;"]),f=c.c.div.withConfig({displayName:"_article__TabWrapper",componentId:"sc-17ehp3-1"})(["width:100%;margin-top:8rem;@media ","{margin-top:0;}"],u.a.tabletL),g=c.c.div.withConfig({displayName:"_article__ContactContainer",componentId:"sc-17ehp3-2"})(["margin-top:8rem;"]),h=function(e){var t=e.children,n=e.header,a=e.title,c=e.description;return r.a.createElement(o.b,null,r.a.createElement(d.h,{title:a,description:c}),r.a.createElement(d.b,{align:"left",justify:"flex-start",direction:"column"},r.a.createElement(s.v,{to:"/help-centre/",has_arrow:"true",color:"black",size:"var(--text-size-s)",weight:"bold",arrow_margin:"1rem",margin:"4rem 0 0"},Object(l.g)("Back")),r.a.createElement(m,null,r.a.createElement(f,null,r.a.createElement(s.t,{line_height:"1.5",opacity:"0.72",size:"var(--text-size-s)",tab_header:n},t)))),r.a.createElement(g,null,r.a.createElement(i.DidntFindYourAnswerBanner,null)))}},ctXc:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),c=n("txul"),i=function(){var e=r.a.useState(!1),t=e[0],n=e[1],a=Object(c.p)()&&window.LC_API||{},i=r.a.useState(!1),o=i[0],l=i[1],s=new URLSearchParams(Object(c.p)()&&window.location.search||"").get("is_livechat_open");return r.a.useEffect((function(){var e=null,t=null;if(Object(c.p)()){var a=Object(c.g)();e=setInterval((function(){var e=Object(c.b)(a);l(!!e)}),1e3),t=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){n(!0),"true"===(null==s?void 0:s.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(e),clearTimeout(t)}}),[]),r.a.useEffect((function(){if(Object(c.p)()){var e=Object(c.g)();t&&window.LiveChatWidget.on("ready",(function(){var t=Object(c.n)(e),n=Object(c.b)(e),a=t||{},r=a.utm_source,i=a.utm_medium,l=a.utm_campaign,s=n||{},d=s.loginid,u=s.email,m=s.landing_company_shortcode,f=s.currency,g=s.residence,h=s.first_name,w=s.last_name,p={is_logged_in:o,loginid:null!=d?d:"",landing_company_shortcode:null!=m?m:"",currency:null!=f?f:"",residence:null!=g?g:"",email:null!=u?u:"",utm_source:null!=r?r:"",utm_medium:null!=i?i:"",utm_campaign:null!=l?l:""};window.LiveChatWidget.call("set_session_variables",p),o?(u&&window.LiveChatWidget.call("set_customer_email",u),h&&w&&window.LiveChatWidget.call("set_customer_name",h+" "+w)):window.LC_API.on_chat_ended=function(){window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")};var y=new URLSearchParams(window.location.search).get("is_livechat_open");"true"===(null==y?void 0:y.toLowerCase())&&window.LC_API.open_chat_window()}))}}),[o,t]),[t,a]}},omHr:function(e,t,n){"use strict";n.r(t),n.d(t,"DidntFindYourAnswerBanner",(function(){return w}));var a=n("q1tI"),r=n.n(a),c=n("vOnD"),i=n("O4Du"),o=n("wYtL"),l=n("Z/CU"),s=n("g2Kc"),d=n("ctXc"),u=n("aC/h");var m=c.c.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1ba1494-0"})(["background-color:var(--color-black-3);"]),f=Object(c.c)(s.b).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1ba1494-1"})(["padding:3.5rem 0;justify-content:center;align-items:center;@media ","{flex-wrap:wrap;justify-content:center;align-items:center;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],u.a.mobileL,o.a),g=c.c.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1ba1494-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],u.a.tabletL),h=Object(c.c)(i.x).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1ba1494-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],u.a.mobileL),w=function(){var e=Object(d.a)(),t=e[0],n=e[1];return r.a.createElement(m,null,r.a.createElement(f,null,r.a.createElement(g,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHgyPSIxMDAlIiB5MT0iODcuOTcyJSIgeTI9IjEyLjAyOCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjQ0NEYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjY0NDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNNjIgMjFhMiAyIDAgMDEyIDJ2MzQuNzczYTIgMiAwIDAxLTMuMzI5IDEuNDk1TDUzLjYyIDUzSDE4YTIgMiAwIDAxLTItMlY0MGgydjExaDM1LjYyYy40OSAwIC45NjIuMTggMS4zMjkuNTA1TDYyIDU3Ljc3M1YyM0g1MnYtMmgxMHpNNDYgNGEyIDIgMCAwMTIgMnYyOGEyIDIgMCAwMS0yIDJIMTAuMzhsLTcuMDUgNi4yNjhBMiAyIDAgMDEwIDQwLjc3M1Y2YTIgMiAwIDAxMi0yem0wIDJIMnYzNC43NzNsNy4wNTEtNi4yNjhjLjM2Ny0uMzI1Ljg0LS41MDUgMS4zMy0uNTA1SDQ2VjZ6TTMwIDIyYTEgMSAwIDAxLjExNyAxLjk5M0wzMCAyNEg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAyMmgyMXptOS04YTEgMSAwIDAxLjExNyAxLjk5M0wzOSAxNkg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAxNGgzMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",alt:"contact us icon"}),r.a.createElement(h,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},Object(l.g)("Didn’t find your answer? We can help.")),t&&r.a.createElement(o.a,{secondary:"true",onClick:function(){n.open_chat_window()},weight:"bold",color:"black"},Object(l.g)("Chat"))))};t.default=w},qVFl:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("J/Db"),i=n("3OHM"),o=n("mjZG"),l=n("O4Du"),s=n("Z/CU"),d=function(){return r.a.createElement(i.a,null,r.a.createElement(i.c,{as:"h4"},Object(s.g)("What is DMT5?")),r.a.createElement(l.x,null,Object(s.g)("DMT5 is the MT5 platform on Deriv. It is a multi-asset online platform designed to give new and experienced traders access to a wide range of financial markets.")))},u=function(){return r.a.createElement(i.a,null,r.a.createElement(i.c,{as:"h4"},Object(s.g)("What are the major differences between DTrader and DMT5?")),r.a.createElement(l.x,null,Object(s.g)("DTrader allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.")),r.a.createElement(i.d,null,Object(s.g)("DMT5 is a multi-asset trading platform that you can use to trade spot forex and contracts for difference (CFDs) with leverage.")))},m=function(){return r.a.createElement(i.a,null,r.a.createElement(i.c,{as:"h4"},Object(s.g)("What are the differences between the DMT5 Synthetic Indices, Financial and Financial STP accounts?")),r.a.createElement(l.x,null,Object(s.g)("The DMT5 Standard account offers new and experienced traders high leverage and variable spreads for maximum flexibility.")),r.a.createElement(i.d,null,Object(s.g)("The DMT5 Advanced account is a 100% A Book account where your trades are passed straight through to the market, giving you direct access to forex liquidity providers.")),r.a.createElement(i.d,null,Object(s.g)("The DMT5 Synthetic Indices account allows you to trade contracts for difference (CFDs) on synthetic indices that mimic real-world movements. It is available for trading 24/7 and audited for fairness by an independent third party.")))},f=function(){return r.a.createElement(i.a,null,r.a.createElement(i.c,{as:"h4"},Object(s.g)("How can I deposit funds into my DMT5 real money account?")),r.a.createElement(l.x,null,r.a.createElement(s.c,{translate_text:"To deposit funds into your MT5 account on Deriv, you’ll need to use the funds in your Deriv account. Go to <0>Cashier ></0> <1>Transfer between accounts</1> and follow the instructions on the screen.",components:[r.a.createElement("strong",{key:0}),r.a.createElement(i.b,{href:o.i+"/cashier/account-transfer",target:"_blank",rel:"noopener noreferrer",key:1})]})),r.a.createElement(i.d,null,Object(s.g)("Transfers are instant. Once you’ve completed all the steps, your DMT5 account balance will be updated immediately.")))},g=function(){return r.a.createElement(i.a,null,r.a.createElement(i.c,{as:"h4"},Object(s.g)("How can I withdraw funds from my DMT5 real money account?")),r.a.createElement(l.x,{mb:"1.5rem"},r.a.createElement(s.c,{translate_text:"To withdraw funds from your MT5 account on Deriv, you’ll need to transfer the funds to your Deriv account. Go to <0>Cashier ></0> <1>Transfer between accounts</1> and follow the instructions on the screen.",components:[r.a.createElement("strong",{key:0}),r.a.createElement(i.b,{href:o.i+"/cashier/account-transfer",target:"_blank",rel:"noopener noreferrer",key:1})]})),r.a.createElement(l.x,null,Object(s.g)("Transfers are instant. Once you’ve completed all the steps, your DMT5 account balance will be updated immediately.")))},h=function(){return r.a.createElement(i.a,null,r.a.createElement(i.c,{as:"h4"},Object(s.g)("Why are my DMT5 login details different from my Deriv login details?")),r.a.createElement(l.x,null,Object(s.g)("MT5 on Deriv is a standalone trading platform that isn’t hosted on our website. Your DMT5 login details give you access to the MT5 platform while your Deriv login details give you access to the platforms hosted on our website, such as DTrader and DBot.")))},w=function(){return r.a.createElement(i.a,null,r.a.createElement(i.c,{as:"h4"},Object(s.g)("How can I reset my DMT5 account password?")),r.a.createElement(l.x,null,r.a.createElement(s.c,{translate_text:"Please go to the <0>DMT5 dashboard</0> and click on the <1>Password</1> button of that DMT5 account.",components:[r.a.createElement(i.b,{href:o.i+"/mt5",target:"_blank",rel:"noopener noreferrer",key:1}),r.a.createElement("strong",{key:0})]})))};t.default=Object(s.e)()((function(){return r.a.createElement("div",null,r.a.createElement(c.a,{header:"DMT5",title:Object(s.g)("Help centre | Frequently asked questions | DMT5 | Deriv"),description:Object(s.g)("Frequently asked questions - DMT5")},r.a.createElement(d,{text:Object(s.g)("What is DMT5?"),label:"what-is-dmt5"}),r.a.createElement(u,{text:Object(s.g)("What are the major differences between DTrader and DMT5?"),label:"differences-of-dtrader-and-dmt5"}),r.a.createElement(m,{text:Object(s.g)("What are the differences between the DMT5 Synthetic Indices, Financial and Financial STP accounts?"),label:"differences-of-dmt5-accounts"}),r.a.createElement(g,{text:Object(s.g)("How can I withdraw funds from my DMT5 real money account?"),label:"withdraw-funds-from-DMT5"}),r.a.createElement(h,{text:Object(s.g)("Why are my DMT5 login details different from my Deriv login details?"),label:"login-credentials"}),r.a.createElement(w,{text:Object(s.g)("How can I reset my DMT5 account password?"),label:"reset-dmt5-password"}),r.a.createElement(f,{text:Object(s.g)("How can I deposit funds into my DMT5 real money account?"),label:"deposit-to-dmt5"})))}))}}]);
//# sourceMappingURL=component---src-pages-help-centre-dmt-5-js-e2c03437bb83817725ef.js.map