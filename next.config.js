/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

module.exports = {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['twin.macro'],
    },
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
            return acc
        }, {})
        config.plugins.push(new webpack.DefinePlugin(env))
        return config
    },
}
