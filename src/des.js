import logo from './images/Logo.jpg';

const Des = () => {
    return (
        <div className="des"
        style={{
            justifyContent:'center',
            alignItems : 'center',
            margin:"50px"

        }}>
            <div className="logo">
                <img src={logo} alt=""
                style={{
                    height:"auto",
                    width: "100px",
                    marginLeft:"45%"
                }}
                />
            </div>
            <div className="destext"
            style={{
                textAlign:"center"
            }}>
                <p>
                    The example above is fine if the web page only contains two columns.

However, we want to use a responsive grid-view with 12 columns, to have more control over the web page.

First we must calculate the percentage for one column:
                </p>
            </div>
        </div>
    );
}
 
export default Des;