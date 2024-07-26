import Link from "next/link";
export default function SideBar(){
   
    return(
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <h4 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Dream House</h4>
      </div>
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        {menuItems.map((item, index) => (
          
          <div
            key={index}
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <Link href={item.link}>
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path fillRule="evenodd" d={item.iconPath} clipRule="evenodd"></path>
              </svg>
            </div>
            </Link>
            {item.label}
            {item.badge && (
              <div className="grid place-items-center ml-auto justify-self-end">
                <div className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none ${item.badgeBgColor} text-blue-900 py-1 px-2 text-xs rounded-full`}>
                  <span>{item.badge}</span>
                </div>
              </div>
            )}
          </div>
          
        ))}
      </nav>
     
    </div>
    );
}