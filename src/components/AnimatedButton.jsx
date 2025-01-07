import React from "react";
import { Link } from "react-router-dom";

const AnimatedButton = ({ type, classLabel, label, icon, backgroundColor, url, method }) => {
    const renderButton = () => {
        switch (type) {
            case "button":
                return (
                    <CustomButton classLabel={classLabel} label={label} icon={icon} backgroundColor={backgroundColor} method={method} />
                );
            case "routerLink":
                return (
                    <CustomRouterLink classLabel={classLabel} label={label} icon={icon} backgroundColor={backgroundColor} url={url} />
                );
            case "link":
                return (
                    <CustomLink classLabel={classLabel} label={label} icon={icon} backgroundColor={backgroundColor} url={url} />
                );
            default:
                console.error("Invalid type of button. No such button type exists"); 
                return null; 
        }
    }

    return (
        <>{ renderButton() }</>
    );
};

const CustomButton = ({ classLabel, label, icon, backgroundColor, method }) => {
    return (
        <div className={`${classLabel} dental_costume_button`}>
            <button style={{ background: `${backgroundColor}` }} onClick={ method }>
                <img src={icon} alt="" />
                <span>{label}</span>
            </button>
        </div>
    )
}

const CustomRouterLink = ({ classLabel, label, icon, backgroundColor, url }) => {
    return (
        <div className={`${classLabel} dental_costume_button`}>
            <Link to={url} style={{ background: `${backgroundColor}` }}>
                <img src={icon} alt="" />
                <span>{label}</span>
            </Link>
        </div>
     )
}

const CustomLink = ({ classLabel, label, icon, backgroundColor, url }) => {
    return (
        <div className={`${classLabel} dental_costume_button`}>
            <a href={url} style={{ background: `${backgroundColor}` }}>
                <img src={icon} alt="" />
                <span>{label}</span>
            </a>
        </div>
    )
}

export default AnimatedButton;
