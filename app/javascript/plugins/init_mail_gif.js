const gif = document.querySelector('.frog-mail-gif');
const play = gif.dataset.playUrl;
const pause = gif.dataset.pauseUrl;

function useGif(e) {
  gif.src = play;
}

function usePng(e) {
  gif.src = pause;
}

const initMailGif =  () => {
  gif.addEventListener('mouseenter', (useGif));
  gif.addEventListener('mouseleave', (usePng));
}

export { initMailGif }
