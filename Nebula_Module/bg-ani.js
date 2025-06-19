document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById('hero');
  const numberOfStars = 80;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    
    const duration = (Math.random() * 3 + 2).toFixed(2); // 2s to 5s
    const delay = (Math.random() * 5).toFixed(2);        // 0s to 5s
    
    star.style.animationDuration = `durations`;
    star.style.animationDelay = `{delay}s`;

    hero.appendChild(star);
  }
});