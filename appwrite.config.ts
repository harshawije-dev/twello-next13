import { Account, Client, Databases, ID } from 'appwrite';
import { error } from 'console';

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('65007173aebec6547ebd')

// Register User
const account = new Account(client)
account.create(ID.unique(),
    'harshawije99@gmail.com',
    'Aspirine@123',
    'Harshana Wijesinghe').then(response => console.log(response), error => {
        console.error(error)
    })


// Create Database
const database = new Databases(client)
database

client.subscribe('files', response => {
    if (response.events.includes('buckets.*.files.*.create')) console.log(response.payload)
})
