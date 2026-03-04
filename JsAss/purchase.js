//Q8. Items you can afford with your wallet budget

function itemPurchase(store, wallet){
    const price = (parsePrice)=> parseInt(parsePrice.replace(/[$,]/g,"")); // convert $1000 -> "1000"-> 1000

    let budget = price(wallet);
    let items = [];

    for(let item in store){
        if(price (store[item])<= budget){
            items.push(item);

        }
    }
    if(items.length=== 0) return "Nothing";
    return items.sort();

}

console.log(itemPurchase({ Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20" }, "$300"));