function toggleMenu() {
    const navLinks = document.querySelector('nav ul');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

function navigateToPortfolio() {
    window.location.href = '#portfolio';
}
function togglePortfolioContent(id) {
    const content = document.getElementById(id);
    content.classList.toggle('active');
}
function showImage(id) {
    const image = document.getElementById(id);
    if (image.style.display === 'none' || image.style.display === '') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}


