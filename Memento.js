class Editor {
  constructor() { this.content = ""; }
  setContent(content) { this.content = content; }
  save() { return { content: this.content }; }
  restore(memento) { this.content = memento.content; }
}

const editor = new Editor();
editor.setContent("Versión 1");
const saved = editor.save();

editor.setContent("Versión 2");
editor.restore(saved);
console.log(editor.content); // Versión 1
