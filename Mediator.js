class ChatRoom {
  showMessage(user, message) {
    console.log(`${user.name}: ${message}`);
  }
}

class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }
  send(message) {
    this.chatRoom.showMessage(this, message);
  }
}

const chat = new ChatRoom();
const user1 = new User("Juan", chat);
const user2 = new User("Ana", chat);

user1.send("Hola!");
user2.send("Hola Juan!");
