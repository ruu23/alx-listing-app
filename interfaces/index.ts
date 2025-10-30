export interface CardProps {
    title: string;
    description: string;
    imgUrl: string;
}

export interface ButtonProps {
    label: string;
    onClick: ()=> void;
}