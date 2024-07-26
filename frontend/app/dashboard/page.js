import Link from "next/link";
export default function Dashboard() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <header className="bg-white shadow-md py-4 px-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        </header>
        
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="text-3xl text-blue-500 mb-4">
               
                <i className="fas fa-house-user"></i>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Houses</h2>
              <p className="text-gray-600">Manage and view all houses</p>
              <Link 
                href="dashboard/houses" 
                className="mt-4 text-blue-500 hover:text-blue-700"
              >
                Go to Houses
              </Link>
            </div>
            
    
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="text-3xl text-green-500 mb-4">
     
                <i className="fas fa-users"></i>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Users</h2>
              <p className="text-gray-600">Manage and view all users</p>
              <Link 
                href="dashboard/users" 
                className="mt-4 text-green-500 hover:text-green-700"
              >
                Go to Users
              </Link>
            </div>
            
    
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="text-3xl text-red-500 mb-4">
    
                <i className="fas fa-envelope"></i>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Contacts</h2>
              <p className="text-gray-600">View and manage user messages</p>
              <Link 
                href="dashboard/contact" 
                className="mt-4 text-red-500 hover:text-red-700"
              >
                Go to Messages
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
  