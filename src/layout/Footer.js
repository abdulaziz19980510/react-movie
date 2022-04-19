export default function Footer() {
    return(
        
        <footer className="page-footer background-color: #455a64 blue-grey darken-2">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Movie</a>
            </div>
          </div>
        </footer>
    )
}