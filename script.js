async function buscarCep(){
    const cep = document.getElementById("cep").value;

    if (!cep) return;
    
    try{
        const resp = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );
        const dado = await resp.json();

        document.getElementById("rua").value = dado.logradouro;
        document.getElementById("bairro").value = dado.bairro;
        document.getElementById("cidade").value = dado.localidade;
        document.getElementById("estado").value = dado.uf;

    } catch(erro){
        console.log(erro);
    }
}

function trocarTema(){
    const img = document.getElementById("tema");
    const body = document.getElementById("body");
    const texto = document.querySelectorAll(".texto");
    const botao = document.querySelectorAll("button");
    const card = document.querySelectorAll(".card");
    const card2 = document.querySelectorAll(".card2");
    const input = document.querySelectorAll("input");
    const select = document.querySelector("select");
    const textoFooter = document.querySelectorAll(".footerT");

    if(img.src.includes("moon.svg")){
        img.src = "assets/sun.svg";

        body.classList.replace("bg-[#F9F9F9]", "bg-[#1E1E1E]");
        select.classList.add("text-[#F9F9F9]", "bg-[#1E1E1E]");

        texto.forEach(item => {
            item.classList.replace("text-[#1E1E1E]", "text-[#F9F9F9]");
        });

        botao.forEach(item =>{
            item.classList.replace("bg-[#0077CC]", "bg-[#4DA6FF]");
            item.classList.replace("text-[#F9F9F9]", "text-[#1E1E1E]");
        });

        card.forEach(item =>{
            item.classList.add("border", "border-[#444444]");
        });

        card2.forEach(item =>{
            item.classList.replace("border-gray-200", "border-[#444444]");
        });

        input.forEach(item =>{
            item.classList.replace("border-gray-200", "border-[#444444]");
            item.classList.add("text-[#F9F9F9]")
        });

        textoFooter.forEach(item =>{
            item.classList.add("opacity-60");
        });

    } else {
        img.src = "assets/moon.svg";

        body.classList.replace("bg-[#1E1E1E]", "bg-[#F9F9F9]");
        select.classList.remove("text-[#F9F9F9]", "bg-[#1E1E1E]");

        texto.forEach(item => {
            item.classList.replace("text-[#F9F9F9]", "text-[#1E1E1E]");
        });

        botao.forEach(item =>{
            item.classList.replace("bg-[#4DA6FF]", "bg-[#0077CC]");
            item.classList.replace("text-[#1E1E1E]", "text-[#F9F9F9]");
        });

        card.forEach(item =>{
            item.classList.remove("border", "border-[#444444]");
        });

        card2.forEach(item =>{
            item.classList.replace("border-[#444444]", "border-gray-200");
        });

        input.forEach(item =>{
            item.classList.replace("border-[#444444]", "border-gray-200");
            item.classList.remove("text-[#F9F9F9]")
        });

        textoFooter.forEach(item =>{
            item.classList.remove("opacity-60");
        });
    }
}