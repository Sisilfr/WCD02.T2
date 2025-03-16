function convertDistance(value, unit) {
    if (unit === "cm") {
      return value / 100000 + ' km'; // Convert cm to km
    } else if (unit === "km") {
      return value * 100000 + ' cm'; // Convert km to cm
    } else {
      return 'tidak valid'; // other than before is invalid
    }
  }
  
  let distance = 100000; // Correct variable name
  console.log(convertDistance(distance, "cm")); // output 1km