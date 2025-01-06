import { useEffect, useState } from "react"


function CleaningChores() {


    const [cleaningChores, setCleaningChores] = useState([])



    useEffect(() => {
        fetch("/api/cleaning-chores")
        .then(res => res.json())
        .then(data => {
            console.log(data);

            setCleaningChores(data)
        })

    }, [])

    return (
      <div>
        <h1>CleaningChores</h1>

        {
            cleaningChores.map(chore => {
                return (
                    <div key={chore.id}>
                        <h3>{chore.name}</h3>
                        <p>{chore.description}</p>
                    </div>
                )
            })
        }
      </div>
    )
  }
  
  export default CleaningChores