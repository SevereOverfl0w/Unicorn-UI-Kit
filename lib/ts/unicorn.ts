var prepareHello = (name:string) => {
  return 'Hello, ' + name;
}

console.log(prepareHello('Unicorns'));

class fixOnScroll {
  constructor(element){
    this.element = element;
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll(e){
    this.element.classList.remove('fixed');
    var rekt = this.element.getBoundingClientRect();
    if(rekt.top < 0) this.element.classList.add('fixed');
  }
}
