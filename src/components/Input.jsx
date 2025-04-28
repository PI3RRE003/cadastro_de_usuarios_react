function Input({placeholder, name, type, value, onChange}){
    return(
        <input
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
         />
    )
}

export default Input;