document.addEventListener("DOMContentLoaded", function() {
  var serviceA = document.querySelector(".service-a");
  var serviceB = document.querySelector(".service-b");
  var serviceC = document.querySelector(".service-c");
  var serviceItems = [serviceA, serviceB, serviceC];

  if (window.matchMedia("(min-width: 768px)").matches) {
    if (elementInViewport(serviceA)) {
      renderItems(serviceItems, true);
    }
  } else {
    renderItems(serviceItems);
  }

  window.addEventListener("scroll", function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      if (elementInViewport(serviceA) && !serviceA.classList.contains("show")) {
        renderItems(serviceItems, true);
      }
    } else {
      renderItems(serviceItems);
    }
  });
});

function renderItems(items, timeout) {
  if (timeout) {
    return (function() {
      for (var i = 0; i < items.length; i++) {
        var element = items[i];
        showElementWithTimeout(element, i * 500);
      }
    })();
  } else {
    return (function() {
      for (var i = 0; i < items.length; i++) {
        var element = items[i];
        showElement(element);
      }
    })();
  }
}

function showElement(element) {
  if (elementInViewport(element) && !element.classList.contains("show")) {
    element.classList.add("show");
  }
}

function showElementWithTimeout(element, timeout) {
  setTimeout(function() {
    element.classList.add("show");
  }, timeout);
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}
