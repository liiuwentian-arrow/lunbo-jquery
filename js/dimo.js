
var i=0;

var timer
$( function(){
	
	$('.ig').eq(0).show().siblings().hide();
	
	Shoutime();
	
	
	
	$(".tab").hover(function(){
		
		i=$(this).index();
		Show$();
		clearInterval(timer);//清除轮播
		
	}, function(){
		
		
		 Shoutime();
		
	})
	
	
	$(".btn1").click(function(){
		
		
		clearInterval(timer);
		if(i==0){
			
			i=6;
			
		}
		i--;
		 Show$();
		  Shoutime();
	})
	
	
	$(".btn2").click(function(){
		
		
			clearInterval(timer);
		if(i==5){
			
			i=-1;
			
		}
		i++;
		 Show$();
		  Shoutime();
		
		
	})
	
})

   function Show$(){
   	
   	$('.ig').eq(i).fadeIn(300).siblings().fadeOut(300);
		$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
   	
   	
   }

function Shoutime(){
	
	timer=setInterval(function(){
		
		
		
		i++;
		
		if(i==6){
			
			
			i=0;
		}
		
		//$('.ig').eq(i).show().siblings().hide();
		Show$();
	},2000)
	
	
}
