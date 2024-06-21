const Error = ({title, message}) => {
  return (
    <div className="error-container">
      <div className="error">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Error