import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import React, { useEffect, useState } from 'react';
import Instrument from '../components/instrument';
import Instrument2 from '../components/instrument2';
import TradingView from '../components/tradingview';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Icon from '@material-ui/core/Icon';
import { OutlinedInput } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const inputStyles = makeStyles({
    root: {
        width: '120px',
        height: '35px',
        borderColor: 'grey',
        marginRight: '20px',

    }
});
  

const Homepage = () => {

    const [userProfile, setUserProfile] = useState({})
    const [value, setValue] = React.useState('Search')

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    const classes = useStyles();
    const classes2 = inputStyles();

    useEffect(()=>{
        axios.get("https://reqres.in/api/users/2")
        .then(result => {
            console.log(result.data)
            setUserProfile(result.data.data)
            // console.log(userProfile)
        })
    }, [])


    return (
        <div style={{backgroundColor: "#f2f3f8"}}>
            this is the Homepage
            <div className="navbar" 
                style={{
                display: 'flex',
                justifyContent: 'space-evenly'

            }}>
                <div style={{display: 'flex',
                             border: "solid 1px #eaeae",
                             borderRadius: "10px",
                             backgroundColor: "white",
                             paddingTop: "20px",
                             paddingBottom: "20px",
                             paddingRight: "20px",
                             paddingLeft: "20px"
            }}>
                    <div style={{
                        marginRight: "60px",
                        width: "120px"
                        }}>
                        <div>
                            TOTAL TRAFFIC
                        </div>
                        <div>
                            123,456
                        </div>
                    </div>
                    <div>
                        <img src="/images/Group -1.png"/>
                    </div>
                   
                </div>
                <div style={{display: 'flex',
                             border: "solid 1px #eaeae",
                             borderRadius: "10px",
                             backgroundColor: "white",
                             paddingTop: "20px",
                             paddingBottom: "20px",
                             paddingRight: "20px",
                             paddingLeft: "20px"
                             
            }}>
                    <div style={{
                        marginRight: "60px",
                        width: "120px"
                        }}>
                        <div>
                            NEW USERS
                        </div>
                        <div>
                            2,345
                        </div>
                    </div>
                    <div>
                        <img src="/images/Group -2.png"/>
                    </div>
                   
                </div>
                <div style={{display: 'flex',
                             border: "solid 1px #eaeae",
                             borderRadius: "10px",
                             backgroundColor: "white",
                             paddingTop: "20px",
                             paddingBottom: "20px",
                             paddingRight: "20px",
                             paddingLeft: "20px"
            }}>
                    <div style={{
                        marginRight: "60px",
                        width: "120px"
                        }}>
                        <div>
                            SALES
                        </div>
                        <div>
                            924
                        </div>
                    </div>
                    <div>
                        <img src="/images/Group -3.png"/>
                    </div>
                   
                </div>
                <div style={{display: 'flex',
                             border: "solid 1px #eaeae",
                             borderRadius: "10px",
                             backgroundColor: "white",
                             paddingTop: "20px",
                             paddingBottom: "20px",
                             paddingRight: "20px",
                             paddingLeft: "20px"
            }}>
                    <div style={{
                        marginRight: "60px",
                        width: "120px"
                        }}>
                        <div>
                            PERFORMANCE
                        </div>
                        <div>
                            48.65%
                        </div>
                    </div>
                    <div>
                        <img src="/images/Group -1.png"/>
                    </div>
                   
                </div>
               
            </div>
            <div style={{
                display: 'flex',
                // justifyContent: 'space-evenly',
                marginTop: '20px',

            }}>
                <div  style={{
                    display: 'flex-wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }}>
                    <div className="profile" style={{
                                                        border: 'solid 1px #eaeae',
                                                        borderRadius: '10px',
                                                        marginBottom: '20px',
                                                        marginLeft: '88px',
                                                        marginRight: '40px',
                                                        backgroundColor: 'white',
                                                        flexGrow: '1',
                                                        height: '500px',
                                                        width: '370px',
                                                        backgroundImage: `url(${'images/Mask.png'})`,
                                                        backgroundRepeat: 'no-repeat'


                                                    }}>
                        <div className={classes.root} style={{ 
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                paddingTop: '130px',
                                                             }}>
                            <Avatar alt="Remy Sharp" src={userProfile.avatar} style={{fontSize: "80px",
                                                                                        height: "auto",
                                                                                        width: "auto",
                                                                                    }}/>
                        </div>
                           
                        <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '20px',
                                fontSize: 'large'


                                
                            }}>
                            <div style={{
                                marginRight: '5px',
                              

                            }} >
                                {userProfile.first_name}
                            </div>
                            <div>
                                {userProfile.last_name}
                            </div>
                        </div>
                        <div style={{ 
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: 'small',
                                        marginTop: '10px'
                                    }}>
                            {userProfile.email}
                        </div>
                        <div style={{ 
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: '50px'
                                    }}>
                            <button style={{
                                                border: 'solid 1px #ed1a30',
                                                borderRadius: '5px',
                                                height: '30px',
                                                width: '90px',
                                                marginRight: '20px',
                                                color: 'white',
                                                backgroundColor: 'red'
                                        }}>
                                Connect
                            </button>
                            <button  style={{
                                                border: 'solid 1px #ed1a30',
                                                borderRadius: '5px',
                                                height: '30px',
                                                width: '90px',
                                                color: '#ed1a30',
                                                backgroundColor: 'white'
                                        }}>
                                Message
                            </button>
                        </div>


                    </div>
                    <div className="instruments" style={{
                                                            marginLeft: '88px',
                                                            width: '370px',
                                                            border: 'solid 1px white',
                                                            borderRadius: '10px',
                                                            backgroundColor: 'white'
                    }}>
                        <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginTop: '30px',
                                        marginBottom: '25px'
                        }}>
                            <div style={{
                                            marginLeft: '20px',
                                            fontSize: 'large'
                                            
                            }}>
                                Instruments
                            </div>
                            <div>
                                <OutlinedInput 
                                    id="search" 
                                    placeholder="Search"
                                    multiline
                                    onChange={handleChange}
                                    classes={{root: classes2.root}} 
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchIcon/>
                                        </InputAdornment>
                                        }>                                                                                         
                                </OutlinedInput>
                            </div>
                        </div>
                        
                            <Instrument2 />
               
                        
                    </div>
                </div>

                <div>
                    <div style={{
                                    border: 'solid 1px white',
                                    borderRadius: '10px',
                                    backgroundColor: 'white',
                                    width: '930px',
                                    height: '500px',
                                    flexGrow: '4',
                                    
                    }}>
                        <div style={{
                                fontSize: 'large',
                                marginLeft: "40px",
                                marginTop: '30px',
                                marginBottom: '30px',
                                
                        }}>
                            Edit profile
                        </div>
                        <hr
                            style={{
                                color: 'black',
                                backgroundColor: 'black',
                                height: '5'
                            }}
                        />
                        <form style={{
                                display: 'flex-wrap',
                                justifyContent: 'space-evenly',

                                }}
                                noValidate
                                autoComplete="off">
                                    
                            
                                
                                    <TextField id="outlined-basic" label="First Name" variant="outlined" style={{width:"400px", marginLeft: "40px", marginRight: "30px", marginTop: "50px"}}/>
                                
                                    <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width:"400px", marginright:"30px", marginTop: "50px"}}/>
                               
                                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:"400px", marginLeft: "40px", marginTop: "50px"}}/>  
                              
                             
                        </form>
                        <form noValidate 
                                autoComplete="off">
                           
                        </form>
                        <button style={{
                                    margin: '-20px -50px',
                                    marginTop: '90px',
                                    position:'relative',
                                    top:'50%',
                                    left:'50%',
                                    border: 'solid 1px #ed1a30',
                                    borderRadius: '5px',
                                    height: '30px',
                                    width: '90px',
                                    color: 'white',
                                    backgroundColor: 'red'
                        }}>
                            Confirm
                        </button>
                       
                    </div>
                    <div style={{
                            border: 'solid 1px white',
                            borderRadius: '10px',
                            backgroundColor: 'white',
                            marginTop: '20px',
                            marginBottom: '20px',
                            paddingTop:'10px',
                            height: '470px'
                    }}>
                        
                        <TradingView/>
                    </div>
                </div>

            </div>
            
            <style jsx>
                {`
                    
                `}
            </style>
        </div>
    )
}

export default Homepage