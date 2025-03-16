function convertDistance(value: number, unit: string): string {
    if (unit === "cm") { // Convert centimeters to kilometers
        let kilometers = value / 100000;
        return `${kilometers} km`;
    } else if (unit === "km") {  // Convert kilometers to centimeters
        let centimeters = value * 100000;
        return `${centimeters} cm`;
    } else {
        return "Invalid unit";
    }
}

let distance = 100000;  // Example input value
let unit = "cm";  
console.log(convertDistance(distance, unit));  // Output 1 km
