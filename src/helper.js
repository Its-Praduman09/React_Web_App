function GenerateTicket(n){
    let arr=new Array(n);
    for(let r=0; r<n; r++)
    {
        arr[r]=Math.floor(Math.random()*10)
    }
    return arr;

}
export{GenerateTicket}     