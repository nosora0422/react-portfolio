import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Codeblock({project}){
    const codeList = project.code;
    // console.log(codeList);
    const codeStyle = {
        height:'400px',
        borderRadius: '12px',
        padding: '16px',
        overflowY: 'scroll',
        scrollbarColor: 'gray transparent',
    }

    const AccordionContext = React.createContext({});
    const useAccordion = () => React.useContext(AccordionContext);

    function Accordion({ children, multiple, defaultIndex }) {
        const [activeIndex, setActiveIndex] = React.useState(
          multiple ? [defaultIndex] : defaultIndex
        );
      
        function onChangeIndex(index) {
          setActiveIndex((currentActiveIndex) => {
            if (!multiple) {
              return index === activeIndex ? -1 : index;
            }
      
            if (currentActiveIndex.includes(index)) {
              return currentActiveIndex.filter((i) => i !== index);
            }
      
            return currentActiveIndex.concat(index);
          });
        }

        return React.Children.map(children, (child, index) => {
            const isActive =
              multiple && Array.isArray(activeIndex)
                ? activeIndex.includes(index)
                : activeIndex === index;
        
            return (
              <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
                {child}
              </AccordionContext.Provider>
            );
          });
     }

    function AccordionItem({ children }) {
        return (
        <div className=" overflow-hidden col-span-12 -bg--card-background p-6 rounded-2xl border border-solid -border--outline md:p-10 shadow-md mb-5">
            {children}
        </div>
        );
    }
    
    function AccordionHeader({ children }) {
        const { isActive, index, onChangeIndex } = useAccordion();
        
        return (
            <motion.div 
                onClick={() => onChangeIndex(index)}
                className="flex justify-between items-center cursor-pointer"
            >            
                <div className="blue-lable">
                    {children}
                </div>
                <div className="flex items-center">
                    <p className="body--gray mr-2">{"</>"}</p>
                    <i className={ isActive ? "fa-solid fa-minus fa-lg -text--primary": "fa-solid fa-plus fa-lg -text--primary"}></i>
                </div>
            </motion.div>
        );
    }
      
    function AccordionPanel({ children }) {
        const { isActive } = useAccordion();
        
        return (
            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                    >
                    <div className="col-span-12 md:col-span-6 text-sm pt-10">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
    

    return(
        <Accordion multiple>
        { 
            codeList.map((item,i) => (
                    <AccordionItem key={i}>
                        <AccordionHeader>{item.name}</AccordionHeader>
                        <AccordionPanel>
                            <SyntaxHighlighter 
                                language={item.language} 
                                style={dracula}
                                customStyle={codeStyle}
                            >
                                {item.codeBlock}
                            </SyntaxHighlighter>
                        </AccordionPanel>
                    </AccordionItem>
             ))
        }
        </Accordion>
    )
}