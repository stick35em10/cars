const cars = [
    { id: 1, name: "Carro A", price: "R$ 30.000", details: "Detalhes sobre o Carro A." },
    { id: 2, name: "Carro B", price: "R$ 40.000", details: "Detalhes sobre o Carro B." },
    { id: 3, name: "Carro C", price: "R$ 50.000", details: "Detalhes sobre o Carro C." }
];

function displayCars() {
    const carContainer = document.getElementById('car-container');
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('card');
        carCard.innerHTML = `
            <h3>${car.name}</h3>
            <p>Preço: ${car.price}</p>
            <button onclick="showDetails(${car.id})">Mais Detalhes</button>
        `;
        carContainer.appendChild(carCard);
    });
}

function showDetails(carId) {
    const car = cars.find(c => c.id === carId);
    alert(car.details);
}

window.onload = displayCars;