$(document).ready(function(){
    $(".accordion-heading").click(function(){  
          if($(".accordion-body").is(':visible')){  /* check the condition accordion-body is visible or not */
              $(".accordion-body").slideUp(600);  /*if content is visible then close accordion-body with specific time duration */
            $(".plusminus").text('+')    /* add plus sign */
        }
        else{
            $(this).next(".accordion-body").slideDown(600); /*if content not visible then 
                                                                                                        show the accordion-body */
            $(this).children(".plusminus").text('-');  /* add minus sign */
        }
    });
});