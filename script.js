const baseUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/pkr.json";
const dropdowns = document.querySelectorAll(".dropdown select");

for(let select of dropdowns) {
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";

        }
        select.append(newOption);
    }


}


