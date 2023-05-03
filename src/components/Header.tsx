import { useState } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import Image from "next/image";

const useStyles = createUseStyles({
    headerBody: {
        maxWidth: '100%',
        display: 'flex',
        background: "#0B0819",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: [0, 10],
        width: '100%'
    },
    logo: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        fontWeight: 700,
        fontSize: 16,
        padding: 10,
        lineHeight: '150%',
        background: 'linear-gradient(94.37deg, #3387D5 -5.94%, #7A06C9 115.34%)',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        '& img': {
            height: 15, width: 15
        }
    },
    menuOptions: {
        display: 'none',
        gap: 10,
        alignItems: 'center',


    },
    option: {
        fontSize: 16,
        lineHeight: '150%',
        textTransform: 'capitalize',
        padding: 10,
        color: '#5A5A5A',
        cursor: 'pointer'

    },
    selectedOption: {
        color: '#627EEA',
        borderBottom: '2px solid #627EEA'
    },
    connectWallet: {
        background: 'linear-gradient(94.37deg, #3387D5 -5.94%, #7A06C9 115.34%)',
        borderRadius: 30,
        width: 120,
        height: 30,
        fontWeight: 700,
        fontSize: 12,
        lineHeight: '150%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '@media (min-width: 700px)': {
        headerBody: {
            display: 'flex',
            background: "#0B0819",
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: [0, 50],
            width: '100%'
        },
        logo: {
            display: 'flex',
            gap: 10,
            alignItems: 'center',
            fontWeight: 700,
            fontSize: 29,
            padding: 20,
            lineHeight: '150%',
            background: 'linear-gradient(94.37deg, #3387D5 -5.94%, #7A06C9 115.34%)',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            '& img': {
                width: 25, height: 25
            }
        },
        menuOptions: {
            display: 'flex',
            gap: 50,
            alignItems: 'center',

        },
        option: {
            fontSize: 16,
            lineHeight: '150%',
            textTransform: 'capitalize',
            padding: 30,
            color: '#5A5A5A',
            cursor: 'pointer'

        },
        selectedOption: {
            color: '#627EEA',
            borderBottom: '2px solid #627EEA'
        },
        connectWallet: {
            background: 'linear-gradient(94.37deg, #3387D5 -5.94%, #7A06C9 115.34%)',
            borderRadius: 30,
            width: 180,
            height: 40,
            fontWeight: 700,
            fontSize: 16,
            lineHeight: '150%',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }

})
const navOptions = ['Trade', 'Earn', 'Support', 'About']
const Header = () => {
    const classes = useStyles()
    const [selected, setSelected] = useState('Trade')
    return (
        <div className={classes.headerBody}>
            <div className={classes.logo}>
                <img src="/neofi-logo.png" alt="logo" />
                <span>NeoFI</span>
            </div>
            <div className={classes.menuOptions}>
                {navOptions.map((option) => {
                    return (
                        <div className={clsx(classes.option, {
                            [classes.selectedOption]: selected === option
                        },)}
                            key={option} onClick={() => setSelected
                                (option)}>{option}</div>
                    )
                })}
            </div>
            <div className={classes.connectWallet}>Connect Wallet</div>
        </div>)
}

export default Header