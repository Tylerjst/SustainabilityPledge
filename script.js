var main = function(){


    $('.item').click(function(){
        $('.article').removeClass('current');
        $('.description').slideUp(500);

        $(this).parents('.article').addClass('current');
        $(this).next('.description').slideToggle(500);
    });

   /* $(document).keypress(function(event){
        if(event.which === 111){
            $('.current').children('.description').toggle();
        }
        else if(event.which === 110){
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();
            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }

    });


*/
}

$(document).ready(main);
