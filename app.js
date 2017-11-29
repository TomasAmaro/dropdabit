var drumkit = document.getElementById('drumkitselector');
//OnLoad
window.onload = changeDrumKit(drumkit);


//Play chosen sample
window.addEventListener('keydown', function(event) {
    var keyCode = event.keyCode;
    var audio = document.querySelector('audio[data-key="' + keyCode + '"]');
    var keyPlayed = document.querySelector('.key[data-key="' + keyCode + '"]');

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    keyPlayed.classList.add('playing');
});

const keys = document.querySelectorAll('.key');

keys.forEach(function(key) {
    key.addEventListener('transitionend', function(event) {
        if (event.propertyName !== 'transform') return
        this.classList.remove('playing');
    });
});

//Select Drum Kit
function changeDrumKit(drumkit) {
    var audioElements = document.getElementsByTagName('audio');
    for (var i = 0; i < audioElements.length; i++) {
        var element = audioElements[i];
        element.src = 'sounds/' + drumkit.value + '/' + element.getAttribute('data-drum') + '.wav';
    }
    changeVisualProperties(drumkit.options[drumkit.selectedIndex]);
}

function changeVisualProperties(option) {
    var color = option.dataset.color;
    var bg = option.dataset.bg;
    var font = option.dataset.font;

    document.documentElement.style.setProperty('--basecolor', color);
    document.documentElement.style.setProperty('--imagename', "url(" + bg + ") bottom center;");
    // document.documentElement.style.setProperty('--font', font);

}