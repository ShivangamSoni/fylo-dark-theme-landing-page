import { useForm, type SubmitHandler } from "react-hook-form";
import { object, string, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { motion, useReducedMotion } from "framer-motion";
import { zoomIn } from "@utils/variants";

import Button from "@components/Button";
import Input from "@components/Input";

const FormSchema = object({
    email: string()
        .required("Can't be blank")
        .email("Please enter a valid email address"),
});

type FormState = InferType<typeof FormSchema>;

export default function NewsLetter() {
    const shouldReduceMotion = useReducedMotion();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormState>({
        resolver: yupResolver(FormSchema),
    });

    const onSubmit: SubmitHandler<FormState> = (data) => {
        console.log(data);
        reset();
    };

    return (
        <motion.div
            variants={zoomIn}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-primary-darkBlue-200 grid items-start justify-start gap-8 p-12 text-center w-[min(55rem,96%)] mx-auto rounded-lg shadow-lg shadow-black"
        >
            <h2 className="font-bold font-header text-xl md:text-2xl lg:text-4xl">
                Get early access today
            </h2>
            <p className="w-[min(45rem,100%)] mx-auto text-base md:text-lg lg:text-xl">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid md:grid-cols-[1fr_auto] gap-2 md:gap-8 items-start text-left"
            >
                <Input
                    label="Email"
                    error={errors.email?.message ?? ""}
                    placeholder="email@example.com"
                    {...register("email")}
                />
                <Button>Get Started For Free</Button>
            </form>
        </motion.div>
    );
}
