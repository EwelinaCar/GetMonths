
    const polish = 0;
    const english = 1;
  
   const nameOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   const nameOfMonthsInPolish = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
  
  function GetMonthByIndex (language, index){
    const length = GetSizeOfArrayByLanguage(language);
    
      if(language == polish || language == english){
        if( index > 0 && index <= length){
        index -= 1;
        if (language == polish){
          return nameOfMonthsInPolish[index];
        }
        if (language == english){
          return nameOfMonths[index];
        }
      }else{
        return "Error - could not find month!";
      }
    }
    else{
    	return "Error - could not find language!";
    }
  }
  
  function GetSizeOfArrayByLanguage(language){
    if(language == polish){
      return nameOfMonthsInPolish.length;
    }
    if(language == english){
      return nameOfMonths.length;
    }
  }

  const result = GetMonthByIndex(1, 12) ;
  console.log( result );
