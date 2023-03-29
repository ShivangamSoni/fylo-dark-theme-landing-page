export default function Link({
    children,
    className,
    ...rest
}: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>) {
    return (
        <span>
            <a
                className={`break-all border-none outline-none [background-image:linear-gradient(to_right,currentColor_0%,currentColor_50%,transparent_50%,transparent_100%)] bg-no-repeat [background-size:300%_0.15em] [background-position:100%_100%] transition-[background-position,color] duration-300 ease-linear hover:[background-position:0%_100%] focus-visible:[background-position:0%_100%] ${className}`}
                {...rest}
            >
                {children}
            </a>
        </span>
    );
}
