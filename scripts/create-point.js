function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}
populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const ufValue = event.target.value
    const indexOfSelectState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectState].value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "`<option value>Selecione a Cidade</option>`"
    citySelect.disabled = true
    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


//itens de coleta
//pegar todos os li`s
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

let selectedItems = [1, 2, 3, 4, 5, 6]

function handleSelectedItem(event) {
    const itemLi = event.target
        //adiconar ou remor uma classe com javascript
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados, se sim
    //pegar os itens seleciondos
    const alreadySelected = selectedItems.findIndex(item => {
            const itemFound = item == itemId //isso será true ou false
            return itemFound
        })
        //se já estiver selecionado

    if (alreadySelected >= 0) {
        //tirar da selecao
        const fil
    }
    //se não estiver selecionado. adicionar à seleção
    //atualizar o campo escondido com os itens selecionados

}