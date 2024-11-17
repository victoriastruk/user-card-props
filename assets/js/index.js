const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const user = {
    firstName: "Emma",
    lastName: "Watson",
    nickName: "@EmWatson",
    tweets: 1337,
    following: 561,
    followers: 718,
    photo:
      "https://s-media-cache-ak0.pinimg.com/236x/c5/86/e6/c586e6afd87ee357bbab52df241480ac.jpg",
    isMale: false,
  };
  return <UserCard {...user} />;
}

function UserCard({
  firstName,
  lastName,
  nickName,
  tweets,
  following,
  followers,
  photo,
  isMale,
}) {
  return (
    <div className="container">
      <div className="userCard">
        <div
          className="userPhoto"
          style={
            !isMale
              ? {
                  backgroundImage: `linear-gradient(
                to bottom, 
                rgba(59, 60, 63, 0.5), 
                rgba(38, 61, 133, 0.7), 
                rgba(23, 37, 81, 0.9)
              ), url(${photo})`,
                }
              : {
                  backgroundImage: `linear-gradient(
                to bottom,
                rgba(144, 238, 144, 0.5), 
                rgba(34, 139, 34, 0.7),  
                rgba(0, 100, 0, 0.9)     
              ), url(${photo})`,
                }
          }
        ></div>

        <div className="userCardInfo">
          <span className="userName">
            {firstName} {lastName}
          </span>
          <span className="nickName">{nickName}</span>
        </div>
        <button className="addBtn">+</button>
        <div className="stats">
          <div className="statsHolder">
            <div className="userStats">
              <strong>Tweets</strong>
              <span>{tweets}</span>
            </div>
            <div className="userStats">
              <strong>Following</strong>
              <span>{following}</span>
            </div>
            <div className="userStats">
              <strong>Followers</strong>
              <span>{followers}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
