export default function Body({children, className}) {
    return (
        <>
            <main className="flex w-full h-auto pt-12">
                <div className={`mx-auto min-h-full w-full px-4 ${className}`} >
                    {children}
                </div>
            </main>
        </>
    )
}