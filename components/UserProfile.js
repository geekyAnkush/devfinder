import Avatar from "./Avatar";

const UserProfile = ({ name, date, username, imageURL }) => {
  return (
    <div className=" flex w-full items-center space-x-4  md:justify-evenly md:space-x-6">
      <Avatar imageURL={imageURL} />
      <div className="flex flex-1 items-center space-x-6 px-2 md:flex-1 md:items-start md:justify-between">
        <h2 className="w-32 md:w-44 font-mono text-lg font-bold text-gray-800 dark:text-gray-50 md:text-2xl">
          {name}{" "}
          <span className="inline-block font-mono text-sm text-blue-400">
            {username && `@${username ? username : "Not Available"}`}
          </span>
        </h2>
        {username && (
          <p className=" md:text-md -mt-2 pl-6 font-mono text-sm font-[400] text-slate-600 dark:text-gray-300 md:mt-0 md:p-6 md:pt-2">
            Joined{" "}
            <span className="flex font-mono text-xs font-semibold md:inline-block md:text-sm">
              {date ? date : "Not Available"}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
