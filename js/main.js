$(function () {
    _page = document.URL.split('?')[1];
    pageLoad(_page);

    window.addEventListener('popstate',function(){
        page = location.href.split('?')[1];
        pageLoad(page);
    });

    //Scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

	$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
			$('nav').css('position','fixed').css('top','-17px');
        } else {
			$('nav').css('position','absolute').css('top','83px');
		}
    });
});

function pageLoad(page){
    if (page === 'home'||page == null){
        page = 'main';
    }
    $(".container").load('html/'+page+'.html');
    $('html,body').scrollTop(0);
    return false;
}

function changeContent(page,e) {
    history.pushState(null,document.title,'?'+page);
    if (page === 'home'||page == null){
        page = 'main';
    }
    $(".container").load('html/'+page+'.html');
    $('html,body').scrollTop(0);
    e.preventDefault();
    return false;
}

//Drag forbid
document.ondragstart = function (e) {
    return false;
};
