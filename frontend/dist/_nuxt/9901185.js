(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,5],{389:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmklEQVR4nO2a3YsOURzHP7Os2pDYdte7sC60F3shUqIlkRtSKNfkhiKb3XavFBcuycsfQPsPICV5WXktIklxQXkr0SMXeLCLTv2mpmme88zMM3PmPGfnU9+bfXrm9/u0Z85zzpmBkpKSDOiSTAi2AeOSrUwAbgL/JDdwnNnAWEBY/Zfn4jAHArJ+9uMwtyOER3GUOTKEw8Lqb/NwkEMRsn4O4iD3NMJ3cYwFwF+NsPpsEQ7Rr5H1cxiHeBhD+AGOsLjOcA5mKQ4wGFNWZQAHeJxA+BFNzpIEsn66aWKGUwgP0cQ8TSH8BMuZAcwMpR1Yl0LWj/rurIjrTs+6+fXAK6ASkV8NCOSd7zV6fgH06YRHLWg+69zSCZ+zoMGsc0YnPBk4WmPf2mxRq7tTQGuce3kD8NGCptPmM7CFhHQCVy1oPs09m/pg0JO1cPCk0eYhfAKYRAb0AR8skKqVT8BmMqYDuGKBXDjX5YAwFzw5cPttgeiY/KK0YIBVwJsCZd8BazFMO3C5ANlrRT559GSIm1hn/zE5hOuxGviao2xFaljDNOBnjsLVPLaGjbDLwJDegUWMGBC+gCW0yj2Wt7CaI6ZgAZsMyPrZiAWcNSh8umhZD3hrUPi91CyMlQZl/awoUvh4yqZHGpjZjxUp/Dxhs9+AfYHv70wxwz8rSrY7YaP3azwOXZjieHhZAb4cSbjo1x29tCTchKg3CoxzJ0Zjr4E1CSfBlzGuq973MkpnjIO987KpSEqbnCfrrj0urzEaY2+dJeDuDGpsB75o6uzBIJc0B2rzM6zTpTk4vIghpkbsfasykeSxCvLk2tVQzR/SS+70hAqr3+JeA3V7I373lxuoiydPGdWC4aRMMqZok5oV2bSUlJSU4DT/AbMiYmEQ+RWaAAAAAElFTkSuQmCC"},390:function(t,e,r){"use strict";r.r(e);r(38),r(56);var n={data:function(){return{api_url:"http://localhost:1337"}},props:{articles:Object},computed:{leftArticlesCount:function(){return Math.ceil(this.articles.data.length/5)},leftArticles:function(){return this.articles.data.slice(0,this.leftArticlesCount)},rightArticles:function(){return this.articles.data.slice(this.leftArticlesCount,this.articles.length)}}},l=r(55),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"uk-child-width-1-2",attrs:{"uk-grid":""}},[e("div",t._l(t.leftArticles,(function(article){return e("NuxtLink",{key:article.id,staticClass:"uk-link-reset",attrs:{to:{name:"articles-id",params:{id:article.id}}}},[e("div",{staticClass:"uk-card uk-card-muted uk-card-hover"},[article.attributes.image.data?e("div",{staticClass:"uk-card-media-top"},[e("img",{attrs:{src:t.api_url+article.attributes.image.data.attributes.url,alt:"",height:"100"}})]):t._e(),t._v(" "),e("div",{staticClass:"uk-card-body"},[article.attributes.category.data?e("p",{staticClass:"uk-text-uppercase",attrs:{id:"category"}},[t._v("\n              "+t._s(article.attributes.category.data.attributes.name)+"\n            ")]):t._e(),t._v(" "),e("p",{staticClass:"uk-text-small",attrs:{id:"title"}},[t._v("\n              "+t._s(article.attributes.title)+"\n            ")])])])])})),1),t._v(" "),e("div",[e("div",{staticClass:"uk-child-width-1-2@m uk-grid-match",attrs:{"uk-grid":""}},t._l(t.rightArticles,(function(article){return e("NuxtLink",{key:article.id,staticClass:"uk-link-reset",attrs:{to:{name:"articles-id",params:{id:article.id}}}},[e("div",{staticClass:"uk-card uk-card-muted uk-card-hover"},[article.attributes.image.data?e("div",{staticClass:"uk-card-media-top"},[e("img",{attrs:{src:t.api_url+article.attributes.image.data.attributes.url,alt:"",height:"100"}})]):t._e(),t._v(" "),e("div",{staticClass:"uk-card-body"},[article.attributes.category.data?e("p",{staticClass:"uk-text-uppercase",attrs:{id:"category"}},[t._v("\n                "+t._s(article.attributes.category.data.attributes.name)+"\n              ")]):t._e(),t._v(" "),e("p",{staticClass:"uk-text-small",attrs:{id:"title"}},[t._v("\n                "+t._s(article.attributes.title)+"\n              ")])])])])})),1)])])])}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,r){t.exports=r.p+"img/stsLogo.9b31de4.png"},392:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"area"},[e("div",{staticClass:"uk-section uk-margin-auto uk-width-3-4 uk-flex uk-flex-center"},[e("div",{staticClass:"area"},[e("div",{staticClass:"circles"},[e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})])]),t._v(" "),e("div",{staticClass:"upcircles"},[e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})]),t._v(" "),e("i",{staticClass:"star",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:r(389)}})])]),t._v(" "),e("div",{staticClass:"uk-flex uk-flex-center"},[e("a",{staticClass:"uk-flex",attrs:{href:"/"}},[e("img",{staticClass:"toplogo uk-width-3-4@s uk-width-1-2@m uk-width-3-4@l",attrs:{src:r(391),alt:"Choose Nourish Logo."}})])]),t._v(" "),e("div",{staticClass:"uk-width-1-2"},[e("iframe",{staticClass:"context",staticStyle:{"border-radius":"12px"},attrs:{src:"https://open.spotify.com/embed/playlist/3NgUACqzz04eVZFiiAx0GR?utm_source=generator",width:"80%",height:"600",frameBorder:"0",allowfullscreen:"false",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"uk-width-1-2"},[e("iframe",{staticClass:"contextright",staticStyle:{"border-radius":"12px"},attrs:{src:"https://open.spotify.com/embed/playlist/4dtBz6G3OxmXcQIsulJbAI?utm_source=generator",width:"80%",height:"600",frameBorder:"0",allowfullscreen:"false",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"}})])])])])}],l=r(55),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),n,!1,null,null,null);e.default=component.exports},404:function(t,e){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:338}};r.loc.source={body:"query {\n  articles {\n    data {\n      id\n      attributes {\n        title\n        content\n        image {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(t,e){if("FragmentSpread"===t.kind)e.add(t.name.value);else if("VariableDefinition"===t.kind){var r=t.type;"NamedType"===r.kind&&e.add(r.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){n(t,e)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){n(t,e)})),t.definitions&&t.definitions.forEach((function(t){n(t,e)}))}var l={};r.definitions.forEach((function(t){if(t.name){var e=new Set;n(t,e),l[t.name.value]=e}})),t.exports=r},421:function(t,e,r){"use strict";r.r(e);var n=r(404),l=r.n(n),c=r(390),d=r(392),o={data:function(){return{articles:{data:[]}}},components:{Articles:c.default,Spotify:d.default},apollo:{articles:{prefetch:!0,query:l.a}}},m=r(55),component=Object(m.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"uk-section uk-align-center uk-text-center uk-width-3-4"},[e("NuxtLink",{staticClass:"uk-button uk-button-danger",attrs:{to:"/spotifyLog"}},[t._v(" TEST ONLY - Create a recipe\n    \n")]),t._v(" "),e("h2",[t._v("WIP - Showcase of Categories")]),t._v(" "),t._m(1)],1),t._v(" "),e("div",{staticClass:"uk-section"},[e("div",{staticClass:"uk-container uk-container-large uk-overflow-auto"},[e("Articles",{attrs:{articles:t.articles}})],1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"uk-section"},[e("div",{staticClass:"uk-align-center uk-background-cover uk-dark uk-padding-large uk-height-large uk-background-image uk-overlay uk-dark",attrs:{"data-src":"https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80","uk-img":""}},[e("div",{staticClass:"uk-flex-middle uk-flex-center"},[e("h2",{staticClass:"whitetext uk-text-middle uk-text-center uk-heading-medium"},[t._v("Choose Nourish")]),t._v(" "),e("p",{staticClass:"whitetext thintext uk-text-middle uk-text-center uk-text-large uk-text-light"},[t._v("Restrictive can be delicious")]),t._v(" "),e("p",{staticClass:"whitetext thintext uk-text-middle uk-text-center uk-text-large uk-text-light"},[t._v("Search function coming soon - below is broken")])])])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"uk-navbar-nav"},[e("li",[e("a",{attrs:{href:"/showcase/AllergyIntolerances"}},[t._v("Allergies and Intolerances")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/showcase/Cuisines"}},[t._v("Cuisines")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/showcase/MealTypes"}},[t._v("Meal Types")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/showcase/MedicalConditions"}},[t._v("Medical Conditions")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/showcase/NutritionAdjustments"}},[t._v("Nutrition Adjustments")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/showcase/PersonalChoices"}},[t._v("Personal Choices")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/showcase/Textures"}},[t._v("Textures")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Articles:r(390).default})}}]);