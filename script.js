const input = document.getElementById("word");
const fact = document.getElementById("fact");

const AUTH_TOKEN = "ebcd7984609ae94c7e685e0453386f6d510c729f";

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showMeaning(e.target.value);
  }
});

async function showMeaning(input) {
  const {
    data: { definitions, word },
  } = await axios.get(`https://owlbot.info/api/v4/dictionary/${input}`, {
    headers: {
      Authorization: `Token ${AUTH_TOKEN}`,
    },
  });

  console.log(definitions, word);

  let text = "";

  definitions.forEach((d) => {
    text += `
    <p>The word: ${word} ${d.emoji ? d.emoji : ""}</p>
    <p>Type: ${d.type}</p>
    <p>Definition: ${d.definition}</p>
    <p>Example: ${d.example}</p>
    <br />
    `;
  });

  fact.innerHTML = text;
}
