import 'dotenv/config';
import app from "./src/app.ts";
import connectToDB from './src/config/db.ts';


const PORT = process.env.PORT || 3000

connectToDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});