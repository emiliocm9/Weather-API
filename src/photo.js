import { mainDOM } from './constants';

const unsplashApi = (() => {
  const apiHost = 'https://source.unsplash.com/1600x900';

  const getImageBySearch = (query) => {
    const randomPhotoHost = `${apiHost}?${query}`;

    return fetch(randomPhotoHost, { method: 'get' });
  };

  return { getImageBySearch };
})();

const getImage = async (city) => {
  try {
    const response = await unsplashApi.getImageBySearch(city);
    mainDOM.classList.replace('d-none', 'd-block');
    mainDOM.src = response.url;
  } catch (error) {
    console.table(error);
  }
};

export default getImage;
