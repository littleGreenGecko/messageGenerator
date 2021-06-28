// create an object
const sentences = { 

 // use arrays to store text 
 firstText : ['Share', 'Don\'t neglect', 'Accept', 'Celebrate', 'Focus on', 'Believe in', 'Appreciate'],
 secondText : ['your mind', 'your abilities', 'your future', 'your thoughts', 'your journey', 'the moment', 'your feelings'],
 thirdText : ['and don\'t ignore the present', 'and face up to new challenges', 'and have faith that change is possible', 'and don\'t be too hard on yourself', 'and don\'t be afraid to fail', 'and the power of play', 'and be realistic with your expectations'],

  message : function() {
 
   // generate random text from each array    
let random1 = Math.floor(Math.random() * this.firstText.length);
let random2 = Math.floor(Math.random() * this.secondText.length);
let random3 = Math.floor(Math.random() * this.thirdText.length);

   //  create variables for new random text
let newText1 = this.firstText[random1];
let newText2= this.secondText[random2];
let newText3 = this.thirdText[random3];

   // invoke new variables
return `"${newText1} ${newText2} ${newText3}."`;
  }
};

// print final message to the console
console.log(sentences.message());

