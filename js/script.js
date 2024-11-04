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

    requestAnimationFrame(() => {
        navBg.style.height = '30rem';
    });

    depthItems.forEach(depth => {
        depth.style.display = 'block';
        depth.style.height = '0';
        depth.style.overflow = 'hidden';
        depth.style.transition = 'height 0.5s ease';
        requestAnimationFrame(() => {
            depth.style.height = '30rem'; 
        });
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

// 초기 상태 설정
hNav.style.opacity = '0';
hNav.style.visibility = 'hidden';
hNav.style.transition = 'opacity 0.6s ease';

menuIcon.addEventListener('click', () => {
    console.log(menuIcon);
    hNav.style.display = 'block'; 
    requestAnimationFrame(() => {
        hNav.style.opacity = '1'; 
        hNav.style.visibility = 'visible';
    });
});

closeBtn.addEventListener('click', () => {
    hNav.style.opacity = '0'; 
    hNav.addEventListener(
        'transitionend',
        () => {
            hNav.style.visibility = 'hidden';
            hNav.style.display = 'none';
        },
        { once: true }
    );
});
