console.log('ready');

    var james = $('#bond');

    var right = function () {
        james.animate({ left: '5px' }, 600, left);
    };

    var left = function () {
        james.animate({ left: '0px' }, 600, right);
    };
    right();

    window.addEventListener('scroll', function() {
        var elements = document.querySelectorAll('.img');
        console.log(elements);
        var windowHeight = window.innerHeight;

        elements.forEach(function(element) {
            var positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
            if (element.id === 'img1' || element.id === 'img3' || element.id === 'img5' || element.id === 'img7') {
                element.classList.add('slide-in-left');
            } else {
                element.classList.add('slide-in-right');
            }
            }
        });
        });