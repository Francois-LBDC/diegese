
/**
 * permet de gérer le contrôle de mon curseur
 */
window.onmousemove = function(e) {
    
    if (e.target.classList.contains('dot')) {
        //	Content of dot which is hovered

        var $target = e.target.nextElementSibling;
        
        //	Only work with hovered target
        //	Add visible class hovered elem to distinguish
        if (!$target.classList.contains('visible')) {
            $target.classList.add('visible');
        } else {
            var offset = $target.parentElement.getBoundingClientRect();
            var tipDist = 80;
            $target.style.top = (e.clientY - offset.top - tipDist) + 'px';
            $target.style.left = (e.clientX - offset.left ) + 'px';
          
     
            // vérifie si c'est le cadre diégèse2 ou pas et applique le bon style
            if (e.target.classList.contains('diegese2')) {
           e.target.style.background = `
           radial-gradient(circle at 70%, #000000 0px,transparent 40px),
           radial-gradient(circle at ${e.clientX - offset.left}px ${e.clientY - offset.top -40}px, #ff00ff 0px,#eeeeee 200px)`
            } else {
                e.target.style.background = `radial-gradient(circle at ${e.clientX - offset.left}px ${e.clientY - offset.top -40}px, #ff00ff 20px,#eeeeee 200px)`
            }
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