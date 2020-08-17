class WebSocketService {
  private ws: WebSocket;

  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.ws.onopen = () => {
      console.log(`Connected to ${url}`);
      const message = {action: 'authorize', payload: {roomId: '1', appPeerId: this.generateRandomId()}};
      this.send(message);
    };

    this.ws.onclose = () => { console.log('Closed!'); };
    this.ws.onerror = (err) => { console.log(`Error: ${err}`); };
  }

  initialize(onMessage: any) {
    this.ws.onmessage = onMessage;
  }

  send(message: object) {
    this.ws.send(JSON.stringify(message));
  }

  async like() {
    const message = {"action": "reaction", "payload": {"type": "like"}};
    this.send(message);
  }

  private generateRandomId() {
    return(Math.random().toString(36).replace(/[^a-z]\d+/g, ''));
  }
}

export default WebSocketService;
