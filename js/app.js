$(document).ready(function() {
    /**create a list of cards**/
    const cardTypes = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-cube', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-cube'];
    let clickList = [];
	let countOfOpenClass;

    // Shuffle function from http://stackoverflow.com/a/2450976
    function shuffle(cardTypes) {
        var currentIndex = cardTypes.length,
            temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cardTypes[currentIndex];
            cardTypes[currentIndex] = cardTypes[randomIndex];
            cardTypes[randomIndex] = temporaryValue;
        }
        return (cardTypes);
    }
    //user click on play
    $('#play').on("click", function() {
        $('.deck').children().remove();
        shuffle(cardTypes);

        for (let i = 0; i < cardTypes.length; i++) {
            console.log(cardTypes[i]);
            $('.deck').add().append(`<li class="card"><i class="${cardTypes[i]}"></i></li>`);
        }
        $('.card').on("click", function(e) {
			if(e.currentTarget.className=="card"){
			        $(this).attr("class", "open");
            addOpenCardToArray(e);
			if(($('.open').length)==2){
			if(clickList[0]==clickList[1]){
				$('.open').attr("class","match");
				clickList=[];
				console.log("match");
				setTimeout(winnerPage(), 2000);
			}else{									
				$('.open').attr("class","noMatch");				
				setTimeout(noMatchReverse, 500);
				clickList=[];				
				console.log("nmatch");				
			}
			}
			}
        });
 });
		function noMatchReverse() {
    	$('.noMatch').attr("class","card");
		}
		
		function winnerPage(){
		if(!($(".deck").children().hasClass("card"))){
							 $("#myModal").modal();
		}
		}
		
        //Adding opencards to a list
        function addOpenCardToArray(e) {
            countOfOpenClass = $('.open').length;
            if (countOfOpenClass<=2) {
                while (countOfOpenClass<=2) {
                    clickList.push(e.target.className);
                    console.log(clickList); 
				return clickList;					
                }
				
            } 
                
        }
   


   /** $('body').on("click", ".card", function() {
        var $this = $(this);
        $this.attr("class", "open");
    });**/



});