const categories = {
  motivational: [
    "You are strong and capable.",
    "Today is full of opportunities.",
    "You are enough just as you are.",
    "Success flows to you with ease.",
    "You radiate positivity and courage."
  ],
  inspirational: [
    "Dream big and dare to fail.",
    "Your only limit is your mind.",
    "Every day is a second chance.",
    "Turn your wounds into wisdom.",
    "The best time for new beginnings is now."
  ],
  gratitude: [
    "Be thankful for what you have.",
    "Gratitude turns what we have into enough.",
    "Appreciate the little things.",
    "Count your blessings, not your problems.",
    "Gratitude brings peace."
  ],
  selfCare: [
    "Taking care of yourself is productive.",
    "You deserve rest and care.",
    "Listen to your needs.",
    "Self-care is not selfish.",
    "Nurture your body, mind, and soul."
  ]
};

let currentCategory = 'motivational';

function getRandomQuote() {
  const quotes = categories[currentCategory];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateAffirmation() {
  document.getElementById('affirmation').innerText = getRandomQuote();
}

function switchCategory(category) {
  currentCategory = category;
  updateAffirmation();
}

function refreshQuote() {
  updateAffirmation();
}

function toggleShareOptions() {
  const menu = document.getElementById('share-options');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
}

function shareTo(platform) {
  const quote = encodeURIComponent(document.getElementById('affirmation').innerText);
  let url = '';
  switch (platform) {
    case 'twitter':
      url = `https://twitter.com/intent/tweet?text=${quote}`;
      break;
    case 'facebook':
      url = `https://www.facebook.com/sharer/sharer.php?quote=${quote}`;
      break;
    case 'instagram':
      alert('Instagram does not support direct quote sharing. Redirecting to Instagram.');
      url = 'https://www.instagram.com/';
      break;
    case 'threads':
      alert('Threads does not support direct quote sharing. Redirecting to Threads.');
      url = 'https://www.threads.net/';
      break;
  }
  window.open(url, '_blank');
  // Hide share options after selection
  toggleShareOptions();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

updateAffirmation();
