db
    .getCollection('carts')
    .find({
        customerRef: '5dfcd194ca19972b888d66c2',
    }, {}, )
    .sort({
        dateEdited: -1,
    });

window.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log(event.button);
    if (event.button === 3) {
        return false;
    }
});

window.onhashchange = function() {
    prompt('are you sure?');
};

window.addEventListener('click', () => {
    console.log('Test');
});



// Turn it on - assign the function that returns the string
window.onbeforeunload = confirmOnPageExit;

// Turn it off - remove the function entirely
window.onbeforeunload = null;

var confirmOnPageExit = function(e) {
    // If we haven't been passed the event get the window.event
    e = e || window.event;

    var message = 'Any text will block the navigation and display a prompt';

    // For IE6-8 and Firefox prior to version 4
    if (e) {
        e.returnValue = message;
    }

    // For Chrome, Safari, IE8+ and Opera 12+
    return message;
};
