import React from "react"; 

export default ({content,func}) => <div className="more-btn__container"><button onClick={func} className="more-btn"><span className="dots"></span>{content}</button></div>;