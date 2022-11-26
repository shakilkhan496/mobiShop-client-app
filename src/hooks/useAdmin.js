const { useState, useEffect } = require("react")

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-sable.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isAdmin) {
                        setIsAdmin(data.isAdmin);
                        setIsAdminLoading(false)
                    }
                });
        }

    }, [email])
    return [isAdmin, isAdminLoading]

}
export default useAdmin;