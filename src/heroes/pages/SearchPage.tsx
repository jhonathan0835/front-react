import React from 'react'

const SearchPage = () => {
  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="row"> 
      <div className='col-5'>
        <h4>searching</h4>
        <hr />
        <form>
          <input 
          type='text'
          placeholder ='search hero'
          className='form-control'
          name='searchText'
          autoComplete='off'
          />
          <button
          className='btn btn-outline-primary mt-1'
          type='submit'
          >
            Search
          </button>
        </form>

      </div>
      
      <div className='col-7'>
        <h4>Results</h4>
        <hr />
        <div className='alert alert-primary'>
          Search a hero
        </div>
        <div className='alert alert-danger'>
          There's no results
        </div>
      </div>  
      </div>


    </>
  )
}

export default SearchPage
