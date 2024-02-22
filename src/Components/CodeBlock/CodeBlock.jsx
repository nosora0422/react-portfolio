import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Codeblock({project}){
    const codeList = project.code;
    // console.log(codeList);
    const codeStyle = {
        height:'400px',
        borderRadius: '16px',
        padding: '16px',
        overflowY: 'scroll',
        scrollbarColor: 'gray transparent',
    }
    return(
        <>
        { 
            codeList.map(item => (
                    <div className="col-span-12 bg-white p-6 rounded-2xl md:p-10 shadow-md mb-5" key={item.id}>
                        <p className="blue-lable mb-10">{item.name}</p>
                        <div className="text-sm">
                            <SyntaxHighlighter 
                            language={item.language} 
                            style={dracula}
                            customStyle={codeStyle}
                            >
                                {item.codeBlock}
                            </SyntaxHighlighter>
                        </div>
                    </div>
             ))
        }
        </>
    )
}