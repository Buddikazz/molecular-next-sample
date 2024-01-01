interface ButtonProps {
    name: string;
}

const Button = ({ name }: ButtonProps) => {
    console.log("+++++++++++++++++++", name)
    return (
        <button className="bg-orange-500 text-white font-bold text-lg font-ciutadella pl-20 pr-20 py-1.5 mt-4 rounded cursor-pointer md-40 transition-opacity duration-300 hover:opacity-80 whitespace-no-wrap">
            <i className="fas fa-caret-right ml-2 pr-2"></i>
            {name}
        </button>
    );
};

export default Button;
