const MainCard = ({img,onHeartClick,alreadyFavorite}) => {
  const hearIcon = alreadyFavorite ? "💖" : "🤍" ;

  return(
    <div className="main-card">
      <img
        src={img}
        alt="고양이"
        width="400"
      />
      <button onClick={onHeartClick}>{hearIcon}</button>
    </div>
  );
};

export default MainCard;