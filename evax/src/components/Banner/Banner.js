import { Container, Typography, Grid } from "@material-ui/core";
import logo from "./logo.jpg";
// import Navbar from "./components/Navbar/Navbar";
import "./styles.css";
import browserHistory from "react-router";


const Banner = () => {
  // onNavigate(){
  //   browserHistory.push("/Inscri");
  // }
    return (
      
      <div className="banner">
        {/* <Navbar/> */}
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={5}>
              <Typography  className="title" variant="h2" >
              مرحباً بكم على بوابة التلقيح ضد كوفيد-19
              </Typography>
              
            </Grid>
            <Grid className="brand" item sm={2}>
              <img src={logo} alt="Brand-tv" />
            </Grid>
          </Grid>
          <Grid className="Bouton"  >
            <bouton className>
            inscription dans un centre       
        </bouton>
       
         </Grid>
     <Grid className="Bouton2"  > 
            <bouton>
            inscription dans une pharmacie     
        </bouton>
                    </Grid>

        </Container>
        
      </div>
    );
  };
  
  export default Banner;