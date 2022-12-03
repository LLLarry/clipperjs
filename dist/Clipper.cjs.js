"use strict";const t=t=>Object.prototype.toString.call(t).replace(/\[object\s(.+)\]/,"$1").toLowerCase(),e=(t,e=document)=>e.querySelector(t),i=(t,e)=>{let i=0;return function(...n){const s=Date.now();s-i>=e&&(t&&t.apply(this,n),i=s)}},n=(t,e)=>!!e&&(!!t.isSameNode(e)||n(t,e.parentNode)),s=(e,i={},n="")=>{i=null===i?{}:i,n=null===n?"":n;const c=document.createElement(e);for(let[t,e]of Object.entries(i))c.setAttribute(t,e);if("string"===t(n))return c.innerHTML=n,c;for(let e of n)"string"===t(e)?e=document.createHTMLNode(e):"object"===t(e)&&(e=s(e.tagName,e.props,e.children)),c.appendChild(e);return c};function c(t,e){const i=t.x-e.x,n=t.y-e.y;return Math.hypot(i,n)}function r(t,e){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}const l=t=>{if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);if("object"==typeof t&&null!==t){const e=new t.constructor;for(let i in t)t.hasOwnProperty(i)&&(e[i]=l(t[i]));return e}return t},o={clipRect:{visible:!1,size:[.5,.5],position:"center",isCanHidden:!0,isCanResize:!0,isCanPosition:!0}};function h(t){if(t.clientX<=this.clipperCvs.getBoundingClientRect().left)return;const e=t.clientX-this.clipRect.scaleStartPosition[0],i=this.copyClipRect.x+e,n=this.copyClipRect.width-e;this.clipRect.x=Math.min(Math.max(i,0),this.clipRect.width+this.clipRect.x),this.clipRect.width=Math.min(Math.max(n,0),this.clipperCvs.width-this.clipRect.x)}function p(t){if(t.clientY<=this.clipperCvs.getBoundingClientRect().top)return;const e=t.clientY-this.clipRect.scaleStartPosition[1],i=this.copyClipRect.y+e,n=this.copyClipRect.height-e;this.clipRect.y=Math.min(Math.max(i,0),this.clipRect.height+this.clipRect.y),this.clipRect.height=Math.min(Math.max(n,0),this.clipperCvs.height-this.clipRect.y)}function a(t){const e=t.clientX-this.clipRect.scaleStartPosition[0],i=this.copyClipRect.width+e;this.clipRect.width=Math.min(Math.max(i,0),this.clipperCvs.width-this.clipRect.x)}function f(t){const e=t.clientY-this.clipRect.scaleStartPosition[1],i=this.copyClipRect.height+e;this.clipRect.height=Math.min(Math.max(i,0),this.clipperCvs.height-this.clipRect.y)}function d(t){const{top:e,left:i}=this.clipperCvs.getBoundingClientRect();let[n,s]=this.clipRect.scaleStartPosition;n-=i,s-=e;const c=t.x-i,r=t.y-e;let l,o,h=Math.abs(c-n),p=Math.abs(r-s);c>=n&&r>=s?(l=n,o=s,h=Math.min(h,this.clipperCvs.width-n),p=Math.min(p,this.clipperCvs.height-s)):c>n&&r<s?(l=n,o=r,h=Math.min(h,this.clipperCvs.width-n),p=Math.min(p,s)):c<n&&r>s?(l=c,o=s,h=Math.min(n,h),p=Math.min(p,this.clipperCvs.height-s)):c<n&&r<s&&(l=c,o=r,h=Math.min(n,h),p=Math.min(p,s)),l=Math.min(Math.max(0,l),this.clipperCvs.width),o=Math.min(Math.max(0,o),this.clipperCvs.height),this.clipRect={...this.clipRect,x:l,y:o,width:h,height:p}}function v(t){if(t.touches.length<2||this.startTouchStatus.touches.length<2)return 0;const[{clientX:e,clientY:i},{clientX:n,clientY:s}]=Array.from(this.startTouchStatus.touches),[{clientX:r,clientY:l},{clientX:o,clientY:h}]=Array.from(t.touches),p=Math.abs(c({x:e,y:i},{x:n,y:s})),a=Math.abs(c({x:r,y:l},{x:o,y:h}));return a>p?1:a<p?-1:0}function z(t){this.clipRect={...this.clipRect,scaleBorder:"none",scaleDirection:"none"};const{clipperCvs:e,clipperClip:i,clipperMask:n,clipperBorderLineLeft:s,clipperBorderLineTop:c,clipperBorderLineRight:r,clipperBorderLineBottom:l,clipperBorderBlockLeftTop:o,clipperBorderBlockRightTop:h,clipperBorderBlockRightBottom:p,clipperBorderBlockLeftBottom:a,clipperSupLineCol1:f,clipperSupLineCol2:d,clipperSupLineRow1:v,clipperSupLineRow2:z}=this;delete this.copyClipRect;const m=t.target;if(m.isSameNode(s)?(this.clipRect.scaleBorder="left",this.clipRect.scaleStartPosition=[t.clientX,t.clientY]):m.isSameNode(c)?(this.clipRect.scaleBorder="top",this.clipRect.scaleStartPosition=[t.clientX,t.clientY]):m.isSameNode(r)?(this.clipRect.scaleBorder="right",this.clipRect.scaleStartPosition=[t.clientX,t.clientY]):m.isSameNode(l)?(this.clipRect.scaleBorder="bottom",this.clipRect.scaleStartPosition=[t.clientX,t.clientY]):m.isSameNode(i)||m.isSameNode(f)||m.isSameNode(d)||m.isSameNode(v)||m.isSameNode(z)?(this.clipRect.scaleBorder="all",this.clipRect.scaleStartPosition=[t.clientX,t.clientY]):m.isSameNode(o)?(this.clipRect.scaleBorder="left-top",this.clipRect.scaleStartPosition=[t.clientX,t.clientY]):m.isSameNode(h)?(this.clipRect.scaleBorder="right-top",this.clipRect.scaleStartPosition=[t.clientX,t.clientY]):m.isSameNode(p)?(this.clipRect.scaleBorder="right-bottom",this.clipRect.scaleStartPosition=[t.clientX,t.clientY]):m.isSameNode(a)?(this.clipRect.scaleBorder="left-bottom",this.clipRect.scaleStartPosition=[t.clientX,t.clientY]):(m.isSameNode(e)||m.isSameNode(n))&&"IMG_STATUS_SUCCESS"===this.imageInfo.status&&(this.clipRect.scaleBorder="custom",this.clipRect.scaleStartPosition=[t.x,t.y],this.clipRect.isCanHidden&&this.contralClipVisible(!1)),this.copyClipRect=JSON.parse(JSON.stringify(this.clipRect)),!this.clipRect.isCanResize){["left","top","right","bottom","left-top","right-top","right-bottom","left-bottom","custom"].includes(this.clipRect.scaleBorder)&&(this.clipRect.scaleBorder="none")}if(!this.clipRect.isCanPosition){["all"].includes(this.clipRect.scaleBorder)&&(this.clipRect.scaleBorder="none")}}function m(t){if("none"===this.clipRect.scaleBorder)return!1;if("left"===this.clipRect.scaleBorder)h.call(this,t);else if("top"===this.clipRect.scaleBorder)p.call(this,t);else if("right"===this.clipRect.scaleBorder)a.call(this,t);else if("bottom"===this.clipRect.scaleBorder)f.call(this,t);else if("all"===this.clipRect.scaleBorder){const e=t.clientX-this.clipRect.scaleStartPosition[0],i=this.copyClipRect.x+e;this.clipRect.x=Math.min(Math.max(i,0),this.clipperCvs.width-this.clipRect.width);const n=t.clientY-this.clipRect.scaleStartPosition[1],s=this.copyClipRect.y+n;this.clipRect.y=Math.min(Math.max(s,0),this.clipperCvs.height-this.clipRect.height)}else"left-top"===this.clipRect.scaleBorder?(h.call(this,t),p.call(this,t)):"right-top"===this.clipRect.scaleBorder?(a.call(this,t),p.call(this,t)):"right-bottom"===this.clipRect.scaleBorder?(a.call(this,t),f.call(this,t)):"left-bottom"===this.clipRect.scaleBorder?(h.call(this,t),f.call(this,t)):"custom"===this.clipRect.scaleBorder&&(d.call(this,t),this.contralClipVisible(!0));this.drawClipRect()}function b(t){this.clipRect.scaleBorder="none",this.clipRect.scaleDirection="none",this.clipRect.scaleStartPosition=[0,0],delete this.copyClipRect}function u(t){if(!n(this.clipperImgBox,t.target)||"IMG_STATUS_SUCCESS"!==this.imageInfo.status)return!1;t.preventDefault(),t.stopPropagation();const e=t.clientX-this.imageInfo.dx-this.clipperCvs.getBoundingClientRect().left,i=t.clientY-this.imageInfo.dy-this.clipperCvs.getBoundingClientRect().top,s=t.clientX-this.clipperCvs.getBoundingClientRect().left,c=t.clientY-this.clipperCvs.getBoundingClientRect().top,r=e/(this.img.width*this.imageInfo.scale),l=i/(this.img.height*this.imageInfo.scale);t.deltaY>0?this.imageInfo.scale=this.imageInfo.scale*(1-this.imageInfo.SCALE_RATE):this.imageInfo.scale=this.imageInfo.scale*(1+this.imageInfo.SCALE_RATE),this.imageInfo.dx=s-r*(this.img.width*this.imageInfo.scale),this.imageInfo.dy=c-l*(this.img.height*this.imageInfo.scale),this.drawImage()}function g(t){t.preventDefault(),"ArrowUp"===t.code?this.imageInfo.dy-=10:"ArrowRight"===t.code?this.imageInfo.dx+=10:"ArrowDown"===t.code?this.imageInfo.dy+=10:"ArrowLeft"===t.code&&(this.imageInfo.dx-=10),this.drawImage()}function N(){if(this.startTouchStatus={touches:event.touches,centerPoiont:null,flag:!1},!n(this.options.el,event.target))return!1;this.startTouchStatus.flag=!0;const{left:t,top:e}=this.clipperCvs.getBoundingClientRect(),[i,s]=Array.from(event.touches);let c=null;i&&s&&(c=r({x:i.clientX-t,y:i.clientY-e},{x:s.clientX-t,y:s.clientY-e})),this.startTouchStatus.centerPoiont=c}function P(){if(!this.startTouchStatus.flag)return!1;event.preventDefault(),event.stopPropagation();let t=null;if(this.startTouchStatus.centerPoiont){const e=v.call(this,event),{x:i,y:n}=this.startTouchStatus.centerPoiont,s=i-this.imageInfo.dx,c=n-this.imageInfo.dy,l=i,o=n,h=s/(this.img.width*this.imageInfo.scale),p=c/(this.img.height*this.imageInfo.scale);1===e?this.imageInfo.scale=this.imageInfo.scale*(1+this.imageInfo.SCALE_RATE):-1===e&&(this.imageInfo.scale=this.imageInfo.scale*(1-this.imageInfo.SCALE_RATE)),this.imageInfo.dx=l-h*(this.img.width*this.imageInfo.scale),this.imageInfo.dy=o-p*(this.img.height*this.imageInfo.scale);const{left:a,top:f}=this.clipperCvs.getBoundingClientRect(),[d,z]=Array.from(event.touches);d&&z&&(t=r({x:d.clientX-a,y:d.clientY-f},{x:z.clientX-a,y:z.clientY-f}))}else{const t=event.touches[0].clientX-this.startTouchStatus.touches[0].clientX,e=event.touches[0].clientY-this.startTouchStatus.touches[0].clientY;this.imageInfo.dx+=t,this.imageInfo.dy+=e}this.startTouchStatus={...this.startTouchStatus,touches:event.touches,centerPoiont:t},this.drawImage()}function w(){}module.exports=class{constructor(t={}){this.status="CLIPPER_STATUS_IDLE",this._options=l(t),this.init()}init(){if("CLIPPER_STATUS_RUN"===this.status)return!1;this.status="CLIPPER_STATUS_RUN",this.options=this.validOptions(this._options),this.options=this.mergeOptions(this.options),this.imageInfo={status:"IMG_STATUS_IDLE",SCALE_RATE:.001,scale:1,dx:0,dy:0},this.clipRect=this.createClipRect(this.options.clipRect),this.createElement(),this.initValue(),this.bindEvent()}validOptions(e){if("string"===t(e.el)&&(e.el=document.querySelector(e.el)),!e.el)throw new Error("el must be String、Element");return e}mergeOptions(e){if(e.clipRect){if("object"!==t(e))throw new TypeError("options.clipRect must be undefined or Object");for(let[i,n]of Object.entries(e.clipRect))"size"===i?"array"!==t(n)&&(e.clipRect[i]=o.clipRect[i]):"position"===i?"array"!==t(n)&&"center"!==n&&(e.clipRect[i]=o.clipRect[i]):"visible"===i||"isCanHidden"===i||"isCanResize"===i?"boolean"!==t(n)&&(e.clipRect[i]=o.clipRect[i]):"isCanPosition"===i&&"boolean"!==t(n)&&(e.clipRect[i]=o.clipRect[i])}else e.clipRect=o.clipRect;return e}createClipRect(e){const{size:i,position:n,visible:s,isCanHidden:c,isCanResize:r,isCanPosition:l}=e,{offsetWidth:o,offsetHeight:h}=this.options.el,p=i.map(((e,i)=>"number"===t(e)?0===i?e*o:e*h:Number.parseFloat(e)));let a=[0,0];if("array"===t(n)?a=n.map(((e,i)=>"number"===t(e)?0===i?e*o:e*h:Number.parseFloat(e))):(a[0]=o/2-p[0]/2,a[1]=h/2-p[1]/2),a[0]<0||a[0]>o||a[1]<0||a[1]>h)throw new Error("clipRect.positions 不能小于0，且不能大于容器宽高");if(p[0]<0||p[0]>o||p[1]<0||p[1]>h)throw new Error("clipRect.size 不能小于0，且不能大于容器宽高");if(a[0]+p[0]>o)throw new Error("clipRect位置横向坐标 + clipRect宽 不能大于容器宽度");if(a[1]+p[1]>h)throw new Error("clipRect位置纵向坐标 + clipRect高 不能大于容器高度");return{isCanPosition:l,isCanResize:r,isCanHidden:c,visible:s,...this.clipRect||{},x:a[0],y:a[1],width:p[0],height:p[1],scaleBorder:"none",scaleDirection:"none"}}createRandomKey(){return"clipper-"+((t=3)=>{let e="";for(;t>0;)e+=Math.floor(256*Math.random()).toString(16).padStart(2,"0"),t--;return e})()+"-"+Date.now()}createElement(){const t=s("div",{class:"clipper-bg-cvs",style:"background-image: url(data:image/png;base64,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)"}),e=s("canvas",{class:"clipper-cvs"}),i=s("div",{class:"clipper-mask",style:"display: none"}),n=s("div",{class:"clipper-clip",style:"display: none"},'\n\t\t\t\x3c!-- 边框 --\x3e\n\t\t\t<span class="clipper-border-line clipper-border-line-left"></span>\n\t\t\t<span class="clipper-border-line clipper-border-line-top"></span>\n\t\t\t<span class="clipper-border-line clipper-border-line-right"></span>\n\t\t\t<span class="clipper-border-line clipper-border-line-bottom"></span>\n\t\t\t\x3c!-- 边角点 --\x3e\n\t\t\t<span class="clipper-border-block clipper-border-block-left-top"></span>\n\t\t\t<span class="clipper-border-block clipper-border-block-right-top"></span>\n\t\t\t<span class="clipper-border-block clipper-border-block-right-bottom"></span>\n\t\t\t<span class="clipper-border-block clipper-border-block-left-bottom"></span>\n\t\t\t\x3c!-- 横向辅助线 --\x3e\n\t\t\t<span class="clipper-sup-line clipper-sup-line-row clipper-sup-line-row-1"></span>\n\t\t\t<span class="clipper-sup-line clipper-sup-line-row clipper-sup-line-row-2"></span>\n\t\t\t\x3c!-- 纵向辅助线 --\x3e\n\t\t\t<span class="clipper-sup-line clipper-sup-line-col clipper-sup-line-col-1"></span>\n\t\t\t<span class="clipper-sup-line clipper-sup-line-col clipper-sup-line-col-2"></span>\t\n\t\t'),c=s("div",{class:"clipper-img-box",style:"position: relative; z-index:0;"},[t,e,i,n]);this.options.el.appendChild(c);const r=s("style",{class:"clipper-style"},"\n.clipper-img-box {\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n}\n.clipper-img-box canvas, .clipper-bg-cvs{\n\twidth: 100%;\n\theight: 100%;\n}\n.clipper-bg-cvs {\n\t/*background: url('./src/assets/images/bg.png');*/\n\tposition: absolute;\n\tleft: 0;\n\ttop:  0; \n\twidth: 100%;\n\theight: 100%;\n\tz-index: -1;\n}\n.clipper-cvs {\n\tcursor: pointer;\n\tuser-select: none;\n}\n.clipper-mask {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\tbackground: #000;\n\topacity: 0.5;\n\tuser-select: none;\n}\n.clipper-clip {\n\tposition: absolute;\n\tleft: 0;\n\twidth: 0;\n\ttop: 0;\n\theight: 0;\n\tcursor: move;\n\tuser-select: none;\n}\n.clipper-border-line {\n\tposition: absolute;\n}\n.clipper-border-line-left::after {\n\tcontent: '';\n\tdisplay: block;\n\theight: 100%;\n\tborder-left: 1px solid #3399ff;\n}\n.clipper-border-line-top::after {\n\tcontent: '';\n\tdisplay: block;\n\theight: 100%;\n\tbackground-color: ;\n\tborder-top: 1px solid #3399ff;\n}\n.clipper-border-line-right::after {\n\tcontent: '';\n\tdisplay: block;\n\theight: 100%;\n\tborder-right: 1px solid #3399ff;\n}\n.clipper-border-line-bottom::after {\n\tcontent: '';\n\tdisplay: block;\n\theight: 100%;\n\tborder-bottom: 1px solid #3399ff;\n}\n.clipper-border-line-left {\n\tleft: 0;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 10px;\n\tcursor: ew-resize;\n}\n.clipper-border-line-top {\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\theight: 10px;\n\tcursor: ns-resize;\n}\n.clipper-border-line-right {\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 10px;\n\tcursor: ew-resize;\n}\n.clipper-border-line-bottom {\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\theight: 10px;\n\tcursor: ns-resize;\n}\n.clipper-border-block {\n\tposition: absolute;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: #3399ff;\n}\n.clipper-border-block-left-top {\n\tleft: 0;\n\ttop: 0;\n\tcursor: nwse-resize;\n}\n.clipper-border-block-right-top {\n\tright: 0;\n\ttop: 0;\n\tcursor: nesw-resize;\n}\n.clipper-border-block-right-bottom {\n\tright: 0;\n\tbottom: 0;\n\tcursor: nwse-resize;\n}\n.clipper-border-block-left-bottom {\n\tleft: 0;\n\tbottom: 0;\n\tcursor: nesw-resize;\n}\n\n.clipper-sup-line {\n\tposition: absolute;\n}\n.clipper-sup-line-row-1 {\n\tleft: 0;\n\ttop: 33.3333333%;\n\twidth: 100%;\n\theight: 5px;\n\tborder-top: 1px dashed rgba(255,255,255,.5);\n}\n.clipper-sup-line-row-2 {\n\tleft: 0;\n\ttop: 66.6666667%;\n\twidth: 100%;\n\theight: 5px;\n\tborder-top: 1px dashed rgba(255,255,255,.5);\n}\n.clipper-sup-line-col-1 {\n\tleft: 33.3333333%;\n\ttop: 0;\n\theight: 100%;\n\tborder-left: 1px dashed rgba(255,255,255,.5);\n}\n.clipper-sup-line-col-2 {\n\tleft: 66.6666667%;\n\ttop: 0;\n\theight: 100%;\n\tborder-left: 1px dashed rgba(255,255,255,.5);\n}\n");document.head.appendChild(r)}removeElement(){this.options.el.innerHTML="";const t=e(".clipper-style");t&&t.parentNode&&t.parentNode.removeChild(t)}initValue(){const t=["clipper-img-box","clipper-bg-cvs","clipper-cvs","clipper-mask","clipper-clip","clipper-border-line-left","clipper-border-line-top","clipper-border-line-right","clipper-border-line-bottom","clipper-border-block-left-top","clipper-border-block-right-top","clipper-border-block-right-bottom","clipper-border-block-left-bottom","clipper-sup-line-row-1","clipper-sup-line-row-2","clipper-sup-line-col-1","clipper-sup-line-col-2"];for(let i of t)this[(n=i,n.replace(/-(\w)/g,((t,e)=>e.toUpperCase())))]=e(`.${i}`,this.options.el);var n;const{offsetWidth:s,offsetHeight:c}=this.options.el;this.options.el.style.setProperty("width",s+"px"),this.options.el.style.setProperty("height",c+"px"),this.clipperCvs.width=s,this.clipperCvs.height=c,this.ctx=this.clipperCvs.getContext("2d"),this.mousedownHandler=z.bind(this),this.mousemoveHandler=i(m.bind(this),16.667),this.mouseupHandler=b.bind(this),this.wheelHandler=u.bind(this),this.keydownHandler=g.bind(this),this.touchstartHandler=N.bind(this),this.touchmoveHandler=P.bind(this),this.touchendHandler=w.bind(this)}drawImage(){if(!this.img)return!1;this.ctx.clearRect(0,0,this.clipperCvs.width,this.clipperCvs.height);const{dx:t,dy:e,scale:i}=this.imageInfo;this.ctx.drawImage(this.img,t,e,this.img.width*i,this.img.height*i),this.drawClipRect()}drawClipRect(){const{clipperClip:t,clipRect:e,imageInfo:i}=this,{dx:n,dy:s}=i;t.style.left=e.x+"px",t.style.top=e.y+"px",t.style.width=e.width+"px",t.style.height=e.height+"px";const c=n-e.x,r=s-e.y;t.style.background=`url('${this.options.imgUrl}') no-repeat ${c}px ${r}px / ${this.img.width*this.imageInfo.scale}px ${this.img.height*this.imageInfo.scale}px`,"IMG_STATUS_SUCCESS"===this.imageInfo.status&&this.clipRect.visible&&this.options.onChange&&this.options.onChange(this._getClipImage())}loadImage(t){return this.imageInfo={status:"IMG_STATUS_IDLE",SCALE_RATE:.05,scale:1,dx:0,dy:0},this.clipRect=this.createClipRect(this.options.clipRect),this.options.imgUrl=t||this.options.imgUrl,new Promise(((e,i)=>{this.img=this.img||new Image,this.img.onload=()=>{console.log(this),this.imageInfo.status="IMG_STATUS_SUCCESS",e(this.options.imgUrl),this.imageInfo.dx=this.clipperCvs.width/2-this.img.width*this.imageInfo.scale/2,this.imageInfo.dy=this.clipperCvs.height/2-this.img.height*this.imageInfo.scale/2,this.options.clipRect.visible&&this.contralClipVisible(!0),this.drawImage()},this.img.onerror=t=>{console.log(t),this.imageInfo.status="IMG_STATUS_FAIL",i(t)},this.img.src=t}))}bindEvent(){this.bindMouseEvent(),this.bindMouseWheelEvent(),this.bindKeyEvent(),this.bindTouchEvent()}unbindEvent(){document.removeEventListener("mousedown",this.mousedownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mouseupHandler),window.removeEventListener("wheel",this.wheelHandler,{passive:!1}),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("touchstart",this.touchstartHandler),document.removeEventListener("touchmove",this.touchmoveHandler,{passive:!1}),document.removeEventListener("touchend",this.touchendHandler)}bindMouseEvent(){document.addEventListener("mousedown",this.mousedownHandler),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mouseupHandler)}bindMouseWheelEvent(){window.addEventListener("wheel",this.wheelHandler,{passive:!1})}bindKeyEvent(){document.addEventListener("keydown",this.keydownHandler)}bindTouchEvent(){document.addEventListener("touchstart",this.touchstartHandler),document.addEventListener("touchmove",this.touchmoveHandler,{passive:!1}),document.addEventListener("touchend",this.touchendHandler)}contralClipVisible(t){this.clipRect.visible=t,this.clipperMask.style.setProperty("display",this.clipRect.visible?"block":"none"),this.clipperClip.style.setProperty("display",this.clipRect.visible?"block":"none")}_getClipImage(){const t=document.createElement("canvas");t.width=this.clipRect.width,t.height=this.clipRect.height;t.getContext("2d").drawImage(this.clipperCvs,-this.clipRect.x,-this.clipRect.y);for(var e=t.toDataURL("image/png").split(","),i=e[0].match(/:(.*?);/)[1],n=atob(e[1]),s=n.length,c=new Uint8Array(s);s--;)c[s]=n.charCodeAt(s);return new Blob([c],{type:i})}getClipImage(){return new Promise(((t,e)=>{if(!this.options.imgUrl)return e(new Error("图片不存在"));if(!this.clipRect.visible)return e(new Error("未选中需要截取的图片"));try{t(this._getClipImage())}catch(t){return e(t)}}))}setImgFile(t){return this.shortTimeUrl=function(t){var e=null;return void 0!==window.createObjectURL?e=window.createObjectURL(t):void 0!==window.URL?e=window.URL.createObjectURL(t):void 0!==window.webkitURL&&(e=window.webkitURL.createObjectURL(t)),e}(t),console.log(this.shortTimeUrl,this.img),this.loadImage(this.shortTimeUrl)}destory(){if("CLIPPER_STATUS_DESTORY"===this.status)return!1;this.status="CLIPPER_STATUS_DESTORY",this.unbindEvent(),this.removeElement(),window.URL.revokeObjectURL(this.shortTimeUrl),delete this.img}};
