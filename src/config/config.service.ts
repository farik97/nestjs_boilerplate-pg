import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  // public getPort() {
  //   return this.getValue('PORT', true);
  // }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    console.log(join(__dirname, "..", "entity", "*.model{.ts, .js}"))
    return {
      type: 'postgres',
      host: this.getValue('POSTGRE_HOST'),
      port: parseInt(this.getValue('POSTGRE_PORT')),
      username: this.getValue('POSTGRE_USER'),
      password: this.getValue('POSTGRE_PASSWORD'),
      database: this.getValue('POSTGRE_DATABASE'),
      synchronize: false,
      logging: true,
      entities: [join(__dirname, "..", "src", "entity", "*{.ts,.js}")],
      migrations: [join(__dirname, "..", "migration", "*.{.ts,.js}")],
      migrationsTableName: "custom_migration_table"
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRE_HOST',
  'POSTGRE_PORT',
  'POSTGRE_USER',
  'POSTGRE_PASSWORD',
  'POSTGRE_DATABASE',
]);


export { configService };
