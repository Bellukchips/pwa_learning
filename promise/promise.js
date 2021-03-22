const executeFunction = (resolve, reject) => {
    const isCoffeMakerReady = false;
    if (isCoffeMakerReady) {
        resolve('Kopi berhasil di buat');
    } else {
        reject('Mesin kopi rusak');
    }
}

const handlerSuccess = resolveValue => {
    console.log(resolveValue);
}
const handlerReject = rejectReason => {
    console.log(rejectReason);
}

const makeCoffee = new Promise(executeFunction);
makeCoffee
    .then(handlerSuccess)
    .catch(handlerReject);