define(["./when-92c6cf3c","./Cartesian2-b72655a5","./buildModuleUrl-9eef8841","./Cartesian3-3a8bdb0b","./ComponentDatatype-98414d16","./Check-52a7d806","./GeometryAttribute-f47bd1cb","./GeometryAttributes-7f66ea53","./IndexDatatype-86677ec4","./Math-ecf82623","./FeatureDetection-cec0163f","./VertexFormat-f496a3f1","./WallGeometryLibrary-d4f25ef7","./Cartographic-a2c313d7","./Event-3390cd7d","./RuntimeError-c6a62a80","./WebGLConstants-42651efd","./Cartesian4-72b88c9e","./arrayRemoveDuplicates-a6924649","./PolylinePipeline-f0970409","./EllipsoidGeodesic-03c935a0","./EllipsoidRhumbLine-b1a766ae","./IntersectionTests-6e80d61c","./Plane-33393da8"],(function(e,t,o,n,i,a,r,s,m,p,u,l,c,h,g,d,v,y,f,w,_,b,A,x){"use strict";var k=new n.o,C=new n.o,L=new n.o,E=new n.o,F=new n.o,D=new n.o,H=new n.o,P=new n.o;function T(o){var i=(o=e.u(o,e.u.EMPTY_OBJECT)).positions,r=o.maximumHeights,s=o.minimumHeights;if(!e.e(i))throw new a.t("options.positions is required.");if(e.e(r)&&r.length!==i.length)throw new a.t("options.positions and options.maximumHeights must have the same length.");if(e.e(s)&&s.length!==i.length)throw new a.t("options.positions and options.minimumHeights must have the same length.");var m=e.u(o.vertexFormat,l.n.DEFAULT),u=e.u(o.granularity,p.e.RADIANS_PER_DEGREE),c=e.u(o.ellipsoid,t.t.WGS84);this._positions=i,this._minimumHeights=s,this._maximumHeights=r,this._vertexFormat=l.n.clone(m),this._granularity=u,this._ellipsoid=t.t.clone(c),this._enuCenter=o.enuCenter,this._workerName="createWallGeometry";var h=1+i.length*n.o.packedLength+2;e.e(s)&&(h+=s.length),e.e(r)&&(h+=r.length),this.packedLength=h+t.t.packedLength+l.n.packedLength+1,this.packedLength+=n.o.packedLength}T.pack=function(o,i,r){if(!e.e(o))throw new a.t("value is required");if(!e.e(i))throw new a.t("array is required");r=e.u(r,0);var s,m=o._positions,p=m.length;for(i[r++]=p,s=0;s<p;++s,r+=n.o.packedLength)n.o.pack(m[s],i,r);var u=o._minimumHeights;if(p=e.e(u)?u.length:0,i[r++]=p,e.e(u))for(s=0;s<p;++s)i[r++]=u[s];var c=o._maximumHeights;if(p=e.e(c)?c.length:0,i[r++]=p,e.e(c))for(s=0;s<p;++s)i[r++]=c[s];return t.t.pack(o._ellipsoid,i,r),r+=t.t.packedLength,l.n.pack(o._vertexFormat,i,r),r+=l.n.packedLength,i[r++]=o._granularity,e.e(o._enuCenter)?n.o.pack(o._enuCenter,i,r):n.o.pack(n.o.ZERO,i,r),i};var G=t.t.clone(t.t.UNIT_SPHERE),O=new l.n,z={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:G,vertexFormat:O,granularity:void 0,enuCenter:void 0};return T.unpack=function(o,i,r){if(!e.e(o))throw new a.t("array is required");i=e.u(i,0);var s,m,p,u=o[i++],c=new Array(u);for(s=0;s<u;++s,i+=n.o.packedLength)c[s]=n.o.unpack(o,i);if((u=o[i++])>0)for(m=new Array(u),s=0;s<u;++s)m[s]=o[i++];if((u=o[i++])>0)for(p=new Array(u),s=0;s<u;++s)p[s]=o[i++];var h=t.t.unpack(o,i,G);i+=t.t.packedLength;var g=l.n.unpack(o,i,O);i+=l.n.packedLength;var d=o[i++],v=n.o.unpack(o,i);return n.o.equals(v,n.o.ZERO)&&(v=void 0),e.e(r)?(r._positions=c,r._minimumHeights=m,r._maximumHeights=p,r._ellipsoid=t.t.clone(h,r._ellipsoid),r._vertexFormat=l.n.clone(g,r._vertexFormat),r._granularity=d,r._enuCenter=v,r):(z.positions=c,z.minimumHeights=m,z.maximumHeights=p,z.granularity=d,z.enuCenter=v,new T(z))},T.fromConstantHeights=function(t){var o=(t=e.u(t,e.u.EMPTY_OBJECT)).positions;if(!e.e(o))throw new a.t("options.positions is required.");var n,i,r=t.minimumHeight,s=t.maximumHeight,m=e.e(r),p=e.e(s);if(m||p){var u=o.length;n=m?new Array(u):void 0,i=p?new Array(u):void 0;for(var l=0;l<u;++l)m&&(n[l]=r),p&&(i[l]=s)}return new T({positions:o,maximumHeights:i,minimumHeights:n,ellipsoid:t.ellipsoid,vertexFormat:t.vertexFormat})},T.createGeometry=function(t){var a=t._positions,l=t._minimumHeights,h=t._maximumHeights,g=t._vertexFormat,d=t._granularity,v=t._ellipsoid,y=t._enuCenter,f=c.D.computePositions(v,a,h,l,d,!0,y);if(e.e(f.pos)){var w;e.e(y)&&(w=r.m.eastNorthUpToFixedFrame(y));var _,b=f.pos.bottomPositions,A=f.pos.topPositions,x=f.pos.numCorners,T=A.length,G=2*T,O=g.position?new Float64Array(G):void 0,z=g.normal?new Float32Array(G):void 0,R=g.tangent?new Float32Array(G):void 0,I=g.bitangent?new Float32Array(G):void 0,S=g.st?new Float32Array(G/3*2):void 0,q=0,N=0,U=0,B=0,M=0,W=P,Z=H,J=D,V=!0,Y=0,j=1/((T/=3)-a.length+1);for(_=0;_<T;++_){var K=3*_,Q=n.o.fromArray(A,K,k),X=n.o.fromArray(b,K,C);if(g.position&&(O[q++]=X.x,O[q++]=X.y,O[q++]=X.z,O[q++]=Q.x,O[q++]=Q.y,O[q++]=Q.z),g.st&&(S[M++]=Y,S[M++]=0,S[M++]=Y,S[M++]=1),g.normal||g.tangent||g.bitangent){var $,ee=n.o.clone(n.o.ZERO,F),te=v.scaleToGeodeticSurface(n.o.fromArray(A,K,C),C);if(_+1<T&&($=v.scaleToGeodeticSurface(n.o.fromArray(A,K+3,L),L),ee=n.o.fromArray(A,K+3,F)),V){var oe=n.o.subtract(ee,Q,E),ne=n.o.subtract(te,Q,k);W=n.o.normalize(n.o.cross(ne,oe,W),W),V=!1}n.o.equalsEpsilon($,te,p.e.EPSILON10)?V=!0:(Y+=j,g.tangent&&(Z=n.o.normalize(n.o.subtract($,te,Z),Z)),g.bitangent&&(J=n.o.normalize(n.o.cross(W,Z,J),J))),g.normal&&(e.e(y)&&(u.p.multiplyByPoint(w,W,W),n.o.normalize(W,W)),z[N++]=W.x,z[N++]=W.y,z[N++]=W.z,z[N++]=W.x,z[N++]=W.y,z[N++]=W.z),g.tangent&&(R[B++]=Z.x,R[B++]=Z.y,R[B++]=Z.z,R[B++]=Z.x,R[B++]=Z.y,R[B++]=Z.z),g.bitangent&&(I[U++]=J.x,I[U++]=J.y,I[U++]=J.z,I[U++]=J.x,I[U++]=J.y,I[U++]=J.z)}}var ie=new s.a;g.position&&(ie.position=new r.o({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:O})),g.normal&&(ie.normal=new r.o({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:z})),g.tangent&&(ie.tangent=new r.o({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R})),g.bitangent&&(ie.bitangent=new r.o({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:I})),g.st&&(ie.st=new r.o({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:S}));var ae=G/3;G-=6*(x+1);var re=m.IndexDatatype.createTypedArray(ae,G),se=0;for(_=0;_<ae-2;_+=2){var me=_,pe=_+2,ue=n.o.fromArray(O,3*me,k),le=n.o.fromArray(O,3*pe,C);if(!n.o.equalsEpsilon(ue,le,p.e.EPSILON10)){var ce=_+1,he=_+3;re[se++]=ce,re[se++]=me,re[se++]=he,re[se++]=he,re[se++]=me,re[se++]=pe}}var ge=new r.I({attributes:ie,indices:re,primitiveType:u._0x4b6a27.TRIANGLES,boundingSphere:new o.i.fromVertices(O)});return e.e(t._enuCenter)&&(ge.attributes.position.values.set(f.localPos.topPositions,0),ge.attributes.position.values.set(f.localPos.bottomPositions,ge.attributes.position.values.length/2),ge.attributes.position.componentDatatype=i.ComponentDatatype.FLOAT),ge}},function(o,n){return e.e(n)&&(o=T.unpack(o,n)),o._ellipsoid=t.t.clone(o._ellipsoid),T.createGeometry(o)}}));