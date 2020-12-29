import Header from '@/components/shared/Header'


const BaseLayout = (props) => {
    const {className, user,loading, children, navClass ="with-bg"} = props
    return(
        <div className="layout-container">
            <Header
            className={navClass}
            user={user}
            loading={loading} />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                     {children}
                </div>
            </main>
        </div>
    )
}

export default BaseLayout
