/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

let randomAnswers = ["It is certain.", 
                      "It is decidedly so.",
                      "Without a doubt.",
                      "Yes - definitely.",
                      "You may rely on it.",
                      "As I see it, yes.",
                      "Outlook good.",
                       "Yes.",
                      "Signs point to yes.",
                      "Reply hazy, try again.",
                      "Ask again later.",
                      "Better not tell you now.",
                      "Cannot predict now.",
                      "Concentrate and ask again.",
                      "Don't count on it.",
                      "My reply is no.",
                      "Outlook not so good.",
                      "Very doubtful."];





function magicBall(){

  const randomElement = randomAnswers[Math.floor(Math.random() * randomAnswers.length)];
  
  document.querySelector(".fortune-txt").innerHTML = randomElement;

}
