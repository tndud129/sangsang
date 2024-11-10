const header = document.querySelector('header');

window.addEventListener('wheel', (e)=>{
    let del = e.deltaY > 0 ? true : false;
    
    if(del){
        header.classList.add('on');
    }else{
        header.classList.remove('on');
        
    }


});







const navUl = document.querySelector('.h_inner nav ul');
const depthItems = document.querySelectorAll('.depth');
const navBg = document.querySelector('.nav_bg');

navUl.addEventListener('mouseenter', () => {
    navBg.style.display = 'block';
    navBg.style.height = '0';
    navBg.style.overflow = 'hidden';
    navBg.style.transition = 'height 0.5s ease';

    navBg.offsetHeight;

    navBg.style.height = '30rem';

    depthItems.forEach(depth => {
        depth.style.display = 'block';
        depth.style.height = '0';
        depth.style.overflow = 'hidden';
        depth.style.transition = 'height 0.5s ease';

        depth.offsetHeight; 

        depth.style.height = '30rem';
    });
});

navUl.addEventListener('mouseleave', () => {
    navBg.style.height = '0';
    navBg.addEventListener('transitionend', () => {
        navBg.style.display = 'none';
    }, { once: true });

    depthItems.forEach(depth => {
        depth.style.height = '0';
        depth.addEventListener('transitionend', () => {
            depth.style.display = 'none';
        }, { once: true });
    });
});






const langWrap = document.querySelector('.langWrap ul li:first-child');
const hide = document.querySelector('.hide');

langWrap.addEventListener('click', () => {
    if(hide.style.display === 'none' || hide.style.display === ''){
        hide.style.display = 'block';
        hide.style.height = '0';
        hide.style.overflow = 'hidden';
        hide.style.transition = 'height 0.5s ease';

        requestAnimationFrame(()=>{
            hide.style.height = '5rem';
        });
    }else{
        hide.style.height = '0';
        hide.addEventListener('transitionend', () => {
            hide.style.display = 'none';
        }, {once: true});
    }
});


const closeBtn = document.querySelector('.close');
const hNav = document.querySelector('.h_nav');
const menuIcon = document.querySelector('.h_menu a'); 

// hNav.style.opacity = '0';
// hNav.style.visibility = 'hidden';
// hNav.style.transition = 'opacity 0.6s ease';

function toggleScroll(isOpen) {
    if (isOpen) {
        document.body.dataset.scrollPosition = window.pageYOffset;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.pageYOffset}px`; 
        document.body.style.width = '100%';
    } else {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        window.scrollTo(0, parseInt(document.body.dataset.scrollPosition || '0'));
    }
}

menuIcon.addEventListener('click', () => {
    console.log(menuIcon);
    hNav.style.display = 'block'; 
    requestAnimationFrame(() => {
        hNav.style.opacity = '1'; 
        hNav.style.visibility = 'visible';
        toggleScroll(true); 
    });
});

closeBtn.addEventListener('click', () => {
    hNav.style.opacity = '0'; 
    toggleScroll(false);
    hNav.addEventListener(
        'transitionend',
        () => {
            hNav.style.visibility = 'hidden';
            hNav.style.display = 'none';
        },
        { once: true }
    );
});


document.addEventListener('DOMContentLoaded', function() {

    const mobileNav = document.querySelector('.m_nav');
    const closeBtn = document.querySelector('.m_closeBtn');
    const mobileOpenBtn = document.querySelector('.m_menu a');


    const subMenus = document.querySelectorAll('.m_navDepth');
    subMenus.forEach(menu => {
        menu.style.display = 'none';
        menu.style.height = '0';
        menu.style.overflow = 'hidden';
        menu.style.transition = 'height 0.3s ease';
    });


    function preventScroll() {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        document.body.style.touchAction = 'none';
    }

    function allowScroll() {
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.touchAction = '';
    }

    function fadeIn(element, duration = 300) {
        element.style.opacity = 0;
        element.style.display = 'block';
        
        element.offsetHeight;
        
        element.style.transition = `opacity ${duration}ms ease`;
        element.style.opacity = 1;
    }

    function fadeOut(element, duration = 300) {
        element.style.opacity = 1;
        element.style.transition = `opacity ${duration}ms ease`;
        element.style.opacity = 0;

        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }

    mobileOpenBtn.addEventListener('click', function(e) {
        e.preventDefault();
        fadeIn(mobileNav);
        preventScroll();
    });

    closeBtn.addEventListener('click', function() {
        fadeOut(mobileNav);
        allowScroll();
    });

    const menuLinks = document.querySelectorAll('.m_navInner > ul > li > a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const subMenu = this.nextElementSibling;
            const isOpen = this.classList.contains('active');
            
            menuLinks.forEach(otherLink => {
                if(otherLink !== this && otherLink.classList.contains('active')) {
                    otherLink.classList.remove('active');
                    const otherMenu = otherLink.nextElementSibling;
                    slideUp(otherMenu);
                }
            });
            
            if(isOpen) {
                this.classList.remove('active');
                slideUp(subMenu);
            } else {
                this.classList.add('active');
                slideDown(subMenu);
            }
        });
    });

    function slideDown(element) {
        element.style.display = 'block';
        const height = element.scrollHeight;
        element.style.height = '0';
        element.offsetHeight;
        element.style.height = height + 'px';
    }

    function slideUp(element) {
        element.style.height = '0';
        element.addEventListener('transitionend', function handler() {
            element.style.display = 'none';
            element.removeEventListener('transitionend', handler);
        });
    }

    mobileNav.addEventListener('touchmove', function(e) {
        e.stopPropagation();
    }, { passive: false });
});