var prepareHello = (name:string) => {
  return 'Hello, ' + name;
}

console.log(prepareHello('Unicorns'));

class fixOnScroll {
  constructor(element){
    this.element = element;
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  getElement(){
    switch (typeof this.element){
      case 'function':
        return this.element();
      case 'string':
        return document.querySelector(this.element);
      default:
        return this.element;
    }
  }
  handleScroll(e){
    var element = this.getElement();
    element.classList.remove('fixed');
    var rekt = element.getBoundingClientRect();
    if(rekt.top < 0) element.classList.add('fixed');
  }
}
