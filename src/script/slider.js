if (document.body.offsetWidth < 1200) {
    const slides = ['url(assets/man-article.webp)',
        'url(assets/man-book.webp)',
        'url(assets/man-podcast.webp)',
        'url(assets/man-video.webp)'];

    const captions = ['Article', 'Research', 'Podcast', 'Video'];

    let step = 0;
    let clickDisabled = false;
    function bebas() {
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.classList.add('grid-item');
        p.classList.add('italic-header');
        div.appendChild(p).textContent = captions[step];
        div.style.backgroundImage = slides[step];
        document.querySelector('.img-container').appendChild(div);
        if (step + 1 === slides.length) {
            step = 0;
        } else {
            step++;
        }
        setTimeout(()=>clickDisabled = false, 500)
    }
    function left() {
        if (!clickDisabled) {
            clickDisabled = true;
            let slides2 = document.querySelectorAll(".grid-item");
            let offset2 = 0;
            for (let s = 0; s < slides2.length; s++) {
                slides2[s].style.left = offset2*315 - 315 + 'px';
                offset2++;
            }
            setTimeout(function (){
                slides2[0].remove();
                const bullets = document.querySelectorAll('.bullet');
                bebas();
                let i = 0;
                for (i; i < bullets.length; i++) {
                    if (bullets[i].classList.contains('bullet-active')) {
                        bullets[i].classList.remove('bullet-active');
                        bullets[(i+1)%4].classList.add('bullet-active');
                        break;
                    }
                }
            }, 500)
        }
    }
    document.querySelector('.img-container').addEventListener('click', left);
}

