(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{393:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"allergyIntolerances"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:102}};t.loc.source={body:"query {\n  allergyIntolerances{\n    data {\n      id\n      attributes {\n        name\n      }\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function l(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){l(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){l(e,n)})),e.definitions&&e.definitions.forEach((function(e){l(e,n)}))}var r={};t.definitions.forEach((function(e){if(e.name){var n=new Set;l(e,n),r[e.name.value]=n}})),e.exports=t},410:function(e,n,t){"use strict";t.r(n);t(38);var l=t(393),r={data:function(){return{allergyIntolerances:{data:[]},api_url:"http://localhost:1337"}},apollo:{allergyIntolerances:{prefetch:!0,query:t.n(l).a,variables:function(){return{id:parseInt(this.$route.params.id)}}}}},o=t(55),component=Object(o.a)(r,(function(){var e=this,n=e._self._c;return n("div",[n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container uk-container-small"},[n("h2",[e._v("Allergies and Intolerances")]),e._v(" "),e._l(e.allergyIntolerances.data,(function(t){return n("li",{key:t.id},[e._v("\n                    "+e._s(t.attributes.name)+"\n            ")])}))],2)])])}),[],!1,null,null,null);n.default=component.exports}}]);