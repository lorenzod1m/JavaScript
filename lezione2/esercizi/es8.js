function trovaMaggiore(a,b){
    if(a>b){
        return a;
    }
    else if(b>a){
        return b;
    }
    return "Numeri uguali";
}
alert(trovaMaggiore(3,2));
alert(trovaMaggiore(1,2));
alert(trovaMaggiore(2,2));