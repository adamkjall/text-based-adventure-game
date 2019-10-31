export const story = {
  start: {
    message:
      "Alla barn på Havsörnen, lyssna noga! Era fröknar är inte dom ni tror dom är..." 
      + " Nu är det upp till er att välja!",
    choices: [
      {
        text: "Var som vanligt",
        next: "vanligt"
      },
      {
        text: "Undersök saken",
        next: "start"
      },
    ]
  },
  vanligt: {
    message: "Okej, men lita inte på Emelie, Nicole eller Cicci!"
    + " Speciellt inte när solen gått ner...",
    choices: [
      {
        text: "Göm dig",
        next: "gömställe"
      },
      {
        text: "Börja om",
        next: "start"
      }
    ]
  },
  gömställe: {
    message: "Du är under soffan. Hoppas att fröknarna inte hittar dig...",
    choices: [
      {
        text: "Börja om",
        next: "start"
      }
     
    ]
  },
  undersök: {
    message: "Skönt att ni är så modiga på Havsörnen!"
    + " Okej, det du och dina kompisar behöver göra först är att ta reda på vad det är som inte stämmer med era fröknar.",
    choices: [
      {
        text: "Vi tror dom är vampyrer",
        next: "start"
      },
      {
        text: "Vi tror dom är zombies",
        next: "start"
      }
    ]
  }

};
