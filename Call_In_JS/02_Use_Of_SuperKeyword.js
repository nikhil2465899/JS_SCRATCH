class Nike{
    constructor(sportType){
        this.sportType = sportType;
    }
}
class Sport extends Nike{
    constructor(sportType, shoesName, size){
        super(sportType);
        this.shoesName = shoesName;
        this.size = size;
    }

    PrintSportType(){
        console.log(`Nike brand has been collabrated with ${this.sportType}`);
    }
}

const brandCollab = new Sport("Football", "Nike super zoom",7.5);
brandCollab.PrintSportType();