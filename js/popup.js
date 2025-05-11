function showPopup() {
    document.getElementById('popup').classList.add('show');
}

function closePopup() {
    document.getElementById('popup').classList.remove('show');
}

// Show popup only on mobile view (max width 768px)
document.querySelector('.discord-tooltip-wrapper').addEventListener('click', function (e) {
    if (window.innerWidth <= 1000) {  // Default. Set your desired mobile breakpoint
        e.preventDefault();  // Prevent any default action (like navigating)
        showPopup();
    }
});

// on mobile: navigate when selection changes
var mobileMenu = document.getElementById('mobile-menu');
if (mobileMenu) {
    mobileMenu.addEventListener('change', function() {
        var url = this.value;
        if (url) window.location.href = url;
    });
}
