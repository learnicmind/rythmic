import { useState } from "react"


const useInstructors = () => {
    const [instructors, setInstructors] = useState([])

    fetch('https://rythmic-server.vercel.app/instructors')
    .then(res => res.json())
    .then(data => {
        setInstructors(data)
    })
    return [instructors]
}

export default useInstructors;
