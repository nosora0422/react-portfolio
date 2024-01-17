const projects = [
    {
        id:0,
        type:'Front-end', 
        title:'Logo Animation',
        skills: ['HTML','CSS','JS'], 
        description:'The goal of the project was to create a personal logo animation combining skills of graphic design and animation using CSS keyframes.',
        link:`${process.env.PUBLIC_URL}/projects/logo-animation`,
        img: require('../../Assets/Images/project1-thumbnail.jpg'),
        demolink:'https://logoanimation.sarahnoh.ca/',
        overview: 'The project includes a personal logo that was created as an SVG file and the use of CSS keyframes and JS functions. The endeavour demanded considerable dedication to the brainstorming and sketching phases, as the logo bore deep significance to personal identity. The logo animation was implemented to a single landing page in order to go beyond the initial goal and showcase the example of usage in the real world.',
        process:[
            { 
                id:0,
                phase:'Brainstorming',
                content:'The initial process started with a mindmap on Figma to brainstorm elements related to this project. The brainstorming process included steps defining my core values, mission, and goal. In addition, the elements such as colours, shapes and messages represent my personality and history were added.',
                img:require('../../Assets/Images/Mindmap.png')
            },
            {
                id:1,
                phase:'Logo Sketch',
                content:'Based on the mindmap, logo sketches were created on Procreate and the final two logos were developed with variations. When sketching logos, my interests and core values were considered as main elements. This resulted in the use of rounded edges and circles that represent unity, commitment, love or community. ',
                img:require('../../Assets/Images/logo-sketch.png')
            },
            {
                id:2,
                phase:'Development',
                number:'01',
                content:'At the development stage, the SVG file was optimized and minimized with SVGOMG. The process helped convert the SVG code into clean and readable code. All style tags for SVG were moved to a separate CSS file in order to organize all styles in a single file.',
                img:require('../../Assets/Images/project1-thumbnail.jpg')
                    
            },
            {
                id:3,
                phase:'Development',
                number:'02',
                content:'The challenge was to animate each character of the brand name that were the SVG elements as a part of the logo. Initially, each character was given with own id name to animate with the keyframe, However, this approach proved to be time-consuming and repetitive.',
                img:require('../../Assets/Images/project1-thumbnail.jpg')
                    
            },
            {
                id:4,
                phase:'Development',
                number:'03',
                content:"Therefore, the same class names were assigned to these elements instead, enabling the use of 'querySelectorAll()' and 'for' loop statement. In the final step, the animation was completed using a user-defined function with the 'animate()' method.",
                img:require('../../Assets/Images/project1-thumbnail.jpg')
                    
            }
        ]
    },
    {
        id:1,
        type:'Front-end', 
        title:'Responsive Business Website',
        skills: ['HTML','CSS','JS','jQuery'],  
        description:'The goal was to demonstrate CSS skills using Media Query for responsive design with mobile UI patterns.',
        link:`${process.env.PUBLIC_URL}/projects/responsive-website`,
        img: require('../../Assets/Images/project2-thumbnail.jpg'),
        overview:'The choice of the topic aimed to highlight the development of a business website that not only prioritizes responsive design but also emphasizes the implementation of dynamic Jquery functions and JavaScript plug-ins.',
        process:[
            { 
                id:0,
                phase:'SITEMAP AND WIREFRAME',
                content:'Following the research phase, initial design and planning steps were taken. The sitemap was created on Figjam with consideration of the main audience and user group. Afterwards, a low-fi wireframe for each page was created on Figma.',
                img:require('../../Assets/Images/responsive-web-wireframe.jpg')
            },
            {
                id:1,
                phase:'DEVELOPMENT',
                number:'01',
                content:'The process was started with a mobile-first approach for an efficient development process. As I started from mobile view first, was able to identify potential challenges early, streamline workflows, and reduce the need for extensive revisions during later stages of development.',
                img:require('../../Assets/Images/project2-thumbnail.jpg')
            },
            {
                id:2,
                phase:'Development',
                number:'02',
                content:'With the rough structure in place, a Flickity carousel plugin was implemented for dynamic design. In addition, an accordion-style navigation bar was incorporated using JS in order to demonstrate the use of mobile UI design patterns.',
                img:require('../../Assets/Images/project2-thumbnail.jpg')
                    
            }
        ]
    },
    {
        id:2,
        type:'Front-end', 
        title:'HTML Email Template', 
        skills: ['HTML','CSS','Figma'], 
        description:'The project aimed to create a responsive promotion email template for a fictional soap brand using HTML, CSS and JS.',
        link:`${process.env.PUBLIC_URL}/projects/email-template`,
        img: require('../../Assets/Images/project3-thumbnail.jpg'),
        demolink:'https://nosora0422.github.io/email-template-project/',
        overview:"The fictitious soap company provides a selection of organic soaps crafted from a diverse array of ingredients. The project's objective was to design an email template for the purpose of promoting ongoing sales. The template was designed with a versatile layout that could potentially be employed by other brands sharing similar concepts.",
        process:[
            { 
                id:0,
                phase:'BRAINSTORMING',
                content:'The project commenced with a research process aimed at exploring available topics and references. In terms of reference materials, Pinterest and Google were used as the primary tools employed to gather design ideas, including insights into colour palettes and font choices. Additionally, the project drew inspiration from real-world examples found in the promotional inbox, offering valuable guidance on planning screen sizes. It indicated that many of these examples used a width ranging from 600 to 640 pixels.',
                img:require('../../Assets/Images/email-research.gif')
            },
            {
                id:1,
                phase:'STYLE',
                content:"Given the brand's focus on organic products, the design incorporated a palette of muted and natural colours. To convey a sense of sleekness and purity, the project used the sans-serif font 'Inter.' The selection of images was restricted to copyright-free options, and careful consideration was given to their alignment with the chosen colour scheme to ensure harmonious visual integration.",
                img:require('../../Assets/Images/email-style.jpg')
            },
            {
                id:2,
                phase:'WIREFRAME',
                content:'Prior to transitioning to the development stage, low-fidelity wireframes were created using Figma. The wireframing process was initiated with the mobile size (360px for Android) and then expanded tablet and desktop screens (640px). Because of the light content load, both mobile and desktop versions contained the same information, with distinct layouts —horizontal for desktop and vertical for mobile.',
                img:require('../../Assets/Images/email-wireframe.jpg')
            },
            {
                id:3,
                phase:'Development',
                content:"The development phase was initiated using HTML and CSS to develop the mobile-size version, a width of 340px. Starting from mobile size was beneficial when scaling up to desktop size later. Particular care was taken to ensure that the design elements scaled smoothly to fit the desktop size. To facilitate future edits and customization by users, user-friendly CSS element naming conventions and notes were employed in the code.Once the mobile design foundation was solidified, a media query was added to tailor the layout for desktop size.",
                img:require('../../Assets/Images/project3-thumbnail.jpg')
                    
            }
        ]
    },
    {
        id:3,
        type:'Front-end', 
        title:'Webflow Website', 
        skills: ['Figma','Webflow','Agile'], 
        description:'The objective of the project was to develop a business website designed to present counselling services and facilitate inquiries by utilizing a contact form.',
        link:`${process.env.PUBLIC_URL}/projects/webflow-website`,
        img: require('../../Assets/Images/project4-thumbnail.jpg'),
        demolink:'https://vanhcc.ca',
        overview:"A client needed a business website constructed using Webflow, emphasizing creating a welcoming and inviting colour theme, while streamlining the inquiry process through a contact form. Given the tight deadline and skill sets at hand, the Agile Scrum methodology was employed, fostering efficient communication with both the client and team members.",
        process:[
            { 
                id:0,
                phase:'WIREFRAME',
                content:'Based on research and a style guide, I created a low-fi wireframe using Figma for each page. The wireframe was created using ipsum English and Korean language, considering the target audience is Koreans who live in the lower mainland.',
                img:require('../../Assets/Images/webflow-wireframe.jpg')
            },
            {
                id:1,
                phase:'Development',
                number:'01',
                content:"The development phase was initiated using HTML and CSS to develop the mobile-size version, a width of 340px. Starting from mobile size was beneficial when scaling up to desktop size later. Particular care was taken to ensure that the design elements scaled smoothly to fit the desktop size. To facilitate future edits and customization by users, user-friendly CSS element naming conventions and notes were employed in the code.Once the mobile design foundation was solidified, a media query was added to tailor the layout for desktop size.",
                img:require('../../Assets/Images/webflow-comp.jpg')
                    
            },
            {
                id:2,
                phase:'Development',
                number:'02',
                content:"With the structural framework in place, I proceeded to populate each section with content. To expedite this process, I leveraged and customized preset elements such as the Card Carousel, an accordion-style list, and a Contact Form.",
                img:require('../../Assets/Images/webflow-contact.jpg')
                    
            },
            {
                id:3,
                phase:'Development',
                number:'03',
                content:"Once I had established a robust desktop design, I transitioned to refining the tablet and mobile versions. On smaller devices, my focus centred on ensuring that only essential information was retained, the navigation menu items transitioned into a user-friendly hamburger menu, and the floating action button remained accessible on every page.",
                img:require('../../Assets/Images/webflow-mobile.jpg')
                    
            }
        ]

        
    },
]

export default projects;