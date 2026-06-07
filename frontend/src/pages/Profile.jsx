// import { useAuth } from "../context/AuthContext";

// const Profile = () => {
//   const { user } = useAuth();

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="bg-white rounded-xl shadow-md overflow-hidden">
        
//         {/* Header */}
//         <div className="bg-blue-600 h-32"></div>

//         {/* Profile Content */}
//         <div className="px-8 pb-8">
          
//           {/* Avatar */}
//           <div className="-mt-16 mb-4">
//             {user?.picture ? (
//               <img
//                 src={user.picture}
//                 alt={user.username}
//                 className="w-32 h-32 rounded-full border-4 border-white object-cover"
//               />
//             ) : (
//               <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-4xl font-bold">
//                 {user?.username?.charAt(0).toUpperCase()}
//               </div>
//             )}
//           </div>

//           {/* User Info */}
//           <h1 className="text-3xl font-bold mb-2">
//             {user?.username}
//           </h1>

//           <p className="text-gray-600 mb-6">
//             {user?.email}
//           </p>

//           {/* Details Card */}
//           <div className="grid md:grid-cols-2 gap-4">
            
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="font-semibold text-gray-700">
//                 Username
//               </h3>

//               <p className="mt-2">
//                 {user?.username}
//               </p>
//             </div>

//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="font-semibold text-gray-700">
//                 Email
//               </h3>

//               <p className="mt-2">
//                 {user?.email}
//               </p>
//             </div>

//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="font-semibold text-gray-700">
//                 Authentication
//               </h3>

//               <p className="mt-2">
//                 {user?.picture
//                   ? "Google Account"
//                   : "Email & Password"}
//               </p>
//             </div>

//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="font-semibold text-gray-700">
//                 Status
//               </h3>

//               <p className="mt-2 text-green-600">
//                 Active
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;






















import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <h2 className="text-xl font-semibold">
          User not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

        <div className="px-8 pb-8">
          
          {/* Avatar */}
          <div className="-mt-16 mb-4">
            {user?.picture ? (
              <img
                src={user.picture}
                alt={user.username}
                referrerPolicy="no-referrer"
                className="w-32 h-32 rounded-full border-4 border-white object-cover bg-white"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ) : (
              <div className="w-32 h-32 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-600">
                {user?.username?.charAt(0)?.toUpperCase()}
              </div>
            )}
          </div>

          {/* Name */}
          <h1 className="text-3xl font-bold">
            {user?.username}
          </h1>

          <p className="text-gray-500 mt-1">
            {user?.email}
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-700">
                Username
              </h3>

              <p className="mt-2 text-lg">
                {user?.username}
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-700">
                Email
              </h3>

              <p className="mt-2 text-lg break-all">
                {user?.email}
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-700">
                Login Method
              </h3>

              <p className="mt-2 text-lg">
                {user?.picture
                  ? "Google Authentication"
                  : "Email & Password"}
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-700">
                Account Status
              </h3>

              <p className="mt-2 text-green-600 font-medium">
                Active
              </p>
            </div>
          </div>

          {/* Debug (remove later) */}
          {/* 
          <pre className="mt-8 bg-gray-100 p-4 rounded">
            {JSON.stringify(user, null, 2)}
          </pre>
          */}
        </div>
      </div>
    </div>
  );
};

export default Profile;