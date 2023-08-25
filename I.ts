// I: Interface Segregation

/*  
    Clients should not be pushed to employ 
    interfaces(we don't have interfaces in js so we'll use methods or classes) 
    that they are unfamiliar with or do not want to use
*/

//wrong

class Dangote{
    Cement(NoOfbags: number){
        return 'cement...'
    }
    Salt(NoOfsachetsOrCartons: number){
        return 'salt...'
    }
    Sugar(NoOfsachetsOrCartons: number){
        return 'sugar...'
    }
    Others(itemAndQtyRequired: number){
        return 'others...'
    }
}

class BuildHouse extends Dangote{
    // problem: you will be exposed to all class methods even if you don't need them!

}

//correct

class DangoteCookingProducts{
    
    Salt(NoOfCartons: number){
        return `${NoOfCartons} cartons of salt...`
    }
    Sugar(NoOfCartons: number){
        return `${NoOfCartons} cartons of sugar...`
    }
    
}

class DangoteBuildingProducts{
    Cement(NoOfbags: number){
        return `${NoOfbags} bags of cement...`
    }
    Tiles(NoOfpacks: number){
        return `${NoOfpacks} packs of tiles...`
    }

} 

class BuildHouseProject extends DangoteBuildingProducts{
    
}

const order = new BuildHouseProject
console.log(order.Cement(4));