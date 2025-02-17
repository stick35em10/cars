const cars = [
    { id: 1, name: "Toyota, Ractis", price: "350.000,00 MT", details: "Quilometragem: < 160 000 km,\n Ano: 2005/1,  \n Motor: 1,500cc,\n Trans.: Automática, \n	Combustível: Gasolina,\n" }, //"* Ano 2011 sport, \n* < 100.000Km, \n* piscas nos espelhos, \n* Aparelho bluetooth DVD/ Mp3/ HDD Aux câmera na retaguarda" },
    { id: 2, name: "Mazda, Verisa", price: "350.000,00 MT" , details: "Quilometragem: < 100 000 km,\n Ano:2009/1,   \n Motor: 1,490cc,\n Trans.: Automática, \n Combustível: Gasolina,\n" },
    { id: 3, name: "Nissan, Otti", price: "350.000,00 MT"  , details: "Quilometragem: < 100 000 km,\n Ano: 2011/12, \n Motor:   660cc,\n Trans.: Automática, \n Combustível: Gasolina"} //"Model Code: DBA-H82W,\nYear: 2010/5\nTransmission: AT\nDrive: 2WD\nDoor: 5,\nSteering: RHD,\nSeats: 4,\nEngine Type: 3G83\n\nEngine Size 650cc\nMileage < 100000km\nFuel PETROL" } //\nDimension 3.39m×1.47m×1.55m\nM3 7.724\nVehicle Weight 830kg\nGross Vehicle Weight 1,050kg
];

function displayCars() {
    const carContainer = document.getElementById('car-container');
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('card');
        carCard.innerHTML = `
            <h3>${car.name}</h3>
            <p>Preço: ${car.price}</p>
            <button onclick="mostrarAlerta(${car.id})">Mais Detalhes</button>
        `;
        carContainer.appendChild(carCard);
    });
}//<button onclick="showDetails(${car.id})">Mais Detalhes</button>

function mostrarAlerta(carId) {
    const car = cars.find(c => c.id === carId);
    //alert(car.details);
    Swal.fire({
        title: car.name, //'Título Personalizado',
        text: car.details,
        icon: 'info',
        confirmButtonText: 'OK'
    });
}

function showDetails(carId) {
    const car = cars.find(c => c.id === carId);
    alert(car.details);
    //Swal.fire({
    //    title: 'Título Personalizado',
    //    text: 'Esta é uma mensagem personalizada!',
    //    icon: 'info',
    //    confirmButtonText: 'OK'
    //});
    
}

window.onload = displayCars;