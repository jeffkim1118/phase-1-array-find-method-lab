function superbowlWin(record){
    let x = 'W'

    const found = record.find(({ result }) => result === x);
    
    //console.log(found.year);
    
    if (found == undefined){
        return undefined;
    } else {
        return found.year;
    }
   
}
