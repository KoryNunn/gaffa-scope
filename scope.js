var Gaffa = require('gaffa');

function Scope(actionDefinition){}
Scope = Gaffa.createSpec(Scope, Gaffa.Action);
Scope.prototype._type = 'scope';
Scope.prototype.triggerScope = new Gaffa.Property();
Scope.prototype.trigger = function(parent, scope, event){
    var action = this,
        extraScope = this.triggerScope.value;

    for(var key in extraScope){
        scope[key] = extraScope[key];
    }

    this.triggerActions('trigger', scope, event);
};

module.exports = Scope;