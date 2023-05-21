const tl = gsap.timeline({ paused: true });
let path = document.querySelector("path");
let spanBefore = CSSRulePlugin.getRule("#hamburger span::before");

gsap.set(spanBefore, { background: "#000" });
gsap.set(".menu", { visibility: "hidden" });

//toggle menu

function revealMenu() {
  revealMenuItems();

  const hamburger = document.getElementById("hamburger");
  const toggleBtn = document.getElementById("toggle-btn");

  toggleBtn.onclick = function (e) {
    hamburger.classList.toggle("active");
    tl.reversed(!tl.reversed());
  };
}

revealMenu();

function revealMenuItems() {
  const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";

  const power2 = "power2.inOut";
  const power4 = "power4.inOut";

  tl.to("#hamburger", 1.25, {
    marginTop: "-5px",
    x: -40,
    y: 40,
    ease: power4,
  });

  tl.to(
    "#hamburger span",
    1,
    {
      background: "#e2e2dc",
      ease: power2,
    },
    "<"
  );

  tl.to(
    spanBefore,
    1,
    {
      background: "#e2e2dc",
      ease: power2,
    },
    "<"
  );

  tl.to(
    ".btn .btn-outline",
    1.25,
    {
      x: -40,
      y: 40,
      width: "140px",
      height: "140px",
      border: "1px solid #e2e2dc",
      ease: power4,
    },
    "<"
  );

  tl.to(
    path,
    0.8,
    {
      attr: {
        d: start,
      },
      ease: Power2.easeIn,
    },
    "<"
  ).to(
    path,
    0.8,
    {
      attr: {
        d: end,
      },
      ease: Power2.easeIn,
    },
    "-=0.5"
  );

  tl.to(
    ".menu",
    1,
    {
      visibility: "visible",
    },
    "-=0.5"
  );

  tl.to(
    ".menu-item > a",
    1,
    {
      top: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.5,
      },
    },
    "-=1"
  ).reverse();
}

// test

const text = "zen(dev)";
const typingAnimation = document.getElementById("typing-animation");
const cursor = document.getElementById("cursor");

function typeWriter() {
  let index = 0;
  const typingSpeed = 125; // Speed of typing animation in milliseconds

  function type() {
    if (index < text.length) {
      typingAnimation.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    } else {
      cursor.style.animation = "blink-caret 1s infinite";
    }
  }

  type();
}

typeWriter();
