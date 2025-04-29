interface ActionProvider {
  greet: () => void;
  handleStationQuery: () => void;
  handlePriceQuery: () => void;
  handleDefault: () => void;
}

class MessageParser {
  private actionProvider: ActionProvider;

  constructor(actionProvider: ActionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message: string): void {
    const lowerCaseMessage = message.toLowerCase();
    
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("station") || lowerCaseMessage.includes("location")) {
      this.actionProvider.handleStationQuery();
    } else if (lowerCaseMessage.includes("price") || lowerCaseMessage.includes("fuel")) {
      this.actionProvider.handlePriceQuery();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;