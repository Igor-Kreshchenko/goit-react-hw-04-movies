(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{58:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));var r=a(64),n=a.n(r),c="4ee9f3c9031692c2042b06be7b52de80";function o(){return n.a.get("/trending/movie/week?api_key=".concat(c))}function s(e){return n.a.get("/movie/".concat(e,"?api_key=").concat(c,"&append_to_response=reviews,credits"))}function i(e){return n.a.get("search/movie?api_key=".concat(c,"&query=").concat(e))}n.a.defaults.baseURL="https://api.themoviedb.org/3"},59:function(e,t,a){"use strict";t.a=a.p+"static/media/noPosterImg.e55d4104.jpg"},65:function(e,t,a){e.exports={image:"MoviePreview_image__2Z4Yv"}},66:function(e,t,a){e.exports={List:"MovieList_List__3Jrff",ListItem:"MovieList_ListItem__1cqfu"}},67:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(0);var r=a(11),n=a(3),c=a(59),o=a(65),s=a.n(o),i=a(1),u=function(e){var t=e.posterUrl,a=e.title,r=e.vote;return Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{className:s.a.image,src:t?"https://image.tmdb.org/t/p/w300".concat(t):c.a,alt:"".concat(a," poster")}),Object(i.jsxs)("p",{children:[a,Object(i.jsx)("span",{children:r})]})]})},h=a(66),m=a.n(h),l=Object(n.g)((function(e){var t=e.movies,a=e.location;return Object(i.jsx)("ul",{className:m.a.List,children:t.map((function(e){var t=e.id,n=e.poster_path,c=e.title,o=e.vote_average;return Object(i.jsx)("li",{className:m.a.ListItem,children:Object(i.jsx)(r.b,{to:{pathname:"/movies/".concat(t),state:{from:a}},children:Object(i.jsx)(u,{posterUrl:n,title:c,vote:o})})},t)}))})}))},94:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2HoVB",SearchForm:"Searchbar_SearchForm__1vELJ",SearchFormButton:"Searchbar_SearchFormButton__3GIG4",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3owIj",SearchFormInput:"Searchbar_SearchFormInput__H4kTX"}},98:function(e,t,a){"use strict";a.r(t);var r=a(60),n=a(61),c=a(63),o=a(62),s=a(0),i=a(94),u=a.n(i),h=a(1),m=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={query:""},e.handleChange=function(t){var a=t.currentTarget;e.setState({query:a.value})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state.query),e.setState({query:""})},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this.state.query,t=this.handleChange,a=this.handleSubmit;return Object(h.jsx)("header",{className:u.a.Searchbar,children:Object(h.jsxs)("form",{className:u.a.SearchForm,onSubmit:a,children:[Object(h.jsx)("button",{type:"submit",className:u.a.SearchFormButton,children:Object(h.jsx)("span",{className:u.a.SearchFormButtonLabel,children:"Search"})}),Object(h.jsx)("input",{className:u.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:t})]})})}}]),a}(s.Component),l=a(67),b=a(58),v=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={movies:[]},e.onChangeQuery=function(t){Object(b.b)(t).then((function(t){var a=t.data;e.setState({movies:a.results})})).catch(console.log)},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("movies"),t=JSON.parse(e);t&&this.setState({movies:t})}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.movies;a!==t.movies&&localStorage.setItem("movies",JSON.stringify(a))}},{key:"render",value:function(){var e=this.state.movies,t=this.onChangeQuery;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{onSubmit:t}),Object(h.jsx)(l.a,{movies:e})]})}}]),a}(s.Component);t.default=v}}]);
//# sourceMappingURL=movies-page.9534692a.chunk.js.map