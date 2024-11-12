const header = document.querySelector('header');

window.addEventListener('wheel', (e)=>{
    let del = e.deltaY > 0 ? true : false;
    
    if(del){
        header.classList.add('on');
    }else{
        header.classList.remove('on');
        
    }


});


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

hNav.style.opacity = '0';
hNav.style.visibility = 'hidden';
hNav.style.transition = 'opacity 0.6s ease';

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

// 이징함수 불러오기 맘에 안드시면 다른거 찾아보시는거두....ㅎ
const easeOutQuart = (x) =>{
    return 1 - Math.pow(1 - x, 4);
}
        //왼쪽부터 카운트 목표 숫자, 바뀔 타겟, 지속시간(기본 2초)
const number = (targetNum, target, duration= 2000) => {

        //지금 시간으로 시작
        const startTime = performance.now();
        const startValue = 0;  //0부터
                //currentTime 은 performance.now() 랑 동일한 시간 체계 지난 시간 가져오기
        const update = (currentTime) =>{
            const time = currentTime - startTime;
            //지난 시간들 정도
            const progress = Math.min(time / duration, 1);

            // 이징함수 불러오기
            const easedProgress = easeOutQuart(progress);
            // 시간에 따라 오른 정도 가져오는 공식
            const currentValue = Math.floor(startValue + (targetNum - startValue) * easedProgress);
            
            //텍스트 변경해주기
            target.textContent = currentValue.toLocaleString();

            if(progress < 1){
                //다시 호출
                requestAnimationFrame(update);
            }
        }
        //requestAnimationFrame으로 호출
        requestAnimationFrame(update);
}

//함수 실행부분
    const stockText = document.querySelector('.StockText h1');

    number(1619, stockText); //duration 없으면 2 초