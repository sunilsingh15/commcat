"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[375],{9375:(_,l,i)=>{i.r(l),i.d(l,{AdminModule:()=>v});var a=i(6814),u=i(9792),e=i(4946),m=i(2232),g=i(9778);function p(t,r){1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"div")(1,"div",15),e._UZ(2,"img",16),e.qZA()())}function h(t,r){1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"div")(1,"h1",17),e._uU(2,"There are no new submissions."),e.qZA()())}function b(t,r){if(1&t){const s=e.EpF();e.TgZ(0,"div",20),e._UZ(1,"img",21),e.TgZ(2,"div",22)(3,"h5",23),e._uU(4),e.qZA(),e.TgZ(5,"h5",24),e._uU(6),e.qZA(),e.TgZ(7,"span",25),e.O4$(),e.TgZ(8,"svg",26),e._UZ(9,"path",27),e.qZA(),e._uU(10),e.qZA(),e.kcU(),e.TgZ(11,"p",28)(12,"span",29),e._uU(13,"Likes: "),e.qZA(),e._uU(14),e.qZA(),e.TgZ(15,"p",28)(16,"span",29),e._uU(17,"Dislikes: "),e.qZA(),e._uU(18),e.qZA(),e.TgZ(19,"p",28)(20,"span",29),e._uU(21,"Personality: "),e.qZA(),e._uU(22),e.qZA(),e.TgZ(23,"p",30)(24,"span",29),e._uU(25,"Other: "),e.qZA(),e._uU(26),e.qZA(),e.TgZ(27,"div",31)(28,"button",32),e.NdJ("click",function(){const d=e.CHM(s).$implicit,c=e.oxw(2);return e.KtG(c.approve(d.catId))}),e.TgZ(29,"span",33),e._uU(30,"\u2714"),e.qZA(),e._uU(31," Approve"),e.qZA(),e.TgZ(32,"button",34),e.NdJ("click",function(){const d=e.CHM(s).$implicit,c=e.oxw(2);return e.KtG(c.reject(d.catId))}),e.TgZ(33,"span",33),e._uU(34,"\u2718"),e.qZA(),e._uU(35," Reject"),e.qZA()()()()}if(2&t){const s=r.$implicit;e.xp6(1),e.s9C("src",s.picture,e.LSH),e.xp6(3),e.Oqu(s.name),e.xp6(2),e.hij("",s.gender.charAt(0).toUpperCase()+s.gender.substring(1)," "),e.xp6(4),e.hij(" ",s.timestamp," "),e.xp6(4),e.Oqu(s.likes),e.xp6(4),e.hij("",s.dislikes," "),e.xp6(4),e.Oqu(s.personality),e.xp6(4),e.Oqu(s.other)}}function x(t,r){if(1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"div")(1,"div",18),e.YNc(2,b,36,8,"div",19),e.qZA()()),2&t){const s=e.oxw();e.xp6(2),e.Q6J("ngForOf",s.submissions)}}const f=[{path:"",component:(()=>{var t;class r{constructor(){this.router=(0,e.f3M)(u.F0),this.service=(0,e.f3M)(m.b),this.submissions=[],this.isLoading=!0}ngOnInit(){g.V.isAdminLoggedIn()||this.router.navigate(["/forbidden"]),this.getSub$=this.service.getSubmissions().subscribe({next:o=>{null!=o&&(this.submissions=o.map(n=>({catId:n._id,name:n.name,gender:n.gender,community:n.community,picture:n.picture,likes:n.likes,dislikes:n.dislikes,personality:n.personality,other:n.other,timestamp:n.timestamp}))),this.isLoading=!1},error:o=>{console.log(o)},complete:()=>{this.getSub$.unsubscribe()}})}approve(o){this.approveSub$=this.service.approveSubmission(o).subscribe({next:n=>{document.getElementById("approve-success-alert")?.classList.remove("hidden"),setTimeout(()=>{window.location.reload()},3e3)},error:n=>{console.log(n)},complete:()=>{this.approveSub$.unsubscribe()}})}reject(o){this.rejectSub$=this.service.rejectSubmission(o).subscribe({next:n=>{document.getElementById("reject-success-alert")?.classList.remove("hidden"),setTimeout(()=>{window.location.reload()},3e3)},error:n=>{console.log(n)},complete:()=>{this.rejectSub$.unsubscribe()}})}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],decls:33,vars:3,consts:[[1,"p-2","flex","flex-col","items-center","justify-center"],[1,"text-2xl","mt-4","md:mt-7","text-[#7f0019]"],[1,"mt-5","w-9/10","md:w-4/5","text-left"],[1,"text-xl","text-[#7f0019]"],["id","approve-success-alert","role","alert",1,"flex","items-center","p-4","mt-4","mb-4","text-green-800","rounded-lg","bg-green-50","md:w-3/5","md:mx-auto","hidden"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"flex-shrink-0","w-4","h-4"],["d","M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"],[1,"sr-only"],[1,"ml-3","text-md","font-medium"],["type","button","data-dismiss-target","#approve-success-alert","aria-label","Close",1,"ml-auto","-mx-1.5","-my-1.5","bg-green-50","text-green-500","rounded-lg","focus:ring-2","focus:ring-green-400","p-1.5","hover:bg-green-200","inline-flex","items-center","justify-center","h-8","w-8"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"w-3","h-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"],["id","reject-success-alert","role","alert",1,"flex","items-center","p-4","mt-4","mb-4","text-green-800","rounded-lg","bg-green-50","md:w-3/5","md:mx-auto","hidden"],["type","button","data-dismiss-target","#reject-success-alert","aria-label","Close",1,"ml-auto","-mx-1.5","-my-1.5","bg-green-50","text-green-500","rounded-lg","focus:ring-2","focus:ring-green-400","p-1.5","hover:bg-green-200","inline-flex","items-center","justify-center","h-8","w-8"],[4,"ngIf"],[1,"text-center"],["src","assets/loading.gif","alt","Loading..."],[1,"mt-10","text-2xl","text-center"],[1,"flex","flex-wrap","mb-5"],["class","max-w-sm border border-[#7f0019] rounded-lg shadow mt-3 md:w-1/3 md:mr-5",4,"ngFor","ngForOf"],[1,"max-w-sm","border","border-[#7f0019]","rounded-lg","shadow","mt-3","md:w-1/3","md:mr-5"],["alt","",1,"rounded-t-lg",3,"src"],[1,"p-3","pt-2","md:pt-2"],[1,"text-xl","font-bold","text-gray-900"],[1,"text-md","text-gray-500"],[1,"text-gray-800","text-xs","font-medium","inline-flex","items-center","px-2.5","py-0.5","rounded","mr-2","mb-8","border","border-[#7f0019]"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-2.5","h-2.5","mr-1.5"],["d","M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"],[1,"mb-3","font-normal","text-gray-700"],[1,"text-[#7f0019]"],[1,"mb-6","font-normal","text-gray-700"],[1,"flex","justify-center"],["type","button",1,"focus:outline-none","text-white","bg-green-700","hover:bg-green-800","focus:ring-2","focus:ring-green-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","mr-2",3,"click"],[1,"text-lg"],["type","button",1,"focus:outline-none","text-white","bg-red-700","hover:bg-red-800","focus:ring-2","focus:ring-red-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","mr-2",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2,"Dashboard"),e.qZA(),e.TgZ(3,"div",2)(4,"h2",3),e._uU(5,"Submissions"),e.qZA(),e.TgZ(6,"div",4),e.O4$(),e.TgZ(7,"svg",5),e._UZ(8,"path",6),e.qZA(),e.kcU(),e.TgZ(9,"span",7),e._uU(10,"Info"),e.qZA(),e.TgZ(11,"div",8),e._uU(12," Submission approved. "),e.qZA(),e.TgZ(13,"button",9)(14,"span",7),e._uU(15,"Close"),e.qZA(),e.O4$(),e.TgZ(16,"svg",10),e._UZ(17,"path",11),e.qZA()()(),e.kcU(),e.TgZ(18,"div",12),e.O4$(),e.TgZ(19,"svg",5),e._UZ(20,"path",6),e.qZA(),e.kcU(),e.TgZ(21,"span",7),e._uU(22,"Info"),e.qZA(),e.TgZ(23,"div",8),e._uU(24," Submission rejected. "),e.qZA(),e.TgZ(25,"button",13)(26,"span",7),e._uU(27,"Close"),e.qZA(),e.O4$(),e.TgZ(28,"svg",10),e._UZ(29,"path",11),e.qZA()()(),e.YNc(30,p,3,0,"div",14),e.YNc(31,h,3,0,"div",14),e.YNc(32,x,3,1,"div",14),e.qZA()()),2&o&&(e.xp6(30),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("ngIf",!(n.isLoading||n.submissions.length>0)),e.xp6(1),e.Q6J("ngIf",!n.isLoading&&n.submissions.length>0))},dependencies:[a.sg,a.O5]}),r})(),title:"Dashboard | Commcat"}];let Z=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(f),u.Bz]}),r})(),v=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,Z]}),r})()}}]);