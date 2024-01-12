class CustomHeader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const deskNav = document.createElement('nav')
        deskNav.setAttribute('class','d-nav');

        const deskNavWrap = document.createElement('div');
        deskNavWrap.setAttribute('class','d-nav-wrapper');
        deskNav.appendChild(deskNavWrap);

        const deskLogoWrap = document.createElement('div');
        deskLogoWrap.setAttribute('class','d-logo-wrapper');
        deskNavWrap.appendChild(deskLogoWrap);

        const logoLink = document.createElement('a');
        logoLink.href = 'index.html';
        deskLogoWrap.appendChild(logoLink);

        const logoImg = document.createElement('img');
        logoImg.src = 'images/logo-gray-transp.png';
        logoImg.setAttribute('class','d-nav-logo');
        logoImg.alt = 'logo-img';
        logoLink.appendChild(logoImg);

        const deskNavBar = document.createElement('div');
        deskNavBar.setAttribute('class','d-nav-bar');
        deskNavWrap.appendChild(deskNavBar);

        const ulElement = document.createElement('ul');
        deskNavBar.appendChild(ulElement);

        const homeListItem = document.createElement('li');
        const homeLink = document.createElement('a');
        homeLink.classList.add('d-nav-link');
        homeLink.href = 'index.html';
        homeLink.textContent = 'HOME';
        homeListItem.appendChild(homeLink);

        const aboutListItem = document.createElement('li');
        const aboutLink = document.createElement('a');
        aboutLink.classList.add('d-nav-link');
        aboutLink.href = 'about.html';
        aboutLink.textContent = 'ABOUT';
        aboutListItem.appendChild(aboutLink);

        const projectListItem = document.createElement('li');
        const projectLink = document.createElement('a');
        projectLink.classList.add('d-nav-link');
        projectLink.href = 'project.html';
        projectLink.textContent = 'PROJECT';

        // const pointDot = document.createElement('span');
        // pointDot.classList.add('point-dot');

        projectListItem.appendChild(projectLink);

        ulElement.appendChild(homeListItem);
        ulElement.appendChild(aboutListItem);
        ulElement.appendChild(projectListItem);

        const style = document.createElement('style');        
        style.textContent = `
        a{
            display: block;
            text-decoration: none; 
        }
        nav{
            width: 100vw;
            position: fixed;
            padding: 10px 16px;
            z-index: 5;
        }
        
        .nav-logo{
            width: 54px;
            height: 32px;
            object-fit: cover;
            object-position: center;
        }
        
        .active{
            background-color: rgba(43, 43, 43, 0.5);
            border-radius: 30px;
        }
        
        
        .m-nav-wrapper{
            margin: 0 auto;
            padding: 8px 18px;
            border-radius: 24px;
            background-color: rgba(72,71,71,0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 0.3px solid var(--lightgray);
        }
        
        
        .mobile-nav-bar{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .mobile-nav-bar a{
            line-height: 0;
        }
        
        .m-nav-wrapper ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: space-between;
        }
        
        .m-nav-wrapper ul li{
            text-align: right;
            font-family: 'Josefin Sans', sans-serif;
            list-style: none;
            font-size: 0.8rem;
        }
        
        .m-nav-link{
            color: white;
            padding: 8px 16px;
            margin: 8px 0;
        }
        
        .d-nav-link{
            color: white;
            padding: 12px 32px;
        }
        
        .d-nav{
            width: 100vw;
            display: none;
        }
        
        .d-nav-logo{
            width: 82%;
        }
        
        .d-logo-wrapper{
            width: 100px;
            height: 100%;
        }
        
        .d-nav-wrapper{
            max-width: 1600px;
            margin: 0 auto;
            padding: 0px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .d-nav-bar{
            border-radius: 24px;
            background-color: rgba(72,71,71,0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 0.3px solid var(--white);
        }
        
        .d-nav-bar ul{
            padding: 2px;
        }
        
        .d-nav-bar ul li{
            display: inline-block;
            text-align: center;
            font-family: 'Josefin Sans', sans-serif;
            list-style: none;
            font-size: 0.8rem;
        }
        
        .disc2, .disc3, .disc4{
            display: none;
        }

        @media screen and (min-width: 1080px) {
            :root{
                font-size: 18px;
            }
            .mobile-nav{
                display: none;
            }
            .d-nav{
                width: 100vw;
                display: block;
            }
        }
        `;

        const linkElem = document.createElement('link'); 
        linkElem.setAttribute('rel', 'stylesheet'); 
        linkElem.setAttribute('href', 'css/global-style.css');

        shadow.appendChild(linkElem);
        shadow.appendChild(style);
        shadow.appendChild(deskNav);

        this.setAttributeIfTrue('home', this.getAttribute('home') === 'true', 'HOME');
        this.setAttributeIfTrue('about', this.getAttribute('about') === 'true', 'ABOUT');
        this.setAttributeIfTrue('project', this.getAttribute('project') === 'true', 'PROJECT');
    }

    setAttributeIfTrue(attributeName, condition, linkContent) {
        if(condition) {
            const links = this.shadowRoot.querySelectorAll(`.d-nav-link`);
            links.forEach(link => {
                if(link.textContent === linkContent) {
                    link.classList.add('active');

                    const dot = document.createElement('span');
                    dot.classList.add('point-dot');
                    
                    if(attributeName === 'about') {
                        dot.classList.add('point-dot--yellow');
                    }
              
                    link.appendChild(dot);
                }
          });
        }
    }

}
customElements.define('custom-header', CustomHeader);
