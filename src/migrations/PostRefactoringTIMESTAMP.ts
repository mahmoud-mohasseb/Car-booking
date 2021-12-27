import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoringTIMESTAMP implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('Cars', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('Cars', true);
  }
}
