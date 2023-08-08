class Tourist {
  constructor(name, age, tours = []) {
    this.name = name;
    this.age = age;
    this.tours = tours;
  }

  buy(countryName, agency) {
    const buyTour = agency.sell(countryName);
    if (buyTour !== undefined) {
      this.tours.push(buyTour);
      return true;
    }
    return false;
  }
}

module.exports = Tourist;
