import PropTypes from "prop-types";

function Profile({ userInfo }) {
  const {
    name,
    username,
    email,
    phone,
    company: { catchPhrase },
    address: { suite, city, street, zipcode },
  } = userInfo;
  
  return (
    <div className="mt-4 border-2 rounded-xl px-6 py-8 sm:flex sm:justify-between sm:items-center text-lg sm:text-xl font-medium shadow-lg">
      <div>
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl">
          Name: {name}
        </p>
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl">
          {username} | {catchPhrase}
        </p>
      </div>
      <div className="mt-4 sm:mt-0">
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl">{`${suite} ${city} ${street} ${zipcode}`}</p>
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl">
          {email} | {phone}
        </p>
      </div>
    </div>
  );
}

Profile.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default Profile;
