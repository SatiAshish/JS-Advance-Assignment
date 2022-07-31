let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
    " “Genius is one percent inspiration and ninety-nine percent perspiration.” ― Thomas Edison",
    " “You can observe a lot just by watching.” ― Yogi Berra",
    " “Be the chief but never the lord.” ― Lao Tzu ",
    " “Nothing happens unless first we dream.” ― Carl Sandburg",
    " “Once you choose hope, anythings possible. ” ― Christopher Reeve ",
    " “A goal without a plan is just a wish. ” ― Larry Elder",
    " “If you cannot be silent be brilliant and thoughtful.” ― Byron Pulsifer",
    " “Be brave to stand for what you believe in even if you stand alone.” ― Roy T. Bennett",
    " “One day or day one. You decide.” — Unknown",
    " “Don't limit your challenges. Challenge your limits.” — Unknown"
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})