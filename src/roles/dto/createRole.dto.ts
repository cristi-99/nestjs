type Roles = 'Administrator' | 'Guest' | 'Employee';

export interface CreateRoleDto{
    role: Roles
}