async function fetchData(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    return doc;
  } catch (error) {
    console.warn("Something went wrong.", error);
    throw error;
  }
}

async function insertHtmlIntoDiv(file, divId, activeid) {
  try {
    const doc = await fetchData(file);

    const div = document.getElementById(divId);
    div.innerHTML = "";
    //div.appendChild(doc.documentElement);
    div.insertAdjacentHTML("afterbegin", doc.documentElement.innerHTML);

    var els = document.getElementById(activeid);
    els.classList.add("active");
  } catch (error) {
    console.warn("Error inserting HTML into div:", error);
  }
}
