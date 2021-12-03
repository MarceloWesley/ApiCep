const cep = document.getElementById('cep')

const showData = (result) => {
  for(const campo in result){ 
    if(document.querySelector("#"+campo)){ //condição que "se no dom tiver o ID existente na arvore dom. e como colocamos os ids na dom, com o msm nome de retorno das chave da api. foi so colocar o 'campo' que recebe essas chaves.
      document.querySelector("#"+campo).value = result[campo] // adicionando a esse id na arvore dom, o resultado da requisição. 
    }
  }
}


cep.addEventListener("blur", (e) => { // o evento que estamos escutando aqui é o blur, que é quando clicamos em algo, digitamos e clicamos fora desse algo. quando fizemos isso a função sera ativa.

  let search = cep.value.replace("-", "") // como geralmente os cep tem esse traço, nos usamos o replace para tirar o traço e trocar por nada.

  const options = { // isso não é obrigatorio, só é algo que enviamos para api, para dizer nossas intençoes. porem a maioria já é padrão.
    method: 'get',
    mode: 'cors',
    cache:'default'
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options) // aqui digitamos o link da api e no lugar do cep colocamos a variavel que recebeu o cep.
    
  .then((response) => response.json() // promise para passar o response para json.
  .then(data => showData(data))) //mandando a resposta em json como argumento para a função ShowData.

  .catch(e => console.log(e)) // capturador de erros.
  
})