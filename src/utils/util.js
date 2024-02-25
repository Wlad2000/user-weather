/** Func Returns icon and status
 * @param {number} number weathercode
 * @example
 * randomNumberBetween(1) //return { icon: "⛅", status: "Mainly clear, partly cloudy, and overcast" };
 */
const getWeatherIcon = (weathercode) => {
    switch (weathercode) {
        case 0:
            // Clear sky
            return { icon: "☀️", status: "Clear sky" };
        case 1:
        case 2:
        case 3:
            // Mainly clear, partly cloudy, and overcast
            return { icon: "⛅", status: "Mainly clear", description:" Partly cloudy, and overcast" };
        case 45:
        case 48:
            // Fog and depositing rime fog
            return { icon: "🌫️", status: "Fog", description:"Depositing rime fog" };
        case 51:
        case 53:
        case 55:
            // Drizzle: Light, moderate, and dense intensity
            return { icon: "🌧️", status: "Drizzle", description: "Light, moderate, and dense intensity"};
        case 56:
        case 57:
            // Freezing Drizzle: Light and dense intensity
            return { icon: "❄️", status: "Freezing Drizzle", description:"Light and dense intensity" };
        case 61:
        case 63:
        case 65:
            // Rain: Slight, moderate and heavy intensity
            return { icon: "🌧️", status: "Rain", description:" Slight, moderate and heavy intensity" };
        case 66:
        case 67:
            // Freezing Rain: Light and heavy intensity
            return { icon: "❄️", status: "Freezing Rain", description:"Light and heavy intensity" };
        case 71:
        case 73:
        case 75:
            // Snow fall: Slight, moderate, and heavy intensity
            return { icon: "❄️", status: "Snow fall", description:"Slight, moderate, and heavy intensity" };
        case 77:
            // Snow grains
            return { icon: "❄️", status: " Snow grains" };
        case 80:
        case 81:
        case 82:
            // Rain showers: Slight, moderate, violent
            return { icon: "🌧️", status: "Rain showers", description:"Slight, moderate, and violent" };
        case 85:
        case 86:
            // Snow showers slight and heavy
            return { icon: "❄️", status: "Snow showers slight and heavy" };
        case 95:
        case 96:
        case 99:
            // Thunderstorm: Slight or moderate, with slight and heavy hail
            return { icon: "⛈️", status: "Thunderstorm", description:"With slight and heavy hail" };
        default:
            // Default icon for unknown weather code
            return { icon: "❓", status: "Unknown weather code" };
    }
};


module.exports = {
    getWeatherIcon, 
};