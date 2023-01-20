const ExamplePage = () => {
    console.log('process.env.API_KEY', process.env.API_KEY)
    return (
        <div className="loading-wrapper">
            <img
                className="logo-loading"
                src="/images/praneat-logo.png"
                alt="praneat-logo"
            />
        </div>
    )
}

export default ExamplePage
