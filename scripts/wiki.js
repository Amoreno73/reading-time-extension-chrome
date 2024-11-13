const divs = document.querySelector("div.mw-body-content");

// `document.querySelector` may return null if the selector doesn't match anything.
if (divs) {
  const text = divs.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression that finds words
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  divs.insertAdjacentElement("afterBegin", badge);
}