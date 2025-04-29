const discordIcon = document.querySelector('.discord-tooltip-wrapper img');
const tooltip = document.querySelector('.tooltip-text');

discordIcon.addEventListener('mouseenter', () => {
  const rect = discordIcon.getBoundingClientRect();
  tooltip.style.top = rect.bottom + 8 + 'px';
  tooltip.style.left = rect.left + rect.width / 2 + 'px';
  tooltip.style.opacity = 1;
  tooltip.style.visibility = 'visible';
});

discordIcon.addEventListener('mouseleave', () => {
  tooltip.style.opacity = 0;
  tooltip.style.visibility = 'hidden';
});