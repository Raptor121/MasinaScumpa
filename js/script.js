const cars = {
    audi: {
        models: ["A3", "A4", "A6"],
        prices: {
            A3: { black: 35000, white: 36000, red: 37000, blue: 38000 },
            A4: { black: 36000, white: 37000, red: 38000, blue: 39000 },
            A6: { black: 37000, white: 38000, red: 39000, blue: 40000 }
        }
    },
    bmw: {
        models: ["3 Series", "5 Series", "7 Series"],
        prices: {
            "3 Series": { black: 40000, white: 41000, red: 42000, blue: 43000 },
            "5 Series": { black: 41000, white: 42000, red: 43000, blue: 44000 },
            "7 Series": { black: 42000, white: 43000, red: 44000, blue: 45000 }
        }
    },
    toyota: {
        models: ["Camry", "Corolla", "RAV4"],
        prices: {
            Camry: { black: 25000, white: 25500, red: 26000, blue: 26500 },
            Corolla: { black: 25500, white: 26000, red: 26500, blue: 27000 },
            RAV4: { black: 26000, white: 26500, red: 27000, blue: 27500 }
        }
    },
    lada: {
        models: ["Vesta", "Granta", "Priora"],
        prices: {
            Vesta: { black: 15000, white: 15500, red: 16000, blue: 16500 },
            Granta: { black: 15500, white: 16000, red: 16500, blue: 17000 },
            Priora: { black: 16000, white: 16500, red: 17000, blue: 17500 }
        }
    }
};

const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");
const colorSelect = document.getElementById("color");
const priceValue = document.getElementById("priceValue");
const carImage = document.getElementById("carImage");
const calculateButton = document.getElementById("calculateButton"); // Selectăm butonul

// Populăm selectul de modele în funcție de marcă
brandSelect.addEventListener("change", () => {
    const brand = brandSelect.value;
    modelSelect.innerHTML = "";
    cars[brand].models.forEach(model => {
        const option = document.createElement("option");
        option.text = model;
        modelSelect.add(option);
    });
});

// Afișăm imaginea mașinii și calculăm prețul în funcție de modelul și culoarea selectate
function updateCar() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    const color = colorSelect.value;
    const imageURL = `images/${brand}_${model}_${color}.png`;

    console.log("Image URL:", imageURL); // Verificăm calea imaginii în consolă

    carImage.src = imageURL;

    const price = cars[brand].prices[model][color];
    priceValue.textContent = `$${price}`;
}

// Adăugăm evenimentul de click pe butonul de calculare
calculateButton.addEventListener("click", updateCar);

// Inițializăm valorile inițiale
brandSelect.dispatchEvent(new Event('change'));
