
export default function ProjectDetailCard({project}){
    // const slideList = project.content;
    const detailCards = project.map((item) => {
            return (
                    <div className="col-span-12 md:col-span-6 -bg--card-background p-6 rounded-2xl border border-solid -border--outline md:p-10 shadow-md" key={item.id}>
                        <p className="blue-lable mb-10">{item.cardTitle}</p>
                        {Array.isArray(item.content) ? (
                            item.content.map((listItem, index) => (
                                <div className="mb-8" key={index}>
                                    <div className="text-lg -text--primary font-medium">{listItem.list}</div>
                                    <div className="body--gray">{listItem.listDisc}</div>
                                </div>
                            ))
                            ) : (
                            <p className="body--gray">No content available.</p>
                        )}
                    </div>
                    )
                }    
            )
    
    return(
        <>
            {detailCards}
        </>
            
    )
}