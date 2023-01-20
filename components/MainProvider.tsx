'use client'

import React, { ReactNode } from 'react'

import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
// import 'antd/dist/reset.css'
// import axios from 'axios'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import palette from '../assets/palette.json'
import '../styles/globals.css'

// const { publicRuntimeConfig } = getConfig()

const theme: DefaultTheme = {
    colors: {
        primary: palette.primary,
        secondary: palette.secondary,
    },
}

function MainProvider({ children }: { children: ReactNode }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: palette.primary,
                    fontFamily: 'Sukhumvit, Noto Sans, Noto Sans Thai',
                },
            }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ConfigProvider>
    )
}

export default MainProvider
