const avanca=document.querySelectoar11(".btn-proximo");

avanca.forEach(button=>{
    button.addEventtListener("click",function(){
        const atual=document.querySelector(".ativo");
        const proximoPasso="passo-"+this.getAttribute("data-proxima");

        atual.classList.remove("ativo");
        document.getElementById(proximoPassp).classList.add("ativo");
    })
})