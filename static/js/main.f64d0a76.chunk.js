(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(8),c=n.n(r),s=(n(17),n(3)),i=n(4),h=n(6),l=n(5),u=(n(7),n(9)),d=(n(18),n(1)),b=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={searchPhoto:""},t.handlePhotoChange=function(e){t.setState({searchPhoto:e.currentTarget.value.toLowerCase()})},t.handlePhotoSubmit=function(e){e.preventDefault(),""!==t.state.searchPhoto.trim()?(t.props.onSubmit(t.state.searchPhoto),t.setState({searchPhoto:""})):u.b.error("\u0412\u0412\u0415\u0414\u0418\u0422\u0415 \u041a\u041b\u042e\u0427\u0415\u0412\u041e\u0415 \u0421\u041b\u041e\u0412\u041e \u041f\u041e\u0418\u0421\u041a\u0410")},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handlePhotoSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",value:this.state.searchPhoto,onChange:this.handlePhotoChange})]})})}}]),n}(o.Component),j=n(11),p=function(t){var e=t.src;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("img",{src:e,alt:"",className:"ImageGalleryItem-image"})})},m=(n(20),n(12)),f=n.n(m),g=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Overlay",children:Object(d.jsx)(f.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),n}(o.Component),O=function(t){var e=t.onClick;return Object(d.jsx)("div",{className:"buttonContainer",children:Object(d.jsx)("button",{type:"button",className:"Button",onClick:e,children:"Load more"})})},v=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={photos:[],loading:!1,page:1,error:null},t.handleAddPage=function(){t.setState((function(t){return{page:t.page+1}}))},t.handleModalPhoto=function(e){t.props.onClick(e)},t}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(t,e){var n=this,o=this.props.searchPhoto,a=this.state.page;t.searchPhoto!==o&&(this.setState({page:1,photos:[],loading:!0}),fetch("https://pixabay.com/api/?q=".concat(o,"&page=1&key=22333452-088c943be01bb3bdea991b2c2&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.json()})).then((function(t){return n.setState({photos:t.hits})})).catch((function(t){return n.setState({error:t})})).finally((function(){return n.setState({loading:!1})}))),e.page!==a&&a>1&&t.searchPhoto===o&&(this.setState({loading:!0}),fetch("https://pixabay.com/api/?q=".concat(o,"&page=").concat(a,"&key=22333452-088c943be01bb3bdea991b2c2&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.json()})).then((function(t){return n.setState({photos:[].concat(Object(j.a)(e.photos),Object(j.a)(t.hits))})})).catch((function(t){return n.setState({error:t})})).finally((function(){n.setState({loading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}},{key:"render",value:function(){var t=this,e=this.state,n=e.photos,o=e.loading,a=e.error;return Object(d.jsxs)("div",{children:[a&&Object(d.jsxs)("p",{children:["\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e \u0441\u043b\u043e\u0432\u0443 ",this.props.searchPhoto]}),o&&Object(d.jsx)(g,{}),!n&&Object(d.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"}),n&&Object(d.jsx)("ul",{className:"ImageGallery",children:n.map((function(e){return Object(d.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return t.handleModalPhoto(e.largeImageURL)},children:Object(d.jsx)(p,{src:e.webformatURL})},e.id)}))}),n.length>0&&Object(d.jsx)(O,{onClick:this.handleAddPage})]})}}]),n}(o.Component),y=document.querySelector("#modal-root"),P=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:this.props.largePhoto,alt:"largePhoto"})})}),y)}}]),n}(o.Component),x=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={searchPhoto:"",showModal:!1,modalPhoto:""},t.handleFormSubmit=function(e){t.setState({searchPhoto:e})},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t.handleClickPhoto=function(e){t.setState({modalPhoto:e,showModal:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.searchPhoto,n=t.showModal;return Object(d.jsxs)(d.Fragment,{children:[n&&Object(d.jsx)(P,{onClose:this.toggleModal,largePhoto:this.state.modalPhoto}),Object(d.jsx)(u.a,{autoClose:3e3}),Object(d.jsx)(b,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(v,{searchPhoto:e,onClick:this.handleClickPhoto})]})}}]),n}(o.Component),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),o(t),a(t),r(t),c(t)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),S()},7:function(t,e,n){}},[[41,1,2]]]);
//# sourceMappingURL=main.f64d0a76.chunk.js.map