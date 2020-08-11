const sometimesWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('Ooops!');
        }
    });
};

sometimesWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const sometimesWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() =>{
                resolve('True')
            }, 2000)
        }else{
            const error = new Error('Ooops!');
            reject(error);
        }
    });
}

sometimesWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([sometimesWillHappen(), sometimesWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })