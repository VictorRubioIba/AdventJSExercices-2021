function distributeGifts(packOfGifts, reindeers) {
    let weightGifts = 0;
    let weightReindeers= 0;

    packOfGifts.forEach(element => {
        weightGifts+=element.length
    });

    reindeers.forEach(element=>{

        weightReindeers+=element.length*2
    })

    
    
    return Math.round(weightReindeers/weightGifts)
  }

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2