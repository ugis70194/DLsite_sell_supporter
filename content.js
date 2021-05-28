let lower = 0
let higher = 1000000

chrome.storage.local.get(['lower', 'higher'], (items) => {
    lower = Number(items.lower)
    higher = Number(items.higher)
})

window.onload = () => {
    let results = document.getElementsByClassName("work_price")
    for(let i = results.length-1; i >= 0; i--){
        var price = Number((results[i].textContent).slice(0, -1).replace(',', ''))
        if(price < lower || higher < price){
            ((results[i].parentElement).parentElement).parentElement.remove()
        }
    }
}
