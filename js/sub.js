const mainMenu = document.querySelector('.h_inner > nav > ul');
const menuBg = document.querySelector('.nav_bg');
const subMenus = document.querySelectorAll('.depth');
let isEnter = true;

function toggleMenu(show) {
    const elements = [menuBg, ...subMenus];
    
    if (show) {
        isEnter = true;
        elements.forEach(el => {
            el.style.display = 'block';
            el.style.height = '0';
            el.style.overflow = 'hidden';
        });

        // 강제 리플로우
        menuBg.offsetHeight;

        // 모든 요소 동시에 height 변경
        elements.forEach(el => {
            el.style.height = '30rem';
        });
    } else {
        isEnter = false;
        // 모든 요소 동시에 height 0
        elements.forEach(el => {
            el.style.height = '0';
        });

        setTimeout(() => {
            if (!isEnter) {
                elements.forEach(el => {
                    el.style.display = 'none';
                });
            }
        }, 300);
    }
}

mainMenu.addEventListener('mouseenter', () => toggleMenu(true));
mainMenu.addEventListener('mouseleave', () => toggleMenu(false));






const menuItems = document.querySelectorAll('.h_inner > nav > ul > li');
const activeColor = '#00BFB6';

menuItems.forEach((item, index) => {
    const depthMenu = item.querySelector('.depth');
    const menuLink = item.querySelector('a');

    if(depthMenu) {
        depthMenu.addEventListener('mouseenter' , () => {
            menuLink.style.color = activeColor;
        });

        depthMenu.addEventListener('mouseleave' , () => {
            menuLink.style.color = '';
        });
    }
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

// 초기 상태 설정 (CSS와 동일하게)
hNav.style.opacity = '0';
hNav.style.visibility = 'hidden';
hNav.style.display = 'none';

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

// 메뉴 열기
menuIcon.addEventListener('click', () => {
    // 1. 먼저 display block
    hNav.style.display = 'block';
    
    // 2. 강제 리플로우로 transition 활성화
    hNav.offsetHeight;
    
    // 3. opacity와 visibility 변경
    hNav.style.opacity = '1';
    hNav.style.visibility = 'visible';
    
    // 4. 스크롤 막기
    toggleScroll(true);
});

// 메뉴 닫기
closeBtn.addEventListener('click', () => {
    // 1. opacity 0으로 페이드 아웃
    hNav.style.opacity = '0';
    hNav.style.visibility = 'hidden';
    
    // 2. 스크롤 허용
    toggleScroll(false);
    
    // 3. transition 끝난 후 display none
    setTimeout(() => {
        if(hNav.style.opacity === '0') {
            hNav.style.display = 'none';
        }
    }, 600); // transition 시간(0.6s)과 동일하게 설정
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


document.addEventListener('DOMContentLoaded', function(){
    const depthLinks = document.querySelectorAll('.S3depth > ul > li > a');
    const sections = ['.S3It', '.S3Fund', '.S3Heavy'];

    depthLinks.forEach((link, index) => {
        link.addEventListener('click' , (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(sections[index]);

            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});