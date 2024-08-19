import Avatar from '@/components/Avatar';
import SwitchThemeButton from '@/components/SwitchThemeButton';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Web TOTP</a>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-ghost border-none"
        >
          <SwitchThemeButton />
        </div>
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
      </div>
    </div>
  );
}

export default Navbar;
