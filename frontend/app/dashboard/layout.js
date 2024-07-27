import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const menuItems = [
  {
    label: 'Houses',
    iconPath: 'M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z',
    link: '/dashboard/houses'
  },
  {
    label: 'Users',
    iconPath: 'M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
    link: '/dashboard/users'
  },
  {
    label: 'Contact',
    iconPath: 'M20 2H4C2.89 2 2 2.89 2 4v14c0 1.1.89 2 2 2h14l4 4-4-4h-4v-1c0-1.1-.89-2-2-2H4V4h16v10h2V4c0-1.1-.9-2-2-2z',
    link: '/dashboard/contact'
  }
];
export const metadata = {
  title: "Dream House"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-[calc(100vh)]">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
              <h4 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Dream House</h4>
            </div>
            <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.link}>
                  <div
                    role="button"
                    tabIndex="0"
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                  >
                    <div className="grid place-items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                        <path fillRule="evenodd" d={item.iconPath} clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {item.label}
                    {item.badge && (
                      <div className="grid place-items-center ml-auto justify-self-end">
                        <div className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none ${item.badgeBgColor} text-blue-900 py-1 px-2 text-xs rounded-full`}>
                          <span>{item.badge}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
          <main className="flex-1 block w-full p-4 overflow-y-auto">
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
