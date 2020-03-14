import React,{useState} from 'react'


const Step1=()=>{

    const [c,setColor]=useState('black')
    const [length,setLength]=useState('')

    const ageLimits=[
        '18-25',
        '26-33',
        '34-41',
        '42-49'
    ]


return(
    <div >


{
    ageLimits.map((x,i)=>(

        <button className='btn btn-outline-dark '
        style={{margin:30,
            fontSize:25,
            width:300,
            fontWeight:'bold',
            backgroundColor:`${
                length==x?'#343a40':''
            }`,
            color:`${
                length==x?'white':''
            }`,
       boxShadow:'none'
       }}
       onClick={()=>{
       setColor('black')
       setLength(x)
       }
       }
       >
     {x}
       </button>

    ))


}

    </div>
)

}

export default Step1