import 'dotenv/config';

import server from './server';
import { connectDatabase } from './config/database.js';

async function bootstrap() {
  await connectDatabase();

  server.listen(process.env.PORT || 3000, () => {
    console.log('Express server running on port 3000');
  });
}

bootstrap();
