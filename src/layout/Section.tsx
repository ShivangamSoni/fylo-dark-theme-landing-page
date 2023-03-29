export default function Section({
    children,
    className,
    ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
    return (
        <section className={`py-20 ${className ?? ""}`} {...rest}>
            {children}
        </section>
    );
}
