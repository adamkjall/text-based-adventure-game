export const story = {
  start: {
    message:
      "Start message",
    choices: [
      {
        text: "Do something",
        next: "start"
      },
      {
        text: "Do nothing",
        next: "outside"
      }
    ]
  },
  outside: {
    message: "It's a sunny day",
    choices: [
      {
        text: "Do something else",
        next: "park"
      },
      {
        text: "Do nothing else",
        next: "outside"
      }
    ]
  }
};
