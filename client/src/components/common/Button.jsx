function Button({ children }) {
  return (
    <button className="btn">
      {children || 'Button'}
    </button>
  )
}

export default Button