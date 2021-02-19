var n=[]
var e=[]
var num_of_keys=0
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
    num_of_keys+=1
    if (num_of_keys>0){
        document.getElementById("icon").classList.remove("h")
        document.getElementById("icon-rights").classList.remove("h")
    }
    

}
function clear(){
    document.getElementById("keys").innerHTML=""
    num_of_keys=0
    document.getElementById("icon").classList.add("h")
    document.getElementById("icon-rights").classList.add("h")
}



document.getElementById("botao").addEventListener("click", function(){
    createKey()
    n.sort(function(a, b){return a-b})
    e.sort(function(a, b){return a-b})
    var key=document.createElement("p")
    document.getElementById("keys").appendChild(key)
    key.innerHTML=`${num_of_keys}.<strong>Números:</strong> ${n} <br><strong> Estrelas:</strong>  ${e}`
    n=[]
    e=[]
    
    

})
document.getElementById("clear").addEventListener("click", function(){
    clear()
    
})
document.getElementById("icon").addEventListener("click", function(){
    
    var area=document.createElement("textarea")
    document.getElementById("keys").appendChild(area)
    var text=document.getElementById("keys").innerText
    area.innerHTML=text
    area.select();
    area.setSelectionRange(0, 99999); 

    document.execCommand("copy");
    area.remove()
    alert("Chaves copiadas para a área de transferência")
    


})

