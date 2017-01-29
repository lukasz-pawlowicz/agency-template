

    //==========PARALLAX EFFECT==========// 
    $(function() {
        var $window = $(window);  
        $('header[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object
            $(window).scroll(function() {
                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!                              
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                // Put together our final background position
                var coords = '50% '+ yPos + 'px';
                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            }); // end window scroll
        });
    });


    //==========BUTTON EFFECT==========// 
    const docStyle = document.documentElement.style
    const aElem = document.querySelector('.button')
    const boundingClientRect = aElem.getBoundingClientRect()

    aElem.onmousemove = function(e) {
        const x = e.clientX - boundingClientRect.left
        const y = e.clientY - boundingClientRect.top
        const xc = boundingClientRect.width/2
        const yc = boundingClientRect.height/2
        const dx = x - xc
        const dy = y - yc
        docStyle.setProperty('--rx', `${ dy/-1 }deg`)
        docStyle.setProperty('--ry', `${ dx/10 }deg`)
    }

    aElem.onmouseleave = function(e) {
        docStyle.setProperty('--ty', '0')
        docStyle.setProperty('--rx', '0')
        docStyle.setProperty('--ry', '0')
    }

    aElem.onmousedown = function(e) {
        docStyle.setProperty('--tz', '-25px')
    }

    document.body.onmouseup = function(e) {
        docStyle.setProperty('--tz', '-12px')
    }

    //==========BUTTON EFFECT==========// 
    $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-fixed-top").css("background-color", "rgba(255, 255, 255, 0.5)").delay(200); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar-fixed-top").css("background-color", "transparent").delay(200); // if not, change it back to transparent
        }
      });
    });