;/*FB_PKG_DELIM*/

__d("BaseSvgImage.react",["react","useFeedImageErrorEventLoggerCbs"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useRef;function a(a){var b=a.onError,d=a.src,e=a.testid;e=babelHelpers.objectWithoutPropertiesLoose(a,["onError","src","testid"]);a=c("useFeedImageErrorEventLoggerCbs")({onError:b,src:d});b=a._onError;a=a._onLoad;var f=j(null),g=j(d);i(function(){f.current&&f.current.getAttribute("xlink:href")!==g.current&&f.current.setAttribute("xlink:href",g.current)},[f,g]);return h.jsx("image",babelHelpers["extends"]({},e,{"data-testid":void 0,height:"100%",onError:b,onLoad:a,preserveAspectRatio:"xMidYMid slice",ref:f,width:"100%",xlinkHref:d}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useSetAttributeRef",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a,b){return h(function(c){c!=null&&c.setAttribute(a,b)},[a,b])}g["default"]=a}),98);
__d("CometPressableChildrenWithOverlay.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.children;a=a.overlay;return h.jsxs("div",{className:"x4k7w5x x1h91t0o x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1jfb8zj x1beo9mf x3igimt xarpa2k x1n2onr6 x1qrby5j",children:[b,a]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BaseBadge.react",["CometVisualCompletionAttributes","react","stylex","testID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{alignItems:"x6s0dn4",borderTopStartRadius:"xzolkzo",borderTopEndRadius:"x12go9s9",borderBottomEndRadius:"x1rnf11y",borderBottomStartRadius:"xprq8jg",boxSizing:"x9f619",display:"x3nfvp2",justifyContent:"xl56j7k",$$css:!0}};a=function(a){var b=a.children,d=a.testid,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","testid","xstyle"]);return h.jsx("span",babelHelpers["extends"]({},a,{className:c("stylex")([i.root,e])},c("testID")(d),c("CometVisualCompletionAttributes").IGNORE,{children:b}))};g["default"]=a}),98);
__d("BaseStyledBadge.react",["BaseBadge.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={6:{height:"xols6we",width:"x1v4s8kt",$$css:!0},7:{height:"x1hagigm",width:"xci0xqf",$$css:!0},8:{height:"xdk7pt",width:"x1xc55vz",$$css:!0},9:{height:"xegnrdp",width:"x1wc42o8",$$css:!0},10:{height:"x170jfvy",width:"x1fsd2vl",$$css:!0},12:{height:"x1kpxq89",width:"xsmyaan",$$css:!0},14:{height:"x1v9usgg",width:"x6jxa94",$$css:!0},15:{height:"xx3o462",width:"x1a00udw",$$css:!0},18:{height:"xmix8c7",width:"x1xp8n7a",$$css:!0},20:{height:"x1qx5ct2",width:"xw4jnvo",$$css:!0},22:{height:"x17rw0jw",width:"x17z2i9w",$$css:!0},24:{height:"xxk0z11",width:"xvy4d1p",$$css:!0},32:{height:"x10w6t97",width:"x1td3qas",$$css:!0},41:{height:"x1njhlm6",width:"x1r9kitl",$$css:!0}},j={6:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x5see2y",borderEndWidth:"x8ebbdf",borderBottomWidth:"x1pzews7",borderStartWidth:"x1r61nuk",height:"xegnrdp",width:"x1wc42o8",$$css:!0},7:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",height:"x6w4g8m",width:"x10vfzb2",$$css:!0},8:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",height:"x1kpxq89",width:"xsmyaan",$$css:!0},9:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",height:"x18gnavp",width:"x1fxhmyf",$$css:!0},10:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",height:"x1v9usgg",width:"x6jxa94",$$css:!0},12:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",height:"xlup9mm",width:"x1kky2od",$$css:!0},14:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",height:"xmix8c7",width:"x1xp8n7a",$$css:!0},15:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",height:"xhvdbge",width:"xn6xy2s",$$css:!0},18:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",height:"x17rw0jw",width:"x17z2i9w",$$css:!0},20:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x1gp4ovq",borderEndWidth:"xdio9jc",borderBottomWidth:"x1h2mt7u",borderStartWidth:"x7g060r",height:"x1fgtraw",width:"xgd8bvy",$$css:!0},22:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x1gp4ovq",borderEndWidth:"xdio9jc",borderBottomWidth:"x1h2mt7u",borderStartWidth:"x7g060r",height:"x1gnnpzl",width:"x1849jeq",$$css:!0},24:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x1gp4ovq",borderEndWidth:"xdio9jc",borderBottomWidth:"x1h2mt7u",borderStartWidth:"x7g060r",height:"x10w6t97",width:"x1td3qas",$$css:!0},32:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x1gp4ovq",borderEndWidth:"xdio9jc",borderBottomWidth:"x1h2mt7u",borderStartWidth:"x7g060r",height:"x1vqgdyp",width:"x100vrsf",$$css:!0},41:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x1gp4ovq",borderEndWidth:"xdio9jc",borderBottomWidth:"x1h2mt7u",borderStartWidth:"x7g060r",height:"x112a4uq",width:"x15jighw",$$css:!0}};function a(a){var b=a.border;b=b===void 0?!1:b;var d=a.children,e=a.colorXStyle,f=a.size;f=f===void 0?8:f;var g=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["border","children","colorXStyle","size","xstyle"]);return h.jsx(c("BaseBadge.react"),babelHelpers["extends"]({},a,{xstyle:[e,b?j[f]:i[f],g],children:d}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("getCometBadgeColorStyle",["unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h={blue:{backgroundColor:"xwnonoy",$$css:!0},darkGray:{backgroundColor:"xhazfnh",$$css:!0},gray:{backgroundColor:"x1d2osyd",$$css:!0},green:{backgroundColor:"xv9rvxn",$$css:!0},lightBlue:{backgroundColor:"xfmpgtx",$$css:!0},red:{backgroundColor:"x1cdvf7c",$$css:!0},yellow:{backgroundColor:"xacajkf",$$css:!0}};function a(a){switch(a){case"blue":return h.blue;case"gray":return h.gray;case"darkGray":return h.darkGray;case"green":return h.green;case"lightBlue":return h.lightBlue;case"red":return h.red;case"yellow":return h.yellow;default:a;throw c("unrecoverableViolation")(" Invalid color in getCometBadgeColorStyle","comet_ui")}}g["default"]=a}),98);
__d("CometBadge.react",["BaseStyledBadge.react","getCometBadgeColorStyle","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={borderDark:{borderTopColor:"x1o7swki",borderEndColor:"xp7cj6j",borderBottomColor:"x1bkzgmd",borderStartColor:"xl02xpf",$$css:!0},borderWhite:{borderTopColor:"x6zyg47",borderEndColor:"x1xm1mqw",borderBottomColor:"xpn8fn3",borderStartColor:"xtct9fg",$$css:!0},isNoneProfileBadge:{marginEnd:"x1emribx",$$css:!0}},j={6:{marginStart:"x1w4ip6v",width:"x1wc42o8",$$css:!0},7:{marginStart:"x1b2warb",width:"xaw7vzs",$$css:!0},8:{marginStart:"xsgj6o6",width:"xsmyaan",$$css:!0},9:{marginStart:"x1hvlnb8",width:"x197psvt",$$css:!0},10:{marginStart:"x8j4wrb",width:"x1a00udw",$$css:!0},12:{marginStart:"x1mnrxsn",width:"x1xp8n7a",$$css:!0},14:{marginStart:"xnfveip",width:"x1kl0l3y",$$css:!0},15:{marginStart:"xpw6ms",width:"xpcibvc",$$css:!0},18:{marginStart:"x1cxxrxm",width:"xo7uitg",$$css:!0},20:{marginStart:"x17adc0v",width:"x1849jeq",$$css:!0},22:{marginStart:"x1hy63sm",width:"x1npj6m0",$$css:!0},24:{marginStart:"x16n37ib",width:"x14qfxbe",$$css:!0},32:{marginStart:"x1d52u69",width:"x1useyqa",$$css:!0},41:{marginStart:"x1v860g0",width:"x1yaf2ey",$$css:!0}},k={6:{marginStart:"x1mnrxsn",width:"xsmyaan",$$css:!0},7:{marginStart:"xnfveip",width:"x6jxa94",$$css:!0},8:{marginStart:"x1i64zmx",width:"x1kky2od",$$css:!0},9:{marginStart:"x1cxxrxm",width:"x1xp8n7a",$$css:!0},10:{marginStart:"x17adc0v",width:"xw4jnvo",$$css:!0},12:{marginStart:"x16n37ib",width:"xvy4d1p",$$css:!0},14:{marginStart:"xwycmqc",width:"xgd8bvy",$$css:!0},15:{marginStart:"x13ibhcj",width:"x1849jeq",$$css:!0},18:{marginStart:"x1sliqq",width:"x14qfxbe",$$css:!0},20:{marginStart:"xmn8rco",width:"x100vrsf",$$css:!0},22:{marginStart:"x1tv9t25",width:"x187nhsf",$$css:!0},24:{marginStart:"xmupa6y",width:"x1useyqa",$$css:!0},32:{marginStart:"x8vdgqj",width:"x1fu8urw",$$css:!0},41:{marginStart:"x2vb376",width:"x1pigqs1",$$css:!0}};function a(a){var b=a.border;b=b===void 0?"none":b;var d=a.children,e=a.color;e=e===void 0?"blue":e;var f=a.colorOverride,g=a.isProfileBadge;g=g===void 0?!1:g;var l=a.label,m=a.size;m=m===void 0?8:m;var n=a.wide;n=n===void 0?"normal":n;a=babelHelpers.objectWithoutPropertiesLoose(a,["border","children","color","colorOverride","isProfileBadge","label","size","wide"]);return h.jsx(c("BaseStyledBadge.react"),babelHelpers["extends"]({},a,{"aria-label":l,border:b!=="none",colorXStyle:(a=f)!=null?a:c("getCometBadgeColorStyle")(e),size:m,xstyle:[!g&&i.isNoneProfileBadge,b==="white"&&i.borderWhite,b==="dark"&&i.borderDark,n==="wide"&&j[m],n==="extraWide"&&k[m]],children:d}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometProfilePhotoAvailabilityBadge.react",["fbt","CometBadge.react","CometPressableChildrenWithOverlay.react","CometPressableOverlay.react","CometScreenReaderText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("Active");function a(a){var b=a.pressed;a=a.size;return i.jsxs("div",{className:"x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x6ikm8r x10wlt62 x1n2onr6",children:[i.jsx(c("CometPressableChildrenWithOverlay.react"),{overlay:i.jsx(c("CometPressableOverlay.react"),{pressed:b,radius:"50%"}),children:i.jsx(c("CometBadge.react"),{color:"green",isProfileBadge:!0,size:a})}),i.jsx(c("CometScreenReaderText.react"),{text:j})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useServerTime",["JSScheduler","ServerTime","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useState,j=6e4,k=new Set(),l=null,m=!1;function n(){k.forEach(function(a){return a()}),m=!1}function o(a){a===void 0&&(a=j),l=window.setInterval(function(){m||(m=!0,d("JSScheduler").scheduleSpeculativeCallback(n))},a)}function p(){k.size===0&&(window.clearInterval(l),l=null)}function q(a,b){b===void 0&&(b=j);k.add(a);l==null&&o(b);return function(){k["delete"](a),p()}}function r(){return new Date(d("ServerTime").getMillis())}function a(a){a===void 0&&(a=j);var b=i(function(){return r()}),c=b[0],d=b[1],e=function(){return d(r())};h(function(){return q(e,a)},[a]);return c}g["default"]=a}),98);
__d("CometRelativeTimestamp.react",["fbt","react","useServerTime"],(function(a,b,c,d,e,f,g,h){"use strict";e=d("react");function i(a,b){if(b==="minimized")return h._("1m");else if(b==="shortened")return h._("Just now");return h._("a few seconds ago")}function j(a,b){return b==="minimized"?h._("1m"):h._("in a few seconds")}function k(a,b){if(b==="minimized")return h._({"*":"{minutes}m"},[h._param("minutes",a,[0])]);else if(b==="shortened")return h._({"*":"{number} mins","_1":"1 min"},[h._plural(a,"number")]);return h._({"*":"{number} minutes ago","_1":"about a minute ago"},[h._plural(a,"number")])}function l(a,b){if(b==="minimized")return h._({"*":"in {minutes}m"},[h._param("minutes",a,[0])]);else if(b==="shortened")return h._({"*":"in {number} mins","_1":"in 1 min"},[h._plural(a,"number")]);return h._({"*":"in {number} minutes","_1":"in about a minute"},[h._plural(a,"number")])}function m(a,b){if(b==="minimized")return h._("{hours}h",[h._param("hours",a)]);else if(b==="shortened")return h._({"*":"{number} hrs","_1":"1 hr"},[h._plural(a,"number")]);return h._({"*":"{number} hours ago","_1":"about an hour ago"},[h._plural(a,"number")])}function n(a,b){if(b==="minimized")return h._("in {hours}h",[h._param("hours",a)]);else if(b==="shortened")return h._({"*":"in {number} hrs","_1":"in 1 hr"},[h._plural(a,"number")]);return h._({"*":"in {number} hours","_1":"in about an hour"},[h._plural(a,"number")])}function o(a,b){if(b==="minimized")return h._("{days}d",[h._param("days",a)]);else if(b==="shortened")return h._({"*":"{number} days","_1":"1 day"},[h._plural(a,"number")]);return h._({"*":"{number} days ago","_1":"a day ago"},[h._plural(a,"number")])}function p(a,b){if(b==="minimized")return h._("in {days}d",[h._param("days",a)]);else if(b==="shortened")return h._({"*":"in {number} days","_1":"in 1 day"},[h._plural(a,"number")]);return h._({"*":"in {number} days","_1":"in a day"},[h._plural(a,"number")])}function q(a,b){if(b==="minimized")return h._("{weeks}w",[h._param("weeks",a)]);else if(b==="shortened")return h._({"*":"{number} wks","_1":"1 wk"},[h._plural(a,"number")]);return h._({"*":"{number} weeks ago","_1":"a week ago"},[h._plural(a,"number")])}function r(a,b){if(b==="minimized")return h._("in {weeks}w",[h._param("weeks",a)]);else if(b==="shortened")return h._({"*":"in {number} wks","_1":"in 1 wk"},[h._plural(a,"number")]);return h._({"*":"in {number} weeks","_1":"in a week"},[h._plural(a,"number")])}function s(a,b){if(b==="minimized")return h._("{years}y",[h._param("years",a)]);else if(b==="shortened")return h._({"*":"{number} yrs","_1":"1 yr"},[h._plural(a,"number")]);return h._({"*":"{number} years ago","_1":"a year ago"},[h._plural(a,"number")])}function t(a,b){if(b==="minimized")return h._("in {years}y",[h._param("years",a)]);else if(b==="shortened")return h._({"*":"in {number} yrs","_1":"in 1 yr"},[h._plural(a,"number")]);return h._({"*":"in {number} years","_1":"in a year"},[h._plural(a,"number")])}var u=60,v=60,w=24,x=7,y=365;function z(a,b,c){c===void 0&&(c="normal");a=(a.valueOf()-b.valueOf())/1e3;if(a<u)return i(a,c);b=a/u;a=Math.floor(b);if(a<v)return k(a,c);a=b/v;b=Math.floor(a);if(b<w)return m(b,c);b=a/w;a=Math.floor(b);if(a<x)return o(a,c);else if(b<y){a=Math.floor(b/x);return q(a,c)}a=Math.floor(b/y);return s(a,c)}function a(a,b,c){c===void 0&&(c="normal");b=(b.valueOf()-a.valueOf())/1e3;if(b<u)return j(b,c);a=b/u;b=Math.floor(a);if(b<v)return l(b,c);b=a/v;a=Math.floor(a/v);if(a<w)return n(a,c);a=b/w;b=Math.floor(a);if(b<x)return p(b,c);else if(a<y){b=Math.floor(a/x);return r(b,c)}b=Math.floor(a/y);return t(b,c)}function b(a){var b=a.date;a=a.format;var d=c("useServerTime")();d=z(d,b,a);return d}b.displayName=b.name+" [from "+f.id+"]";b.getRelativeTimestamp=z;b.getRelativeTimestampInFuture=a;g["default"]=b}),98);
__d("MWChatActivePill.react",["CometPressableChildrenWithOverlay.react","CometPressableOverlay.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={badge:{backgroundColor:"xbb192p",borderTopStartRadius:"xhw592a",borderTopEndRadius:"xwihvcr",borderBottomEndRadius:"x7wuybg",borderBottomStartRadius:"xb9tvrk",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",boxSizing:"x9f619",display:"x78zum5",fontWeight:"x117nqv4",justifyContent:"xl56j7k",marginTop:"x1kgmq87",marginEnd:"xwrv7xz",marginBottom:"xmgb6t1",marginStart:"x8182xy",paddingStart:"x1h0ha7o",paddingEnd:"xg83lxy",$$css:!0},badgeContainer:{display:"x78zum5",justifyContent:"xl56j7k",maxWidth:"x193iq5w",$$css:!0},inner:{color:"x6u5lvz",fontSize:"x190qgfh",lineHeight:"x132q4wb",whiteSpace:"xuxw1ft",$$css:!0}},j={"card-background":{borderTopColor:"x6zyg47",borderEndColor:"x1xm1mqw",borderBottomColor:"xpn8fn3",borderStartColor:"xtct9fg",$$css:!0},"secondary-button-background-floating":{borderTopColor:"x1bmsi4x",borderEndColor:"xrcl4xe",borderBottomColor:"x17j0sh5",borderStartColor:"x14li8yl",$$css:!0},"web-wash":{borderTopColor:"x1516sgx",borderEndColor:"x1fjwj1m",borderBottomColor:"x1khxuxv",borderStartColor:"x4gm0zg",$$css:!0}};function a(a){var b=a.border;b=b===void 0?"card-background":b;var d=a.children;a=a.pressed;return h.jsx("div",{className:"x78zum5 xl56j7k x193iq5w",children:h.jsx(c("CometPressableChildrenWithOverlay.react"),{overlay:h.jsx(c("CometPressableOverlay.react"),{pressed:a,radius:7}),children:h.jsx("div",{className:c("stylex")(i.badge,j[b]),children:h.jsx("span",{className:"x6u5lvz x190qgfh x132q4wb xuxw1ft",children:d})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometProfilePhotoLastActiveTimeBadge.react",["CometRelativeTimestamp.react","MWChatActivePill.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.border;b=b===void 0?"card-background":b;var d=a.pressed;a=a.time;return h.jsx(c("MWChatActivePill.react"),{border:b,pressed:d,children:h.jsx(c("CometRelativeTimestamp.react"),{date:new Date(a*1e3),format:"minimized"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("profilePhotoUtils",["Locale","memoizeWithArgs"],(function(a,b,c,d,e,f,g){"use strict";a=c("memoizeWithArgs")(function(a,b){b===void 0&&(b=!1);a=Math.sqrt(2*a*a)-a;a=Math.round(Math.sqrt(a*a/2));if(b)if(d("Locale").isRTL())return{left:a,top:a,transform:"translate(-50%, -50%)"};else return{right:a,top:a,transform:"translate(50%, -50%)"};else if(d("Locale").isRTL())return{bottom:a,left:a,transform:"translate(-50%, 50%)"};else return{bottom:a,right:a,transform:"translate(50%, 50%)"}},function(a,b){return String(b)+String(a)});b=c("memoizeWithArgs")(function(a){switch(a){case 24:case 32:case 36:case 40:return 2;case 48:case 56:case 60:return 3;case 132:default:return 4}},function(a){return String(a)});e=c("memoizeWithArgs")(function(a,b){if(b==="availabilityBadge")switch(a){case 16:case 20:case 24:return[6,1.5];case 28:return[7,2];case 32:case 36:return[8,2];case 40:case 48:return[9,2];case 56:case 60:return[10,2];case 72:return[12,2];case 80:case 88:return[14,2];case 96:case 100:return[15,2];case 120:case 132:case 168:return[20,4];default:a;return[8,2]}switch(a){case 16:case 20:case 24:return[6,1.5];case 28:return[7,1.5];case 32:return[8,2];case 36:return[9,2];case 40:return[10,2];case 48:return[12,2];case 56:return[14,2];case 60:return[15,2];case 72:return[18,2];case 80:return[20,4];case 88:return[22,4];case 96:case 100:return[24,4];case 120:case 132:return[32,4];case 168:return[41,4];default:a;return[8,2]}},function(a,b){return String(a)+b});g.getBadgePosition=a;g.getStoryRingSize=b;g.getBadgeSizeAndStrokeWidth=e}),98);
__d("CometUserActivity",["BaseEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h=5e3,i=500,j=-5,k=Date.now(),l=k,m=!1,n=Date.now(),o=document.hasFocus?document.hasFocus():!0,p=0,q=Date.now(),r=-1,s=-1,t=!1,u=!1,v=new(c("BaseEventEmitter"))();function b(a){var b=w(function(c,d){b.unsubscribe(),a(d)});return b}function w(a){var b=v.addListener("user_activity",function(b){return a("user_activity",b)});return{unsubscribe:function(){return b.remove()}}}function d(a){return new Date().getTime()-k<(a!=null?a:h)}function e(){return o}function f(){return m}function x(){o=!0,m=!1}function y(){return n}function z(){return k}function A(a){p=a}function B(){return q}function C(){return t}function D(){return u}function E(){return l}function F(){k=Date.now(),l=k,m=!1,n=Date.now(),o=document.hasFocus?document.hasFocus():!0,p=0,q=Date.now(),r=-1,s=-1,t=!1,u=!1}function G(a){a.unsubscribe()}function H(a){J(a,i)}function I(a){J(a,0)}function J(b,c){c===void 0&&(c=0);var d=a.MouseEvent,e=a.KeyboardEvent;if(d&&b instanceof d){if(/^mouse(enter|leave|move|out|over)$/.test(b.type)&&b.pageX==r&&b.pageY==s)return;r=b.pageX;s=b.pageY}else e&&b instanceof e&&(u=!0);(b.type==="click"||b.type==="dblclick"||b.type==="contextmenu")&&(t=!0);k=Date.now();d=k-l;d>=c?(l=k,o||(q=k),d>=(p||h)&&(m=!0,n=k),v.emit("user_activity",{event:b,idleness:d,last_inform:l})):d<j&&(l=k)}function K(a){o=!0,n=Date.now(),I(a)}function L(){o=!1,m=!0,q=Date.now()}window.addEventListener("scroll",H,{capture:!0,passive:!0});window.addEventListener("focus",K,{capture:!1,passive:!0});window.addEventListener("blur",L,{capture:!1,passive:!0});(function(){var a=document.documentElement;if(a==null)return;["keydown","mouseover","mousemove","click"].forEach(function(b){a.addEventListener(b,H,{capture:!0,passive:!0})})})();g.EVENT_INTERVAL_MS=i;g.subscribeOnce=b;g.subscribe=w;g.isActive=d;g.isOnTab=e;g.hasBeenInactive=f;g.resetActiveStatus=x;g.getLastInActiveEnds=y;g.getLastActive=z;g.setIdleTime=A;g.getLastLeaveTime=B;g.hasClicked=C;g.hasInteractedWithKeyboard=D;g.getLastInformTime=E;g.reset=F;g.unsubscribe=G}),98);
__d("UserActivity",["cr:1634616"],(function(a,b,c,d,e,f){e.exports=b("cr:1634616")}),null);
__d("FalcoAppUniverse",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({FACEBOOK:1,INSTAGRAM:2});c=a;f["default"]=c}),66);
__d("Queue",[],(function(a,b,c,d,e,f){var g={};a=function(){function a(a){this._timeout=null,this._interval=(a==null?void 0:a.interval)||0,this._processor=a==null?void 0:a.processor,this._queue=[],this._stopped=!0}var b=a.prototype;b._dispatch=function(a){var b=this;a===void 0;if(this._stopped||this._queue.length===0)return;a=this._processor;if(a==null){this._stopped=!0;throw new Error("No processor available")}var c=this._interval;if(c!=null)a.call(this,this._queue.shift()),this._timeout=setTimeout(function(){return b._dispatch()},c);else while(this._queue.length)a.call(this,this._queue.shift())};b.enqueue=function(a){this._processor&&!this._stopped?this._processor(a):this._queue.push(a);return this};b.start=function(a){a&&(this._processor=a);this._stopped=!1;this._dispatch();return this};b.isStarted=function(){return!this._stopped};b.dispatch=function(){this._dispatch(!0)};b.stop=function(a){this._stopped=!0;a&&this._timeout!=null&&clearTimeout(this._timeout);return this};b.merge=function(a,b){if(b){(b=this._queue).unshift.apply(b,a._queue)}else{(b=this._queue).push.apply(b,a._queue)}a._queue=[];this._dispatch();return this};b.getLength=function(){return this._queue.length};a.get=function(b,c){var d;b in g?d=g[b]:d=g[b]=new a(c);return d};a.exists=function(a){return a in g};a.remove=function(a){return delete g[a]};return a}();f["default"]=a}),66);
__d("FalcoLoggerTransports",["AnalyticsCoreData","Banzai","ExecutionEnvironment","FBLogger","FalcoAppUniverse","FalcoUtils","ODS","PersistedQueue","Queue","WebSession","performanceAbsoluteNow","promiseDone","requireDeferredForDisplay","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferredForDisplay")("TransportSelectingClientSingletonConditional").__setRef("FalcoLoggerTransports"),i=5*1024,j=(b=c("AnalyticsCoreData").max_delay_br_queue)!=null?b:60*1e3,k=(e=c("AnalyticsCoreData").max_delay_br_queue_immediate)!=null?e:1e3,l="falco:",m=new(c("Queue"))(),n=5e3,o=6e4,p=c("uuidv4")(),q="ods_web_batch",r=new Map(),s=new Set(),t=new Set(),u=(f=c("FalcoAppUniverse").cast(c("AnalyticsCoreData").app_universe))!=null?f:1,v=[],w=0,x,y=!1,z=!1,A=!1,B=!0,C=!1,D=Date.now()-o,E=1;W();for(e=(b=c("AnalyticsCoreData").stateful_events_list_for_br)!=null?b:[],f=Array.isArray(e),b=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var F;if(f){if(b>=e.length)break;F=e[b++]}else{b=e.next();if(b.done)break;F=b.value}F=F;s.add(F)}for(b=(F=c("AnalyticsCoreData").stateless_non_fb_events_for_br)!=null?F:[],f=Array.isArray(b),e=0,b=f?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(f){if(e>=b.length)break;F=b[e++]}else{e=b.next();if(e.done)break;F=e.value}F=F;t.add(F)}function G(){return c("AnalyticsCoreData").enable_bladerunner&&!c("ExecutionEnvironment").isInWorker}function H(a,b){P(b.item.name,"js.br.add_to_batch",1,!0);var c=b.item.extra.length;w+c>i&&(clearTimeout(x),I());v.push([a,b]);w+=c}function I(){x=null;y=!1;var a=v;N("js.br.send_batch",a.map(function(a){return a[1].item}));if(!C){O("js.br.init_not_complete.log",a.length);var b=function(){var b=a[c],d=b[0],e=b[1];P(e.item.name,"js.br.banzai_fallback_for_init_not_complete",1,!0);((b=e.item.logImmediate)!=null?b:!1)?Q.logImmediately([e.item],function(a){return d.markItem(e,a)}):Q.log([e.item],function(a){return d.markItem(e,a)})};for(var c=0;c<a.length;c++)b()}else m.enqueue(function(b){return b.log(a.map(function(a){return a[1].item}),function(b){if(!b){O("js.br.banzai_fallback",a.length);var c=function(){var c=a[d],b=c[0],e=c[1];P(e.item.name,"js.br.banzai_fallback_for_failure",1,!0);((c=e.item.logImmediate)!=null?c:!1)?Q.logImmediately([e.item],function(a){return b.markItem(e,a)}):Q.log([e.item],function(a){return b.markItem(e,a)})};for(var d=0;d<a.length;d++)c();return}for(c=0;c<a.length;c++){var e=a[c],f=e[0];e=e[1];P(e.item.name,"js.br.success_callback.batch.send_batch",1,!0);f.markItem(e,b)}})});v=[];w=0}function J(a){var b,d=null;if((b=c("AnalyticsCoreData").br_stateful_batching_exp)!=null?b:!1){((b=c("AnalyticsCoreData").enable_br_stateful_batching)!=null?b:!1)?d=["exp:falco_js_br_stateful_batching:on"]:d=["exp:falco_js_br_stateful_batching:off"]}return{events:a.map(function(a){return{name:a.name,extra:a.extra,rate:a.policy.r,time:a.time/1e3,tag:0,shouldAddState:a.shouldAddState,identity:L(a.identity),expTags:d}})}}function K(a){var b;a={deviceId:c("AnalyticsCoreData").device_id,familyDeviceId:null,osBuildNumber:null,sessionId:a,appId:c("AnalyticsCoreData").app_id,appVersion:(a=c("AnalyticsCoreData").app_version)!=null?a:null,bundleId:null,consentState:null,identity:null,pushPhase:c("AnalyticsCoreData").push_phase};((b=(b=c("AnalyticsCoreData").stateful_events_list_for_br)==null?void 0:b.length)!=null?b:0)>0&&(a.ambientState=c("AnalyticsCoreData").state_for_br);a.identity=L(c("AnalyticsCoreData").identity);return Object.freeze(a)}function L(a){try{if(u===2){var b=a==null?void 0:a.appScopedIdentity;if(b!==void 0)return{appScopedIdentity:{uid:b,identifier:b,claims:[]}}}else{b=a==null?void 0:a.fbIdentity;if(b!==void 0)return{facebookIdentity:{actorId:b.actorId,accountId:b.accountId,claims:[]}}}}catch(a){d("ODS").bumpEntityKey(1344,"js.br.identity.propogation","exception.while.generating.identity",1)}return null}function M(a,b){for(var e=0;e<a.length;e++){var f,g=a[e];P(g.name,"js.banzai.posting_event",1,!1);f=(f={},f.e=g.extra,f.r=g.policy.r,f.d=c("AnalyticsCoreData").device_id,f.s=d("WebSession").getId(),f.t=g.time,f);g.privacyContext&&(f.p=g.privacyContext);var h=g.identity;h&&(f.id=h);c("Banzai").post(l+g.name,f,b)}N("planes.banzai.write_to_transport",a)}function N(a,b){var c=0;for(var d=0;d<b.length;d++){var e=b[d];e.name!==q&&(c+=1)}c>0&&O(a,c)}function O(a,b){var e="falco.fabric.www."+c("AnalyticsCoreData").push_phase;d("ODS").bumpEntityKey(1344,e,a,b)}function P(a,b,c,e){if(a===q)return!1;d("ODS").bumpEntityKey(1344,"falco.event."+a,b,c);e&&O(b,c);return!0}var Q={log:function(a,b){N("js.banzai.post.log",a),M(a,c("Banzai").BASIC),b(!0)},logImmediately:function(a,b){N("js.banzai.post.log_immediately",a),M(a,c("Banzai").VITAL),b(!0)},logCritical:function(a,b){N("js.banzai.post.log_critical",a),M(a,{signal:!0,retry:!0}),b(!0)}};function R(a){W();var b=S(a,"banzai_data_loss","log"),d=S(a,"banzai_data_loss","logImmediately"),e=S(a,"banzai_data_loss","logCritical"),f=S(a,"bladerunner_data_loss",""),g=S(a,"bladerunner_data_loss","logCritical");O("js.br_data_loss.posted."+a,1);if(C&&B)try{m.enqueue(function(b){return b.log([f],function(b){if(!b){O("js.br.transport_failure."+a,1);Q.logCritical([g],function(b){O("js.br.failure_fallback_success_callback."+a,1)});return}O("js.br.success_callback."+a,1)})})}catch(b){O("js.br.error_enqueueing."+a,1),Q.logCritical([g],function(b){O("js.br.enqueuing_fallback_success_callback."+a,1)})}else B||O("js.br.failed."+a,1),C||O("js.br.init_not_complete."+a,1),Q.logCritical([g],function(b){O("js.br.init_fallback_success_callback."+a,1)});M([b],c("Banzai").BASIC);M([d],c("Banzai").VITAL);M([e],{signal:!0,retry:!0})}function S(a,b,d){return{name:b,time:c("performanceAbsoluteNow")(),policy:{r:1},extra:JSON.stringify({event_index:a,falco_js_connection_id:p,logging_mode:d,logging_flow_flag:"original_flow"})}}function T(){D+n<Date.now()&&(R(E),D=Date.now(),E++)}function U(){window.setTimeout(function(){T(),E<=40&&U()},o)}function V(a){m.start(function(b){return b({log:function(d,b){N("planes.bladerunner.write_to_transport",d);var e=JSON.stringify(J(d));a?c("AnalyticsCoreData").enable_ack?c("promiseDone")(a.amendWithAck(e),function(a){N("planes.bladerunner.ack_received"+a.toString(),d),b(a)},function(){N("planes.bladerunner.ack_failure",d),b(!1)}):(a.amendWithoutAck(e),N("planes.bladerunner.write_without_ack",d)):(N("planes.bladerunner.request_stream_null",d),b(!1))},logImmediately:function(b,a){this.log(b,a)},logCritical:function(b,a){this.log(b,a)}})})}function W(){if(z)return;C=!1;if(!G())return;h.onReady(function(a){if(!a){B=!1;m.start(function(a){return a(Q)});return}a=a;var b={onTermination:function(a){a.message==="Stream closed"?(m.stop(!0),z=!1):(B=!1,u===2&&(d("ODS").bumpEntityKey(1344,"falco.ig.br.experiment","exception.when.br.stream.is.rejected",1),c("FBLogger")("ig_web","br_stream_rejected").catching(a).warn("BladeRunner stream is rejected")),m.start(function(a){return a(Q)}))},onFlowStatus:function(){}};c("promiseDone")(a.requestStream({method:"Falco"},JSON.stringify(K(d("WebSession").getId())),b,{requestId:""}).then(function(b){a=b,V(a),C=!0})["catch"](function(a){m.stop(!0),z=!1}))});z=!0}function X(a){var b=a.name;if(!G()||!B){u!==1&&P(b,"js.use_bladerunner.failed.non_fb_event.br_not_enabled",1,!0);return!1}if(s.has(b)){a.shouldAddState=!0;return!0}if(u!==1&&!t.has(b)){P(b,"js.use_bladerunner.failed.non_fb_event.event_not_in_list",1,!0);return!1}a.policy.s!==1&&u!==1&&P(b,"js.use_bladerunner.failed.non_fb_event.policy_not_stateless",1,!0);return a.policy.s===1}function Y(a){if(a==="")return null;if(r.has(a))return r.get(a);else{var b={claim:""},c=a.split("^#");if(c.length>=4){var d=c[0],e=c[1],f=c[2];c=c[3];f!==""?b={appScopedIdentity:f,claim:c}:d!==""&&(b={fbIdentity:{accountId:d,actorId:e},claim:c});r.set(a,b)}return b}}function a(){if(A)return;A=!0;c("PersistedQueue").setHandler("falco_queue_log",function(b){var c,d=b.getQueueNameSuffix(),e=Y(d);while(c=b.dequeueItem())(function(c){X(c.item)?(P(c.item.name,"js.use_bladerunner.log",1,!0),W(),x==null&&(x=setTimeout(I,j)),e&&!a(d)&&(c.item.identity=e),H(b,c)):(P(c.item.name,"js.use_banzai.log",1,!0),e&&(c.item.identity=e),Q.log([c.item],function(a){return b.markItem(c,a)}))})(c)});c("PersistedQueue").setHandler("falco_queue_immediately",function(b){var d,e=b.getQueueNameSuffix(),f=Y(e);while(d=b.dequeueItem())(function(d){X(d.item)?(P(d.item.name,"js.use_bladerunner.log_immediately",1,!0),W(),(x==null||!y)&&(clearTimeout(x),x=setTimeout(I,k),y=!0),d.item.logImmediate=!0,f&&!a(e)&&(d.item.identity=f),H(b,d),c("PersistedQueue").isPersistenceAllowed()||(P(d.item.name,"js.br.send_immediately_no_persistence",1,!0),I())):(P(d.item.name,"js.use_banzai.log_immediately",1,!0),f&&(d.item.identity=f),Q.logImmediately([d.item],function(a){return b.markItem(d,a)}))})(d)});c("PersistedQueue").setHandler("falco_queue_critical",function(b){var c,d=b.getQueueNameSuffix(),e=Y(d);while(c=b.dequeueItem())(function(c){var f=c.item;X(f)?(P(f.name,"js.use_bladerunner.log_critical",1,!0),W(),!C?(P(f.name,"js.br.init_not_complete.logCritical",1,!0),e&&(f.identity=e),Q.logCritical([f],function(a){return b.markItem(c,a)})):(e&&!a(d)&&(f.identity=e),m.enqueue(function(a){return a.logCritical([f],function(a){if(!a){O("js.br.banzai_fallback.critical",1);P(c.item.name,"js.br.banzai_fallback_for_failure.critical",1,!0);!f.identity&&e&&(f.identity=e);Q.logCritical([f],function(a){return b.markItem(c,a)});return}P(c.item.name,"js.br.success_callback.batch.critical",1,!0);b.markItem(c,a)})}),a(d)||P(c.item.name,"js.bladerunner.identity.mismatch",1,!0))):(e&&(f.identity=e),P(f.name,"js.use_banzai.log_critical",1,!0),Q.logCritical([f],function(a){return b.markItem(c,a)}))})(c)});c("AnalyticsCoreData").enable_dataloss_timer&&(W(),T(),U());function a(a){try{var b=d("FalcoUtils").identityToString(c("AnalyticsCoreData").identity);return a===b}catch(a){d("ODS").bumpEntityKey(1344,"js.br.identity.check","exception.when.comparing.with.current.user.identity",1);return!0}}}g.attach=a}),98);