//创建触摸事件


// ;(function(){

//     var ul = document.querySelector('.jd_aside ul');
//     var jd_aside = document.querySelector('.jd_aside');

//     var ulHeight = ul.offsetHeight;
//     console.log(ulHeight)

//     function addTransition (){
//         ul.style.transition = 'transform .5s';
//         ul.style.webkitTransition = 'transform .5s';
//     }

//     function setTransform(width){
//         ul.style.transform = 'translateY('+ width +'px)';
//         ul.style.webkitTransform = 'translateY('+ width +'px)';

//     }
//     var currentY = 0;

//         var startY;
//     ul.addEventListener('touchstart',function(e){
//         console.log(e);
//         startY = e.touches[0].clientY;
//     });

//     ul.addEventListener('touchmove',function(e){
//         var distanceY = e.touches[0].clientY -startY;
//         setTransform( currentY+distanceY);
//         ul.style.transition  = 'none';
//     });

//         // var minY = - (ul.offsetHight - jd_aside.offsetHeight);
//     ul.addEventListener('touchend',function(e){
//         var distanceY = e.changedTouches[0].clientY - startY;
//         currentY += distanceY;
//         var minY = - (ulHeight - jd_aside.offsetHeight);
//         if(currentY > 0){
//         setTransform(0);
//         addTransition();
//         currentY = 0;
//         }
//         console.log(jd_aside);
//         // console.log(jd_aside.offsetHeight)
//         if(currentY < minY ){
//             currentY = minY;
//             setTransform(currentY); 
//             addTransition();
//         }
//         // 
//         // 


//     });


// })();



  
    function loaded(){
       new IScroll('.jd_aside');
    }  
    console.log(document.querySelector('.jd_asideRight'))
   new IScroll('.jd_asideRight');

