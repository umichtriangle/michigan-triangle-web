// Replace the URLs below with your real links.
const LINKS = [
  { label: "Love Triangle GroupMe", url: "https://groupme.com/join_group/88837547/0PBuORnv" },
  { label: "Winter '26 Rush Interest Form", url: "https://forms.gle/y2GcB7iAZWshjU1o7" },
  { label: "Winter '26 Rush Facebook Group", url: "https://www.facebook.com/groups/743027821602815/" },
  { label: "Michigan Triangle Website", url: "https://michigantriangle.org/" },
  { label: "Michigan Triangle Instagram", url: "https://www.instagram.com/michigantriangle/" },
];

const linksList = document.getElementById("linksList");

function externalIconSVG() {
  return `
    <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/>
      <path fill="currentColor" d="M5 5h6v2H7v10h10v-4h2v6H5V5z"/>
    </svg>
  `;
}

function isPlaceholder(url) {
  return !url || url === "#" || /^PUT_?URL_?HERE$/i.test(url.trim());
}

for (const { label, url } of LINKS) {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.className = "link";
  a.href = url || "#";
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  a.innerHTML = `
    <span class="label">${label}</span>
    ${externalIconSVG()}
  `;

  a.addEventListener("click", (e) => {
    if (isPlaceholder(url)) {
      e.preventDefault();
      alert(`Update the URL for:\n\n"${label}"\n\nin script.js`);
    }
  });

  li.appendChild(a);
  linksList.appendChild(li);
}
