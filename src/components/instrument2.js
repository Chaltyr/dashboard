import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'SYMBOL', label: 'Name', minWidth: 170 },
    // { id: 'sell', label: 'Sell', minWidth: 100 },
    {
      id: 'BID',
      label: 'Sell',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'ASK',
      label: 'Buy',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'pct',
      label: 'Change',
      minWidth: 100,
      align: 'right',
    },
  ];
  
  const Instrument2 = () => {
    const [instruments, setInstruments] = useState([])
    const [span, setSpan] = useState()
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);


    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    useEffect( async ()=> {
        // axios.get("https://voyanceplus.co.uk/api/load-symbol-data-new/all")
        //     .then(result => {
        //         console.log(result.data)
        //         setInstruments(result.data)
        //         // setInnerInst(result.data.)
        //         })
        const interval = setInterval(() =>{
            console.log('run this every 2 seconds!')
            axios.get("https://voyanceplus.co.uk/api/load-symbol-data-new/all")
            .then(result => {
                console.log(result.data)
                setInstruments(result.data)
                // console.log(instrument)
            })

        }, 2000)
    }, [])

    

    const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: '380px',
        },
      });
    
      
      const classes = useStyles();

    //   const compare = () => {
    //       Object.values(instruments).map(item => (
    //           if (item.BID > item.ASK) {
    //               return "red"
    //           }
    //   ))
    //   }
    
    return (
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(instruments).map((instrument) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={instrument.code}>
                    {columns.map((column) => {
                      const item = instrument[column.id];
                    //   let letters = "<span>"
                      let item_pos = item.toString().includes("span")
                      let bid = instrument.BID
                      let ask = instrument.ASK
                      let letters = /^[A-Za-z]+$/;
                      let sym = instrument.SYMBOL
                      
                      console.log(bid)
                      console.log(bid == ask)
                      const checkHigher = () => {
                        if(bid>ask) {
                            return (
                                <TableCell key={column.id} align={column.align} style={{color: 'red'}}>
                                    {item}
                                </TableCell> 
                            )
                        } else{
                            return(
                                <TableCell key={column.id} align={column.align} style={{color: 'red'}}>
                                {item}
                            </TableCell> 
                            )                          
                        }                               
                      }
                    
                      
                        if(item_pos){
                            return(
                                <TableCell key={column.id} align={column.align}>
                                <p style={{margin: '0'}} dangerouslySetInnerHTML={{__html: item}}/>
                              </TableCell> 
                              )}
                              else {
                                if(bid >= ask) {
                                    return (
                                        <TableCell key={column.id} align={column.align} style={{color: 'red'}}>
                                            {item}
                                        </TableCell> 
                                    )
                                } else{
                                    return(
                                        <TableCell key={column.id} align={column.align} style={{color: 'green'}}>
                                            {item}
                                        </TableCell> 
                                    )                          
                                }                               
                              }
                             
                      
                    
                    //   checkSpan()
                      
                          
                          
                      }
                    
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100, 200, 300]}
          component="div"
          count={instruments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
      </Paper>

);
}
export default Instrument2