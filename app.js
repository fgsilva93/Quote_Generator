document.addEventListener("DOMContentLoaded", function() { 

    const quotes = [
        {
          quote:
            "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
          author: " Life"
        },
        {
          quote:
            "You truly are the lowest scum in history. You can’t pay back what you owe with money.",
          author: "Jotaro Kujo"
        },
        {
          quote:
          'What is “Courage”? Courage is owning your fear!',
          author: "Will Anthonio Zepelli"
        },
        {
          quote: "The price of anything is the amount of life you exchange for it.",
          author: "David Thoreau"
        },
        {
          quote:
            "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
          author: "Charles Lindbergh"
        },
        {
          quote:
            "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
          author: " Tyne Daly"
        }
      ];

    function generatorQuote() {
      
        const btn = document.getElementById("btn-generator");
      
        btn.addEventListener("click", function() {
          let random = Math.floor(Math.random() * quotes.length);
          console.log(random);
      
          document.getElementById("quote").textContent = quotes[random].quote;
          document.querySelector(".author").textContent = quotes[random].author;
        });
      }

      generatorQuote();
})


