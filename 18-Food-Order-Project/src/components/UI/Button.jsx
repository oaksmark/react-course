export default function Button({children, ...props}) {
    const cssClasses = props.textonly ? `text-button ${props.className}` : 'button';
    
    return (
        <button className={cssClasses} {...props}>{children}</button>
    )
}