export const story = {
  start: {
    message:
      "Start message",
    choices: [
      {
        text: "Do something",
        next: "outside"
      },
      {
        text: "Do nothing",
        next: "start"
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
      },
      {
        text: "Go home",
        next: "start"
      }
    ]
  }
};
