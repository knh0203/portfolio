        //로딩화면 숫자증가
        let numAnimation = document.querySelector('.loding');
        let targetNum = numAnimation.getAttribute('data-rate');
        let num = 0;

        let timer = setInterval( () => {
            ++num;
            numAnimation.innerText = num;
            if(num == targetNum){
                clearInterval(timer);
            }
        }, 25);

        //현재위치 스크롤바
        let underBar = document.querySelector('.underbar');
        let nowBar = document.querySelector('.nowBar');
    
        console.log(underBar, nowBar)

        window.addEventListener('scroll',()=>{
            scrollNow = document.documentElement.scrollTop;
            scrollPer = Math.floor((scrollNow / (document.body.scrollHeight * window.outerHeight) * 100000));
            console.log(scrollPer)
            nowBar.style.width = `${scrollPer+14}%`;
        })

        //마우스따라다니는 애
            const cursor = document.querySelector(".cursor");
            document.addEventListener("mousemove", (e) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
            });

            //가로스크롤
            const spaceHolder = document.querySelectorAll('.space-holder');
            const horizontal = document.querySelectorAll('.horizontal');
            const container = document.querySelectorAll('.container');
            const sticky = document.querySelectorAll('.sticky');


            function calcDynamicHeight(ref) {
                const vw = window.innerWidth;
                const vh = window.innerHeight;
                const objectWidth = ref.scrollWidth;
                return objectWidth - vw + vh + 150;
            }

            container.forEach(function(current, i) {
                spaceHolder[i].style.height = `${calcDynamicHeight(horizontal[i])}px`;
                window.addEventListener('scroll', () => { 
                    horizontal[i].style.transform = `translateX(-${sticky[i].offsetTop}px)`;
            });
            window.addEventListener('resize', () => {
                    spaceHolder[i].style.height = `${calcDynamicHeight(horizontal[i])}px`;
            });
        });


        //다크모드 동글뱅이
        const welcome = document.querySelector('.welcome');
        welcome.innerHTML = welcome.textContent.replace(/\S/g, "<span>$&</span>");
        const element2 = document.querySelectorAll('span');
        for (let i = 0; i < element2.length; i++) {
            element2[i].style.transform = 'rotate(' + i * 18 + 'deg)'

        }
        //다크모드
        let moon = document.querySelector('.moon');
        let toggle = document.querySelector('#toggle');
        let body = document.querySelector('body');

        toggle.addEventListener('click', () => {
            toggle.onclick = () => {
                toggle.classList.toggle('active');
                body.classList.toggle('light');
            }
        })
        
        //마우스 다운 사라지게 만들기
        let mouse = document.querySelector('.mouse');
        window.addEventListener('scroll', () => {
            mouse.classList.toggle('gone', window.scrollY > 0)
        });


        //맨 아래로 가면 업로드 된 날짜 사라지게끔
        let topline = document.querySelector('.top')
        window.addEventListener('scroll', () => {
            topline.classList.toggle('gone', window.scrollY > 5700)
        });

        //언더바
        let underbar = document.querySelector('.underbar');
        window.addEventListener('scroll', () => {
            underbar.classList.toggle('sticky', window.scrollY > 180)
        });

        //스크롤 하면 옆으로 이동
        window.addEventListener('scroll', () => {
        const left = document.querySelector('#left');
        const right = document.querySelector('#right');
        const hi = document.querySelector('.hi h1');
        const na = document.querySelector('.na h1');
        const moving = window.scrollY;
        left.style.left = moving * 7 + 'px';
        right.style.left = moving * 5 + 'px';
        hi.style.left = moving * 3 + 'px';
        na.style.left = moving * 1 + 'px';

})