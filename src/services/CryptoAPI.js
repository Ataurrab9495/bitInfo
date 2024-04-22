
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const CryptoApiHeaders = {
    'X-RapidAPI-Key': 'eff51e33a2msh3c4977c37096d34p117ce3jsnad1634fb6450',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const baseUrl = 'https://coinranking2.p.rapidapi.com'

const createRequest = (url) => ({
    url,
    headers: CryptoApiHeaders
})


export const cryptoApi = createApi({
    reducePath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),                /* destructuring the parameter from baseUrl = {baseUrl}  to {baseUrl}*/
    endpoints: (builder) => ({
        getCryptos: builder.query({                         /* our api query */
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: (builder).query({ 
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: (builder).query({
            query: ({ coinId, timeperiod }) => createRequest(`/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=${coinId}&timePeriod=${timeperiod}`)
        })
    })
})


/* Now we are exporting our api  */

export const {
    useGetCryptosQuery,           /*  redux toolkit creates a hook to retrieve all the data from store that we have fetched from rapid Api */
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;