const projects = [
    {
        id:0,
        type:'Front-end', 
        title:'React Note App',
        skills: ['React.js','Tailwind','Firebase'], 
        description:'The project aimed to build a responsive web app for creating notes, images, and to-do lists. The app utilizes local storage and Firebase to store object arrays and user sign-up information.',
        link:`${process.env.PUBLIC_URL}/projects/react-note`,
        img: '../Assets/Images/thumbnail-note-app.jpg',
        demolink:'https://nosora0422.github.io/fullstack-note-app/',
        overview: 'The objective of this project is to develop a responsive web application capable of creating notes, managing images, and maintaining to-do lists. The app will leverage both local storage and Firebase to store object arrays and user sign-up information.',
        keyPoint:[
            { 
                id:0,
                cardTitle:'Function',
                content:[
                    {
                        list:'To Do List',
                        listDisc:'The user can create mutiple To do list and mark indevidual itmes as compledted.'
                    },
                    {
                        list:'Note',
                        listDisc:'Include features such as rich text formatting, categorization, and sorting for enhanced note management.'
                    },
                    {
                        list:'Image Note',
                        listDisc:'The app enables users to upload, view, and manage images within the application.'
                    }
                ]
            },
            { 
                id:1,
                cardTitle:'Feature',
                content:[
                    {
                        list:'Search',
                        listDisc:'The user can create mutiple To do list and mark indevidual itmes as compledted1.'
                    },
                    {
                        list:'Sort and Filter',
                        listDisc:'The user can create mutiple To do list and mark indevidual itmes as compledted2.'
                    },
                    {
                        list:'Sign up and Login',
                        listDisc:'The app securely stores user names when signing up and displays them on the navigation bar with welcoming message, contributing to an enhanced user experience and enhance security.'
                    }
                ]
            },
            { 
                id:3,
                cardTitle:'Data',
                content:[
                    {
                        list:'Local Storage',
                        listDisc:'Seamlessly access your notes, images, and to-do lists across sessions with local storage.'
                    },
                    {
                        list:'Firebase',
                        listDisc:'Securely sign up and log in with Firebase Authentication.'
                    },
                ]
            },
            { 
                id:4,
                cardTitle:'Key Elements',
                content:[
                    {
                        list:'React Routes',
                        listDisc:'Implemented {Routes, Route, BrowserRouter, Link} from \'react-router-dom\' to enhance SEO and bookmarking by assigning specific paths for each page.'
                    },
                    {
                        list:'Components',
                        listDisc:'Developed reusable components for seamless integration with other elements such as the search bar and the button groups.'
                    },
                    {
                        list:'useState() Hook',
                        listDisc:'useState() was used for the note components to set the initial value and return updated value when entering data.'
                    },
                ]
            },
        ],
        code:[
            {
                id:0,               
                language:'javascript',
                name:'Button Component',
                codeBlock:
    `
    export default function ButtonGroup({validList, currentState, callBackState}){
        const drawGroup = (item) => {
            return(
                <button
                    key={item}
                    className={(currentState === item) ? 'px-4 py-1 mr-2 border border-solid -border--tertiary rounded-full -bg--tertiary -text--on-primary' : 'px-4 py-1 mr-2 border border-solid rounded-full -bg--white -text--outline'}
                    onClick={ ()=>{ callBackState(item) }}
                >{item}</button>
            );
        }
    
        return(
            <>
                {validList.map(drawGroup)}
            </>
        )
    }
    `
                    
            },
            {
                id:1,
                language: 'javascript',
                name:'Button State',
                codeBlock:
    `
    export default function ToDoItems({ entries, delRef }){
        const [currFilter, setCurrFilter] = useState('all');
        const filterList = ['all', 'school', 'work', 'personal'];
    
        const [currSort, setCurrSort] = useState('Date');
        const sortList = ['date', 'text'];
    
        const fEntries = sortAndFilterList(entries, currFilter, currSort);
    
        return(
            <div>
                <div className="flex justify-end flex-wrap px-2 py-4">
                    <div className="mb-2">
                        <ButtonGroup 
                            validList={filterList} 
                            currentState={currFilter}
                            callBackState={setCurrFilter}
                        />
                    </div>
                    <div className="mb-2">
                        <ButtonGroup 
                            validList={sortList} 
                            currentState={currSort}
                            callBackState={setCurrSort}
                        />
                    </div>
                </div>
                <ul className="my-grid">
                    {
                        fEntries.length > 0 ? 
                        fEntries.map((item) => (<Task key={item.id} item={item} delRef={delRef} />)) : 
                        <li className="col-span-12 w-full py-4 px-6 rounded-md -bg--surface-bright">No items to display</li>
                    }
                </ul>
            </div>
    
        );
    }`
            },
            {
                id:2,
                language:'javascript',
                name: 'react-router-dom',
                codeBlock:
    ` 
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="app" element={<App />}>
              <Route index element={<ToDoList />} />
              <Route path="to-do-list" element={<ToDoList />} />
              <Route path="note" element={<Note />} />
              <Route path="image" element={<Images />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    `              
            }
        ]
    },
    {
        id:1,
        type:'Front-end', 
        title:'Webflow Website', 
        skills: ['Figma','Webflow','Agile'], 
        description:'The objective of the project was to develop a business website designed to present counselling services and facilitate inquiries by utilizing a contact form.',
        link:`${process.env.PUBLIC_URL}/projects/webflow-website`,
        img: '../Assets/Images/project4-thumbnail.jpg',
        demolink:'https://vanhcc.com',
        overview:"A client needed a business website constructed using Webflow, emphasizing creating a welcoming and inviting colour theme, while streamlining the inquiry process through a contact form. Given the tight deadline and skill sets at hand, the Agile Scrum methodology was employed, fostering efficient communication with both the client and team members.",
        keyPoint:[
            { 
                id:0,
                cardTitle:'Team Project',
                content:[
                    {
                        list:'Agile',
                        listDisc:'Agile Scrum methodology was employed, fostering efficient communication with both the client and team members.'
                    },
                    {
                        list:'Team Composition',
                        listDisc:(
                            <ul>
                                <li>Graphic desinger - Ann Kim</li>
                                <li>Front-end developer - Sora Noh</li>
                            </ul>
                            )
                    },
                ]
            },
            { 
                id:1,
                cardTitle:'Webflow',
                content:[
                    {
                        list:'Components',
                        listDisc:'In the development phase, I initiated by crafting essential components, including the navigation, footer, and hero section, with the aim of maximizing efficiency and time-saving when extending the design across multiple pages.'
                    },
                    {
                        list:'Elements',
                        listDisc:'To expedite this process, I leveraged and customized preset elements such as the Card Carousel, an accordion-style list, and a Contact Form.'
                    },
                ]
            },
            { 
                id:2,
                cardTitle:'Responsive Design',
                content:[
                    {
                        list:'Mobile Navigation',
                        listDisc:'The navigation menu items transitioned into a user-friendly hamburger menu, and the floating action button remained accessible on every page'
                    },
                    {
                        list:'Content',
                        listDisc:'Once I had established a robust desktop design, I transitioned to refining the tablet and mobile versions. On smaller devices, my focus centred on ensuring that only essential information was retained.'
                    },
                ]
            },
        ],
        slideImg:[
            {
                name: 'Wireframe',
                slideImgPath:'../../Assets/Images/webflow-wireframe2.png'
            },
            {
                name: 'Reusable Components',
                slideImgPath:'../../Assets/Images/webflow-comp.png'
            },
            {
                name: 'Contact Form',
                slideImgPath:'../../Assets/Images/webflow-contact.jpg'
            },
            {
                name: 'Mobile Friendly',
                slideImgPath:'../../Assets/Images/webflow-mobile.png'
            },
        ], 
    },
    {
        id:2,
        type:'Front-end', 
        title:'React Movie Search App',
        skills: ['React.js','CSS','API', 'JSON'], 
        description:'The project aims to develop a TMDB movie application using the TMDB API, enabling users to access movie information efficiently. It includes features like saving favourite movies locally and sharing lists on social media.',
        link:`${process.env.PUBLIC_URL}/projects/react-movie-app`,
        img: '../Assets/Images/thumbnail-react-movie-app.jpg',
        demolink:'https://nosora0422.github.io/react-movie-app/#/',
        overview: 'Originally built with HTML, CSS, and JavaScript, the project transitioned to React.js for improved component management and API integration. Key functionalities include a search feature, saving favourites, and social media sharing, with a focus on optimizing API usage for a seamless user experience.',
        keyPoint:[
            { 
                id:0,
                cardTitle:'Function',
                content:[
                    {
                        list:'Search',
                        listDisc:'The user can search movies by the name of the movie.'
                    },
                    {
                        list:'Browse Movie List',
                        listDisc:'The category loades various movie lists, which enables easy and quick access to movie information.'
                    },
                ]
            },
            { 
                id:1,
                cardTitle:'Feature',
                content:[
                    {
                        list:'Watch now',
                        listDisc:'Each movie item provide with a link that redirects to TMDB pages for selected movie.'
                    },
                    {
                        list:'Save to List',
                        listDisc:'Users can save movies to the favourite list by clicking a heart icon.'
                    },
                    {
                        list:'Share List',
                        listDisc:'The user’s favourite list can be shared on their social media such as Facebook, WhatsApp, and Twitter. '
                    }
                ]
            },
            { 
                id:3,
                cardTitle:'Data',
                content:[
                    {
                        list:'Local Storage',
                        listDisc:'Get objects from local Storage and save new objects to local storage using setItem() and getItem() with JSON.parse() and JSON.stringify().'
                    },
                    {
                        list:'API',
                        listDisc:'Used TMDB API and used functions, fetch() to make network requests and json() to parse the body text to JSON.'
                    },
                ]
            },
            { 
                id:4,
                cardTitle:'Key Elements',
                content:[
                    {
                        list:'createContext()',
                        listDisc:'createContext() and Provider facilitated the sharing of global search terms among components.'
                    },
                    {
                        list:'useEffect()',
                        listDisc:'useEffect() ensured requests were made selectively, triggered by changes in dependencies like page size.'
                    },
                    {
                        list:'map() & objext arrays',
                        listDisc:'Utilizing map() with object arrays allowed for the dynamic generation of components, optimizing for efficient updates and revisions.'
                    },
                ]
            },
        ],
        code:[
            {
                id:0,               
                language:'javascript',
                name:'Search',
                codeBlock:
    `
    import React, { createContext, useState, useContext } from 'react';

    const SearchContext = createContext();

    export const useSearchContext = () => useContext(SearchContext);

    export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        {children}
        </SearchContext.Provider>
    );
    };

    //App.js

    function App() {
        return (
          <>
            <div className="grid">
              <div className="col-1">
                <Nav />
              </div>
              <div className="col-11 home">
                <SearchProvider>
                  <Header />
                  <Outlet />
                </SearchProvider>
                <Footer />
              </div>
            </div>
          </>
        );
      }
      
      export default App;      
    `
                    
            },
            {
                id:1,
                language: 'javascript',
                name:'API and useEffect',
                codeBlock:
    `
    const [dataResult, setDataResult] = useState(null);
    const [pageSize, setPageSize] = useState(1);
    const [favorites, setFavorites] = useState([]);
    const fetchUri = \`https://api.themoviedb.org/3/movie/now_playing?api_key=cdde34990a2da61ed1772fc6be340638&page=\${pageSize}\`;

    //Function to fetch API data 
    const fetchData = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(
            (result)=>{
                if (dataResult && dataResult.results) {
                    //If the current data is different than previous data, it add data from next page to current page. 
                    setDataResult((prevData) => ({results: [prevData.result, ...result.results]}));
                }else{
                    //All other case, display data on the first page.
                    setDataResult(result);
                }
                setIsLoaded(true);
            },
            (error)=>{
                setError(error);
                setIsLoaded(true);
            }
        )
    };

    //useEffect to run first mount and run again whenever pageSize updated.
    useEffect(() => {
        fetchData(fetchUri);
    },[fetchUri]);
    }
    `
            },
            {
                id:2,
                language:'javascript',
                name: 'react-router-dom',
                codeBlock:
    ` 
    const [favorites, setFavorites] = useState([]);
    useEffect(()=>{
        const favoriteMovies = JSON.parse(localStorage.getItem('react-movie-app'));
        if (favoriteMovies) {
            setFavorites(favoriteMovies);
        }
    },[]);
    //Function to determine movie id and add to favotrite list only a new item in the local storage
    const addFavoriteMovie = (movie) =>{
        const isSameItem = favorites.some((favorite) => favorite.id === movie.id)
        
        if (!isSameItem){
            const newFavoriteMovie = [...favorites, { ...movie, isAddedToList: true }];
            setFavorites(newFavoriteMovie);
            // console.log(newFavoriteMovie);
            saveToLocal(newFavoriteMovie);
            alert('The movie has been successfully added to your list!');
        } else {
           alert('The movie already exists in your list!'); 
        }
    }
    //Function to remove from favotrite list by filtering items that have different movie id than the selected item.
    const removeFavouriteMovie = (movie) =>{
        const newFavoriteMovie = favorites.filter((favorite)=>favorite.id !== movie.id);
        setFavorites(newFavoriteMovie);
        saveToLocal(newFavoriteMovie);
        // console.log(newFavoriteMovie);
    };
    `              
            }
        ]
    },
    // {
    //     id:3,
    //     type:'Front-end', 
    //     title:'Logo Animation',
    //     skills: ['HTML','CSS','JS'], 
    //     description:'The goal of the project was to create a personal logo animation combining skills of graphic design and animation using CSS keyframes.',
    //     link:`${process.env.PUBLIC_URL}/projects/logo-animation`,
    //     img: '../Assets/Images/project1-thumbnail.jpg',
    //     demolink:'https://logoanimation.sarahnoh.ca/',
    //     overview: 'The project includes a personal logo that was created as an SVG file and the use of CSS keyframes and JS functions. The endeavour demanded considerable dedication to the brainstorming and sketching phases, as the logo bore deep significance to personal identity. The logo animation was implemented to a single landing page in order to go beyond the initial goal and showcase the example of usage in the real world.',
    //     keyPoint:[
    //         { 
    //             id:0,
    //             cardTitle:'SVG',
    //             content:[
    //                 {
    //                     list:'SVGOMG',
    //                     listDisc:'Optimized SVG file using SVGOMG for clean and readable code.'
    //                 },
    //                 {
    //                     list:'SVG CSS Organization',
    //                     listDisc:'Organized SVG styles in a separate CSS file.'
    //                 },
    //             ]
    //         },
    //         { 
    //             id:1,
    //             cardTitle:'Animation',
    //             content:[
    //                 {
    //                     list:'Logo animation',
    //                     listDisc:'Each SVG elements were animated seperately with @keyframes.'
    //                 },
    //                 {
    //                     list:'Text animation',
    //                     listDisc:' each character was given with own id name to animate with @keyframes.'
    //                 },
    //             ]
    //         },
    //         { 
    //             id:2,
    //             cardTitle:'Challange & Solution',
    //             content:[
    //                 {
    //                     list:'Repetitive keyframes',
    //                     listDisc:'Adding individual id name and animating with the individual keyframes are time-consuming and repetitive.'
    //                 },
    //                 {
    //                     list:'querySelectorAll()',
    //                     listDisc:' the same class names were assigned to these elements instead, enabling the use of \'querySelectorAll()\' and \'for\' loop statement. In the final step, the animation was completed using a user-defined function with the \'animate()\' method.'
    //                 },
    //             ]
    //         },
    //     ],
    //     code:[
    //         {
    //             id:0,
    //             language:'css',
    //             name: 'SVG CSS',
    //             codeBlock:
    // `// style.css

    // .cls-1{
    //     fill:#bcbec0;
    // }
    
    // .cls-2{
    //     fill:none;
    //     stroke:#bcbec0;
    //     stroke-miterlimit:10;
    //     stroke-width:.47px;
    // }
    
    // .cls-3{
    //     stroke:#000;
    //     stroke-miterlimit:10;
    //     stroke-width:.25px;
    //     transition-timing-function: ease-in;
    // }

    // .cls-4{
    //     fill: none;
    //     stroke: #000;
    //     stroke-linejoin: round;
    //     stroke-width: 4px;
    //     animation: arrowAnimation 1s ease-in-out infinite;
    // }`
                    
    //         },
    //         {
    //             id:1,
    //             language:'css',
    //             name: '@keyframes',
    //             codeBlock:
    // `
    // @keyframes noMove {
    //     0%{
    //         stroke-dashoffset: 289.5;
    //     }
    //     5%{
    //         stroke-dashoffset: 289.5;
    //     }
    //     30%{
    //         stroke-dashoffset: -160.4;
    //     }
    //     100%{
    //         stroke-dashoffset: -160.4;
    //     }
    // }
    
    // @keyframes connectionMove {
    //     0%{
    //         stroke-dashoffset: 75;
    //     }
    //     20%{
    //         stroke-dashoffset: 75;
    //     }
    //     30%{
    //         stroke-dashoffset: 0;
    //     }
    //     100%{
    //         stroke-dashoffset: 0;
    //     }
    // }
    
    // .
    // .
    // .

    // @keyframes pointMove{
    //     0%{
    //         transform: rotate(0deg);
    //     }
    //     50%{
    //         transform: rotate(1080deg);
    //     }
    //     100%{
    //         transform: rotate(1080deg);
    //     }
    // }

    // @keyframes ooMove{
    //     0%{
    //         transform: translateY(0%);
    //         animation-timing-function: ease-out;
    //     }
    //     50%{
    //         transform: translateY(-45%);
    //         animation-timing-function: ease-in;
    //     }
    //     100%{
    //         transform: translateY(0%);
    //         animation-timing-function: ease-out;
    //     }
    // }
    
    // .
    // .
    // .`
    //         },
    //         {
    //             id:2,
    //             language:'javascript',
    //             name: 'JS animate()',
    //             codeBlock:
    // ` 
    // var shape = document.querySelector('#point');
    // var shapelength = shape.getTotalLength();
    // console.log(shapelength);

    // var myName = document.querySelectorAll(".cls-3");

    // for(var i = 0; i < myName.length; i++){
    //     let company = myName[i];
    //     animateMyName(company);
    // };

    // function animateMyName(name){

    //     name.keyframes = [
    //         {
    //             transform: "translateY(0)",
    //             offset: 0
    //         },
    //         {
    //             transform: "translateY(-25%)",
    //             offset: 0.5
    //         },
    //         {
    //             transform: "translateY(0)",
    //             offset: 1
    //         }
    //     ];

    //     name.options = {
    //         duration: 1500,
    //         easing: "ease",
    //         iterations: 2,
    //         direction: "normal",
    //         delay: 150*i,
    //         fill: "both"
    //     }

    //     let animateMyName = name.animate(name.keyframes, name.options);
    // };`              
    //         }
    //     ]
    // },
    // {
    //     id:4,
    //     type:'Front-end', 
    //     title:'Responsive Business Website',
    //     skills: ['HTML','CSS','JS','jQuery'],  
    //     description:'The goal was to demonstrate CSS skills using Media Query for responsive design with mobile UI patterns.',
    //     link:`${process.env.PUBLIC_URL}/projects/responsive-website`,
    //     img: '../Assets/Images/project2-thumbnail.jpg',
    //     overview:'The choice of the topic aimed to highlight the development of a business website that not only prioritizes responsive design but also emphasizes the implementation of dynamic Jquery functions and JavaScript plug-ins.',
    //     keyPoint:[
    //         { 
    //             id:0,
    //             cardTitle:'Design',
    //             content:[
    //                 {
    //                     list:'Sitemap',
    //                     listDisc:'Following the research phase, initial design and planning steps were taken. The sitemap was created on Figjam with consideration of the main audience and user group.'
    //                 },
    //                 {
    //                     list:'Wireframe',
    //                     listDisc:'Afterwards, a low-fi wireframe for each page was created on Figma.'
    //                 },
    //             ]
    //         },
    //         { 
    //             id:1,
    //             cardTitle:'Responsive',
    //             content:[
    //                 {
    //                     list:'Mobile First Approach',
    //                     listDisc:'The process was started with a mobile-first approach for an efficient development process. As I started from mobile view first, was able to identify potential challenges early, streamline workflows, and reduce the need for extensive revisions during later stages of development.'
    //                 },
    //                 {
    //                     list:'Break Point',
    //                     listDisc:'@media screen and (min-width: 568px) @media screen and (min-width: 834px) @media screen and (min-width: 1080px)'
    //                 },
    //             ]
    //         },
    //         { 
    //             id:2,
    //             cardTitle:'Library',
    //             content:[
    //                 {
    //                     list:'Flickity Carousel',
    //                     listDisc:'A Flickity carousel plugin was implemented for dynamic card slide.'
    //                 },
    //                 {
    //                     list:'jQuery',
    //                     listDisc:'An accordion-style navigation bar was incorporated using JS in order to demonstrate the use of mobile UI design patterns.'
    //                 },
    //             ]
    //         },
    //     ],
    //     code:[
    //         {
    //             id:0,
    //             language:'css',
    //             name: 'Media Query',
    //             codeBlock:
    //             `
    // //Mobile Break Point
    // @media screen and (min-width: 568px) {
        
    // }

    // //Tablet Break Point
    // @media screen and (min-width: 834px) {
        
    // }

    // //Desktop Break Point
    // @media screen and (min-width: 1080px) {
        
    // }
    //             `
    //         },
    //         {
    //             id:1,
    //             language:'javascript',
    //             name: 'jQuery',
    //             codeBlock:
    //             `
    // //Jquery Hamberger Menu
    // (function(){
    //     $(".hamburger").on("click", function(){	
    //         $('.mobile ul').slideToggle();
    //         $('.fa-bars').toggle(); 
    //         $('.fa-xmark').toggle(); 
    //     });
    // });

    // //Flickity carousel
    //             `
                    
    //         }
    //     ]
    // },
    {
        id:3,
        type:'Front-end', 
        title:'HTML Email Template', 
        skills: ['HTML','CSS','Figma'], 
        description:'The project aimed to create a responsive promotion email template for a fictional soap brand using HTML, CSS and JS.',
        link:`${process.env.PUBLIC_URL}/projects/email-template`,
        img: '../Assets/Images/project3-thumbnail.jpg',
        demolink:'https://nosora0422.github.io/email-template-project/',
        overview:"The fictitious soap company provides a selection of organic soaps crafted from a diverse array of ingredients. The project's objective was to design an email template for the purpose of promoting ongoing sales. The template was designed with a versatile layout that could potentially be employed by other brands sharing similar concepts.",
        keyPoint:[
            { 
                id:0,
                cardTitle:'Brainstorming',
                content:[
                    {
                        list:'Reference',
                        listDisc:'The project commenced with a research process aimed at exploring available topics and references. In terms of reference materials, Pinterest and Google were used as the primary tools employed to gather design ideas, including insights into colour palettes and font choices.'
                    },
                    {
                        list:'Research',
                        listDisc:'the project drew inspiration from real-world examples found in the promotional inbox, offering valuable guidance on planning screen sizes. It indicated that many of these examples used a width ranging from 600 to 640 pixels.'
                    },
                ]
            },
            { 
                id:1,
                cardTitle:'Style',
                content:[
                    {
                        list:'Colour',
                        listDisc:'Given the brand\'s focus on organic products, the design incorporated a palette of muted and natural colours. '
                    },
                    {
                        list:'Font',
                        listDisc:' To convey a sense of sleekness and purity, the project used the sans-serif font Inter.'
                    },
                    {
                        list:'Images',
                        listDisc:'The selection of images was restricted to copyright-free options, and careful consideration was given to their alignment with the chosen colour scheme to ensure harmonious visual integration.'
                    },
                ]
            },
            { 
                id:2,
                cardTitle:'Responsive Design',
                content:[
                    {
                        list:'Wireframe',
                        listDisc:'The wireframing process was initiated with the mobile size (360px for Android) and then expanded tablet and desktop screens (640px).'
                    },
                    {
                        list:'Layout',
                        listDisc:'Because of the light content load, both mobile and desktop versions contained the same information, with distinct layouts —horizontal for desktop and vertical for mobile.'
                    },
                    {
                        list:'Media Query',
                        listDisc:'The development phase was initiated using HTML and CSS to develop the mobile-size version, a width of 340px. Starting from mobile size was beneficial when scaling up to desktop size later.'
                    },
                ]
            },
            { 
                id:3,
                cardTitle:'Customization',
                content:[
                    {
                        list:'Pseudo-class selector',
                        listDisc:'Defining variables kept consistency in design elements such as colors, fonts, or spacing throughout entire stylesheet. This made it easier to manage and update the design of your website or application.'
                    },
                    {
                        list:'User-Friendly Naming',
                        listDisc:'To facilitate future edits and customization by users, user-friendly CSS element naming conventions and notes were employed in the code.'
                    },
                ]
            },
        ],
        code:[
            {
                id:0,
                language:'css',
                name: 'Root Style & Media Query',
                codeBlock:
                `
    /*change Colour Here*/

    :root{
    --box1-color: #FAF6E9;
    --box2-color: #ECE8D9;
    --new-arrival-color: #FFFDF6;
    --font-color: #494949;
    --button-color: #494949;
    --button-font-color: #FFFDF6;
    --primary-font: 'Inter', sans-serif;
    }

    /* larger than mobile size */

    @media screen and (min-width:640px) {
        body{
            max-width: 640px;
        }

    }
                `
                    
            }
        ]
    },
    
    
]

export default projects;