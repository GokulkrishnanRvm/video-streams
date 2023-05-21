import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/fetchContext'

const SearchForm = () => {
  const {setQuery} = useGlobalContext();
  return (
    <Wrapper>
      <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
      <input type="text" className='form-input' placeholder='Search here' onChange={(e) => setQuery(e.target.value)} />
      {/* <div className="error">{error.show && <div className='error'>{error.msg}</div>}</div> */}
    </form>
    <div className='under-line'></div>
    </Wrapper>
  )
}

export default SearchForm
const Wrapper = styled.section `
.search-form {
  width: 40vw;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 1rem;

}
.form-input {
  width: 100%;
  border: transparent;
  max-width: 600px;
  background: var(--clr-white);
  padding: 1rem;
  font-size: 1rem;
  border-radius: var(--radius);
  color: var(--clr-grey-3);
  letter-spacing: var(--spacing);
  margin-top: 1rem;
}
.error {
  color: var(--clr-red-dark);
  text-transform: capitalize;
  padding-top: 0.5rem;
  letter-spacing: var(--spacing);
}
.under-line{
  width: 50vw;
  margin: 0 auto;
  height:5px;
  margin-bottom:2rem;
  background-color:var(--clr-grey-2);
}
`


