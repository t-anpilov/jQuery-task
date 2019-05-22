$(document).ready(function() 
    { 
        $('#schedule').tablesorter(); 
    } 
);

$(document).ready(function() 
    { 
        $('#datepicker').datepicker(); 
    } 
);

function simple_tooltip(target_items, name){
    $(target_items).each(function(i){
        $("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('class')+"</p></div>");
        var my_tooltip = $("#"+name+i);
        
        $(this).mouseover(function(){
                my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(250);
            })
            .mousemove(function(kmouse){
                my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY});
            }).mouseout(function(){
                my_tooltip.fadeOut(250);
            });
    });
}
    
$(document).ready(function(){    
    simple_tooltip('td:first-child', 'tooltip');
});

    