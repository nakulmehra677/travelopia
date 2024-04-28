const fetcher = async (url) => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default fetcher;
