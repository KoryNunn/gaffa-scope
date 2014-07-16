# gaffa-scope

Pass extra scope to child actions.

This is an Action for use in [gaffa](https://github.com/gaffa-tape/gaffa-js)

## Install:

    npm i gaffa-scope

## Add to gaffa:

    var Scope = require('gaffa-scope');

    gaffa.registerConstructor(Scope);

# API

## Properties (instanceof Gaffa.Property)

### scope

An object to add to scope that will be passed to children actions.

eg:

    // A child action to trigger.
    var set = new Set();
    set.source.binding = 'number'; // 'number' has been put in scope by the Scope action.
    set.target.binding = '[number]';

    // A scope action puts a variable, 'number' into scope, with the value of 123
    var scope = new Scope();
    scope.scope.value = {number:123};

    // Assign the child to be run when the scope action is triggered.
    scope.actions.trigger = [set];

## Actions

### trigger

Child actions to run with the added scope.
