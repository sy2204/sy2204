define(["exports","./Check-52a7d806","./when-92c6cf3c","./Math-ecf82623"],(function(e,n,t,r){"use strict";var f=r.e.EPSILON10;e.D=function(e,r,i,c){if(n.o.defined("equalsEpsilon",r),t.e(e)){c=t.u(c,f),i=t.u(i,!1);var u,h,s,l=e.length;if(l<2)return e;for(u=1;u<l&&!r(h=e[u-1],s=e[u],c);++u);if(u===l)return i&&r(e[0],e[e.length-1],c)?e.slice(1):e;for(var o=e.slice(0,u);u<l;++u)r(h,s=e[u],c)||(o.push(s),h=s);return i&&o.length>1&&r(o[0],o[o.length-1],c)&&o.shift(),o}}}));
