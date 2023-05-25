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


    //url not working due to having to use github codespaces to complete assessment. 
    // See https://github.com/jjrambus23/ExampleAPI for Controllers
    const fetchUserData = () => {
      fetch("https://jjrambus23-glorious-guide-g949pgrg674c97qr-7073.preview.app.github.dev/")
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
          <h1>User List</h1>
          {users.length > 0 && (
            <ul>
              {users.map((u: user) => (
                <li key={u.id}>{u.firstName}</li>
              ))}
            </ul>
          )}
          <h1>App Data</h1>
          <h1>Xref Data</h1>

        </div>
      );
}
