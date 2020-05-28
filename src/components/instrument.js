import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const Instrument = () => {
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
        axios.get("https://voyanceplus.co.uk/api/load-symbol-data-new/all")
            .then(result => {
                console.log(result.data)
                setInstruments(result.data)
                // setInnerInst(result.data.)
                })
        // const interval = setInterval(() =>{
        //     console.log('run this every 2 seconds!')
        //     axios.get("https://voyanceplus.co.uk/api/load-symbol-data-new/all")
        //     .then(result => {
        //         console.log(result.data)
        //         setInstruments(result.data)
        //         // console.log(instrument)
        //     })

        // }, 2000)
    }, [])

    

    const useStyles = makeStyles({
        table: {
          maxWidth: '300px',
          maxHeight: 0,
          
        },
      });

      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      
      const classes = useStyles();

    //   const compare = () => {
    //       Object.values(instruments).map(item => (
    //           if (item.BID > item.ASK) {
    //               return "red"
    //           }
    //   ))
    //   }
    
    return (
      
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell align="right">Sell</TableCell>
            <TableCell align="right">Buy</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
                <TableCell style={{color: 'red',backgroundColor: 'yellow'}}>
                {Object.keys(instruments).map(i => (
                    <TableRow  >  
                        {i}
                        {console.log(i)}
                    </TableRow>            
                ))} 
                </TableCell>

                <TableCell align='right' style={{backgroundColor: 'blue'}}>
                    {Object.values(instruments).map(item => (
                        <TableRow>
                            {item.BID}
                        </TableRow>
                    ))}
                </TableCell>

                <TableCell align='right'>
                    {Object.values(instruments).map(item => (
                            <TableRow>
                                {item.ASK}
                            </TableRow>
                        ))}
                </TableCell>

                <TableCell align='right'>
                    {Object.values(instruments).map(item => (
                            <TableRow >
                                <p style={{margin: '0'}} dangerouslySetInnerHTML={{__html: item.pct}}/>
                            </TableRow>
                        ))}
                </TableCell>
            </TableRow>                
        
        </TableBody>
      </Table>
      {/* <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </TableContainer>
  )
}

export default Instrument