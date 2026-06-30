import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import {Owner} from '../owners/owner.entity'
import {Pet} from '../pets/pets.entity';

//import path from 'path';
//import { fileURLToPath } from 'url';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  //entities: [__dirname + '/**/*.entity{.ts,.js}'],
  entities: [Owner, Pet],
  migrations: [__dirname + '/migrations/**/*{.js,.ts}'],
  synchronize: false,
});
