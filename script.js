console.log("Welcome to my resume page!");

// This stuff makes the sidebar and main content scroll together
var s1 = document.getElementById('main-content');
var s2 = document.getElementById('sidebar');

function oneScroll(e) {
    let max1 = s1.scrollHeight - s1.offsetHeight;
    if(s1.scrollTop <= max1){
        let max2 = s2.scrollHeight - s2.offsetHeight;
        if(s1.scrollTop <= max2){
            s2.scrollTop = s1.scrollTop;
        }
    }
}

function twoScroll(e) {
    s1.scrollTop = s2.scrollTop;
}

s1.addEventListener('scroll', oneScroll, false);
s2.addEventListener('scroll', twoScroll, false);

// Function to highlight active section
function highlightActiveSection() {
    const sections = document.querySelectorAll("section");
    const sidebarLinks = document.querySelectorAll("#sidebar a");

    let index = sections.length;

    while (--index && window.scrollY + 200 < sections[index].offsetTop) {}

    sidebarLinks.forEach((link) => link.classList.remove("active"));
    if (index >= 0) sidebarLinks[index].classList.add("active");
}

window.addEventListener("scroll", highlightActiveSection);


// Function to adjust font size based on button width, accounting for padding
function adjustButtonFontSize() {
    const button = document.querySelector('.intro-btn'); // Select the button
    const rect = button.getBoundingClientRect(); // Get button size and position

    const width = rect.width; // Get the width of the button
    const paddingLeft = parseFloat(getComputedStyle(button).paddingLeft); // Get left padding
    const paddingRight = parseFloat(getComputedStyle(button).paddingRight); // Get right padding
    const effectiveWidth = width - paddingLeft - paddingRight; // Effective width for text

    const minFontSize = 4; // Minimum font size in pixels
    const maxFontSize = 15; // Maximum font size in pixels

    // Calculate font size based on effective button width
    let fontSize = Math.max(minFontSize, Math.min(maxFontSize, effectiveWidth / 14)); 

    button.style.fontSize = `${fontSize}px`; // Set the font size on the button
    console.log(`Button Width: ${width}px, Effective Width: ${effectiveWidth}px, Font Size: ${fontSize}px`); // Log the sizes
    }

    // Call the function to set initial font size
    adjustButtonFontSize();

    // Optionally, call this function on window resize to adjust font size
    window.addEventListener('resize', adjustButtonFontSize);             
        