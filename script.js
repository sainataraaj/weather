let emojis = ["☀️", "🌧️", "⛈️", "🌈"];
let index = 0;
setInterval(() => {
    document.querySelector(".animation").innerHTML = emojis[index];
    index = (index + 1) % emojis.length;
}, 1000);
