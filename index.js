
var ele = null; //缓存作用
function bindEvent() {
    $('.set').on('mousemove', function () {
        $('.setting').css('display', 'block');
    })
    var timer
    $('.set').on('mouseleave', function () {

        timer = setTimeout(function () {
            $('.setting').css('display', 'none');
        }, 200)
    })

    $('.setting').on('mousemove', function () {
        clearTimeout(timer);
        $('.setting').css('display', 'block');
    }).on('mouseleave', function () {
        $('.setting').css('display', 'none');
    })

    $('._login').on('click', function () {
        
        loadJs();
        
       
    })
}
function bindClose() {
    $('.closeW').on('click', function () {
        ele = $('.login').remove();
    
    })

    $('.close').on('click', function () {
        $('#inputUser').val('');
        $('#inputPass').val('');
        
    })
}


function loadJs (){
    var javascript = document.createElement('script');
    javascript.onload = function (){
        _loGin();
        $('.login').css('display', 'block');
        bindClose();
      
    }
    javascript.src = './src.js';
    document.head.appendChild(javascript);
    
}

//入口函数
function init() {
    
    bindEvent();
}
init();