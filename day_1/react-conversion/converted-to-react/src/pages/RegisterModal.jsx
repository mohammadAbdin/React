import {
  FormInput,
  PasswordInput,
  Avatar,
  AvatarsContainer,
  ModalBackBtn,
  RegisterModalNavbar,
} from "../components";

const RegisterModal = () => {
  return (
    <div className="darken-filter">
      <div className="login-modal">
        <ModalBackBtn />

        <RegisterModalNavbar />

        <div className="modal-header">
          <div className="modal-gunEdge-img">
            <img src="./assets/images/Modal-Gun-Edge.png" alt="" />
          </div>

          <Avatar />
        </div>
        <div className="modal-showcase-container">
          <div className="modal-form-container">
            <form action="">
              <FormInput
                title="NICKNAME"
                type="text"
                placeHolderText="This will be your screen name"
              />
              <FormInput
                title="EMAIL ADDRESS"
                type="email"
                placeHolderText="Enter valid email address"
              />
              <PasswordInput />
            </form>
          </div>
          <AvatarsContainer />
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
