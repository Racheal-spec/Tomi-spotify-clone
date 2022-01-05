(this.webpackJsonpspotifyclone=this.webpackJsonpspotifyclone||[]).push([[0],{154:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(41),c=a.n(n),s=a(8),o=(a(154),a(16)),l=a(18),d=a(246),p=a(3),j=a(243),b=a(248),m=a(137),x=Object(m.a)({palette:{primary:{main:"#1DB954",black:"#000000",white:"#FFFFFF",dark:"#121212",grey1:"#272727",grey2:"#535353",grey3:"#b3b3b3",grey4:"#18191A",grey5:"#202020",blue:"#4089F2",offwhite:"#FAF9F6"}},typography:{lineHeight:1.1,h1:{fontSize:"56px",fontWeight:"700"},h2:{fontSize:"48px",fontWeight:"700"},h3:{fontSize:"40px",fontWeight:"700"},h4:{fontSize:"32px",fontWeight:"700"},h5:{fontSize:"24px",fontWeight:"700"},h6:{fontSize:"20px",fontWeight:"700"},smallText:{fontSize:"15px",fontWeight:"700"},smallerText:{fontSize:"13px",fontWeight:"500"},smallestText:{fontSize:"11px"}}}),h=a(1),u=function(){var e=Object(j.a)((function(e){return{root:{padding:"20px 20px"},spacing:{padding:"20px 0"},btn:{color:x.palette.primary.white,backgroundColor:x.palette.primary.blue,padding:"12px 16px",fontSize:12,borderRadius:20,border:"none",letterSpacing:2,fontWeight:"bold",textTransform:"capitalize"}}}))();return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(b.a,{fontWeight:"bold",color:x.palette.primary.white,children:"Friends activity"}),Object(h.jsx)("div",{className:e.spacing,children:Object(h.jsx)(b.a,{fontSize:"small",fontWeight:"bold",children:"Connect with Facebook to see what your friends are playing"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:e.btn,children:"connect with facebook"})}),Object(h.jsx)("div",{className:e.spacing,children:Object(h.jsx)(b.a,{variant:"smallestText",fontWeight:"bold",children:"We'll never post anything without your permission. Show and Hide Friend Activity from Settings."})})]})},g=a(136),O=function(e){var t=e.trackuri,a=Object(j.a)((function(e){return{root:Object(p.a)({position:"fixed",bottom:0,width:"100%"},e.breakpoints.down("sm"),{bottom:"8%"})}}))(),i=localStorage.getItem("token");return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:a.root,children:Object(h.jsx)(g.a,{token:i,showSaveIcon:!0,uris:t?[t]:[],styles:{height:80,width:"100%",bgColor:x.palette.primary.grey4,activeColor:x.palette.primary.white,trackNameColor:x.palette.primary.white,trackArtistColor:x.palette.primary.grey3,padding:"0 50px",color:"#fff"}})})})},f=a(245),v=a(236),y=a(15),k=a(235),w=a(250),N=a(252),S=a(253),C=a(49),D=a.n(C),T=a(38),I=a.n(T),L=a(63),F=a(64),W=a.n(F),E=function(e){return"https://api.spotify.com/v1/playlists/".concat(e)},R=function(e){return function(){var t=Object(L.a)(I.a.mark((function t(a){var i;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.a.get(E(e),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:i=t.sent,a({type:"FETCH_DETAILS",payload:{Playlist:i.data}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},z=function(e){var t=e.id,a=e.description,r=e.images,n=e.name,c=Object(j.a)((function(e){return{root:{padding:"15px 20px","&:hover":{backgroundColor:"#272727"}},imgStyle:Object(p.a)({width:"100%",height:180,objectFit:"cover",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},e.breakpoints.down("sm"),{height:150}),media:{position:"relative"},content:{color:x.palette.primary.grey3,padding:"10px 0 !important"},title:{color:x.palette.primary.white},link:{textDecoration:"none"},icon:{width:40,height:40,borderRadius:"50%",padding:8,boxShadow:"0 1px 4px rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)",background:x.palette.primary.main,color:x.palette.primary.white,position:"absolute",bottom:"10px",right:"12px",cursor:"auto",zIndex:2}}}))(),l=Object(i.useState)({opacity:0}),d=Object(s.a)(l,2),m=d[0],u=d[1],g=Object(i.useState)({backgroundColor:"#121212"}),O=Object(s.a)(g,2),f=O[0],v=O[1],C=Object(i.useState)(!1),T=Object(s.a)(C,2),I=T[0],L=T[1],F=Object(y.b)();return Object(h.jsx)(o.b,{to:"/playlist/".concat(t),onClick:function(){F(R(t))},className:c.link,onMouseEnter:function(e){u({opacity:"1",transition:"all 0.4s ease",bottom:"6px"})},onMouseLeave:function(e){u({opacity:"0"})},children:Object(h.jsx)("div",{onMouseEnter:function(e){v({transition:"all 0.4s ease",backgroundColor:"#272727"})},onMouseLeave:function(e){v({backgroundColor:"#121212"})},children:Object(h.jsxs)(w.a,{className:c.root,style:f,children:[Object(h.jsxs)(N.a,{className:c.media,children:[Object(h.jsx)("img",{src:r,className:c.imgStyle,alt:"playlist-img"}),Object(h.jsx)("div",{className:c.icon,style:m,onClick:function(e){e.preventDefault(),L(!I)},children:I?Object(h.jsx)(D.a,{}):Object(h.jsx)(k.a,{})})]}),Object(h.jsxs)(S.a,{className:c.content,children:[Object(h.jsx)(b.a,{className:c.title,variant:"smallText",children:n}),Object(h.jsx)("div",{children:Object(h.jsxs)(b.a,{variant:"smallerText",children:["By ",a]})})]})]})})})},A=function(){var e=Object(j.a)((function(e){return{root:{padding:"20px 30px",height:"100%"},list:{display:"flex",flexDirection:"column"},link:{color:x.palette.primary.grey3,cursor:"pointer",textDecoration:"none","&:hover":{color:x.palette.primary.white}},typo:{color:x.palette.primary.white,padding:"10px 0"},linkDiv:{margin:"10px 0"}}}))(),t=Object(y.c)((function(e){return e.music.Playlists})),a=Object(v.a)(x.breakpoints.down("sm"));return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)("div",{className:e.list,children:Object(h.jsx)(b.a,{variant:"h6",className:e.typo,children:"Playlists"})}),Object(h.jsx)("div",{children:Object(h.jsx)(f.a,{container:!0,spacing:a?0:2,children:t.map((function(e){return Object(h.jsx)(f.a,{item:!0,xl:4,lg:4,xs:6,children:Object(h.jsx)(z,{id:e.id,images:e.images[0].url,description:e.owner.display_name,name:e.name})},e.id)}))})})]})},_="/Tomi-spotify-clone",P="/library/playlist",H="/search",B="/library/podcast",M="/library/artist",Y="/library/album",U=function(e){var t=e.id,a=e.name,r=e.images,n=Object(j.a)((function(e){return{root:{width:"100%",backgroundColor:x.palette.primary.grey1,color:x.palette.primary.white,borderRadius:6,transition:"all 0.3s ease",boxShadow:"0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset","&:hover":{backgroundColor:x.palette.primary.grey2}},cardWrapper:{display:"flex",alignItems:"center"},grid1:{width:"25%"},grid2:Object(p.a)({width:"70%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 10px"},e.breakpoints.down("sm"),{fontSize:10,width:"60%"}),postalImg:Object(p.a)({maxWidth:"25%",height:80,objectFit:"cover",borderRadius:3},e.breakpoints.down("sm"),{maxWidth:"75%",height:55}),icon:{width:40,height:40,borderRadius:"50%",padding:8,cursor:"auto",boxShadow:"0 1px 4px rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)",background:x.palette.primary.main},link:{textDecoration:"none"}}}))(),c=Object(i.useState)({opacity:"0"}),l=Object(s.a)(c,2),d=l[0],b=l[1],m=Object(i.useState)(!1),u=Object(s.a)(m,2),g=u[0],O=u[1],f=Object(y.b)();return Object(h.jsx)(o.b,{to:"/playlist/".concat(t),onClick:function(){f(R(t))},className:n.link,children:Object(h.jsx)("div",{className:n.root,onMouseEnter:function(e){b({opacity:"1"})},onMouseLeave:function(e){b({opacity:"0"})},children:Object(h.jsxs)("div",{className:n.cardWrapper,children:[Object(h.jsx)("img",{src:r,className:n.postalImg,alt:"postal"}),Object(h.jsxs)("div",{className:n.grid2,children:[Object(h.jsx)("div",{children:Object(h.jsx)("strong",{children:a})}),Object(h.jsx)("div",{className:n.icon,style:d,onClick:function(e){e.preventDefault(),O(!g)},children:g?Object(h.jsx)(D.a,{}):Object(h.jsx)(k.a,{})})]})]})})})},G=function(){var e=Math.floor(16777215*Math.random()).toString(16),t="#"+"".concat(e),a=Object(j.a)((function(e){return{homeWrapper:Object(p.a)({background:"linear-gradient(to bottom, ".concat(t,", #000000 80%)"),height:"55%",padding:"80px 30px"},e.breakpoints.down("sm"),{padding:"80px 13px"}),CardContainer:{padding:"20px 0"},spaceY:{margin:"20px 0",color:x.palette.primary.white},titleDiv:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"20px 0 8px 0"},title:{color:x.palette.primary.white},seeAll:{color:x.palette.primary.grey3,textDecoration:"none",fontSize:13,fontWeight:"bold","&:hover":{textDecoration:"underline"}},cardGrid:Object(p.a)({},e.breakpoints.down("sm"),{})}}))(),r=Object(y.b)(),n=Object(y.c)((function(e){return e.music.isLoading}));Object(i.useEffect)((function(){r(function(){var e=Object(L.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.spotify.com/v1/browse/new-releases?country=NG&limit=16&offset=10",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:a=e.sent,t({type:"FETCH_NEWRELEASES",payload:{Newreleases:a.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(function(){var e=Object(L.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.spotify.com/v1/browse/featured-playlists?country=NG&locale=Lagos&limit=10&offset=5",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:a=e.sent,t({type:"FETCH_FEATUREDPLAYLISTS",payload:{Featuredplaylists:a.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[r]);var c=Object(y.c)((function(e){return e.music.Playlists})),s=Object(y.c)((function(e){return e.music.Newreleases})),l=Object(y.c)((function(e){return e.music.Featuredplaylists})),d=(new Date).getHours();return Object(h.jsx)(h.Fragment,{children:n?Object(h.jsx)("div",{children:"loading"}):Object(h.jsxs)("div",{className:a.homeWrapper,children:[Object(h.jsx)(b.a,{variant:"h4",className:a.spaceY,children:d<12?"Good morning":d<18?"Good afternoon":"Good evening"}),Object(h.jsx)(f.a,{container:!0,spacing:1,className:a.CardContainer,children:c.slice(0,4).map((function(e){return Object(h.jsx)(f.a,{item:!0,xl:6,lg:6,xs:6,children:Object(h.jsx)(U,{id:e.id,name:e.name,images:e.images[0].url},e.id)},e.id)}))}),Object(h.jsxs)("div",{className:a.titleDiv,children:[Object(h.jsx)("div",{className:a.title,children:Object(h.jsx)(b.a,{variant:"h5",children:null===l||void 0===l?void 0:l.message})}),Object(h.jsx)("div",{children:Object(h.jsx)(o.b,{to:_,className:a.seeAll,children:"SEE ALL"})})]}),Object(h.jsx)(f.a,{container:!0,spacing:2,children:(null===l||void 0===l?void 0:l.playlists.items)&&(null===l||void 0===l?void 0:l.playlists.items.slice(0,6).map((function(e){return Object(h.jsx)(f.a,{item:!0,xl:4,lg:4,xs:6,children:Object(h.jsx)(z,{id:e.id,name:e.name,images:e.images[0].url,description:e.description},e.id)},e.id)})))}),Object(h.jsxs)("div",{className:a.titleDiv,children:[Object(h.jsx)("div",{className:a.title,children:Object(h.jsx)(b.a,{variant:"h5",children:"New Releases"})}),Object(h.jsx)("div",{children:Object(h.jsx)(o.b,{to:_,className:a.seeAll,children:"SEE ALL"})})]}),Object(h.jsx)(f.a,{container:!0,spacing:2,children:(null===s||void 0===s?void 0:s.albums.items)&&(null===s||void 0===s?void 0:s.albums.items.slice(0,4).map((function(e){return Object(h.jsx)(f.a,{item:!0,xl:4,lg:4,xs:6,className:a.cardGrid,children:Object(h.jsx)(z,{id:e.id,name:e.name,images:e.images[0].url},e.id)},e.id)})))})]})})},J=function(){var e=Object(j.a)((function(e){return{root:{padding:"5px 20px",width:"100vh"},linkDiv:{margin:"13px 0"}}}))(),t=Object(y.b)();Object(i.useEffect)((function(){t(function(){var e=Object(L.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.spotify.com/v1/me/playlists",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:a=e.sent,t({type:"FETCH_PLAYLISTS",payload:{Playlists:a.data.items}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]);var a=Object(y.c)((function(e){return e.music.Playlists}));return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)("div",{children:a.map((function(t){return Object(h.jsx)("div",{className:e.linkDiv,children:Object(h.jsx)(X,{id:t.id,name:t.name})},t.id)}))})})},X=function(e){var t=e.id,a=e.name,i=Object(j.a)((function(e){return{link:{color:x.palette.primary.grey3,cursor:"pointer",textDecoration:"none",fontSize:14,fontWeight:500,"&:hover":{color:x.palette.primary.white}}}}))(),r=Object(y.b)();return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:i.link,children:Object(h.jsx)(o.b,{to:"/playlist/".concat(t),onClick:function(){r(R(t))},className:i.link,children:Object(h.jsx)("p",{children:a})})})})},V=a(249),q=a(130),K=a.n(q),Q=function(e){var t=e.track,a=e.list,r=(e.trackuri,e.chooseTrack,e.id,Object(j.a)((function(e){return{root:Object(p.a)({display:"grid",gridTemplateColumns:"30px 2fr 220px 35px 60px",padding:"8px 0","&:hover":{padding:"8px 0",borderRadius:3,backgroundColor:x.palette.primary.grey1}},e.breakpoints.down("sm"),{gridTemplateColumns:"100px 220px 100px"}),songimg:{width:"100%"},imgtextDiv:Object(p.a)({display:"grid",gridTemplateColumns:"10% 100%",alignItems:"center"},e.breakpoints.down("sm"),{gridTemplateColumns:"40% 200%"}),trackname:{marginLeft:20},songname:{color:x.palette.primary.white},index:Object(p.a)({fontSize:"20px"},e.breakpoints.down("sm"),{display:"none"}),duration:Object(p.a)({},e.breakpoints.down("sm"),{display:"none"}),albumName:Object(p.a)({},e.breakpoints.down("sm"),{display:"none"}),Favorite:Object(p.a)({},e.breakpoints.down("sm"),{display:"none"})}}))()),n=Object(i.useState)({opacity:0}),c=Object(s.a)(n,2),o=c[0],l=c[1],d=Object(i.useState)(),m=Object(s.a)(d,2),u=m[0],g=m[1],O=Object(i.useState)(!1),f=Object(s.a)(O,2),v=f[0],y=f[1],w=function(e){e.preventDefault(),y(!v)},N=function(e){var t,a;return t=Math.floor(e/1e3),a=Math.floor(t/60),t%=60,a%=60,{hour:Math.floor(a/60),minute:a,seconds:t}}(t.duration_ms);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:r.root,onMouseEnter:function(e){l({opacity:1}),g(k.a)},onMouseLeave:function(e){l({opacity:0}),g()},children:[Object(h.jsx)("div",{className:r.index,onClick:w,children:u?Object(h.jsx)("div",{onClick:w,children:v?Object(h.jsx)(D.a,{}):Object(h.jsx)(k.a,{})}):a+1}),Object(h.jsxs)("div",{className:r.imgtextDiv,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:t.album.images[0].url,className:r.songimg,alt:"songimg"})}),Object(h.jsxs)("div",{className:r.trackname,children:[Object(h.jsx)(b.a,{className:r.songname,children:t.name}),Object(h.jsx)(b.a,{variant:"smallerText",children:t.album.artists[0].name})]})]}),Object(h.jsx)("div",{className:r.albumName,children:Object(h.jsx)(b.a,{variant:"smallerText",children:t.album.name})}),Object(h.jsx)("div",{style:o,className:r.Favorite,children:Object(h.jsx)(K.a,{fontSize:"small"})}),Object(h.jsxs)("div",{className:r.duration,children:[N.minute,": ",N.seconds]})]},t.id)})},Z=a(247),$=a(131),ee=a.n($),te=a(83),ae=a.n(te),ie=a(50),re=a.n(ie),ne=a(51),ce=a.n(ne),se=function(){var e=Math.floor(16777215*Math.random()).toString(16),t="#"+"".concat(e),a=Object(j.a)((function(e){return{root:{background:"linear-gradient(to bottom, ".concat(t,", ").concat(x.palette.primary.black,")"),color:x.palette.primary.white,padding:"80px 30px",height:"52%"},extraDivWrapper:{background:x.palette.primary.dark,padding:"40px 30px",display:"flex",alignItems:"center",justifyContent:"space-between"},playlistImg:{width:"100%",height:"100%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},flexTextName:Object(p.a)({display:"flex",alignItems:"center"},e.breakpoints.down("sm"),{display:"none"}),flexText:{display:"flex",alignItems:"center"},sideGrid:{padding:"0 50px"},boldName:Object(p.a)({padding:"30px 0"},e.breakpoints.down("sm"),{paddingLeft:30}),songList:{padding:"20px 30px"},marginY:{margin:"0 5px"},marginYtwo:Object(p.a)({margin:"0 25px"},e.breakpoints.down("sm"),{display:"none"}),marginYmore:Object(p.a)({},e.breakpoints.down("sm"),{display:"none"}),icon:{width:55,height:55,borderRadius:"50%",padding:10,boxShadow:"0 1px 4px rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)",background:x.palette.primary.main,color:x.palette.primary.white,cursor:"auto",transition:"all 0.2s ease-in","&:hover":{transform:"scale(1.1)"}},ownerName:{fontWeight:500,color:x.palette.primary.grey3},hide:{display:"none"}}}))(),r=Object(i.useState)(!1),n=Object(s.a)(r,2),c=n[0],o=n[1],d=Object(l.useParams)().playlist_id,m=Object(y.b)(),u=Object(i.useState)(!0),g=Object(s.a)(u,2),O=g[0],w=g[1];Object(i.useEffect)((function(){m(R(d)),w(!1)}),[m,d]);var N=Object(y.c)((function(e){return e.details.Playlist})),S=Object(y.c)((function(e){return e.music.User})),C=Object(v.a)(x.breakpoints.down("sm"));return Object(h.jsxs)(h.Fragment,{children:[O?Object(h.jsx)(b.a,{variant:"h3",children:"Loading..."}):Object(h.jsx)("div",{className:a.root,children:Object(h.jsxs)(f.a,{container:!0,alignItems:"center",children:[Object(h.jsx)(f.a,{item:!0,lg:4,children:Object(h.jsx)("img",{src:null===N||void 0===N?void 0:N.images[0].url,className:a.playlistImg,alt:"playlist-img"})}),Object(h.jsxs)(f.a,{item:!0,lg:8,className:a.sideGrid,children:[C?"":Object(h.jsx)(b.a,{variant:"smallerText",children:"PLAYLIST"}),Object(h.jsx)(b.a,{variant:C?"h4":"h2",className:a.boldName,children:null===N||void 0===N?void 0:N.name}),Object(h.jsxs)("div",{className:a.flexTextName,children:[Object(h.jsx)(Z.a,{src:null===S||void 0===S?void 0:S.images[0].url,style:{width:"25px",height:"25px"}}),Object(h.jsx)("strong",{className:a.marginY,children:null===N||void 0===N?void 0:N.owner.display_name}),Object(h.jsxs)("p",{className:a.ownerName,children:[".",null===N||void 0===N?void 0:N.tracks.total," songs"]})]})]})]})},null===N||void 0===N?void 0:N.id),Object(h.jsxs)("div",{children:[Object(h.jsxs)(V.a,{className:a.extraDivWrapper,children:[Object(h.jsxs)("div",{className:a.flexText,children:[Object(h.jsx)("div",{className:a.icon,onClick:function(e){e.preventDefault(),o(!c)},children:c?Object(h.jsx)(D.a,{fontSize:"large"}):Object(h.jsx)(k.a,{fontSize:"large"})}),Object(h.jsx)("div",{className:a.marginYtwo,children:Object(h.jsx)(ee.a,{fontSize:"large"})}),Object(h.jsx)("div",{className:a.marginYmore,children:Object(h.jsx)(ae.a,{fontSize:"large"})})]}),C?"":Object(h.jsxs)("div",{className:a.flexText,children:[Object(h.jsx)("strong",{className:a.marginY,children:"Custom order"}),c?Object(h.jsx)(re.a,{}):Object(h.jsx)(ce.a,{})]})]}),Object(h.jsx)(V.a,{className:a.songList,children:null===N||void 0===N?void 0:N.tracks.items.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)(Q,{track:e.track,list:t,trackuri:e.track.uri},e.id)},e.id)}))})]})]})},oe=a(84),le=a.n(oe),de=a(85),pe=a.n(de),je=a(86),be=a.n(je),me=a(132),xe=a.n(me),he=a(237),ue=a(45),ge=a.n(ue),Oe=a(52),fe=function(){var e=Object(j.a)((function(e){return{root:{padding:"7px 0","*::-webkit-scrollbar":{width:10},"*::-webkit-scrollbar-track":{borderRadius:10}},icon:{color:x.palette.primary.grey3,cursor:"pointer",margin:"0 15px","&:hover":{color:x.palette.primary.white},"&:focus":{color:x.palette.primary.white}},moreicon:{color:x.palette.primary.white,cursor:"pointer",margin:"7px 5px"},iconDiv:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"8px 0",margin:"0 5px"},activeLink:{backgroundColor:x.palette.primary.grey1,color:x.palette.primary.white,cursor:"pointer",padding:"8px 0",borderRadius:5,margin:"0 5px"},navlink:{color:x.palette.primary.grey3,textDecoration:"none","&:active":{}},spacing:{padding:"0 30px"},menuDiv2:{padding:"20px 0"},likeicon:{background:"linear-gradient(to right bottom, #430089 30% , #ffffff )",cursor:"pointer",margin:"0 15px",padding:5,"&:hover":{color:x.palette.primary.white},"&:focus":{color:x.palette.primary.white}}}}))(),t=Object(Oe.useHistory)();return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)("div",{children:Object(h.jsx)(ae.a,{fontSize:"large",className:e.moreicon})}),Object(h.jsx)(o.b,{to:_,className:e.navlink,children:Object(h.jsxs)("div",{className:ge()(e.iconDiv,Object(p.a)({},e.activeLink,t.location.pathname===_)),children:[Object(h.jsx)(le.a,{className:e.icon}),Object(h.jsx)(b.a,{variant:"smallerText",fontWeight:"bold",children:"Home"})]})}),Object(h.jsx)(o.b,{to:H,className:e.navlink,children:Object(h.jsxs)("div",{className:ge()(e.iconDiv,Object(p.a)({},e.activeLink,t.location.pathname===H)),children:[Object(h.jsx)(pe.a,{className:e.icon}),Object(h.jsx)(b.a,{variant:"smallerText",fontWeight:"bold",children:"Search"})]})}),Object(h.jsx)(o.b,{to:P,className:e.navlink,children:Object(h.jsxs)("div",{className:ge()(e.iconDiv,Object(p.a)({},e.activeLink,t.location.pathname===P)),children:[Object(h.jsx)(be.a,{className:e.icon}),Object(h.jsx)(b.a,{variant:"smallerText",fontWeight:"bold",children:"Library"})]})}),Object(h.jsxs)("div",{className:e.menuDiv2,children:[Object(h.jsxs)("div",{className:e.iconDiv,children:[Object(h.jsx)(xe.a,{className:e.icon}),Object(h.jsx)(b.a,{variant:"smallerText",fontWeight:"bold",children:"Create Playlist"})]}),Object(h.jsxs)("div",{className:e.iconDiv,children:[Object(h.jsx)(he.a,{className:e.likeicon}),Object(h.jsx)(b.a,{variant:"smallerText",fontWeight:"bold",children:"Liked Songs"})]})]})]})},ve=a(24),ye=a(138),ke=a(133),we=a.n(ke),Ne=a(134),Se=a.n(Ne),Ce=function(e){var t=e.children,a=Object(j.a)((function(e){return{root:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0px 17px",background:"transparent",position:"fixed",width:"60%",zIndex:2},e.breakpoints.down("sm"),{width:"100%"}),changebg:{},barWrapper:{display:"flex",alignItems:"center"},profile:{display:"flex",alignItems:"center",fontWeight:"bold",backgroundColor:x.palette.primary.black,borderRadius:30,cursor:"pointer",padding:"4px 0"},arrow:{borderRadius:20,margin:"10px 12px",padding:"4px 8px 6px 8px",backgroundColor:x.palette.primary.dark,cursor:"pointer"},upgrade:{fontWeight:"bold",backgroundColor:x.palette.primary.black,padding:"6px 30px",borderRadius:30,border:"1px solid #FAF9F6",marginRight:30},upgradeLink:{color:x.palette.primary.offwhite,textDecoration:"none",letterSpacing:2,fontSize:12,textTransform:"Uppercase"},margin:{margin:"0 6px",color:x.palette.primary.offwhite}}}))(),r=Object(i.useState)(),n=Object(s.a)(r,2),c=n[0],l=n[1],d=Object(y.c)((function(e){return e.music.User})),b=Object(Oe.useHistory)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:a.root,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(we.a,{className:a.arrow,fontSize:"large",onClick:function(){return b.goBack()}}),Object(h.jsx)(Se.a,{className:a.arrow,fontSize:"large",onClick:function(){return b.goForward()}})]}),Object(h.jsxs)("div",{className:a.barWrapper,children:["premium"!==(null===d||void 0===d?void 0:d.product)?Object(h.jsx)("div",{className:a.upgrade,children:Object(h.jsx)(o.b,{to:"https://www.spotify.com/ng/premium/",className:a.upgradeLink,children:"upgrade"})}):"",Object(h.jsxs)("div",{className:a.profile,onClick:function(){l(!c)},children:[Object(h.jsx)(Z.a,{src:null===d||void 0===d?void 0:d.images[0].url,style:{width:"25px",height:"25px"}}),Object(h.jsx)("p",{className:a.margin,children:"Tomisin"}),c?Object(h.jsx)(re.a,{}):Object(h.jsx)(ce.a,{})]})]})]}),t]})},De=a(238),Te=a(239),Ie=a(241),Le=a(242),Fe=a(254),We=a(244),Ee=function(e){var t=e.children,a=Object(j.a)((function(e){return{root:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:x.palette.primary.grey4,padding:8,position:"fixed",width:"60%",zIndex:2},e.breakpoints.down("sm"),{width:"100%"}),profile:Object(p.a)({display:"flex",alignItems:"center",fontWeight:"bold",backgroundColor:x.palette.primary.black,borderRadius:30,cursor:"pointer",padding:"4px 0"},e.breakpoints.down("sm"),{display:"none"}),arrow:{width:45,height:45,borderRadius:50,margin:"10px 12px",padding:"4px 4px 6px 5px",backgroundColor:x.palette.primary.dark,cursor:"pointer"},search:Object(p.a)({marginRight:160},e.breakpoints.down("sm"),{marginRight:0}),searchStyles:Object(p.a)({width:"350px",height:"40px",fontWeight:"bold",backgroundColor:x.palette.primary.white,padding:"6px 30px",border:0,borderRadius:"30px !important"},e.breakpoints.down("sm"),{width:"250px"}),margin:{margin:"0 6px",color:x.palette.primary.offwhite}}}))(),r=Object(i.useState)(),n=Object(s.a)(r,2),c=n[0],o=n[1],l=Object(y.c)((function(e){return e.music.User})),d=Object(Oe.useHistory)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:a.root,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(De.a,{className:a.arrow,onClick:function(){return d.goBack()}}),Object(h.jsx)(Te.a,{className:a.arrow,onClick:function(){return d.goForward()}})]}),Object(h.jsx)("div",{className:a.search,children:Object(h.jsx)(Le.a,{type:"search",variant:"outlined",placeholder:"Artists, songs or podcasts",disableRipple:!0,InputProps:{className:a.searchStyles,endAdornment:Object(h.jsx)(Fe.a,{children:Object(h.jsx)(We.a,{edge:"end",children:Object(h.jsx)(Ie.a,{})})})}})}),Object(h.jsxs)("div",{className:a.profile,onClick:function(){o(!c)},children:[Object(h.jsx)(Z.a,{src:null===l||void 0===l?void 0:l.images[0].url,style:{width:"25px",height:"25px"}}),Object(h.jsx)("p",{className:a.margin,children:"Tomisin"}),c?Object(h.jsx)(re.a,{}):Object(h.jsx)(ce.a,{})]})]}),t]})},Re=function(e){var t=e.children,a=Object(j.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:2},profile:Object(p.a)({display:"flex",alignItems:"center",fontWeight:"bold",backgroundColor:x.palette.primary.black,borderRadius:30,cursor:"pointer",padding:"4px 0"},e.breakpoints.down("sm"),{display:"none"}),arrow:{width:45,height:45,borderRadius:50,margin:"10px 12px",padding:"4px 4px 6px 5px",backgroundColor:x.palette.primary.dark,cursor:"pointer"},libNav:{fontWeight:"bold"},upgradeLink:{color:x.palette.primary.offwhite,textDecoration:"none",letterSpacing:2,fontSize:12,textTransform:"Uppercase"},margin:{margin:"0 6px",color:x.palette.primary.offwhite},link:Object(p.a)({color:x.palette.primary.white,textDecoration:"none",margin:"0 15px"},e.breakpoints.down("sm"),{fontSize:12,margin:"0 10px"}),navlink:{listStyle:"none",display:"flex"},activeLink:{backgroundColor:x.palette.primary.grey1,color:x.palette.primary.white,cursor:"pointer",padding:"10px 14px",borderRadius:5,margin:"0 5px"}}}))(),r=Object(i.useState)(),n=Object(s.a)(r,2),c=n[0],l=n[1],d=Object(y.c)((function(e){return e.music.User})),b=Object(Oe.useHistory)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:a.root,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(De.a,{className:a.arrow,onClick:function(){return b.goBack()}}),Object(h.jsx)(Te.a,{className:a.arrow,onClick:function(){return b.goForward()}})]}),Object(h.jsx)("div",{className:a.libNav,children:Object(h.jsxs)("ul",{className:a.navlink,children:[Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:P,className:ge()(a.link,Object(p.a)({},a.activeLink,b.location.pathname===P)),children:"Playlists"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:B,className:ge()(a.link,Object(p.a)({},a.activeLink,b.location.pathname===B)),children:"Podcasts"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:M,className:ge()(a.link,Object(p.a)({},a.activeLink,b.location.pathname===M)),children:"Artists"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:Y,className:ge()(a.link,Object(p.a)({},a.activeLink,b.location.pathname===Y)),children:"Albums"})})]})}),Object(h.jsxs)("div",{className:a.profile,onClick:function(){l(!c)},children:[Object(h.jsx)(Z.a,{src:null===d||void 0===d?void 0:d.images[0].url,style:{width:"25px",height:"25px"}}),Object(h.jsx)("p",{className:a.margin,children:"Tomisin"}),c?Object(h.jsx)(re.a,{}):Object(h.jsx)(ce.a,{})]})]}),t]})},ze=["children"],Ae=function(e){var t=e.children,a=Object(ye.a)(e,ze),i=Object(l.useLocation)(),r=new RegExp("^/library"),n=new RegExp("^/search"),c=Ce;return i.pathname.match(r)?c=Re:i.pathname.match(n)&&(c=Ee),Object(h.jsx)(c,Object(ve.a)(Object(ve.a)({},a),{},{children:t}))},_e=a.p+"static/media/searchImg.23ebe5d0.jpeg",Pe=function(){var e=Object(j.a)((function(e){return{root:{position:"relative",overflow:"hidden"},wrapper:{padding:"15px 20px",backgroundColor:"rgb(160, 195, 210)",borderRadius:6,zIndex:2,background:"linear-gradient(0deg,transparent,rgba(0,0,0,.4))"},title:Object(p.a)({color:x.palette.primary.white},e.breakpoints.down("sm"),{fontSize:10}),img:{width:"40%",transform:"rotate(25deg)",position:"absolute",bottom:0,right:-10},imgDiv:Object(p.a)({padding:"140px 0 0 0"},e.breakpoints.down("sm"),{padding:"40px 0 0 0"})}}))();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsxs)("div",{className:e.wrapper,children:[Object(h.jsx)(b.a,{className:e.title,variant:"h5",children:"Made For You"}),Object(h.jsx)("div",{className:e.imgDiv,children:Object(h.jsx)("img",{src:_e,className:e.img,alt:"search"})})]})})},He=function(){var e=Object(j.a)((function(e){return{root:Object(p.a)({padding:"60px 30px"},e.breakpoints.down("sm"),{padding:"0px 14px"}),titleDiv:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"20px 0 8px 0"},title:{color:x.palette.primary.white,margin:"10px 0"},seeAll:{color:x.palette.primary.grey3,textDecoration:"none",fontSize:13,fontWeight:"bold","&:hover":{textDecoration:"underline"}},section:{padding:"30px 0"}}}))();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsxs)("section",{className:e.section,children:[Object(h.jsx)("div",{className:e.title,children:Object(h.jsx)(b.a,{variant:"h5",children:"Browse all"})}),Object(h.jsx)(f.a,{container:!0,spacing:2,className:e.CardContainer,children:[0,1,2,3,4,5,6,7,8].map((function(e){return Object(h.jsx)(f.a,{item:!0,xl:4,lg:4,md:6,xs:6,children:Object(h.jsx)(Pe,{})})}))})]})})},Be=function(){return Object(h.jsx)("div",{children:"Podcastssss"})},Me=function(){return Object(h.jsx)("div",{children:"Artistsss"})},Ye=function(){return Object(h.jsx)("div",{children:"Albums"})},Ue=function(){var e=Object(j.a)((function(e){return{mobileNav:{background:x.palette.primary.dark,width:"100%",height:"10%",position:"fixed",bottom:"0%",zIndex:99,display:"flex",alignItems:"center",justifyContent:"space-around"},icon:{color:x.palette.primary.white},iconDiv:Object(p.a)({},e.breakpoints.down("sm"),{display:"flex",flexDirection:"column",alignItems:"center"}),navlink:{textDecoration:"none"},iconName:{color:x.palette.primary.white,fontSize:12}}}))();return Object(h.jsxs)("div",{className:e.mobileNav,children:[Object(h.jsx)(o.b,{to:_,className:e.navlink,children:Object(h.jsxs)("div",{className:e.iconDiv,children:[Object(h.jsx)(le.a,{className:e.icon}),Object(h.jsx)("div",{className:e.iconName,children:"Home"})]})}),Object(h.jsx)(o.b,{to:H,className:e.navlink,children:Object(h.jsxs)("div",{className:e.iconDiv,children:[Object(h.jsx)(pe.a,{className:e.icon}),Object(h.jsx)("div",{className:e.iconName,children:"Search"})]})}),Object(h.jsx)(o.b,{to:P,className:e.navlink,children:Object(h.jsxs)("div",{className:e.iconDiv,children:[Object(h.jsx)(be.a,{className:e.icon}),Object(h.jsx)("div",{className:e.iconName,children:"Library"})]})})]})},Ge=function(){var e=Object(j.a)((function(e){return{homeWrapper:{position:"relative"},root:{overflowY:"scroll",height:"100%","&::-webkit-scrollbar":{width:"0.4em"},"&::-webkit-scrollbar-thumb":{background:x.palette.primary.grey2}},gridWrapper:{display:"flex"},grid1:Object(p.a)({background:x.palette.primary.black,color:x.palette.primary.grey3,height:"calc(100vh + 30vh)",width:"20%"},e.breakpoints.down("sm"),{display:"none"}),grid2:Object(p.a)({background:x.palette.primary.dark,color:x.palette.primary.grey3,height:"calc(100vh + 30vh)",width:"60%",paddingBottom:100},e.breakpoints.down("sm"),{width:"100%"}),grid3:Object(p.a)({background:x.palette.primary.grey1,color:x.palette.primary.grey3,height:"calc(100vh + 30vh)",width:"20%"},e.breakpoints.down("sm"),{display:"none"}),footerControls:{position:"fixed",bottom:"30%"},listScroll:{"&::-webkit-scrollbar":{width:"0.4em"},"&::-webkit-scrollbar-thumb":{background:x.palette.primary.grey2}},hrstyles:{border:"0.5px solid #212121",width:"80%",margin:"0 auto"},mobileNav:{background:x.palette.primary.grey2,width:"100%",height:"8%",position:"fixed",bottom:0}}}))(),t=localStorage.getItem("token"),a=Object(i.useState)(!0),r=Object(s.a)(a,2),n=r[0],c=r[1];Object(i.useEffect)((function(){c(!1)}),[c]);var o=Object(y.c)((function(e){return e.details.Playlist})),d=Object(v.a)(x.breakpoints.down("sm"));return Object(h.jsx)(h.Fragment,{children:n?Object(h.jsx)("div",{children:"loading..."}):Object(h.jsxs)("div",{className:e.homeWrapper,children:[Object(h.jsxs)(f.a,{container:!0,className:e.gridWrapper,children:[Object(h.jsx)(f.a,{item:!0,className:e.grid1,children:Object(h.jsxs)(f.a,{container:!0,children:[Object(h.jsx)(f.a,{item:!0,lg:12,children:Object(h.jsx)(fe,{})}),Object(h.jsx)("hr",{className:e.hrstyles}),Object(h.jsx)(f.a,{item:!0,lg:12,className:e.listScroll,children:Object(h.jsx)(J,{})})]})}),Object(h.jsx)(f.a,{item:!0,className:e.grid2,children:Object(h.jsx)("div",{className:e.root,children:Object(h.jsxs)(Ae,{children:[Object(h.jsx)(l.Route,{exact:!0,path:_,children:Object(h.jsx)(G,{})}),Object(h.jsx)(l.Route,{path:P,children:Object(h.jsx)(A,{})}),Object(h.jsx)(l.Route,{path:"/playlist/:playlist_id",children:Object(h.jsx)(se,{})}),Object(h.jsx)(l.Route,{path:H,children:Object(h.jsx)(He,{})}),Object(h.jsx)(l.Route,{path:B,children:Object(h.jsx)(Be,{})}),Object(h.jsx)(l.Route,{path:M,children:Object(h.jsx)(Me,{})}),Object(h.jsx)(l.Route,{path:Y,children:Object(h.jsx)(Ye,{})})]})})}),Object(h.jsx)(f.a,{item:!0,className:e.grid3,children:Object(h.jsx)(u,{})})]}),Object(h.jsx)("div",{className:e.footerControls,children:Object(h.jsx)(O,{accessToken:t,trackuri:null===o||void 0===o?void 0:o.uri})}),d?Object(h.jsx)(Ue,{}):""]})})},Je="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("fc56128a1d2e41e485c96c36ba2434ad","&redirect_uri=").concat("https://tomi-spotify.vercel.app/","&scope=").concat(["user-read-email","user-read-private","user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-modify-playback-state","user-library-read","streaming","user-library-modify","user-top-read"].join("%20"),"&response_type=token&show_dialog=true"),Xe=a.p+"static/media/spotifyicon.1d44cbaa.png",Ve=a.p+"static/media/musicbrain.852b92e5.jpg",qe=function(){var e=Object(j.a)({root:Object(p.a)({backgroundColor:x.palette.primary.dark,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100%"},x.breakpoints.down("sm"),{height:"100vh"}),img:Object(p.a)({maxWidth:"12%",margin:"0 auto"},x.breakpoints.down("sm"),{maxWidth:"35%"}),imgDiv:{display:"flex",alignItems:"center",padding:"20px 0"},contentDiv:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",margin:"5% 0"},x.breakpoints.down("sm"),{margin:"10% 0"}),loginBtn:{backgroundColor:x.palette.primary.main,padding:"13px 50px",color:x.palette.primary.white,cursor:"pointer",borderRadius:30,margin:"2% 0","&:hover":{boxShadow:"0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset"}},link:{textDecoration:"none",color:x.palette.primary.white,fontWeight:"bold"},typo:{width:"80%",textAlign:"center",color:x.palette.primary.white},signupBtn:{border:"1px solid #1DB954",padding:"13px 120px",cursor:"pointer",borderRadius:30,margin:"5% 0","&:hover":{boxShadow:"0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset"}},signLink:{color:x.palette.primary.main,fontWeight:"bold",textDecoration:"none"},musicbrain:{maxWidth:"100%"}})();return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)("div",{className:e.imgDiv,children:Object(h.jsx)("img",{src:Xe,className:e.img,alt:"spotify-icon"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("img",{src:Ve,className:e.musicbrain,alt:"spotify"}),Object(h.jsxs)("div",{className:e.contentDiv,children:[Object(h.jsx)("div",{className:e.typo,children:Object(h.jsx)(b.a,{children:"Clicking the button above will redirect you to the Spotify Login page"})}),Object(h.jsx)("div",{className:e.loginBtn,children:Object(h.jsx)("a",{className:e.link,href:Je,children:"Login With Spotify"})})]})]})};var Ke=function(){var e=Object(i.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1],n=Object(y.b)();return Object(i.useEffect)((function(){if(window.location.hash){var e=(window.location.hash,window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("="),i=Object(s.a)(a,2),r=i[0],n=i[1];return e[r]=n,e}),{})),t=e.access_token,a=e.expires_in,i=e.token_type;window.location.hash="",localStorage.clear(),localStorage.setItem("token",t),localStorage.setItem("tokenType",i),localStorage.setItem("expiresIn",a),t&&r(t),n(function(){var e=Object(L.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:a=e.sent,t({type:"FETCH_USER",payload:{User:a.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),[n]),Object(h.jsx)(d.a,{theme:x,children:Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(o.a,{children:Object(h.jsx)(l.Switch,{children:a?Object(h.jsx)(Ge,{}):Object(h.jsx)(qe,{})})})})})},Qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,255)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),i(e),r(e),n(e),c(e)}))},Ze=a(62),$e={Playlists:[],User:null,Toptracks:[],isLoading:!1,Newreleases:null,Featuredplaylists:null},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return Object(ve.a)(Object(ve.a)({},e),{},{User:t.payload.User});case"FETCH_PLAYLISTS":return Object(ve.a)(Object(ve.a)({},e),{},{Playlists:t.payload.Playlists});case"FETCH_NEWRELEASES":return Object(ve.a)(Object(ve.a)({},e),{},{Newreleases:t.payload.Newreleases});case"FETCH_FEATUREDPLAYLISTS":return Object(ve.a)(Object(ve.a)({},e),{},{Featuredplaylists:t.payload.Featuredplaylists});case"ISLOADING":return Object(ve.a)(Object(ve.a)({},e),{},{isLoading:!0});default:return e}},tt={Playlist:null},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;return"FETCH_DETAILS"===t.type?Object(ve.a)(Object(ve.a)({},e),{},{Playlist:t.payload.Playlist}):e},it=Object(Ze.b)({music:et,details:at}),rt=a(135),nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ze.c,ct=Object(Ze.d)(it,nt(Object(Ze.a)(rt.a)));c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(y.a,{store:ct,children:Object(h.jsx)(Ke,{})})}),document.getElementById("root")),Qe()}},[[188,1,2]]]);
//# sourceMappingURL=main.0b9258d0.chunk.js.map