interface LinkProps
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {
    variant?: "default" | "fixed" | "no-underline";
}

export default function Link({
    children,
    className,
    variant = "default",
    ...rest
}: LinkProps) {
    const fixed = variant === "fixed";
    const no_underline = variant === "no-underline";

    return (
        <span>
            <a
                className={`text-white cursor-pointer break-all border-none outline-none [background-image:linear-gradient(to_right,currentColor_0%,currentColor_50%,transparent_50%,transparent_100%)] bg-no-repeat ${
                    no_underline
                        ? "[background-size:0] hover:font-bold focus-visible:font-bold"
                        : "[background-size:300%_0.1em]"
                } ${
                    fixed
                        ? "[background-position:0%_100%]"
                        : "[background-position:100%_100%]"
                } transition-[background-position,color] duration-300 ease-linear hover:[background-position:0%_100%] focus-visible:[background-position:0%_100%] ${className}`}
                {...rest}
            >
                {children}
            </a>
        </span>
    );
}
