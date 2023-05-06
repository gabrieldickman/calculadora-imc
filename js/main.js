// Seleciona o formulário do HTML
const form = document.querySelector('form');

// Cria um escutador para o evento submit e executa o cálculo no form
form.addEventListener('submit', function (e){

    // Tira o mecanismo padrão do butão 
    e.preventDefault();

    // Pega os inputs do form
    const inputPeso = document.getElementById('peso');
    const inputAltura = document.getElementById('altura');

    // Armazena os valores dos inputs e converte em números
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Se o valor digitado não for um número, ele retorna uma mensagem de erro
    if(!peso){
        setResultado('Peso inválido', false);
        return;
    } 

    // Se o valr digitado não for um número, ele retorna uma mensagem de erro
    if(!altura){
        setResultado('Altura inválido', false);
        return;
    }

    // Armazenando os valores retornados das funções
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    // Configurando a mensagem que irá aparecer com as informações coletadas
    const msg = `seu IMC é ${imc} (${nivelImc}).`

    // Eviando a mensagem de resultado para a div "resultado"
    setResultado(msg, true);
});

// Função que coleta o nível do IMC de acordo com o peso calculado
function getNivelImc(imc){
    // Array para armazenar todos os tipos de níveis do IMC
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    //Realizando as condições e retornando o nível do IMC de acordo
    if (imc >= 39.9){
        return nivel[5];
    }
    if(imc >= 34.9){
        return nivel[4];
    }
    if(imc >= 29.9){
        return nivel[3];
    }
    if(imc >= 24.9){
        return nivel[2];
    }
    if(imc >= 18.5){
        return nivel[1];
    }
    if(imc < 18.5){
        return nivel[0];
    }
}

// Função que calcula o IMC
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Função que cria um paragrafo
function createParagrafo (){

    const p = document.createElement('p');

    return p;
}

// Função que seta o resultado e verifica se é válido
function setResultado(msg, isValid){

    const resultado = document.querySelector('.resultado');

    // Toda vez que a função é chamada, o HTML é zerado.
    resultado.innerHTML = '';
    
    // Cria o P
    const p = createParagrafo();

    // Se a flag for verdadeira, é valido (fundo verde)
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        // Se a flag for falsa, não é valido (fundo vermelho)
        p.classList.add('bad');
    }
   
    // Adiciona na div "Resultado"
    p.innerHTML = msg;
    resultado.appendChild(p)

}