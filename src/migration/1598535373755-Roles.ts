import { MigrationInterface, QueryRunner } from 'typeorm';
import { Role } from '../roles/role.entity';

export class Roles1598535373755 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const roleTable = queryRunner.connection.getRepository(Role);
    await roleTable.insert([
      { id: 1, role: 'Administrator' },
      { id: 2, role: 'Employee' },
      { id: 3, role: 'Guest' },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
