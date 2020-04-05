import { withStyles } from '@material-ui/core/styles';

const styles = {
  navBar: {
    width: 375,
    position: "fixed",
    bottom: 0
  },

  // Search styling
  searchForm: {
    padding: '2px 4px',
  },
  searchInput: {
    flex: 1,
    padding: 8,
  },

  // 4 different stylings for chips
  chipOne: {
    backgroundColor: 'rgba(79, 183, 0, 0.65)',
    color: 'white',
    margin: 5,
  },
  chipTwo: {
    backgroundColor: 'rgba(108, 192, 24, 0.63)',
    color: 'white',
    margin: 5,
  },
  chipThree: {
    backgroundColor: 'rgba(11, 145, 1, 0.68)',
    color: 'white',
    margin: 5,
  },
  chipFour: {
    backgroundColor: 'rgba(74, 145, 20, 0.685)',
    color: 'white',
    margin: 5,
  },
  chipSection: {
    margin: 5,
  },

  // Home page
  homePageTitle: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    fontWeight: 600
  },
  weeklyTips: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  weeklyTipsTitle: {
    color: '#84C984',
    margin: '10px',
    padding: '10px',
    fontWeight: 600,
  },
  
  showMoreBtn: {
    fontSize: '13px',
    backgroundColor: '#84C984',
    color: '#fff',
    margin: '10px',
    padding: '5px',
    borderRadius: '5px',
    border: '2px solid rgb(100, 153, 100)',
    cursor: 'pointer',
  },
  weeklyImg: {
    width: '150px',
    margin: '10px',
    borderRadius: '5px',
  },
  
  weeklyTitle: {
    float: 'left',
    marginLeft: '10px',
    marginTop: '-5px',
  },
  
  // Footer styling
  footerContainer: {
    backgroundColor: '#84C984', 
    color: 'black',
    height: '450px',
    marginTop: '30px',
  },
  footerWrapper:{
    width: '100%',
    bottom: 0,
  },
  footerh1: {
    color: 'black',
  },
/*   mdlLogo {
    font-weight: bold;
    font-size: 2em;
    color: black;
  } */
  flexFoot: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  
  footerIcon: {
    padding: '10px',
    fontSize: '30px',
    cursor: 'pointer',
  },
  footerBold: {
    fontWeight: 'bold',
  },

  // Login styling
  paper: {
    marginTop: '70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#84C984',
    margin: '10px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '20px',
  },
  submit: {
    margin: '10px 0 10px',
  },
};


export default withStyles(styles);