import { Request } from 'express';
import { Role } from '../roles/role.entity';

interface RequestWithRole extends Request {
  role: Role;
}

export default RequestWithRole;
