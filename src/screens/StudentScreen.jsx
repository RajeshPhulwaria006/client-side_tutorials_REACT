import React from 'react'

function StudentScreen() {
  
    const [isAppReady, updateStudents] = React.useState(false)
  
    setTimeout(() => {
      updateStudents(true)
    }, 1.5*1000)
  
    if (!isAppReady) {
      return (
        <div>
          <h2>Student Screen Loading...</h2>
        </div>
      )
    }
  return (
    <div>
        <h1>This is student screen</h1>
    </div>
  )
}

export default StudentScreen