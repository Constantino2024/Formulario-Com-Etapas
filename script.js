const next1 = document.getElementById('next1')
const back1 = document.getElementById('back1')
const next2 = document.getElementById('next2')
const back2 = document.getElementById('back2')
const next3 = document.getElementById('next3')
const back3 = document.getElementById('back3')


const circlo = document.querySelectorAll('.circle')
const infoPessoal = document.getElementById('info-pessoal')
const infoPlano = document.getElementById('info-plano')
const addServico = document.getElementById('add-servico')
const finaliza = document.getElementById('finaliza')


//Footer - declarações
const nextFooter1 = document.getElementById('next-footer1')
const backFooter1 = document.getElementById('back-footer1')
const nextFooter2 = document.getElementById('next-footer2')
const backFooter2 = document.getElementById('back-footer2')
const nextFooter3 = document.getElementById('next-footer3')
const backFooter3 = document.getElementById('back-footer3')

const footer1 = document.getElementById('footer1')
const footer2 = document.getElementById('footer2')
const footer3 = document.getElementById('footer3')
const footer4 = document.getElementById('footer4')


next1.addEventListener('click', function(){
    circlo[0].classList.toggle('active')
    circlo[1].classList.toggle('active')
    circlo[4].classList.toggle('active')
    circlo[5].classList.toggle('active')
    infoPlano.style.left = "0px";
    infoPessoal.style.left = "-530px";

    footer1.style.display = 'none';
    footer2.style.display = 'flex';
})

back1.onclick = () =>{
    circlo[0].classList.toggle('active')
    circlo[1].classList.toggle('active')
    circlo[4].classList.toggle('active')
    circlo[5].classList.toggle('active')
    infoPlano.style.left = "530px";
    infoPessoal.style.left = "0px";

    footer2.style.display = 'none';
    footer1.style.display = 'flex';
}

next2.addEventListener('click', function(){
    circlo[1].classList.toggle('active')
    circlo[2].classList.toggle('active')
    circlo[5].classList.toggle('active')
    circlo[6].classList.toggle('active')
    infoPlano.style.left = "-530px";
    addServico.style.left = "0px";

    footer2.style.display = 'none';
    footer3.style.display = 'flex';
})

back2.onclick = () =>{
    circlo[1].classList.toggle('active')
    circlo[2].classList.toggle('active')
    circlo[5].classList.toggle('active')
    circlo[6].classList.toggle('active')
    infoPlano.style.left = "0px";
    addServico.style.left = "530px";

    footer3.style.display = 'none';
    footer2.style.display = 'flex';
}

next3.addEventListener('click', function(){
    circlo[2].classList.toggle('active')
    circlo[3].classList.toggle('active')
    circlo[6].classList.toggle('active')
    circlo[7].classList.toggle('active')
    finaliza.style.left = "0px";
    addServico.style.left = "-530px";

    footer3.style.display = 'none';
    footer4.style.display = 'flex';
})

back3.onclick = () =>{
    circlo[2].classList.toggle('active')
    circlo[3].classList.toggle('active')
    circlo[6].classList.toggle('active')
    circlo[7].classList.toggle('active')
    finaliza.style.left = "530px";
    addServico.style.left = "0";

    footer4.style.display = 'none';
    footer3.style.display = 'flex';
}


//Footer Funções
nextFooter1.addEventListener('click', function(){
    circlo[0].classList.toggle('active')
    circlo[1].classList.toggle('active')
    circlo[4].classList.toggle('active')
    circlo[5].classList.toggle('active')
    infoPlano.style.left = "0px";
    infoPessoal.style.left = "-530px";

    footer1.style.display = 'none';
    footer2.style.display = 'flex';
})

backFooter1.onclick = () =>{
    circlo[0].classList.toggle('active')
    circlo[1].classList.toggle('active')
    circlo[4].classList.toggle('active')
    circlo[5].classList.toggle('active')
    infoPlano.style.left = "530px";
    infoPessoal.style.left = "0px";

    footer1.style.display = 'flex';
    footer2.style.display = 'none';
}

nextFooter2.addEventListener('click', function(){
    circlo[1].classList.toggle('active')
    circlo[2].classList.toggle('active')
    circlo[5].classList.toggle('active')
    circlo[6].classList.toggle('active')
    infoPlano.style.left = "-530px";
    addServico.style.left = "0px";

    footer3.style.display = 'flex';
    footer2.style.display = 'none';
})

backFooter2.onclick = () =>{
    circlo[1].classList.toggle('active')
    circlo[2].classList.toggle('active')
    circlo[5].classList.toggle('active')
    circlo[6].classList.toggle('active')
    infoPlano.style.left = "0px";
    addServico.style.left = "530px";

    footer2.style.display = 'flex';
    footer3.style.display = 'none';
}

nextFooter3.addEventListener('click', function(){
    circlo[2].classList.toggle('active')
    circlo[3].classList.toggle('active')
    circlo[6].classList.toggle('active')
    circlo[7].classList.toggle('active')
    finaliza.style.left = "0px";
    addServico.style.left = "-530px";

    footer4.style.display = 'flex';
    footer3.style.display = 'none';
})

backFooter3.onclick = () =>{
    circlo[2].classList.toggle('active')
    circlo[3].classList.toggle('active')
    circlo[6].classList.toggle('active')
    circlo[7].classList.toggle('active')
    finaliza.style.left = "530px";
    addServico.style.left = "0";

    footer3.style.display = 'flex';
    footer4.style.display = 'none';
}


/****************************************************************/

const plano = document.querySelectorAll(".plano")

plano[0].addEventListener('click', function(){
    plano[0].style.backgroundColor = "#f0f6ff";
    plano[1].style.backgroundColor = "#fff";
    plano[2].style.backgroundColor = "#fff";
})

plano[1].addEventListener('click', function(){
    plano[0].style.backgroundColor = "#fff";
    plano[1].style.backgroundColor = "#f0f6ff";
    plano[2].style.backgroundColor = "#fff";
})

plano[2].addEventListener('click', function(){
    plano[0].style.backgroundColor = "#fff";
    plano[2].style.backgroundColor = "#f0f6ff";
    plano[1].style.backgroundColor = "#fff";
})