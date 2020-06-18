const nlToArr = el => Array.prototype.slice.call(el)

// https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
function smoothScroll(
  destination, 
  duration = 200, 
  callback
) {
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(
    document.body.scrollHeight, 
    document.body.offsetHeight, 
    document.documentElement.clientHeight, 
    document.documentElement.scrollHeight, 
    document.documentElement.offsetHeight
  );

  const windowHeight = window.innerHeight || 
    document.documentElement.clientHeight || 
    document.getElementsByTagName('body')[0].clientHeight;

  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;

  const destinationOffsetToScroll = Math.round(
    documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset
  );

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    // const timeFunction = easings[easing](time);
    const timeFunction = easeInOutQuad(time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) callback();
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

const addSmoothScroll = (trigger, target) => {
  if (trigger.length) {
    trigger.map(el => {
      el.addEventListener('click', () => {
        smoothScroll(target)
      })
      el.addEventListener('keyup', () => {
        smoothScroll(target)
      })
    })
  } else {
    trigger.addEventListener('click', () => {
      smoothScroll(target)
    })
    trigger.addEventListener('keyup', () => {
      smoothScroll(target)
    })
  }
}

const setTabIndex = (el, val) => {
  if (el.length) {
    el.map(x => x.tabIndex = val)
  } else {
    el.tabIndex = val
  }
}

export {
  nlToArr,
  smoothScroll,
  addSmoothScroll,
  setTabIndex,
}