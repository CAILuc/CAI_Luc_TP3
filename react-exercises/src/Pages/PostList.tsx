import { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // fetch...
    }, [refreshKey]);

    function handleRefresh() {
        setRefreshKey(k => k + 1);
    }

    useEffect(() => {

        async function fetchUsers() {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setUsers(data);
            }catch (error){
                if (error instanceof Error){
                    setError(error.message);
                    console.error("Marche po les import",error)
                }
            }finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []); // Tableau vide = fetch une seule fois

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <div>
            <h1>Liste des Utilisateurs</h1>

            <button onClick={handleRefresh}>Rafraîchir</button>

            {loading && <p>Chargement...</p>}

            {error && <p style={{color: 'red'}}>Erreur : {error}</p>}

            {!loading && !error && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <h3>{user.name}</h3>
                            <p>Email : {user.email}</p>
                            <p>Tél : {user.phone}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    );
}

export default UserList;