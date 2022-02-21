const cep = document.getElementById('cep')
const info = document.querySelector('.info')

const showData = (result) => {
  for(const campo in result){ 
    if(document.querySelector("#"+campo)){ 
      document.querySelector("#"+campo).value = result[campo] 
    }
  }
}


cep.addEventListener("blur", (e) => { 
  if(cep.value == ""){
    window.alert("Insira o Cep")
  }else{

    info.classList.add('show')
  }
  
  let search = cep.value.replace("-", "") 

  const options = {
    method: 'get',
    mode: 'cors',
    cache:'default'
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options) 
    
  .then((response) => response.json() 
  .then(data => showData(data))) 

  .catch(e => console.log(e))
  
})