import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Directory } from '../directory.entity';
import { InitialMigration1698686400270 } from '../migrations/1698686400270-InitialMigration';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: 'postgres-db', /*'localhost',*/
  port: 5432,
  username: 'postgres',
  password: '12345678',
  database: 'practica2',
  entities: [Directory],
  migrations: [InitialMigration1698686400270],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
