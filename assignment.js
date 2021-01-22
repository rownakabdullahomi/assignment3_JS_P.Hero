
// Problem_01 : kilometerToMeter
function kilometerToMeter(kilometerValue){
    if(kilometerValue > 0){
        let meterValue = kilometerValue * 1000;
        return meterValue;
    }
    else{
        console.log("Invalid Input");
    }
}

// Problem_02 : budgetCalculator
function budgetCalculator(watchCount, phoneCount, laptopCount){
    if(watchCount >= 0 && phoneCount >= 0 && laptopCount >= 0){
        let watchCost = watchCount * 50;
        let phoneCost = phoneCount * 100;
        let laptopCost = laptopCount * 500;
        let totalCost = watchCost + phoneCost + laptopCost;
        return totalCost;
    }
    else{
        console.log("Invalid Input !!");
    }

}

// Problem_03 : hotelCost
function hotelCost(dayCount){
    if(dayCount >= 0){
        if(dayCount <= 10){
            let totalCost = dayCount * 100;
            return totalCost;
        }
        else if(dayCount <= 20 && dayCount > 10){
            let dayAfterFirstTen = dayCount - 10;
            let totalCost = (10 * 100) + (dayAfterFirstTen * 80);
            return totalCost;
        }
        else{
            let dayAfterFirstTen = dayCount - 10;
            let dayAfterSecondTen = dayAfterFirstTen - 10;
            let totalCost = (10 * 100) + (10 * 80) + (dayAfterSecondTen * 50);
            return totalCost;
        }
    }
    else{
        console.log("Invalid Input !!");
    }    
}

// Problem_04 : megaFriend
function megaFriend(names){
    if(names.length != 0){
        let longestName = [];
        let longestNameLength = 0;
    
        for(let i = 0; i < names.length; i++){
            if(names[i].length > longestNameLength){
                longestName = names[i];
                longestNameLength = names[i].length
            }       
        }
        return longestName; 
    } 
    else{
        console.log("No input found !! Enter valid inputs for result.");
    }      
}





// Testing
console.log(kilometerToMeter(8));
console.log(budgetCalculator(4, 2, 3));
console.log(hotelCost(32));
console.log(megaFriend(['mim', 'rahim', 'b','abdullah', 'rownak', '', 'muna']));
