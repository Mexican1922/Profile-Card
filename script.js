const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeEl.textContent = Date.now();
}

// Initial render
updateTime();

// Update every second
setInterval(updateTime, 1000);
