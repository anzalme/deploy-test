const navIcons = document.querySelectorAll('nav ul li a i');

navIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
        icon.style.transition = 'transform 0.3s ease';
    });
});