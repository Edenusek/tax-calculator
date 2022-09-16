const taxOption = document.getElementById("tax");
const vatOption = document.getElementById("vat");
const vatArray = document.querySelectorAll(".vat-array");
const inputIncome = document.querySelector(".input-income");
const inputCost = document.querySelector(".input-cost");
const resultBtn = document.querySelector(".resultBtn");
const resetBtn = document.querySelector(".resetBtn");
const errorMethod = document.querySelector(".error-method");
const errorCost = document.querySelector(".error-cost");
const errorIncome = document.querySelector(".error-income");
const errorVat = document.querySelector(".error-vat");
const result = document.querySelector(".result-number");
const divCost = document.querySelector(".costs");
const vatDiv = document.querySelector(".vat-div");
const hideVatOption = document.querySelector(".flat-rate");
const disabledVat = document.querySelectorAll(".disable");





const taxAmount = () => {
	error()
	if (inputIncome.value !== "" && taxOption.selectedIndex === 1 && vatOption.selectedIndex !== 0 ) {
		flatRate();
	} else if (
		inputIncome.value !== "" &&
		inputCost.value !== "" &&
		taxOption.selectedIndex === 2
	) {
		flatTax();
	} else if (
		inputIncome.value !== "" &&
		inputCost.value !== "" &&
		taxOption.selectedIndex === 3
	) {
		generalRules();
	}
};

const flatRate = () => {
	if (vatOption.selectedIndex === 1) {
		taxResult = Math.round((inputIncome.value - 1124.23) * 0.03);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	} else if (vatOption.selectedIndex === 2) {
		taxResult = Math.round((inputIncome.value - 1124.23) * 0.055);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	} else if (vatOption.selectedIndex === 3) {
		taxResult = Math.round((inputIncome.value - 1124.23) * 0.085);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	} else if (vatOption.selectedIndex === 4) {
		taxResult = Math.round((inputIncome.value - 1124.23) * 0.1);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	} else if (vatOption.selectedIndex === 5) {
		taxResult = Math.round((inputIncome.value - 1124.23) * 0.12);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	} else if (vatOption.selectedIndex === 6) {
		taxResult = Math.round((inputIncome.value - 1124.23) * 0.125);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	} else if (vatOption.selectedIndex === 7) {
		taxResult = Math.round((inputIncome.value - 1124.23) * 0.14);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	} else if (vatOption.selectedIndex === 8) {
		taxResult = Math.round((inputIncome.value - 1124.23) * 0.15);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	} else if (vatOption.selectedIndex === 9) {
		taxResult = Math.round((inputIncome.value - 1124.23) * 0.17);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	} else if (vatOption.selectedIndex === 10) {
		taxResult = Math.round((inputIncome.value - 1124.23) * 0.32);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	}

	inputIncome.value = "";
	inputCost.value = "";
	taxOption.selectedIndex = 0;
	vatOption.selectedIndex = 0;
	errorIncome.textContent = "";
	errorCost.textContent = "";
	errorMethod.textContent = "";
	errorVat.textContent = "";
};

const flatTax = () => {
	taxResult = Math.round(
		(inputIncome.value - inputCost.value - 1124.23) * 0.19
	);
	result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	resetAll();
};

const generalRules = () => {
	if (vatOption.selectedIndex === 9) {
		taxResult = Math.round((inputIncome.value - inputCost.value) * 0.17);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	} else if (vatOption.selectedIndex === 10) {
		taxResult = Math.round((inputIncome.value - inputCost.value) * 0.32);
		result.textContent = `Masz do zapłacenia ${taxResult} zł podatku`;
	}
	resetAll();
};
const resetAll = () => {
	inputIncome.value = "";
	inputCost.value = "";
	taxOption.selectedIndex = 0;
	vatOption.selectedIndex = 0;
	errorIncome.textContent = "";
	errorCost.textContent = "";
	errorMethod.textContent = "";
	errorVat.textContent = "";
	
};

const error = () => {
	if (inputCost.value === "") {
		errorCost.textContent = "Musisz podać koszty";
	}else {
		errorCost.textContent = "";
	}
	if (inputIncome.value === "") {
		errorIncome.textContent = "Musisz podać przychód";
	}else{
		errorIncome.textContent = "";
	}
	if (taxOption.selectedIndex === 0) {
		errorMethod.textContent = "Musisz wybrać metodę opodatkowania";
	}else {
		errorMethod.textContent = "";
	}
	if (vatOption.selectedIndex === 0) {
		errorVat.textContent = "Musisz wybrać stawkę opodatkowania";
	}else {
		errorVat.textContent = "";
	}
	
};
const resetTax = () => {
	inputIncome.value = "";
	inputCost.value = "";
	taxOption.selectedIndex = 0;
	vatOption.selectedIndex = 0;
	errorIncome.textContent = "";
	errorCost.textContent = "";
	errorMethod.textContent = "";
	result.textContent = "";
	errorVat.textContent = "";
	vatDiv.style.display = "";
	divCost.classList.remove("hide");
	
};

const vatDisabled = () => {

}

resultBtn.addEventListener("click", taxAmount);
resetBtn.addEventListener("click", resetTax);
taxOption.addEventListener("change", e => {
	if (taxOption.selectedIndex === 1) {
		disabledVat.forEach(option => option.removeAttribute('disabled'))
		errorCost.style.display = 'none'
		divCost.classList.add("hide");
		vatDiv.style.display = "";
	} else if (taxOption.selectedIndex === 2) {
		errorCost.style.display = ''
		errorVat.classList.add('hide')
		vatDiv.style.display = "none";
		divCost.classList.remove("hide");
	} else if (taxOption.selectedIndex === 3) {
		disabledVat.forEach(option => option.setAttribute('disabled', 'disabled'))
		errorVat.classList.remove('hide')
		errorCost.style.display = ''
		vatDiv.style.display = "";
		divCost.classList.remove("hide");
	}
});
