document.getElementById('overlay').addEventListener('click', function () {
    const music = document.getElementById('background-music');
    music.volume = 0.3
    music.play();

    this.style.opacity = '0';

    setTimeout(() => {
        this.style.display = 'none';
    }, 1000);
});

function typingAnimation(element, text, delay = 50) {
    element.textContent = '';
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

function deleteAndType(element, newText, pauseBefore = 5000, pauseAfter = 1000) {
    setTimeout(() => {
        let text = element.textContent;
        const deleteInterval = setInterval(() => {
            if (text.length > 0) {
                text = text.slice(0, -1);
                element.textContent = text;
            } else {
                clearInterval(deleteInterval);

                setTimeout(() => {
                    typingAnimation(element, newText);
                }, pauseAfter);
            }
        }, 50);
    }, pauseBefore);
}

const animatedSubtext = document.getElementById('animated-subtext');
deleteAndType(animatedSubtext, 'scare.lol');
