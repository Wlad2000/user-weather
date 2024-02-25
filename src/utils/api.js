/****************************************************************************
**
**
**
**
****************************************************************************/
const fetchRandomUsers = async (count) => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=${count || 1}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching random users:', error);
      return [];
    }
  };
  
  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };
  
  const saveUserToLocalStorage = (user) => {
    try {
      const savedUsers = getUserFromLocalStorage();
      const userIndex = savedUsers.findIndex(savedUser => savedUser.login.uuid === user.login.uuid);
      if (userIndex !== -1) {
        savedUsers.splice(userIndex, 1); // Remove user if already saved
      } else {
        savedUsers.push(user);
      }
      localStorage.setItem('savedUsers', JSON.stringify(savedUsers));
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
    }
  };
  
  const getUserFromLocalStorage = () => {
    try {
      const savedUsers = JSON.parse(localStorage.getItem('savedUsers')) || [];
      return savedUsers;
    } catch (error) {
      console.error('Error fetching saved users from localStorage:', error);
      return [];
    }
  };
  
  export { fetchRandomUsers, fetchWeather, saveUserToLocalStorage, getUserFromLocalStorage };
  