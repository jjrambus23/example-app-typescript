import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";



interface user{
      id: number,
      firstName: string,
      lastName: string,
      city: string,
      state: string,
}

export default function UserList() {
    const [users, setUsers] = useState([] as any)

    const fetchUserData = () => {
      fetch("https://jjrambus23-urban-disco-w6r64w5w9vxf5w9g-7073.preview.app.github.dev/")
        .then(response => {
          return response.json() as any;
        })
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchUserData()
    }, [])

    return (
        <div>
          {users.length > 0 && (
            <ul>
              {users.map((u: user) => (
                <li key={u.id}>{u.firstName}</li>
              ))}
            </ul>
          )}
        </div>
      );
}
