import React from "react";
import { Link } from "react-router-dom";

export default ({type, href, content}) => <Link className={`${type}`} to={`${href}`}>{content}</Link>;