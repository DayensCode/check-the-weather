import baseService from './baseService';

export const getWeather = async (city) => {
    const access_token = "3e350e6959b24f798a1105030240407";
    const url = `/forecast.json?q=${city}&days=1&key=${access_token}`;

    const result = await baseService.get(url);
    return result.data;
}
