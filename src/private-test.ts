class Bar {
  private title = 'John';

  getName() {
    return this.title
  }
}

let bar = new Bar();
// console.log(bar.title);
console.log(bar.getName());