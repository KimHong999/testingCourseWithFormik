
export const CustomButton = ({type="button", label, onClick }) => {
    return(
    <button type={type} onClick={onClick}
        className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded">
        {label}
    </button>
    )
    }