function loop(n){
    let tot=0;
    for(let i=0;i<=n;i++){
        tot += i;
    }
    alert(tot);
}
let n = prompt("Inserire un numero");
loop(n);