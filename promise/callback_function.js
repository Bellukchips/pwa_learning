const getCake = callback => {
    let cake = null;
    console.log('Sedang membuat kue , Silahkan tunggu...');
    setTimeout(() => {
        cake = 'Kue selesai';
        callback(cake);
    }, 5000);
    return cake;
}
getCake(cake => {
    console.log(cake);
})