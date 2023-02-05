import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    };

    const getRefreshToken = () => {
        const tokenString = localStorage.getItem('refreshToken');
        const userRefreshToken = JSON.parse(tokenString);
        return userRefreshToken
    };

    const [token, setAccessToken] = useState(getToken());
    const [refreshToken, setRefreshToken] = useState(getRefreshToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setAccessToken(userToken.token);
    };

    const saveRefreshToken = userRefreshToken => {
        localStorage.setItem('refreshToken', JSON.stringify(userRefreshToken));
        setRefreshToken(userRefreshToken.token);
    };

    return {
        setAccessToken: saveToken,
        token,
        setRefreshToken: saveRefreshToken,
        refreshToken
    }
}