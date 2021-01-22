var n=[]
var e=[]
function createKey(){
    
    c=1
    d=1
    while (c<=5){
        a=Math.floor(Math.random()*50+1)
        i=0
        while(i<n.length){
            if (n[i]==a){
                a=Math.floor(Math.random()*50+1)
            }else{
                i++
            }

        }
        
        n.push(a)
        c++
        
    }
    while (d<=2){
        b=Math.floor(Math.random()*12+1)
        i=0
        while(i<e.length){
            if (e[i]==b){
                b=Math.floor(Math.random()*12+1)
            }else{
                i++
            }

        }
        e.push(b)
        d++
    }
    

}
function clear(){
    document.querySelector("div").innerHTML=""
}



document.getElementById("botao").addEventListener("click", function(){
    createKey()
    n.sort(function(a, b){return a-b})
    e.sort(function(a, b){return a-b})
    var key=document.createElement("p")
    document.getElementById("keys").appendChild(key)
    key.innerHTML=`<strong>Números:</strong> ${n} <br><strong> Estrelas:</strong>  ${e}`
    n=[]
    e=[]

})
document.getElementById("clear").addEventListener("click", function(){
    clear()
})