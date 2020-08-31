const btn = document.querySelector('.x');
$( document ).ready( () => { btn.click(); });

const $catfiltters = $('.cat-filters');
const $list = $('.projects');
const $pfilter = $('#portoflio-filter');

$catfiltters.find('a').click(function() {
    const currentOption = $(this).attr('data-filter');
    $(this).parent().parent().find('a').removeClass('current');
    $(this).addClass('current');
});


$list.isotope({
    itemSelector: '.item',
    layoutMode : 'fitRows',
    animationOptions : {
        duration: 750,
        easing: 'linear',
    }
})


$pfilter.find('a').click(function(){
    var selector = $(this).attr('data-filter');
    $list.isotope({
        filter : selector,
        animationOptions : {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    })
    return false;
});

