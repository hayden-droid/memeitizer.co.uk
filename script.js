const updateGradient = () => {
    const gradientElement = document.querySelector('.coming-soon');
    let gradientPosition = 0;

    setInterval(() => {
        if (gradientPosition > 100) {
            gradientPosition = 0;
        }
        gradientElement.style.backgroundPosition = `${gradientPosition}% 0%`;
        gradientPosition += 1;
    }, 50);
}

document.addEventListener('DOMContentLoaded', updateGradient);
