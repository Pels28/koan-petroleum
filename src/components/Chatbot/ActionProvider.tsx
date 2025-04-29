

// Define the message type based on the library's return type
interface ChatBotMessage {
  loading: boolean;
  widget?: string;
  delay?: number;
  payload?: unknown;
  message: string;
  type: string;
  id: number;
}

// Define the create function type
type CreateChatBotMessageFn = (message: string, options?: {
  widget?: string;
  delay?: number;
  payload?: unknown;
}) => ChatBotMessage;

// Define the state shape
interface ChatbotState {
  messages: ChatBotMessage[];
  // Add other state properties if needed
}

// Define the setState function type
type SetStateFunction = (state: ChatbotState | ((prevState: ChatbotState) => ChatbotState)) => void;

class ActionProvider {
  private createChatBotMessage: CreateChatBotMessageFn;
  private setState: SetStateFunction;

  constructor(
    createChatBotMessage: CreateChatBotMessageFn,
    setStateFunc: SetStateFunction
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  private addMessage(message: ChatBotMessage): void {
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }

  greet(): void {
    const greetingMessage = this.createChatBotMessage("Hello! How can I assist you today?");
    this.addMessage(greetingMessage);
  }

  handleStationQuery(): void {
    const message = this.createChatBotMessage(
      "You can find our stations using our Station Locator page.",
      { widget: "stationLocator" }
    );
    this.addMessage(message);
  }

  handlePriceQuery(): void {
    const message = this.createChatBotMessage(
      "Current fuel prices are available on our Fuel Prices Board.",
      { widget: "fuelPrices" }
    );
    this.addMessage(message);
  }

  handleDefault(): void {
    const message = this.createChatBotMessage(
      "I'm sorry, I didn't understand that. How can I help you with KOAN Petroleum services?"
    );
    this.addMessage(message);
  }
}

export default ActionProvider;