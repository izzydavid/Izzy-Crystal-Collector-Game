$(document).ready(() => {

    $('.game__crystal-collector, .instructions, #playButton').hide(10);
    $("#intro").delay(42000).fadeIn(42000); 
    $("#playButton").delay(42000).fadeIn(500); 

    M.AutoInit();

$("#playButton").on("click", function () {
    $("#playButton").remove();
    $(".instructions").delay(200).fadeIn(2000); 
});

$(".instructions").on("click", function () {
    $(".instructions").remove();
    $(".game__crystal-collector").delay(200).fadeIn(2000); 
    $('.carousel').delay(200).fadeIn(2000); 
});
    
    //program generates a random number between 19 and 120
    let randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randNum').html(randNumber);

    //each crystal has a hidden value i.e. random number between1 and 12
    let bluecrystal = Math.floor(Math.random() * 12) + 1;
    let greencrystal = Math.floor(Math.random() * 12) + 1;
    let redcrystal = Math.floor(Math.random() * 12) + 1;
    let whitecrystal = Math.floor(Math.random() * 12) + 1;
    let pinkcrystal = Math.floor(Math.random() * 12) + 1;


    //player clicks the crystals to display value to totalscore
    let wins = 0; //#wins
    let losses = 0;  //#losses

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
        if (totalscore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalscore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#greencrystal').click(() => {
        totalscore = totalscore + greencrystal;
        $('#totalscore').text(totalscore);
        if (totalscore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalscore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#redcrystal').click(() => {
        totalscore = totalscore + redcrystal;
        $('#totalscore').text(totalscore);
        if (totalscore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalscore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#whitecrystal').click(() => {
        totalscore = totalscore + whitecrystal;
        $('#totalscore').text(totalscore);
        if (totalscore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalscore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#pinkcrystal').click(() => {
        totalscore = totalscore + pinkcrystal;
        $('#totalscore').text(totalscore);
        if (totalscore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalscore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    

    //random numbers (jewels) get added together: look above
    //script determines if player wins or loses and outcome recorded in winsLosses
    //game restarst, page does NOT reload
    function reset() {
        totalscore = 0;
        $('#totalscore').text(totalscore);
    }

    function resetTwo() {
        randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randNum').html(randNumber);
        bluecrystal = Math.floor(Math.random() * 12) + 1;
        greencrystal = Math.floor(Math.random() * 12) + 1;
        redcrystal = Math.floor(Math.random() * 12) + 1;
        whitecrystal = Math.floor(Math.random() * 12) + 1;
        pinkcrystal = Math.floor(Math.random() * 12) + 1;
    }
});
