$(document).ready(() => {

    $('.crystal-collector, .instructions, #playButton').hide(10);
    $("#intro").delay(42000).fadeIn(42000); 
    $("#playButton").delay(42000).fadeIn(500); 

    M.AutoInit();

$("#playButton").on("click", function () {
    $("#playButton").remove();
    $(".instructions").delay(200).fadeIn(2000); 
});

$(".instructions").on("click", function () {
    $(".instructions").remove();
    $(".crystal-collector").delay(200).fadeIn(2000); 
    $('.carousel').delay(200).fadeIn(2000); 
});
    
    let random = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randomNumber').html(random);

    let bluecrystal = Math.floor(Math.random() * 12) + 1;
    let greencrystal = Math.floor(Math.random() * 12) + 1;
    let redcrystal = Math.floor(Math.random() * 12) + 1;
    let whitecrystal = Math.floor(Math.random() * 12) + 1;
    let pinkcrystal = Math.floor(Math.random() * 12) + 1;

    let wins = 0; 
    let losses = 0;  

    let totalscore = 0;
    $('#totalscore').text(totalscore);

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
        alert("You won this round!"); 

    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        resetTwo();
        reset();
        alert("You lost this round, but try again!"); 
    }

    $('#bluecrystal').click(() => {
        totalscore = totalscore + bluecrystal; 
        $('#totalscore').text(totalscore);
        if (totalscore === random) {
            win();
            reset();
            resetTwo();
        } else if (totalscore > random) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#greencrystal').click(() => {
        totalscore = totalscore + greencrystal;
        $('#totalscore').text(totalscore);
        if (totalscore === random) {
            win();
            reset();
            resetTwo();
        } else if (totalscore > random) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#redcrystal').click(() => {
        totalscore = totalscore + redcrystal;
        $('#totalscore').text(totalscore);
        if (totalscore === random) {
            win();
            reset();
            resetTwo();
        } else if (totalscore > random) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#whitecrystal').click(() => {
        totalscore = totalscore + whitecrystal;
        $('#totalscore').text(totalscore);
        if (totalscore === random) {
            win();
            reset();
            resetTwo();
        } else if (totalscore > random) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#pinkcrystal').click(() => {
        totalscore = totalscore + pinkcrystal;
        $('#totalscore').text(totalscore);
        if (totalscore === random) {
            win();
            reset();
            resetTwo();
        } else if (totalscore > random) {
            lose();
            reset();
            resetTwo();
        }
    });

    function reset() {
        totalscore = 0;
        $('#totalscore').text(totalscore);
    }

    function resetTwo() {
        random = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randomNumber').html(random);
        bluecrystal = Math.floor(Math.random() * 12) + 1;
        greencrystal = Math.floor(Math.random() * 12) + 1;
        redcrystal = Math.floor(Math.random() * 12) + 1;
        whitecrystal = Math.floor(Math.random() * 12) + 1;
        pinkcrystal = Math.floor(Math.random() * 12) + 1;
    }
});
