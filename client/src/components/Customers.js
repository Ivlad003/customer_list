import '../App.css';
import { useState, useEffect } from 'react';

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    const loadAllCustomers = async () => {
        const res = await fetch('/customers')
        const data = await res.json()
        setCustomers(data);
    }

    useEffect(() => {
        loadAllCustomers()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const query = e.target.query.value;
        console.log(query)
        if (query) {
            const res = await fetch(`/customers/${query}`);
            const data = await res.json();
            setCustomers(data);
        } else {
            loadAllCustomers()
        }
    }

    return (<>
        <form method="post" onSubmit={handleSubmit}>
            <label>
                Search: <input name="query" placeholder='Query' />
            </label>
        </form>
        <table class="table-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>plan</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((customer) => {
                        return (
                            <tr>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.plan}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
    )
}