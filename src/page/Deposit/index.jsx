import React, { useState } from 'react';
import { Typography } from 'antd';
import Some from "../../component/some";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button onClick={handleClickOpen} className="btn">
                Deposit
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

const Index = () => {
    const someProps1 = {
        title: "Bank Deposit",
        content: "Please input the amount you want to deposit",
        accountNumber: "1234567890",
        amount: "$1000.00",
        transactionType: "Deposit",
        transactionDate: "2021-09-01",
    };

    const someProps2 = {
        title: "Expense Report",
        content: "Submit your expense report for reimbursement",
        accountNumber: "0987654321",
        amount: "$500.00",
        transactionType: "Expense",
        transactionDate: "2021-08-15",
    };

    const someProps3 = {
        title: "Withdrawal",
        content: "Please input the amount you want to withdraw",
        accountNumber: "5678901234",
        amount: "$200.00",
        transactionType: "Withdrawal",
        transactionDate: "2021-10-20",
    };

    return (
        <div>
            <Typography.Title level={2}>User</Typography.Title>
            <div className="deposit-base">
                <div className="space-main-2">
                    <Some {...someProps1} />
                    <AlertDialogSlide />
                </div>
                <div className="space-main-2">
                    <Some {...someProps2} />
                    <button className="btn">Deposit</button>
                </div>
                <div className="space-main-2">
                    <Some {...someProps3} />
                    <button className="btn">Deposit</button>
                </div>
            </div>
        </div>
    );
};

export default Index;
