import UserProfile from "./UserProfile";
import UserBio from "./UserBio";
import UserStats from "./UserStats";
import UserData from "./UserData";

const GithubUser = (props) => {
  const date = new Date(props.data.created_at);
  const newDate = date.toDateString(4, 10).slice(4, 15);

  return (
    <div className="mx-auto mt-6 flex max-w-md min-h-[470px] flex-col items-end justify-between  space-y-4 rounded-lg bg-gray-200 py-6 transition duration-300 ease-in dark:bg-[#2b365e] md:min-h-fit md:max-w-2xl">
      <UserProfile
        name={props.data.name}
        date={newDate}
        username={props.data.login}
        imageURL={props.data.avatar_url}
      />

      <div className=" flex w-full md:max-w-lg flex-col space-y-6 px-6 py-3">
        <UserBio bio={props.data.bio} />
        <UserStats
          repos={props.data.public_repos}
          followers={props.data.followers}
          following={props.data.following}
        />

        <UserData
          location={props.data.location}
          twitterUsername={props.data.twitter_username}
          blog={props.data.blog}
          company={props.data.company}
        />
      </div>
    </div>
  );
};

export default GithubUser;
