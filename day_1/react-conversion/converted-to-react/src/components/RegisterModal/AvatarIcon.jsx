const AvatarIcon = ({ avatar }) => {
  return (
    <div className={`avatar-box ${avatar || "coming-soon"}`}>
      {avatar ? <div id={avatar} /> : <p>COMING SOON</p>}
    </div>
  );
};

export default AvatarIcon;
