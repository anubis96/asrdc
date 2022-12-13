console.log("Main Olivier");
const iconToggleMobileNav = document.getElementById('toggleMobileNav');
const iconToggleMobileClose = document.getElementById('iconToggleMobileClose');

iconToggleMobileNav.addEventListener("click", ()=>{
    const mobileNav = document.getElementById("mobile-content")
    // mobileNav.classList.toggle("none")
    // console.log(mobileNav);
    // mobileNav.classList.toggle("none")
    // mobileNav.style.transition = "all 2s"
    mobileNav.style.marginLeft = "-1%"

})
iconToggleMobileClose.addEventListener("click", ()=>{
    const mobileNav = document.getElementById("mobile-content")
    // mobileNav.classList.toggle("none")
    // console.log(mobileNav);
    // mobileNav.classList.toggle("none")
    // mobileNav.style.transition = "all 2s"
    mobileNav.style.marginLeft = "-100%"

})
// const iconToggleMobileCart = document.getElementById('openCart');
// const closeMobileNavs = [].slice.call(document.getElementsByClassName('mobile-close'));

// const toggleNav = (event) => {
//     const element = event.target;
//     const className = element.dataset.mobile;

//     const mobileNav = document.getElementsByClassName(className)[0];
    
//     if (!mobileNav.classList.contains("none")) {
//         mobileNav.classList.toggle("close");
//         window.setTimeout(()=>{
//             mobileNav.classList.toggle("none");
//             mobileNav.classList.toggle("close");
//             document.body.style.overflow= "";
//         },2000);
//     }else{
//         mobileNav.classList.toggle("none");
//         document.body.style.overflow= "hidden";
//     }
// }

// iconToggleMobileNav.addEventListener("click", toggleNav);
// iconToggleMobileCart.addEventListener("click", toggleNav);
// closeMobileNavs.forEach(element => {
//     element.addEventListener("click", toggleNav);
// });