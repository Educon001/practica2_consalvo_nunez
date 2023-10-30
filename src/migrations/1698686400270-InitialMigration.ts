import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1698686400270 implements MigrationInterface {
  name = 'InitialMigration1698686400270';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "directory" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "emails" text NOT NULL, CONSTRAINT "PK_3031979b800d63fadf8ce7e33b0" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "directory"`);
  }
}
