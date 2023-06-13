import { useContext } from "react"
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from "../AuthProvider/AuthProvider"

const useAdmin = () =>{
    const {user, loading} = useContext(AuthContext)
    const {refetch, data: isAdmin = []} = useQuery({
        queryKey: ['role', user?.email],
        enabled: !!user?.email &&!loading,
        queryFn: async () =>{
            if(user?.email){
                const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            return res.json()
            }
        },
    })
    return [isAdmin]
}

export default useAdmin;