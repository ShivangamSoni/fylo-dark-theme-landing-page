import Button from "@components/Button";

export default function NewsLetter() {
    return (
        <div className="bg-primary-darkBlue-200 grid items-start justify-start gap-8 p-12 text-center w-[min(55rem,96%)] mx-auto rounded-lg shadow-lg shadow-black">
            <h2 className="font-bold font-header text-4xl">
                Get early access today
            </h2>
            <p className="w-[min(45rem,100%)] mx-auto text-xl">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
            </p>
            <form className="grid grid-cols-[1fr_auto] gap-8 items-start text-left">
                <label>
                    <span className="sr-only">Email</span>
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full rounded-full px-8 py-4 text-xl text-primary-darkBlue-700"
                    />
                    <span className="px-8 text-sm text-accent-red font-bold">
                        Error
                    </span>
                </label>
                <Button>Get Started For Free</Button>
            </form>
        </div>
    );
}
