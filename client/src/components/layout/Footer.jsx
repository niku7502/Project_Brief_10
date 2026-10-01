import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} MyApp. All rights reserved.</p>
      <p className="footer-group">Developed by Group [Your Group Name]</p>
    </footer>
  );
}

export default Footer;