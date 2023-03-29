import {
    AccessAnywhere,
    Security,
    Collaboration,
    AnyFile,
} from "@assets/Icons";

export const Features = [
    {
        id: crypto.randomUUID(),
        Icon: AccessAnywhere,
        title: "Access your files, anywhere",
        info: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
        id: crypto.randomUUID(),
        Icon: Security,
        title: "Security you can trust",
        info: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
        id: crypto.randomUUID(),
        Icon: Collaboration,
        title: "Real-time collaboration",
        info: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
        id: crypto.randomUUID(),
        Icon: AnyFile,
        title: "Store any type of file",
        info: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
];
