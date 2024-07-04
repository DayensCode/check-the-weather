import baseService from './baseService';

export const getWeather = async (city) => {
    const access_token = "3e350e6959b24f798a1105030240407";
    const url = `/current.json?key=${access_token}&q=${city}`;

    const result = await baseService.get(url);
    return result.data;
}
