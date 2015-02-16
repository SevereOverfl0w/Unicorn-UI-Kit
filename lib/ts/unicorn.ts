var prepareHello = (name:string) => {
  return 'Hello, ' + name;
}

console.log(prepareHello('Unicorns'));

class UnicornPlugin {
  getElement(providedElement){
    var element = providedElement || this.element;
    switch (typeof element){
      case 'function':
        return element();
      case 'string':
        return document.querySelector(element);
      default:
        return element;
    }
  }
}

class fixOnScroll extends UnicornPlugin {
  constructor(element){
    this.element = element;
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  pulldown(){
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  },
  handleScroll(e){
    var element = this.getElement();
    element.classList.remove('fixed');
    var rekt = element.getBoundingClientRect();
    if(rekt.top < 0) element.classList.add('fixed');
  }
}
