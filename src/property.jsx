import React from "react";

const Property =()=>{
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:w-[40vh] relative ">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
                 <Image src={im} alt="/"/>
            </div>
        </div>
    );
}
export default Property;