const state = {
    isCoffeeMakerReady: true,
    seedStocks: {
        arabica: 250,
        robusta: 60,
        liberica: 80
    }
}

const getSeeds = (type, miligrams) => {
    return new Promise((resolve, reject) => {
        if (state.seedStocks[type] >= miligrams) {
            state.seedStocks[type] -= miligrams;
            resolve('biji kopi di dapatkkan');
        } else {
            reject('maaf stock kopi habis');
        }
    })
}

const makeCoffee = seeds => {
    return new Promise((resolve, reject) => {
        if (state.isCoffeMakerReady) {
            resolve('kopi berhasil dibuat');
        } else {
            reject('maaf mesin tidak dapat digunakan');
        }
    })
}

const servingToTable = coffe => {
    return new Promise(resolve => {
        resolve('pesanan kopi sudah selesai');
    })
}

function reserveACoffee(type, miligrams) {
    getSeeds(type, miligrams)
        .then(makeCoffee)
        .then(servingToTable)
        .then(resolvedValue => {
            console.log(resolvedValue);
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
        })
}

reserveACoffee("liberica", 80);