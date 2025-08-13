class Handler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }
  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (request.authenticated) {
      console.log("Usuario autenticado");
      return super.handle(request);
    }
    console.log("No autenticado");
  }
}

class DataHandler extends Handler {
  handle(request) {
    console.log("Datos procesados");
  }
}

const auth = new AuthHandler();
const data = new DataHandler();
auth.setNext(data);

auth.handle({ authenticated: true });
