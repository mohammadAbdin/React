const PasswordInput = () => {
  return (
    <div className="form-password-container">
      <h3 className="box-headline">PASSWORD</h3>
      <div className="input-box">
        <input
          className="input-box"
          type="password"
          placeholder="Enter valid password"
        />
        <div className="eyecon pass-hidden" />
      </div>
      <ul className="password-validation-ul">
        <li className="li-password-special-chars pass-invalid">
          <p>• Special Characters</p>
        </li>
        <li className="li-password-caps pass-valid">
          <p>• Caps</p>
        </li>
        <li className="li-password-lowercase pass-valid">
          <p>• Lowercase</p>
        </li>
        <li className="li-password-valid-numbers pass-valid">
          <p>• Numbers</p>
        </li>
      </ul>
    </div>
  );
};

export default PasswordInput;
