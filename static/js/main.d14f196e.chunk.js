(this.webpackJsonpexperiment=this.webpackJsonpexperiment||[]).push([[0],{14:function(t,i,e){},16:function(t,i,e){"use strict";e.r(i);var h=e(0),o=e.n(h),n=e(6),s=e.n(n),a=(e(14),e(1)),r=e(2),l=e(8),c=e(7),d=e(4),u=e(3),g=e.n(u),p=function(){function t(i,e,h){Object(a.a)(this,t),this.pos=h.createVector(i,e),this.angle=Math.atan2(this.pos.y-window.innerHeight/2,this.pos.x-window.innerWidth/2),this.size=h.random(1,6)}return Object(r.a)(t,[{key:"update",value:function(t){this.pos.add(t.createVector(-1*this.size,0).rotate(this.angle))}},{key:"display",value:function(t){this.update(t),t.push(),t.fill(255,255,255),t.noStroke(),t.circle(this.pos.x,this.pos.y,this.size),t.pop()}}]),t}(),w=function(t){if(Math.abs(window.innerHeight/2-t.pos.y)<10&&Math.abs(window.innerWidth/2-t.pos.x)<10)return!0},f=function(){function t(i,e){Object(a.a)(this,t),this.x=i,this.y=e,this.size=1,this.grow=!0}return Object(r.a)(t,[{key:"display",value:function(t){t.push(),t.noStroke(),t.fill(60,63,88),t.circle(this.x-(t.width/2-t.mouseX)/20,this.y-(t.height/2-t.mouseY)/20,this.size),t.pop(),this.size>100&&(t.push(),t.noStroke(),t.fill(255),t.arc(t.width/2-(t.width/2-t.mouseX)/20,t.height/2-(t.height/2-t.mouseY)/20,this.size,this.size-100,t.PI,t.PI),t.pop()),this.size>150&&(t.push(),t.noStroke(),t.fill(59,186,156),t.circle(t.width/2-(t.width/2-t.mouseX)/10,t.height/2-(t.height/2-t.mouseY)/10,(this.size-150)/1.1),t.fill(51,51,51),t.circle(t.width/2-(t.width/2-t.mouseX)/8,t.height/2-(t.height/2-t.mouseY)/8,(this.size-150)/3),t.pop()),this.size>250&&(this.size=250),this.size<0&&(this.size=0)}}]),t}(),m=function(){function t(i,e,h,o){Object(a.a)(this,t),this.pos=o.createVector(i,e),this.size=h,this.speed=Math.ceil(o.random(5,9))}return Object(r.a)(t,[{key:"update",value:function(t){this.pos.add(t.createVector(0,this.speed))}},{key:"display",value:function(t){this.update(t),t.push(),t.noStroke(),t.fill(46,48,71),t.circle(this.pos.x,this.pos.y,2*this.size),t.pop()}}]),t}(),v=function(){function t(i,e,h){Object(a.a)(this,t),this.height=0,this.c1=h.color(i[0],i[1],i[2]),this.c2=h.color(e[0],e[1],e[2]),this.rising=!1,this.loopBreaker=!1}return Object(r.a)(t,[{key:"update",value:function(t,i){var e=this;i!==this.rising&&i!==this.loopBreaker&&(setTimeout((function(){e.rising=!e.rising}),1500),this.loopBreaker=!this.loopBreaker),this.height<t.height/2&&!0===this.rising&&(this.height+=2,T.setHeight(2))}},{key:"display",value:function(t,i){this.update(t,i),t.push(),t.noFill();for(var e=t.height;e>=t.height-this.height;e--){var h=t.map(e,t.height,t.height-this.height,0,1),o=t.lerpColor(this.c1,this.c2,h);t.stroke(o),t.line(0,e,t.width,e)}t.pop()}}]),t}(),y=function(){function t(i,e,h,o,n){Object(a.a)(this,t),this.size=i,this.color=e,this.x=h,this.y=o,this.stoppingPoint=n,this.splashed=!1}return Object(r.a)(t,[{key:"update",value:function(t){this.y<t.height-this.stoppingPoint?this.y+=10:this.splashed=!0}},{key:"display",value:function(t){this.update(t),t.push(),t.stroke(255),t.translate(this.x,this.y),t.scale(this.size),t.beginShape(),t.strokeWeight(1),t.vertex(0,-5),t.quadraticVertex(3,0,0,1),t.quadraticVertex(-3,0,0,-5),t.endShape(t.CLOSE),t.pop()}}]),t}(),b=function(){function t(i,e,h,o,n,s){Object(a.a)(this,t),this.file=i,this.x=e,this.y=h,this.w=o,this.h=n,this.speed=s}return Object(r.a)(t,[{key:"update",value:function(t){this.x<t.width?this.x+=this.speed:this.x=-1*this.w}},{key:"display",value:function(t){this.update(t),t.push(),t.image(this.file,this.x,this.y,this.w,this.h),t.pop()}}]),t}(),k=function(){function t(i,e,h,o,n){Object(a.a)(this,t),this.projectName=i.toLowerCase(),this.x=.62*e.width,this.w=0,this.h=0,this.font=h,this.image=o,this.text=n}return Object(r.a)(t,[{key:"display",value:function(t){t.push(),t.translate(-.075*t.width,-.075*t.width),t.image(this.image,this.x,.325*t.height,.15*t.width,.15*t.width),t.pop(),t.push(),t.noStroke(),t.textAlign(t.CENTER,t.TOP),t.textFont(this.font),t.textSize(t.width/80),t.fill(46,48,71),t.translate(-.125*t.width,0),t.text(this.text,this.x,.525*t.height,.25*t.width,.25*t.width),t.pop()}}]),t}(),x=function(){function t(i,e){Object(a.a)(this,t),this.files=e,this.fileNum=0,this.x=.85*i.width,this.y=.85*i.height,this.w=.22*i.height,this.h=.2*i.height,this.time=0,this.count=12,this.dir="left"}return Object(r.a)(t,[{key:"update",value:function(t){this.time>this.count&&(this.time=0,5===this.fileNum&&(this.dir="right"),0===this.fileNum&&(this.dir="left"),"right"===this.dir&&this.fileNum--,"left"===this.dir&&this.fileNum++),R.kraken=t.dist(t.mouseX,t.mouseY,this.x,this.y)}},{key:"display",value:function(t){this.update(t),this.time+=1,t.push(),t.translate(-.1*t.height,-.1*t.height),t.image(this.files[this.fileNum],this.x,this.y,this.w,this.h),t.pop()}}]),t}(),O=function(){function t(i,e,h){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;Object(a.a)(this,t),this.x=i,this.y=e,this.size=h,this.opacity=255,this.origY=e,this.speed=o}return Object(r.a)(t,[{key:"update",value:function(t){this.y-=this.speed,this.size+=.05,this.opacity-=1}},{key:"display",value:function(t){this.update(t),this.size>0&&(t.push(),t.noStroke(),t.fill(255,255,255,this.opacity),t.circle(this.x,this.y,this.size),t.pop())}}]),t}(),z=function(){function t(i,e,h,o,n,s,r,l){Object(a.a)(this,t),this.file=i,this.x=e,this.y=h,this.w=o,this.h=n,this.speed=s,this.angle=0,this.angleDir="up",this.bubbles=[],this.time=l.random(-300),this.count=300,this.swimDir=r}return Object(r.a)(t,[{key:"makeBubble",value:function(t,i,e){this.bubbles.push(new O(t,i,0))}},{key:"update",value:function(t){"right"===this.swimDir?this.x<t.width?this.x+=this.speed:this.x=-1*this.w:this.x>-this.w?this.x-=this.speed:this.x=t.width,this.angle>2&&(this.angleDir="up"),this.angle<-2&&(this.angleDir="down"),"up"===this.angleDir&&(this.angle-=.075),"down"===this.angleDir&&(this.angle+=.075),this.time+=1,this.time>this.count&&(3===this.bubbles.length?this.time=0:(this.time-=t.random(10,30),"right"===this.swimDir?this.makeBubble(this.x+this.w,this.y+.75*this.h,t):this.makeBubble(this.x,this.y+.75*this.h,t)))}},{key:"display",value:function(t){this.update(t),this.bubbles=this.bubbles.filter((function(i){return i.y>i.origY-t.height})),this.bubbles.forEach((function(i){i.display(t)})),t.push(),t.translate(this.x,this.y),t.angleMode(t.DEGREES),t.rotate(this.angle),t.image(this.file,0,0,this.w,this.h),t.pop()}}]),t}(),E=function(){function t(i,e,h,o,n,s,r,l){Object(a.a)(this,t),this.x=e,this.y=h,this.size=o,this.color=n,this.str=i,this.time=r,this.font=s,this.hovering=!1,this.hilighted=!1,this.hilightable=l}return Object(r.a)(t,[{key:"update",value:function(t){this.time+=2}},{key:"display",value:function(t){if(this.update(t),t.push(),t.textFont(this.font),t.translate(this.str.length*(this.size/3)*-1,0),t.translate(t.mouseX/(100-this.size),t.mouseY/(100-this.size)),this.hilightable){for(var i=0;i<this.str.length;i++){var e=this.x+i*this.size/1.5;t.dist(t.mouseX,t.mouseY,e,this.y)<15&&(this.hovering=!0,I.hovering=this.str),this.hovering?this.hilighted=!0:this.hilighted=!1}I.hovering!==this.str||this.hovering||(I.hovering=!1),this.hovering=!1}for(var h=0;h<this.str.length;h++)if(this.time>3*h){var o=this.x+h*this.size/1.5,n=t.dist(t.mouseX,t.mouseY,o,this.y);t.textSize(this.size),this.hilighted?t.fill(59,186,156,Math.max(255-n/2,100)):t.fill(this.color[0],this.color[1],this.color[2],Math.max(255-n/2,100)),t.noStroke(),t.text(this.str[h],o,this.y)}t.pop()}}]),t}(),I={hovering:!1},j=function(t){var i,e,h={},o={},n=[],s={},a="closed",r=[],l=[],c=!1;t.setup=function(){t.createCanvas(window.innerWidth,window.innerHeight),i=t.loadImage("".concat("/portfolio02","/kraken/body.png")),e=t.loadImage("".concat("/portfolio02","/statue.png")),h={one:t.loadImage("".concat("/portfolio02","/coral/coral01.png")),two:t.loadImage("".concat("/portfolio02","/coral/coral02.png"))},o={one:t.loadImage("".concat("/portfolio02","/fish/01.png")),two:t.loadImage("".concat("/portfolio02","/fish/02.png")),three:t.loadImage("".concat("/portfolio02","/fish/03.png")),four:t.loadImage("".concat("/portfolio02","/fish/04.png"))},s={closed:t.loadImage("".concat("/portfolio02","/treasure/closed.png")),open:t.loadImage("".concat("/portfolio02","/treasure/open.png"))},n=[new z(o.one,100,.75*t.height,.1*t.width,.05*t.width,1.2,"right",t),new z(o.two,t.width/2,.1*t.height,.1*t.width,.05*t.width,.75,"left",t),new z(o.three,.25*t.width,.3*t.height,.075*t.width,.0375*t.width,.5,"right",t),new z(o.four,t.width,.58*t.height,.15*t.width,.1*t.width,.7,"left",t)];var a=t.loadFont("".concat("/portfolio02","/typewriterFont.ttf"));l=[new E("Drop Me A Line",.5*t.width,.25*t.height,50,[255,255,255],a,0,!1),new E("robert@foxs.com",.5*t.width,.35*t.height,30,[255,255,255],a,-25,!1),new E("github",.5*t.width,.42*t.height,30,[255,255,255],a,-50,!0),new E("linkedin",.5*t.width,.49*t.height,30,[255,255,255],a,-75,!0)]},t.draw=function(){window.scrollY>1.15*t.height&&(t.clear(),t.push(),t.translate(-250,-70),t.image(i,.85*t.width,0,400,400),t.pop(),t.push(),t.rotate(-4),t.translate(-.08*t.height,-.5*t.height),t.image(e,.125*t.width,t.height,.16*t.height,.5*t.height),t.pop(),t.push(),t.translate(0,-.15*t.width),t.image(h.one,0,t.height,.33*t.width,.15*t.width),t.pop(),t.push(),t.translate(-.33*t.width,-.15*t.width),t.image(h.two,t.width,t.height,.33*t.width,.15*t.width),t.pop(),t.push(),t.translate(-.1*t.width,-.2*t.width),t.image(s[a],t.width/2,t.height,t.width/5,t.width/5),t.pop(),n.forEach((function(i){i.display(t)})),(r=r.filter((function(t){return t.opacity>0}))).forEach((function(i){i.display(t)})),c&&l.forEach((function(i){i.display(t)})))},t.mouseClicked=function(){if(t.mouseX>.4*t.width&&t.mouseX<.6*t.width&&t.mouseY>.7*t.height)if("closed"===a){a="open",c="true";for(var i=0;i<20;i++)r.push(new O(.5*t.width+t.random(-100,100),t.height-t.random(100,200),t.random(0,10),t.random(1,2)))}else a="closed";"linkedin"===I.hovering&&window.open("https://www.linkedin.com/in/robert-fox-1b341996/"),"github"===I.hovering&&window.open("https://www.github.com/robertjfox")}},S={},Y=function(t){var i=t.live,e=Object(h.useState)(i),n=Object(d.a)(e,2),s=n[0],a=n[1],r=o.a.createRef();return Object(h.useEffect)((function(){S.toggle=function(){console.log("toggle contact page"),a(!s)},s&&new g.a(j,r.current)})),s?o.a.createElement("div",{id:"contact",ref:r}):o.a.createElement("div",null)},M={selected:null,hovering:!1},T={height:0,setHeight:function(t){this.height+=t}},W={fitminded:"FitMinded is a social media application that connects individuals with similar athletic interests.",revyou:"RevYou is a productivity app for creating and maintaining habits.",youtuba:"YouTuba is an ecommerce platform for selling musical intruments",geometry:"Geometry Wars is a browser game inspired by a childhood favorite."},R={kraken:1/0,faucet:null},C=function(t){var i,e,h,o,n=!1,s=0,a=10,r=[],l=[],c=[],d={},u=null,g={},p=[],w=!1,f=!1,m=!1;window.innerWidth<=600&&(m=!0),t.setup=function(){var n=1;m&&(n=2),t.createCanvas(window.innerWidth,window.innerHeight),e=t.loadImage("".concat("/portfolio02","/faucet.png")),h=t.loadFont("".concat("/portfolio02","/typewriterFont.ttf")),d={one:t.loadImage("".concat("/portfolio02","/clouds/cloud01.png")),two:t.loadImage("".concat("/portfolio02","/clouds/cloud02.png")),three:t.loadImage("".concat("/portfolio02","/clouds/cloud03.png")),four:t.loadImage("".concat("/portfolio02","/clouds/cloud04.png")),five:t.loadImage("".concat("/portfolio02","/clouds/cloud05.png")),six:t.loadImage("".concat("/portfolio02","/clouds/cloud06.png")),seven:t.loadImage("".concat("/portfolio02","/clouds/cloud07.png")),eight:t.loadImage("".concat("/portfolio02","/clouds/cloud08.png"))},p=[t.loadImage("".concat("/portfolio02","/kraken/0.png")),t.loadImage("".concat("/portfolio02","/kraken/1.png")),t.loadImage("".concat("/portfolio02","/kraken/2.png")),t.loadImage("".concat("/portfolio02","/kraken/3.png")),t.loadImage("".concat("/portfolio02","/kraken/4.png")),t.loadImage("".concat("/portfolio02","/kraken/5.png"))],c=[new b(d.one,100,t.height/6,260/n,85/n,1/n),new b(d.one,.66*t.width,0,340/n,120/n,.9/n),new b(d.two,t.width/2,t.height/6*1.5,150/n,40/n,.5/n),new b(d.three,t.width/3,t.height/6*2,210/n,70/n,.9/n),new b(d.four,t.width/4,t.height/15,210/n,70/n,.8/n),new b(d.four,t.width-100,t.height/4,240/n,90/n,.6/n),new b(d.five,t.width/2.5,t.height/6*1.7,100/n,33/n,.3/n),new b(d.six,t.width/10,t.height/6*2.2,100/n,33/n,.4/n),new b(d.seven,t.width/1.7,t.height/6*2.4,110/n,40/n,.6/n),new b(d.eight,0,t.height/8,80/n,25/n,.5/n),new b(d.eight,.75*t.width,t.height/4,100/n,33/n,.2/n)],m?(i=new v([67,69,92],[137,144,172],t),l=[new D("WORK SAMPLES:",t.width/8,.08*t.height,t.width/12,[255,255,255],h,0,!1),new D(" - REVYOU",t.width/8,.18*t.height,t.width/15,[255,255,255],h,-25,!0),new D(" - FITMINDED",t.width/8,.24*t.height,t.width/15,[255,255,255],h,-50,!0),new D(" - YOUTUBA",t.width/8,.3*t.height,t.width/15,[255,255,255],h,-75,!0),new D(" - GEOMETRY WARS",t.width/8,.36*t.height,t.width/15,[255,255,255],h,-100,!0)],g.fitminded=t.loadImage("".concat("/portfolio02","/workSamples/fitminded.png")),o=new x(t,p)):(i=new v([67,69,92],[137,144,172],t),e=t.loadImage("".concat("/portfolio02","/faucet.png")),h=t.loadFont("".concat("/portfolio02","/typewriterFont.ttf")),l=[new D("WORK SAMPLES:",t.width/8,t.height/10*2,t.width/30,[255,255,255],h,0,!1),new D(" - REVYOU",t.width/7,t.height/10*3.5,t.width/40,[255,255,255],h,-25,!0),new D(" - FITMINDED",t.width/7,t.height/10*4.5,t.width/40,[255,255,255],h,-50,!0),new D(" - YOUTUBA",t.width/7,t.height/10*5.5,t.width/40,[46,48,71],h,-75,!0),new D(" - GEOMETRY WARS",t.width/7,t.height/10*6.5,t.width/40,[46,48,71],h,-100,!0)],g.fitminded=t.loadImage("".concat("/portfolio02","/workSamples/fitminded.png")),g.revyou=t.loadImage("".concat("/portfolio02","/workSamples/revyou.png")),g.youtuba=t.loadImage("".concat("/portfolio02","/workSamples/youtuba.png")),g.geometry=t.loadImage("".concat("/portfolio02","/workSamples/geometry.png")),o=new x(t,p))},t.draw=function(){if(window.scrollY>100&&window.scrollY<2.15*t.height){t.background(46,48,71),c.forEach((function(i){i.display(t)})),i.display(t,n),t.push(),m?(t.translate(t.width/4*-1,t.width/4*-1),t.image(e,t.width,t.height/4,t.width/3,t.width/4)):(t.translate(t.width/7*-1,t.width/20*-1),t.image(e,t.width,t.height/4,t.width/6,t.width/8)),t.pop(),n&&(s+=1)>a&&T.height<t.height/2-10&&(console.log(t.height/2),a+=t.random(3,5),m?r.push(new y(t.random(2,6),255,.75*t.width+10+t.random(-8,8),.27*t.height,T.height)):r.push(new y(t.random(2,6),255,t.width-t.width/7+10+t.random(-8,8),t.height/4+t.width/8-t.width/20,T.height)));for(var h=0;h<r.length;h++){var d=r[h];!0===d.splashed?(r.splice(h,1),h--):d.display(t)}if(T.height>t.height/2-100){for(var g=0;g<l.length;g++){l[g].display(t)}w||setTimeout((function(){w=!0}),3500)}u&&u.display(t),w&&o.display(t)}},t.mouseClicked=function(){if(t.width-210<t.mouseX&&t.mouseY>t.height/4-150&&t.mouseY<t.height/4+60&&(n=!n,s=0,a=10),M.hovering){var i=M.hovering;console.log(i),M.selected=i,u=new k(i,t,h,g[i],W[i])}M.hovering||(M.selected=null,u=null),R.kraken<50&&!f&&(f=!0,S.toggle(),window.scrollTo({top:2.15*window.innerHeight,behavior:"smooth"}))}},D=function(){function t(i,e,h,o,n,s,r,l){Object(a.a)(this,t),this.x=e,this.y=h,this.size=o,this.color=n,this.str=i,this.time=r,this.font=s,this.hovering=!1,this.hilighted=!1,this.hilightable=l}return Object(r.a)(t,[{key:"update",value:function(t){this.time+=2}},{key:"display",value:function(t){var i,e=!1;if(t.width<=600&&(e=!0),this.update(t),t.push(),!e){var h=t.map(t.mouseX-this.x,0,t.width,0,this.size),o=t.map(t.mouseY-this.y,0,t.height,0,this.size);t.translate(h,o)}if(t.textFont(this.font),this.hilightable){i=this.str.split(" ")[2].toLowerCase();for(var n=0;n<this.str.length;n++){var s=this.x+n*this.size/1.5;t.dist(t.mouseX,t.mouseY,s,this.y)<15&&(this.hovering=!0,M.hovering=i),this.hovering||M.selected===i?this.hilighted=!0:this.hilighted=!1}M.hovering!==i||this.hovering||(M.hovering=!1),this.hovering=!1}for(var a=0;a<this.str.length;a++)if(this.time>3*a){var r=this.x+a*this.size/1.5,l=t.dist(t.mouseX,t.mouseY,r,this.y);t.textSize(this.size),this.hilighted?e?t.fill(59,186,156):t.fill(59,186,156,Math.max(255-l/2,100)):e?t.fill(this.color[0],this.color[1],this.color[2]):t.fill(this.color[0],this.color[1],this.color[2],Math.max(255-l/2,100)),t.noStroke(),t.text(this.str[a],r,this.y)}t.pop()}}]),t}(),X=function(){function t(i,e,h,o,n,s){Object(a.a)(this,t),this.file=i,this.x=e,this.y=h,this.targetSize=o,this.size=0,this.speed=n,this.angle=0}return Object(r.a)(t,[{key:"update",value:function(t){this.size>200?this.angle-=this.speed/100:this.angle+=this.speed/100,this.size<this.targetSize&&(this.size+=3)}},{key:"display",value:function(t){this.update(t),t.push(),t.translate(this.x,this.y),t.rotate(this.angle),t.image(this.file,this.size/2*-1,this.size/2*-1,this.size,this.size),t.pop()}}]),t}(),F=function(){function t(i,e,h,o){Object(a.a)(this,t),this.file=i,this.x=e,this.y=h,this.w=0,this.h=0,this.size=o,this.bounce=0,this.dir="down"}return Object(r.a)(t,[{key:"update",value:function(t){this.h<this.size?(this.h+=8,this.w+=4):("down"===this.dir&&(this.bounce+=2.3,this.bounce>0&&(this.dir="up")),"up"===this.dir&&(this.bounce-=1.5,this.bounce<-70&&(this.dir="down")))}},{key:"display",value:function(t){this.update(t),t.push(),t.translate(-this.w/2,-this.h/2+this.bounce),t.image(this.file,this.x,this.y,this.w,this.h),t.pop(),this.bounce}}]),t}(),B={},H=function(t){var i=t.live,e=Object(h.useState)(i),n=Object(d.a)(e,2),s=n[0],a=n[1],r=o.a.createRef();return Object(h.useEffect)((function(){B.toggle=function(){console.log("toggle work samples page"),a(!s)},s&&new g.a(C,r.current)})),s?o.a.createElement("div",{id:"work-samples",ref:r}):o.a.createElement("div",null)},A=function(t){var i=!1,e=[],h=[],o=null,n=!1;window.innerWidth<=600&&(n=!0),t.setup=function(){t.createCanvas(window.innerWidth,1.15*window.innerHeight);var s=t.loadImage("".concat("/portfolio02","/gears/gear01.png")),a=t.loadImage("".concat("/portfolio02","/gears/gear02.png")),r=t.loadImage("".concat("/portfolio02","/gears/gear03.png")),l=t.loadImage("".concat("/portfolio02","/hand.png")),c=t.loadFont("".concat("/portfolio02","/typewriterFont.ttf"));n?(e.push(new D("IM ROB",.1*t.width,.2*t.height,.1*t.width,[255,255,255],c,0,!1)),setTimeout((function(){e.push(new D("IM A WEB DEVELOPER",.1*t.width,.28*t.height,.065*t.width,[112,119,147],c,0,!1))}),1500),setTimeout((function(){i=!0,e.push(new D("WELCOME",.1*t.width,.4*t.height,.15*t.width,[59,186,156],c,0,!1)),o=new F(l,.7*t.width,.66*t.height,.2*t.height),B.toggle()}),3e3),setTimeout((function(){h=[new X(s,t.width,0,t.height/4,1,t),new X(a,0,t.height-t.height/3.5,t.height/4,1,t),new X(r,t.height/5,t.height-t.height/9,t.height/5,2,t)]}),1e3)):(e.push(new D("IM ROB",100,t.height/10*1.25,t.width/25,[255,255,255],c,0,!1)),setTimeout((function(){e.push(new D("IM A WEB DEVELOPER",100,t.height/10*2.25,t.width/30,[112,119,147],c,0,!1))}),1500),setTimeout((function(){i=!0,e.push(new D("WELCOME",100,t.height/10*3.5,t.width/20,[59,186,156],c,0,!1)),o=new F(l,.8*t.width,.66*t.height,.25*t.height),B.toggle()}),3e3),setTimeout((function(){h=[new X(s,t.width,0,t.height/3,1,t),new X(a,0,t.height-t.height/3.5,t.height/4,1,t),new X(r,t.height/5,t.height-t.height/9,t.height/5,2,t)]}),1e3))},t.draw=function(){if(window.scrollY<t.height){i?t.background(46,48,71):t.clear();for(var n=0;n<e.length;n++){e[n].display(t)}for(var s=0;s<h.length;s++){h[s].display(t)}o&&o.display(t)}},t.mouseClicked=function(){.75*t.width<t.mouseX&&.85*t.width>t.mouseX&&.5*t.height<t.mouseY&&.7*t.height>t.mouseY&&window.scrollTo({top:1.15*window.innerHeight,behavior:"smooth"})}},N={},L=function(t){var i=t.live,e=Object(h.useState)(i),n=Object(d.a)(e,2),s=n[0],a=n[1],r=o.a.createRef();return Object(h.useEffect)((function(){N.toggle=function(){console.log("toggle about page"),a(!s)},s&&new g.a(A,r.current)})),s?o.a.createElement("div",{id:"about",ref:r}):o.a.createElement("div",null)},V=function(t){var i,e=[],h=window.innerWidth;t.setup=function(){t.createCanvas(window.innerWidth,window.innerHeight),i=setInterval((function(){var o=Math.ceil(t.random(5,50));e.push(new m(h,-20,o,t)),(h-=o)<1&&(clearInterval(i),N.toggle(),setTimeout((function(){t.remove(),P.toggle()}),5e3))}),50)},t.draw=function(){t.background(255,255,255,0);for(var i=0;i<e.length;i++){var h=e[i];h.pos.y>t.height?(e.splice(i,1),i--):h.display(t)}}},P={},U=function(t){var i=t.live,e=Object(h.useState)(i),n=Object(d.a)(e,2),s=n[0],a=n[1],r=o.a.createRef();return Object(h.useEffect)((function(){P.toggle=function(){console.log("toggle scene two"),a(!s)},s&&new g.a(V,r.current)})),s?o.a.createElement("div",{id:"scene-two",ref:r}):o.a.createElement("div",null)},G=function(t){var i,e=[],h=new f(window.innerWidth/2,window.innerHeight/2),o=!0,n=!1;t.setup=function(){t.createCanvas(window.innerWidth,window.innerHeight),e.push(new p(100,100,t)),i=function(t,i){return setInterval((function(){var e=Math.floor(i.random(0,4));0===e&&t.push(new p(0,i.random(i.height),i)),1===e&&t.push(new p(i.width,i.random(i.height),i)),2===e&&t.push(new p(i.random(i.width),0,i)),3===e&&t.push(new p(i.random(i.width),i.height,i))}),10)}(e,t)},t.draw=function(){t.clear();for(var s=0;s<e.length;s++){var a=e[s];w(a)?(e.splice(s,1),s--,n||(o?h.size+=1:h.size-=5)):a.display(t)}h.display(t),h.size<8&&!1===o&&!1===n&&(n=!0,h.size=0,P.toggle(),setTimeout((function(){t.remove(),q.toggle(),clearInterval(i)}),1e4)),h.size>240&&o&&(t.push(),t.textSize(t.width/30),t.translate(t.width/2*-.125,0),t.text("Click Me!",t.width/2,t.height/2*1.5),t.pop())},t.mouseClicked=function(){h.size>240&&(o=!o)}},q={},J=function(t){var i=t.live,e=Object(h.useState)(i),n=Object(d.a)(e,2),s=n[0],a=n[1],r=o.a.createRef();return Object(h.useEffect)((function(){q.toggle=function(){console.log("turn off scene1"),a(!s)},s&&new g.a(G,r.current)})),s?o.a.createElement("div",{id:"scene-one",ref:r}):o.a.createElement("div",null)},K=function(t){Object(l.a)(e,t);var i=Object(c.a)(e);function e(){return Object(a.a)(this,e),i.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(J,{live:!0}),o.a.createElement(U,{live:!1}),o.a.createElement(L,{live:!1}),o.a.createElement(H,{live:!1}),o.a.createElement(Y,{live:!1}))}}]),e}(o.a.Component);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(K,null)),document.getElementById("root"))},9:function(t,i,e){t.exports=e(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d14f196e.chunk.js.map