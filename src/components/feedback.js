import React,{useState} from 'react'

import {withRouter} from 'react-router-dom'

const Feedback=()=>{

  const [submitted,isSubmitted]=useState(false)


return(
    <div >

{!submitted?(
<div>
<h4 style={{padding:10,fontFamily:'Roberto',marginTop:'30vh'}}>
Any other specifications you would like us to keep in mind while sending to you the recommendations.
</h4>

<textarea
placeholder="Type your feedback here..."
rows="10"
style={{width:'100%',marginTop:10}}
/>

<button className="btn btn-outline-dark btn-lg" style={{position:'relative',left:'43.5%',top:10}}
onClick={(e)=>{
    e.preventDefault()
    isSubmitted(true)
}}

>
Submit
</button>

</div>
):(
<h4 style={{padding:10,fontFamily:'Roberto',marginTop:'30vh'}}>
Your response is recorded.
</h4>
)}

    
    </div>
)

}

export default withRouter(Feedback)
