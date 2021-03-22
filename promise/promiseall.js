const arabicaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('kopi arabisa selesai')
        }, 4000)
    })
}

const robustaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('kopi robusta selesai')
        }, 4000)
    })
}

const libericaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('kopi liberica selesai')
        }, 4000)
    })
}

const promise = [arabicaOrder(), robustaOrder(), libericaOrder()];

Promise.all(promise).then(resolved => {
    console.log(resolved)
})