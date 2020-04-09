(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(e,o,t){"use strict";t.r(o);var s=t(0),n=t(452),a=t.n(n),c=t(925);o.default=function(){return s.createElement("div",{className:"about-page"},s.createElement("div",{className:"md-file"},s.createElement(a.a,{innerHTML:!0},c)))}},925:function(e,o){e.exports='<h1 id=seb-react-components>SEB React Components</h1> <p><a href=https://travis-ci.com/sebgroup/react-components><img src="https://travis-ci.com/sebgroup/react-components.svg?branch=master" alt="Build Status"></a> <a href=http://commitizen.github.io/cz-cli/ ><img src=https://img.shields.io/badge/commitizen-friendly-brightgreen.svg alt="Commitizen friendly"></a> <a href=https://github.com/semantic-release/semantic-release><img src=https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg alt=semantic-release></a> <a href="https://coveralls.io/github/sebgroup/react-components?branch=master"><img src="https://coveralls.io/repos/github/sebgroup/react-components/badge.svg?branch=master" alt="Coverage Status"></a> <a href=https://dependabot.com><img src="https://api.dependabot.com/badges/status?host=github&repo=sebgroup/react-components" alt="Dependabot Status"></a></p> <p>This is a set of react components some of which are based on SEB&#39;s bootstrap. The plan for this project is to increase and improve components for future usage.</p> <ul> <li>The package name: <code>@sebgroup/react-components</code></li> <li>The package documentation: <a href=https://sebgroup.github.io/react-components>Documentation</a></li> <li>The package sourcecode: <a href=https://github.com/sebgroup/react-components>Github Source Code</a></li> <li>NPM package: <a href=https://www.npmjs.com/package/@sebgroup/react-components>@sebgroup/react-components</a></li> </ul> <h2 id=minimum-requirements>Minimum requirements</h2> <p>This version of components has been developed with:</p> <ul> <li>React <code>^16.12</code></li> <li>Typescript <code>^3.7</code></li> <li>SEB Bootstrap <code>^5.1</code></li> </ul> <h2 id=installation>Installation</h2> <p>You should be able to install the NPM package.</p> <pre><code class=language-bash>npm install @sebgroup/react-components --save</code></pre> <p>This project is based on SEB Bootstrap which includes <code>fonts</code>, <code>colors</code> and <code>variables</code>, to make sure everything works fine, please install these dependencies on your project:</p> <pre><code class=language-bash>npm install @sebgroup/bootstrap --save</code></pre> <p>Then make sure you add the Main SEB bootstrap package in your main style.SCSS or index.ts as follows <code>@import &#39;~@sebgroup/bootstrap/scss/bootstrap&#39;;</code>.</p> <p>For <code>Visual Studio Code</code> users, please install the <a href=.vscode/extensions.json>recommended plugins</a></p> <h2 id=development>Development</h2> <p>This project uses <code>prettier</code> for a more consistent (less annoying) coding. We are using 4 different builds for this project. The <code>src</code> folder is where the actual components exist with all their necessary dependencies. and <code>develop</code> folder is where we develop and test those components. Unit tests are based on <code>jest</code> and <code>enzyme</code>.</p> <ol> <li>Development: <code>npm start</code></li> <li>Check formatting rules, Compile components and Create Docs folder: <code>npm run build</code></li> <li>Build and create the Documentation pages only: <code>npm run docs</code></li> <li>To run the unit tests, run: <code>npm test</code></li> <li>To run a unit test for a specific component you have to pass the name of the component, example: <code>npm test Button</code>. It can also be chained with multiple specific components, e.g. <code>npm test Button RadioGroup</code></li> <li>To commit your changes run: <code>npm run commit</code> and follow the steps</li> </ol> <h2 id=usage>Usage</h2> <p>For performance benefits we are not combining all the components into single Index rather they are chunked into their subpackage. Therefore, to use a component, you need to import the <code>Component</code> submodule from the <code>dist</code> folder, in whichever Class you want to use it. Here is a sample of how to import a <code>Button</code> component in a page.</p> <pre><code class=language-javascript>import { Button } from &quot;@sebgroup/react-components/dist/Button&quot;;\n\nconst Comp = () =&gt; {\n    const onClick = (e) =&gt; {\n        console.log(&quot;Im Clicked&quot;);\n    }\n\n    return (\n        &lt;div&gt;\n            &lt;Button label=&quot;a button&quot; onClick={onClick} /&gt;\n        &lt;/div&gt;\n    );\n}\n\nexport default Comp;</code></pre> '}}]);