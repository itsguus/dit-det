
function menuButton(button) {
    console.log(button);
    if(button.classList.contains("Contact") && document.body.classList.contains("home")) document.querySelector("input[type=checkbox]").checked=false;
}



// LIGHTBOX
    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains("light")) {
            document.querySelector('#lightbox').classList.remove('displayNone');
            document.getElementById('lightbox').innerHTML = '<a id="close"></a><div class="img" style="background: url(\'' + e.target.getAttribute('src') + '\') center center / contain no-repeat;">' + '<img src="' + e.target.getAttribute('src') + '" alt="' + e.target.getAttribute('title') + '" /></div>';
        }
    })

function removeLightbox() {
    document.querySelector('#lightbox').classList.add('displayNone');
    document.getElementById('lightbox').innerHTML = '';
}
