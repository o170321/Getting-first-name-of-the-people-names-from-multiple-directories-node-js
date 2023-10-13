let names_list = require("../country/state/city/index.js");
let getFirstNames = require("../utilities/utils/index.js");
function getPeopleInCity(names_list) {
  return getFirstNames(names_list);
}

module.exports = getPeopleInCity;
