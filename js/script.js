(function setupLinkClick() {
    var $main = $('#main');
    
    $('#link a').on('click', function (e) {
        e.preventDefault();

        $.ajax(this.href)
            .done(function (body) {
                $main.html(body);
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            });
    });
})();

