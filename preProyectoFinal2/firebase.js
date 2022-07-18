import admin from 'firebase-admin'
import {readFile} from 'fs/promises'

const serviceAccount = JSON.parse(
    await readFile(
        new URL('./key.json', import.meta.url)
    )
)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://project-8316814463810087226.firebaseio.com'
})

const db = admin.firestore()
const query = db.collection('productos')

export default query