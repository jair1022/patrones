class Subject {
  constructor() { this.observers = []; }
  subscribe(observer) { this.observers.push(observer); }
  notify(data) { this.observers.forEach(o => o.update(data)); }
}

class Observer {
  update(data) { console.log("Notificación:", data); }
}

const subject = new Subject();
subject.subscribe(new Observer());
subject.notify("Hola observadores!");
