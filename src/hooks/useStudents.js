import { useContext } from "react"
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from "../AuthProvider/AuthProvider"

const useStudent = () =>{
    const {user, loading} = useContext(AuthContext)
    const {refetch, data: isStudent = []} = useQuery({
        queryKey: ['role', user?.email],
        enabled: !!user?.email &&!loading,
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/users/student/${user?.email}`)
            return res.json()
        },
    })
    return [isStudent]
}

export default useStudent;