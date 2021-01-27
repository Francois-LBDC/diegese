
/**
 * permet de gérer le contrôle de mon curseur
 */
window.onmousemove = function(e) {
    
    if (e.target.classList.contains('dot')) {
        //	Content of dot which is hovered

        // TEST
        e.target.style.background = 'radial-gradient(circle,#000000, #eeeeee)';
        //
        var $target = e.target.nextElementSibling;
        
        //	Only work with hovered target
        //	Add visible class hovered elem to distinguish
        if (!$target.classList.contains('visible')) {
            $target.classList.add('visible');
        } else {
            //	Get viewport offset of tooltip element
            var offset = $target.parentElement.getBoundingClientRect();
            //	Tooltip distance from mouse(px)
            var tipDist = 80;
            //	Calc and set new tooltip location
            $target.style.top = (e.clientY - offset.top - tipDist) + 'px';
            //console.log('e' , e.clientY);
            //console.log($target.style.top);
            $target.style.left = (e.clientX - offset.left ) + 'px';
            
            // TEST
            /*e.target.style.background= `radial-gradient(at ${e.clientX - offset.left}% ${e.clientY - offset.top}%, #000000,#eeeeee)`
            */
           e.target.style.background= `radial-gradient(circle at ${e.clientX - offset.left}px ${e.clientY - offset.top}px, #000000 20px,#eeeeee 200px)`


           console.log(e.clientY - offset.top);
            //
        }
    } else {
            //	Remove visible class
        var content = document.getElementsByClassName('content');
        for (var i = 0; i < content.length; i++) {
                content[i].classList.remove('visible');
        }
        this.document.querySelector('.dot').style.background = '#eeeeee';
    }

};