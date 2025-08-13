class NumberExpression {
  constructor(value) { this.value = value; }
  interpret() { return this.value; }
}

class AddExpression {
  constructor(left, right) { this.left = left; this.right = right; }
  interpret() { return this.left.interpret() + this.right.interpret(); }
}

const result = new AddExpression(
  new NumberExpression(5),
  new NumberExpression(3)
).interpret();

console.log(result); // 8
