export default async function getInitialData(fileName) {
  const res = await fetch(`/${fileName}.json`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const data = await res.json();

  return data;
}
