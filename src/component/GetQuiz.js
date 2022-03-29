import React from 'react'
import PropTypes from 'prop-types'

const GetQuiz = ({ Categories }) => {
  return (
    <div className='body'>
        <form>
            <label>Category</label><br/>
            <select>
                <option key={0}>Any Category</option>
                {Categories.map( (cate) => {
                 return <option key={cate.id}>{cate.name}</option>
                })
                }
            </select> <br/><br/>

            <label>Number Of Questions</label><br/>
            <input type='number' min='1' max='50' defaultValue={10} /><br/><br/>

            <label>Select Difficulty</label><br/>
            <select>
                <option>Any Difficulty</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>

            </select><br/><br/>

            <label>Select Answer Type</label><br/>
            <select>
                <option>Any Type</option>
                <option>Multiple Choice</option>
                <option>True / False</option>
            </select><br/>


        </form>
    </div>
  )
}

GetQuiz.proptype = {
    Categories: PropTypes.array.isRequired,
}

export default GetQuiz