const projects = [
    {
        id:0,
        type:'Front-end', 
        title:'React Note App',
        skills: ['React.js','Tailwind','Firebase'], 
        description:'The project aimed to build a responsive web app for creating notes, images, and to-do lists. The app utilizes local storage and Firebase to store object arrays and user sign-up information.',
        img: '../Assets/Images/thumbnail-note-app.jpg',
        qr:'../Assets/Images/react-note-qr.jpg',
        demolink:'https://nosora0422.github.io/fullstack-note-app/',
        gitHubLink:'https://github.com/nosora0422/fullstack-note-app',
        overview: (
        <p>The objective of this project was to develop a responsive web application capable of <span className="font-semibold -text--blue">creating notes, managing images, and maintaining to-do lists.</span> The app made it easier to organize notes by separating them into tabs so that users can write various notes according to their purpose and preferences. The app leverages both <span className="font-semibold -text--blue">local storage and Firebase to store object arrays</span> and user sign-up information. </p>
        ),
        keyPoint:[
            { 
                id:0,
                cardTitle:'Function',
                content:[
                    {
                        list:'To-Do List',
                        listDisc:'Users can create multiple To-do lists mark individual list items as completed and check progress.'
                    },
                    {
                        list:'Note',
                        listDisc:'The app includes features such as rich text formatting, categorization, and sorting for enhanced note management.'
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
                        listDisc:'Users can effortlessly search for items by entering either titles or content.'
                    },
                    {
                        list:'Sort and Filter',
                        listDisc:'The sort and filter features enable the users to organize notes efficiently.'
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
                        listDisc:'The app seamlessly access notes, images, and to-do lists across sessions with local storage.'
                    },
                    {
                        list:'Firebase',
                        listDisc:'Users securely sign up and log in with Firebase Authentication.'
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
                        listDisc:'Reusable components for seamless integration with other elements such as the search bar and the button groups.'
                    },
                    {
                        list:'useState() Hook',
                        listDisc:'useState() was used for the note components to set the initial value and return updated value when entering data.'
                    },
                ]
            },
        ],
        slideImg:[
            {
                name: 'Signup & Login',
                slideImgPath:'../../Assets/Images/react-note-firebase.png'
            },
            {
                name: 'To-do-list',
                slideImgPath:'../../Assets/Images/react-note-screen.png'
            },
            {
                name: 'Responsive Design',
                slideImgPath:'../../Assets/Images/react-note-mobile.png'
            },
        ], 
        code:[
            {
                id:0,               
                language:'javascript',
                name:'Signup',
                img:'../Assets/Images/react-note-signup.jpg',
                codeBlock:
`
export default function Signup(){
    const [registerEmail, setRegisterEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [error, setError] = useState("");

    const register = async () => {
        if (password !== registerPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            const user = userCredential.user;
            // Update user profile with the name
            await updateProfile(user, { displayName: registerName });
            navigate('/');
            
            // console.log(user);
        } catch(error){
            setError(error.message);
            // console.log(error.message);
        }
    };

    return(
        <div className="pt-4 flex flex-col">
                        <label htmlFor='name'>Name</label>
                        <input 
                            className="border border-solid -border--outline rounded py-2 px-3" 
                            name="name"
                            type="text"
                            onChange={(event) => {
                                setRegisterName(event.target.value)
                            }} 
                            placeholder="Your Name" 
                        />
                    </div>
                    <div className='pt-4 flex flex-col'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            className="border border-solid -border--outline rounded py-2 px-3" 
                            name="email"
                            type='email'
                            onChange={(event) => {
                                setRegisterEmail(event.target.value)
                            }} 
                            placeholder='youremail@example.com' 
                        />
                        {error.email && <p className='text-xs text-red-400'>{error.email}</p>}
                    </div>
                    <div className='pt-4 flex flex-col'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            className="border border-solid -border--outline rounded py-2 px-3" 
                            name="password"
                            type='text'
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }} 
                            placeholder='Your password' 
                        />
                        {error.password && <p className='text-xs text-red-400'>{error.password}</p>}
                    </div>
                    <div className='py-4 flex flex-col'>
                        <label htmlFor='password'>Confirm Password</label>
                        <input 
                            className="border border-solid -border--outline rounded py-2 px-3" 
                            name="passwordConfirm"
                            type='text'
                            onChange={(event) => {
                                    setRegisterPassword(event.target.value)
                            }}
                            placeholder='Confirm your password' 
                        />
                        {error && <p className='text-xs text-red-400'>{error}</p>}
                    </div>
                    <button
                        className='button w-full mt-4 -bg--primary -text--on-primary rounded'
                        onClick={register}
                    >
                        Sign up
                    </button>
    )
}
`
                    
            },
            {
                id:1,
                language: 'javascript',
                name:'Login',
                img:'../Assets/Images/react-note-login.jpg',
                codeBlock:
`
export default function Login(){
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            navigate('/app');        
            console.log(user);
        } catch(error){
            setError(error.message);
            console.log(error.message);
        }
    };

    return(
        <div>
            <div className='flex flex-col h-20 h-'>
                <label htmlFor='email'>Email</label>
                <input 
                    className="border border-solid -border--outline rounded py-2 px-3"
                    name='email' 
                    type='email'
                    onChange={(event)=>{setLoginEmail(event.target.value)}} 
                    placeholder='youremail@example.com' 
                />
                {error&& <p className='text-xs text-red-400'>{error}</p> }
            </div>
            <div className='pt-4 flex flex-col h-20'>
                <label htmlFor='password'>Password</label>
                <input 
                    className="border border-solid -border--outline rounded py-2 px-3" 
                    name='password'
                    type='password'
                    onChange={(event)=>{setLoginPassword(event.target.value)}} 
                    placeholder='Your password' 
                />
                {error && <p className='text-xs text-red-400'>{error}</p> }
            </div>
            <button 
                className='button w-full mt-8 -bg--primary -text--on-primary rounded'
                onClick={login}
            >
                Log in
            </button>
        </div>
    )
    }
}`
            },
            {
                id:2,
                language:'javascript',
                name: 'React-router-dom',
                img:'../Assets/Images/react-note-dom.jpg',
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
            },
            {
                id:3,
                language:'javascript',
                name: 'To-do list',
                codeBlock:
` 
export default function List({ searchTerm }){
    .
    .
    .
    const handleTaskChange = (index, value) => {
        const updatedTasks = [...taskValues];
        updatedTasks[index] = value;
        setTaskValues(updatedTasks);
    };

    //Add additioanl input box and set empty value to the task array
    const addTaskInput = () => {
        setTaskValues([...taskValues, '']);
    };

    //Remove input box and entered data from task array 
    const removeTaskInput = (index) => {
        const updatedTasks = taskValues.filter((_, i) => i !== index);
        setTaskValues(updatedTasks);
    };

    const addItem = () => {
        if (titleVal !== ""){
            // create task array with own ids
            const tasksArray = taskValues.map((taskText) => ({
                id: uuidv4(),
                task: taskText,
            }));

            const newItem = {
                id: uuidv4(),
                title: titleVal,
                tasks: tasksArray,
                category: categoryVal,
                date: Date.now()
            };

            setItems([...items, newItem]);

            // reset input valuse after adding to the local storage
            setTitleVal('');
            setTaskValues(['']);
        }
    }

    const deleteItem = (key) =>{
        let filteredItems = items.filter((item)=>{return (item.id !== key);
        });

        setItems(filteredItems);
    }
    .
    .
    .

    return(
        .
        .
        .

        <div className="flex flex-col gap-2">
            <select
                className="w-full py-2 px-4 border-none rounded-sm focus: outline-0"
                value={categoryVal}
                onChange={event => {
                    setCategoryVal(event.target.value)
                }}
            >
                <option value="personal">Personal</option>
                <option value="school">School</option>
                <option value="work">Work</option>
            </select>
            <div className="flex items-center bg-white rounded-sm">
                <input
                    className="w-full mx-2 py-2 px-2 border-none focus: outline-0"
                    value={titleVal}
                    onChange={(event) => {
                        setTitleVal(event.target.value);
                    }}
                    placeholder="Enter Title">
                </input>
            </div>
            {taskValues.map((task, index) => (
                <div className="flex items-center bg-white rounded-sm" key={index}>
                    <FontAwesomeIcon icon={regularSquare} className="ml-4 -text--secondary"/>
                    <input
                        className="w-full mx-2 py-2 px-2 border-none focus: outline-0"
                        value={task}
                        onChange={(event) => handleTaskChange(index, event.target.value)}
                        placeholder="Enter Task"
                    />
                    {index > 0 && (
                        <button 
                            className="p-2 border-0 bg-transparent cursor-pointer" 
                            onClick={() => removeTaskInput(index)}
                        ><FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    )}
                </div>
            ))}
            <button 
                type="submit"
                className="button rounded-sm mt-2 -bg--surface-container-highest -text--on-primary-container"
                onClick={addTaskInput}
            >
            <FontAwesomeIcon icon={faPlus} /> Add Task
            </button>
        </div>
    )
    .
    .
    .

}
`              
            }
        ]
    },
    {
        id:1,
        type:'Front-end', 
        title:'React Native Mobile app',
        skills: ['React Native','API','Figma'], 
        description:'The objective of this project was to develop a mobile application enabling users to search for and save places based on their operating hours.',
        img: '../Assets/Images/thumbnail-react-native-app.jpg',
        gitHubLink:'https://github.com/nosora0422/react-mobile-app',
        // demolink:'https://sarahnoh.ca',
        overview: (
            <div>
                <p>The target audience for this app is night owls who predominantly engage during the evening hours, with <span className="font-semibold -text--blue">convenient access to venues where they can stay late</span>. Initially, a hard-coded data file was utilized to establish the fundamental framework. Subsequently, integration with <span className="font-semibold -text--blue">the Yelp API</span> was implemented to enable dynamic data usage. <br/><br/>  A combination of <span className="font-semibold -text--blue">Native Stack Navigator and Bottom Bar Navigator</span> was employed to design user pathways, simplifying the structure by rendering information on a single screen despite of different user paths. <br/><br/>The app was built with Expo and Android Studio, incorporating various libraries to create diverse UI designs. A future enhancement includes incorporating a feature to search for nearby venues based on the current location to enhance the User Experience.
                </p>

            </div>
        ),
        keyPoint:[
            { 
                id:0,
                cardTitle:'.Feature',
                content:[
                    {
                        list:'Search Place',
                        listDisc:'This component efficiently handles the rendering of detailed project information fetched from the data file.'
                    },
                    {
                        list:'Filter by category',
                        listDisc:'Users can navigate through cities and refine their search results by selecting specific categories, streamlining their exploration process.'
                    },
                    {
                        list:'Save to List',
                        listDisc:'Each venue discovered can be effortlessly added to the user\'s personalized favourite list, ensuring easy access for future reference.'
                    },
                ]
            },
            { 
                id:1,
                cardTitle:'Key elements',
                content:[
                    {
                        list:'Asyncstorage',
                        listDisc:'Utilizing AsyncStorage, the app stores users\' favourite lists locally, ensuring seamless access to saved venues.'
                    },
                    {
                        list:'Axios',
                        listDisc:'Axios was chosen for its streamlined error handling capabilities during HTTP requests, offering built-in support for efficiently managing network errors, server errors, and other unexpected issues.'
                    },
                    {
                        list:'RNE Theme',
                        listDisc:'The app\'s UI is enhanced with the React Native Elements (RNE) Theme, ensuring a cohesive and visually appealing design across different components and screens.'
                    }
                ]
            },
        ],
        slideImg:[
            {
                name: 'App Screens',
                slideImgPath:'../../Assets/Images/react-mobile-screens.jpg'
            },
            {
                name: 'Navigation Flow',
                slideImgPath:'../../Assets/Images/react-mobile-nav.jpg'
            },
            {
                name: 'Yelp Api',
                slideImgPath:'../../Assets/Images/react-mobile-api.jpg'
            },
        ], 
        
        code:[
            {
                id:0,               
                language:'javascript',
                name:'Save to List',
                codeBlock:
    `
    import axios from 'axios';
    import AsyncStorage from '@react-native-async-storage/async-storage';
    .
    .
    .
    function displayDetialData(error, isLoaded, detailResult) {
    const [isFavorite, setIsFavorite] = useState(null);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const value = await AsyncStorage.getItem('myPlace');
                if (value !== null) {
                    setFavorites(JSON.parse(value));
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    
        getData();
    }, []);

    const handleFav = async (item) => {
        setIsFavorite(prev => !prev);
        const storedFavorites = await AsyncStorage.getItem('myPlace');
        let favoritesArray = [];
        if (storedFavorites) {
            favoritesArray = JSON.parse(storedFavorites);
        }
        const isExistFavorite = favoritesArray.some(favItem => favItem === item);
    
        if (!isExistFavorite) {
            const updatedFavoritesArray = [...favoritesArray, item];
            await AsyncStorage.setItem('myPlace', JSON.stringify(updatedFavoritesArray));
            setFavorites(updatedFavoritesArray);
        } else {
            return createTwoButtonAlert();
        }
    };
    .
    .
    . 
    }  
    `
                    
            },
            {
                id:1,
                language: 'javascript',
                name:'RNE Theme',
                codeBlock:
    `
    import { createTheme } from '@rneui/themed';

    const themePalette = {
        primary: '#A6FF96',
        secondery: '#383838',
        button:'#ffffff',
        outline:'#404040',
        onDark:'#ffffff',
        darkContainer:'#2E2E2E',
        inputContainer:'#1a1a1a',
    }

    export const darkTheme = createTheme({    
        components: {
            Button: {
                buttonStyle: {
                    width: '100%',
                    flex: 1,
                    alignItems:'center',
                    justifyContent: 'space-between',
                    raised: true,
                    borderRadius: 12,
                    backgroundColor: themePalette.button,
                    paddingVertical: 4,
                },
                titleStyle: {
                    color: themePalette.secondery,
                    fontSize: 48,
                    fontWeight:'normal',
                    fontFamily: 'Archivo_200ExtraLight',
                    textAlign: 'left',
                },
                icon: {
                    color: themePalette.secondery,
                },
                type: 'clear',
            },
            Text: {
                h1Style: {
                    color: themePalette.onDark,
                    fontSize:48,
                    fontWeight:'normal',
                    fontFamily: 'Archivo_200ExtraLight',
                },
                h2Style: {
                    color: themePalette.primary,
                    fontSize: 48,
                    fontWeight:'normal',
                    fontFamily: 'Archivo_700Bold',
                },
                h3Style: {
                    color: themePalette.onDark,
                    fontSize: 20,
                    fontWeight:'normal',
                    fontFamily: 'Archivo_200ExtraLight',
                },
                h4Style: {
                    color: themePalette.secondery,
                    fontSize: 24,
                    fontWeight:'normal',
                    fontFamily: 'Archivo_200ExtraLight',
                },
                style: {
                    color: themePalette.onDark,
                    fontSize: 16,
                    fontWeight:'normal',
                    fontFamily: 'Archivo_300Light',
                }
            },      
            FAB: {
                buttonStyle: {
                    raised: true,
                    borderRadius: 15,
                    backgroundColor: themePalette.primary,
                },
                titleStyle: {
                    color: themePalette.alternate,
                },
                icon: {
                    color: themePalette.alternate,            
                },
                type: 'clear',
            },
            ButtonGroup : {
                containerStyle:{
                    height: 32,
                    width: 600,
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                },
                buttonContainerStyle:{
                    borderRadius: 30,
                    marginRight: 8,
                    borderWidth: 1,
                    borderColor: themePalette.outline,
                },
                selectedButtonStyle:{
                    borderRadius: 30,
                    backgroundColor: themePalette.primary,
                },
                selectedTextStyle:{
                    color: themePalette.secondery,
                },
                textStyle: {
                    color: themePalette.onDark,
                }
            },
        },


    });
    `
            },
            {
                id:2,
                language:'javascript',
                name: 'Navigation',
                codeBlock:
    ` 
    const LocationStack = createNativeStackNavigator();
    function LocationStackScreen(){
    return (
        <LocationStack.Navigator
        screenOptions={{
            headerTintColor: '#ffffff',
            headerStyle: { 
            backgroundColor: '#000000', 
            },
            headerTitleStyle: {
            fontFamily: 'Archivo_600SemiBold', 
            fontWeight: 'normal',
            },

        }}
        >
        <LocationStack.Screen
            name="Location"
            component={LocationScreen}
        />
        <LocationStack.Screen
            name="LocationList"
            component={PlaceListScreen}
            options={{
            title: 'Location List',
            }}  
        />
        <LocationStack.Screen
            name="Details"
            component={DetailScreen}  
        />
        </LocationStack.Navigator>
    )
    }


    const SearchStack = createNativeStackNavigator();
    function SearchStackScreen(){
    return (
        <SearchStack.Navigator
        screenOptions={{
            headerTintColor: '#ffffff',
            headerStyle: { 
            backgroundColor: '#000000', 
            },
            headerTitleStyle: {
            fontFamily: 'Archivo_600SemiBold', 
            fontWeight: 'normal',

            }
        }}
        >
        <SearchStack.Screen
            name="Search"
            component={SearchScreen}  
        />
        <SearchStack.Screen
            name="SerchList"
            component={PlaceListScreen}  
        />
        <SearchStack.Screen
            name="Details"
            component={DetailScreen}  
        />
        </SearchStack.Navigator>
    )
    }

    const FavoriteStack = createNativeStackNavigator();
    function FavoriteStackScreen(){
    return (
        <FavoriteStack.Navigator
        screenOptions={{
            headerTintColor: '#ffffff',
            headerStyle: { 
            backgroundColor: '#000000', 
            },
            headerTitleStyle: {
            fontFamily: 'Archivo_600SemiBold', 
            fontWeight: 'normal',

            }
        }}
        >
        <FavoriteStack.Screen
            name="Favorite"
            component={FavoriteScreen}  
        />
        <FavoriteStack.Screen
            name="FavoriteDetails"
            component={DetailScreen}
            options={{
            title: 'Details',
            }}  
        />
        </FavoriteStack.Navigator>
    )
    }

    return (
        <SafeAreaProvider>
        <ThemeProvider theme={darkTheme}>
            <NavigationContainer>
            <Tap.Navigator
                initialRouteName="LocationMain" 
                screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor:'#A6FF96',
                tabBarInactiveTintColor:'#ffffff',
                tabBarItemStyle:{
                    margin:8,
                },
                tabBarStyle: { 
                    borderRadius:50,
                    position: 'absolute',
                    bottom: 12,
                    marginHorizontal: 12,
                    backgroundColor: '#353535',
                    shadowColor: '#000000',
                    shadowOpacity: 0.5,
                    shadowRadius: 11,
                    borderColor: 'transparent',
                    height: 56,
                } 
                }}
            >
                <Tap.Screen 
                name="LocationMain"
                component={LocationStackScreen}
                options={{
                    title:'Place',
                    tabBarIcon:({ color, size }) => (
                    <Icon
                        type='material-community'
                        name="map-marker-outline"
                        color={color}
                        size={size}              
                    />
                    ),
                }}
                />
                <Tap.Screen 
                name="SearchMain"
                component={SearchStackScreen}
                options={{
                    title:'Search',
                    tabBarIcon:({ color, size }) => (
                    <Icon
                        type='material-community'
                        name="filter"
                        color={color}
                        size={size}              
                    />
                    ),
                }}
                />
                <Tap.Screen 
                name="FavoriteMain"
                component={FavoriteStackScreen}
                options={{
                    title:'Favorite',
                    tabBarIcon:({ color, size }) => (
                    <Icon
                        type='material-community'
                        name="bookmark-outline"
                        color={color}
                        size={size}              
                    />
                    ),
                }}
                />
            </Tap.Navigator>
            </NavigationContainer>
        </ThemeProvider>
        </SafeAreaProvider>
    );
    }

    const myStyle = StyleSheet.create({
    loadingContainer:{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
    })
    `              
            }
        ]
    },
    {
        id:2,
        type:'Web Design', 
        title:'Webflow Website', 
        skills: ['Figma','Webflow','Agile'], 
        description:'The objective of the project was to develop a business website designed to present counselling services and facilitate inquiries by utilizing a contact form.',
        img: '../Assets/Images/project4-thumbnail.jpg',
        qr:'../Assets/Images/webflow-qr.jpg',
        demolink:'https://vanhcc.com',
        overview:(
            <p>A client needed a business website constructed using Webflow, emphasizing creating a <span className="font-semibold -text--blue">welcoming and inviting colour theme</span>, while streamlining the inquiry process through <span className="font-semibold -text--blue">a contact form.</span> Given the tight deadline and skill sets at hand, the <span className="font-semibold -text--blue">Agile Scrum</span> methodology was employed, fostering efficient communication with both the client and team members.</p>
            ),
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
        id:3,
        type:'Front-end', 
        title:'React Portfoilo Website',
        skills: ['React.js','Tailwind','Figma', 'Spline'], 
        description:'The goal of this portfolio was to create a single-page website using React.js that showcases myself as a front-end developer and introduces my projects.',
        img: '../Assets/Images/thumbnail-react-portfolio.jpg',
        qr:'../Assets/Images/react-portfolio-qr.jpg',
        gitHubLink:'https://github.com/nosora0422/react-portfolio',
        // demolink:'https://sarahnoh.ca',
        overview: (
            <div>
                <p>The portfolio underwent a transformation from HTML, CSS, and JavaScript to React.js in order to streamline development and maintenance processes.</p><br/>
                <p> Utilizing <span className="font-semibold -text--blue">React's component-based architecture</span>, a separate data file containing an object array was created to facilitate the rendering of repetitive UI elements and pages within a single component. This approach <span className="font-semibold -text--blue">significantly reduced the overall codebase</span> by consolidating redundant code and simplifying content updates.</p><br/> 
                <p>The transition to React not only <span className="font-semibold -text--blue">enhanced code maintainability</span> but also expedited development cycles, allowing for more <span className="font-semibold -text--blue">efficient management</span> of both data and UI styles.</p>
            </div>
        ),
        keyPoint:[
            { 
                id:0,
                cardTitle:'Component',
                content:[
                    {
                        list:'ProjectDetail',
                        listDisc:'This component efficiently handles the rendering of detailed project information fetched from the data file.'
                    },
                    {
                        list:'Card',
                        listDisc:'The Card component\'s "columns" prop offers flexibility in layout design by allowing easy adjustment switch between different column configurations, such as 6 columns or 4 columns.'
                    },
                    {
                        list:'Button',
                        listDisc:'Integrating the Button component with customizable text and colour props enhances development efficiency and consistency across multiple pages.'
                    },
                ]
            },
            { 
                id:1,
                cardTitle:'Library & Plugin',
                content:[
                    {
                        list:'Spline',
                        listDisc:'Implemented Spline to effortlessly create 3D elements, seamlessly integrating them into the website with minimal code.'
                    },
                    {
                        list:'Framer Motion',
                        listDisc:'Framer Motion enhanced the user experience with an array of animations, from sliding navigation bars to fading-in cards.'
                    },
                    {
                        list:'Tailwind CSS',
                        listDisc:'Utilized Tailwind CSS streamlined styling and consistent design, benefiting from its utility-first approach and extensive pre-built components. '
                    }
                ]
            },
            { 
                id:2,
                cardTitle:'Data Rendering',
                content:[
                    {
                        list:'useParam()',
                        listDisc:'The useParam() was used to retrieve id parameters from the URL, enhancing dynamic routing within project components.'
                    },
                    {
                        list:'Object-oriented array',
                        listDisc:'Most content is rendered from an object-oriented array structure for efficient data organization and manipulation, ensuring scalability and maintainability.'
                    },
                    {
                        list:'Array methods',
                        listDisc:'JavaScript array methods such as parseInt, map, and filter were used to optimize data processing and extraction, enhancing performance and functionality.'
                    },
                ]
            },
        ],
        slideImg:[
            {
                name: 'Dark Theme',
                slideImgPath:'../../Assets/Images/react-portfolio-dark.png'
            },
            {
                name: 'Object Array',
                slideImgPath:'../../Assets/Images/react-portfolio-object.png'
            },
        ], 
        code:[
            {
                id:0,               
                language:'javascript',
                name:'useParams()',
                codeBlock:
    `
    export default function Project(){
        const navigate = useNavigate();
    
        const handleCardClick = (id) => {
            navigate(\`\${process.env.PUBLIC_URL}/project-details/\${id}\`);
        };
    
        const { id } = useParams();
        const currProject = Projects.find(project => project.id === parseInt(id));
    
        const projectItems = Projects.filter((project) => project.id !== parseInt(id)).map(item => {
            return <Card
                        key={item.id} 
                        type={item.type} 
                        title={item.title} 
                        description={item.description} 
                        path={item.img}
                        column={'lg:col-span-4'}
                        skills={item.skills}
                        onClick={( )=> handleCardClick(item.id)} 
                    />
        })
    
        return(
            <>
                <div className="relative -bg--body--backgroundColor">
                    <ProjectBanner 
                        project={currProject}
                    />
                    <ProjectDetail project={currProject} />
                </div>
                <section className="my-grid max-w-[1200px] mx-auto pb-20 md:pb-40 md:pt-20 px-6">
                <div className="col-span-12">
                    <h3>MORE PROJECTS<span className="point-dot"></span></h3>
                    <div className="my-grid gap-y-10 my-10 lg:gap-10">
                        {projectItems}
                    </div>
                </div>
                </section>
            </>
        )
    }   
    `
                    
            },
            {
                id:1,
                language: 'javascript',
                name:'Framer Motion',
                codeBlock:
    `
    export default function RecomCard() {
        const ref = useRef(null);
        const isInView = useInView(ref, { 
            once: true,
            threshold:0.8,
        });
    
        const recommendations = RecommendationData.map((item, index) => {
                return (
                <motion.div
                    className={\`col-span-7 flex flex-col justify-between w-full h-full \${item.column} \${item.row} -bg--primary p-6 mr-5 rounded-2xl backdrop-blur-sm drop-shadow-lg\`} 
                    key={index}
                    initial={{ 
                        opacity:0, 
                        translateX:-40, 
                        translateY: -40 
                    }}
                    animate={ isInView ? { 
                        opacity: 1, 
                        translateX: 0, 
                        translateY: 0 
                    } : { 
                        opacity: 0, 
                        translateX: -20, 
                        translateY: -20 
                    }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.3 * index, 
                        ease: 'easeIn' 
                    }}      
                >
                    <div className="">
                        <p><i className="fa-solid fa-quote-left mb-3 text-white"></i></p>
                        <p className="text-white text-base font-light">{item.comment}</p>
                        <i className="fa-solid fa-quote-right block text-right mt-3 text-white"></i>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="font-Manrope text-xl lg:text-2xl font-medium  text-white">{item.name}</p>
                            <div className='flex items-center'>
                                <p className="text-base mr-2 text-white">{item.title}</p>
                                <a href={item.linkedin} target="new"><i className="fa-brands fa-linkedin text-white cursor-pointer"></i></a>
                            </div>
                        </div>
                        <img className="object-over object-center rounded-full border border-solid -border--lightgray w-10 h-10" src={item.img} alt={item.name} />
                    </div>
                </motion.div>
            )
        }
        )
    
      return (
        <div ref={ref} className='grid grid-cols-7 gap-x-4 gap-y-4 grid-flow-row-dense'>
            {recommendations}
        </div>
      )
    }
    `
            },
            {
                id:2,
                language:'javascript',
                name: 'Dark Mode',
                codeBlock:
    ` 
    //Tailwind input.css
    *{
        @apply transition-colors duration-200;
    }
    
    .light{
        --primary: 56,56,56;
        --lightgray: 158,158,158;
        --secondary: 247, 247, 247;
        --blue: 52, 109, 255;
        --yellow: 255, 205, 75;
        --blackShadow: 198, 198, 198;
        --body--backgroundColor: 252, 252, 252;
        --nav--darkgray: 72,71,71,0.5;
        --nav--active: 72,71,71,0.5;
        --gradient-dark: 33,33,33,1;
        --gradient-light: 56,56,56,1;
        --dark--container: 85, 85, 85;
        --contact-backgroundColor: 245, 245, 245; 
        --card-background: 247, 247, 247;
        --chip--text: 247, 247, 247;
        --outline: 0,0,0,0;
    }
    
    .dark{
        --primary: 233, 233, 233;
        --lightgray: 158,158,158;
        --secondary: 56,56,56;
        --chip--text: 56, 56, 56;
        --blue: 52, 109, 255;
        --yellow: 255, 205, 75;
        --blackShadow: 198, 198, 198;
        --body--backgroundColor: 33,33,33,1;
        --nav--active: 158,158,158,0.5;
        --nav--darkgray: 72,71,71,0.5;
        --gradient-dark: 33,33,33,1;
        --gradient-light: 56,56,56,1;
        --dark--container: 85, 85, 85;
        --contact-backgroundColor: 33,33,33,1;
        --card-background: 56, 56, 56;
        --outline: 104,104,104,1; 
    }
    
    //App.js
    export default function App() {
        const [isDark, setIsDark] = useState(false);
      
        const handleDark = () => (
          setIsDark(isDark => !isDark)
        )

        return (
          <div className={isDark ? 'relative dark' : 'relative light'}>
            <Header />
            <div>
              <ScrollToTop />
              // context passes value to child components
              <Outlet context={isDark} />
              <Contact />
            </div>
            <Footer />
            // dark mode switch
            <button
              className="fixed right-5 bottom-5 w-11 h-11 rounded-full font-medium -bg--primary -text--secondary"
              onClick={handleDark}>{isDark ?  'LHT' : 'DRK'}
            </button>  
          </div>
        );
      }
    `              
            }
        ]
    },
    {
        id:4,
        type:'Front-end', 
        title:'React Movie Search App',
        skills: ['React.js','CSS','API', 'JSON'], 
        description:'The project aimed to develop a TMDB movie application using the TMDB API, enabling users to access movie information efficiently.',
        img: '../Assets/Images/thumbnail-react-movie-app.jpg',
        qr:'../Assets/Images/react-movie-qr.jpg',
        gitHubLink:'https://github.com/nosora0422/react-movie-app',
        demolink:'https://nosora0422.github.io/react-movie-app/#/',
        overview: 'Originally built with HTML, CSS, and JavaScript, the project transitioned to React.js for improved component management and API integration. Key functionalities include a search feature, saving favourites, and social media sharing, with a focus on optimizing API usage for a seamless user experience.',
        keyPoint:[
            { 
                id:0,
                cardTitle:'Function',
                content:[
                    {
                        list:'Search',
                        listDisc:'Users can search movies by the name of the movie.'
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
                        listDisc:'User’s favourite list can be shared on their social media such as Facebook, WhatsApp, and Twitter. '
                    }
                ]
            },
            { 
                id:2,
                cardTitle:'Data',
                content:[
                    {
                        list:'Local Storage',
                        listDisc:'The app gets objects from local Storage and save new objects to local storage using setItem() and getItem() with JSON.parse() and JSON.stringify().'
                    },
                    {
                        list:'API',
                        listDisc:'TMDB API and functions, fetch() to make network requests and JSON.parse() to parse the body text to JSON.'
                    },
                ]
            },
            { 
                id:3,
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
                        list:'map() & object arrays',
                        listDisc:'Utilizing map() with object arrays allowed for the dynamic generation of components, optimizing for efficient updates and revisions.'
                    },
                ]
            },
        ],
        code:[
            {
                id:0,               
                language:'javascript',
                name:'Search Term',
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
                name: 'Favourite List',
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
    };
    `              
            }
        ]
    },
    {
        id:5,
        type:'Front-end', 
        title:'HTML Email Template', 
        skills: ['HTML','CSS','Figma'], 
        description:'The project aimed to create a responsive promotion email template for a fictional soap brand using HTML, CSS and JS.',
        qr:'../Assets/Images/html-email-qr.jpg',
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
                        listDisc:'The project drew inspiration from real-world examples found in the promotional inbox, offering valuable guidance on planning screen sizes. It indicated that many of these examples used a width ranging from 600 to 640 pixels.'
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
        .hero{
            height: 600px;
        }
    
        .title{
        font-size: 4em;
        padding: 30px;
        }
    
        .hero-wrapper p{
        margin-bottom: 80px;
        }   
    
        .items-card{
            display: flex;
    
        }
        .item-img{
            width: 60%;
            height: 500px;
        }
    
        .item-card-wrapper{
            width: 100%;
            position: relative;
        }
        .item-description-box{
            width: 50%;
            height: 360px;
        }
    
        .item-description-wrapper{
            height: 280px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 75%;
            padding: 40px 40px;
        }
    
        .description-box1{
            position: absolute;
            top: 80px;
        }
        .item1{
            float: right;
        }
        .description-box2{
            position: absolute;
            top: 80px;
            right: 0;
        }
    
        .new-items{
            height: 650px;
        }    
    
        .new-item-box{
            width: 100%;
        }
        .new-item-img-box{
            width: 50%;
            height: 400px;
            top:80px;
        }
        .new-item-heading{
            font-size: 3.5em;
        }
        .top{
            top: 50px;
        }
        .bottom{
            bottom: 130px;
        }
        footer{
            max-width: 640px;
        }

    }
    `
                    
            }
        ]
    },
    
    
    
]

export default projects;