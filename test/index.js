var Gaffa = require('gaffa'),
    Scope = require('../'),
    Set = require('gaffa-set'),
    Button = require('gaffa-button'),
    gaffa = new Gaffa();

// Register used viewItems with gaffa
gaffa.registerConstructor(Scope);
gaffa.registerConstructor(Set);
gaffa.registerConstructor(Button);

var set = new Set();
set.source.binding = 'c';
set.target.binding = '[c]';

var scope = new Scope();
scope.triggerScope.binding = '(object "c" [a])';
scope.actions.trigger = [set];

// create a button to test with
var button = new Button();
button.text.binding = '(join " " "Current value of c:" [c])';
button.actions.click = [scope]

// An example model
gaffa.model.set({
    a:'b'
})

// Add the view on load.
window.onload = function(){
    gaffa.views.add(button);
};

// Globalise gaffa for easy debugging.
window.gaffa = gaffa;