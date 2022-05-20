var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()
  var form = document.querySelector('#form-adiciona')

  var paciente = obtemDadosPaciente(form)

  if (!validaPaciente(paciente)) {
    console.log('Paciente inválido')
    return
  }

  var pacienteTr = montarTr(paciente)
  var erros = validaPaciente(paciente)

  if (erros.length > 0) {
    var mensagemErro = document.querySelector("#mensagem-erro")
    mensagemErro.textContent = erros
    return
  }

  var tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)

  form.reset()
})

function obtemDadosPaciente(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente
}

function montarTr(paciente) {
  var pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')

  pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'))

  return pacienteTr
}

function montarTd(dado, classe) {
  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function validaPaciente(paciente) {
  var erros = []

  if (!validaPeso(paciente.peso)) {
    erros.push('O peso é inválido!')
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("A altura é inválida!")
  }

  return erros
}
