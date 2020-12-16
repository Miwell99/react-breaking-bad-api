import React from 'react'

function Footer() {

    const getCurrentYear = () => {
        let d = new Date();
        return d.getFullYear();
      }

    return (
        <>
            <footer>
                <p>Develop by Miguel González Bravo &copy; {getCurrentYear()} </p>
            </footer>
        </>
    )
}

export default Footer
