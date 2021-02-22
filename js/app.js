let facts = ["Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera.” - Bouddha",
    "On a deux vies. La deuxième commence quand on réalise qu’on n’en a qu’une.” - Confucius",
    "La vie, ce n’est pas d’attendre que les orages passent, c’est d’apprendre à danser sous la pluie.” - Sénèque",
    "S’il y a un problème, il y a une solution. S’il n’y a pas de solution, alors ce n’est pas un problème.",
    "J’ai décidé d’être heureux parce que c’est bon pour la santé.” - Voltaire",
    "Ne perds jamais espoir, lorsque le soleil se couche, les étoiles apparaissent” - Walter Bagehot",
    "Ne t’inquiète pas de l’échec. Inquiète-toi de ce que tu manques si tu n’essayes même pas.” - Jack Canfield",
    "Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.” - Martin Luther King",
    "N’acceptez jamais la défaite, vous êtes peut-être à un pas de la réussite.” - Denis Waitley",
    "La vie c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.” - Albert Einstein"];

let colors = ["LightSalmon", "LightPink", "LightSeaGreen"];

console.log(facts);

function randomFact() {
    return facts[Math.floor(Math.random() * 10)];
}

function randomColor() {
    return colors[Math.floor(Math.random() * 3)];

}

function modifieQuote() {
    let quote = document.getElementById("quote");
    console.log(quote);
    quote.textContent = "\"" + randomFact() + "\"";
    let color = randomColor();
    quote.style.color = color;
    let body = document.getElementById("body");
    body.style.backgroundColor = color;
    let button = document.getElementById("button");
    button.style.backgroundColor = color;
}

modifieQuote();