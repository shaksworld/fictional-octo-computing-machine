import React from 'react';

function Some({ title, content, accountNumber, amount, transactionType, transactionDate }) {
    return (
        <div className="some-main">
            <div className="some-main-gist">
                <h2>{title}</h2>
            </div>
            <div className="some-main-content">
                <p>{content}</p>
            </div>
            <div className="some-main-accountNumber">
                <p>{accountNumber}</p>
            </div>
            <div className="some-main-amount">
                <p>{amount}</p>
            </div>
            <div className="some-main-transactionType">
                <p>{transactionType}</p>
            </div>
            <div className="some-main-transactionDate">
                <p>{transactionDate}</p>
            </div>
        </div>
    );
}

export default Some;
