import { forwardRef } from "react";

interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label: string;
    error: string;
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, error, ...rest },
    ref,
) {
    return (
        <label>
            <span className="sr-only">{label}</span>
            <input
                className={`border-none outline-none focus-within:ring-2 ${
                    error ? "ring-accent-red" : "ring-accent-cyan"
                } w-full rounded-full px-6 md:px-8 py-4 text-base md:text-lg lg:text-xl text-primary-darkBlue-700`}
                {...rest}
                ref={ref}
            />
            <span className="px-6 md:px-8 text-xs md:text-sm text-accent-red font-bold">
                {error || ""}
            </span>
        </label>
    );
});
