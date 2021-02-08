import { ConnectionOptions } from 'typeorm';
export const dbConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: '',
  entities: [],
  synchronize: true,
};
