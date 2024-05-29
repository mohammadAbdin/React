import { AvatarIcon} from '../'

const AvatarsContainer = () => {
  const avatars = [
    "guest",
    "head-1",
    "head-2",
    "head-3",
    "head-4",
    "head-5",
    "head-6",
    "molotov",
    "tnt",
    "bomb",
    "",
    "",
    "",
  ];

  return (
    <div className="modal-avatars-container">
      <h3 className="box-headline">AVATAR</h3>
      <div className="modal-avatars">
        {avatars.map((avatar,index) => (
          <AvatarIcon key={avatar || index} avatar={avatar} />
        ))}
      </div>
      <div className="modal-create-account-container">
        <div className="btn-container">
          <div className="mid-btn-container">
            <button className="create-account-btn">
              <h4>Create Account</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarsContainer;
