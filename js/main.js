var Inf=2000000000;
function $$(x){return document.getElementById(x)}

var WinW, WinH;
// WinH=$(window).height();
// WinW=$(window).width();
WinH=window.innerHeight;
WinW=window.innerWidth;

var Scrolling = false;
var Ani = [];
var ScrollPos=[0, WinH, WinH+700, WinH + 700 + 800, WinH + 1500 + 700];
var NavbarAni=[
	{reveal:200, color1:"#d3d3d3", color2:"#E3D418"},
	{reveal:900, color1:"#E3D418", color2:"#BAD152"},
	{reveal:1700, color1:"#BAD152", color2:"#D5545E"},
	{reveal:2400, color1:"#D5545E", color2:"#497FAB"},
	{reveal:3100, color1:"#497FAB"},
];
var NavbarColors=NavbarAni.length;
function doAnimation(){
	if (Scrolling == false) return;
	for (var i in Ani){
		var x=Ani[i];
		var reveal=WinH - $$(x.obj).getBoundingClientRect().top;
		if ((reveal > x.revealMin) && (reveal <= x.revealMax)){
			if (x.aim2 === undefined) {
				$("#"+x.obj).stop().clearQueue().animate(x.aim,"fast");
				//debug
				// if (x.obj.toString()=="p3_line_1" && x.aim.height=="700"){
				// 	console.log(x.aim.height);
				//}
			} else {
				$("#"+x.obj).stop().clearQueue().animate(x.aim,"normal").animate(x.aim2,"normal");
			}
		}
	}
}


var LockedImg=[true,false,false,false,false];

function chkNavbarColor(delta){
	var i;
	if (delta == 1){
		for (i=0;i<NavbarColors;i++){
			if ( $("body").scrollTop() < NavbarAni[i].reveal ){
				$("#divNavbar").animate({backgroundColor:NavbarAni[i].color1});
				clkNavbarIcon(i);
				break;
			}
		}
	} else {
		for (i=NavbarColors-1;i>=0;i--){
			if ( $("body").scrollTop() > NavbarAni[i].reveal ){
				$("#divNavbar").animate({backgroundColor:NavbarAni[i].color2});
				clkNavbarIcon(i+1);
				break;
			}
		}
	}
}

function clkNavbarIcon(x){
	//$("#divDebug").text(i);
	var i;
	for (i=0;i<=4;i++){
		if (LockedImg[i]==true){
			LockedImg[i]=false;
			$("#imgNavbarLi"+i).stop().clearQueue().fadeTo(300,0);
		}
	}
	i=x;
	LockedImg[i]=true;
	$("#imgNavbarLi"+i).stop().clearQueue().css("opacity",1);
}
//force init color once
var tmp=setTimeout("document.body.scrollTop=0;chkNavbarColor(-1);",300);

////////////////
$(document).ready(function() {

	Ani=[
		{obj:"p1_div1", revealMin:-Inf, revealMax:100, aim:{opacity:0.25} },
		{obj:"p1_div1", revealMin:100, revealMax:200, aim:{opacity:0.5} },
		{obj:"p1_div1", revealMin:200, revealMax:300, aim:{opacity:0.75} },
		{obj:"p1_div1", revealMin:300, revealMax:Inf, aim:{opacity:1} },

		{obj:"p1_div2", revealMin:-Inf, revealMax:100, aim:{height:0} },
		{obj:"p1_div2", revealMin:100, revealMax:200, aim:{height:27} },
		{obj:"p1_div2", revealMin:200, revealMax:300, aim:{height:54} },
		{obj:"p1_div2", revealMin:300, revealMax:Inf, aim:{height:108} },

		{obj:"p1_div3", revealMin:-Inf, revealMax:100, aim:{opacity:0.25} },
		{obj:"p1_div3", revealMin:100, revealMax:200, aim:{opacity:0.5} },
		{obj:"p1_div3", revealMin:200, revealMax:300, aim:{opacity:0.75} },
		{obj:"p1_div3", revealMin:300, revealMax:Inf, aim:{opacity:1} },

		{obj:"p1_div4", revealMin:-Inf, revealMax:100, aim:{height:0} },
		{obj:"p1_div4", revealMin:100, revealMax:200, aim:{height:27} },
		{obj:"p1_div4", revealMin:200, revealMax:300, aim:{height:54} },
		{obj:"p1_div4", revealMin:300, revealMax:Inf, aim:{height:108} },

		{obj:"p1_midline", revealMin:-Inf, revealMax:200, aim:{height:"10%",borderColor:"#ffffff"} },
		{obj:"p1_midline", revealMin:200, revealMax:350, aim:{height:"40%"} },
		{obj:"p1_midline", revealMin:350, revealMax:550, aim:{height:"60%"} },
		{obj:"p1_midline", revealMin:550, revealMax:Inf, aim:{height:"100%",borderColor:"#E3D418"} },
		

		{obj:"p2_qmark_b1", revealMin:-Inf, revealMax:200, aim:{borderTopColor: "rgba(219,213,86, 0)", borderLeftColor: "rgba(219,213,86, 0)"}, aim2:{borderTopLeftRadius: 0} },
		{obj:"p2_qmark_b1", revealMin:200, revealMax:Inf, aim:{borderTopColor: "rgba(219,213,86, 1)", borderLeftColor: "rgba(219,213,86, 1)"}, aim2:{borderTopLeftRadius: 100} },

		{obj:"p2_qmark_b2", revealMin:-Inf, revealMax:200, aim:{borderTopColor: "rgba(219,213,86, 0)", borderRightColor: "rgba(219,213,86, 0)"}, aim2:{borderTopRightRadius: 0} },
		{obj:"p2_qmark_b2", revealMin:200, revealMax:Inf, aim:{borderTopColor: "rgba(219,213,86, 1)", borderRightColor: "rgba(219,213,86, 1)"}, aim2:{borderTopRightRadius: 100} },

		{obj:"p2_qmark_b4", revealMin:-Inf, revealMax:200, aim:{borderBottomColor: "rgba(219,213,86, 0)", borderRightColor: "rgba(219,213,86, 0)"}, aim2:{borderBottomRightRadius: 0} },
		{obj:"p2_qmark_b4", revealMin:200, revealMax:Inf, aim:{borderBottomColor: "rgba(219,213,86, 1)", borderRightColor: "rgba(219,213,86, 1)"}, aim2:{borderBottomRightRadius: 100} },

		{obj:"p2_qmark_b5", revealMin:-Inf, revealMax:200, aim:{ borderRightColor: "rgba(219,213,86, 0)"} },
		{obj:"p2_qmark_b5", revealMin:200, revealMax:Inf, aim:{ borderRightColor: "rgba(219,213,86, 1)"} },

		{obj:"p2_qmark_txt_qa", revealMin:-Inf, revealMax:200, aim:{ opacity:0} },
		{obj:"p2_qmark_txt_qa", revealMin:200, revealMax:Inf, aim:{ opacity:1} },

		{obj:"p2_line_1", revealMin:-Inf, revealMax:200, aim:{ height:0} },
		{obj:"p2_line_1", revealMin:200, revealMax:Inf, aim:{ height:400} },
		
		{obj:"p2_txt_1", revealMin:-Inf, revealMax:150, aim:{ opacity:0} },
		{obj:"p2_txt_1", revealMin:150, revealMax:Inf, aim:{ opacity:1} },

		{obj:"p2_txt_2", revealMin:-Inf, revealMax:150, aim:{ opacity:0} },
		{obj:"p2_txt_2", revealMin:150, revealMax:Inf, aim:{ opacity:1} },

		{obj:"p2_txt_3", revealMin:-Inf, revealMax:150, aim:{ opacity:0} },
		{obj:"p2_txt_3", revealMin:150, revealMax:Inf, aim:{ opacity:1} },

		{obj:"p3_cover_1", revealMin:-Inf, revealMax:100, aim:{ marginLeft:0} },
		{obj:"p3_cover_1", revealMin:100, revealMax:Inf, aim:{ marginLeft:-550},  },

		{obj:"p3_line_1", revealMin:-Inf, revealMax:500, aim:{ height:1} },
		{obj:"p3_line_1", revealMin:500, revealMax:Inf, aim:{ height:690},  },

		{obj:"p3_founder_cover_1", revealMin:-Inf, revealMax:300, aim:{ marginLeft:80} },
		{obj:"p3_founder_cover_1", revealMin:300, revealMax:Inf, aim:{ marginLeft:1500} },

		{obj:"p3_founder_cover_2", revealMin:-Inf, revealMax:300, aim:{ marginLeft:130} },
		{obj:"p3_founder_cover_2", revealMin:300, revealMax:Inf, aim:{ marginLeft:1500} },

		{obj:"p3_founder_cover_3", revealMin:-Inf, revealMax:300, aim:{ marginLeft:105} },
		{obj:"p3_founder_cover_3", revealMin:300, revealMax:Inf, aim:{ marginLeft:1500} },

		{obj:"p3_line_1", revealMin:500, revealMax:1000, aim:{ height:690} },
		{obj:"p3_line_1", revealMin:1000, revealMax:Inf, aim:{ height:1390},  },

		{obj:"p4_1", revealMin:-Inf, revealMax:150, aim:{ opacity:0} },
		{obj:"p4_1", revealMin:150, revealMax:Inf, aim:{ opacity:1} },

		{obj:"p4_2", revealMin:-Inf, revealMax:150, aim:{ opacity:0} },
		{obj:"p4_2", revealMin:150, revealMax:Inf, aim:{ opacity:1} },

		{obj:"p4_3", revealMin:-Inf, revealMax:150, aim:{ opacity:0} },
		{obj:"p4_3", revealMin:150, revealMax:Inf, aim:{ opacity:1} },

		{obj:"p4_4", revealMin:-Inf, revealMax:150, aim:{ opacity:0} },
		{obj:"p4_4", revealMin:150, revealMax:Inf, aim:{ opacity:1} },

		{obj:"p4_line_1", revealMin:-Inf, revealMax:100, aim:{ width:0} },
		{obj:"p4_line_1", revealMin:100, revealMax:Inf, aim:{ width:WinW-225},  },
	];

	// WinH=$(window).height();
	// WinW=$(window).width();
	WinH=window.innerHeight;
	WinW=window.innerWidth;
	$("#divPage0").height(WinH);
	$("#divPage0").width(WinW-225);

	function resizeInit(){
		// WinH=$(window).height();
		// WinW=$(window).width();
		WinH=window.innerHeight;
		WinW=window.innerWidth;
		$("#divPage0").animate({height:WinH, width:WinW-225});
		var ScrollPos=[0, WinH, WinH+700, WinH + 700 + 800, WinH + 1500 + 700];
		Aim[59].aim.width=WinW-225;
		/*$("#p2_qmark").css("margin-left",-100+"px").css("left","50%");
		$("#p2_qmark_txt_qa").css("margin-left",-300+"px").css("left","50%");*/
	}
	$(window).bind("resize",resizeInit);
	Ani[59].aim.width=WinW-225;
/*
	$("#p2_qmark").css("margin-left",-100+"px").css("left","50%");
	$("#p2_qmark_txt_qa").css("margin-left",-300+"px").css("left","50%");*/
	

	function onWinScroll(event, delta){
		//1.scroll page
		if (Scrolling == true) return;
		Scrolling = true;
		$("body").stop().clearQueue().animate({scrollTop:$(window).scrollTop() - delta * 175 } , "normal", "swing",function(){
			Scrolling=false;
			chkNavbarColor(delta);
		})
		//$(window).scrollTop( $(window).scrollTop() - delta*10 );
		event.preventDefault();
		//2.animations
		//move to another func
		//3.change navbar color
		//move to another func
		//4.move navbar box
	}


	$("body").bind("mousewheel",onWinScroll);
	//bind arrow keys
	$("body").bind("keydown",function(event){
		if (Scrolling == true) return;
		if (event.which == 38){onWinScroll(event, 1)}
		else {if (event.which == 40){onWinScroll(event, -1)}}
	});

	//animation while scrolling
	window.setInterval("doAnimation()",150);


	//init navbar first icon show
	$("#imgNavbarLi0").css("opacity",1);

	//navbar icon show
	$("[index]").bind("mouseenter",function(){
		var i=Number( $(this).attr("index") );
		$("#imgNavbarLi"+i).stop().clearQueue().fadeTo(300,1);
	});
	$("[index]").bind("mouseout",function(){
		var i=Number( $(this).attr("index") );
		if (LockedImg[i]==true) return;
		$("#imgNavbarLi"+i).stop().clearQueue().fadeTo(300,0);
	});
	//navbar click
	$("[index]").bind("click",clkNavbarIcon);

	function clkNavbarIcon(){
		var i;
		for (i=0;i<=4;i++){
			if (LockedImg[i]==true){
				LockedImg[i]=false;
				$("#imgNavbarLi"+i).stop().clearQueue().fadeTo(300,0);
			}
		}
		i=Number( $(this).attr("index") );
		LockedImg[i]=true;
		$("#imgNavbarLi"+i).stop().clearQueue().css("opacity",1);
		$("#divNavbar").animate({backgroundColor:NavbarAni[i].color1});
		//$("body").stop().clearQueue().animate({scrollTop: (i-1)*700+WinH },"normal", "swing",function(){
		$("body").stop().clearQueue().animate({scrollTop: ScrollPos[i] },"normal", "swing",function(){
			//force refresh once
			Scrolling=true;
			doAnimation();
			Scrolling=false;
		});
	}

});