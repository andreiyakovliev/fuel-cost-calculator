// Підключення функціоналу "Чертоги Фрілансера"
import { data } from "isotope-layout";
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

//=============== Отримання данних ===============//

const button = document.getElementById('button');
const display = document.getElementById('display');

display.innerHTML = 0;

const calculateFuel = () => {
   const fuel = document.getElementById('fuel').value;
   const mileage = document.getElementById('mileage').value;
   const cost = document.getElementById('cost').value;

   const fuelPerKm = fuel / 100;
   const mileagePerKm = fuelPerKm * mileage;
   const fuelCost = mileagePerKm * cost;

   display.innerHTML = fuelCost.toFixed(2);
};

button.addEventListener('click', calculateFuel);
