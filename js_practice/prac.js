const button = document.getElementById('colorButton')
document.addEventListener('DOMContentLoaded', function() {

    button.addEventListener('click', function() {
        document.body.style.backgroundColor = "#" + "008000";
    });
});
