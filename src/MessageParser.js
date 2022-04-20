// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    // Der Action Parser versucht zu erkennen, was in der Nachricht ist und entscheidet daraufhin, was damit passiert 
    parse(message) {
      // console.log(message)

      console.log(this.state)

      const lowercase = message.toLowerCase()

      if(lowercase.includes("hello world")) {
        console.log("Hi")
      }
    }
  }
  
  export default MessageParser;