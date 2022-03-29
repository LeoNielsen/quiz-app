import React from 'react'

const GetQuiz = () => {
  return (
    <div className='body'>
        <form>
            <label>Category</label><br/>
            <select placeholder='category'>
                <option></option>
            </select> <br/><br/>

            <label>Number Of Questions</label><br/>
            <input type='number' min='1' max='50' value={10}/><br/><br/>

            <label>Select Difficulty</label><br/>
            <select>
                <option></option>
            </select><br/><br/>

            <label>Select Answer Type</label><br/>
            <select>
                <option>
                </option>
            </select><br/>


        </form>
    </div>
  )
}

export default GetQuiz