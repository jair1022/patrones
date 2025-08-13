class Game {
  play() {
    this.initialize();
    this.start();
    this.end();
  }
  initialize() {}
  start() {}
  end() {}
}

class Chess extends Game {
  initialize() { console.log("Preparando ajedrez"); }
  start() { console.log("Comienza la partida"); }
  end() { console.log("Partida terminada"); }
}

new Chess().play();
