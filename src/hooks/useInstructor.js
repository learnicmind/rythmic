import { useContext } from "react"
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from "../AuthProvider/AuthProvider"

const useInstructor = () =>{
    const {user, loading} = useContext(AuthContext)
    const {refetch, data: isInstructor = []} = useQuery({
        queryKey: ['role', user?.email],
        enabled: !!user?.email &&!loading,
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`)
            return res.json()
        },
    })
    return [isInstructor]
}

export default useInstructor;