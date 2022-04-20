export default async function getInitialData() {
  const res = await fetch("/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await res.json();

  return data;
}
