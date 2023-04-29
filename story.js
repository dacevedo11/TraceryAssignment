function generate_story(){
  result = "<div style='font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5em;'>"
  backstory_data = {
      "day":      ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "time":     ["morning", "afternoon", "evening", "night"],
      "place":    ["school", "bank", "church", "bar", "airport", "store", "library", "hotel"],
      "job":      ["bartender", "lawyer", "policeman", "stripper", "drug dealer", "yoga instructor", "psychic", "musician", "stockbroker", "politician"],
      "noun":     ["child", "puppy", "shoe", "vehicle", "bicycle", "person", "criminal"],
      "snack":    ["#food.a#", "#drink.a#"],
      "food":     ["burger", "pizza", "salad", "burrito", "cookie", "ice cream", "hot dog", "sandwich", "muffin"],
      "drink":    ["soda", "water", "sparkling water", "juice", "beer", "coke", "pop", "coffee", "tea", "milk", "chocolate milk", "smoothie", "energy drink", "cocoa", "cocktail", "cider", "wine"],
      "character":["#hero#", "#villain#"],
      "hero":     ["Batman", "Superman", "Spiderman", "Hulk", "Captain America", "Iron Man", "Thor", "Deadpool", "Wonder Woman", "Daredevil", "Supergirl", "Goku", "Pikachu"],
      "villain":  ["Joker", "Lex Luthor", "Doc Ock", "Loki", "Vegeta", "Piccolo", "Frieza", "Mewtwo", "Voldemort", "Darth Vader", "Thanos"],
      "action":   ["sneak", "walk", "dance", "run", "sprint", "jump", "hop", "dash", "fly", "float", "glide"],
      "story":     "On a #day# #time#, the party walks into #place.a#. They are looking for a #poi# who might have information on a missing #noun#. The attendant points them to the back, where the #poi# is waiting. The #poi# welcomes the party and asks everyone to sit. The #poi# tells the attendant to bring each of the heroes #snack#. After some discussion, the #poi# says they can help, but only if the heroes help defeat #enemy#, who has been harassing the establishment. Suddenly, the doors slam open as #enemy# #action.s# in. 'Somebody say my name?'",
      "origin":    "#[poi:#job#][enemy:#character#]story#"
      }
  result += "<p>" + grammars.GenerationSimple(backstory_data) + "</p>";
  result += "</div>";
  io.write_into_element(result, "story")
}
