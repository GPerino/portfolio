export interface Link {
    id: string;
    alt: string;
    url:string;
    image: string;
}

export const LinkItems: Link[] = [
    {
        id: "1",
        alt: "Linkedin",
        url:"https://www.linkedin.com/in/gabriel-perino",
        image: "/icons/Linkedin.svg",
    },
    {
        id: "2",
        alt: "Github",
        url:"https://www.github.com/GPerino/",
        image: "/icons/Github.svg",
    },
    {
        id: "3",
        alt: "Mail",
        url:"mailto:perino.contact@gmail.com",
        image: "/icons/Mail.svg",
    },
];
