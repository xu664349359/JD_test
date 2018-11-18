

//自调用函数前面加分号防止在项目中其他同事有不加分号的习惯
//浏览器会认为是一个整体然后调用，报错
//头部搜索框特效
;(function(){
var lheader = document.querySelector('.jd_header');

//高度    透明度


//0       0



//120      0.9
//  var scrollY = 0;
window.addEventListener('scroll',function(){
    var lucid = 0 ;
    
    var  page =window.pageYOffset
   if(page > 120){
      lucid = 0.9;
   }else{
        lucid = scrollY / 120 * 0.9;
   }
   lheader.style.backgroundColor = 'rgba(255,0,0,'+ lucid +')';
})
    

})();
//秒杀特效自动设置宽度特效
;(function(){

    var content = document.querySelector('.jd_content ul');

    var lis = content.children;
    
    var width = lis.length * lis[0].offsetWidth;
    content.style.width = width + 'px';

})();

//倒计时功能实现
;(function(){

    var span = document.querySelectorAll('.jd_hour span:nth-child(2n-1)');
     function initial(){
                var time = new Date('2018/11/09 15:45');
                var timestamp = time - new Date();
                var s =parseInt(timestamp / 1000);
                console.log(s);
                if(s <= 0){
                clearInterval(timeId);
                s = 0;
                    console.log('倒计时完毕');
                }

                var hour = parseInt(s / 3600);
                var minute =parseInt(s / 60) % 60 ;
                var second = s % 60 ;

            
                span[0].innerHTML = add(hour);
                span[1].innerHTML = add(minute);
                span[2].innerHTML = add(second);
            }
    initial();
    function add(n){
      return  n >=10 ?n:'0'+ n;
    }
  var timeId =  setInterval(initial,1000);
           



})();


// 京东快报 ul 导航轮播
;(function(){
    var ul = document.querySelector('.jd_news ul');
    var lis = ul.children;
    var height = lis[0].offsetHeight;
    console.log(height);
        var index = 0;
    setInterval(function(){
         index++;
         ul.style.transform = 'translateY('+(-index * height)+'px)' ;  
            ul.style.transition = 'transform .9s';

        ul.addEventListener('transitionend',function(){

                if(index >= lis.length-1){
                    index = 0;
                    ul.style.transition = 'none';
                    ul.style.transform = 'translateY(0)';
                }
            
        })
    },1000)

})();



//京东首屏轮播区域

;(function(){
    var olis = document.querySelectorAll('.jd_banner ol li');
    var ul = document.querySelector('.jd_banner ul');

    var lis = ul.children;

    var width = lis[0].offsetWidth;

    // ul.style.width = lis.length * width + 'px';
    var index = 1;
  var timeId =  setInterval(function(){
    index++;
    // ul.style.transform = 'translateX(' +(-index * width) +'px)';
    addTransiton();
    // ul.style.transition = 'transform .2s';   
    setTranslateX(-index*width);
    },1000);
    ul.addEventListener('transitionend',function(){
    if(index >= lis.length-1){
        index = 1;
       removeTransition();
        // ul.style.transform = 'translateX('+(-index * width)+'px)';
        setTranslateX(-index*width);
        
    }
    if(index <= 0){
        index = lis.length - 2;
        // ul.style.transition = 'none';
        removeTransition();
        // ul.style.transform = 'translateX('+(-index * width)+'px)';
        setTranslateX(-index*width);
        
       
    }
    
        //小圆点处理 
        olis.forEach(function(v,i){
                v.className = '';
            })
        olis[index-1].classList.add('current');

    
    });

    function setTranslateX( value ) {
        ul.style.transform = "translateX(" + value + "px)";
        ul.style.webkitTransform = "translateX(" + value + "px)";
      }
      function removeTransition() {
        ul.style.transition = "none";
        ul.style.webkitTransition = "none";
      }
      function addTransiton() {
        ul.style.transition = "transform .2s";
        ul.style.webkitTransition = "transform .2s";
      }
    var startX;
    var timestart;
     ul.addEventListener('touchstart',function(e){
        // console.log(e);
        startX = e.touches[0].clientX;
        console.log(startX);
        clearInterval(timeId);
        timestart = new Date();


     });
     
     ul.addEventListener('touchmove',function(e){
        // console.log(e);
        var distanceX = e.touches[0].clientX - startX;
        
        removeTransition();

      setTranslateX(- index * width + distanceX);
        

    }) 
    ul.addEventListener('touchend',function(e){

        var distanceX = e.changedTouches[0].clientX - startX;
        var  leadTime = new Date() - timestart;

        if ( distanceX > width / 5 || leadTime < 300  && distanceX > 50 ) {
            index--;
          }
        if( distanceX < - width /5 || leadTime <300 && distanceX < - 50){
            index++;
        }

        addTransiton();
        
        setTranslateX(- index * width );

        timeId = setInterval(function(){
            index++;
        // ul.style.transform = 'translateX(' +(-index * width) +'px)';
        addTransiton();
        // ul.style.transition = 'transform .2s';   
        setTranslateX(-index*width);
        },1000)

    })  

    window.addEventListener('resize',function(){
        width = lis[0].offsetWidth;

        removeTransition();
    setTranslateX(-index * width);
    })
 

})();