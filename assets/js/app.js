const trigger = document.querySelector('.article-preview-wrapper');
const authorSection = document.querySelector('.article-author-info-wrapper');
const socialSection = document.querySelector('.article-hover-socials');
const socialTriangle = document.querySelector('.triangle-down');

var windowWidth = window.matchMedia("(max-width: 750px)")

function socialBreakpoint(windowWidth) {
  if (windowWidth.matches) {

    trigger.addEventListener('mouseover', () => {
      socialSection.style.display = 'flex';
      authorSection.style.display = 'none';
      socialTriangle.style.display = 'inline';
    });

    trigger.addEventListener('mouseout', () => {
      socialSection.style.display = 'none';
      authorSection.style.display = 'flex';
      socialTriangle.style.display = 'none';
    });

  } else {

   trigger.addEventListener('mouseover', () => {
      socialSection.style.display = 'inline-flex';
      authorSection.style.display = 'none';
      socialTriangle.style.display = 'inline';
    });

    trigger.addEventListener('mouseout', () => {
      socialSection.style.display = 'none';
      authorSection.style.display = 'flex';
      socialTriangle.style.display = 'none';
    });

  }

}

socialBreakpoint(windowWidth);

windowWidth.addEventListener("change", function() {
  socialBreakpoint(windowWidth);
});