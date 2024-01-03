interface ButtonProps {
    name: string;
}

const Button = ({ name }: ButtonProps) => {
    return (
        <button className={`flex btn p-2 pr-5 items-center justify-center h-10 rounded-md bg-orange text-18 font-bold cursor-pointer hover:bg-dark-orange`}>
            <i className="fas fa-caret-right ml-2 pr-2"></i>
            <p className={`text-white`}>{name}</p>
        </button>
    );
};

export default Button;
