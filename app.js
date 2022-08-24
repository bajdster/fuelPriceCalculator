
const result = document.querySelector("#result")
const countButton = document.querySelector("#countButton");
const fuelKind = document.querySelector(".fuelKind");
const icon = document.querySelector(".icon");

const fuelTypes = document.querySelectorAll(".fuelType");
let choosenFuelPrice = 0;


function countPrice(e)
{
    const selectFuels = document.querySelector("#fuels");
    const kilometers = document.querySelector("#kilometers");
    const consumption = document.querySelector("#consumption");
    e.preventDefault();

    // let selectedFuel = selectFuels.options[selectFuels.selectedIndex].innerHTML;

    // selectedFuelPrice=Number(selectedFuel.match(/\d\.\d\d/g))

    let consumePerHund = choosenFuelPrice*consumption.value;
    let distance = (kilometers.value/100);

    result.innerHTML = `${(consumePerHund*distance).toFixed(2)} zł`;

}

function checkFuel()
{
    fuelTypes.forEach(fuel=>fuel.classList.remove("active"))
    this.classList.toggle("active");
    choosenFuelPrice = Number(this.innerHTML.match(/\d\.\d\d/g))
}

fuelTypes.forEach(fuel=>fuel.addEventListener("click", checkFuel));
countButton.addEventListener("click", countPrice)

