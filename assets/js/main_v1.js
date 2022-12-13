console.log("Main Olivier");
const iconToggleMobileNav = document.getElementById('toggleMobileNav');
const closeMobileNavs = [].slice.call(document.getElementsByClassName('mobile-close'));

const toggleNav = () => {
    const mobileNav = document.getElementsByClassName('mobile')[0];
    
    if (!mobileNav.classList.contains("none")) {
        mobileNav.classList.toggle("close");
        window.setTimeout(()=>{
            mobileNav.classList.toggle("none");
            mobileNav.classList.toggle("close");
            document.body.style.overflow= "";
        },2000);
    }else{
        mobileNav.classList.toggle("none");
        document.body.style.overflow= "hidden";
    }
}

iconToggleMobileNav.addEventListener("click", toggleNav);
closeMobileNavs.forEach(element => {
    element.addEventListener("click", toggleNav);
});