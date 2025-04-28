function Button({ children, onClick, type = 'submit' }) {
    return (
      <button type={type} onClick={onClick} className="submit">
        {children}
      </button>
    );
  }
  
  export default Button;
  