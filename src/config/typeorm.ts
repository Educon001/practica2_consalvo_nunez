import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Directory } from '../directory.entity';
import { InitialMigration1698686400270 } from '../migrations/1698686400270-InitialMigration';

const config = {
  type: 'postgres',
  host: process.env.DB_HOST || 'postgres-db',
  port: 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '12345678',
  database: process.env.DB_NAME || 'practica2',
  entities: [Directory],
  migrations: [InitialMigration1698686400270],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
