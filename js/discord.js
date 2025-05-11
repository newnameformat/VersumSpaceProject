const discordIcon = document.querySelector('.discord-tooltip-wrapper img');
const tooltip = document.querySelector('.tooltip-text');

// Function to check if it's mobile view
function isMobileView() {
  return window.innerWidth <= 1100; // Default. Set your desired mobile breakpoint
}

function enableTooltip() {
  discordIcon.addEventListener('mouseenter', showTooltip);
  discordIcon.addEventListener('mouseleave', hideTooltip);
}

function disableTooltip() {
  discordIcon.removeEventListener('mouseenter', showTooltip);
  discordIcon.removeEventListener('mouseleave', hideTooltip);
}

function showTooltip() {
  const rect = discordIcon.getBoundingClientRect();
  tooltip.style.top = rect.bottom + 8 + 'px';
  tooltip.style.left = rect.left + rect.width / 2 + 'px';
  tooltip.style.opacity = 1;
  tooltip.style.visibility = 'visible';
}

function hideTooltip() {
  tooltip.style.opacity = 0;
  tooltip.style.visibility = 'hidden';
}

// On page load, initialize based on screen size
if (!isMobileView()) {
  enableTooltip(); // Enable tooltip for non-mobile view
} else {
  disableTooltip(); // Disable tooltip for mobile view
}

// Recheck on window resize
window.addEventListener('resize', () => {
  if (isMobileView()) {
    disableTooltip(); // Disable on mobile resize
  } else {
    enableTooltip(); // Enable on desktop resize
  }
});
