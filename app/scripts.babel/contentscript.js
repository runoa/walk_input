'use strict';

console.log('start walk_input');
var count_i = 0;
var types_string = 'input[type="' + [
    'text',
    'search'
].join('"],input[type="') + '"]';
$(window).on('keydown', function(e) {
    if (e.metaKey && e.keyCode == 73) { // Cmd + i
        console.log('before' + count_i);
        var input_e = $(types_string);
        input_e[count_i].focus();
        count_i += 1;
        if (count_i >= input_e.length) count_i = 0;
        console.log(input_e);
        console.log('after ' + count_i);
    }
});
