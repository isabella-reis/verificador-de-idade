function verificar() {
//Pegar a data atual (dia + ano)
    var data = new Date()
    var ano = data.getFullYear() //com 4 dígitos (full)
//Pegar o ano que foi preenchido no formulário que possui o id 'txtano' láá no HTML.
    var formAno = document.getElementById('txtano')
//Pegar para colocar o resultado lá no nosso <p> de id="res"
    var res = document.getElementById('res')

//Verificando se o ano que foi preenchido no formulário está vazio OU se ele é maior que o ano atual.
    if (formAno.value.length == 0 || formAno.value > ano) {
        alert('[ERRO] Por favor, verifique os dados e tente novamente.')
    } else {
        var formSexo = document.getElementsByName('radsex') //lembrando aqui que esse get pega + de 1 element!!
        var idade = ano - Number(formAno.value) //o value tá no form precisa ser number
        var sexo = '' //começa vazia pois nós vamos preencher com a escolha do cliente
        // var img = document.createElement('img') //criando nosso element da img
        // img.setAttribute('id', 'foto') //a mesma coisa que <img id="foto">
        var img = document.getElementById('img')

        if (formSexo[0].checked) { //[0] pois é a caixinha do sexo masculino
            sexo = 'masculino'
            if (idade >= 0 && idade < 10) { //CRIANÇA SEXO MASC.
                    // img.setAttribute('src', '')
                    img.innerHTML = "<img src='./imagens/menino1.jpg'"
            } else if (idade < 19) { //ADOLESCENTE SM

            } else if (idade < 30) { //JOVEM ADULTO SM

            } else if (idade < 60) { //ADULTO

            } else { //IDOSO

            }
        } else { //else do 1º if do sexo masculino
            sexo = 'feminino'
            if (idade >= 0 && idade < 10) { //CRIANÇA SEXO FEM.

            } else if (idade < 19) { //ADOLESCENTE SF

            } else if (idade < 30) { //JOVEM ADULTO SF

            } else if (idade < 60) { //ADULTA

            } else { //IDOSA

            }
        }
        res.innerHTML = `Detectamos o sexo ${sexo} com ${idade} ano(s).`
    }
    
}

// <!-- <img id="img" src="./imagens/menina1.jpg" alt="Foto da Pessoa." width="250"> -->