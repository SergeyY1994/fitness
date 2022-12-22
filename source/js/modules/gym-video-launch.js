const gymVideoElement = document.querySelector('.gym__video');
const gymVideoButtonElement = document.querySelector('.gym__video-button');
const gymVideoWrapperElement = document.querySelector('.gym__video-wrapper');

if (gymVideoWrapperElement && gymVideoButtonElement && gymVideoElement) {
  gymVideoWrapperElement.setAttribute('data-is-js', 'true');
  gymVideoButtonElement.setAttribute('data-is-js', 'true');
  gymVideoElement.setAttribute('tabindex', '-1');

  gymVideoButtonElement.addEventListener('click', launchVideo);
}

function launchVideo() {
  gymVideoElement.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  gymVideoWrapperElement.removeAttribute('data-is-js');
  gymVideoButtonElement.removeAttribute('data-is-js');
}
