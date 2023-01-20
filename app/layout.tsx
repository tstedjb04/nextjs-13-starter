import React, { ReactNode } from 'react'

import { MainProvider } from '../components/'
import StyledComponentsRegistry from '../libs/registry'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <MainProvider>{children}</MainProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
