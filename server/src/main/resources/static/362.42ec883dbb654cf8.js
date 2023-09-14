"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[362],{362:(k,p,m)=>{m.r(p),m.d(p,{UserModule:()=>F});var u=m(6814),a=m(9792),e=m(4946),f=m(9862),l=m(9778);let c=(()=>{var t;class s{constructor(r){this.http=r}getThreads(){return this.http.get("/api/forums/threads")}postNewThread(r){const o={id:"",username:l.V.getUser().name,title:r.value.title,text:r.value.text,timestamp:"",comments:[]};return this.http.post("/api/forums/thread",o)}getThread(r){let o=(new f.LE).set("id",r);return this.http.get("/api/forums/thread",{params:o})}postComment(r,o){const d={id:r,username:l.V.getUser().name,text:o,timestamp:""};return this.http.post(`/api/forums/thread/${r}`,d)}}return(t=s).\u0275fac=function(r){return new(r||t)(e.LFG(f.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),s})();function h(t,s){1&t&&(e.TgZ(0,"div")(1,"div",8),e._UZ(2,"img",9),e.qZA()())}function g(t,s){1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"span"),e._uU(1,"reply "),e.qZA())}function x(t,s){1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"span"),e._uU(1,"replies"),e.qZA())}const b=function(t){return["/forums",t]},Z=function(t){return["/forums/",t]};function w(t,s){if(1&t&&(e.TgZ(0,"div",10)(1,"div",11)(2,"p",12)(3,"a",13),e._uU(4),e.qZA()(),e.TgZ(5,"p",14)(6,"span",15),e.O4$(),e.TgZ(7,"svg",16),e._UZ(8,"path",17),e.qZA(),e.kcU(),e.TgZ(9,"span",18),e._uU(10,"Poster"),e.qZA()(),e._uU(11),e.qZA(),e.TgZ(12,"p")(13,"span",19),e.O4$(),e.TgZ(14,"svg",20),e._UZ(15,"path",21),e.qZA(),e._uU(16),e.qZA()(),e.kcU(),e.TgZ(17,"p",22),e.O4$(),e.TgZ(18,"svg",23),e._UZ(19,"path",24),e.qZA(),e._uU(20),e.YNc(21,g,2,0,"span",6),e.YNc(22,x,2,0,"span",6),e.qZA()(),e.kcU(),e.TgZ(23,"div",11)(24,"a",25)(25,"button",5),e._uU(26,"View"),e.qZA()()()()),2&t){const n=s.$implicit;e.xp6(3),e.Q6J("routerLink",e.VKq(8,b,n.id)),e.xp6(1),e.Oqu(n.title),e.xp6(7),e.hij(" ",n.username,""),e.xp6(5),e.hij(" ",n.timestamp," "),e.xp6(4),e.hij(" ",n.comments,"\xa0 "),e.xp6(1),e.Q6J("ngIf",1==n.comments),e.xp6(1),e.Q6J("ngIf",1!=n.comments),e.xp6(2),e.Q6J("routerLink",e.VKq(10,Z,n.id))}}let v=(()=>{var t;class s{constructor(){this.isLoading=!0,this.threads=[],this.service=(0,e.f3M)(c),this.router=(0,e.f3M)(a.F0)}ngOnInit(){l.V.isUserLoggedIn()||this.router.navigate(["/forbidden"]),this.threadsSub$=this.service.getThreads().subscribe({next:r=>{null!=r&&(this.threads=r.map(o=>({id:o._id,username:o.username,title:o.title,comments:o.comments,timestamp:o.timestamp})),this.isLoading=!1)},error:r=>{console.log(r)},complete:()=>{this.threadsSub$.unsubscribe()}})}}return(t=s).\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-forums"]],decls:11,vars:2,consts:[[1,"p-2","flex","flex-col","items-center","justify-center"],[1,"text-2xl","mt-4","md:mt-7","text-[#7f0019]"],[1,"mt-5","mb-10","w-9/10","md:w-4/5","flex","flex-col","md:flex-row","items-center","md:justify-between"],[1,"text-xl","text-[#7f0019]"],["routerLink","/forums/new"],["type","button",1,"text-white","bg-[#7f0019]","rounded-lg","text-md","px-5","py-2.5","mt-2","mr-2","mb-2"],[4,"ngIf"],["class","flex flex-col md:flex-row justify-between border rounded-lg border-[#7f0019] w-5/6 md:w-9/12 p-3 mb-5",4,"ngFor","ngForOf"],[1,"text-center"],["src","assets/loading.gif","alt","Loading..."],[1,"flex","flex-col","md:flex-row","justify-between","border","rounded-lg","border-[#7f0019]","w-5/6","md:w-9/12","p-3","mb-5"],[1,""],[1,"bold","text-2xl"],[1,"hover:underline",3,"routerLink"],[1,"text-md"],[1,"inline-flex","items-center","justify-center","w-6","h-6","text-sm","font-semibold","text-gray-800","rounded-full"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-3","h-3"],["d","M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"],[1,"sr-only"],[1,"text-gray-800","text-sm","font-medium","inline-flex","items-center","px-1.5","py-0.5","rounded","mr-2","mb-4"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-2.5","h-2.5","mr-2.5"],["d","M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"],[1,"flex","flex-row"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 18",1,"w-5","h-5","text-gray-800","mr-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"],[3,"routerLink"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2,"Forums"),e.qZA(),e.TgZ(3,"div",2)(4,"h2",3),e._uU(5,"Threads"),e.qZA(),e.TgZ(6,"a",4)(7,"button",5),e._uU(8,"New Thread"),e.qZA()()(),e.YNc(9,h,3,0,"div",6),e.YNc(10,w,27,12,"div",7),e.qZA()),2&r&&(e.xp6(9),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("ngForOf",o.threads))},dependencies:[u.sg,u.O5,a.rH]}),s})();var i=m(95);let T=(()=>{var t;class s{constructor(){this.builder=(0,e.f3M)(i.qu),this.service=(0,e.f3M)(c),this.router=(0,e.f3M)(a.F0)}ngOnInit(){this.newThreadForm=this.initializeForm()}initializeForm(){return this.builder.group({title:this.builder.control("",[i.kI.required,i.kI.minLength(5)]),text:this.builder.control("",[i.kI.required,i.kI.minLength(5)])})}addThread(){this.sub$=this.service.postNewThread(this.newThreadForm).subscribe({next:r=>{this.router.navigate(["/forums"])},error:r=>{console.log(r)},complete:()=>{this.sub$.unsubscribe()}})}}return(t=s).\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-new-thread"]],decls:24,vars:2,consts:[[1,"flex","flex-col","items-center","justify-center","h-full"],[1,"text-center","p-5"],[1,"text-3xl","text-[#7f0019]","mt-8"],["routerLink","/forums"],["type","button",1,"text-white","bg-[#7f0019]","rounded-lg","text-md","px-5","py-2.5","mt-2","mr-2"],[1,"mt-5"],[1,"w-11/12"],[1,"flex","flex-col","items-center","justify-center","mx-auto"],[1,"w-full","border","border-[#7f0019]","rounded-lg","shadow","md:mt-0","sm:max-w-md","md:w-4/5","xl:p-0"],[1,"p-6","space-y-4","md:space-y-6","sm:p-8"],[1,"space-y-4","md:space-y-6",3,"formGroup","ngSubmit"],["for","title",1,"block","mb-2","text-md","font-medium","text-gray-900"],["formControlName","title","type","text","name","title","id","title",1,"bg-gray-50","border","border-[#7f0019]","text-gray-900","text-md","sm:text-sm","rounded-lg","focus:ring-[#7f0019]","focus:border-[#7f0019]","block","w-full","p-2.5"],[1,"mb-6","mt-3"],["for","likes",1,"block","mb-2","text-md","font-medium","text-gray-900"],["formControlName","text","rows","5",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-[#7f0019]","focus:ring-[#7f0019]","focus:border-[#7f0019]"],["type","submit",1,"w-full","text-white","bg-[#7f0019]","font-medium","rounded-lg","text-md","px-5","py-2.5","text-center","disabled:bg-gray-200",3,"disabled"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),e._uU(3,"Post New Thread"),e.qZA(),e.TgZ(4,"a",3)(5,"button",4),e._uU(6,"Back"),e.qZA()(),e.TgZ(7,"p",5),e._uU(8,"Be nice to your fellow forum members. No profanities, please! "),e.qZA()(),e.TgZ(9,"section",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"form",10),e.NdJ("ngSubmit",function(){return o.addThread()}),e.TgZ(14,"div")(15,"label",11),e._uU(16,"Title"),e.qZA(),e._UZ(17,"input",12),e.qZA(),e.TgZ(18,"div",13)(19,"label",14),e._uU(20,"Text"),e.qZA(),e._UZ(21,"textarea",15),e.qZA(),e.TgZ(22,"button",16),e._uU(23,"Post"),e.qZA()()()()()()()),2&r&&(e.xp6(13),e.Q6J("formGroup",o.newThreadForm),e.xp6(9),e.Q6J("disabled",o.newThreadForm.invalid))},dependencies:[a.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]}),s})();var U=m(6593);const _=["comment"];function y(t,s){1&t&&(e.TgZ(0,"div"),e._UZ(1,"img",24),e.qZA())}function A(t,s){if(1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"div",25)(1,"p",9),e._uU(2),e.qZA(),e.TgZ(3,"p",10)(4,"span",11),e.O4$(),e.TgZ(5,"svg",12),e._UZ(6,"path",13),e.qZA(),e.kcU(),e.TgZ(7,"span",14),e._uU(8,"Poster"),e.qZA()(),e._uU(9),e.qZA(),e.TgZ(10,"p")(11,"span",15),e.O4$(),e.TgZ(12,"svg",16),e._UZ(13,"path",17),e.qZA(),e._uU(14),e.qZA()()()),2&t){const n=s.$implicit;e.xp6(2),e.Oqu(n.text),e.xp6(7),e.hij(" ",n.username," "),e.xp6(5),e.hij(" ",n.timestamp," ")}}const q=[{path:"",component:v,title:"Forums | Commcat"},{path:"new",component:T,title:"New Thread | Commcat"},{path:":threadId",component:(()=>{var t;class s{constructor(){this.activatedRoute=(0,e.f3M)(a.gz),this.service=(0,e.f3M)(c),this.router=(0,e.f3M)(a.F0),this.threadId=this.activatedRoute.snapshot.params.threadId,this.isLoading=!0,this.title=(0,e.f3M)(U.Dx),this.thread={id:"",username:"",title:"",text:"",timestamp:"",comments:[]}}ngOnInit(){this.threadSub$=this.service.getThread(this.threadId).subscribe({next:r=>{this.thread.title=r.title,this.thread.text=r.text,this.thread.username=r.username,this.thread.timestamp=r.timestamp,this.thread.comments=r.comments.map(o=>({id:o._id,username:o.username,text:o.text,timestamp:o.timestamp})),this.title.setTitle(this.thread.title+" | Commcat"),this.isLoading=!1},error:r=>{console.log(r)},complete:()=>{this.threadSub$.unsubscribe()}})}postComment(){this.commentSub$=this.service.postComment(this.threadId,this.comment.nativeElement.value).subscribe({next:r=>{window.location.reload()},error:r=>{console.log(r)},complete:()=>{this.commentSub$.unsubscribe()}})}}return(t=s).\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-thread"]],viewQuery:function(r,o){if(1&r&&e.Gf(_,5),2&r){let d;e.iGM(d=e.CRH())&&(o.comment=d.first)}},decls:34,vars:6,consts:[[1,"p-2","flex","flex-col","items-center","justify-center"],[1,"mt-5","mb-10","w-9/10","md:w-4/5","flex","flex-col"],[1,"text-xl","text-[#7f0019]"],["routerLink","/forums",1,"mt-1"],["type","button","routerLink","",1,"text-white","bg-[#7f0019]","rounded-lg","text-xs","px-5","py-2.5","mr-2","mb-2"],[4,"ngIf"],[1,"flex","flex-col","md:flex-row","justify-between","border","rounded-lg","border-[#7f0019]","w-11/12","md:w-9/12","p-3","mb-5"],[1,""],[1,"bold","text-2xl","mb-4"],[1,"text-md","text-gray-700","mb-9"],[1,"text-md"],[1,"inline-flex","items-center","justify-center","w-6","h-6","text-sm","font-semibold","text-gray-800","rounded-full"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-3","h-3"],["d","M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"],[1,"sr-only"],[1,"text-gray-800","text-sm","font-medium","inline-flex","items-center","px-1.5","py-0.5","rounded","mr-2"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-2.5","h-2.5","mr-2.5"],["d","M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"],["class","flex flex-col border rounded-lg border-[#7f0019] w-10/12 md:w-2/3 p-3 mb-5",4,"ngFor","ngForOf"],[1,"mb-6","mt-3","w-3/4","md:w-1/4"],["for","addComment",1,"block","mb-2","text-xl","font-medium","text-[#7f0019]"],["rows","4",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-[#7f0019]","focus:ring-[#7f0019]","focus:border-[#7f0019]"],["comment",""],["type","button",1,"text-white","bg-[#7f0019]","rounded-lg","text-md","px-5","py-2.5","mr-2","mb-2","mt-3",3,"click"],["src","assets/loading.gif","alt","Loading..."],[1,"flex","flex-col","border","rounded-lg","border-[#7f0019]","w-10/12","md:w-2/3","p-3","mb-5"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3,"Thread"),e.qZA(),e.TgZ(4,"a",3)(5,"button",4),e._uU(6,"\u2190 Back"),e.qZA()()(),e.YNc(7,y,2,0,"div",5),e.TgZ(8,"div",6)(9,"div",7)(10,"p",8),e._uU(11),e.qZA(),e.TgZ(12,"p",9),e._uU(13),e.qZA(),e.TgZ(14,"p",10)(15,"span",11),e.O4$(),e.TgZ(16,"svg",12),e._UZ(17,"path",13),e.qZA(),e.kcU(),e.TgZ(18,"span",14),e._uU(19,"Poster"),e.qZA()(),e._uU(20),e.qZA(),e.TgZ(21,"p")(22,"span",15),e.O4$(),e.TgZ(23,"svg",16),e._UZ(24,"path",17),e.qZA(),e._uU(25),e.qZA()()()(),e.YNc(26,A,15,3,"div",18),e.kcU(),e.TgZ(27,"div",19)(28,"label",20),e._uU(29,"Add a Comment"),e.qZA(),e._UZ(30,"textarea",21,22),e.TgZ(32,"button",23),e.NdJ("click",function(){return o.postComment()}),e._uU(33,"Submit"),e.qZA()()()),2&r&&(e.xp6(7),e.Q6J("ngIf",o.isLoading),e.xp6(4),e.hij(" ",o.thread.title," "),e.xp6(2),e.Oqu(o.thread.text),e.xp6(7),e.hij(" ",o.thread.username," "),e.xp6(5),e.hij(" ",o.thread.timestamp," "),e.xp6(1),e.Q6J("ngForOf",o.thread.comments))},dependencies:[u.sg,u.O5,a.rH]}),s})()}];let C=(()=>{var t;class s{}return(t=s).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(q),a.Bz]}),s})(),F=(()=>{var t;class s{}return(t=s).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,C,i.UX]}),s})()}}]);