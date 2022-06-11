import {
  LocationMarkerIcon,
  LinkIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/solid";

const UserData = ({ location, twitterUsername, blog, company }) => {
  return (
    <div className="grid grid-cols-1 gap-6 px-2 py-4 md:grid-cols-2 md:gap-x-10">
      <div className="flex items-center  space-x-2 font-semibold text-white transition-colors duration-150 hover:text-blue-400">
        <LocationMarkerIcon className="h-5 w-5 text-slate-500  dark:text-gray-100" />
        <p className="font-mono text-sm font-medium text-gray-900 dark:text-gray-300">
          {location ? location : "Not Available"}
        </p>
      </div>

      <div className="flex items-center space-x-2 font-semibold text-white transition-colors duration-150 hover:text-blue-400">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="text-sky-400 opacity-100"
        >
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
        <p className="font-mono text-sm font-medium text-gray-900 dark:text-gray-300">
          <a href={`https://twitter.com/${twitterUsername}`} target="_blank">
            {twitterUsername ? twitterUsername : "Not Available"}
          </a>
        </p>
      </div>

      <div className="flex items-center  space-x-2 font-semibold text-white transition-colors duration-150 hover:text-blue-400">
        <LinkIcon className="h-5 w-5 text-slate-500 dark:text-gray-100 " />
        <p className="decoration-3 font-sm font-mono text-sm font-medium text-gray-900 underline dark:text-gray-300">
          <a href={`https://${blog}`} target="_blank">
            {blog ? blog : "Not Available"}
          </a>
        </p>
      </div>

      <div className="flex items-center  space-x-2 font-semibold text-white transition-colors duration-150 hover:text-blue-400">
        <OfficeBuildingIcon className="h-5 w-5 text-slate-500 dark:text-gray-100 " />
        <p className="font-sm font-mono text-sm font-medium text-gray-900 dark:text-gray-300">
          {company ? company : "Not Available"}
        </p>
      </div>
    </div>
  );
};

export default UserData;
