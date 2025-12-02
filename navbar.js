let darkmode = localStorage.getItem('darkmode');
let checked = localStorage.getItem('checked');
const themeSwitch = document.getElementById('theme-check');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    localStorage.setItem('checked','active');
}
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    localStorage.setItem('checked', null);
}
if(darkmode === 'active') enableDarkMode();
if(checked == 'active') themeSwitch.checked = true;

themeSwitch.addEventListener('input', () => {
    darkmode = localStorage.getItem('darkmode');
    checked = localStorage.getItem('checked');
    darkmode != 'active' ? enableDarkMode() : disableDarkMode();
    checked != 'active' ? themeSwitch.checked = true : themeSwitch.checked = false;
});

const navSwitch = document.getElementById('nav-check');
const navBar = document.getElementById('navbar');

navSwitch.addEventListener('input', () => {
    navSwitch.checked ? navBar.style.width = '32dvw' : navBar.style.width = 'var(--nav-short-end-size)';
})

localStorage.setItem('local_record',`{
  "storybook": {
    "anchor_url": "storybook_case_study.html",
    "pic_src": "./images/home/StorybookThumb-2x.png",
    "pic_alt": "storybook documentation of Arity color palette",
    "heading": "Bridging design and development",
    "keywords": "Cross Functional, prototyping, coding",
    "caption": "I worked across dev and design teams to standardize Arity web styling."
  },
  "yfm": {
    "anchor_url": "#",
    "pic_src": "./images/home/YFMThumb-2x.png",
    "pic_alt": "Youth Futures Movement nonprofit homepage picture",
    "heading": "Defining nonprofit branding",
    "keywords": "Stakeholder Relations, Brand Strategy, User Research",
    "caption": "I worked with Youth Futures Movement on a branding redesign."
  },
  "d4sd": {
    "anchor_url": "#",
    "pic_src": "./images/home/D4SDThumb-2x.png",
    "pic_alt": "Design for San Diego website homepage picture",
    "heading": "Challenging the housing crisis",
    "keywords": "Visual Design, Brand Strategy, Cross Functional",
    "caption": "I led the creation of the D4SD 2024 website."
  },
  "sleeve": {
    "anchor_url": "#",
    "pic_src": "https://framerusercontent.com/images/BLWwOZ85SRO5Ab3JknAMrTGKzs.png?scale-down-to=2048&width=2812&height=1800",
    "pic_alt": "Image demonstrating sleeve extension for fast fashion alts",
    "heading": "Sleeve Chrome Extension",
    "keywords": "Product design, 2023",
    "caption": "Built a way to find fast fashion alternatives and access a sustainable marketplace"
  },
  "arctas": {
    "anchor_url": "#",
    "pic_src": "https://framerusercontent.com/images/NDJ0kRQcnrvjlGNvBFjAe9F2qY8.png?scale-down-to=2048&width=2812&height=1800",
    "pic_alt": "arctas home dashboard picture",
    "heading": "Arctas",
    "keywords": "Product design, design systems, 2024",
    "caption": "Led a team to improve discoverability for government contracting opportunities"
  },
  "forge": {
    "anchor_url": "#",
    "pic_src": "https://framerusercontent.com/images/7WRnExCFrur3NH60E8UwwmAEZE.png?width=3840&height=2160",
    "pic_alt": "picture of design system components by genAI",
    "heading": "Forge",
    "keywords": "Product design",
    "caption": "Forge is an AI-assisted Design system builder"
  },
  "intlab": {
    "anchor_url": "#",
    "pic_src": "https://framerusercontent.com/images/3lF8juL2plIv3EpkXGFmtswZM.png?width=3672&height=2376",
    "pic_alt": "Picture of different prototype user interface components",
    "heading": "Interface Lab",
    "keywords": "Design Engineering",
    "caption": "A curation of prototypes of design explorations, engineered in code."
  },
  "moraltester": {
    "anchor_url": "#",
    "pic_src": "https://framerusercontent.com/images/2Ild7a9d7uoEytTSfdlRjYS490.png?width=1440&height=900",
    "pic_alt": "Picture of bus stop with advertising of moral tester app",
    "heading": "Moral Tester",
    "keywords": "Product Design",
    "caption": "Moral tester is an app that lets users know what type of morals they have concerning self driving cars"
  }
}`);