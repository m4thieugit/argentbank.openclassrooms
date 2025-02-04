import React from 'react';
import { useSelector } from 'react-redux';

import './User.css';

import EditButton from '../../components/EditButton';
import Account from '../../components/Account';

const User = () => {
    const { userData } = useSelector((state) => state.auth);
    const uData = JSON.parse(userData);

    return (
        <>
            <div className="header">
                <h1>Welcome back<br />{uData?.firstName ?? ''} {uData?.lastName ?? ''}!</h1>
                <EditButton />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </>
    )
}

export default User;