document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form behavior
  const query = document.getElementById("searchBox").value.trim();

  if (query) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  }
});

