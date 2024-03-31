"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4474],{27972:function(e,t,a){a.d(t,{$q:function(){return rf},AK:function(){return Kf},Ab:function(){return jf},B$:function(){return mh},Bt:function(){return Gf},Cf:function(){return uh},EK:function(){return it},ET:function(){return pf},Eo:function(){return yh},F8:function(){return jh},Fc:function(){return xh},GL:function(){return Ef},IO:function(){return Rl},IX:function(){return eU},Ix:function(){return kh},JU:function(){return gh},Jj:function(){return Uh},K9:function(){return B},Ky:function(){return ht},L$:function(){return Fh},Lx:function(){return Ll},Lz:function(){return Kh},Me:function(){return be},Mx:function(){return Nh},PL:function(){return df},PU:function(){return Bf},Pb:function(){return Oh},QT:function(){return af},ST:function(){return Sh},TF:function(){return Mh},TQ:function(){return Fl},UQ:function(){return wf},Ub:function(){return x},W:function(){return of},WA:function(){return U},Wi:function(){return sh},Wu:function(){return ql},Xb:function(){return at},Xk:function(){return ff},Xo:function(){return xl},ar:function(){return bl},at:function(){return lh},b9:function(){return kl},cf:function(){return If},e0:function(){return Ol},fH:function(){return Dh},hJ:function(){return _h},i3:function(){return Uf},iE:function(){return ph},kl:function(){return lf},l7:function(){return Oe},my:function(){return fh},nP:function(){return zf},oe:function(){return yf},pl:function(){return mf},qK:function(){return cf},qY:function(){return bh},r7:function(){return gf},sc:function(){return Tf},u7:function(){return Wl},vh:function(){return Ml},vr:function(){return Qf},xU:function(){return sf},yq:function(){return M},zN:function(){return _f}});var u,l,c=a(9001),h=a(31869),d=a(71711),f=a(56258),m=a(31572),g=a(67604);let p="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V=class V{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};V.UNAUTHENTICATED=new V(null),V.GOOGLE_CREDENTIALS=new V("google-credentials-uid"),V.FIRST_PARTY=new V("first-party-uid"),V.MOCK_USER=new V("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y="9.23.0",v=new d.Yd("@firebase/firestore");function C(){return v.logLevel}function x(e){v.setLogLevel(e)}function N(e,...t){if(v.logLevel<=d.in.DEBUG){let a=t.map($);v.debug(`Firestore (${y}): ${e}`,...a)}}function k(e,...t){if(v.logLevel<=d.in.ERROR){let a=t.map($);v.error(`Firestore (${y}): ${e}`,...a)}}function M(e,...t){if(v.logLevel<=d.in.WARN){let a=t.map($);v.warn(`Firestore (${y}): ${e}`,...a)}}function $(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e="Unexpected state"){let t=`FIRESTORE (${y}) INTERNAL ASSERTION FAILED: `+e;throw k(t),Error(t)}function B(e,t){e||O()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let U=class U extends f.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K=class K{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G=class G{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}};let Q=class Q{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(V.UNAUTHENTICATED))}shutdown(){}};let j=class j{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}};let z=class z{constructor(e){this.t=e,this.currentUser=V.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let a=this.i,s=e=>this.i!==a?(a=this.i,t(e)):Promise.resolve(),u=new K;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new K,e.enqueueRetryable(()=>s(this.currentUser))};let r=()=>{let t=u;e.enqueueRetryable(async()=>{await t.promise,await s(this.currentUser)})},o=e=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new K)}},0),r()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||O(),new G(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||O(),new V(e)}};let W=class W{constructor(e,t,a){this.h=e,this.l=t,this.m=a,this.type="FirstParty",this.user=V.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};let H=class H{constructor(e,t,a){this.h=e,this.l=t,this.m=a}getToken(){return Promise.resolve(new W(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(V.FIRST_PARTY))}shutdown(){}invalidateToken(){}};let J=class J{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};let Y=class Y{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let n=e=>{null!=e.error&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let a=e.token!==this.T;return this.T=e.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let s=e=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>s(e)),setTimeout(()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?s(e):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||O(),this.T=e.token,new J(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=class tt{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,a="";for(;a.length<20;){let u=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(a);else for(let t=0;t<e;t++)a[t]=Math.floor(256*Math.random());return a}(40);for(let l=0;l<u.length;++l)a.length<20&&u[l]<t&&(a+=e.charAt(u[l]%e.length))}return a}};function et(e,t){return e<t?-1:e>t?1:0}function nt(e,t,a){return e.length===t.length&&e.every((e,u)=>a(e,t[u]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it=class it{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),a=Math.floor(1e6*(e-1e3*t));return new it(t,a)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt=class rt{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rt(e)}static min(){return new rt(new it(0,0))}static max(){return new rt(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ot=class ot{constructor(e,t,a){void 0===t?t=0:t>e.length&&O(),void 0===a?a=e.length-t:a>e.length-t&&O(),this.segments=e,this.offset=t,this.len=a}get length(){return this.len}isEqual(e){return 0===ot.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof ot?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,a=this.limit();t<a;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let a=Math.min(e.length,t.length);for(let u=0;u<a;u++){let a=e.get(u),l=t.get(u);if(a<l)return -1;if(a>l)return 1}return e.length<t.length?-1:e.length>t.length?1:0}};let ut=class ut extends ot{construct(e,t,a){return new ut(e,t,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let a of e){if(a.indexOf("//")>=0)throw new U(I.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);t.push(...a.split("/").filter(e=>e.length>0))}return new ut(t)}static emptyPath(){return new ut([])}};let b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let at=class at extends ot{construct(e,t,a){return new at(e,t,a)}static isValidIdentifier(e){return b.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new at(["__name__"])}static fromServerFormat(e){let t=[],a="",u=0,i=()=>{if(0===a.length)throw new U(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(a),a=""},l=!1;for(;u<e.length;){let t=e[u];if("\\"===t){if(u+1===e.length)throw new U(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[u+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new U(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=t,u+=2}else"`"===t?l=!l:"."!==t||l?a+=t:i(),u++}if(i(),l)throw new U(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(t)}static emptyPath(){return new at([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht=class ht{constructor(e){this.path=e}static fromPath(e){return new ht(ut.fromString(e))}static fromName(e){return new ht(ut.fromString(e).popFirst(5))}static empty(){return new ht(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ut.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ut.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ht(new ut(e.slice()))}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lt=class lt{constructor(e,t,a,u){this.indexId=e,this.collectionGroup=t,this.fields=a,this.indexState=u}};function ft(e){return e.fields.find(e=>2===e.kind)}function dt(e){return e.fields.filter(e=>2!==e.kind)}lt.UNKNOWN_ID=-1;let _t=class _t{constructor(e,t){this.fieldPath=e,this.kind=t}};let gt=class gt{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new gt(0,It.min())}};function yt(e,t){let a=e.toTimestamp().seconds,u=e.toTimestamp().nanoseconds+1,l=rt.fromTimestamp(1e9===u?new it(a+1,0):new it(a,u));return new It(l,ht.empty(),t)}function pt(e){return new It(e.readTime,e.key,-1)}let It=class It{constructor(e,t,a){this.readTime=e,this.documentKey=t,this.largestBatchId=a}static min(){return new It(rt.min(),ht.empty(),-1)}static max(){return new It(rt.max(),ht.empty(),-1)}};function Tt(e,t){let a=e.readTime.compareTo(t.readTime);return 0!==a?a:0!==(a=ht.comparator(e.documentKey,t.documentKey))?a:et(e.largestBatchId,t.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";let At=class At{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==E)throw e;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rt=class Rt{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Rt((a,u)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(a,u)},this.catchCallback=e=>{this.wrapFailure(t,e).next(a,u)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof Rt?t:Rt.resolve(t)}catch(e){return Rt.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Rt.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Rt.reject(t)}static resolve(e){return new Rt((t,a)=>{t(e)})}static reject(e){return new Rt((t,a)=>{a(e)})}static waitFor(e){return new Rt((t,a)=>{let u=0,l=0,c=!1;e.forEach(e=>{++u,e.next(()=>{++l,c&&l===u&&t()},e=>a(e))}),c=!0,l===u&&t()})}static or(e){let t=Rt.resolve(!1);for(let a of e)t=t.next(e=>e?Rt.resolve(e):a());return t}static forEach(e,t){let a=[];return e.forEach((e,u)=>{a.push(t.call(this,e,u))}),this.waitFor(a)}static mapArray(e,t){return new Rt((a,u)=>{let l=e.length,c=Array(l),h=0;for(let d=0;d<l;d++){let f=d;t(e[f]).next(e=>{c[f]=e,++h===l&&a(c)},e=>u(e))}})}static doWhile(e,t){return new Rt((a,u)=>{let i=()=>{!0===e()?t().next(()=>{i()},u):a()};i()})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt=class Pt{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new K,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new St(e,t.error)):this.v.resolve()},this.transaction.onerror=t=>{let a=kt(t.target.error);this.v.reject(new St(e,a))}}static open(e,t,a,u){try{return new Pt(t,e.transaction(u,a))}catch(e){throw new St(t,e)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){let t=this.transaction.objectStore(e);return new Ct(t)}};let bt=class bt{constructor(e,t,a){this.name=e,this.version=t,this.V=a,12.2===bt.S((0,f.z$)())&&k("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),xt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,f.hl)())return!1;if(bt.C())return!0;let e=(0,f.z$)(),t=bt.S(e),a=bt.N(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<a&&a<4.5)}static C(){var e;return void 0!==g&&"YES"===(null===(e=g.env)||void 0===e?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),a=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(a)}static N(e){let t=e.match(/Android ([\d.]+)/i),a=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(a)}async $(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,a)=>{let u=indexedDB.open(this.name,this.version);u.onsuccess=e=>{let a=e.target.result;t(a)},u.onblocked=()=>{a(new St(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},u.onerror=t=>{let u=t.target.error;"VersionError"===u.name?a(new U(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===u.name?a(new U(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):a(new St(e,u))},u.onupgradeneeded=e=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.V.O(t,u.transaction,e.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,a,u){let l="readonly"===t,c=0;for(;;){++c;try{this.db=await this.$(e);let t=Pt.open(this.db,e,l?"readonly":"readwrite",a),c=u(t).next(e=>(t.P(),e)).catch(e=>(t.abort(e),Rt.reject(e))).toPromise();return c.catch(()=>{}),await t.R,c}catch(t){let e="FirebaseError"!==t.name&&c<3;if(N("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}};let Vt=class Vt{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return xt(this.L.delete())}};let St=class St extends U{constructor(e,t){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}};function Dt(e){return"IndexedDbTransactionError"===e.name}let Ct=class Ct{constructor(e){this.store=e}put(e,t){let a;return void 0!==t?(N("SimpleDb","PUT",this.store.name,e,t),a=this.store.put(t,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),a=this.store.put(e)),xt(a)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),xt(this.store.add(e))}get(e){return xt(this.store.get(e)).next(t=>(void 0===t&&(t=null),N("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),xt(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),xt(this.store.count())}j(e,t){let a=this.options(e,t);if(a.index||"function"!=typeof this.store.getAll){let e=this.cursor(a),t=[];return this.W(e,(e,a)=>{t.push(a)}).next(()=>t)}{let e=this.store.getAll(a.range);return new Rt((t,a)=>{e.onerror=e=>{a(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){let a=this.store.getAll(e,null===t?void 0:t);return new Rt((e,t)=>{a.onerror=e=>{t(e.target.error)},a.onsuccess=t=>{e(t.target.result)}})}J(e,t){N("SimpleDb","DELETE ALL",this.store.name);let a=this.options(e,t);a.Y=!1;let u=this.cursor(a);return this.W(u,(e,t,a)=>a.delete())}X(e,t){let a;t?a=e:(a={},t=e);let u=this.cursor(a);return this.W(u,t)}Z(e){let t=this.cursor({});return new Rt((a,u)=>{t.onerror=e=>{let t=kt(e.target.error);u(t)},t.onsuccess=t=>{let u=t.target.result;u?e(u.primaryKey,u.value).next(e=>{e?u.continue():a()}):a()}})}W(e,t){let a=[];return new Rt((u,l)=>{e.onerror=e=>{l(e.target.error)},e.onsuccess=e=>{let l=e.target.result;if(!l)return void u();let c=new Vt(l),h=t(l.primaryKey,l.value,c);if(h instanceof Rt){let e=h.catch(e=>(c.done(),Rt.reject(e)));a.push(e)}c.isDone?u():null===c.K?l.continue():l.continue(c.K)}}).next(()=>Rt.waitFor(a))}options(e,t){let a;return void 0!==e&&("string"==typeof e?a=e:t=e),{index:a,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let a=this.store.index(e.index);return e.Y?a.openKeyCursor(e.range,t):a.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}};function xt(e){return new Rt((t,a)=>{e.onsuccess=e=>{let a=e.target.result;t(a)},e.onerror=e=>{let t=kt(e.target.error);a(t)}})}let T=!1;function kt(e){let t=bt.S((0,f.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return T||(T=!0,setTimeout(()=>{throw e},0)),e}}return e}let Mt=class Mt{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){N("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){Dt(e)?N("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await vt(e)}await this.et(6e4)})}};let $t=class $t{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){let a=new Set,u=t,l=!0;return Rt.doWhile(()=>!0===l&&u>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!a.has(t))return N("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,u).next(e=>{u-=e,a.add(t)});l=!1})).next(()=>t-u)}it(e,t,a){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(u=>this.localStore.localDocuments.getNextDocuments(e,t,u,a).next(a=>{let l=a.changes;return this.localStore.indexManager.updateIndexEntries(e,l).next(()=>this.rt(u,a)).next(a=>(N("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>l.size)}))}rt(e,t){let a=e;return t.changes.forEach((e,t)=>{let u=pt(t);Tt(u,a)>0&&(a=u)}),new It(a.readTime,a.documentKey,Math.max(t.batchId,e.largestBatchId))}};/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ot=class Ot{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}};function Ft(e){return null==e}function Bt(e){return 0===e&&1/e==-1/0}function Lt(e){return"number"==typeof e&&Number.isInteger(e)&&!Bt(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e){var t,a;let u="";for(let t=0;t<e.length;t++)u.length>0&&(u+="\x01\x01"),u=function(e,t){let a=t,u=e.length;for(let t=0;t<u;t++){let u=e.charAt(t);switch(u){case"\x00":a+="\x01\x10";break;case"\x01":a+="\x01\x11";break;default:a+=u}}return a}(e.get(t),u);return u+"\x01\x01"}function Gt(e){let t=e.length;if(t>=2||O(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||O(),ut.emptyPath();let a=t-2,u=[],l="";for(let c=0;c<t;){let t=e.indexOf("\x01",c);switch((t<0||t>a)&&O(),e.charAt(t+1)){case"\x01":let h;let d=e.substring(c,t);0===l.length?h=d:(l+=d,h=l,l=""),u.push(h);break;case"\x10":l+=e.substring(c,t)+"\x00";break;case"\x11":l+=e.substring(c,t+1);break;default:O()}c=t+2}return new ut(u)}Ot.ct=-1;/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S=["userId","batchId"],_={},D=["prefixPath","collectionGroup","readTime","documentId"],A=["prefixPath","collectionGroup","documentId"],R=["collectionGroup","readTime","prefixPath","documentId"],F=["canonicalId","targetId"],L=["targetId","path"],P=["path","targetId"],q=["collectionId","parent"],X=["indexId","uid"],Z=["uid","sequenceNumber"],ee=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],er=["indexId","uid","orderedDocumentKey"],eh=["userId","collectionPath","documentId"],ed=["userId","collectionPath","largestBatchId"],ef=["userId","collectionGroup","largestBatchId"],em=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eg=[...em,"documentOverlays"],ep=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ey=[...ep,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we=class we extends At{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}};function _e(e,t){return bt.M(e.ht,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){let t=0;for(let a in e)Object.prototype.hasOwnProperty.call(e,a)&&t++;return t}function ge(e,t){for(let a in e)Object.prototype.hasOwnProperty.call(e,a)&&t(a,e[a])}function ye(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pe=class pe{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let a=this.comparator(e,t.key);if(0===a)return t.value;a<0?t=t.left:a>0&&(t=t.right)}return null}indexOf(e){let t=0,a=this.root;for(;!a.isEmpty();){let u=this.comparator(e,a.key);if(0===u)return t+a.left.size;u<0?a=a.left:(t+=a.left.size+1,a=a.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,a)=>(e(t,a),!1))}toString(){let e=[];return this.inorderTraversal((t,a)=>(e.push(`${t}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ie(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ie(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ie(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ie(this.root,e,this.comparator,!0)}};let Ie=class Ie{constructor(e,t,a,u){this.isReverse=u,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?a(e.key,t):1,t&&u&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(0===l){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}};let Te=class Te{constructor(e,t,a,u,l){this.key=e,this.value=t,this.color=null!=a?a:Te.RED,this.left=null!=u?u:Te.EMPTY,this.right=null!=l?l:Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,a,u,l){return new Te(null!=e?e:this.key,null!=t?t:this.value,null!=a?a:this.color,null!=u?u:this.left,null!=l?l:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let u=this,l=a(e,u.key);return(u=l<0?u.copy(null,null,null,u.left.insert(e,t,a),null):0===l?u.copy(null,t,null,null,null):u.copy(null,null,null,null,u.right.insert(e,t,a))).fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let a,u=this;if(0>t(e,u.key))u.left.isEmpty()||u.left.isRed()||u.left.left.isRed()||(u=u.moveRedLeft()),u=u.copy(null,null,null,u.left.remove(e,t),null);else{if(u.left.isRed()&&(u=u.rotateRight()),u.right.isEmpty()||u.right.isRed()||u.right.left.isRed()||(u=u.moveRedRight()),0===t(e,u.key)){if(u.right.isEmpty())return Te.EMPTY;a=u.right.min(),u=u.copy(a.key,a.value,null,null,u.right.removeMin())}u=u.copy(null,null,null,null,u.right.remove(e,t))}return u.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();let e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}};Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1,Te.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(e,t,a,u,l){return this}insert(e,t,a){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee=class Ee{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,a)=>(e(t),!1))}forEachInRange(e,t){let a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){let u=a.getNext();if(this.comparator(u.key,e[1])>=0)return;t(u.key)}}forEachWhile(e,t){let a;for(a=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ae(this.data.getIterator())}getIteratorFrom(e){return new Ae(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;let t=this.data.getIterator(),a=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,u=a.getNext().key;if(0!==this.comparator(e,u))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new Ee(this.comparator);return t.data=e,t}};let Ae=class Ae{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function ve(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re=class Re{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Re([])}unionWith(e){let t=new Ee(at.comparator);for(let e of this.fields)t=t.add(e);for(let a of e)t=t.add(a);return new Re(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nt(this.fields,e.fields,(e,t)=>e.isEqual(t))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pe=class Pe extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return"undefined"!=typeof atob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve=class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Pe("Invalid base64 string: "+e):e}}(e);return new Ve(t)}static fromUint8Array(e){let t=function(e){let t="";for(let a=0;a<e.length;++a)t+=String.fromCharCode(e[a]);return t}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let a=0;a<e.length;a++)t[a]=e.charCodeAt(a);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Ve.EMPTY_BYTE_STRING=new Ve("");let ew=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function De(e){if(e||O(),"string"==typeof e){let t=0,a=ew.exec(e);if(a||O(),a[1]){let e=a[1];t=Number(e=(e+"000000000").substr(0,9))}let u=new Date(e);return{seconds:Math.floor(u.getTime()/1e3),nanos:t}}return{seconds:Ce(e.seconds),nanos:Ce(e.nanos)}}function Ce(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function xe(e){return"string"==typeof e?Ve.fromBase64String(e):Ve.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){var t,a;return"server_timestamp"===(null===(a=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===a?void 0:a.stringValue)}function ke(e){let t=e.mapValue.fields.__previous_value__;return Ne(t)?ke(t):t}function Me(e){let t=De(e.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e=class $e{constructor(e,t,a,u,l,c,h,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=a,this.host=u,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f}};let Oe=class Oe{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Oe("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Oe&&e.projectId===this.projectId&&e.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ev={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},eI={nullValue:"NULL_VALUE"};function Le(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ne(e)?4:en(e)?9007199254740991:10:O()}function qe(e,t){if(e===t)return!0;let a=Le(e);if(a!==Le(t))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Me(e).isEqual(Me(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let a=De(e.timestampValue),u=De(t.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return xe(e.bytesValue).isEqual(xe(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return Ce(e.geoPointValue.latitude)===Ce(t.geoPointValue.latitude)&&Ce(e.geoPointValue.longitude)===Ce(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ce(e.integerValue)===Ce(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let a=Ce(e.doubleValue),u=Ce(t.doubleValue);return a===u?Bt(a)===Bt(u):isNaN(a)&&isNaN(u)}return!1}(e,t);case 9:return nt(e.arrayValue.values||[],t.arrayValue.values||[],qe);case 10:return function(e,t){let a=e.mapValue.fields||{},u=t.mapValue.fields||{};if(me(a)!==me(u))return!1;for(let e in a)if(a.hasOwnProperty(e)&&(void 0===u[e]||!qe(a[e],u[e])))return!1;return!0}(e,t);default:return O()}}function Ue(e,t){return void 0!==(e.values||[]).find(e=>qe(e,t))}function Ke(e,t){if(e===t)return 0;let a=Le(e),u=Le(t);if(a!==u)return et(a,u);switch(a){case 0:case 9007199254740991:return 0;case 1:return et(e.booleanValue,t.booleanValue);case 2:return function(e,t){let a=Ce(e.integerValue||e.doubleValue),u=Ce(t.integerValue||t.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return Ge(e.timestampValue,t.timestampValue);case 4:return Ge(Me(e),Me(t));case 5:return et(e.stringValue,t.stringValue);case 6:return function(e,t){let a=xe(e),u=xe(t);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let a=e.split("/"),u=t.split("/");for(let e=0;e<a.length&&e<u.length;e++){let t=et(a[e],u[e]);if(0!==t)return t}return et(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let a=et(Ce(e.latitude),Ce(t.latitude));return 0!==a?a:et(Ce(e.longitude),Ce(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let a=e.values||[],u=t.values||[];for(let e=0;e<a.length&&e<u.length;++e){let t=Ke(a[e],u[e]);if(t)return t}return et(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ev.mapValue&&t===ev.mapValue)return 0;if(e===ev.mapValue)return 1;if(t===ev.mapValue)return -1;let a=e.fields||{},u=Object.keys(a),l=t.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let e=0;e<u.length&&e<c.length;++e){let t=et(u[e],c[e]);if(0!==t)return t;let h=Ke(a[u[e]],l[c[e]]);if(0!==h)return h}return et(u.length,c.length)}(e.mapValue,t.mapValue);default:throw O()}}function Ge(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return et(e,t);let a=De(e),u=De(t),l=et(a.seconds,u.seconds);return 0!==l?l:et(a.nanos,u.nanos)}function je(e){var t,a;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=De(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?xe(e.bytesValue).toBase64():"referenceValue"in e?(a=e.referenceValue,ht.fromName(a).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",a=!0;for(let u of e.values||[])a?a=!1:t+=",",t+=je(u);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),a="{",u=!0;for(let l of t)u?u=!1:a+=",",a+=`${l}:${je(e.fields[l])}`;return a+"}"}(e.mapValue):O()}function We(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function He(e){return!!e&&"integerValue"in e}function Je(e){return!!e&&"arrayValue"in e}function Ye(e){return!!e&&"nullValue"in e}function Xe(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ze(e){return!!e&&"mapValue"in e}function tn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ge(e.mapValue.fields,(e,a)=>t.mapValue.fields[e]=tn(a)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)t.arrayValue.values[a]=tn(e.arrayValue.values[a]);return t}return Object.assign({},e)}function en(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function rn(e,t){let a=Ke(e.value,t.value);return 0!==a?a:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function on(e,t){let a=Ke(e.value,t.value);return 0!==a?a:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un=class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let a=0;a<e.length-1;++a)if(!Ze(t=(t.mapValue.fields||{})[e.get(a)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tn(t)}setAll(e){let t=at.emptyPath(),a={},u=[];e.forEach((e,l)=>{if(!t.isImmediateParentOf(l)){let e=this.getFieldsMap(t);this.applyChanges(e,a,u),a={},u=[],t=l.popLast()}e?a[l.lastSegment()]=tn(e):u.push(l.lastSegment())});let l=this.getFieldsMap(t);this.applyChanges(l,a,u)}delete(e){let t=this.field(e.popLast());Ze(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let a=0;a<e.length;++a){let u=t.mapValue.fields[e.get(a)];Ze(u)&&u.mapValue.fields||(u={mapValue:{fields:{}}},t.mapValue.fields[e.get(a)]=u),t=u}return t.mapValue.fields}applyChanges(e,t,a){for(let u of(ge(t,(t,a)=>e[t]=a),a))delete e[u]}clone(){return new un(tn(this.value))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an=class an{constructor(e,t,a,u,l,c,h){this.key=e,this.documentType=t,this.version=a,this.readTime=u,this.createTime=l,this.data=c,this.documentState=h}static newInvalidDocument(e){return new an(e,0,rt.min(),rt.min(),rt.min(),un.empty(),0)}static newFoundDocument(e,t,a,u){return new an(e,1,t,rt.min(),a,u,0)}static newNoDocument(e,t){return new an(e,2,t,rt.min(),rt.min(),un.empty(),0)}static newUnknownDocument(e,t){return new an(e,3,t,rt.min(),rt.min(),un.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(rt.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof an&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn=class hn{constructor(e,t){this.position=e,this.inclusive=t}};function ln(e,t,a){let u=0;for(let l=0;l<e.position.length;l++){let c=t[l],h=e.position[l];if(u=c.field.isKeyField()?ht.comparator(ht.fromName(h.referenceValue),a.key):Ke(h,a.data.field(c.field)),"desc"===c.dir&&(u*=-1),0!==u)break}return u}function fn(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let a=0;a<e.position.length;a++)if(!qe(e.position[a],t.position[a]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn=class dn{constructor(e,t="asc"){this.field=e,this.dir=t}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n=class _n{};let mn=class mn extends _n{constructor(e,t,a){super(),this.field=e,this.op=t,this.value=a}static create(e,t,a){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,a):new Pn(e,t,a):"array-contains"===t?new Dn(e,a):"in"===t?new Cn(e,a):"not-in"===t?new xn(e,a):"array-contains-any"===t?new Nn(e,a):new mn(e,t,a)}static createKeyFieldInFilter(e,t,a){return"in"===t?new bn(e,a):new Vn(e,a)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ke(t,this.value)):null!==t&&Le(this.value)===Le(t)&&this.matchesComparison(Ke(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}};let gn=class gn extends _n{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new gn(e,t)}matches(e){return yn(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.ft(e=>e.isInequality());return null!==e?e.field:null}ft(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}};function yn(e){return"and"===e.op}function pn(e){return"or"===e.op}function In(e){return Tn(e)&&yn(e)}function Tn(e){for(let t of e.filters)if(t instanceof gn)return!1;return!0}function vn(e,t){let a=e.filters.concat(t);return gn.create(a,e.op)}let Pn=class Pn extends mn{constructor(e,t,a){super(e,t,a),this.key=ht.fromName(a.referenceValue)}matches(e){let t=ht.comparator(e.key,this.key);return this.matchesComparison(t)}};let bn=class bn extends mn{constructor(e,t){super(e,"in",t),this.keys=Sn("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}};let Vn=class Vn extends mn{constructor(e,t){super(e,"not-in",t),this.keys=Sn("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Sn(e,t){var a;return((null===(a=t.arrayValue)||void 0===a?void 0:a.values)||[]).map(e=>ht.fromName(e.referenceValue))}let Dn=class Dn extends mn{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Je(t)&&Ue(t.arrayValue,this.value)}};let Cn=class Cn extends mn{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&Ue(this.value.arrayValue,t)}};let xn=class xn extends mn{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ue(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!Ue(this.value.arrayValue,t)}};let Nn=class Nn extends mn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Je(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Ue(this.value.arrayValue,e))}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn=class kn{constructor(e,t=null,a=[],u=[],l=null,c=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=a,this.filters=u,this.limit=l,this.startAt=c,this.endAt=h,this.dt=null}};function Mn(e,t=null,a=[],u=[],l=null,c=null,h=null){return new kn(e,t,a,u,l,c,h)}function $n(e){if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function En(e){if(e instanceof mn)return e.field.canonicalString()+e.op.toString()+je(e.value);if(In(e))return e.filters.map(e=>En(e)).join(",");{let t=e.filters.map(e=>En(e)).join(",");return`${e.op}(${t})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),Ft(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>je(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>je(e)).join(",")),e.dt=t}return e.dt}function On(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let l=0;l<e.orderBy.length;l++){var a,u;if(a=e.orderBy[l],u=t.orderBy[l],!(a.dir===u.dir&&a.field.isEqual(u.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let a=0;a<e.filters.length;a++)if(!function An(e,t){return e instanceof mn?t instanceof mn&&e.op===t.op&&e.field.isEqual(t.field)&&qe(e.value,t.value):e instanceof gn?t instanceof gn&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,a,u)=>e&&An(a,t.filters[u]),!0):void O()}(e.filters[a],t.filters[a]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!fn(e.startAt,t.startAt)&&fn(e.endAt,t.endAt)}function Fn(e){return ht.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Bn(e,t){return e.filters.filter(e=>e instanceof mn&&e.field.isEqual(t))}function Ln(e,t,a){let u=eI,l=!0;for(let a of Bn(e,t)){let e=eI,t=!0;switch(a.op){case"<":case"<=":var c;e="nullValue"in(c=a.value)?eI:"booleanValue"in c?{booleanValue:!1}:"integerValue"in c||"doubleValue"in c?{doubleValue:NaN}:"timestampValue"in c?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in c?{stringValue:""}:"bytesValue"in c?{bytesValue:""}:"referenceValue"in c?We(Oe.empty(),ht.empty()):"geoPointValue"in c?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in c?{arrayValue:{}}:"mapValue"in c?{mapValue:{}}:O();break;case"==":case"in":case">=":e=a.value;break;case">":e=a.value,t=!1;break;case"!=":case"not-in":e=eI}0>rn({value:u,inclusive:l},{value:e,inclusive:t})&&(u=e,l=t)}if(null!==a){for(let c=0;c<e.orderBy.length;++c)if(e.orderBy[c].field.isEqual(t)){let e=a.position[c];0>rn({value:u,inclusive:l},{value:e,inclusive:a.inclusive})&&(u=e,l=a.inclusive);break}}return{value:u,inclusive:l}}function qn(e,t,a){let u=ev,l=!0;for(let a of Bn(e,t)){let e=ev,t=!0;switch(a.op){case">=":case">":var c;e="nullValue"in(c=a.value)?{booleanValue:!1}:"booleanValue"in c?{doubleValue:NaN}:"integerValue"in c||"doubleValue"in c?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in c?{stringValue:""}:"stringValue"in c?{bytesValue:""}:"bytesValue"in c?We(Oe.empty(),ht.empty()):"referenceValue"in c?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in c?{arrayValue:{}}:"arrayValue"in c?{mapValue:{}}:"mapValue"in c?ev:O(),t=!1;break;case"==":case"in":case"<=":e=a.value;break;case"<":e=a.value,t=!1;break;case"!=":case"not-in":e=ev}on({value:u,inclusive:l},{value:e,inclusive:t})>0&&(u=e,l=t)}if(null!==a){for(let c=0;c<e.orderBy.length;++c)if(e.orderBy[c].field.isEqual(t)){let e=a.position[c];on({value:u,inclusive:l},{value:e,inclusive:a.inclusive})>0&&(u=e,l=a.inclusive);break}}return{value:u,inclusive:l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un=class Un{constructor(e,t=null,a=[],u=[],l=null,c="F",h=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=a,this.filters=u,this.limit=l,this.limitType=c,this.startAt=h,this.endAt=d,this.wt=null,this._t=null,this.startAt,this.endAt}};function Gn(e){return new Un(e)}function Qn(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function jn(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zn(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function Wn(e){return null!==e.collectionGroup}function Hn(e){if(null===e.wt){e.wt=[];let t=zn(e),a=jn(e);if(null!==t&&null===a)t.isKeyField()||e.wt.push(new dn(t)),e.wt.push(new dn(at.keyField(),"asc"));else{let t=!1;for(let a of e.explicitOrderBy)e.wt.push(a),a.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new dn(at.keyField(),t))}}}return e.wt}function Jn(e){if(!e._t){if("F"===e.limitType)e._t=Mn(e.path,e.collectionGroup,Hn(e),e.filters,e.limit,e.startAt,e.endAt);else{let t=[];for(let a of Hn(e)){let e="desc"===a.dir?"asc":"desc";t.push(new dn(a.field,e))}let a=e.endAt?new hn(e.endAt.position,e.endAt.inclusive):null,u=e.startAt?new hn(e.startAt.position,e.startAt.inclusive):null;e._t=Mn(e.path,e.collectionGroup,t,e.filters,e.limit,a,u)}}return e._t}function Yn(e,t){t.getFirstInequalityField(),zn(e);let a=e.filters.concat([t]);return new Un(e.path,e.collectionGroup,e.explicitOrderBy.slice(),a,e.limit,e.limitType,e.startAt,e.endAt)}function Xn(e,t,a){return new Un(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,a,e.startAt,e.endAt)}function Zn(e,t){return On(Jn(e),Jn(t))&&e.limitType===t.limitType}function ts(e){return`${$n(Jn(e))}|lt:${e.limitType}`}function es(e){var t;let a;return`Query(target=${a=(t=Jn(e)).path.canonicalString(),null!==t.collectionGroup&&(a+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(a+=`, filters: [${t.filters.map(e=>(function Rn(e){return e instanceof mn?`${e.field.canonicalString()} ${e.op} ${je(e.value)}`:e instanceof gn?e.op.toString()+" {"+e.getFilters().map(Rn).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),Ft(t.limit)||(a+=", limit: "+t.limit),t.orderBy.length>0&&(a+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(a+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>je(e)).join(",")),t.endAt&&(a+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>je(e)).join(",")),`Target(${a})`}; limitType=${e.limitType})`}function ns(e,t){return t.isFoundDocument()&&function(e,t){let a=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(a):ht.isDocumentKey(e.path)?e.path.isEqual(a):e.path.isImmediateParentOf(a)}(e,t)&&function(e,t){for(let a of Hn(e))if(!a.field.isKeyField()&&null===t.data.field(a.field))return!1;return!0}(e,t)&&function(e,t){for(let a of e.filters)if(!a.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,a){let u=ln(e,t,a);return e.inclusive?u<=0:u<0}(e.startAt,Hn(e),t))&&(!e.endAt||!!function(e,t,a){let u=ln(e,t,a);return e.inclusive?u>=0:u>0}(e.endAt,Hn(e),t))}function ss(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function is(e){return(t,a)=>{let u=!1;for(let l of Hn(e)){let e=function(e,t,a){let u=e.field.isKeyField()?ht.comparator(t.key,a.key):function(e,t,a){let u=t.data.field(e),l=a.data.field(e);return null!==u&&null!==l?Ke(u,l):O()}(e.field,t,a);switch(e.dir){case"asc":return u;case"desc":return -1*u;default:return O()}}(l,t,a);if(0!==e)return e;u=u||l.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os=class os{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),a=this.inner[t];if(void 0!==a){for(let[t,u]of a)if(this.equalsFn(t,e))return u}}has(e){return void 0!==this.get(e)}set(e,t){let a=this.mapKeyFn(e),u=this.inner[a];if(void 0===u)return this.inner[a]=[[e,t]],void this.innerSize++;for(let a=0;a<u.length;a++)if(this.equalsFn(u[a][0],e))return void(u[a]=[e,t]);u.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),a=this.inner[t];if(void 0===a)return!1;for(let u=0;u<a.length;u++)if(this.equalsFn(a[u][0],e))return 1===a.length?delete this.inner[t]:a.splice(u,1),this.innerSize--,!0;return!1}forEach(e){ge(this.inner,(t,a)=>{for(let[t,u]of a)e(t,u)})}isEmpty(){return ye(this.inner)}size(){return this.innerSize}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eb=new pe(ht.comparator),eE=new pe(ht.comparator);function hs(...e){let t=eE;for(let a of e)t=t.insert(a.key,a);return t}function ls(e){let t=eE;return e.forEach((e,a)=>t=t.insert(e,a.overlayedDocument)),t}function ws(){return new os(e=>e.toString(),(e,t)=>e.isEqual(t))}let eT=new pe(ht.comparator),eS=new Ee(ht.comparator);function gs(...e){let t=eS;for(let a of e)t=t.add(a);return t}let eN=new Ee(et);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bt(t)?"-0":t}}function Ts(e){return{integerValue:""+e}}function Es(e,t){return Lt(t)?Ts(t):Is(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As=class As{constructor(){this._=void 0}};function Ps(e,t){return e instanceof xs?He(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}let bs=class bs extends As{};let Vs=class Vs extends As{constructor(e){super(),this.elements=e}};function Ss(e,t){let a=ks(t);for(let t of e.elements)a.some(e=>qe(e,t))||a.push(t);return{arrayValue:{values:a}}}let Ds=class Ds extends As{constructor(e){super(),this.elements=e}};function Cs(e,t){let a=ks(t);for(let t of e.elements)a=a.filter(e=>!qe(e,t));return{arrayValue:{values:a}}}let xs=class xs extends As{constructor(e,t){super(),this.serializer=e,this.gt=t}};function Ns(e){return Ce(e.integerValue||e.doubleValue)}function ks(e){return Je(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms=class Ms{constructor(e,t){this.field=e,this.transform=t}};let Os=class Os{constructor(e,t){this.version=e,this.transformResults=t}};let Fs=class Fs{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fs}static exists(e){return new Fs(void 0,e)}static updateTime(e){return new Fs(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Bs(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}let Ls=class Ls{};function qs(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ys(e.key,Fs.none()):new js(e.key,e.data,Fs.none());{let a=e.data,u=un.empty(),l=new Ee(at.comparator);for(let e of t.fields)if(!l.has(e)){let t=a.field(e);null===t&&e.length>1&&(e=e.popLast(),t=a.field(e)),null===t?u.delete(e):u.set(e,t),l=l.add(e)}return new zs(e.key,u,new Re(l.toArray()),Fs.none())}}function Ks(e,t,a,u){return e instanceof js?function(e,t,a,u){if(!Bs(e.precondition,t))return a;let l=e.value.clone(),c=Js(e.fieldTransforms,u,t);return l.setAll(c),t.convertToFoundDocument(t.version,l).setHasLocalMutations(),null}(e,t,a,u):e instanceof zs?function(e,t,a,u){if(!Bs(e.precondition,t))return a;let l=Js(e.fieldTransforms,u,t),c=t.data;return(c.setAll(Ws(e)),c.setAll(l),t.convertToFoundDocument(t.version,c).setHasLocalMutations(),null===a)?null:a.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,a,u):Bs(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):a}function Qs(e,t){var a,u;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(a=e.fieldTransforms,u=t.fieldTransforms,!!(void 0===a&&void 0===u||!(!a||!u)&&nt(a,u,(e,t)=>{var a,u;return e.field.isEqual(t.field)&&(a=e.transform,u=t.transform,a instanceof Vs&&u instanceof Vs||a instanceof Ds&&u instanceof Ds?nt(a.elements,u.elements,qe):a instanceof xs&&u instanceof xs?qe(a.gt,u.gt):a instanceof bs&&u instanceof bs)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}let js=class js extends Ls{constructor(e,t,a,u=[]){super(),this.key=e,this.value=t,this.precondition=a,this.fieldTransforms=u,this.type=0}getFieldMask(){return null}};let zs=class zs extends Ls{constructor(e,t,a,u,l=[]){super(),this.key=e,this.data=t,this.fieldMask=a,this.precondition=u,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}};function Ws(e){let t=new Map;return e.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){let u=e.data.field(a);t.set(a,u)}}),t}function Hs(e,t,a){var u;let l=new Map;e.length===a.length||O();for(let c=0;c<a.length;c++){let h=e[c],d=h.transform,f=t.data.field(h.field);l.set(h.field,(u=a[c],d instanceof Vs?Ss(d,f):d instanceof Ds?Cs(d,f):u))}return l}function Js(e,t,a){let u=new Map;for(let l of e){let e=l.transform,c=a.data.field(l.field);u.set(l.field,e instanceof bs?function(e,t){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ne(t)&&(t=ke(t)),t&&(a.fields.__previous_value__=t),{mapValue:a}}(t,c):e instanceof Vs?Ss(e,c):e instanceof Ds?Cs(e,c):function(e,t){let a=Ps(e,t),u=Ns(a)+Ns(e.gt);return He(a)&&He(e.gt)?Ts(u):Is(e.serializer,u)}(e,c))}return u}let Ys=class Ys extends Ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}};let Xs=class Xs extends Ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs=class Zs{constructor(e,t,a,u){this.batchId=e,this.localWriteTime=t,this.baseMutations=a,this.mutations=u}applyToRemoteDocument(e,t){let a=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let l=this.mutations[t];if(l.key.isEqual(e.key)){var u;u=a[t],l instanceof js?function(e,t,a){let u=e.value.clone(),l=Hs(e.fieldTransforms,t,a.transformResults);u.setAll(l),t.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(l,e,u):l instanceof zs?function(e,t,a){if(!Bs(e.precondition,t))return void t.convertToUnknownDocument(a.version);let u=Hs(e.fieldTransforms,t,a.transformResults),l=t.data;l.setAll(Ws(e)),l.setAll(u),t.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(l,e,u):function(e,t,a){t.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,u)}}}applyToLocalView(e,t){for(let a of this.baseMutations)a.key.isEqual(e.key)&&(t=Ks(a,e,t,this.localWriteTime));for(let a of this.mutations)a.key.isEqual(e.key)&&(t=Ks(a,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let a=ws();return this.mutations.forEach(u=>{let l=e.get(u.key),c=l.overlayedDocument,h=this.applyToLocalView(c,l.mutatedFields);h=t.has(u.key)?null:h;let d=qs(c,h);null!==d&&a.set(u.key,d),c.isValidDocument()||c.convertToNoDocument(rt.min())}),a}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),gs())}isEqual(e){return this.batchId===e.batchId&&nt(this.mutations,e.mutations,(e,t)=>Qs(e,t))&&nt(this.baseMutations,e.baseMutations,(e,t)=>Qs(e,t))}};let ti=class ti{constructor(e,t,a,u){this.batch=e,this.commitVersion=t,this.mutationResults=a,this.docVersions=u}static from(e,t,a){e.mutations.length===a.length||O();let u=eT,l=e.mutations;for(let e=0;e<l.length;e++)u=u.insert(l[e].key,a[e].version);return new ti(e,t,a,u)}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=class ei{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si=class si{constructor(e,t){this.count=e,this.unchangedNames=t}};function oi(e){switch(e){default:return O();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function ui(e){if(void 0===e)return k("GRPC error has no .code"),I.UNKNOWN;switch(e){case u.OK:return I.OK;case u.CANCELLED:return I.CANCELLED;case u.UNKNOWN:return I.UNKNOWN;case u.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case u.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case u.INTERNAL:return I.INTERNAL;case u.UNAVAILABLE:return I.UNAVAILABLE;case u.UNAUTHENTICATED:return I.UNAUTHENTICATED;case u.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case u.NOT_FOUND:return I.NOT_FOUND;case u.ALREADY_EXISTS:return I.ALREADY_EXISTS;case u.PERMISSION_DENIED:return I.PERMISSION_DENIED;case u.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case u.ABORTED:return I.ABORTED;case u.OUT_OF_RANGE:return I.OUT_OF_RANGE;case u.UNIMPLEMENTED:return I.UNIMPLEMENTED;case u.DATA_LOSS:return I.DATA_LOSS;default:return O()}}(l=u||(u={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci=class ci{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ex}static getOrCreateInstance(){return null===ex&&(ex=new ci),ex}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}};let ex=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_=new m.z8([4294967295,4294967295],0);function fi(e){let t=hi().encode(e),a=new m.V8;return a.update(t),new Uint8Array(a.digest())}function di(e){let t=new DataView(e.buffer),a=t.getUint32(0,!0),u=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new m.z8([a,u],0),new m.z8([l,c],0)]}let wi=class wi{constructor(e,t,a){if(this.bitmap=e,this.padding=t,this.hashCount=a,t<0||t>=8)throw new _i(`Invalid padding: ${t}`);if(a<0||e.length>0&&0===this.hashCount)throw new _i(`Invalid hash count: ${a}`);if(0===e.length&&0!==t)throw new _i(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=m.z8.fromNumber(this.It)}Et(e,t,a){let u=e.add(t.multiply(m.z8.fromNumber(a)));return 1===u.compare(e_)&&(u=new m.z8([u.getBits(0),u.getBits(1)],0)),u.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;let t=fi(e),[a,u]=di(t);for(let e=0;e<this.hashCount;e++){let t=this.Et(a,u,e);if(!this.At(t))return!1}return!0}static create(e,t,a){let u=new Uint8Array(Math.ceil(e/8)),l=new wi(u,e%8==0?0:8-e%8,t);return a.forEach(e=>l.insert(e)),l}insert(e){if(0===this.It)return;let t=fi(e),[a,u]=di(t);for(let e=0;e<this.hashCount;e++){let t=this.Et(a,u,e);this.Rt(t)}}Rt(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}};let _i=class _i extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi=class mi{constructor(e,t,a,u,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=a,this.documentUpdates=u,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,a){let u=new Map;return u.set(e,gi.createSynthesizedTargetChangeForCurrentChange(e,t,a)),new mi(rt.min(),u,new pe(et),eb,gs())}};let gi=class gi{constructor(e,t,a,u,l){this.resumeToken=e,this.current=t,this.addedDocuments=a,this.modifiedDocuments=u,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,a){return new gi(a,t,gs(),gs(),gs())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi=class yi{constructor(e,t,a,u){this.Pt=e,this.removedTargetIds=t,this.key=a,this.bt=u}};let pi=class pi{constructor(e,t){this.targetId=e,this.Vt=t}};let Ii=class Ii{constructor(e,t,a=Ve.EMPTY_BYTE_STRING,u=null){this.state=e,this.targetIds=t,this.resumeToken=a,this.cause=u}};let Ti=class Ti{constructor(){this.St=0,this.Dt=vi(),this.Ct=Ve.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=gs(),t=gs(),a=gs();return this.Dt.forEach((u,l)=>{switch(l){case 0:e=e.add(u);break;case 2:t=t.add(u);break;case 1:a=a.add(u);break;default:O()}}),new gi(this.Ct,this.xt,e,t,a)}Ft(){this.Nt=!1,this.Dt=vi()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}};let Ei=class Ei{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=eb,this.zt=Ai(),this.Wt=new pe(et)}Ht(e){for(let t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(let t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{let a=this.Zt(t);switch(e.state){case 0:this.te(t)&&a.$t(e.resumeToken);break;case 1:a.Ut(),a.kt||a.Ft(),a.$t(e.resumeToken);break;case 2:a.Ut(),a.kt||this.removeTarget(t);break;case 3:this.te(t)&&(a.Kt(),a.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),a.$t(e.resumeToken));break;default:O()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((e,a)=>{this.te(a)&&t(a)})}ne(e){var t;let a=e.targetId,u=e.Vt.count,l=this.se(a);if(l){let c=l.target;if(Fn(c)){if(0===u){let e=new ht(c.path);this.Yt(a,e,an.newNoDocument(e,rt.min()))}else 1===u||O()}else{let l=this.ie(a);if(l!==u){let u=this.re(e,l);if(0!==u){this.ee(a);let e=2===u?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(a,e)}null===(t=ci.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,a){var u,l,c,h,d,f;let m={localCacheCount:t,existenceFilterCount:a.count},g=a.unchangedNames;return g&&(m.bloomFilter={applied:0===e,hashCount:null!==(u=null==g?void 0:g.hashCount)&&void 0!==u?u:0,bitmapLength:null!==(h=null===(c=null===(l=null==g?void 0:g.bits)||void 0===l?void 0:l.bitmap)||void 0===c?void 0:c.length)&&void 0!==h?h:0,padding:null!==(f=null===(d=null==g?void 0:g.bits)||void 0===d?void 0:d.padding)&&void 0!==f?f:0}),m}(u,l,e.Vt))}}}}re(e,t){let a,u;let{unchangedNames:l,count:c}=e.Vt;if(!l||!l.bits)return 1;let{bits:{bitmap:h="",padding:d=0},hashCount:f=0}=l;try{a=xe(h).toUint8Array()}catch(e){if(e instanceof Pe)return M("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{u=new wi(a,d,f)}catch(e){return M(e instanceof _i?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===u.It?1:c!==t-this.oe(e.targetId,u)?2:0}oe(e,t){let a=this.Gt.getRemoteKeysForTarget(e),u=0;return a.forEach(a=>{let l=this.Gt.ue(),c=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;t.vt(c)||(this.Yt(e,a,null),u++)}),u}ce(e){let t=new Map;this.Qt.forEach((a,u)=>{let l=this.se(u);if(l){if(a.current&&Fn(l.target)){let t=new ht(l.target.path);null!==this.jt.get(t)||this.ae(u,t)||this.Yt(u,t,an.newNoDocument(t,e))}a.Mt&&(t.set(u,a.Ot()),a.Ft())}});let a=gs();this.zt.forEach((e,t)=>{let u=!0;t.forEachWhile(e=>{let t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(u=!1,!1)}),u&&(a=a.add(e))}),this.jt.forEach((t,a)=>a.setReadTime(e));let u=new mi(e,t,this.Wt,this.jt,a);return this.jt=eb,this.zt=Ai(),this.Wt=new pe(et),u}Jt(e,t){if(!this.te(e))return;let a=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,a),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,a){if(!this.te(e))return;let u=this.Zt(e);this.ae(e,t)?u.Bt(t,1):u.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),a&&(this.jt=this.jt.insert(t,a))}removeTarget(e){this.Qt.delete(e)}ie(e){let t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Ti,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Ee(et),this.zt=this.zt.insert(e,t)),t}te(e){let t=null!==this.se(e);return t||N("WatchChangeAggregator","Detected inactive target",e),t}se(e){let t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ti),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}};function Ai(){return new pe(ht.comparator)}function vi(){return new pe(ht.comparator)}let eD={asc:"ASCENDING",desc:"DESCENDING"},eC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ek={and:"AND",or:"OR"};let Vi=class Vi{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Si(e,t){return e.useProto3Json||Ft(t)?t:{value:t}}function Di(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ci(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ni(e){return e||O(),rt.fromTimestamp(function(e){let t=De(e);return new it(t.seconds,t.nanos)}(e))}function ki(e,t){return new ut(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function Mi(e){let t=ut.fromString(e);return ur(t)||O(),t}function $i(e,t){return ki(e.databaseId,t.path)}function Oi(e,t){let a=Mi(t);if(a.get(1)!==e.databaseId.projectId)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new ht(qi(a))}function Fi(e,t){return ki(e.databaseId,t)}function Bi(e){let t=Mi(e);return 4===t.length?ut.emptyPath():qi(t)}function Li(e){return new ut(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qi(e){return e.length>4&&"documents"===e.get(4)||O(),e.popFirst(5)}function Ui(e,t,a){return{name:$i(e,t),fields:a.value.mapValue.fields}}function Ki(e,t,a){let u=Oi(e,t.name),l=Ni(t.updateTime),c=t.createTime?Ni(t.createTime):rt.min(),h=new un({mapValue:{fields:t.fields}}),d=an.newFoundDocument(u,l,c,h);return a&&d.setHasCommittedMutations(),a?d.setHasCommittedMutations():d}function ji(e,t){var a;let u;if(t instanceof js)u={update:Ui(e,t.key,t.value)};else if(t instanceof Ys)u={delete:$i(e,t.key)};else if(t instanceof zs)u={update:Ui(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof Xs))return O();u={verify:$i(e,t.key)}}return t.fieldTransforms.length>0&&(u.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let a=t.transform;if(a instanceof bs)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vs)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ds)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xs)return{fieldPath:t.field.canonicalString(),increment:a.gt};throw O()})(0,e))),t.precondition.isNone||(u.currentDocument=void 0!==(a=t.precondition).updateTime?{updateTime:Di(e,a.updateTime.toTimestamp())}:void 0!==a.exists?{exists:a.exists}:O()),u}function zi(e,t){var a;let u=t.currentDocument?void 0!==(a=t.currentDocument).updateTime?Fs.updateTime(Ni(a.updateTime)):void 0!==a.exists?Fs.exists(a.exists):Fs.none():Fs.none(),l=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let a=null;if("setToServerValue"in t)"REQUEST_TIME"===t.setToServerValue||O(),a=new bs;else if("appendMissingElements"in t){let e=t.appendMissingElements.values||[];a=new Vs(e)}else if("removeAllFromArray"in t){let e=t.removeAllFromArray.values||[];a=new Ds(e)}else"increment"in t?a=new xs(e,t.increment):O();let u=at.fromServerFormat(t.fieldPath);return new Ms(u,a)})(e,t)):[];if(t.update){t.update.name;let a=Oi(e,t.update.name),c=new un({mapValue:{fields:t.update.fields}});if(t.updateMask){let e=function(e){let t=e.fieldPaths||[];return new Re(t.map(e=>at.fromServerFormat(e)))}(t.updateMask);return new zs(a,c,e,u,l)}return new js(a,c,u,l)}if(t.delete){let a=Oi(e,t.delete);return new Ys(a,u)}if(t.verify){let a=Oi(e,t.verify);return new Xs(a,u)}return O()}function Hi(e,t){return{documents:[Fi(e,t.path)]}}function Ji(e,t){var a,u;let l={structuredQuery:{}},c=t.path;null!==t.collectionGroup?(l.parent=Fi(e,c),l.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l.parent=Fi(e,c.popLast()),l.structuredQuery.from=[{collectionId:c.lastSegment()}]);let h=function(e){if(0!==e.length)return function rr(e){return e instanceof mn?function(e){if("=="===e.op){if(Xe(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NAN"}};if(Ye(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Xe(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NOT_NAN"}};if(Ye(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(e.field),op:eC[e.op],value:e.value}}}(e):e instanceof gn?function(e){let t=e.getFilters().map(e=>rr(e));return 1===t.length?t[0]:{compositeFilter:{op:ek[e.op],filters:t}}}(e):O()}(gn.create(e,"and"))}(t.filters);h&&(l.structuredQuery.where=h);let d=function(e){if(0!==e.length)return e.map(e=>({field:sr(e.field),direction:eD[e.dir]}))}(t.orderBy);d&&(l.structuredQuery.orderBy=d);let f=Si(e,t.limit);return null!==f&&(l.structuredQuery.limit=f),t.startAt&&(l.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(l.structuredQuery.endAt={before:!(u=t.endAt).inclusive,values:u.position}),l}function Yi(e){var t,a,u,l,c,h,d,f;let m,g=Bi(e.parent),p=e.structuredQuery,y=p.from?p.from.length:0,v=null;if(y>0){1===y||O();let e=p.from[0];e.allDescendants?v=e.collectionId:g=g.child(e.collectionId)}let I=[];p.where&&(I=function(e){let t=function Zi(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ir(e.unaryFilter.field);return mn.create(t,"==",{doubleValue:NaN});case"IS_NULL":let a=ir(e.unaryFilter.field);return mn.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let u=ir(e.unaryFilter.field);return mn.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let l=ir(e.unaryFilter.field);return mn.create(l,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(e):void 0!==e.fieldFilter?mn.create(ir(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value):void 0!==e.compositeFilter?gn.create(e.compositeFilter.filters.map(e=>Zi(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op)):O()}(e);return t instanceof gn&&In(t)?t.getFilters():[t]}(p.where));let b=[];p.orderBy&&(b=p.orderBy.map(e=>new dn(ir(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let E=null;p.limit&&(E=Ft(m="object"==typeof(t=p.limit)?t.value:t)?null:m);let T=null;p.startAt&&(T=function(e){let t=!!e.before,a=e.values||[];return new hn(a,t)}(p.startAt));let S=null;return p.endAt&&(S=function(e){let t=!e.before,a=e.values||[];return new hn(a,t)}(p.endAt)),a=g,u=v,l=b,c=I,h=E,d=T,f=S,new Un(a,u,l,c,h,"F",d,f)}function sr(e){return{fieldPath:e.canonicalString()}}function ir(e){return at.fromServerFormat(e.fieldPath)}function ur(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr=class cr{constructor(e,t,a,u,l=rt.min(),c=rt.min(),h=Ve.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=a,this.sequenceNumber=u,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=h,this.expectedCount=d}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar=class ar{constructor(e){this.fe=e}};function lr(e,t){let a=t.key,u={prefixPath:a.getCollectionPath().popLast().toArray(),collectionGroup:a.collectionGroup,documentId:a.path.lastSegment(),readTime:fr(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var l;u.document={name:$i(l=e.fe,t.key),fields:t.data.value.mapValue.fields,updateTime:Di(l,t.version.toTimestamp()),createTime:Di(l,t.createTime.toTimestamp())}}else if(t.isNoDocument())u.noDocument={path:a.path.toArray(),readTime:dr(t.version)};else{if(!t.isUnknownDocument())return O();u.unknownDocument={path:a.path.toArray(),version:dr(t.version)}}return u}function fr(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function dr(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function wr(e){let t=new it(e.seconds,e.nanoseconds);return rt.fromTimestamp(t)}function _r(e,t){let a=(t.baseMutations||[]).map(t=>zi(e.fe,t));for(let e=0;e<t.mutations.length-1;++e){let a=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let u=t.mutations[e+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let u=t.mutations.map(t=>zi(e.fe,t)),l=it.fromMillis(t.localWriteTimeMs);return new Zs(t.batchId,l,a,u)}function mr(e){var t;let a;let u=wr(e.readTime),l=void 0!==e.lastLimboFreeSnapshotVersion?wr(e.lastLimboFreeSnapshotVersion):rt.min();return void 0!==e.query.documents?(1===(t=e.query).documents.length||O(),a=Jn(Gn(Bi(t.documents[0])))):a=Jn(Yi(e.query)),new cr(a,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,u,l,Ve.fromBase64String(e.resumeToken))}function gr(e,t){let a;let u=dr(t.snapshotVersion),l=dr(t.lastLimboFreeSnapshotVersion);a=Fn(t.target)?Hi(e.fe,t.target):Ji(e.fe,t.target);let c=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:$n(t.target),readTime:u,resumeToken:c,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:l,query:a}}function yr(e){let t=Yi({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Xn(t,t.limit,"L"):t}function pr(e,t){return new ei(t.largestBatchId,zi(e.fe,t.overlayMutation))}function Ir(e,t){let a=t.path.lastSegment();return[e,qt(t.path.popLast()),a]}function Tr(e,t,a,u){return{indexId:e,uid:t.uid||"",sequenceNumber:a,readTime:dr(u.readTime),documentKey:qt(u.documentKey.path),largestBatchId:u.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er=class Er{getBundleMetadata(e,t){return Ar(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:wr(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return Ar(e).put({bundleId:t.id,createTime:dr(Ni(t.createTime)),version:t.version})}getNamedQuery(e,t){return vr(e).get(t).next(e=>{if(e)return{name:e.name,query:yr(e.bundledQuery),readTime:wr(e.readTime)}})}saveNamedQuery(e,t){return vr(e).put({name:t.name,readTime:dr(Ni(t.readTime)),bundledQuery:t.bundledQuery})}};function Ar(e){return _e(e,"bundles")}function vr(e){return _e(e,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr=class Rr{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){let a=t.uid||"";return new Rr(e,a)}getOverlay(e,t){return Pr(e).get(Ir(this.userId,t)).next(e=>e?pr(this.serializer,e):null)}getOverlays(e,t){let a=ws();return Rt.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&a.set(t,e)})).next(()=>a)}saveOverlays(e,t,a){let u=[];return a.forEach((a,l)=>{let c=new ei(t,l);u.push(this.we(e,c))}),Rt.waitFor(u)}removeOverlaysForBatchId(e,t,a){let u=new Set;t.forEach(e=>u.add(qt(e.getCollectionPath())));let l=[];return u.forEach(t=>{let u=IDBKeyRange.bound([this.userId,t,a],[this.userId,t,a+1],!1,!0);l.push(Pr(e).J("collectionPathOverlayIndex",u))}),Rt.waitFor(l)}getOverlaysForCollection(e,t,a){let u=ws(),l=qt(t),c=IDBKeyRange.bound([this.userId,l,a],[this.userId,l,Number.POSITIVE_INFINITY],!0);return Pr(e).j("collectionPathOverlayIndex",c).next(e=>{for(let t of e){let e=pr(this.serializer,t);u.set(e.getKey(),e)}return u})}getOverlaysForCollectionGroup(e,t,a,u){let l;let c=ws(),h=IDBKeyRange.bound([this.userId,t,a],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Pr(e).X({index:"collectionGroupOverlayIndex",range:h},(e,t,a)=>{let h=pr(this.serializer,t);c.size()<u||h.largestBatchId===l?(c.set(h.getKey(),h),l=h.largestBatchId):a.done()}).next(()=>c)}we(e,t){return Pr(e).put(function(e,t,a){let[u,l,c]=Ir(t,a.mutation.key);return{userId:t,collectionPath:l,documentId:c,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ji(e.fe,a.mutation)}}(this.serializer,this.userId,t))}};function Pr(e){return _e(e,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br=class br{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Ce(e.integerValue));else if("doubleValue"in e){let a=Ce(e.doubleValue);isNaN(a)?this.ye(t,13):(this.ye(t,15),Bt(a)?t.pe(0):t.pe(a))}else if("timestampValue"in e){let a=e.timestampValue;this.ye(t,20),"string"==typeof a?t.Ie(a):(t.Ie(`${a.seconds||""}`),t.pe(a.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(xe(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){let a=e.geoPointValue;this.ye(t,45),t.pe(a.latitude||0),t.pe(a.longitude||0)}else"mapValue"in e?en(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):O()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){let a=e.fields||{};for(let e of(this.ye(t,55),Object.keys(a)))this.Te(e,t),this.me(a[e],t)}Pe(e,t){let a=e.values||[];for(let e of(this.ye(t,50),a))this.me(e,t)}ve(e,t){this.ye(t,37),ht.fromName(e).path.forEach(e=>{this.ye(t,60),this.be(e,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}};function Sr(e){let t=64-function(e){let t=0;for(let a=0;a<8;++a){let u=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[a]);if(t+=u,8!==u)break}return t}(e);return Math.ceil(t/8)}br.Ve=new br;let Dr=class Dr{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){let t=e[Symbol.iterator](),a=t.next();for(;!a.done;)this.De(a.value),a=t.next();this.Ce()}xe(e){let t=e[Symbol.iterator](),a=t.next();for(;!a.done;)this.Ne(a.value),a=t.next();this.ke()}Me(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.De(e);else if(e<2048)this.De(960|e>>>6),this.De(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.De(480|e>>>12),this.De(128|63&e>>>6),this.De(128|63&e);else{let e=t.codePointAt(0);this.De(240|e>>>18),this.De(128|63&e>>>12),this.De(128|63&e>>>6),this.De(128|63&e)}}this.Ce()}$e(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Ne(e);else if(e<2048)this.Ne(960|e>>>6),this.Ne(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ne(480|e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e);else{let e=t.codePointAt(0);this.Ne(240|e>>>18),this.Ne(128|63&e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e)}}this.ke()}Oe(e){let t=this.Fe(e),a=Sr(t);this.Be(1+a),this.buffer[this.position++]=255&a;for(let e=t.length-a;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Le(e){let t=this.Fe(e),a=Sr(t);this.Be(1+a),this.buffer[this.position++]=~(255&a);for(let e=t.length-a;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),a=0!=(128&t[0]);t[0]^=a?255:128;for(let e=1;e<t.length;++e)t[e]^=a?255:0;return t}De(e){let t=255&e;0===t?(this.Ue(0),this.Ue(255)):255===t?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){let t=255&e;0===t?(this.Ge(0),this.Ge(255)):255===t?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){let t=e+this.position;if(t<=this.buffer.length)return;let a=2*this.buffer.length;a<t&&(a=t);let u=new Uint8Array(a);u.set(this.buffer),this.buffer=u}};let Cr=class Cr{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}};let xr=class xr{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}};let Nr=class Nr{constructor(){this.je=new Dr,this.ze=new Cr(this.je),this.We=new xr(this.je)}seed(e){this.je.seed(e)}He(e){return 0===e?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr=class kr{constructor(e,t,a,u){this.indexId=e,this.documentKey=t,this.arrayValue=a,this.directionalValue=u}Je(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,a=new Uint8Array(t);return a.set(this.directionalValue,0),t!==e?a.set([0],this.directionalValue.length):++a[a.length-1],new kr(this.indexId,this.documentKey,this.arrayValue,a)}};function Mr(e,t){let a=e.indexId-t.indexId;return 0!==a?a:0!==(a=$r(e.arrayValue,t.arrayValue))?a:0!==(a=$r(e.directionalValue,t.directionalValue))?a:ht.comparator(e.documentKey,t.documentKey)}function $r(e,t){for(let a=0;a<e.length&&a<t.length;++a){let u=e[a]-t[a];if(0!==u)return u}return e.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or=class Or{constructor(e){for(let t of(this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[],e.filters))t.isInequality()?this.Ze=t:this.Xe.push(t)}tn(e){e.collectionGroup===this.collectionId||O();let t=ft(e);if(void 0!==t&&!this.en(t))return!1;let a=dt(e),u=new Set,l=0,c=0;for(;l<a.length&&this.en(a[l]);++l)u=u.add(a[l].fieldPath.canonicalString());if(l===a.length)return!0;if(void 0!==this.Ze){if(!u.has(this.Ze.field.canonicalString())){let e=a[l];if(!this.nn(this.Ze,e)||!this.sn(this.Ye[c++],e))return!1}++l}for(;l<a.length;++l){let e=a[l];if(c>=this.Ye.length||!this.sn(this.Ye[c++],e))return!1}return!0}en(e){for(let t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let a="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===a}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}};function Lr(e){return e instanceof mn}function qr(e){return e instanceof gn&&In(e)}function Ur(e){return Lr(e)||qr(e)||function(e){if(e instanceof gn&&pn(e)){for(let t of e.getFilters())if(!Lr(t)&&!qr(t))return!1;return!0}return!1}(e)}function Gr(e,t){return e instanceof mn||e instanceof gn||O(),t instanceof mn||t instanceof gn||O(),jr(e instanceof mn?t instanceof mn?gn.create([e,t],"and"):Qr(e,t):t instanceof mn?Qr(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||O(),yn(e)&&yn(t))return vn(e,t.getFilters());let a=pn(e)?e:t,u=pn(e)?t:e,l=a.filters.map(e=>Gr(e,u));return gn.create(l,"or")}(e,t))}function Qr(e,t){if(yn(t))return vn(t,e.getFilters());{let a=t.filters.map(t=>Gr(e,t));return gn.create(a,"or")}}function jr(e){if(e instanceof mn||e instanceof gn||O(),e instanceof mn)return e;let t=e.getFilters();if(1===t.length)return jr(t[0]);if(Tn(e))return e;let a=t.map(e=>jr(e)),u=[];return a.forEach(t=>{t instanceof mn?u.push(t):t instanceof gn&&(t.op===e.op?u.push(...t.filters):u.push(t))}),1===u.length?u[0]:gn.create(u,e.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr=class zr{constructor(){this.rn=new Wr}addToCollectionParentIndex(e,t){return this.rn.add(t),Rt.resolve()}getCollectionParents(e,t){return Rt.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Rt.resolve()}deleteFieldIndex(e,t){return Rt.resolve()}getDocumentsMatchingTarget(e,t){return Rt.resolve(null)}getIndexType(e,t){return Rt.resolve(0)}getFieldIndexes(e,t){return Rt.resolve([])}getNextCollectionGroupToUpdate(e){return Rt.resolve(null)}getMinOffset(e,t){return Rt.resolve(It.min())}getMinOffsetFromCollectionGroup(e,t){return Rt.resolve(It.min())}updateCollectionGroup(e,t,a){return Rt.resolve()}updateIndexEntries(e,t){return Rt.resolve()}};let Wr=class Wr{constructor(){this.index={}}add(e){let t=e.lastSegment(),a=e.popLast(),u=this.index[t]||new Ee(ut.comparator),l=!u.has(a);return this.index[t]=u.add(a),l}has(e){let t=e.lastSegment(),a=e.popLast(),u=this.index[t];return u&&u.has(a)}getEntries(e){return(this.index[e]||new Ee(ut.comparator)).toArray()}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eA=new Uint8Array(0);let Jr=class Jr{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Wr,this.un=new os(e=>$n(e),(e,t)=>On(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){let a=t.lastSegment(),u=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});let l={collectionId:a,parent:qt(u)};return Yr(e).put(l)}return Rt.resolve()}getCollectionParents(e,t){let a=[],u=IDBKeyRange.bound([t,""],[t+"\x00",""],!1,!0);return Yr(e).j(u).next(e=>{for(let u of e){if(u.collectionId!==t)break;a.push(Gt(u.parent))}return a})}addFieldIndex(e,t){let a=Zr(e),u={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete u.indexId;let l=a.add(u);if(t.indexState){let a=to(e);return l.next(e=>{a.put(Tr(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return l.next()}deleteFieldIndex(e,t){let a=Zr(e),u=to(e),l=Xr(e);return a.delete(t.indexId).next(()=>u.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){let a=Xr(e),u=!0,l=new Map;return Rt.forEach(this.cn(t),t=>this.an(e,t).next(e=>{u&&(u=!!e),l.set(t,e)})).next(()=>{if(u){let e=gs(),u=[];return Rt.forEach(l,(l,c)=>{N("IndexedDbIndexManager",`Using index id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${$n(t)}`);let h=function(e,t){let a=ft(t);if(void 0===a)return null;for(let t of Bn(e,a.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(c,l),d=function(e,t){let a=new Map;for(let u of dt(t))for(let t of Bn(e,u.fieldPath))switch(t.op){case"==":case"in":a.set(u.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return a.set(u.fieldPath.canonicalString(),t.value),Array.from(a.values())}return null}(c,l),f=function(e,t){let a=[],u=!0;for(let l of dt(t)){let t=0===l.kind?Ln(e,l.fieldPath,e.startAt):qn(e,l.fieldPath,e.startAt);a.push(t.value),u&&(u=t.inclusive)}return new hn(a,u)}(c,l),m=function(e,t){let a=[],u=!0;for(let l of dt(t)){let t=0===l.kind?qn(e,l.fieldPath,e.endAt):Ln(e,l.fieldPath,e.endAt);a.push(t.value),u&&(u=t.inclusive)}return new hn(a,u)}(c,l),g=this.hn(l,c,f),p=this.hn(l,c,m),y=this.ln(l,c,d),v=this.fn(l.indexId,h,g,f.inclusive,p,m.inclusive,y);return Rt.forEach(v,l=>a.H(l,t.limit).next(t=>{t.forEach(t=>{let a=ht.fromSegments(t.documentKey);e.has(a)||(e=e.add(a),u.push(a))})}))}).next(()=>u)}return Rt.resolve(null)})}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function Kr(e){if(e instanceof mn||e instanceof gn||O(),e instanceof mn)return e;if(1===e.filters.length)return Kr(e.filters[0]);let t=e.filters.map(e=>Kr(e)),a=gn.create(t,e.op);return Ur(a=jr(a))?a:(a instanceof gn||O(),yn(a)||O(),a.filters.length>1||O(),a.filters.reduce((e,t)=>Gr(e,t)))}(/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){var t,a;if(e instanceof mn||e instanceof gn||O(),e instanceof mn){if(e instanceof Cn){let u=(null===(a=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===a?void 0:a.map(t=>mn.create(e.field,"==",t)))||[];return gn.create(u,"or")}return e}let u=e.filters.map(e=>Fr(e));return gn.create(u,e.op)}(e));return Ur(t)||O(),Lr(t)||qr(t)?[t]:t.getFilters()})(gn.create(e.filters,"and")).map(t=>Mn(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t)),t}fn(e,t,a,u,l,c,h){let d=(null!=t?t.length:1)*Math.max(a.length,l.length),f=d/(null!=t?t.length:1),m=[];for(let g=0;g<d;++g){let d=t?this.dn(t[g/f]):eA,p=this.wn(e,d,a[g%f],u),y=this._n(e,d,l[g%f],c),v=h.map(t=>this.wn(e,d,t,!0));m.push(...this.createRange(p,y,v))}return m}wn(e,t,a,u){let l=new kr(e,ht.empty(),t,a);return u?l:l.Je()}_n(e,t,a,u){let l=new kr(e,ht.empty(),t,a);return u?l.Je():l}an(e,t){let a=new Or(t),u=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,u).next(e=>{let t=null;for(let u of e)a.tn(u)&&(!t||u.fields.length>t.fields.length)&&(t=u);return t})}getIndexType(e,t){let a=2,u=this.cn(t);return Rt.forEach(u,t=>this.an(e,t).next(e=>{e?0!==a&&e.fields.length<function(e){let t=new Ee(at.comparator),a=!1;for(let u of e.filters)for(let e of u.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?a=!0:t=t.add(e.field));for(let a of e.orderBy)a.field.isKeyField()||(t=t.add(a.field));return t.size+(a?1:0)}(t)&&(a=1):a=0})).next(()=>null!==t.limit&&u.length>1&&2===a?1:a)}mn(e,t){let a=new Nr;for(let u of dt(e)){let e=t.data.field(u.fieldPath);if(null==e)return null;let l=a.He(u.kind);br.Ve._e(e,l)}return a.Qe()}dn(e){let t=new Nr;return br.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){let a=new Nr;return br.Ve._e(We(this.databaseId,t),a.He(function(e){let t=dt(e);return 0===t.length?0:t[t.length-1].kind}(e))),a.Qe()}ln(e,t,a){if(null===a)return[];let u=[];u.push(new Nr);let l=0;for(let c of dt(e)){let e=a[l++];for(let a of u)if(this.yn(t,c.fieldPath)&&Je(e))u=this.pn(u,c,e);else{let t=a.He(c.kind);br.Ve._e(e,t)}}return this.In(u)}hn(e,t,a){return this.ln(e,t,a.position)}In(e){let t=[];for(let a=0;a<e.length;++a)t[a]=e[a].Qe();return t}pn(e,t,a){let u=[...e],l=[];for(let e of a.arrayValue.values||[])for(let a of u){let u=new Nr;u.seed(a.Qe()),br.Ve._e(e,u.He(t.kind)),l.push(u)}return l}yn(e,t){return!!e.filters.find(e=>e instanceof mn&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let a=Zr(e),u=to(e);return(t?a.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):a.j()).next(e=>{let t=[];return Rt.forEach(e,e=>u.get([e.indexId,this.uid]).next(a=>{t.push(function(e,t){let a=t?new gt(t.sequenceNumber,new It(wr(t.readTime),new ht(Gt(t.documentKey)),t.largestBatchId)):gt.empty(),u=e.fields.map(([e,t])=>new _t(at.fromServerFormat(e),t));return new lt(e.indexId,e.collectionGroup,u,a)}(e,a))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let a=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==a?a:et(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,a){let u=Zr(e),l=to(e);return this.Tn(e).next(e=>u.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>Rt.forEach(t,t=>l.put(Tr(t.indexId,this.user,e,a)))))}updateIndexEntries(e,t){let a=new Map;return Rt.forEach(t,(t,u)=>{let l=a.get(t.collectionGroup);return(l?Rt.resolve(l):this.getFieldIndexes(e,t.collectionGroup)).next(l=>(a.set(t.collectionGroup,l),Rt.forEach(l,a=>this.En(e,t,a).next(t=>{let l=this.An(u,a);return t.isEqual(l)?Rt.resolve():this.vn(e,u,a,t,l)}))))})}Rn(e,t,a,u){return Xr(e).put({indexId:u.indexId,uid:this.uid,arrayValue:u.arrayValue,directionalValue:u.directionalValue,orderedDocumentKey:this.gn(a,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,a,u){return Xr(e).delete([u.indexId,this.uid,u.arrayValue,u.directionalValue,this.gn(a,t.key),t.key.path.toArray()])}En(e,t,a){let u=Xr(e),l=new Ee(Mr);return u.X({index:"documentKeyIndex",range:IDBKeyRange.only([a.indexId,this.uid,this.gn(a,t)])},(e,u)=>{l=l.add(new kr(a.indexId,t,u.arrayValue,u.directionalValue))}).next(()=>l)}An(e,t){let a=new Ee(Mr),u=this.mn(t,e);if(null==u)return a;let l=ft(t);if(null!=l){let c=e.data.field(l.fieldPath);if(Je(c))for(let l of c.arrayValue.values||[])a=a.add(new kr(t.indexId,e.key,this.dn(l),u))}else a=a.add(new kr(t.indexId,e.key,eA,u));return a}vn(e,t,a,u,l){N("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let c=[];return function(e,t,a,u,l){let c=e.getIterator(),h=t.getIterator(),d=ve(c),f=ve(h);for(;d||f;){let e=!1,t=!1;if(d&&f){let u=a(d,f);u<0?t=!0:u>0&&(e=!0)}else null!=d?t=!0:e=!0;e?(u(f),f=ve(h)):t?(l(d),d=ve(c)):(d=ve(c),f=ve(h))}}(u,l,Mr,u=>{c.push(this.Rn(e,t,a,u))},u=>{c.push(this.Pn(e,t,a,u))}),Rt.waitFor(c)}Tn(e){let t=1;return to(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,a,u)=>{u.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,a){a=a.sort((e,t)=>Mr(e,t)).filter((e,t,a)=>!t||0!==Mr(e,a[t-1]));let u=[];for(let l of(u.push(e),a)){let a=Mr(l,e),c=Mr(l,t);if(0===a)u[0]=e.Je();else if(a>0&&c<0)u.push(l),u.push(l.Je());else if(c>0)break}u.push(t);let l=[];for(let e=0;e<u.length;e+=2){if(this.bn(u[e],u[e+1]))return[];let t=[u[e].indexId,this.uid,u[e].arrayValue,u[e].directionalValue,eA,[]],a=[u[e+1].indexId,this.uid,u[e+1].arrayValue,u[e+1].directionalValue,eA,[]];l.push(IDBKeyRange.bound(t,a))}return l}bn(e,t){return Mr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(eo)}getMinOffset(e,t){return Rt.mapArray(this.cn(t),t=>this.an(e,t).next(e=>e||O())).next(eo)}};function Yr(e){return _e(e,"collectionParents")}function Xr(e){return _e(e,"indexEntries")}function Zr(e){return _e(e,"indexConfiguration")}function to(e){return _e(e,"indexState")}function eo(e){0!==e.length||O();let t=e[0].indexState.offset,a=t.largestBatchId;for(let u=1;u<e.length;u++){let l=e[u].indexState.offset;0>Tt(l,t)&&(t=l),a<l.largestBatchId&&(a=l.largestBatchId)}return new It(t.readTime,t.documentKey,a)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eR={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};let so=class so{constructor(e,t,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=a}static withCacheSize(e){return new so(e,so.DEFAULT_COLLECTION_PERCENTILE,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(e,t,a){let u=e.store("mutations"),l=e.store("documentMutations"),c=[],h=IDBKeyRange.only(a.batchId),d=0,f=u.X({range:h},(e,t,a)=>(d++,a.delete()));c.push(f.next(()=>{1===d||O()}));let m=[];for(let e of a.mutations){var g,p;let u=(g=e.key.path,p=a.batchId,[t,qt(g),p]);c.push(l.delete(u)),m.push(e.key)}return Rt.waitFor(c).next(()=>m)}function ro(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw O();t=e.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */so.DEFAULT_COLLECTION_PERCENTILE=10,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,so.DEFAULT=new so(41943040,so.DEFAULT_COLLECTION_PERCENTILE,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),so.DISABLED=new so(-1,0,0);let oo=class oo{constructor(e,t,a,u){this.userId=e,this.serializer=t,this.indexManager=a,this.referenceDelegate=u,this.Vn={}}static de(e,t,a,u){""!==e.uid||O();let l=e.isAuthenticated()?e.uid:"";return new oo(l,t,a,u)}checkEmpty(e){let t=!0,a=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return co(e).X({index:"userMutationsIndex",range:a},(e,a,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,a,u){let l=ao(e),c=co(e);return c.add({}).next(h=>{"number"==typeof h||O();let d=new Zs(h,t,a,u),f=function(e,t,a){let u=a.baseMutations.map(t=>ji(e.fe,t)),l=a.mutations.map(t=>ji(e.fe,t));return{userId:t,batchId:a.batchId,localWriteTimeMs:a.localWriteTime.toMillis(),baseMutations:u,mutations:l}}(this.serializer,this.userId,d),m=[],g=new Ee((e,t)=>et(e.canonicalString(),t.canonicalString()));for(let e of u){let t=[this.userId,qt(e.key.path),h];g=g.add(e.key.path.popLast()),m.push(c.put(f)),m.push(l.put(t,_))}return g.forEach(t=>{m.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Vn[h]=d.keys()}),Rt.waitFor(m).next(()=>d)})}lookupMutationBatch(e,t){return co(e).get(t).next(e=>e?(e.userId===this.userId||O(),_r(this.serializer,e)):null)}Sn(e,t){return this.Vn[t]?Rt.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let a=e.keys();return this.Vn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){let a=t+1,u=IDBKeyRange.lowerBound([this.userId,a]),l=null;return co(e).X({index:"userMutationsIndex",range:u},(e,t,u)=>{t.userId===this.userId&&(t.batchId>=a||O(),l=_r(this.serializer,t)),u.done()}).next(()=>l)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),a=-1;return co(e).X({index:"userMutationsIndex",range:t,reverse:!0},(e,t,u)=>{a=t.batchId,u.done()}).next(()=>a)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return co(e).j("userMutationsIndex",t).next(e=>e.map(e=>_r(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let a=[this.userId,qt(t.path)],u=IDBKeyRange.lowerBound(a),l=[];return ao(e).X({range:u},(a,u,c)=>{let[h,d,f]=a,m=Gt(d);if(h===this.userId&&t.path.isEqual(m))return co(e).get(f).next(e=>{if(!e)throw O();e.userId===this.userId||O(),l.push(_r(this.serializer,e))});c.done()}).next(()=>l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new Ee(et),u=[];return t.forEach(t=>{let l=[this.userId,qt(t.path)],c=IDBKeyRange.lowerBound(l),h=ao(e).X({range:c},(e,u,l)=>{let[c,h,d]=e,f=Gt(h);c===this.userId&&t.path.isEqual(f)?a=a.add(d):l.done()});u.push(h)}),Rt.waitFor(u).next(()=>this.Dn(e,a))}getAllMutationBatchesAffectingQuery(e,t){let a=t.path,u=a.length+1,l=[this.userId,qt(a)],c=IDBKeyRange.lowerBound(l),h=new Ee(et);return ao(e).X({range:c},(e,t,l)=>{let[c,d,f]=e,m=Gt(d);c===this.userId&&a.isPrefixOf(m)?m.length===u&&(h=h.add(f)):l.done()}).next(()=>this.Dn(e,h))}Dn(e,t){let a=[],u=[];return t.forEach(t=>{u.push(co(e).get(t).next(e=>{if(null===e)throw O();e.userId===this.userId||O(),a.push(_r(this.serializer,e))}))}),Rt.waitFor(u).next(()=>a)}removeMutationBatch(e,t){return io(e.ht,this.userId,t).next(a=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),Rt.forEach(a,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Rt.resolve();let a=IDBKeyRange.lowerBound([this.userId]),u=[];return ao(e).X({range:a},(e,t,a)=>{if(e[0]===this.userId){let t=Gt(e[1]);u.push(t)}else a.done()}).next(()=>{0===u.length||O()})})}containsKey(e,t){return uo(e,this.userId,t)}xn(e){return ho(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}};function uo(e,t,a){let u=[t,qt(a.path)],l=u[1],c=IDBKeyRange.lowerBound(u),h=!1;return ao(e).X({range:c,Y:!0},(e,a,u)=>{let[c,d,f]=e;c===t&&d===l&&(h=!0),u.done()}).next(()=>h)}function co(e){return _e(e,"mutations")}function ao(e){return _e(e,"documentMutations")}function ho(e){return _e(e,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo=class lo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new lo(0)}static Mn(){return new lo(-1)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo=class fo{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{let a=new lo(t.highestTargetId);return t.highestTargetId=a.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(e=>rt.fromTimestamp(new it(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,a){return this.$n(e).next(u=>(u.highestListenSequenceNumber=t,a&&(u.lastRemoteSnapshotVersion=a.toTimestamp()),t>u.highestListenSequenceNumber&&(u.highestListenSequenceNumber=t),this.On(e,u)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(a=>(a.targetCount+=1,this.Bn(t,a),this.On(e,a))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>wo(e).delete(t.targetId)).next(()=>this.$n(e)).next(t=>(t.targetCount>0||O(),t.targetCount-=1,this.On(e,t)))}removeTargets(e,t,a){let u=0,l=[];return wo(e).X((c,h)=>{let d=mr(h);d.sequenceNumber<=t&&null===a.get(d.targetId)&&(u++,l.push(this.removeTargetData(e,d)))}).next(()=>Rt.waitFor(l)).next(()=>u)}forEachTarget(e,t){return wo(e).X((e,a)=>{let u=mr(a);t(u)})}$n(e){return _o(e).get("targetGlobalKey").next(e=>(null!==e||O(),e))}On(e,t){return _o(e).put("targetGlobalKey",t)}Fn(e,t){return wo(e).put(gr(this.serializer,t))}Bn(e,t){let a=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,a=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,a=!0),a}getTargetCount(e){return this.$n(e).next(e=>e.targetCount)}getTargetData(e,t){let a=$n(t),u=IDBKeyRange.bound([a,Number.NEGATIVE_INFINITY],[a,Number.POSITIVE_INFINITY]),l=null;return wo(e).X({range:u,index:"queryTargetsIndex"},(e,a,u)=>{let c=mr(a);On(t,c.target)&&(l=c,u.done())}).next(()=>l)}addMatchingKeys(e,t,a){let u=[],l=mo(e);return t.forEach(t=>{let c=qt(t.path);u.push(l.put({targetId:a,path:c})),u.push(this.referenceDelegate.addReference(e,a,t))}),Rt.waitFor(u)}removeMatchingKeys(e,t,a){let u=mo(e);return Rt.forEach(t,t=>{let l=qt(t.path);return Rt.waitFor([u.delete([a,l]),this.referenceDelegate.removeReference(e,a,t)])})}removeMatchingKeysForTargetId(e,t){let a=mo(e),u=IDBKeyRange.bound([t],[t+1],!1,!0);return a.delete(u)}getMatchingKeysForTargetId(e,t){let a=IDBKeyRange.bound([t],[t+1],!1,!0),u=mo(e),l=gs();return u.X({range:a,Y:!0},(e,t,a)=>{let u=Gt(e[1]),c=new ht(u);l=l.add(c)}).next(()=>l)}containsKey(e,t){let a=qt(t.path),u=IDBKeyRange.bound([a],[a+"\x00"],!1,!0),l=0;return mo(e).X({index:"documentTargetsIndex",Y:!0,range:u},([e,t],a,u)=>{0!==e&&(l++,u.done())}).next(()=>l>0)}le(e,t){return wo(e).get(t).next(e=>e?mr(e):null)}};function wo(e){return _e(e,"targets")}function _o(e){return _e(e,"targetGlobal")}function mo(e){return _e(e,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go([e,t],[a,u]){let l=et(e,a);return 0===l?et(t,u):l}let yo=class yo{constructor(e){this.Ln=e,this.buffer=new Ee(go),this.qn=0}Un(){return++this.qn}Kn(e){let t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>go(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}};let po=class po{constructor(e,t,a){this.garbageCollector=e,this.asyncQueue=t,this.localStore=a,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Dt(e)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await vt(e)}await this.Qn(3e5)})}};let Io=class Io{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Rt.resolve(Ot.ct);let a=new yo(t);return this.jn.forEachTarget(e,e=>a.Kn(e.sequenceNumber)).next(()=>this.jn.Wn(e,e=>a.Kn(e))).next(()=>a.maxValue)}removeTargets(e,t,a){return this.jn.removeTargets(e,t,a)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector","Garbage collection skipped; disabled"),Rt.resolve(eR)):this.getCacheSize(e).next(a=>a<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eR):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let a,u,l,c,h,f,m;let g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),u=this.params.maximumSequenceNumbersToCollect):u=t,c=Date.now(),this.nthSequenceNumber(e,u))).next(u=>(a=u,h=Date.now(),this.removeTargets(e,a,t))).next(t=>(l=t,f=Date.now(),this.removeOrphanedDocuments(e,a))).next(e=>(m=Date.now(),C()<=d.in.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-g}ms
	Determined least recently used ${u} in `+(h-c)+"ms\n"+`	Removed ${l} targets in `+(f-h)+"ms\n"+`	Removed ${e} documents in `+(m-f)+"ms\n"+`Total Duration: ${m-g}ms`),Rt.resolve({didRun:!0,sequenceNumbersCollected:u,targetsRemoved:l,documentsRemoved:e})))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo=class Eo{constructor(e,t){this.db=e,this.garbageCollector=new Io(this,t)}zn(e){let t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Jn(e){let t=0;return this.Wn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(e,a)=>t(a))}addReference(e,t,a){return Ao(e,a)}removeReference(e,t,a){return Ao(e,a)}removeTargets(e,t,a){return this.db.getTargetCache().removeTargets(e,t,a)}markPotentiallyOrphaned(e,t){return Ao(e,t)}Xn(e,t){let a;return a=!1,ho(e).Z(u=>uo(e,u,t).next(e=>(e&&(a=!0),Rt.resolve(!e)))).next(()=>a)}removeOrphanedDocuments(e,t){let a=this.db.getRemoteDocumentCache().newChangeBuffer(),u=[],l=0;return this.Yn(e,(c,h)=>{if(h<=t){let t=this.Xn(e,c).next(t=>{if(!t)return l++,a.getEntry(e,c).next(()=>(a.removeEntry(c,rt.min()),mo(e).delete([0,qt(c.path)])))});u.push(t)}}).next(()=>Rt.waitFor(u)).next(()=>a.apply(e)).next(()=>l)}removeTarget(e,t){let a=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,a)}updateLimboDocument(e,t){return Ao(e,t)}Yn(e,t){let a=mo(e),u,l=Ot.ct;return a.X({index:"documentTargetsIndex"},([e,a],{path:c,sequenceNumber:h})=>{0===e?(l!==Ot.ct&&t(new ht(Gt(u)),l),l=h,u=c):l=Ot.ct}).next(()=>{l!==Ot.ct&&t(new ht(Gt(u)),l)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}};function Ao(e,t){var a;return mo(e).put((a=e.currentSequenceNumber,{targetId:0,path:qt(t.path),sequenceNumber:a}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo=class vo{constructor(){this.changes=new os(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,an.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let a=this.changes.get(t);return void 0!==a?Rt.resolve(a):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro=class Ro{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,a){return So(e).put(a)}removeEntry(e,t,a){return So(e).delete(function(e,t){let a=e.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],fr(t),a[a.length-1]]}(t,a))}updateMetadata(e,t){return this.getMetadata(e).next(a=>(a.byteSize+=t,this.Zn(e,a)))}getEntry(e,t){let a=an.newInvalidDocument(t);return So(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Do(t))},(e,u)=>{a=this.ts(t,u)}).next(()=>a)}es(e,t){let a={size:0,document:an.newInvalidDocument(t)};return So(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Do(t))},(e,u)=>{a={document:this.ts(t,u),size:ro(u)}}).next(()=>a)}getEntries(e,t){let a=eb;return this.ns(e,t,(e,t)=>{let u=this.ts(e,t);a=a.insert(e,u)}).next(()=>a)}ss(e,t){let a=eb,u=new pe(ht.comparator);return this.ns(e,t,(e,t)=>{let l=this.ts(e,t);a=a.insert(e,l),u=u.insert(e,ro(t))}).next(()=>({documents:a,rs:u}))}ns(e,t,a){if(t.isEmpty())return Rt.resolve();let u=new Ee(xo);t.forEach(e=>u=u.add(e));let l=IDBKeyRange.bound(Do(u.first()),Do(u.last())),c=u.getIterator(),h=c.getNext();return So(e).X({index:"documentKeyIndex",range:l},(e,t,u)=>{let l=ht.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;h&&0>xo(h,l);)a(h,null),h=c.getNext();h&&h.isEqual(l)&&(a(h,t),h=c.hasNext()?c.getNext():null),h?u.G(Do(h)):u.done()}).next(()=>{for(;h;)a(h,null),h=c.hasNext()?c.getNext():null})}getDocumentsMatchingQuery(e,t,a,u){let l=t.path,c=[l.popLast().toArray(),l.lastSegment(),fr(a.readTime),a.documentKey.path.isEmpty()?"":a.documentKey.path.lastSegment()],h=[l.popLast().toArray(),l.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return So(e).j(IDBKeyRange.bound(c,h,!0)).next(e=>{let a=eb;for(let l of e){let e=this.ts(ht.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);e.isFoundDocument()&&(ns(t,e)||u.has(e.key))&&(a=a.insert(e.key,e))}return a})}getAllFromCollectionGroup(e,t,a,u){let l=eb,c=Co(t,a),h=Co(t,It.max());return So(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(c,h,!0)},(e,t,a)=>{let c=this.ts(ht.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(l=l.insert(c.key,c)).size===u&&a.done()}).next(()=>l)}newChangeBuffer(e){return new bo(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Vo(e).get("remoteDocumentGlobalKey").next(e=>(e||O(),e))}Zn(e,t){return Vo(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){let e=function(e,t){let a;if(t.document)a=Ki(e.fe,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=ht.fromSegments(t.noDocument.path),u=wr(t.noDocument.readTime);a=an.newNoDocument(e,u),t.hasCommittedMutations&&a.setHasCommittedMutations()}else{if(!t.unknownDocument)return O();{let e=ht.fromSegments(t.unknownDocument.path),u=wr(t.unknownDocument.version);a=an.newUnknownDocument(e,u)}}return t.readTime&&a.setReadTime(function(e){let t=new it(e[0],e[1]);return rt.fromTimestamp(t)}(t.readTime)),a}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(rt.min())))return e}return an.newInvalidDocument(e)}};let bo=class bo extends vo{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new os(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],a=0,u=new Ee((e,t)=>et(e.canonicalString(),t.canonicalString()));return this.changes.forEach((l,c)=>{let h=this.us.get(l);if(t.push(this.os.removeEntry(e,l,h.readTime)),c.isValidDocument()){let d=lr(this.os.serializer,c);u=u.add(l.path.popLast());let f=ro(d);a+=f-h.size,t.push(this.os.addEntry(e,l,d))}else if(a-=h.size,this.trackRemovals){let a=lr(this.os.serializer,c.convertToNoDocument(rt.min()));t.push(this.os.addEntry(e,l,a))}}),u.forEach(a=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,a))}),t.push(this.os.updateMetadata(e,a)),Rt.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(e=>(this.us.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:e,rs:t})=>(t.forEach((t,a)=>{this.us.set(t,{size:a,readTime:e.get(t).readTime})}),e))}};function Vo(e){return _e(e,"remoteDocumentGlobal")}function So(e){return _e(e,"remoteDocumentsV14")}function Do(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Co(e,t){let a=t.documentKey.path.toArray();return[e,fr(t.readTime),a.slice(0,a.length-2),a.length>0?a[a.length-1]:""]}function xo(e,t){let a=e.path.toArray(),u=t.path.toArray(),l=0;for(let e=0;e<a.length-2&&e<u.length-2;++e)if(l=et(a[e],u[e]))return l;return(l=et(a.length,u.length))||(l=et(a[a.length-2],u[u.length-2]))||et(a[a.length-1],u[u.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No=class No{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko=class ko{constructor(e,t,a,u){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=a,this.indexManager=u}getDocument(e,t){let a=null;return this.documentOverlayCache.getOverlay(e,t).next(u=>(a=u,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==a&&Ks(a.mutation,e,Re.empty(),it.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,gs()).next(()=>t))}getLocalViewOfDocuments(e,t,a=gs()){let u=ws();return this.populateOverlays(e,u,t).next(()=>this.computeViews(e,t,u,a).next(e=>{let t=hs();return e.forEach((e,a)=>{t=t.insert(e,a.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let a=ws();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,gs()))}populateOverlays(e,t,a){let u=[];return a.forEach(e=>{t.has(e)||u.push(e)}),this.documentOverlayCache.getOverlays(e,u).next(e=>{e.forEach((e,a)=>{t.set(e,a)})})}computeViews(e,t,a,u){let l=eb,c=ws(),h=ws();return t.forEach((e,t)=>{let h=a.get(t.key);u.has(t.key)&&(void 0===h||h.mutation instanceof zs)?l=l.insert(t.key,t):void 0!==h?(c.set(t.key,h.mutation.getFieldMask()),Ks(h.mutation,t,h.mutation.getFieldMask(),it.now())):c.set(t.key,Re.empty())}),this.recalculateAndSaveOverlays(e,l).next(e=>(e.forEach((e,t)=>c.set(e,t)),t.forEach((e,t)=>{var a;return h.set(e,new No(t,null!==(a=c.get(e))&&void 0!==a?a:null))}),h))}recalculateAndSaveOverlays(e,t){let a=ws(),u=new pe((e,t)=>e-t),l=gs();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let l of e)l.keys().forEach(e=>{let c=t.get(e);if(null===c)return;let h=a.get(e)||Re.empty();h=l.applyToLocalView(c,h),a.set(e,h);let d=(u.get(l.batchId)||gs()).add(e);u=u.insert(l.batchId,d)})}).next(()=>{let c=[],h=u.getReverseIterator();for(;h.hasNext();){let u=h.getNext(),d=u.key,f=u.value,m=ws();f.forEach(e=>{if(!l.has(e)){let u=qs(t.get(e),a.get(e));null!==u&&m.set(e,u),l=l.add(e)}}),c.push(this.documentOverlayCache.saveOverlays(e,d,m))}return Rt.waitFor(c)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,a){return ht.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Wn(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,a):this.getDocumentsMatchingCollectionQuery(e,t,a)}getNextDocuments(e,t,a,u){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,a,u).next(l=>{let c=u-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,a.largestBatchId,u-l.size):Rt.resolve(ws()),h=-1,d=l;return c.next(t=>Rt.forEach(t,(t,a)=>(h<a.largestBatchId&&(h=a.largestBatchId),l.get(t)?Rt.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{d=d.insert(t,e)}))).next(()=>this.populateOverlays(e,t,l)).next(()=>this.computeViews(e,d,t,gs())).next(e=>({batchId:h,changes:ls(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ht(t)).next(e=>{let t=hs();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,a){let u=t.collectionGroup,l=hs();return this.indexManager.getCollectionParents(e,u).next(c=>Rt.forEach(c,c=>{var h;let d=(h=c.child(u),new Un(h,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,d,a).next(e=>{e.forEach((e,t)=>{l=l.insert(e,t)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,a){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,a.largestBatchId).next(l=>(u=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,a,u))).next(e=>{u.forEach((t,a)=>{let u=a.getKey();null===e.get(u)&&(e=e.insert(u,an.newInvalidDocument(u)))});let a=hs();return e.forEach((e,l)=>{let c=u.get(e);void 0!==c&&Ks(c.mutation,l,Re.empty(),it.now()),ns(t,l)&&(a=a.insert(e,l))}),a})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo=class Mo{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Rt.resolve(this.cs.get(t))}saveBundleMetadata(e,t){return this.cs.set(t.id,{id:t.id,version:t.version,createTime:Ni(t.createTime)}),Rt.resolve()}getNamedQuery(e,t){return Rt.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:t.name,query:yr(t.bundledQuery),readTime:Ni(t.readTime)}),Rt.resolve()}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o=class $o{constructor(){this.overlays=new pe(ht.comparator),this.ls=new Map}getOverlay(e,t){return Rt.resolve(this.overlays.get(t))}getOverlays(e,t){let a=ws();return Rt.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&a.set(t,e)})).next(()=>a)}saveOverlays(e,t,a){return a.forEach((a,u)=>{this.we(e,t,u)}),Rt.resolve()}removeOverlaysForBatchId(e,t,a){let u=this.ls.get(a);return void 0!==u&&(u.forEach(e=>this.overlays=this.overlays.remove(e)),this.ls.delete(a)),Rt.resolve()}getOverlaysForCollection(e,t,a){let u=ws(),l=t.length+1,c=new ht(t.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){let e=h.getNext().value,c=e.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===l&&e.largestBatchId>a&&u.set(e.getKey(),e)}return Rt.resolve(u)}getOverlaysForCollectionGroup(e,t,a,u){let l=new pe((e,t)=>e-t),c=this.overlays.getIterator();for(;c.hasNext();){let e=c.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>a){let t=l.get(e.largestBatchId);null===t&&(t=ws(),l=l.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let h=ws(),d=l.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((e,t)=>h.set(e,t)),!(h.size()>=u)););return Rt.resolve(h)}we(e,t,a){let u=this.overlays.get(a.key);if(null!==u){let e=this.ls.get(u.largestBatchId).delete(a.key);this.ls.set(u.largestBatchId,e)}this.overlays=this.overlays.insert(a.key,new ei(t,a));let l=this.ls.get(t);void 0===l&&(l=gs(),this.ls.set(t,l)),this.ls.set(t,l.add(a.key))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo=class Oo{constructor(){this.fs=new Ee(Fo.ds),this.ws=new Ee(Fo._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){let a=new Fo(e,t);this.fs=this.fs.add(a),this.ws=this.ws.add(a)}gs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ys(new Fo(e,t))}ps(e,t){e.forEach(e=>this.removeReference(e,t))}Is(e){let t=new ht(new ut([])),a=new Fo(t,e),u=new Fo(t,e+1),l=[];return this.ws.forEachInRange([a,u],e=>{this.ys(e),l.push(e.key)}),l}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){let t=new ht(new ut([])),a=new Fo(t,e),u=new Fo(t,e+1),l=gs();return this.ws.forEachInRange([a,u],e=>{l=l.add(e.key)}),l}containsKey(e){let t=new Fo(e,0),a=this.fs.firstAfterOrEqual(t);return null!==a&&e.isEqual(a.key)}};let Fo=class Fo{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return ht.comparator(e.key,t.key)||et(e.As,t.As)}static _s(e,t){return et(e.As,t.As)||ht.comparator(e.key,t.key)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo=class Bo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Ee(Fo.ds)}checkEmpty(e){return Rt.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,a,u){let l=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let c=new Zs(l,t,a,u);for(let t of(this.mutationQueue.push(c),u))this.Rs=this.Rs.add(new Fo(t.key,l)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Rt.resolve(c)}lookupMutationBatch(e,t){return Rt.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){let a=this.bs(t+1),u=a<0?0:a;return Rt.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Rt.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Rt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let a=new Fo(t,0),u=new Fo(t,Number.POSITIVE_INFINITY),l=[];return this.Rs.forEachInRange([a,u],e=>{let t=this.Ps(e.As);l.push(t)}),Rt.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new Ee(et);return t.forEach(e=>{let t=new Fo(e,0),u=new Fo(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,u],e=>{a=a.add(e.As)})}),Rt.resolve(this.Vs(a))}getAllMutationBatchesAffectingQuery(e,t){let a=t.path,u=a.length+1,l=a;ht.isDocumentKey(l)||(l=l.child(""));let c=new Fo(new ht(l),0),h=new Ee(et);return this.Rs.forEachWhile(e=>{let t=e.key.path;return!!a.isPrefixOf(t)&&(t.length===u&&(h=h.add(e.As)),!0)},c),Rt.resolve(this.Vs(h))}Vs(e){let t=[];return e.forEach(e=>{let a=this.Ps(e);null!==a&&t.push(a)}),t}removeMutationBatch(e,t){0===this.Ss(t.batchId,"removed")||O(),this.mutationQueue.shift();let a=this.Rs;return Rt.forEach(t.mutations,u=>{let l=new Fo(u.key,t.batchId);return a=a.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,u.key)}).next(()=>{this.Rs=a})}Cn(e){}containsKey(e,t){let a=new Fo(t,0),u=this.Rs.firstAfterOrEqual(a);return Rt.resolve(t.isEqual(u&&u.key))}performConsistencyCheck(e){return this.mutationQueue.length,Rt.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){let t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo=class Lo{constructor(e){this.Ds=e,this.docs=new pe(ht.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let a=t.key,u=this.docs.get(a),l=u?u.size:0,c=this.Ds(t);return this.docs=this.docs.insert(a,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let a=this.docs.get(t);return Rt.resolve(a?a.document.mutableCopy():an.newInvalidDocument(t))}getEntries(e,t){let a=eb;return t.forEach(e=>{let t=this.docs.get(e);a=a.insert(e,t?t.document.mutableCopy():an.newInvalidDocument(e))}),Rt.resolve(a)}getDocumentsMatchingQuery(e,t,a,u){let l=eb,c=t.path,h=new ht(c.child("")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){let{key:e,value:{document:h}}=d.getNext();if(!c.isPrefixOf(e.path))break;e.path.length>c.length+1||0>=Tt(pt(h),a)||(u.has(h.key)||ns(t,h))&&(l=l.insert(h.key,h.mutableCopy()))}return Rt.resolve(l)}getAllFromCollectionGroup(e,t,a,u){O()}Cs(e,t){return Rt.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new qo(this)}getSize(e){return Rt.resolve(this.size)}};let qo=class qo extends vo{constructor(e){super(),this.os=e}applyChanges(e){let t=[];return this.changes.forEach((a,u)=>{u.isValidDocument()?t.push(this.os.addEntry(e,u)):this.os.removeEntry(a)}),Rt.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=class Uo{constructor(e){this.persistence=e,this.xs=new os(e=>$n(e),On),this.lastRemoteSnapshotVersion=rt.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Oo,this.targetCount=0,this.Ms=lo.kn()}forEachTarget(e,t){return this.xs.forEach((e,a)=>t(a)),Rt.resolve()}getLastRemoteSnapshotVersion(e){return Rt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Rt.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Rt.resolve(this.highestTargetId)}setTargetsMetadata(e,t,a){return a&&(this.lastRemoteSnapshotVersion=a),t>this.Ns&&(this.Ns=t),Rt.resolve()}Fn(e){this.xs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ms=new lo(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Rt.resolve()}updateTargetData(e,t){return this.Fn(t),Rt.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Rt.resolve()}removeTargets(e,t,a){let u=0,l=[];return this.xs.forEach((c,h)=>{h.sequenceNumber<=t&&null===a.get(h.targetId)&&(this.xs.delete(c),l.push(this.removeMatchingKeysForTargetId(e,h.targetId)),u++)}),Rt.waitFor(l).next(()=>u)}getTargetCount(e){return Rt.resolve(this.targetCount)}getTargetData(e,t){let a=this.xs.get(t)||null;return Rt.resolve(a)}addMatchingKeys(e,t,a){return this.ks.gs(t,a),Rt.resolve()}removeMatchingKeys(e,t,a){this.ks.ps(t,a);let u=this.persistence.referenceDelegate,l=[];return u&&t.forEach(t=>{l.push(u.markPotentiallyOrphaned(e,t))}),Rt.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Rt.resolve()}getMatchingKeysForTargetId(e,t){let a=this.ks.Es(t);return Rt.resolve(a)}containsKey(e,t){return Rt.resolve(this.ks.containsKey(t))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko=class Ko{constructor(e,t){this.$s={},this.overlays={},this.Os=new Ot(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Uo(this),this.indexManager=new zr,this.remoteDocumentCache=new Lo(e=>this.referenceDelegate.Ls(e)),this.serializer=new ar(t),this.qs=new Mo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $o,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let a=this.$s[e.toKey()];return a||(a=new Bo(t,this.referenceDelegate),this.$s[e.toKey()]=a),a}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,a){N("MemoryPersistence","Starting transaction:",e);let u=new Go(this.Os.next());return this.referenceDelegate.Us(),a(u).next(e=>this.referenceDelegate.Ks(u).next(()=>e)).toPromise().then(e=>(u.raiseOnCommittedEvent(),e))}Gs(e,t){return Rt.or(Object.values(this.$s).map(a=>()=>a.containsKey(e,t)))}};let Go=class Go extends At{constructor(e){super(),this.currentSequenceNumber=e}};let Qo=class Qo{constructor(e){this.persistence=e,this.Qs=new Oo,this.js=null}static zs(e){return new Qo(e)}get Ws(){if(this.js)return this.js;throw O()}addReference(e,t,a){return this.Qs.addReference(a,t),this.Ws.delete(a.toString()),Rt.resolve()}removeReference(e,t,a){return this.Qs.removeReference(a,t),this.Ws.add(a.toString()),Rt.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Rt.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(e=>this.Ws.add(e.toString()));let a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ws.add(e.toString()))}).next(()=>a.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Rt.forEach(this.Ws,a=>{let u=ht.fromPath(a);return this.Hs(e,u).next(e=>{e||t.removeEntry(u,rt.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return Rt.or([()=>Rt.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo=class zo{constructor(e){this.serializer=e}O(e,t,a,u){let l=new Pt("createOrUpgrade",t);a<1&&u>=1&&(function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",S,{unique:!0}),e.createObjectStore("documentMutations"),Wo(e),function(e){e.createObjectStore("remoteDocuments")}(e));let c=Rt.resolve();return a<3&&u>=3&&(0!==a&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),Wo(e)),c=c.next(()=>(function(e){let t=e.store("targetGlobal"),a={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:rt.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",a)})(l))),a<4&&u>=4&&(0!==a&&(c=c.next(()=>l.store("mutations").j().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",S,{unique:!0});let a=l.store("mutations"),u=t.map(e=>a.put(e));return Rt.waitFor(u)}))),c=c.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),a<5&&u>=5&&(c=c.next(()=>this.Ys(l))),a<6&&u>=6&&(c=c.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.Xs(l)))),a<7&&u>=7&&(c=c.next(()=>this.Zs(l))),a<8&&u>=8&&(c=c.next(()=>this.ti(e,l))),a<9&&u>=9&&(c=c.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),a<10&&u>=10&&(c=c.next(()=>this.ei(l))),a<11&&u>=11&&(c=c.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),a<12&&u>=12&&(c=c.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:eh});t.createIndex("collectionPathOverlayIndex",ed,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",ef,{unique:!1})}(e)})),a<13&&u>=13&&(c=c.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:D});t.createIndex("documentKeyIndex",A),t.createIndex("collectionGroupIndex",R)})(e)).next(()=>this.ni(e,l)).next(()=>e.deleteObjectStore("remoteDocuments"))),a<14&&u>=14&&(c=c.next(()=>this.si(e,l))),a<15&&u>=15&&(c=c.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:X}).createIndex("sequenceNumberIndex",Z,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:ee}).createIndex("documentKeyIndex",er,{unique:!1})})),c}Xs(e){let t=0;return e.store("remoteDocuments").X((e,a)=>{t+=ro(a)}).next(()=>{let a={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",a)})}Ys(e){let t=e.store("mutationQueues"),a=e.store("mutations");return t.j().next(t=>Rt.forEach(t,t=>{let u=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return a.j("userMutationsIndex",u).next(a=>Rt.forEach(a,a=>{a.userId===t.userId||O();let u=_r(this.serializer,a);return io(e,t.userId,u).next(()=>{})}))}))}Zs(e){let t=e.store("targetDocuments"),a=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let u=[];return a.X((a,l)=>{let c=new ut(a),h=[0,qt(c)];u.push(t.get(h).next(a=>a?Rt.resolve():t.put({targetId:0,path:qt(c),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>Rt.waitFor(u))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:q});let a=t.store("collectionParents"),u=new Wr,i=e=>{if(u.add(e)){let t=e.lastSegment(),u=e.popLast();return a.put({collectionId:t,parent:qt(u)})}};return t.store("remoteDocuments").X({Y:!0},(e,t)=>{let a=new ut(e);return i(a.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([e,t,a],u)=>{let l=Gt(t);return i(l.popLast())}))}ei(e){let t=e.store("targets");return t.X((e,a)=>{let u=mr(a),l=gr(this.serializer,u);return t.put(l)})}ni(e,t){let a=t.store("remoteDocuments"),u=[];return a.X((e,a)=>{let l=t.store("remoteDocumentsV14"),c=(a.document?new ht(ut.fromString(a.document.name).popFirst(5)):a.noDocument?ht.fromSegments(a.noDocument.path):a.unknownDocument?ht.fromSegments(a.unknownDocument.path):O()).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};u.push(l.put(h))}).next(()=>Rt.waitFor(u))}si(e,t){var a;let u=t.store("mutations"),l=(a=this.serializer,new Ro(a)),c=new Ko(Qo.zs,this.serializer.fe);return u.j().next(e=>{let a=new Map;return e.forEach(e=>{var t;let u=null!==(t=a.get(e.userId))&&void 0!==t?t:gs();_r(this.serializer,e).keys().forEach(e=>u=u.add(e)),a.set(e.userId,u)}),Rt.forEach(a,(e,a)=>{let u=new V(a),h=Rr.de(this.serializer,u),d=c.getIndexManager(u),f=oo.de(u,this.serializer,d,c.referenceDelegate);return new ko(l,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new we(t,Ot.ct),e).next()})})}};function Wo(e){e.createObjectStore("targetDocuments",{keyPath:L}).createIndex("documentTargetsIndex",P,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",F,{unique:!0}),e.createObjectStore("targetGlobal")}let eO="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";let Jo=class Jo{constructor(e,t,a,u,l,c,h,d,f,m,g=15){var p;if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=a,this.ii=l,this.window=c,this.document=h,this.ri=f,this.oi=m,this.ui=g,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!Jo.D())throw new U(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Eo(this,u),this.di=t+"main",this.serializer=new ar(d),this.wi=new bt(this.di,this.ui,new zo(this.serializer)),this.Bs=new fo(this.referenceDelegate,this.serializer),this.remoteDocumentCache=(p=this.serializer,new Ro(p)),this.qs=new Er,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===m&&k("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(I.FAILED_PRECONDITION,eO);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Ot(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Xo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(Dt(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return Yo(e).get("owner").next(e=>Rt.resolve(this.Ri(e)))}Pi(e){return Xo(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=_e(e,"clientMetadata");return t.j().next(e=>{let a=this.Si(e,18e5),u=e.filter(e=>-1===a.indexOf(e));return Rt.forEach(u,e=>t.delete(e.clientId)).next(()=>u)})}).catch(()=>[]);if(this._i)for(let t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?Rt.resolve(!0):Yo(e).get("owner").next(t=>{if(null!==t&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new U(I.FAILED_PRECONDITION,eO);return!1}}return!(!this.networkEnabled||!this.inForeground)||Xo(e).j().next(e=>void 0===this.Si(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,a=!this.inForeground&&e.inForeground,u=this.networkEnabled===e.networkEnabled;if(t||a&&u)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&N("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new we(e,Ot.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(e=>this.Vi(e.updateTimeMs,t)&&!this.Ci(e.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Xo(e).j().next(e=>this.Si(e,18e5).map(e=>e.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return oo.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Jr(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Rr.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,a){var u;let l;N("IndexedDbPersistence","Starting transaction:",e);let c="readonly"===t?"readonly":"readwrite",h=15===(u=this.ui)?ey:14===u?ep:13===u?ep:12===u?eg:11===u?em:void O();return this.wi.runTransaction(e,c,h,u=>(l=new we(u,this.Os?this.Os.next():Ot.ct),"readwrite-primary"===t?this.Ti(l).next(e=>!!e||this.Ei(l)).next(t=>{if(!t)throw k(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new U(I.FAILED_PRECONDITION,E);return a(l)}).next(e=>this.vi(l).next(()=>e)):this.Oi(l).next(()=>a(l)))).then(e=>(l.raiseOnCommittedEvent(),e))}Oi(e){return Yo(e).get("owner").next(e=>{if(null!==e&&this.Vi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.Ri(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new U(I.FAILED_PRECONDITION,eO)})}vi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Yo(e).put("owner",t)}static D(){return bt.D()}Ai(e){let t=Yo(e);return t.get("owner").next(e=>this.Ri(e)?(N("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Rt.resolve())}Vi(e,t){let a=Date.now();return!(e<a-t)&&(!(e>a)||(k(`Detected an update time that is in the future: ${e} > ${a}`),!1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();let e=/(?:Version|Mobile)\/1[456]/;(0,f.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{let a=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Di(e)));return N("IndexedDbPersistence",`Client '${e}' ${a?"is":"is not"} zombied in LocalStorage`),a}catch(e){return k("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){k("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(e){}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}};function Yo(e){return _e(e,"owner")}function Xo(e){return _e(e,"clientMetadata")}function Zo(e,t){let a=e.projectId;return e.isDefaultDatabase||(a+="."+e.database),"firestore/"+t+"/"+a+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu=class tu{constructor(e,t,a,u){this.targetId=e,this.fromCache=t,this.Fi=a,this.Bi=u}static Li(e,t){let a=gs(),u=gs();for(let e of t.docChanges)switch(e.type){case 0:a=a.add(e.doc.key);break;case 1:u=u.add(e.doc.key)}return new tu(e,t.fromCache,a,u)}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu=class eu{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,a,u){return this.Ki(e,t).next(l=>l||this.Gi(e,t,u,a)).next(a=>a||this.Qi(e,t))}Ki(e,t){if(Qn(t))return Rt.resolve(null);let a=Jn(t);return this.indexManager.getIndexType(e,a).next(u=>0===u?null:(null!==t.limit&&1===u&&(a=Jn(t=Xn(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,a).next(u=>{let l=gs(...u);return this.Ui.getDocuments(e,l).next(u=>this.indexManager.getMinOffset(e,a).next(a=>{let c=this.ji(t,u);return this.zi(t,c,l,a.readTime)?this.Ki(e,Xn(t,null,"F")):this.Wi(e,c,t,a)}))})))}Gi(e,t,a,u){return Qn(t)||u.isEqual(rt.min())?this.Qi(e,t):this.Ui.getDocuments(e,a).next(l=>{let c=this.ji(t,l);return this.zi(t,c,a,u)?this.Qi(e,t):(C()<=d.in.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",u.toString(),es(t)),this.Wi(e,c,t,yt(u,-1)))})}ji(e,t){let a=new Ee(is(e));return t.forEach((t,u)=>{ns(e,u)&&(a=a.add(u))}),a}zi(e,t,a,u){if(null===e.limit)return!1;if(a.size!==t.size)return!0;let l="F"===e.limitType?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(u)>0)}Qi(e,t){return C()<=d.in.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",es(t)),this.Ui.getDocumentsMatchingQuery(e,t,It.min())}Wi(e,t,a,u){return this.Ui.getDocumentsMatchingQuery(e,a,u).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu=class nu{constructor(e,t,a,u){this.persistence=e,this.Hi=t,this.serializer=u,this.Ji=new pe(et),this.Yi=new os(e=>$n(e),On),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(a)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ko(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}};async function iu(e,t){return await e.persistence.runTransaction("Handle user change","readonly",a=>{let u;return e.mutationQueue.getAllMutationBatches(a).next(l=>(u=l,e.tr(t),e.mutationQueue.getAllMutationBatches(a))).next(t=>{let l=[],c=[],h=gs();for(let e of u)for(let t of(l.push(e.batchId),e.mutations))h=h.add(t.key);for(let e of t)for(let t of(c.push(e.batchId),e.mutations))h=h.add(t.key);return e.localDocuments.getDocuments(a,h).next(e=>({er:e,removedBatchIds:l,addedBatchIds:c}))})})}function ou(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function cu(e,t,a){let u=gs(),l=gs();return a.forEach(e=>u=u.add(e)),t.getEntries(e,u).next(e=>{let u=eb;return a.forEach((a,c)=>{let h=e.get(a);c.isFoundDocument()!==h.isFoundDocument()&&(l=l.add(a)),c.isNoDocument()&&c.version.isEqual(rt.min())?(t.removeEntry(a,c.readTime),u=u.insert(a,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||0===c.version.compareTo(h.version)&&h.hasPendingWrites?(t.addEntry(c),u=u.insert(a,c)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",c.version)}),{nr:u,sr:l}})}function hu(e,t){return e.persistence.runTransaction("Allocate target","readwrite",a=>{let u;return e.Bs.getTargetData(a,t).next(l=>l?(u=l,Rt.resolve(u)):e.Bs.allocateTargetId(a).next(l=>(u=new cr(t,l,"TargetPurposeListen",a.currentSequenceNumber),e.Bs.addTargetData(a,u).next(()=>u))))}).then(a=>{let u=e.Ji.get(a.targetId);return(null===u||a.snapshotVersion.compareTo(u.snapshotVersion)>0)&&(e.Ji=e.Ji.insert(a.targetId,a),e.Yi.set(t,a.targetId)),a})}async function lu(e,t,a){let u=e.Ji.get(t);try{a||await e.persistence.runTransaction("Release target",a?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,u))}catch(e){if(!Dt(e))throw e;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ji=e.Ji.remove(t),e.Yi.delete(u.target)}function fu(e,t,a){let u=rt.min(),l=gs();return e.persistence.runTransaction("Execute query","readonly",c=>(function(e,t,a){let u=e.Yi.get(a);return void 0!==u?Rt.resolve(e.Ji.get(u)):e.Bs.getTargetData(t,a)})(e,c,Jn(t)).next(t=>{if(t)return u=t.lastLimboFreeSnapshotVersion,e.Bs.getMatchingKeysForTargetId(c,t.targetId).next(e=>{l=e})}).next(()=>e.Hi.getDocumentsMatchingQuery(c,t,a?u:rt.min(),a?l:gs())).next(a=>(_u(e,ss(t),a),{documents:a,ir:l})))}function du(e,t){let a=e.Bs,u=e.Ji.get(t);return u?Promise.resolve(u.target):e.persistence.runTransaction("Get target data","readonly",e=>a.le(e,t).next(e=>e?e.target:null))}function wu(e,t){let a=e.Xi.get(t)||rt.min();return e.persistence.runTransaction("Get new document changes","readonly",u=>e.Zi.getAllFromCollectionGroup(u,t,yt(a,-1),Number.MAX_SAFE_INTEGER)).then(a=>(_u(e,t,a),a))}function _u(e,t,a){let u=e.Xi.get(t)||rt.min();a.forEach((e,t)=>{t.readTime.compareTo(u)>0&&(u=t.readTime)}),e.Xi.set(t,u)}async function mu(e,t,a,u){let l=gs(),c=eb;for(let e of a){let a=t.rr(e.metadata.name);e.document&&(l=l.add(a));let u=t.ur(e);u.setReadTime(t.cr(e.metadata.readTime)),c=c.insert(a,u)}let h=e.Zi.newChangeBuffer({trackRemovals:!0}),d=await hu(e,Jn(Gn(ut.fromString(`__bundle__/docs/${u}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>cu(t,h,c).next(e=>(h.apply(t),e)).next(a=>e.Bs.removeMatchingKeysForTargetId(t,d.targetId).next(()=>e.Bs.addMatchingKeys(t,l,d.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,a.nr,a.sr)).next(()=>a.nr)))}async function gu(e,t,a=gs()){let u=await hu(e,Jn(yr(t.bundledQuery)));return e.persistence.runTransaction("Save named query","readwrite",l=>{let c=Ni(t.readTime);if(u.snapshotVersion.compareTo(c)>=0)return e.qs.saveNamedQuery(l,t);let h=u.withResumeToken(Ve.EMPTY_BYTE_STRING,c);return e.Ji=e.Ji.insert(h.targetId,h),e.Bs.updateTargetData(l,h).next(()=>e.Bs.removeMatchingKeysForTargetId(l,u.targetId)).next(()=>e.Bs.addMatchingKeys(l,a,u.targetId)).next(()=>e.qs.saveNamedQuery(l,t))})}function yu(e,t){return`firestore_clients_${e}_${t}`}function pu(e,t,a){let u=`firestore_mutations_${e}_${a}`;return t.isAuthenticated()&&(u+=`_${t.uid}`),u}function Iu(e,t){return`firestore_targets_${e}_${t}`}let Tu=class Tu{constructor(e,t,a,u){this.user=e,this.batchId=t,this.state=a,this.error=u}static ar(e,t,a){let u=JSON.parse(a),l,c="object"==typeof u&&-1!==["pending","acknowledged","rejected"].indexOf(u.state)&&(void 0===u.error||"object"==typeof u.error);return c&&u.error&&(c="string"==typeof u.error.message&&"string"==typeof u.error.code)&&(l=new U(u.error.code,u.error.message)),c?new Tu(e,t,u.state,l):(k("SharedClientState",`Failed to parse mutation state for ID '${t}': ${a}`),null)}hr(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}};let Eu=class Eu{constructor(e,t,a){this.targetId=e,this.state=t,this.error=a}static ar(e,t){let a=JSON.parse(t),u,l="object"==typeof a&&-1!==["not-current","current","rejected"].indexOf(a.state)&&(void 0===a.error||"object"==typeof a.error);return l&&a.error&&(l="string"==typeof a.error.message&&"string"==typeof a.error.code)&&(u=new U(a.error.code,a.error.message)),l?new Eu(e,a.state,u):(k("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}};let Au=class Au{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){let a=JSON.parse(t),u="object"==typeof a&&a.activeTargetIds instanceof Array,l=eN;for(let e=0;u&&e<a.activeTargetIds.length;++e)u=Lt(a.activeTargetIds[e]),l=l.add(a.activeTargetIds[e]);return u?new Au(e,l):(k("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}};let vu=class vu{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new vu(t.clientId,t.onlineState):(k("SharedClientState",`Failed to parse online state: ${e}`),null)}};let Ru=class Ru{constructor(){this.activeTargetIds=eN}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};let Pu=class Pu{constructor(e,t,a,u,l){var c,h,d;this.window=e,this.ii=t,this.persistenceKey=a,this.wr=u,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new pe(et),this.started=!1,this.yr=[];let f=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.pr=yu(this.persistenceKey,this.wr),this.Ir=(c=this.persistenceKey,`firestore_sequence_number_${c}`),this.gr=this.gr.insert(this.wr,new Ru),this.Tr=RegExp(`^firestore_clients_${f}_([^_]*)$`),this.Er=RegExp(`^firestore_mutations_${f}_(\\d+)(?:_(.*))?$`),this.Ar=RegExp(`^firestore_targets_${f}_(\\d+)$`),this.vr=(h=this.persistenceKey,`firestore_online_state_${h}`),this.Rr=(d=this.persistenceKey,`firestore_bundle_loaded_v2_${d}`),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.$i();for(let t of e){if(t===this.wr)continue;let e=this.getItem(yu(this.persistenceKey,t));if(e){let a=Au.ar(t,e);a&&(this.gr=this.gr.insert(a.clientId,a))}}this.Pr();let t=this.storage.getItem(this.vr);if(t){let e=this.br(t);e&&this.Vr(e)}for(let e of this.yr)this.mr(e);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((a,u)=>{u.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,a){this.Dr(e,t,a),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let a=this.storage.getItem(Iu(this.persistenceKey,e));if(a){let u=Eu.ar(e,a);u&&(t=u.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Iu(this.persistenceKey,e))}updateQueryState(e,t,a){this.kr(e,t,a)}handleUserChange(e,t,a){t.forEach(e=>{this.Cr(e)}),this.currentUser=e,a.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return N("SharedClientState","READ",e,t),t}setItem(e,t){N("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){if(e.storageArea===this.storage){if(N("SharedClientState","EVENT",e.key,e.newValue),e.key===this.pr)return void k("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.Tr.test(e.key)){if(null==e.newValue){let t=this.Or(e.key);return this.Fr(t,null)}{let t=this.Br(e.key,e.newValue);if(t)return this.Fr(t.clientId,t)}}else if(this.Er.test(e.key)){if(null!==e.newValue){let t=this.Lr(e.key,e.newValue);if(t)return this.qr(t)}}else if(this.Ar.test(e.key)){if(null!==e.newValue){let t=this.Ur(e.key,e.newValue);if(t)return this.Kr(t)}}else if(e.key===this.vr){if(null!==e.newValue){let t=this.br(e.newValue);if(t)return this.Vr(t)}}else if(e.key===this.Ir){let t=function(e){let t=Ot.ct;if(null!=e)try{let a=JSON.parse(e);"number"==typeof a||O(),t=a}catch(e){k("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==Ot.ct&&this.sequenceNumberHandler(t)}else if(e.key===this.Rr){let t=this.Gr(e.newValue);await Promise.all(t.map(e=>this.syncEngine.Qr(e)))}}}else this.yr.push(e)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,a){let u=new Tu(this.currentUser,e,t,a),l=pu(this.persistenceKey,this.currentUser,e);this.setItem(l,u.hr())}Cr(e){let t=pu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){let t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,a){let u=Iu(this.persistenceKey,e),l=new Eu(e,t,a);this.setItem(u,l.hr())}$r(e){let t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){let t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){let a=this.Or(e);return Au.ar(a,t)}Lr(e,t){let a=this.Er.exec(e),u=Number(a[1]),l=void 0!==a[2]?a[2]:null;return Tu.ar(new V(l),u,t)}Ur(e,t){let a=this.Ar.exec(e),u=Number(a[1]);return Eu.ar(u,t)}br(e){return vu.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){let a=t?this.gr.insert(e,t):this.gr.remove(e),u=this.Sr(this.gr),l=this.Sr(a),c=[],h=[];return l.forEach(e=>{u.has(e)||c.push(e)}),u.forEach(e=>{l.has(e)||h.push(e)}),this.syncEngine.Wr(c,h).then(()=>{this.gr=a})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=eN;return e.forEach((e,a)=>{t=t.unionWith(a.activeTargetIds)}),t}};let bu=class bu{constructor(){this.Hr=new Ru,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,a){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,a){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ru,Promise.resolve()}handleUserChange(e,t,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu=class Vu{Yr(e){}shutdown(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su=class Su{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){for(let e of(N("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))e(0)}no(){for(let e of(N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eF=null;function Cu(){return null===eF?eF=268435456+Math.round(2147483648*Math.random()):eF++,"0x"+eF.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu=class Nu{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eM="WebChannelConnection";let Mu=class Mu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,a,u,l){let c=Cu(),h=this.To(e,t);N("RestConnection",`Sending RPC '${e}' ${c}:`,h,a);let d={};return this.Eo(d,u,l),this.Ao(e,h,d,a).then(t=>(N("RestConnection",`Received RPC '${e}' ${c}: `,t),t),t=>{throw M("RestConnection",`RPC '${e}' ${c} failed with error: `,t,"url: ",h,"request:",a),t})}vo(e,t,a,u,l,c){return this.Io(e,t,a,u,l)}Eo(e,t,a){e["X-Goog-Api-Client"]="gl-js/ fire/"+y,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,a)=>e[a]=t),a&&a.headers.forEach((t,a)=>e[a]=t)}To(e,t){let a=eV[e];return`${this.mo}/v1/${t}:${a}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,a,u){let l=Cu();return new Promise((c,h)=>{let d=new m.JJ;d.setWithCredentials(!0),d.listenOnce(m.tw.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case m.jK.NO_ERROR:let t=d.getResponseJson();N(eM,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(t)),c(t);break;case m.jK.TIMEOUT:N(eM,`RPC '${e}' ${l} timed out`),h(new U(I.DEADLINE_EXCEEDED,"Request time out"));break;case m.jK.HTTP_ERROR:let a=d.getStatus();if(N(eM,`RPC '${e}' ${l} failed with status:`,a,"response text:",d.getResponseText()),a>0){let e=d.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(t.status);h(new U(e,t.message))}else h(new U(I.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new U(I.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{N(eM,`RPC '${e}' ${l} completed.`)}});let f=JSON.stringify(u);N(eM,`RPC '${e}' ${l} sending request:`,u),d.send(t,"POST",f,a,15)})}Ro(e,t,a){let l=Cu(),c=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=(0,m.UE)(),d=(0,m.FJ)(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;void 0!==g&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.xmlHttpFactory=new m.zI({})),this.Eo(f.initMessageHeaders,t,a),f.encodeInitMessageHeaders=!0;let p=c.join("");N(eM,`Creating RPC '${e}' stream ${l}: ${p}`,f);let y=h.createWebChannel(p,f),v=!1,b=!1,E=new Nu({ro:t=>{b?N(eM,`Not sending because RPC '${e}' stream ${l} is closed:`,t):(v||(N(eM,`Opening RPC '${e}' stream ${l} transport.`),y.open(),v=!0),N(eM,`RPC '${e}' stream ${l} sending:`,t),y.send(t))},oo:()=>y.close()}),w=(e,t,a)=>{e.listen(t,e=>{try{a(e)}catch(e){setTimeout(()=>{throw e},0)}})};return w(y,m.ii.EventType.OPEN,()=>{b||N(eM,`RPC '${e}' stream ${l} transport opened.`)}),w(y,m.ii.EventType.CLOSE,()=>{b||(b=!0,N(eM,`RPC '${e}' stream ${l} transport closed`),E.wo())}),w(y,m.ii.EventType.ERROR,t=>{b||(b=!0,M(eM,`RPC '${e}' stream ${l} transport errored:`,t),E.wo(new U(I.UNAVAILABLE,"The operation could not be completed")))}),w(y,m.ii.EventType.MESSAGE,t=>{var a;if(!b){let c=t.data[0];c||O();let h=c.error||(null===(a=c[0])||void 0===a?void 0:a.error);if(h){N(eM,`RPC '${e}' stream ${l} received error:`,h);let t=h.status,a=function(e){let t=u[e];if(void 0!==t)return ui(t)}(t),c=h.message;void 0===a&&(a=I.INTERNAL,c="Unknown error status: "+t+" with message "+h.message),b=!0,E.wo(new U(a,c)),y.close()}else N(eM,`RPC '${e}' stream ${l} received:`,c),E._o(c)}}),w(d,m.ju.STAT_EVENT,t=>{t.stat===m.kN.PROXY?N(eM,`RPC '${e}' stream ${l} detected buffering proxy`):t.stat===m.kN.NOPROXY&&N(eM,`RPC '${e}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(){return"undefined"!=typeof window?window:null}function Ou(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(e){return new Vi(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=class Bu{constructor(e,t,a=1e3,u=1.5,l=6e4){this.ii=e,this.timerId=t,this.Po=a,this.bo=u,this.Vo=l,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();let t=Math.floor(this.So+this.ko()),a=Math.max(0,Date.now()-this.Co),u=Math.max(0,t-a);u>0&&N("ExponentialBackoff",`Backing off for ${u} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${a} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,u,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu=class Lu{constructor(e,t,a,u,l,c,h,d){this.ii=e,this.$o=a,this.Oo=u,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Bu(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(k(t.toString()),k("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;let e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,a])=>{this.Fo===t&&this.Zo(e,a)},t=>{e(()=>{let e=new U(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)})})}Zo(e,t){let a=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{a(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(e=>{a(()=>this.tu(e))}),this.stream.onMessage(e=>{a(()=>this.onMessage(e))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}};let qu=class qu extends Lu{constructor(e,t,a,u,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,a,u,c),this.serializer=l}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();let t=function(e,t){let a;if("targetChange"in t){var u,l;t.targetChange;let c="NO_CHANGE"===(u=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===u?1:"REMOVE"===u?2:"CURRENT"===u?3:"RESET"===u?4:O(),h=t.targetChange.targetIds||[],d=(l=t.targetChange.resumeToken,e.useProto3Json?(void 0===l||"string"==typeof l||O(),Ve.fromBase64String(l||"")):(void 0===l||l instanceof Uint8Array||O(),Ve.fromUint8Array(l||new Uint8Array))),f=t.targetChange.cause,m=f&&function(e){let t=void 0===e.code?I.UNKNOWN:ui(e.code);return new U(t,e.message||"")}(f);a=new Ii(c,h,d,m||null)}else if("documentChange"in t){t.documentChange;let u=t.documentChange;u.document,u.document.name,u.document.updateTime;let l=Oi(e,u.document.name),c=Ni(u.document.updateTime),h=u.document.createTime?Ni(u.document.createTime):rt.min(),d=new un({mapValue:{fields:u.document.fields}}),f=an.newFoundDocument(l,c,h,d),m=u.targetIds||[],g=u.removedTargetIds||[];a=new yi(m,g,f.key,f)}else if("documentDelete"in t){t.documentDelete;let u=t.documentDelete;u.document;let l=Oi(e,u.document),c=u.readTime?Ni(u.readTime):rt.min(),h=an.newNoDocument(l,c),d=u.removedTargetIds||[];a=new yi([],d,h.key,h)}else if("documentRemove"in t){t.documentRemove;let u=t.documentRemove;u.document;let l=Oi(e,u.document),c=u.removedTargetIds||[];a=new yi([],c,l,null)}else{if(!("filter"in t))return O();{t.filter;let e=t.filter;e.targetId;let{count:u=0,unchangedNames:l}=e,c=new si(u,l),h=e.targetId;a=new pi(h,c)}}return a}(this.serializer,e),a=function(e){if(!("targetChange"in e))return rt.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rt.min():t.readTime?Ni(t.readTime):rt.min()}(e);return this.listener.nu(t,a)}su(e){let t={};t.database=Li(this.serializer),t.addTarget=function(e,t){let a;let u=t.target;if((a=Fn(u)?{documents:Hi(e,u)}:{query:Ji(e,u)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){a.resumeToken=Ci(e,t.resumeToken);let u=Si(e,t.expectedCount);null!==u&&(a.expectedCount=u)}else if(t.snapshotVersion.compareTo(rt.min())>0){a.readTime=Di(e,t.snapshotVersion.toTimestamp());let u=Si(e,t.expectedCount);null!==u&&(a.expectedCount=u)}return a}(this.serializer,e);let a=function(e,t){let a=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return null==a?null:{"goog-listen-tags":a}}(this.serializer,e);a&&(t.labels=a),this.Wo(t)}iu(e){let t={};t.database=Li(this.serializer),t.removeTarget=e,this.Wo(t)}};let Uu=class Uu extends Lu{constructor(e,t,a,u,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,a,u,c),this.serializer=l,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){var t,a;if(e.streamToken||O(),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();let u=(t=e.writeResults,a=e.commitTime,t&&t.length>0?(void 0!==a||O(),t.map(e=>{let t;return(t=e.updateTime?Ni(e.updateTime):Ni(a)).isEqual(rt.min())&&(t=Ni(a)),new Os(t,e.transformResults||[])})):[]),l=Ni(e.commitTime);return this.listener.cu(l,u)}return e.writeResults&&0!==e.writeResults.length&&O(),this.ru=!0,this.listener.au()}hu(){let e={};e.database=Li(this.serializer),this.Wo(e)}uu(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>ji(this.serializer,e))};this.Wo(t)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku=class Ku extends class{}{constructor(e,t,a,u){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=a,this.serializer=u,this.lu=!1}fu(){if(this.lu)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,a){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,l])=>this.connection.Io(e,t,a,u,l)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new U(I.UNKNOWN,e.toString())})}vo(e,t,a,u){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.vo(e,t,a,l,c,u)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new U(I.UNKNOWN,e.toString())})}terminate(){this.lu=!0}};let Qu=class Qu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(k(t),this.mu=!1):N("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju=class ju{constructor(e,t,a,u,l){this.localStore=e,this.datastore=t,this.asyncQueue=a,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=l,this.Pu.Yr(e=>{a.enqueueAndForget(async()=>{ec(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.vu.add(4),await Wu(e),e.bu.set("Unknown"),e.vu.delete(4),await zu(e)}(this))})}),this.bu=new Qu(a,u)}};async function zu(e){if(ec(e))for(let t of e.Ru)await t(!0)}async function Wu(e){for(let t of e.Ru)await t(!1)}function Hu(e,t){e.Au.has(t.targetId)||(e.Au.set(t.targetId,t),tc(e)?Zu(e):pc(e).Ko()&&Yu(e,t))}function Ju(e,t){let a=pc(e);e.Au.delete(t),a.Ko()&&Xu(e,t),0===e.Au.size&&(a.Ko()?a.jo():ec(e)&&e.bu.set("Unknown"))}function Yu(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rt.min())>0){let a=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(a)}pc(e).su(t)}function Xu(e,t){e.Vu.qt(t),pc(e).iu(t)}function Zu(e){e.Vu=new Ei({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),pc(e).start(),e.bu.gu()}function tc(e){return ec(e)&&!pc(e).Uo()&&e.Au.size>0}function ec(e){return 0===e.vu.size}async function sc(e){e.Au.forEach((t,a)=>{Yu(e,t)})}async function ic(e,t){e.Vu=void 0,tc(e)?(e.bu.Iu(t),Zu(e)):e.bu.set("Unknown")}async function rc(e,t,a){if(e.bu.set("Online"),t instanceof Ii&&2===t.state&&t.cause)try{await async function(e,t){let a=t.cause;for(let u of t.targetIds)e.Au.has(u)&&(await e.remoteSyncer.rejectListen(u,a),e.Au.delete(u),e.Vu.removeTarget(u))}(e,t)}catch(a){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),a),await oc(e,a)}else if(t instanceof yi?e.Vu.Ht(t):t instanceof pi?e.Vu.ne(t):e.Vu.Xt(t),!a.isEqual(rt.min()))try{let t=await ou(e.localStore);a.compareTo(t)>=0&&await function(e,t){let a=e.Vu.ce(t);return a.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){let l=e.Au.get(u);l&&e.Au.set(u,l.withResumeToken(a.resumeToken,t))}}),a.targetMismatches.forEach((t,a)=>{let u=e.Au.get(t);if(!u)return;e.Au.set(t,u.withResumeToken(Ve.EMPTY_BYTE_STRING,u.snapshotVersion)),Xu(e,t);let l=new cr(u.target,t,a,u.sequenceNumber);Yu(e,l)}),e.remoteSyncer.applyRemoteEvent(a)}(e,a)}catch(t){N("RemoteStore","Failed to raise snapshot:",t),await oc(e,t)}}async function oc(e,t,a){if(!Dt(t))throw t;e.vu.add(1),await Wu(e),e.bu.set("Offline"),a||(a=()=>ou(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await a(),e.vu.delete(1),await zu(e)})}function uc(e,t){return t().catch(a=>oc(e,a,t))}async function cc(e){let t=Ic(e),a=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ec(e)&&e.Eu.length<10;)try{let u=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}(e.localStore,a);if(null===u){0===e.Eu.length&&t.jo();break}a=u.batchId,function(e,t){e.Eu.push(t);let a=Ic(e);a.Ko()&&a.ou&&a.uu(t.mutations)}(e,u)}catch(t){await oc(e,t)}lc(e)&&fc(e)}function lc(e){return ec(e)&&!Ic(e).Uo()&&e.Eu.length>0}function fc(e){Ic(e).start()}async function dc(e){Ic(e).hu()}async function wc(e){let t=Ic(e);for(let a of e.Eu)t.uu(a.mutations)}async function _c(e,t,a){let u=e.Eu.shift(),l=ti.from(u,t,a);await uc(e,()=>e.remoteSyncer.applySuccessfulWrite(l)),await cc(e)}async function mc(e,t){t&&Ic(e).ou&&await async function(e,t){var a;if(oi(a=t.code)&&a!==I.ABORTED){let a=e.Eu.shift();Ic(e).Qo(),await uc(e,()=>e.remoteSyncer.rejectFailedWrite(a.batchId,t)),await cc(e)}}(e,t),lc(e)&&fc(e)}async function gc(e,t){e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");let a=ec(e);e.vu.add(3),await Wu(e),a&&e.bu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.vu.delete(3),await zu(e)}async function yc(e,t){t?(e.vu.delete(2),await zu(e)):t||(e.vu.add(2),await Wu(e),e.bu.set("Unknown"))}function pc(e){var t,a,u;return e.Su||(e.Su=(t=e.datastore,a=e.asyncQueue,u={uo:sc.bind(null,e),ao:ic.bind(null,e),nu:rc.bind(null,e)},t.fu(),new qu(a,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,u)),e.Ru.push(async t=>{t?(e.Su.Qo(),tc(e)?Zu(e):e.bu.set("Unknown")):(await e.Su.stop(),e.Vu=void 0)})),e.Su}function Ic(e){var t,a,u;return e.Du||(e.Du=(t=e.datastore,a=e.asyncQueue,u={uo:dc.bind(null,e),ao:mc.bind(null,e),au:wc.bind(null,e),cu:_c.bind(null,e)},t.fu(),new Uu(a,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,u)),e.Ru.push(async t=>{t?(e.Du.Qo(),await cc(e)):(await e.Du.stop(),e.Eu.length>0&&(N("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc=class Tc{constructor(e,t,a,u,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=a,this.op=u,this.removalCallback=l,this.deferred=new K,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,a,u,l){let c=Date.now()+a,h=new Tc(e,t,c,u,l);return h.start(a),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new U(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Ec(e,t){if(k("AsyncQueue",`${t}: ${e}`),Dt(e))return new U(I.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac=class Ac{constructor(e){this.comparator=e?(t,a)=>e(t,a)||ht.comparator(t.key,a.key):(e,t)=>ht.comparator(e.key,t.key),this.keyedMap=hs(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Ac(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,a)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ac)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,u=a.getNext().key;if(!e.isEqual(u))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let a=new Ac;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=t,a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc=class vc{constructor(){this.Cu=new pe(ht.comparator)}track(e){let t=e.doc.key,a=this.Cu.get(t);a?0!==e.type&&3===a.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==a.type?this.Cu=this.Cu.insert(t,{type:a.type,doc:e.doc}):2===e.type&&2===a.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===a.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===a.type?this.Cu=this.Cu.remove(t):1===e.type&&2===a.type?this.Cu=this.Cu.insert(t,{type:1,doc:a.doc}):0===e.type&&1===a.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):O():this.Cu=this.Cu.insert(t,e)}xu(){let e=[];return this.Cu.inorderTraversal((t,a)=>{e.push(a)}),e}};let Rc=class Rc{constructor(e,t,a,u,l,c,h,d,f){this.query=e,this.docs=t,this.oldDocs=a,this.docChanges=u,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=h,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(e,t,a,u,l){let c=[];return t.forEach(e=>{c.push({type:0,doc:e})}),new Rc(e,t,Ac.emptySet(t),c,a,u,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,a=e.docChanges;if(t.length!==a.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==a[e].type||!t[e].doc.isEqual(a[e].doc))return!1;return!0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc=class Pc{constructor(){this.Nu=void 0,this.listeners=[]}};let bc=class bc{constructor(){this.queries=new os(e=>ts(e),Zn),this.onlineState="Unknown",this.ku=new Set}};async function Vc(e,t){let a=t.query,u=!1,l=e.queries.get(a);if(l||(u=!0,l=new Pc),u)try{l.Nu=await e.onListen(a)}catch(a){let e=Ec(a,`Initialization of query '${es(t.query)}' failed`);return void t.onError(e)}e.queries.set(a,l),l.listeners.push(t),t.Mu(e.onlineState),l.Nu&&t.$u(l.Nu)&&xc(e)}async function Sc(e,t){let a=t.query,u=!1,l=e.queries.get(a);if(l){let e=l.listeners.indexOf(t);e>=0&&(l.listeners.splice(e,1),u=0===l.listeners.length)}if(u)return e.queries.delete(a),e.onUnlisten(a)}function Dc(e,t){let a=!1;for(let u of t){let t=u.query,l=e.queries.get(t);if(l){for(let e of l.listeners)e.$u(u)&&(a=!0);l.Nu=u}}a&&xc(e)}function Cc(e,t,a){let u=e.queries.get(t);if(u)for(let e of u.listeners)e.onError(a);e.queries.delete(t)}function xc(e){e.ku.forEach(e=>{e.next()})}let Nc=class Nc{constructor(e,t,a){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=a||{}}$u(e){if(!this.options.includeMetadataChanges){let t=[];for(let a of e.docChanges)3!==a.type&&t.push(a);e=new Rc(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){return!e.fromCache||(!this.options.Ku||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;let t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Rc.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc=class kc{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mc=class Mc{constructor(e){this.serializer=e}rr(e){return Oi(this.serializer,e)}ur(e){return e.metadata.exists?Ki(this.serializer,e.document,!1):an.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Ni(e)}};let $c=class $c{constructor(e,t,a){this.ju=e,this.localStore=t,this.serializer=a,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Oc(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;let a=ut.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(a.get(a.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){let t=new Map,a=new Mc(this.serializer);for(let u of e)if(u.metadata.queries){let e=a.rr(u.metadata.name);for(let a of u.metadata.queries){let u=(t.get(a)||gs()).add(e);t.set(a,u)}}return t}async complete(){let e=await mu(this.localStore,new Mc(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(let e of this.queries)await gu(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}};function Oc(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc=class Fc{constructor(e){this.key=e}};let Bc=class Bc{constructor(e){this.key=e}};let Lc=class Lc{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=gs(),this.mutatedKeys=gs(),this.tc=is(e),this.ec=new Ac(this.tc)}get nc(){return this.Yu}sc(e,t){let a=t?t.ic:new vc,u=t?t.ec:this.ec,l=t?t.mutatedKeys:this.mutatedKeys,c=u,h=!1,d="F"===this.query.limitType&&u.size===this.query.limit?u.last():null,f="L"===this.query.limitType&&u.size===this.query.limit?u.first():null;if(e.inorderTraversal((e,t)=>{let m=u.get(e),g=ns(this.query,t)?t:null,p=!!m&&this.mutatedKeys.has(m.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations),v=!1;m&&g?m.data.isEqual(g.data)?p!==y&&(a.track({type:3,doc:g}),v=!0):this.rc(m,g)||(a.track({type:2,doc:g}),v=!0,(d&&this.tc(g,d)>0||f&&0>this.tc(g,f))&&(h=!0)):!m&&g?(a.track({type:0,doc:g}),v=!0):m&&!g&&(a.track({type:1,doc:m}),v=!0,(d||f)&&(h=!0)),v&&(g?(c=c.add(g),l=y?l.add(e):l.delete(e)):(c=c.delete(e),l=l.delete(e)))}),null!==this.query.limit)for(;c.size>this.query.limit;){let e="F"===this.query.limitType?c.last():c.first();c=c.delete(e.key),l=l.delete(e.key),a.track({type:1,doc:e})}return{ec:c,ic:a,zi:h,mutatedKeys:l}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,a){let u=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;let l=e.ic.xu();l.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return n(e)-n(t)})(e.type,t.type)||this.tc(e.doc,t.doc)),this.oc(a);let c=t?this.uc():[],h=0===this.Zu.size&&this.current?1:0,d=h!==this.Xu;return(this.Xu=h,0!==l.length||d)?{snapshot:new Rc(this.query,e.ec,u,l,e.mutatedKeys,0===h,d,!1,!!a&&a.resumeToken.approximateByteSize()>0),cc:c}:{cc:c}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new vc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(e=>this.Yu=this.Yu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Yu=this.Yu.delete(e)),this.current=e.current)}uc(){if(!this.current)return[];let e=this.Zu;this.Zu=gs(),this.ec.forEach(e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))});let t=[];return e.forEach(e=>{this.Zu.has(e)||t.push(new Bc(e))}),this.Zu.forEach(a=>{e.has(a)||t.push(new Fc(a))}),t}hc(e){this.Yu=e.ir,this.Zu=gs();let t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Rc.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}};let qc=class qc{constructor(e,t,a){this.query=e,this.targetId=t,this.view=a}};let Uc=class Uc{constructor(e){this.key=e,this.fc=!1}};let Kc=class Kc{constructor(e,t,a,u,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=a,this.sharedClientState=u,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.dc={},this.wc=new os(e=>ts(e),Zn),this._c=new Map,this.mc=new Set,this.gc=new pe(ht.comparator),this.yc=new Map,this.Ic=new Oo,this.Tc={},this.Ec=new Map,this.Ac=lo.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}};async function Gc(e,t){let a,u;let l=pa(e),c=l.wc.get(t);if(c)a=c.targetId,l.sharedClientState.addLocalQueryTarget(a),u=c.view.lc();else{let e=await hu(l.localStore,Jn(t)),c=l.sharedClientState.addLocalQueryTarget(e.targetId);a=e.targetId,u=await Qc(l,t,a,"current"===c,e.resumeToken),l.isPrimaryClient&&Hu(l.remoteStore,e)}return u}async function Qc(e,t,a,u,l){e.Rc=(t,a,u)=>(async function(e,t,a,u){let l=t.view.sc(a);l.zi&&(l=await fu(e.localStore,t.query,!1).then(({documents:e})=>t.view.sc(e,l)));let c=u&&u.targetChanges.get(t.targetId),h=t.view.applyChanges(l,e.isPrimaryClient,c);return ia(e,t.targetId,h.cc),h.snapshot})(e,t,a,u);let c=await fu(e.localStore,t,!0),h=new Lc(t,c.ir),d=h.sc(c.documents),f=gi.createSynthesizedTargetChangeForCurrentChange(a,u&&"Offline"!==e.onlineState,l),m=h.applyChanges(d,e.isPrimaryClient,f);ia(e,a,m.cc);let g=new qc(t,a,h);return e.wc.set(t,g),e._c.has(a)?e._c.get(a).push(t):e._c.set(a,[t]),m.snapshot}async function jc(e,t){let a=e.wc.get(t),u=e._c.get(a.targetId);if(u.length>1)return e._c.set(a.targetId,u.filter(e=>!Zn(e,t))),void e.wc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(a.targetId),e.sharedClientState.isActiveQueryTarget(a.targetId)||await lu(e.localStore,a.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(a.targetId),Ju(e.remoteStore,a.targetId),na(e,a.targetId)}).catch(vt)):(na(e,a.targetId),await lu(e.localStore,a.targetId,!0))}async function zc(e,t,a){let u=Ia(e);try{var l;let e;let c=await function(e,t){let a,u;let l=it.now(),c=t.reduce((e,t)=>e.add(t.key),gs());return e.persistence.runTransaction("Locally write mutations","readwrite",h=>{let d=eb,f=gs();return e.Zi.getEntries(h,c).next(e=>{(d=e).forEach((e,t)=>{t.isValidDocument()||(f=f.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(h,d)).next(u=>{a=u;let c=[];for(let e of t){let t=function(e,t){let a=null;for(let u of e.fieldTransforms){let e=t.data.field(u.field),l=Ps(u.transform,e||null);null!=l&&(null===a&&(a=un.empty()),a.set(u.field,l))}return a||null}(e,a.get(e.key).overlayedDocument);null!=t&&c.push(new zs(e.key,t,function cn(e){let t=[];return ge(e.fields,(e,a)=>{let u=new at([e]);if(Ze(a)){let e=cn(a.mapValue).fields;if(0===e.length)t.push(u);else for(let a of e)t.push(u.child(a))}else t.push(u)}),new Re(t)}(t.value.mapValue),Fs.exists(!0)))}return e.mutationQueue.addMutationBatch(h,l,c,t)}).next(t=>{u=t;let l=t.applyToLocalDocumentSet(a,f);return e.documentOverlayCache.saveOverlays(h,t.batchId,l)})}).then(()=>({batchId:u.batchId,changes:ls(a)}))}(u.localStore,t);u.sharedClientState.addPendingMutation(c.batchId),l=c.batchId,(e=u.Tc[u.currentUser.toKey()])||(e=new pe(et)),e=e.insert(l,a),u.Tc[u.currentUser.toKey()]=e,await ua(u,c.changes),await cc(u.remoteStore)}catch(t){let e=Ec(t,"Failed to persist write");a.reject(e)}}async function Wc(e,t){try{let a=await function(e,t){let a=t.snapshotVersion,u=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{let c=e.Zi.newChangeBuffer({trackRemovals:!0});u=e.Ji;let h=[];t.targetChanges.forEach((c,d)=>{var f;let m=u.get(d);if(!m)return;h.push(e.Bs.removeMatchingKeys(l,c.removedDocuments,d).next(()=>e.Bs.addMatchingKeys(l,c.addedDocuments,d)));let g=m.withSequenceNumber(l.currentSequenceNumber);null!==t.targetMismatches.get(d)?g=g.withResumeToken(Ve.EMPTY_BYTE_STRING,rt.min()).withLastLimboFreeSnapshotVersion(rt.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,a)),u=u.insert(d,g),f=g,(0===m.resumeToken.approximateByteSize()||f.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8||c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0)&&h.push(e.Bs.updateTargetData(l,g))});let d=eb,f=gs();if(t.documentUpdates.forEach(a=>{t.resolvedLimboDocuments.has(a)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(l,a))}),h.push(cu(l,c,t.documentUpdates).next(e=>{d=e.nr,f=e.sr})),!a.isEqual(rt.min())){let t=e.Bs.getLastRemoteSnapshotVersion(l).next(t=>e.Bs.setTargetsMetadata(l,l.currentSequenceNumber,a));h.push(t)}return Rt.waitFor(h).next(()=>c.apply(l)).next(()=>e.localDocuments.getLocalViewOfDocuments(l,d,f)).next(()=>d)}).then(t=>(e.Ji=u,t))}(e.localStore,t);t.targetChanges.forEach((t,a)=>{let u=e.yc.get(a);u&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||O(),t.addedDocuments.size>0?u.fc=!0:t.modifiedDocuments.size>0?u.fc||O():t.removedDocuments.size>0&&(u.fc||O(),u.fc=!1))}),await ua(e,a,t)}catch(e){await vt(e)}}function Hc(e,t,a){var u;if(e.isPrimaryClient&&0===a||!e.isPrimaryClient&&1===a){let a;let l=[];e.wc.forEach((e,a)=>{let u=a.view.Mu(t);u.snapshot&&l.push(u.snapshot)}),(u=e.eventManager).onlineState=t,a=!1,u.queries.forEach((e,u)=>{for(let e of u.listeners)e.Mu(t)&&(a=!0)}),a&&xc(u),l.length&&e.dc.nu(l),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function Jc(e,t,a){e.sharedClientState.updateQueryState(t,"rejected",a);let u=e.yc.get(t),l=u&&u.key;if(l){let a=new pe(ht.comparator);a=a.insert(l,an.newNoDocument(l,rt.min()));let u=gs().add(l),c=new mi(rt.min(),new Map,new pe(et),a,u);await Wc(e,c),e.gc=e.gc.remove(l),e.yc.delete(t),oa(e)}else await lu(e.localStore,t,!1).then(()=>na(e,t,a)).catch(vt)}async function Yc(e,t){var a;let u=t.batch.batchId;try{let l=await (a=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let u=t.batch.keys(),l=a.Zi.newChangeBuffer({trackRemovals:!0});return(function(e,t,a,u){let l=a.batch,c=l.keys(),h=Rt.resolve();return c.forEach(e=>{h=h.next(()=>u.getEntry(t,e)).next(t=>{let c=a.docVersions.get(e);null!==c||O(),0>t.version.compareTo(c)&&(l.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),u.addEntry(t)))})}),h.next(()=>e.mutationQueue.removeMutationBatch(t,l))})(a,e,t,l).next(()=>l.apply(e)).next(()=>a.mutationQueue.performConsistencyCheck(e)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(e,u,t.batch.batchId)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=gs();for(let a=0;a<e.mutationResults.length;++a)e.mutationResults[a].transformResults.length>0&&(t=t.add(e.batch.mutations[a].key));return t}(t))).next(()=>a.localDocuments.getDocuments(e,u))});ea(e,u,null),ta(e,u),e.sharedClientState.updateMutationState(u,"acknowledged"),await ua(e,l)}catch(e){await vt(e)}}async function Xc(e,t,a){var u;try{let l=await (u=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let a;return u.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||O(),a=t.keys(),u.mutationQueue.removeMutationBatch(e,t))).next(()=>u.mutationQueue.performConsistencyCheck(e)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(e,a,t)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,a)).next(()=>u.localDocuments.getDocuments(e,a))});ea(e,t,a),ta(e,t),e.sharedClientState.updateMutationState(t,"rejected",a),await ua(e,l)}catch(e){await vt(e)}}async function Zc(e,t){var a;ec(e.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let u=await (a=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>a.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===u)return void t.resolve();let l=e.Ec.get(u)||[];l.push(t),e.Ec.set(u,l)}catch(a){let e=Ec(a,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function ta(e,t){(e.Ec.get(t)||[]).forEach(e=>{e.resolve()}),e.Ec.delete(t)}function ea(e,t,a){let u=e.Tc[e.currentUser.toKey()];if(u){let l=u.get(t);l&&(a?l.reject(a):l.resolve(),u=u.remove(t)),e.Tc[e.currentUser.toKey()]=u}}function na(e,t,a=null){for(let u of(e.sharedClientState.removeLocalQueryTarget(t),e._c.get(t)))e.wc.delete(u),a&&e.dc.Pc(u,a);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(t=>{e.Ic.containsKey(t)||sa(e,t)})}function sa(e,t){e.mc.delete(t.path.canonicalString());let a=e.gc.get(t);null!==a&&(Ju(e.remoteStore,a),e.gc=e.gc.remove(t),e.yc.delete(a),oa(e))}function ia(e,t,a){for(let u of a)u instanceof Fc?(e.Ic.addReference(u.key,t),function(e,t){let a=t.key,u=a.path.canonicalString();e.gc.get(a)||e.mc.has(u)||(N("SyncEngine","New document in limbo: "+a),e.mc.add(u),oa(e))}(e,u)):u instanceof Bc?(N("SyncEngine","Document no longer in limbo: "+u.key),e.Ic.removeReference(u.key,t),e.Ic.containsKey(u.key)||sa(e,u.key)):O()}function oa(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){let t=e.mc.values().next().value;e.mc.delete(t);let a=new ht(ut.fromString(t)),u=e.Ac.next();e.yc.set(u,new Uc(a)),e.gc=e.gc.insert(a,u),Hu(e.remoteStore,new cr(Jn(Gn(a.path)),u,"TargetPurposeLimboResolution",Ot.ct))}}async function ua(e,t,a){let u=[],l=[],c=[];e.wc.isEmpty()||(e.wc.forEach((h,d)=>{c.push(e.Rc(d,t,a).then(t=>{if((t||a)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(d.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){u.push(t);let e=tu.Li(d.targetId,t);l.push(e)}}))}),await Promise.all(c),e.dc.nu(u),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",a=>Rt.forEach(t,t=>Rt.forEach(t.Fi,u=>e.persistence.referenceDelegate.addReference(a,t.targetId,u)).next(()=>Rt.forEach(t.Bi,u=>e.persistence.referenceDelegate.removeReference(a,t.targetId,u)))))}catch(e){if(!Dt(e))throw e;N("LocalStore","Failed to update sequence numbers: "+e)}for(let a of t){let t=a.targetId;if(!a.fromCache){let a=e.Ji.get(t),u=a.snapshotVersion,l=a.withLastLimboFreeSnapshotVersion(u);e.Ji=e.Ji.insert(t,l)}}}(e.localStore,l))}async function ca(e,t){if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());let a=await iu(e.localStore,t);e.currentUser=t,e.Ec.forEach(e=>{e.forEach(e=>{e.reject(new U(I.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ec.clear(),e.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await ua(e,a.er)}}function aa(e,t){let a=e.yc.get(t);if(a&&a.fc)return gs().add(a.key);{let a=gs(),u=e._c.get(t);if(!u)return a;for(let t of u){let u=e.wc.get(t);a=a.unionWith(u.view.nc)}return a}}async function ha(e,t){let a=await fu(e.localStore,t.query,!0),u=t.view.hc(a);return e.isPrimaryClient&&ia(e,t.targetId,u.cc),u}async function la(e,t){return wu(e.localStore,t).then(t=>ua(e,t))}async function fa(e,t,a,u){let l=await function(e,t){let a=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",u=>a.Sn(u,t).next(t=>t?e.localDocuments.getDocuments(u,t):Rt.resolve(null)))}(e.localStore,t);null!==l?("pending"===a?await cc(e.remoteStore):"acknowledged"===a||"rejected"===a?(ea(e,t,u||null),ta(e,t),function(e,t){e.mutationQueue.Cn(t)}(e.localStore,t)):O(),await ua(e,l)):N("SyncEngine","Cannot apply mutation batch with id: "+t)}async function da(e,t){if(pa(e),Ia(e),!0===t&&!0!==e.vc){let t=e.sharedClientState.getAllActiveQueryTargets(),a=await wa(e,t.toArray());for(let t of(e.vc=!0,await yc(e.remoteStore,!0),a))Hu(e.remoteStore,t)}else if(!1===t&&!1!==e.vc){let t=[],a=Promise.resolve();e._c.forEach((u,l)=>{e.sharedClientState.isLocalQueryTarget(l)?t.push(l):a=a.then(()=>(na(e,l),lu(e.localStore,l,!0))),Ju(e.remoteStore,l)}),await a,await wa(e,t),e.yc.forEach((t,a)=>{Ju(e.remoteStore,a)}),e.Ic.Ts(),e.yc=new Map,e.gc=new pe(ht.comparator),e.vc=!1,await yc(e.remoteStore,!1)}}async function wa(e,t,a){let u=[],l=[];for(let a of t){let t;let c=e._c.get(a);if(c&&0!==c.length)for(let a of(t=await hu(e.localStore,Jn(c[0])),c)){let t=e.wc.get(a),u=await ha(e,t);u.snapshot&&l.push(u.snapshot)}else{let u=await du(e.localStore,a);t=await hu(e.localStore,u),await Qc(e,_a(u),a,!1,t.resumeToken)}u.push(t)}return e.dc.nu(l),u}function _a(e){var t,a,u,l,c,h,d;return t=e.path,a=e.collectionGroup,u=e.orderBy,l=e.filters,c=e.limit,h=e.startAt,d=e.endAt,new Un(t,a,u,l,c,"F",h,d)}function ma(e){return e.localStore.persistence.$i()}async function ga(e,t,a,u){if(e.vc)return void N("SyncEngine","Ignoring unexpected query state notification.");let l=e._c.get(t);if(l&&l.length>0)switch(a){case"current":case"not-current":{let u=await wu(e.localStore,ss(l[0])),c=mi.createSynthesizedRemoteEventForCurrentChange(t,"current"===a,Ve.EMPTY_BYTE_STRING);await ua(e,u,c);break}case"rejected":await lu(e.localStore,t,!0),na(e,t,u);break;default:O()}}async function ya(e,t,a){let u=pa(e);if(u.vc){for(let e of t){if(u._c.has(e)){N("SyncEngine","Adding an already active target "+e);continue}let t=await du(u.localStore,e),a=await hu(u.localStore,t);await Qc(u,_a(t),a.targetId,!1,a.resumeToken),Hu(u.remoteStore,a)}for(let e of a)u._c.has(e)&&await lu(u.localStore,e,!1).then(()=>{Ju(u.remoteStore,e),na(u,e)}).catch(vt)}}function pa(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=Wc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aa.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jc.bind(null,e),e.dc.nu=Dc.bind(null,e.eventManager),e.dc.Pc=Cc.bind(null,e.eventManager),e}function Ia(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xc.bind(null,e),e}let Ea=class Ea{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,a,u,l;return t=this.persistence,a=new eu,u=e.initialUser,l=this.serializer,new nu(t,a,u,l)}createPersistence(e){return new Ko(Qo.zs,this.serializer)}createSharedClientState(e){return new bu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}};let va=class va extends Ea{constructor(e,t,a){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=a,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Ia(this.Vc.syncEngine),await cc(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){var t,a,u,l;return t=this.persistence,a=new eu,u=e.initialUser,l=this.serializer,new nu(t,a,u,l)}createGarbageCollectionScheduler(e,t){let a=this.persistence.referenceDelegate.garbageCollector;return new po(a,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let a=new $t(t,this.persistence);return new Mt(e.asyncQueue,a)}createPersistence(e){let t=Zo(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),a=void 0!==this.cacheSizeBytes?so.withCacheSize(this.cacheSizeBytes):so.DEFAULT;return new Jo(this.synchronizeTabs,t,e.clientId,a,e.asyncQueue,$u(),Ou(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new bu}};let Ra=class Ra extends va{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Vc.syncEngine;this.sharedClientState instanceof Pu&&(this.sharedClientState.syncEngine={jr:fa.bind(null,t),zr:ga.bind(null,t),Wr:ya.bind(null,t),$i:ma.bind(null,t),Qr:la.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async e=>{await da(this.Vc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){let t=$u();if(!Pu.D(t))throw new U(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let a=Zo(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Pu(t,e.asyncQueue,a,e.clientId,e.initialUser)}};let Pa=class Pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Hc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ca.bind(null,this.syncEngine),await yc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bc}createDatastore(e){var t,a,u;let l=Fu(e.databaseInfo.databaseId),c=(t=e.databaseInfo,new Mu(t));return a=e.authCredentials,u=e.appCheckCredentials,new Ku(a,u,c,l)}createRemoteStore(e){var t,a,u,l;return t=this.localStore,a=this.datastore,u=e.asyncQueue,l=Su.D()?new Su:new Vu,new ju(t,a,u,e=>Hc(this.syncEngine,e,0),l)}createSyncEngine(e,t){return function(e,t,a,u,l,c,h){let d=new Kc(e,t,a,u,l,c);return h&&(d.vc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){N("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await Wu(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e,t=10240){let a=0;return{async read(){if(a<e.byteLength){let u={value:e.slice(a,a+t),done:!1};return a+=t,u}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va=class Va{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):k("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa=class Sa{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new K,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(e=>{e&&e.Qu()?this.metadata.resolve(e.Gu.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.Gu)}`))},e=>this.metadata.reject(e))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){let e=await this.kc();if(null===e)return null;let t=this.xc.decode(e),a=Number(t);isNaN(a)&&this.Mc(`length string (${t}) is not valid number`);let u=await this.$c(a);return new kc(JSON.parse(u),e.length+a)}Oc(){return this.buffer.findIndex(e=>123===e)}async kc(){for(;0>this.Oc()&&!await this.Fc(););if(0===this.buffer.length)return null;let e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");let t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),Error(`Invalid bundle format: ${e}`)}async Fc(){let e=await this.Cc.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da=class Da{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new U(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let t=await async function(e,t){let a=Li(e.serializer)+"/documents",u={documents:t.map(t=>$i(e.serializer,t))},l=await e.vo("BatchGetDocuments",a,u,t.length),c=new Map;l.forEach(t=>{var a;let u=(a=e.serializer,"found"in t?function(e,t){t.found||O(),t.found.name,t.found.updateTime;let a=Oi(e,t.found.name),u=Ni(t.found.updateTime),l=t.found.createTime?Ni(t.found.createTime):rt.min(),c=new un({mapValue:{fields:t.found.fields}});return an.newFoundDocument(a,u,l,c)}(a,t):"missing"in t?function(e,t){t.missing||O(),t.readTime||O();let a=Oi(e,t.missing),u=Ni(t.readTime);return an.newNoDocument(a,u)}(a,t):O());c.set(u.key.toString(),u)});let h=[];return t.forEach(e=>{let t=c.get(e.toString());t||O(),h.push(t)}),h}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ys(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let a=ht.fromPath(t);this.mutations.push(new Xs(a,this.precondition(a)))}),await async function(e,t){let a=Li(e.serializer)+"/documents",u={writes:t.map(t=>ji(e.serializer,t))};await e.Io("Commit",a,u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw O();t=rt.min()}let a=this.readVersions.get(e.key.toString());if(a){if(!t.isEqual(a))throw new U(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(rt.min())?Fs.exists(!1):Fs.updateTime(t):Fs.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(rt.min()))throw new U(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Fs.updateTime(t)}return Fs.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca=class Ca{constructor(e,t,a,u,l){this.asyncQueue=e,this.datastore=t,this.options=a,this.updateFunction=u,this.deferred=l,this.Bc=a.maxAttempts,this.qo=new Bu(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{let e=new Da(this.datastore),t=this.qc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Uc(e)}))}).catch(e=>{this.Uc(e)})})}qc(e){try{let t=this.updateFunction(e);return!Ft(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!oi(t)}return!1}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa=class xa{constructor(e,t,a,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=a,this.databaseInfo=u,this.user=V.UNAUTHENTICATED,this.clientId=tt.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(a,async e=>{N("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(a,e=>(N("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new K;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(a){let t=Ec(a,"Failed to shutdown persistence");e.reject(t)}}),e.promise}};async function Na(e,t){e.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");let a=await e.getConfiguration();await t.initialize(a);let u=a.initialUser;e.setCredentialChangeListener(async e=>{u.isEqual(e)||(await iu(t.localStore,e),u=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ka(e,t){e.asyncQueue.verifyOperationInProgress();let a=await $a(e);N("FirestoreClient","Initializing OnlineComponentProvider");let u=await e.getConfiguration();await t.initialize(a,u),e.setCredentialChangeListener(e=>gc(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,a)=>gc(t.remoteStore,a)),e._onlineComponents=t}function Ma(e){return"FirebaseError"===e.name?e.code===I.FAILED_PRECONDITION||e.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function $a(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Na(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!Ma(t))throw t;M("Error using user provided cache. Falling back to memory cache: "+t),await Na(e,new Ea)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Na(e,new Ea)}return e._offlineComponents}async function Oa(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await ka(e,e._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await ka(e,new Pa))),e._onlineComponents}function Fa(e){return $a(e).then(e=>e.persistence)}function Ba(e){return $a(e).then(e=>e.localStore)}function La(e){return Oa(e).then(e=>e.remoteStore)}function qa(e){return Oa(e).then(e=>e.syncEngine)}async function Ka(e){let t=await Oa(e),a=t.eventManager;return a.onListen=Gc.bind(null,t.syncEngine),a.onUnlisten=jc.bind(null,t.syncEngine),a}function za(e,t,a={}){let u=new K;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,a,u,l){let c=new Va({next:c=>{t.enqueueAndForget(()=>Sc(e,h));let d=c.docs.has(a);!d&&c.fromCache?l.reject(new U(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&c.fromCache&&u&&"server"===u.source?l.reject(new U(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(c)},error:e=>l.reject(e)}),h=new Nc(Gn(a.path),c,{includeMetadataChanges:!0,Ku:!0});return Vc(e,h)})(await Ka(e),e.asyncQueue,t,a,u)),u.promise}function Ha(e,t,a={}){let u=new K;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,a,u,l){let c=new Va({next:a=>{t.enqueueAndForget(()=>Sc(e,h)),a.fromCache&&"server"===u.source?l.reject(new U(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(a)},error:e=>l.reject(e)}),h=new Nc(a,c,{includeMetadataChanges:!0,Ku:!0});return Vc(e,h)})(await Ka(e),e.asyncQueue,t,a,u)),u.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eL=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(e,t,a){if(!a)throw new U(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function sh(e,t,a,u){if(!0===t&&!0===u)throw new U(I.INVALID_ARGUMENT,`${e} and ${a} cannot be used together.`)}function ih(e){if(!ht.isDocumentKey(e))throw new U(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rh(e){if(ht.isDocumentKey(e))throw new U(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let a=(t=e).constructor?t.constructor.name:null;return a?`a custom ${a} object`:"an object"}}return"function"==typeof e?"a function":O()}function uh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new U(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let a=oh(e);throw new U(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${a}`)}}return e}function ch(e,t){if(t<=0)throw new U(I.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ah=class ah{constructor(e){var t,a;if(void 0===e.host){if(void 0!==e.ssl)throw new U(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new U(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=th(null!==(a=e.experimentalLongPollingOptions)&&void 0!==a?a:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new U(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new U(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new U(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,a;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,a=e.experimentalLongPollingOptions,t.timeoutSeconds===a.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}};let hh=class hh{constructor(e,t,a,u){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=a,this._app=u,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ah({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new U(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ah(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Q;switch(e.type){case"firstParty":return new H(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new U(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=eL.get(e);t&&(N("ComponentProvider","Removing Datastore"),eL.delete(e),t.terminate())}(this),Promise.resolve()}};function lh(e,t,a,u={}){var l;let c=(e=uh(e,hh))._getSettings(),h=`${t}:${a}`;if("firestore.googleapis.com"!==c.host&&c.host!==h&&M("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},c),{host:h,ssl:!1})),u.mockUserToken){let t,a;if("string"==typeof u.mockUserToken)t=u.mockUserToken,a=V.MOCK_USER;else{t=(0,f.Sg)(u.mockUserToken,null===(l=e._app)||void 0===l?void 0:l.options.projectId);let c=u.mockUserToken.sub||u.mockUserToken.user_id;if(!c)throw new U(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new V(c)}e._authCredentials=new j(new G(t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh=class fh{constructor(e,t,a){this.converter=t,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fh(this.firestore,e,this._key)}};let dh=class dh{constructor(e,t,a){this.converter=t,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new dh(this.firestore,e,this._query)}};let wh=class wh extends dh{constructor(e,t,a){super(e,t,Gn(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new fh(this.firestore,null,new ht(e))}withConverter(e){return new wh(this.firestore,e,this._path)}};function _h(e,t,...a){if(e=(0,f.m9)(e),nh("collection","path",t),e instanceof hh){let u=ut.fromString(t,...a);return rh(u),new wh(e,null,u)}{if(!(e instanceof fh||e instanceof wh))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let u=e._path.child(ut.fromString(t,...a));return rh(u),new wh(e.firestore,null,u)}}function mh(e,t){if(e=uh(e,hh),nh("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new U(I.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new dh(e,null,new Un(ut.emptyPath(),t))}function gh(e,t,...a){if(e=(0,f.m9)(e),1==arguments.length&&(t=tt.A()),nh("doc","path",t),e instanceof hh){let u=ut.fromString(t,...a);return ih(u),new fh(e,null,new ht(u))}{if(!(e instanceof fh||e instanceof wh))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let u=e._path.child(ut.fromString(t,...a));return ih(u),new fh(e.firestore,e instanceof wh?e.converter:null,new ht(u))}}function yh(e,t){return e=(0,f.m9)(e),t=(0,f.m9)(t),(e instanceof fh||e instanceof wh)&&(t instanceof fh||t instanceof wh)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function ph(e,t){return e=(0,f.m9)(e),t=(0,f.m9)(t),e instanceof dh&&t instanceof dh&&e.firestore===t.firestore&&Zn(e._query,t._query)&&e.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih=class Ih{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Bu(this,"async_queue_retry"),this.Xc=()=>{let e=Ou();e&&N("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};let e=Ou();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;let t=Ou();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});let t=new K;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Dt(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){let t=this.Gc.then(()=>(this.Hc=!0,e().catch(e=>{let t;this.Wc=e,this.Hc=!1;let a=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw k("INTERNAL UNHANDLED ERROR: ",a),e}).then(e=>(this.Hc=!1,e))));return this.Gc=t,t}enqueueAfterDelay(e,t,a){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);let u=Tc.createAndSchedule(this,e,t,a,e=>this.na(e));return this.zc.push(u),u}Zc(){this.Wc&&O()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(let t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{for(let t of(this.zc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.zc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){let t=this.zc.indexOf(e);this.zc.splice(t,1)}};function Th(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let a of t)if(a in e&&"function"==typeof e[a])return!0;return!1}(e,["next","error","complete"])}let Eh=class Eh{constructor(){this._progressObserver={},this._taskCompletionResolver=new K,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,a){this._progressObserver={next:e,error:t,complete:a}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eU=-1;let vh=class vh extends hh{constructor(e,t,a,u){super(e,t,a,u),this.type="firestore",this._queue=new Ih,this._persistenceKey=(null==u?void 0:u.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vh(this),this._firestoreClient.terminate()}};function bh(e){return e._firestoreClient||Vh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Vh(e){var t,a,u,l,c,h;let d=e._freezeSettings(),f=(l=e._databaseId,c=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",h=e._persistenceKey,new $e(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,th(d.experimentalLongPollingOptions),d.useFetchStreams));e._firestoreClient=new xa(e._authCredentials,e._appCheckCredentials,e._queue,f),(null===(a=d.cache)||void 0===a?void 0:a._offlineComponentProvider)&&(null===(u=d.cache)||void 0===u?void 0:u._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:d.cache.kind,_offline:d.cache._offlineComponentProvider,_online:d.cache._onlineComponentProvider})}function Sh(e,t){Bh(e=uh(e,vh));let a=bh(e);if(a._uninitializedComponentsProvider)throw new U(I.FAILED_PRECONDITION,"SDK cache is already specified.");M("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let u=e._freezeSettings(),l=new Pa;return Ch(a,l,new va(l,u.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Dh(e){Bh(e=uh(e,vh));let t=bh(e);if(t._uninitializedComponentsProvider)throw new U(I.FAILED_PRECONDITION,"SDK cache is already specified.");M("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let a=e._freezeSettings(),u=new Pa;return Ch(t,u,new Ra(u,a.cacheSizeBytes))}function Ch(e,t,a){let u=new K;return e.asyncQueue.enqueue(async()=>{try{await Na(e,a),await ka(e,t),u.resolve()}catch(e){if(!Ma(e))throw e;M("Error enabling indexeddb cache. Falling back to memory cache: "+e),u.reject(e)}}).then(()=>u.promise)}function xh(e){if(e._initialized&&!e._terminated)throw new U(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new K;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!bt.D())return Promise.resolve();await bt.delete(e+"main")}(Zo(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function Nh(e){return function(e){let t=new K;return e.asyncQueue.enqueueAndForget(async()=>Zc(await qa(e),t)),t.promise}(bh(e=uh(e,vh)))}function kh(e){var t;return(t=bh(e=uh(e,vh))).asyncQueue.enqueue(async()=>{let e=await Fa(t),a=await La(t);return e.setNetworkEnabled(!0),a.vu.delete(0),zu(a)})}function Mh(e){var t;return(t=bh(e=uh(e,vh))).asyncQueue.enqueue(async()=>{let e=await Fa(t),a=await La(t);return e.setNetworkEnabled(!1),async function(e){e.vu.add(0),await Wu(e),e.bu.set("Offline")}(a)})}function Oh(e,t){let a=bh(e=uh(e,vh)),u=new Eh;return function(e,t,a,u){var l,c;let h=(l=Fu(t),c=function(e,t){if(e instanceof Uint8Array)return ba(e,t);if(e instanceof ArrayBuffer)return ba(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof a?hi().encode(a):a),new Sa(c,l));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,a){(async function(e,t,a){try{var u;let l=await t.getMetadata();if(await function(e,t){let a=Ni(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",a=>e.qs.getBundleMetadata(a,t.id)).then(e=>!!e&&e.createTime.compareTo(a)>=0)}(e.localStore,l))return await t.close(),a._completeWith({taskState:"Success",documentsLoaded:l.totalDocuments,bytesLoaded:l.totalBytes,totalDocuments:l.totalDocuments,totalBytes:l.totalBytes}),Promise.resolve(new Set);a._updateProgress(Oc(l));let c=new $c(l,e.localStore,t.serializer),h=await t.bc();for(;h;){let e=await c.zu(h);e&&a._updateProgress(e),h=await t.bc()}let d=await c.complete();return await ua(e,d.Ju,void 0),await (u=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>u.qs.saveBundleMetadata(e,l)),a._completeWith(d.progress),Promise.resolve(d.Hu)}catch(e){return M("SyncEngine",`Loading bundle failed with ${e}`),a._failWith(e),Promise.resolve(new Set)}})(e,t,a).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await qa(e),h,u)})}(a,e._databaseId,t,u),u}function Fh(e,t){var a;return(a=bh(e=uh(e,vh))).asyncQueue.enqueue(async()=>{var e;return(e=await Ba(a)).persistence.runTransaction("Get named query","readonly",a=>e.qs.getNamedQuery(a,t))}).then(t=>t?new dh(e,null,t.query):null)}function Bh(e){if(e._initialized||e._terminated)throw new U(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh=class Uh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Uh(Ve.fromBase64String(e))}catch(e){throw new U(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Uh(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh=class Kh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new U(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qh=class Qh{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh=class jh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return et(this._lat,e._lat)||et(this._long,e._long)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eP=/^__.*__$/;let Wh=class Wh{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return null!==this.fieldMask?new zs(e,this.data,this.fieldMask,t,this.fieldTransforms):new js(e,this.data,t,this.fieldTransforms)}};let Hh=class Hh{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return new zs(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function Jh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}let Yh=class Yh{constructor(e,t,a,u,l,c){this.settings=e,this.databaseId=t,this.serializer=a,this.ignoreUndefinedProperties=u,void 0===l&&this.ua(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Yh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;let a=null===(t=this.path)||void 0===t?void 0:t.child(e),u=this.aa({path:a,la:!1});return u.fa(e),u}da(e){var t;let a=null===(t=this.path)||void 0===t?void 0:t.child(e),u=this.aa({path:a,la:!1});return u.ua(),u}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return gl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Jh(this.ca)&&eP.test(e))throw this._a('Document fields cannot begin and end with "__"')}};let Xh=class Xh{constructor(e,t,a){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=a||Fu(e)}ya(e,t,a,u=!1){return new Yh({ca:e,methodName:t,ga:a,path:at.emptyPath(),la:!1,ma:u},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Zh(e){let t=e._freezeSettings(),a=Fu(e._databaseId);return new Xh(e._databaseId,!!t.ignoreUndefinedProperties,a)}function tl(e,t,a,u,l,c={}){let h,d;let f=e.ya(c.merge||c.mergeFields?2:0,t,a,l);dl("Data must be an object, but it was:",f,u);let m=ll(u,f);if(c.merge)h=new Re(f.fieldMask),d=f.fieldTransforms;else if(c.mergeFields){let e=[];for(let u of c.mergeFields){let l=wl(t,u,a);if(!f.contains(l))throw new U(I.INVALID_ARGUMENT,`Field '${l}' is specified in your field mask but missing from your input data.`);yl(e,l)||e.push(l)}h=new Re(e),d=f.fieldTransforms.filter(e=>h.covers(e.field))}else h=null,d=f.fieldTransforms;return new Wh(new un(m),h,d)}let el=class el extends Qh{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof el}};function nl(e,t,a){return new Yh({ca:3,ga:t.settings.ga,methodName:e._methodName,la:a},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}let sl=class sl extends Qh{_toFieldTransform(e){return new Ms(e.path,new bs)}isEqual(e){return e instanceof sl}};let il=class il extends Qh{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){let t=nl(this,e,!0),a=this.pa.map(e=>hl(e,t)),u=new Vs(a);return new Ms(e.path,u)}isEqual(e){return this===e}};let rl=class rl extends Qh{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){let t=nl(this,e,!0),a=this.pa.map(e=>hl(e,t)),u=new Ds(a);return new Ms(e.path,u)}isEqual(e){return this===e}};let ol=class ol extends Qh{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){let t=new xs(e.serializer,Es(e.serializer,this.Ia));return new Ms(e.path,t)}isEqual(e){return this===e}};function ul(e,t,a,u){let l=e.ya(1,t,a);dl("Data must be an object, but it was:",l,u);let c=[],h=un.empty();ge(u,(e,u)=>{let d=ml(t,e,a);u=(0,f.m9)(u);let m=l.da(d);if(u instanceof el)c.push(d);else{let e=hl(u,m);null!=e&&(c.push(d),h.set(d,e))}});let d=new Re(c);return new Hh(h,d,l.fieldTransforms)}function cl(e,t,a,u,l,c){let h=e.ya(1,t,a),d=[wl(t,u,a)],m=[l];if(c.length%2!=0)throw new U(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<c.length;e+=2)d.push(wl(t,c[e])),m.push(c[e+1]);let g=[],p=un.empty();for(let e=d.length-1;e>=0;--e)if(!yl(g,d[e])){let t=d[e],a=m[e];a=(0,f.m9)(a);let u=h.da(t);if(a instanceof el)g.push(t);else{let e=hl(a,u);null!=e&&(g.push(t),p.set(t,e))}}let y=new Re(g);return new Hh(p,y,h.fieldTransforms)}function al(e,t,a,u=!1){return hl(a,e.ya(u?4:3,t))}function hl(e,t){if(fl(e=(0,f.m9)(e)))return dl("Unsupported field value:",t,e),ll(e,t);if(e instanceof Qh)return function(e,t){if(!Jh(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);let a=e._toFieldTransform(t);a&&t.fieldTransforms.push(a)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){let a=[],u=0;for(let l of e){let e=hl(l,t.wa(u));null==e&&(e={nullValue:"NULL_VALUE"}),a.push(e),u++}return{arrayValue:{values:a}}}(e,t)}return function(e,t){if(null===(e=(0,f.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Es(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let a=it.fromDate(e);return{timestampValue:Di(t.serializer,a)}}if(e instanceof it){let a=new it(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Di(t.serializer,a)}}if(e instanceof jh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Uh)return{bytesValue:Ci(t.serializer,e._byteString)};if(e instanceof fh){let a=t.databaseId,u=e.firestore._databaseId;if(!u.isEqual(a))throw t._a(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:ki(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${oh(e)}`)}(e,t)}function ll(e,t){let a={};return ye(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ge(e,(e,u)=>{let l=hl(u,t.ha(e));null!=l&&(a[e]=l)}),{mapValue:{fields:a}}}function fl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof it||e instanceof jh||e instanceof Uh||e instanceof fh||e instanceof Qh)}function dl(e,t,a){if(!fl(a)||!("object"==typeof a&&null!==a&&(Object.getPrototypeOf(a)===Object.prototype||null===Object.getPrototypeOf(a)))){let u=oh(a);throw"an object"===u?t._a(e+" a custom object"):t._a(e+" "+u)}}function wl(e,t,a){if((t=(0,f.m9)(t))instanceof Kh)return t._internalPath;if("string"==typeof t)return ml(e,t);throw gl("Field path arguments must be of type string or ",e,!1,void 0,a)}let eq=RegExp("[~\\*/\\[\\]]");function ml(e,t,a){if(t.search(eq)>=0)throw gl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new Kh(...t.split("."))._internalPath}catch(u){throw gl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}function gl(e,t,a,u,l){let c=u&&!u.isEmpty(),h=void 0!==l,d=`Function ${t}() called with invalid data`;a&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(c||h)&&(f+=" (found",c&&(f+=` in field ${u}`),h&&(f+=` in document ${l}`),f+=")"),new U(I.INVALID_ARGUMENT,d+e+f)}function yl(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl=class pl{constructor(e,t,a,u,l){this._firestore=e,this._userDataWriter=t,this._key=a,this._document=u,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new fh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new Il(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(Tl("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}};let Il=class Il extends pl{data(){return super.data()}};function Tl(e,t){return"string"==typeof t?ml(e,t):t instanceof Kh?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new U(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}let Al=class Al{};let vl=class vl extends Al{};function Rl(e,t,...a){let u=[];for(let l of(t instanceof Al&&u.push(t),function(e){let t=e.filter(e=>e instanceof Vl).length,a=e.filter(e=>e instanceof Pl).length;if(t>1||t>0&&a>0)throw new U(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(u=u.concat(a)),u))e=l._apply(e);return e}let Pl=class Pl extends vl{constructor(e,t,a){super(),this._field=e,this._op=t,this._value=a,this.type="where"}static _create(e,t,a){return new Pl(e,t,a)}_apply(e){let t=this._parse(e);return Ql(e._query,t),new dh(e.firestore,e.converter,Yn(e._query,t))}_parse(e){let t=Zh(e.firestore),a=function(e,t,a,u,l,c,h){let d;if(l.isKeyField()){if("array-contains"===c||"array-contains-any"===c)throw new U(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if("in"===c||"not-in"===c){Gl(h,c);let t=[];for(let a of h)t.push(Kl(u,e,a));d={arrayValue:{values:t}}}else d=Kl(u,e,h)}else"in"!==c&&"not-in"!==c&&"array-contains-any"!==c||Gl(h,c),d=al(a,t,h,"in"===c||"not-in"===c);return mn.create(l,c,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return a}};function bl(e,t,a){let u=Tl("where",e);return Pl._create(u,t,a)}let Vl=class Vl extends Al{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Vl(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:gn.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let a=e,u=t.getFlattenedFilters();for(let e of u)Ql(a,e),a=Yn(a,e)}(e._query,t),new dh(e.firestore,e.converter,Yn(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}};let Cl=class Cl extends vl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Cl(e,t)}_apply(e){let t=function(e,t,a){if(null!==e.startAt)throw new U(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new U(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let u=new dn(t,a);return function(e,t){if(null===jn(e)){let a=zn(e);null!==a&&jl(e,a,t.field)}}(e,u),u}(e._query,this._field,this._direction);return new dh(e.firestore,e.converter,function(e,t){let a=e.explicitOrderBy.concat([t]);return new Un(e.path,e.collectionGroup,a,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}};function xl(e,t="asc"){let a=Tl("orderBy",e);return Cl._create(a,t)}let Nl=class Nl extends vl{constructor(e,t,a){super(),this.type=e,this._limit=t,this._limitType=a}static _create(e,t,a){return new Nl(e,t,a)}_apply(e){return new dh(e.firestore,e.converter,Xn(e._query,this._limit,this._limitType))}};function kl(e){return ch("limit",e),Nl._create("limit",e,"F")}function Ml(e){return ch("limitToLast",e),Nl._create("limitToLast",e,"L")}let $l=class $l extends vl{constructor(e,t,a){super(),this.type=e,this._docOrFields=t,this._inclusive=a}static _create(e,t,a){return new $l(e,t,a)}_apply(e){var t;let a=Ul(e,this.type,this._docOrFields,this._inclusive);return new dh(e.firestore,e.converter,(t=e._query,new Un(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,a,t.endAt)))}};function Ol(...e){return $l._create("startAt",e,!0)}function Fl(...e){return $l._create("startAfter",e,!1)}let Bl=class Bl extends vl{constructor(e,t,a){super(),this.type=e,this._docOrFields=t,this._inclusive=a}static _create(e,t,a){return new Bl(e,t,a)}_apply(e){var t;let a=Ul(e,this.type,this._docOrFields,this._inclusive);return new dh(e.firestore,e.converter,(t=e._query,new Un(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,a)))}};function Ll(...e){return Bl._create("endBefore",e,!1)}function ql(...e){return Bl._create("endAt",e,!0)}function Ul(e,t,a,u){if(a[0]=(0,f.m9)(a[0]),a[0]instanceof pl)return function(e,t,a,u,l){if(!u)throw new U(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);let c=[];for(let a of Hn(e))if(a.field.isKeyField())c.push(We(t,u.key));else{let e=u.data.field(a.field);if(Ne(e))throw new U(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=a.field.canonicalString();throw new U(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}c.push(e)}return new hn(c,l)}(e._query,e.firestore._databaseId,t,a[0]._document,u);{let l=Zh(e.firestore);return function(e,t,a,u,l,c){let h=e.explicitOrderBy;if(l.length>h.length)throw new U(I.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let d=[];for(let c=0;c<l.length;c++){let f=l[c];if(h[c].field.isKeyField()){if("string"!=typeof f)throw new U(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof f}`);if(!Wn(e)&&-1!==f.indexOf("/"))throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${f}' contains a slash.`);let a=e.path.child(ut.fromString(f));if(!ht.isDocumentKey(a))throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${a}' is not because it contains an odd number of segments.`);let l=new ht(a);d.push(We(t,l))}else{let e=al(a,u,f);d.push(e)}}return new hn(d,c)}(e._query,e.firestore._databaseId,l,t,a,u)}}function Kl(e,t,a){if("string"==typeof(a=(0,f.m9)(a))){if(""===a)throw new U(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wn(t)&&-1!==a.indexOf("/"))throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${a}' contains a '/' character.`);let u=t.path.child(ut.fromString(a));if(!ht.isDocumentKey(u))throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${u}' is not because it has an odd number of segments (${u.length}).`);return We(e,new ht(u))}if(a instanceof fh)return We(e,a._key);throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(a)}.`)}function Gl(e,t){if(!Array.isArray(e)||0===e.length)throw new U(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ql(e,t){if(t.isInequality()){let a=zn(e),u=t.field;if(null!==a&&!a.isEqual(u))throw new U(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${a.toString()}' and '${u.toString()}'`);let l=jn(e);null!==l&&jl(e,u,l)}let a=function(e,t){for(let a of e)for(let e of a.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==a)throw a===t.op?new U(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new U(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${a.toString()}' filters.`)}function jl(e,t,a){if(!a.isEqual(t))throw new U(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${a.toString()}' instead.`)}let Wl=class Wl{convertValue(e,t="none"){switch(Le(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let a={};return ge(e,(e,u)=>{a[e]=this.convertValue(u,t)}),a}convertGeoPoint(e){return new jh(Ce(e.latitude),Ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let a=ke(e);return null==a?null:this.convertValue(a,t);case"estimate":return this.convertTimestamp(Me(e));default:return null}}convertTimestamp(e){let t=De(e);return new it(t.seconds,t.nanos)}convertDocumentKey(e,t){let a=ut.fromString(e);ur(a)||O();let u=new Oe(a.get(1),a.get(3)),l=new ht(a.popFirst(5));return u.isEqual(t)||k(`Document ${l} contains a document reference within a different database (${u.projectId}/${u.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(e,t,a){return e?a&&(a.merge||a.mergeFields)?e.toFirestore(t,a):e.toFirestore(t):t}let Jl=class Jl extends Wl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Uh(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new fh(this.firestore,null,t)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf=class nf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}};let sf=class sf extends pl{constructor(e,t,a,u,l,c){super(e,t,a,u,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new rf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let a=this._document.data.field(Tl("DocumentSnapshot.get",e));if(null!==a)return this._userDataWriter.convertValue(a,t.serverTimestamps)}}};let rf=class rf extends sf{data(e={}){return super.data(e)}};let of=class of{constructor(e,t,a,u){this._firestore=e,this._userDataWriter=t,this._snapshot=u,this.metadata=new nf(u.hasPendingWrites,u.fromCache),this.query=a}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(a=>{e.call(t,new rf(this._firestore,this._userDataWriter,a.key,a,new nf(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(a=>{let u=new rf(e._firestore,e._userDataWriter,a.doc.key,a.doc,new nf(e._snapshot.mutatedKeys.has(a.doc.key),e._snapshot.fromCache),e.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:t++}})}{let a=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let u=new rf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new nf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),l=-1,c=-1;return 0!==t.type&&(l=a.indexOf(t.doc.key),a=a.delete(t.doc.key)),1!==t.type&&(c=(a=a.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}(t.type),doc:u,oldIndex:l,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function cf(e,t){return e instanceof sf&&t instanceof sf?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof of&&t instanceof of&&e._firestore===t._firestore&&ph(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(e){e=uh(e,fh);let t=uh(e.firestore,vh);return za(bh(t),e._key).then(a=>Af(t,e,a))}let hf=class hf extends Wl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Uh(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new fh(this.firestore,null,t)}};function lf(e){e=uh(e,fh);let t=uh(e.firestore,vh),a=bh(t),u=new hf(t);return(function(e,t){let a=new K;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,a){try{let u=await e.persistence.runTransaction("read document","readonly",a=>e.localDocuments.getDocument(a,t));u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new U(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){let e=Ec(u,`Failed to get document '${t} from cache`);a.reject(e)}})(await Ba(e),t,a)),a.promise})(a,e._key).then(a=>new sf(t,u,e._key,a,new nf(null!==a&&a.hasLocalMutations,!0),e.converter))}function ff(e){e=uh(e,fh);let t=uh(e.firestore,vh);return za(bh(t),e._key,{source:"server"}).then(a=>Af(t,e,a))}function df(e){e=uh(e,dh);let t=uh(e.firestore,vh),a=bh(t),u=new hf(t);return El(e._query),Ha(a,e._query).then(a=>new of(t,u,e,a))}function wf(e){e=uh(e,dh);let t=uh(e.firestore,vh),a=bh(t),u=new hf(t);return(function(e,t){let a=new K;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,a){try{let u=await fu(e,t,!0),l=new Lc(t,u.ir),c=l.sc(u.documents),h=l.applyChanges(c,!1);a.resolve(h.snapshot)}catch(u){let e=Ec(u,`Failed to execute query '${t} against cache`);a.reject(e)}})(await Ba(e),t,a)),a.promise})(a,e._query).then(a=>new of(t,u,e,a))}function _f(e){e=uh(e,dh);let t=uh(e.firestore,vh),a=bh(t),u=new hf(t);return Ha(a,e._query,{source:"server"}).then(a=>new of(t,u,e,a))}function mf(e,t,a){e=uh(e,fh);let u=uh(e.firestore,vh),l=Hl(e.converter,t,a);return Ef(u,[tl(Zh(u),"setDoc",e._key,l,null!==e.converter,a).toMutation(e._key,Fs.none())])}function gf(e,t,a,...u){e=uh(e,fh);let l=uh(e.firestore,vh),c=Zh(l);return Ef(l,[("string"==typeof(t=(0,f.m9)(t))||t instanceof Kh?cl(c,"updateDoc",e._key,t,a,u):ul(c,"updateDoc",e._key,t)).toMutation(e._key,Fs.exists(!0))])}function yf(e){return Ef(uh(e.firestore,vh),[new Ys(e._key,Fs.none())])}function pf(e,t){let a=uh(e.firestore,vh),u=gh(e),l=Hl(e.converter,t);return Ef(a,[tl(Zh(e.firestore),"addDoc",u._key,l,null!==e.converter,{}).toMutation(u._key,Fs.exists(!1))]).then(()=>u)}function If(e,...t){var a,u,l;let c,h,d;e=(0,f.m9)(e);let m={includeMetadataChanges:!1},g=0;"object"!=typeof t[0]||Th(t[g])||(m=t[g],g++);let p={includeMetadataChanges:m.includeMetadataChanges};if(Th(t[g])){let e=t[g];t[g]=null===(a=e.next)||void 0===a?void 0:a.bind(e),t[g+1]=null===(u=e.error)||void 0===u?void 0:u.bind(e),t[g+2]=null===(l=e.complete)||void 0===l?void 0:l.bind(e)}if(e instanceof fh)h=uh(e.firestore,vh),d=Gn(e._key.path),c={next:a=>{t[g]&&t[g](Af(h,e,a))},error:t[g+1],complete:t[g+2]};else{let a=uh(e,dh);h=uh(a.firestore,vh),d=a._query;let u=new hf(h);c={next:e=>{t[g]&&t[g](new of(h,u,a,e))},error:t[g+1],complete:t[g+2]},El(e._query)}return function(e,t,a,u){let l=new Va(u),c=new Nc(t,l,a);return e.asyncQueue.enqueueAndForget(async()=>Vc(await Ka(e),c)),()=>{l.Dc(),e.asyncQueue.enqueueAndForget(async()=>Sc(await Ka(e),c))}}(bh(h),d,p,c)}function Tf(e,t){return function(e,t){let a=new Va(t);return e.asyncQueue.enqueueAndForget(async()=>{(await Ka(e)).ku.add(a),a.next()}),()=>{a.Dc(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.ku.delete(t)})(await Ka(e),a))}}(bh(e=uh(e,vh)),Th(t)?t:{next:t})}function Ef(e,t){return function(e,t){let a=new K;return e.asyncQueue.enqueueAndForget(async()=>zc(await qa(e),t,a)),a.promise}(bh(e),t)}function Af(e,t,a){let u=a.docs.get(t._key),l=new hf(e);return new sf(e,l,t._key,u,new nf(a.hasPendingWrites,a.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eB={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bf=class Bf{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Zh(e)}set(e,t,a){this._verifyNotCommitted();let u=Lf(e,this._firestore),l=Hl(u.converter,t,a),c=tl(this._dataReader,"WriteBatch.set",u._key,l,null!==u.converter,a);return this._mutations.push(c.toMutation(u._key,Fs.none())),this}update(e,t,a,...u){let l;this._verifyNotCommitted();let c=Lf(e,this._firestore);return l="string"==typeof(t=(0,f.m9)(t))||t instanceof Kh?cl(this._dataReader,"WriteBatch.update",c._key,t,a,u):ul(this._dataReader,"WriteBatch.update",c._key,t),this._mutations.push(l.toMutation(c._key,Fs.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Lf(e,this._firestore);return this._mutations=this._mutations.concat(new Ys(t._key,Fs.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Lf(e,t){if((e=(0,f.m9)(e)).firestore!==t)throw new U(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qf=class qf extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Zh(e)}get(e){let t=Lf(e,this._firestore),a=new Jl(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return O();let u=e[0];if(u.isFoundDocument())return new pl(this._firestore,a,u.key,u,t.converter);if(u.isNoDocument())return new pl(this._firestore,a,t._key,null,t.converter);throw O()})}set(e,t,a){let u=Lf(e,this._firestore),l=Hl(u.converter,t,a),c=tl(this._dataReader,"Transaction.set",u._key,l,null!==u.converter,a);return this._transaction.set(u._key,c),this}update(e,t,a,...u){let l;let c=Lf(e,this._firestore);return l="string"==typeof(t=(0,f.m9)(t))||t instanceof Kh?cl(this._dataReader,"Transaction.update",c._key,t,a,u):ul(this._dataReader,"Transaction.update",c._key,t),this._transaction.update(c._key,l),this}delete(e){let t=Lf(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=Lf(e,this._firestore),a=new hf(this._firestore);return super.get(e).then(e=>new sf(this._firestore,a,t._key,e._document,new nf(!1,!1),t.converter))}};function Uf(e,t,a){e=uh(e,vh);let u=Object.assign(Object.assign({},eB),a);return!function(e){if(e.maxAttempts<1)throw new U(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(u),function(e,t,a){let u=new K;return e.asyncQueue.enqueueAndForget(async()=>{let l=await Oa(e).then(e=>e.datastore);new Ca(e.asyncQueue,l,a,t,u).run()}),u.promise}(bh(e),a=>t(new qf(e,a)),u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(){return new el("deleteField")}function Gf(){return new sl("serverTimestamp")}function Qf(...e){return new il("arrayUnion",e)}function jf(...e){return new rl("arrayRemove",e)}function zf(e){return new ol("increment",e)}!function(e,t=!0){y=c.SDK_VERSION,(0,c._registerComponent)(new h.wA("firestore",(e,{instanceIdentifier:a,options:u})=>{let l=e.getProvider("app").getImmediate(),c=new vh(new z(e.getProvider("auth-internal")),new Y(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new U(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(e.options.projectId,t)}(l,a),l);return u=Object.assign({useFetchStreams:t},u),c._setSettings(u),c},"PUBLIC").setMultipleInstances(!0)),(0,c.registerVersion)(p,"3.13.0",void 0),(0,c.registerVersion)(p,"3.13.0","esm2017")}()}}]);