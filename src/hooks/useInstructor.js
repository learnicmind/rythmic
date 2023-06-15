import { useContext } from "react"
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from "../AuthProvider/AuthProvider"

const useInstructor = () =>{
    const {user, loading} = useContext(AuthContext)
    const { isLoading: isInstructorLoading, data: isInstructor = []} = useQuery({
        queryKey: ['isInstructors', user?.email],
        enabled: !!user?.email &&!loading,
        queryFn: async () =>{
            const res = await fetch(`https://rythmic-server.vercel.app/users/instructor/${user?.email}`)
            return res.json()
        },
    })
    return [isInstructor, isInstructorLoading]
}

export default useInstructor;