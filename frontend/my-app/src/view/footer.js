

function Footer() {
    const d = new Date();


    var footer = (
        <div className="footer">
            <a href="/src/index.js">home</a>
            <p className="copyright">&copy; {d.getFullYear()} Matthew Palmer</p>
        </div>
    );

    return footer;
}

export default Footer;
