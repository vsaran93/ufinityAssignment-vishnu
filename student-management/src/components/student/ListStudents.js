import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const styles = theme => ({
    table: {
        minWidth: 650,
    },
});

class ListStudent extends React.Component {
    state = {
        data: []
    }
    componentWillReceiveProps(p) {
        if(this.state.data.length !== p.student.studentList.length) {
            this.setState({ data: p.student.studentList })
        }
    }
    render() {
        console.log('this.props....', this.props)
        const classes = this.props;
        const { data } = this.state;
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead title="Students Details">
                        <TableRow>
                            <TableCell>Student's Email</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <TableRow key={row.Email}>
                                <TableCell component="th" scope="row">
                                    {row.Email}
                                </TableCell>
                                <TableCell align="right">{row.IsSuspended ? 'Suspended' : 'Not Suspended'}</TableCell>
                                <TableCell align="right">{""}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

const mapStateToProps = state => ({
    student: state.UserReducer
})

export default  connect(mapStateToProps, null)(withStyles(styles)(ListStudent));