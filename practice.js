let value =''

const job = new Promise((resolve, reject) => {
    setTimeout(2*1000, )
    resolve(3)
})

job.then(v =>{
    value=v
    console.log(v)
})

// then 코딩이 됐을 때 후처리하는 함수