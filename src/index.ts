class Foo {
  public name = 'John';

  getName() { 
    return this.name
  }
}

let foo = new Foo();
console.log(foo.getName());