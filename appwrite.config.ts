import { Account, Client, Databases, ID, Storage } from 'appwrite';
import { error } from 'console';


const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject(process.env.NEXT_PUBLIC_PROJECT_ID!)

// Register User
const account = new Account(client)
account.create(ID.unique(),
    'harshawije99@gmail.com',
    'Aspirine@123',
    'Harshana Wijesinghe').then(response => console.log(response), error => {
        console.error(error)
    })

client.subscribe('files', response => {
    if (response.events.includes('buckets.*.files.*.create')) console.log(response.payload)
})

// Create Database
const database = new Databases(client)
// Storage
const storage = new Storage(client)

export { client, database, account, storage, ID }