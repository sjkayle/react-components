(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1118:function(e,t){e.exports="<hr> <p>title: Button componentid: component-button variantid: default guid: &#39;button-guid-default-component-react&#39;</p> <hr> <h2 id=element-name>Element name</h2> <pre><code class=language-javascript>Name: Rating Component\nComponent: &quot;Rating&quot;\nSelector: &quot;&lt;Rating/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Rating&quot;\nType: Form Component</code></pre> <h2 id=element-information>Element information</h2> <p>This React component is based on <code>react-rating</code>. Supports customization and configurations. The component name is <code>Rating</code> and the selector is <code>&lt;Rating/&gt;</code>.</p> <h2 id=basic-use>Basic use</h2> <pre><code class=language-html>&lt;Rating\n    initialValue={this.state.rating}\n    onChange={(value: number): void =&gt; this.setState({ rating: value })}\n/&gt;</code></pre> <h2 id=properties>Properties</h2> <p>These are the current available properties:</p> <table> <thead> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>className?</td> <td><code>string</code></td> <td>Custom class</td> </tr> <tr> <td>colors?</td> <td><code>Array&lt;string&gt;</code></td> <td>Array of strings which reperesent each color</td> </tr> <tr> <td>disabled?</td> <td><code>string</code></td> <td>Disabled state</td> </tr> <tr> <td>iconHeight?</td> <td><code>number</code></td> <td>Height of icons</td> </tr> <tr> <td>iconWidth?</td> <td><code>number</code></td> <td>Width of icons</td> </tr> <tr> <td>id?</td> <td><code>string</code></td> <td>Element id</td> </tr> <tr> <td>initialValue?</td> <td><code>any</code></td> <td>Intial value, string or number</td> </tr> <tr> <td>onChange?</td> <td><code>(value: number) =&gt; void</code></td> <td>Onchange event, will return the value</td> </tr> <tr> <td>readOnly?</td> <td><code>boolean</code></td> <td>For viewing only, default false</td> </tr> <tr> <td>tooltipList?</td> <td><code>Array&lt;string&gt;</code></td> <td>Array of strings which reperesent each start</td> </tr> <tr> <td>useHollow?</td> <td><code>boolean</code></td> <td>Use empty icon</td> </tr> </tbody></table> <h2 id=reference>Reference</h2> <p>This component is a wrapper around <a href=https://www.npmjs.com/package/react-rating>react-rating</a></p> "},179:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){c(e,t,n[t])}))}return e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?f(e):t}var v={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},b={empty:d({},v,{backgroundColor:"#ccc"}),full:d({},v,{backgroundColor:"black"}),placeholder:d({},v,{backgroundColor:"red"})},g=function(e){return a.a.isValidElement(e)?e:"object"===l(e)&&null!==e?a.a.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?a.a.createElement("span",{className:e}):void 0},C=function(e){function t(){return i(this,t),y(this,h(t).apply(this,arguments))}return p(t,e),s(t,[{key:"render",value:function(){var e,t=this.props,n=t.index,o=t.inactiveIcon,l=t.activeIcon,i=t.percent,r=t.direction,s=t.readonly,u=t.onClick,d=t.onMouseMove,p=g(o),h=i<100?{}:{visibility:"hidden"},m=g(l),f=(c(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===r?"right":"left",0),c(e,"width","".concat(i,"%")),e),y={cursor:s?"inherit":"pointer",display:"inline-block",position:"relative"};function v(e){d&&d(n,e)}function b(e){u&&(e.preventDefault(),u(n,e))}return a.a.createElement("span",{style:y,onClick:b,onMouseMove:v,onTouchMove:v,onTouchEnd:b},a.a.createElement("span",{style:h},p),a.a.createElement("span",{style:f},m))}}]),t}(a.a.PureComponent),w=function(e){function t(e){var n;return i(this,t),(n=y(this,h(t).call(this,e))).state={displayValue:n.props.value,interacting:!1},n.onMouseLeave=n.onMouseLeave.bind(f(f(n))),n.symbolMouseMove=n.symbolMouseMove.bind(f(f(n))),n.symbolClick=n.symbolClick.bind(f(f(n))),n}return p(t,e),s(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(n){return{displayValue:t?e.value:n.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.props.onClick(n,t)}},{key:"symbolMouseMove",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:n})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var n=this.calculateHoverPercentage(t),o=Math.ceil(n%1*this.props.fractions)/this.props.fractions,a=Math.pow(10,3),l=e+(Math.floor(n)+Math.floor(o*a)/a);return l>0?l>this.props.totalSymbols?this.props.totalSymbols:l:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,n=e.target.getBoundingClientRect(),o="rtl"===this.props.direction?n.right-t:t-n.left;return o<0?0:o/n.width}},{key:"render",value:function(){var e,t=this.props,n=t.readonly,o=t.quiet,l=t.totalSymbols,i=t.value,r=t.placeholderValue,s=t.direction,c=t.emptySymbol,p=t.fullSymbol,h=t.placeholderSymbol,m=t.className,f=t.id,y=t.style,v=t.tabIndex,b=this.state,g=b.displayValue,w=b.interacting,k=[],E=[].concat(c),S=[].concat(p),L=[].concat(h),M=0!==r&&0===i&&!w;e=M?r:o?i:g;for(var V=Math.floor(e),O=0;O<l;O++){var x=void 0;x=O-V<0?100:O-V==0?100*(e-O):0,k.push(a.a.createElement(C,u({key:O,index:O,readonly:n,inactiveIcon:E[O%E.length],activeIcon:M?L[O%S.length]:S[O%S.length],percent:x,direction:s},!n&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return a.a.createElement("span",u({id:f,style:d({},y,{display:"inline-block",direction:s}),className:m,tabIndex:v,"aria-label":this.props["aria-label"]},!n&&{onMouseLeave:this.onMouseLeave}),k)}}]),t}(a.a.PureComponent);function k(){}k._name="react_rating_noop";var E=function(e){function t(e){var n;return i(this,t),(n=y(this,h(t).call(this,e))).state={value:e.initialRating},n.handleClick=n.handleClick.bind(f(f(n))),n.handleHover=n.handleHover.bind(f(f(n))),n}return p(t,e),s(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var n=this,o=this.translateDisplayValueToValue(e);this.props.onClick(o),this.state.value!==o&&this.setState({value:o},(function(){return n.props.onChange(n.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,n=e.emptySymbol,o=e.fullSymbol,l=e.placeholderSymbol,i=e.readonly,r=e.quiet,s=e.fractions,c=e.direction,u=e.start,d=e.stop,p=e.id,h=e.className,m=e.style,f=e.tabIndex;return a.a.createElement(w,{id:p,style:m,className:h,tabIndex:f,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,n){return Math.floor((t-e)/n)}(u,d,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:i,quiet:r,fractions:s,direction:c,emptySymbol:n,fullSymbol:o,placeholderSymbol:l,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(a.a.PureComponent);E.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:k,onClick:k,onChange:k,emptySymbol:b.empty,fullSymbol:b.full,placeholderSymbol:b.placeholder};var S=E,L=function(e){return o.createElement("svg",{className:"custom-svg-star-hollow",width:e.width,height:e.height,viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e.title&&o.createElement("title",null,e.title),o.createElement("desc",null,"Created with Sketch."),o.createElement("defs",null,o.createElement("path",{d:"M10.2979558,13.734 L15.01297,17.0184044 L13.11,11.668 C13.043,11.461 13.117,11.236 13.293,\n                    11.108 L18.0202825,8 L12.199,8 C11.982,8 11.791,7.624 11.724,7.418 L9.99944966,2.00696716 L8.19,7.419 C8.123,\n                    7.624 7.931,8 7.714,8 L2,8 L6.621,11.108 C6.797,11.236 6.871,11.461 6.804,11.668 L5.01010367,\n                    17.0184044 L9.71195584,13.734 C9.79895584,13.67 9.90195584,13.639 10.0049558,13.639 C10.1079558,\n                    13.639 10.2109558,13.67 10.2979558,13.734 Z M20,7.29835689 C19.9,7.09835689 19.7,6.99835689 19.5,\n                    6.99835689 L12.6,6.99835689 L10.5,0.4 C10.4,0.1 10.2,1.77635684e-15 10,1.77635684e-15 C9.8,1.77635684e-15 9.6,\n                    0.1 9.5,0.3 L7.4,6.99835689 L0.5,6.99835689 C0.3,6.99835689 0.1,7.09835689 0,7.29835689 C0,7.49835689 -1.15532584e-14,\n                    7.79835689 0.2,7.89835689 L5.8,11.8 L3.7,18.3 C3.6,18.5 3.63065796,18.6579102 3.83065796,18.8579102 C3.93065796,18.9579102 4.2,19 4.4,\n                    18.9 L10,14.9 L15.6,18.9 C15.7,19 16.1,19 16.2,18.9 C16.4,18.8 16.4,18.5 16.4,18.3 L14.3,11.8 L19.9,7.89835689 C20,7.79835689 20,7.49835689 20,7.29835689 Z",id:"path-1-unselected"})),o.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"Icons-main-navigation/Star-unselected/Darkblue"},o.createElement("g",{id:"Icon",transform:"translate(2.000000, 2.000000)"},o.createElement("mask",{id:"mask-unselected",fill:"white"},o.createElement("use",{xlinkHref:"#path-1-unselected"})),o.createElement("use",{id:"Combined-Shape",className:"star-fill",fill:e.fill,xlinkHref:"#path-1-unselected"})))))},M=function(e){return o.createElement("svg",{className:"custom-svg-star",width:e.width,height:e.height,viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e.title&&o.createElement("title",null,e.title),o.createElement("desc",null,"Created with Sketch."),o.createElement("defs",null,o.createElement("path",{d:"M20,7.29835689 C19.9,7.09835689 19.7,6.99835689 19.5,6.99835689 L12.6,\n                    6.99835689 L10.5,0.4 C10.4,0.1 10.2,0 10,0 C9.8,0 9.6,0.1 9.5,0.3 L7.4,\n                    6.99835689 L0.5,6.99835689 C0.3,6.99835689 0.1,7.09835689 0,\n                    7.29835689 C0,7.49835689 -1.15532584e-14,7.79835689 0.2,\n                    7.89835689 L5.8,11.8 L3.7,18.3 C3.6,18.5 3.63065796,18.6579102 3.83065796,\n                    18.8579102 C3.93065796,18.9579102 4.2,19 4.4,18.9 L10,14.9 L15.6,18.9 C15.7,19 16.1,19 16.2,\n                    18.9 C16.4,18.8 16.4,18.5 16.4,18.3 L14.3,11.8 L19.9,7.89835689 C20,7.79835689 20,7.49835689 20,\n                    7.29835689 Z",id:"path-selected-1"})),o.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"Icons-main-navigation/Star-selected/Darkblue"},o.createElement("g",{id:"Icon",transform:"translate(2.000000, 2.000000)"},o.createElement("mask",{id:"mask-selected",fill:"white"},o.createElement("use",{xlinkHref:"#path-selected-1"})),o.createElement("use",{id:"Combined-Shape",className:"star-fill",fill:e.fill,xlinkHref:"#path-selected-1"})))))},V=["#A9A9A9","#FFC500"],O=["#dddddd","#bfbfbf"],x=function(e){var t=e.iconHeight||25,n=e.iconWidth||25;function a(){if(e.colors&&e.colors.length)switch(e.colors.length){case 2:return e.colors;default:return V}return e.disabled?O:V}return o.createElement("div",{className:"custom-rating"+(e.className?" "+e.className:""),id:e.id},o.createElement(S,{className:e.disabled?"disabled":"",initialRating:e.initialValue,emptySymbol:e.useHollow?o.createElement(L,{fill:a()[0],width:n,height:t}):o.createElement(M,{fill:a()[0],width:n,height:t}),fullSymbol:e.tooltipList&&e.tooltipList.length?e.tooltipList.map((function(e,l){return o.createElement(M,{key:l,fill:a()[1],title:e,width:n,height:t})})):o.createElement(M,{fill:a()[1],width:n,height:t}),fractions:1,onChange:function(t){!e.disabled&&e.onChange&&e.onChange(t)},readonly:e.readOnly||e.disabled}))},N=n(452),P=n.n(N),H=n(1118);t.default=function(){var e=o.useState(3.5),t=e[0],n=e[1];return o.createElement("div",{className:"route-template container"},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(P.a,{innerHTML:!0},H))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,"Here are sample outputs, selected value: ",t),o.createElement("div",{className:"result"},o.createElement(x,{initialValue:t,onChange:function(e){return n(e)},tooltipList:["Very Poor","Poor","Average","Very Good","Excellent"]})),o.createElement("p",null,"Disabled"),o.createElement("div",{className:"result"},o.createElement(x,{initialValue:t,onChange:function(e){return n(e)},disabled:!0})))))}}}]);