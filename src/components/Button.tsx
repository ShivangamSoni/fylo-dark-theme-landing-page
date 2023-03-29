export default function Button({
    children,
    className,
    ...rest
}: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) {
    return (
        <button
            className={`border-none outline-none text-xl font-semibold bg-gradient-to-r from-accent-cyan to-accent-blue py-4 px-8 rounded-full hover:bg-none hover:bg-accent-cyan hover:bg-opacity-80 focus-visible:bg-none focus-visible:bg-accent-cyan focus-visible:bg-opacity-80 ${
                className ?? ""
            }`}
            {...rest}
        >
            {children}
        </button>
    );
}
