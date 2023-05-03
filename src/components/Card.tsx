/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import useWebSocket from 'react-use-websocket';
import sampleData from './sampleData'

const useStyles = createUseStyles({
    '@media (min-width: 400px)': {
        cardBodyContainer: {
            width: 470,
            height: 560,
            background: `url('/card.png')`,
            padding: [58, 50],
            display: 'flex',
            justifyContent: 'center',
            fontSize: 14,
            color: '#DCDCEC',

        },
        cardBody: {
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
        },
        cardContainer: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            lineHeight: 1.5

        },
        coinSymbol: {
            width: 70,
            height: 70,
            background: '#1C1731',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            '& img': {
                borderRadius: '50%',
                width: 50,
                height: 50
            },
            left: '42.5%',
            top: -23
        },
        valueContainer: {
            fontSize: 14,
            lineHeight: 1.5,
            display: 'flex',
            justifyContent: 'space-between',
            color: '#C5C5C5',
            alignItems: 'center'
        },
        value: {
            fontWeight: 600,
            color: '#627EEA',
            fontSize: 24,

        },
        coinSelectContainer: {
            background: "#1C1731",
            width: 390,
            height: 60,
            borderRadius: 10,
            '& img': {
                height: 25,
                width: 25, borderRadius: '50%',
            },
            fontSize: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: [0, 20]
        },
        coin: {
            display: 'flex',
            gap: 5,
            fontSize: 16,
        },
        amountToInvestContainer: {

            display: 'flex',
            flexDirection: 'column',
            gap: 10,
        },
        amount: {
            width: 390,
            height: 60,
            border: '1px solid rgba(110, 86, 248, 0.25)',
            borderRadius: 5,
            padding: [0, 20],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'

        },
        amountInput: {
            height: 50,
            background: 'none',
            border: 'none',
            fontSize: 22,
            lineHeight: '122%',
            fontWeight: 600,
            color: '#6F6F7E',
            outline: 'none',
            appearance: 'none',
            '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
                appearance: "none"
            }

        },
        currency: {
            height: 24,
            width: 25,
            background: '#000',
            color: '#fff',
            textAlign: 'center',
            fontSize: 16
        },
        estimateCoinContainer: {
            display: 'flex',
            flexDirection: 'column', gap: 10,

        },
        estimate: {
            background: "#1C1731",
            width: 390,
            height: 60,
            borderRadius: 10,
            padding: [0, 20],
            fontSize: 22,
            lineHeight: '122%',
            fontWeight: 600,
            color: '#6F6F7E',
            display: 'flex', alignItems: 'center'
        },
        button: {
            width: 389,
            height: 50,
            background: "linear-gradient(94.37deg, #3387D5 -5.94%, #7A06C9 115.34%)",
            borderRadius: 30,
            fontSize: 20,
            fontWeight: 600,
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        modalContainer: {
            height: 460,
            width: 460,
            borderRadius: 18,
            backgroundClip: 'padding-box',
            border: '1px solid transparent',
            position: 'relative',
            boxSizing: 'border-box',
            background: 'linear-gradient(0deg, #181627, #181627), linear-gradient(180deg, #3B79D4 -12.45%, rgba(0, 0, 0, 0) 38.78%)',
            // borderImageSour,ce,: 'linear-gradient(180deg, #3B79D4 -12.45%, rgba(0, 0, 0, 0) 38.78%)'
            '&:before': {
                content: '',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                margin: -1,
                borderRadius: 'inherit',
                background: 'linear-gradient(180deg, #3B79D4 -12.45%, rgba(0, 0, 0, 0) 38.78%)'
            },
            padding: [50, 20],

        },
        closeButton: {
            position: 'absolute',
            right: 10,
            top: 10,
            width: 24, height: 24, background: 'rgba(110, 86, 248, 0.15)', borderRadius: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 700,
            fontSize: 16
        }, modalBody: {
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignItems: 'center'
        },
        searchBar: {
            border: "1px solid rgba(110, 86, 248, 0.25)",
            height: 40,
            width: 320, borderRadius: 30, display: 'flex', gap: 10, alignItems: 'center', padding: [0, 20]
        },
        modalInput: {
            background: 'none',
            border: 'none',
            fontSize: 14,
            lineHeight: '136%',
            fontWeight: 400,
            color: '#D2D2D2 !important',
            outline: 'none',
            appearance: 'none',
            '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
                appearance: "none"
            },
        },
        coinList: {
            display: 'flex', flexDirection: 'column', gap: 20, overflowY: 'scroll', maxHeight: 300,
            width: 320,
            padding: [0, 20],
        },
        coinItemContainer: {
            fontSize: 14,
            borderRadius: 10,
            color: '#fff',
            padding: [0, 10],
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer'

        },
        coinItemSelected: {
            background: '#1B192D',
            height: 50,
            padding: [10, 10],
            borderRadius: 5,


        },
        coinItem: {
            display: 'flex',
            gap: 5,
            '& img': {
                height: 24, width: 24, borderRadius: '50%'
            }, alignItems: 'center'
        }
    },
    cardBodyContainer: {
        width: 470,
        height: 560,
        background: `url('/card.png')`,
        padding: [58, 50],
        display: 'flex',
        justifyContent: 'center',
        fontSize: 14,
        color: '#DCDCEC',

    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        lineHeight: 1.5

    },
    coinSymbol: {
        width: 70,
        height: 70,
        background: '#1C1731',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        '& img': {
            borderRadius: '50%',
            width: 50,
            height: 50
        },
        left: '42.5%',
        top: -23
    },
    valueContainer: {
        fontSize: 14,
        lineHeight: 1.5,
        display: 'flex',
        justifyContent: 'space-between',
        color: '#C5C5C5',
        alignItems: 'center'
    },
    value: {
        fontWeight: 600,
        color: '#627EEA',
        fontSize: 24,

    },
    coinSelectContainer: {
        background: "#1C1731",
        width: 390,
        height: 60,
        borderRadius: 10,
        '& img': {
            height: 25,
            width: 25, borderRadius: '50%',
        },
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: [0, 20]
    },
    coin: {
        display: 'flex',
        gap: 5,
        fontSize: 16,
    },
    amountToInvestContainer: {

        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    amount: {
        width: 390,
        height: 60,
        border: '1px solid rgba(110, 86, 248, 0.25)',
        borderRadius: 5,
        padding: [0, 20],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    amountInput: {
        height: 50,
        background: 'none',
        border: 'none',
        fontSize: 22,
        lineHeight: '122%',
        fontWeight: 600,
        color: '#6F6F7E',
        outline: 'none',
        appearance: 'none',
        '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
            appearance: "none"
        }

    },
    currency: {
        height: 24,
        width: 25,
        background: '#000',
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },
    estimateCoinContainer: {
        display: 'flex',
        flexDirection: 'column', gap: 10,

    },
    estimate: {
        background: "#1C1731",
        width: 390,
        height: 60,
        borderRadius: 10,
        padding: [0, 20],
        fontSize: 22,
        lineHeight: '122%',
        fontWeight: 600,
        color: '#6F6F7E',
        display: 'flex', alignItems: 'center'
    },
    button: {
        width: 389,
        height: 50,
        background: "linear-gradient(94.37deg, #3387D5 -5.94%, #7A06C9 115.34%)",
        borderRadius: 30,
        fontSize: 20,
        fontWeight: 600,
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        height: 460,
        width: 460,
        borderRadius: 18,
        backgroundClip: 'padding-box',
        border: '1px solid transparent',
        position: 'relative',
        boxSizing: 'border-box',
        background: 'linear-gradient(0deg, #181627, #181627), linear-gradient(180deg, #3B79D4 -12.45%, rgba(0, 0, 0, 0) 38.78%)',
        // borderImageSour,ce,: 'linear-gradient(180deg, #3B79D4 -12.45%, rgba(0, 0, 0, 0) 38.78%)'
        '&:before': {
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            margin: -1,
            borderRadius: 'inherit',
            background: 'linear-gradient(180deg, #3B79D4 -12.45%, rgba(0, 0, 0, 0) 38.78%)'
        },
        padding: [50, 20],

    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        width: 24, height: 24, background: 'rgba(110, 86, 248, 0.15)', borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: 16
    }, modalBody: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center'
    },
    searchBar: {
        border: "1px solid rgba(110, 86, 248, 0.25)",
        height: 40,
        width: 320, borderRadius: 30, display: 'flex', gap: 10, alignItems: 'center', padding: [0, 20]
    },
    modalInput: {
        background: 'none',
        border: 'none',
        fontSize: 14,
        lineHeight: '136%',
        fontWeight: 400,
        color: '#D2D2D2 !important',
        outline: 'none',
        appearance: 'none',
        '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
            appearance: "none"
        },
    },
    coinList: {
        display: 'flex', flexDirection: 'column', gap: 20, overflowY: 'scroll', maxHeight: 300,
        width: 320,
        padding: [0, 20],
    },
    coinItemContainer: {
        fontSize: 14,
        borderRadius: 10,
        color: '#fff',
        padding: [0, 10],
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer'

    },
    coinItemSelected: {
        background: '#1B192D',
        height: 50,
        padding: [10, 10],
        borderRadius: 5,


    },
    coinItem: {
        display: 'flex',
        gap: 5,
        '& img': {
            height: 24, width: 24, borderRadius: '50%'
        }, alignItems: 'center'
    }
})

interface ICoin {
    symbol: string,
    baseAsset: string,
    name: string,
    img: string
}

const Card = () => {
    const classes = useStyles()
    const socketUrl = 'wss://stream.binance.com:9443/stream';
    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
    } = useWebSocket<any>(socketUrl);
    const [price, setPrice] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [amountInput, setAmountInput] = useState(0.00)
    const [currency, setCurrency] = useState<ICoin>({
        symbol: "ETHBTC",
        baseAsset: "ETH",
        name: "Ethereum",
        img: "solana.png",
    })
    const [modalInput, setModalInput] = useState("")
    const handleSubscription = useCallback(() => {
        sendJsonMessage({
            method: 'SUBSCRIBE',
            params: [`${currency.symbol.toLowerCase()}@trade`],
            "id": 1
        })
    }, [sendJsonMessage, currency])
    const cleanSubscription = useCallback(() => {
        sendJsonMessage({
            method: 'UNSUBSCRIBE',
            params: [`${currency.symbol.toLowerCase()}@trade`],
            "id": 312
        })
    }, [sendJsonMessage, currency])

    useEffect(() => {
        handleSubscription()
    }, [currency, handleSubscription])

    useEffect(() => {
        if (lastJsonMessage) {
            const newPrice = (lastJsonMessage.data?.p) || 0
            if (newPrice !== price) {
                setPrice(newPrice)
            }
        }
    }, [lastJsonMessage])
    const inrPrice = price * 80 || 1
    const filteredAmountInput = amountInput || 0
    return (
        <div className={classes.cardContainer}>
            <div className={classes.coinSymbol}>
                <img src={`/${currency.img}`} alt="symbol" />
            </div>
            <div className={classes.cardBodyContainer}>
                <div className={classes.cardBody}>
                    {!showModal && (
                        <>
                            <div className={classes.valueContainer}>
                                <span>Current Value</span>
                                <span className={classes.value}>₹ {inrPrice.toFixed(2)} </span>
                            </div>
                            <div className={classes.coinSelectContainer} onClick={() => setShowModal(true)}>
                                <div className={classes.coin}>
                                    <img src={`/${currency.img}`} alt="coin logo" />
                                    {currency.name}
                                </div>
                                <span className="material-icons" style={{
                                    fontSize: 30, color: '#6E56F8'
                                }}>
                                    arrow_drop_down
                                </span>
                            </div>
                            <div className={classes.amountToInvestContainer}>
                                <span>Amount you want to invest</span>
                                <div className={classes.amount}>
                                    <input placeholder="0.00" onChange={(e) => setAmountInput(parseFloat(e.target.value))} className={classes.amountInput} type="number" />
                                    <div className={classes.currency}>INR</div>
                                </div>
                            </div>
                            <div className={classes.estimateCoinContainer}>
                                <span>Estimate Number of {currency.symbol} You will Get </span>
                                <div className={classes.estimate}>{(filteredAmountInput / inrPrice).toFixed(2)}</div>

                            </div>
                            <div className={classes.button}>
                                Buy
                            </div>
                        </>)}
                    {showModal && (
                        <div className={classes.modalContainer}>
                            <div className={classes.closeButton} onClick={() => setShowModal(false)}>X</div>
                            <div className={classes.modalBody}>
                                <div className={classes.searchBar}>
                                    <span className="material-icons">search</span>
                                    <input className={classes.modalInput} placeholder="Search chains" onChange={(e) => setModalInput(e.target.value)} />
                                </div>
                                <div className={classes.coinList}>
                                    {sampleData.filter((coin) => {
                                        const input = modalInput.toLowerCase()
                                        if (input === "") {
                                            return true
                                        }
                                        else if (coin.name.toLowerCase().includes(input) || coin.symbol.toLowerCase().includes(input)) {
                                            return true
                                        } else {
                                            return false
                                        }
                                    }).map((coin) => {
                                        return (
                                            <div className={clsx(classes.coinItemContainer, {
                                                [classes.coinItemSelected]: coin.symbol === currency.symbol
                                            })} key={coin.symbol} onClick={() => {
                                                setCurrency(coin)
                                                setShowModal(false)
                                            }}>
                                                <div className={classes.coinItem}>
                                                    <img src={`/${coin.img}`} alt="coin symbol" />
                                                    <span>{coin.name}</span>
                                                </div>
                                                {coin.symbol === currency.symbol && (
                                                    <span className="material-icons" style={{ color: '#58ADAB', fontWeight: 700 }}>done
                                                    </span>)}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>)
}

export default Card