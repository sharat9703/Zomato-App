import React from "react";

const GotoTop=()=>{

    const goToBtn=()=>{
        window.scrollTo({top:0,behavior:"smooth"});
    }
    return(
        <div className="top-btn" onClick={goToBtn}>
            Go to top</div>
    )
}

export default GotoTop;