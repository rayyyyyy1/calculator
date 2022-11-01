let string="";
//repara clear, repara sa mearga cu 0 la inceput daca apesi doar operatorul

function addtoString(thing){
    string=string+thing;
    document.querySelector('.screen').textContent=string;
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
    string='';
    document.querySelector('.screen').textContent=res;
}
function clear(){
    string='';
    document.querySelector('.screen').textContent=string;
}
function del(){
    string=string.slice(0,-1);
    document.querySelector('.screen').textContent=string;
}