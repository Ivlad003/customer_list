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
        <div class="text-center bg-gray-50 text-gray-800 py-20 px-6">
            <h1 class="text-5xl font-bold mt-0 mb-6">Customers</h1>
        </div>
        <form method="post" onSubmit={handleSubmit}>
            <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" name="query" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
        </form>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="bg-white border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Email
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Plan
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customers.map((customer) => {
                                        return (
                                            <tr class="bg-gray-100 border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.id}</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {customer.name}
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {customer.email}
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    @{customer.plan}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}