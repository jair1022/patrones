class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }
  next() {
    return this.items[this.index++];
  }
  hasNext() {
    return this.index < this.items.length;
  }
}

const iterator = new Iterator(["a", "b", "c"]);
while (iterator.hasNext()) {
  console.log(iterator.next());
}
