import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer className="footer items-center bg-base-200 px-10 py-9 text-base-content md:px-24">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <GitHubIcon className="w-24 fill-current" />
        <FacebookIcon className="w-24 fill-current" />
      </nav>
    </footer>
  );
}

export default Footer;
