webpackJsonp([11],{WeOI:function(t,e){},YDnK:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),s=i.n(a),r=i("C3xd"),c=i("NYxO"),l={name:"Article",data:function(){return{before_article:null,article:null,after_article:null}},computed:s()({},Object(c.c)(["_id","router_show"]),{show_flag:function(){return 0!=this.router_show&&"article"===this.router_show.slice(0,7)&&this.router_show.slice(8)===this._id&&(this.set_loading_show(!1),document.title=this.article.title,!0)}}),created:function(){var t=this.$route.params.id;this.get_data(t)},methods:s()({},Object(c.d)(["set__id","set_loading_show"]),Object(c.b)(["add_talk_word"]),{get_data:function(t){var e=this;Object(r.a)(t,"show").then(function(i){var a=i.data;if(0!=a.code){if(1===a.code)return void e.add_talk_word("服务器端出现错误,获取article数据失败!");if(2===a.code)return void e.$router.replace("/404")}var s=a.data,r=s.before_article,c=s.article,l=s.after_article;c.content=s.content,e.set__id(t),e.before_article=r,e.article=c,e.after_article=l})},to_article:function(t){this.$router.push("/article/"+t)}}),watch:{$route:function(){if("article"==this.$route.name){var t=this.$route.params.id;t!==this._id&&this.get_data(t)}}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article"},[i("transition",{attrs:{name:"router"}},[null!=t.article?i("div",{directives:[{name:"show",rawName:"v-show",value:t.show_flag,expression:"show_flag"}],staticClass:"article_div router_div"},[i("div",{staticClass:"title"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),i("div",{staticClass:"middle_div"},[i("div",{staticClass:"date"},[i("i",{staticClass:"icon-date"}),t._v("\n          "+t._s(t.article.date)+"\n        ")]),t._v(" "),i("div",{staticClass:"tag_classify"},[i("div",{staticClass:"tag"},[i("i",{staticClass:"icon-tag"}),t._v("\n            "+t._s(t.article.tag)+"\n          ")]),t._v(" "),i("div",{staticClass:"classify"},[i("i",{staticClass:"icon-classify"}),t._v("\n            "+t._s(t.article.classify)+"\n          ")])])]),t._v(" "),i("div",{staticClass:"content article_style",domProps:{innerHTML:t._s(t.article.content)}}),t._v(" "),i("div",{staticClass:"edit_date"},[t._v("\n        最后编辑于"),i("span",[t._v(t._s(t.article.edit_date))])]),t._v(" "),i("div",{staticClass:"before_after_article"},[t.before_article.title?i("div",{staticClass:"before_article",on:{click:function(e){t.to_article(t.before_article._id)}}},[t._v("\n          "+t._s(t.before_article.title)+"\n        ")]):t._e(),t._v(" "),t.before_article.title?t._e():i("div",{staticClass:"before_article_blank"}),t._v(" "),t.after_article.title?i("div",{staticClass:"after_article",on:{click:function(e){t.to_article(t.after_article._id)}}},[t._v("\n          "+t._s(t.after_article.title)+"\n        ")]):t._e()])]):t._e()])],1)},staticRenderFns:[]};var n=i("VU/8")(l,_,!1,function(t){i("WeOI")},"data-v-15774f6c",null);e.default=n.exports}});
//# sourceMappingURL=11.f395d77f343ead978a0c.js.map