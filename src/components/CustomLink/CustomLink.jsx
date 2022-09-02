import { useMatch, Link } from "react-router-dom"; 

const CustomLink = ({ children, to, ...props }) => {

    const match = useMatch(to)

    const styles = {
        color: match? "black": 'white',
        backgroundColor: match? "white": "inherit", 
        textDecoration: "none", 
        padding: '7px 10px', 
        borderRadius: 4, 
        margin: "0 8px", 
        fontWeight: "bold"
    }

    return ( 
        <Link style={styles} to={to} {...props} >
            {children}
        </Link>
    );
}
 
export default CustomLink;