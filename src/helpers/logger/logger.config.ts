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
    return {
      host: this.getValue('LOGSTASH_HOST'),
      port: parseInt(this.getValue('LOGSTASH_PORT')),
      username: this.getValue('LOGSTASH_USER'),
      password: this.getValue('LOGSTASH_PASSWORD'),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'LOGSTASH_HOST',
  'LOGSTASH_PORT',
  'LOGSTASH_USER',
  'LOGSTASH_PASSWORD',
]);


export { configService };
