import {MigrationInterface, QueryRunner} from "typeorm";

export class createServicesTable1647306825815 implements MigrationInterface {
    name = 'createServicesTable1647306825815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "services" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "localization" character varying NOT NULL, "problem" character varying NOT NULL, "status" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fb19bb0ecb2f6581d02f263546d" PRIMARY KEY ("uuid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "services"`);
    }

}
