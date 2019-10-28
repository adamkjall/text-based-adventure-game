export const story = {
  start: {
    message: "What to do?",
    choices: [
      {
        text: "Do nothing",
        next: "start"
      },
      {
        text: "Go out",
        next: "outside"
      }
    ]
  },
  outside: {
    message: "It's a sunny day",
    choices: [
      {
        text: "Put on shades",
        next: ""
      },
      {
        text: "",
        next: "park"
      }
    ]
  }
}