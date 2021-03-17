export const fetchData = async () => {
  try {
    const response = await fetch("http://newsapi.org/v2/everything?q=tesla&from=2021-02-17&sortBy=publishedAt&apiKey=API_KEY");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
