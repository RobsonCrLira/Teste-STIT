import 'dotenv/config';
import { app } from './app';

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running => port:${process.env.PORT}`);
});
