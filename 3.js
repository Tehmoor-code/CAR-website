// Car data
const cars = [
    { make: "Toyota", model: "RAV4", type: "SUV", year: 2022 },
    { make: "Honda", model: "Civic", type: "Sedan", year: 2021 },
    { make: "Ford", model: "F-150", type: "Truck", year: 2020 },
    { make: "Chevrolet", model: "Corvette", type: "Sports", year: 2023 },
    { make: "BMW", model: "X5", type: "SUV", year: 2022 },
    { make: "Tesla", model: "Model S", type: "Sedan", year: 2023 },
  ];
  
  // DOM elements
  const carListings = document.getElementById("car-listings");
  const chips = document.querySelectorAll(".chip");
  
  // Function to display cars
  function displayCars(filteredCars) {
    carListings.innerHTML = ""; // Clear existing cars
    filteredCars.forEach((car) => {
      const carCard = document.createElement("div");
      carCard.className = "car-card";
      carCard.innerHTML = `
        <h3>${car.make} ${car.model}</h3>
        <p>Type: ${car.type}</p>
        <p>Year: ${car.year}</p>
      `;
      carListings.appendChild(carCard);
    });
  }
  
  // Show all cars initially
  displayCars(cars);
  
  // Filter cars based on category
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // Update active chip
      document.querySelector(".chip.active").classList.remove("active");
      chip.classList.add("active");
  
      // Filter cars
      const category = chip.dataset.category;
      if (category === "all") {
        displayCars(cars);
      } else {
        const filteredCars = cars.filter((car) => car.type === category);
        displayCars(filteredCars);
      }
    });
  });
  