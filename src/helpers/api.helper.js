import fetch from 'node-fetch';

const apiData = fetch("http://country.io/names.json")
  .then((res) => {
    return res.json();
  })
  .then((respuesta) => {
    return respuesta;
  })
  .catch((error) => {
    console.log(error);
  });

const printData = async () => {
  const da = await apiData;
  const map = new Map(Object.entries(da));
  const values = Array.from(map.values());
  return values;
};

export default apiData;
