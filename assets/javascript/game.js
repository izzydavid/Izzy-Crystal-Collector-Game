document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, numVisible);
});

numVisible = 5; 

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});
// $('#playButton').hide();
// $('strong').hide();
// $('#blanks').hide();
// $('#animeTitle').hide();
// $('#animeTitle2').hide();
// $('#myBtn').hide();
// $('#myBtn2').hide();
// $('.btn').hide();
// $('h1').hide();
// $('#animePick').hide();

// $('#playButton').delay(1000).fadeIn('slow');


// $("#playButton").on("click", function () {
// $('#myBtn').delay(200).fadeIn('slow');
// $('#myBtn2').delay(200).fadeIn('slow');
// $('#animePick').delay(200).fadeIn('slow');
// $('#playButton').remove();
// $('#video').animate({
//   opacity: 0.9,

// })
// });

// $("#myBtn").on("click", function () {
// $('strong').delay(200).fadeIn('slow');
// $('#blanks').delay(200).fadeIn('slow');
// $('#animeTitle').delay(200).fadeIn('slow');
// $('#btn3').delay(200).fadeIn('slow');
// $('#myBtn').remove();
// $('#myBtn2').remove();
// $('#animePick').remove();
// $('#myBtn3').delay(200).fadeIn('slow');
// $('#myBtn4').delay(200).fadeIn('slow');
// $('#myBtn5').delay(200).fadeIn('slow');
// $('#myBtn6').delay(200).fadeIn('slow');

// });

// $("#myBtn2").on("click", function () {
// $('strong').delay(200).fadeIn('slow');
// $('#blanks').delay(200).fadeIn('slow');
// $('#animeTitle2').delay(200).fadeIn('slow');
// $('#btn3').delay(200).fadeIn('slow');
// $('#myBtn2').remove();
// $('#myBtn').remove();
// $('#animePick').remove();
// $('#myBtn3').delay(200).fadeIn('slow');
// $('#myBtn4').delay(200).fadeIn('slow');
// $('#myBtn5').delay(200).fadeIn('slow');
// $('#myBtn6').delay(200).fadeIn('slow');
// });




// var start = appStart({
// 	getInitialState: function() {
// 		return {
// 			alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" , "@","-"],
// 			words: '',
// 			randomWord: '',
// 			letters: [],
// 			clickedLetters:[],
// 			matchedLetters: [],
// 			lives:6,
// 			initialLives:6,
// 			clickedButton:null,
// 			gameStarted:false,
// 			nextWord:false,
// 			chosenLevel:'medium',
// 			score:0,
// 			gameOver:false
// 		}
// 	},
// }); 

// appStart()

    var animeShows = ["death note", "monster", "rurouni kenshin", "pokemon", "trigun",
      "naruto", "cowboy bepop", "evangelion", "dragon ball z", "flcl"
    ];

    var animeMovies = ["the wind rises", "grave of the fireflies", "my neighbor totoro", "princess mononoke", "ponya", "spirited away",
      "castle in the sky", "akira", "ghost in the shell", "howl moving castle", "samurai x"
    ];

    var topics = ["cowboy bepop", "trigun", "my neighbor totoro", "death note"];


    $("#myBtn3, #myBtn4, #myBtn5, #myBtn6").on("click", function intiialButtons() {
      // Grabbing and storing the data-anime property value from the button
      var anime = $(this).attr("data-name");

      // Constructing a queryURL using the anime name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        anime + "&api_key=Qxpp4x5d7fMc17qfyggEeDXHcJFmzIWO&limit=36";

      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
      // After data comes back from the request
      .then(function (response) {
        
          console.log(queryURL);
          console.log(response);

      //Start of For Loop for images and pushing the Gify images into the materialize framework/cards and establishing the two different states of the images "Still" and "Animated" when someone enters and leaves the element//
        var stillGify; 				
        var activeGify;
        for (var i = 0; i < 36; i++) {
        console.log(response.data[i].images.original.url);
        activeGify = response.data[i].images.original.url; 
        stillGify = response.data[i].images.original.url;

        // $('.card-image').hover(function (e) {
        // 	$(this).attr("src", $(this).attr(activeGify))
        // 		}, function (e) {
        // 	$(this).attr("src", $(this).attr(stillGify))
        // 	}
        // 	);
        $('.carousel').prepend(`
        <a class = "carousel-item" href="JavaScript:Void(0)">
        <img src = "${stillGify}">
        <div class="card-reveal"> 
						<span class="card-title activator grey-text text-darken-4" src = '${response.data[i].title}'><i class="material-icons right"></i></span>
						<div class="card-action"> <a href="${response.data[i].url}" target="_blank">Click Here</a>
						</div>
						</div>			
        </a> 
        
        `)
      
        M.AutoInit();

      };
      
          // Start of MouseEnter and MouseLeave Enter Events//
    // 	$(document).ready(function(){
    // 		$(".card-image").find('img').mouseenter(function(){
    // 		  if($("#imgAnimate").attr('src','form.jpg')){
    // 			  $("#imgAnimate").attr('src','form.gif');
    // 		  }
    // 		  $(this).mouseleave(function(){
    // 			  if($("#imgAnimate").attr('src','form.gif')){
    // 			  $("#imgAnimate").attr('src','form.jpg');
    // 		  }
    // 		  });
    // 		});
    // 	  });


    // End of MouseEnter and MouseLeave Enter Events



        
    //End of For Loop for images and pushing the Gify images into the materialize framework/cards and establishing the two different states of the images "Still" and "Animated" when someone enters and leaves the element//


    

  });
});



const $root = document.querySelector("#root");

let score;
let targetScore;

const makeGuess = () => {
  const $score = document.querySelector("#root p");
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;

  if (score > targetScore) {
    alert("You lost this round!");
    playRound();
  } else if (score === targetScore) {
    alert("You won this round!");
    playRound();
  }
};

const Crystal = function(color) {
  this.element = document.createElement("div");
  this.element.className = "crystal " + color;
  this.value = 0;

  this.element.addEventListener(
    "click",
    () => {
      score += this.value;
      makeGuess();
    },
    false
  );
};

Crystal.prototype.render = function(target) {
  this.value = Math.floor(Math.random() * 15) + 1;
  target.appendChild(this.element);
};

const crystals = [
  new Crystal("red"),
  new Crystal("blue"),
  new Crystal("green")
];

const playRound = () => {
  const fragment = document.createDocumentFragment();
  const $score = document.createElement("p");
  targetScore = Math.floor(Math.random() * 50) + 25;
  score = 0;
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;
  crystals
    .sort(() => 0.5 - Math.random())
    .forEach(crystal => crystal.render(fragment));
  fragment.appendChild($score);
  $root.innerHTML = "";
  $root.appendChild(fragment);
};

playRound();
