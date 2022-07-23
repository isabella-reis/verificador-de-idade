function verificar() {
//Pegar a data atual (dia + ano)
    var data = new Date()
    var ano = data.getFullYear() //com 4 dígitos (full)
//Pegar o ano que foi preenchido no formulário que possui o id 'txtano' láá no HTML.
    var formAno = document.getElementById('txtano')
//Pegar para colocar o resultado lá no nosso <p> de id="res"
    var res = document.getElementById('res')

//Verificando se o ano que foi preenchido no formulário está vazio OU se ele é maior que o ano atual.
    if (formAno.value.length == 0 || formAno.value > ano || formAno.value.length < 4) {
        alert('[ERRO] Por favor, verifique os dados e tente novamente.')
    } else {
        var formSexo = document.getElementsByName('radsex') //lembrando aqui que esse get pega + de 1 element!!
        var idade = ano - Number(formAno.value) //o value tá no form precisa ser number
        var sexo = '' //começa vazia pois nós vamos preencher com a escolha do cliente
        var imgShow = document.getElementById('img')

        if (formSexo[0].checked) { //[0] pois é a caixinha do sexo masculino
            sexo = 'masculino'
            if (idade >= 0 && idade < 10) { //CRIANÇA SEXO MASC.
                    // img.setAttribute('src', '')
                imgShow.innerHTML="<img src='./menino1.jpg'>"
            } else if (idade < 19) { //ADOLESCENTE SM
                imgShow.innerHTML="<img src='./adolescente1.jpg'>"
            } else if (idade < 30) { //JOVEM ADULTO SM
                imgShow.innerHTML="<img src='./jadulto1.jpg'>"
            } else if (idade < 60) { //ADULTO
                imgShow.innerHTML="<img src='./adulto.jpg'>"
            } else { //IDOSO
                imgShow.innerHTML="<img src='./idoso1.jpg'>"
            }
        } else { //else do 1º if do sexo masculino
            sexo = 'feminino'
            if (idade >= 0 && idade < 10) { //CRIANÇA SEXO FEM.
                imgShow.innerHTML="<img src='./menina1.jpg'>"
            } else if (idade < 19) { //ADOLESCENTE SF
                imgShow.innerHTML="<img src='./adolescenta1.jpg'>"
            } else if (idade < 30) { //JOVEM ADULTO SF
                imgShow.innerHTML="<img src='./jadulta1.jpg'>"
            } else if (idade < 60) { //ADULTA
                imgShow.innerHTML="<img src='./adulta.jpg'>"
            } else { //IDOSA
                imgShow.innerHTML="<img src='./idosa1.jpg'>"
            }
        }
        res.innerHTML = `Detectamos o sexo ${sexo} com ${idade} ano(s).`
    }
    
}
