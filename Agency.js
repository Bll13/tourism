class Agency {
  constructor(money, tours = []) {
    this.money = money;
    this.tours = tours;
  }

  availableToursCount() {
    return this.tours.length;
  }

  findTour(countryName) {
    return this.tours.find((el) => el.country === countryName);
  }

  sell(countryName) {
    const sellTour = this.tours.find((el) => el.country === countryName);
    if (sellTour !== undefined) {
      this.money += sellTour.price;
      this.tours = this.tours.filter((el) => el !== sellTour);
      return sellTour;
    }
    return undefined;
  }
}

module.exports = Agency;
