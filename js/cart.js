// 原生方法写模态框




;(function(){

    var Delete = document.querySelectorAll('.info_right');
    var modal = document.querySelector('.modal');
    var cancel = document.querySelectorAll('.cancel');
    var lis = document.querySelectorAll('.goods li');
    

    Delete.forEach(function(v,i){

        v.addEventListener('click',function(){
           var current = v.parentElement.parentElement.parentElement;
            // console.log(xixi);
            current.classList.add('current');
            modal.style.display = "block";

        })
    })
    cancel.forEach(function(v,i){
        v.addEventListener('click',function(){
            modal.style.display = "none";
            lis.forEach(function(v,i){
                v.classList.remove('current');
            })
           

        })
    })



})();