var ViewModel=function(){title=ko.observable(""),this.showMenu=function(){console.log("click"),$list=$(".header-navbar-list"),$menuCover=$(".menuCover")||void 0,$aboutMe=$(".contact-about")||void 0,$list.css("display","block"===$list.css("display")?"":"block"),$menuCover.css("display","none"===$menuCover.css("display")?"":"none")},this.showCredit=function(){$credit=$(".credit"),console.log("click"),$credit.css("display","block"===$credit.css("display")?"":"block")},this.titleSwitch=function(e){switch(e){case"linkedin":title("Let's connect");break;case"email":title("Email me");break;case"git":title("Fork me");break;case"none":title("")}}};ko.applyBindings(new ViewModel);