import React from "react"; 

export default ({content,func, names}) => <button onClick={func} className={`btn ${names}`}>{content}</button>;