export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <span className="footer-note">© {year} Muhammad Shaheer Malik</span>
        <nav className="footer-links">
          <a href="mailto:mshaheer.malik@gmail.com">Email</a>
          <a href="https://linkedin.com/in/mshaheermalik77" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/mshaheermalik77" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
