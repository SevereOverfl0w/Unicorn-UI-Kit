# Javascript

## Intro
All javascript is written in [Typescript](http://www.typescriptlang.org/)
using ES6. It resides in the {GH}(lib/ts) directory.

## Plugins

### fixOnScroll

#### Description
The fixOnScroll plugin allows you to apply the class "fixed" when it
is beyond it's scroll point. This works exceptionally well with
the Navbar component, which has a built in fixed class, which will
stick the navbar to the top of the screen.

#### Usage
```javascript
  new fixOnScroll(document.getElementById('idOfElement')); // Directly use element
  new fixOnScroll('.navbar'); // Passed to document.querySelector()
  new fixOnScroll(function(){
    return document.getElementById('idOfElement');
  }); // Use a function if your DOM reference will change!
```
