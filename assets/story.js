/**
 * The story object contains all the text data
 * the game needs.
 */
export const story = {
  spela: {
    message:
      "Alla på Havsörnen, hjälp! Skolan är omringad av zombier och vi i klass 4b kommer inte härifrån. Hjälp oss!",
    choices: [
      {
        text: "Hjälp till",
        next: "hjälp"
      },
      {
        text: "Nej jag vill inte",
        next: "nej"
      },
    ]
  },
  hjälp: {
    message: "Vad snällt! Vi har gömt oss nere i källaren. Skynda dig!",
    choices: [
      {
        text: "Ta trapporna",
        next: "trapporna"
      },
      {
        text: "Ta hissen",
        next: "hissen"
      }
    ]
  },
  hissen: {
    message: "ÅH NEJ! Det står en zombie i hissen! Du är biten... GAME OVER",
    choices: [
      {
        text: "Spela igen",
        next: "spela"
      }
    ]
  },
  trapporna: {
    message: "Du går ner för trapporna... Ingen zombie första trappan... Ingen zombie andra trappan..."
    + " Plötsligt ser du en zombie MEN den har inte sett dig än!",
    choices: [
      {
        text: "Göm dig i ett klassrum",
        next: "klassrum"
      },
      {
        text: "Stå helt still",
        next: "still"
      }
    ]
  },
  klassrum: {
    message: "Zombien ser dig inte. Du springer ner till källaren och räddar 4b! YES!",
    choices: [
      {
        text: "Spela igen",
        next: "spela"
      }
    ]
  },
  still: {
    message: "Zombien ser dig inte. Du springer ner till källaren och precis när du ska öppna dörren"
    + " tar något tag om din fot... Du är biten... GAME OVER",
    choices: [
      {
        text: "Spela igen",
        next: "spela"
      }
    ]
  },
  nej: {
    message: "Taskigt! Då får du klara dig själv när du ska komma undan zombierna!",
    choices: [
      {
        text: "Gå till brandtrappan",
        next: "brandtrappan"
      },
      {
        text: "Gå till hissen",
        next: "hissen"
      }
    ]
  },
  brandtrappan: {
    message: "Du lyckas ta dig genom korridoren, ner för trappan och ut till brandtrappan."
    + " Du tar ett steg ut men stannar till! Hela skolgården är full med ZOMBIER!",
    choices: [
      {
        text: "Smyg ner",
        next: "smyg"
      },
      {
        text: "Kasta en pinne",
        next: "pinne"
      }
    ]
  },
  smyg: {
    message: "Det funkar! Du smyger runt hörnet, lurar zombierna in i skolan och smyger ut igen."
    + " Sedan tar du din cykel och sticker! Du klarar dig men 4b är fortfarande kvar nere i källaren... GAME OVER",
    choices: [
      {
        text: "Spela igen",
        next: "spela"
      }
    ]
  },
  pinne: {
    message: "Det funkade! Alla zombier springer till pinnen. Du smyger ner MEN precis när du kommer till sista trappsteget"
    + " tappar du dina nycklar... Alla zombier vänder sig om och springer rakt mot dig! Du är biten... GAME OVER",
    choices: [
      {
        text: "Spela igen",
        next: "spela"
      }
    ]
  }
}