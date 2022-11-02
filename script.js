let string="";
// mai ai cateva buguri dupa ce apesi = nu mai merge clear si delete, idk why
    let gicu=document.querySelectorAll('.matrice button')
    gicu.forEach((buton)=>{buton.classList.add('buton');})

function addtoString(thing){
    string=string+thing;
    document.querySelector('.screen').textContent=string;
}
function addOperator(thing){
    if(string=="")
        {   string=`0 ${thing}`;
            document.querySelector('.screen').textContent=string;
        }
        else {string=string+thing;
            document.querySelector('.screen').textContent=string;}
}
function operate(string){
    const elements= string.split(' ');
    let res=parseInt(elements[0]);
    let lenght=-1;
    
    elements.forEach(element => {
        lenght++;
    });

    for(let i=1;i<lenght;i=i+2){

        if(elements[i]=="+")
            res=res+parseInt(elements[i+1]);
        if(elements[i]=='-')
            res=res-parseInt(elements[i+1]);
        if(elements[i]=="*")
            res=res*parseInt(elements[i+1]);
        if(elements[i]=='/')
            res=res/parseInt(elements[i+1]);

    }
    showResult(res);
}
function showResult(res){
    string=res;
    document.querySelector('.screen').textContent=string;
}

function del(hehe){
    if(hehe=='one')
        string=string.slice(0,-1);
        else string=string.slice(0,0);
    document.querySelector('.screen').textContent=string;
}