

const FormInput = ({title, type, placeHolderText}) => {
  return (
    <div className="form-input-container">
    <h3 className="box-headline">{title}</h3>
    <input
      className="input-box"
      type={type}
      placeholder={placeHolderText}
    />
  </div>
  )
}

export default FormInput