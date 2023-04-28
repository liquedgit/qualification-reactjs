import { ButtonProps } from "../../../TypeScript/Type";

export function ButtonComponent(props:ButtonProps){
    let stylingName = `${props.color} ${props.backgroundColor} rounded-3xl py-2 px-2 text-lg`
    console.log(stylingName);
    return(
        <>
            <button className={stylingName}>
                <span className="my-4 mx-4">
                    {props.text}
                </span>
            </button>
        </>
    );
}