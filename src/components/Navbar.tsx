import Avatar from '@/components/Avatar';
import SwitchThemeButton from '@/components/SwitchThemeButton';
import { useAppSelector } from '@/state/hook';
import { Link } from 'react-router-dom';

function Navbar() {
  const isLogin: boolean = useAppSelector((state) => state.user.isLogin);

  return (
    <div className="navbar bg-base-100 lg:p-5">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">
          Web TOTP
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-ghost border-none"
        >
          <SwitchThemeButton />
        </div>
        {isLogin ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost border-none align-middle"
            >
              <Avatar />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn">Login</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
