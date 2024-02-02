import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)


    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        
            <ul className='pagination'>
                {/* <li className="page-item">
                    <a className="page-link" 
                        onClick={goToPrevPage} 
                      >
                        
                        Previous
                    </a>
                </li> */}
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => {
                            setCurrentPage(pgNumber)
                         window.scrollTo(0,window.innerHeight - 80)  
                    }}  
                            className='page-link' 
                           >
                            
                            {pgNumber}
                        </a>
                    </li>
                ))}
                {/* <li className="page-item">
                    <a className="page-link" 
                        onClick={goToNextPage}
                        >
                        
                        Next
                    </a>
                </li> */}
            </ul>
    
    )
}

export default Pagination