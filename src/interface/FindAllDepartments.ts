import { IOrganization } from './IOrganization';

import departmentsALl from '../db/organization.json';

class FindAllDepartments {
    async execute(department: IOrganization) {
        let aux = {
            name: 'false',
            level: -1,
            parent: 'false',
        } as IOrganization;

        const departments = departmentsALl.filter((value) => {
            if (value.parent === department.name && value.level === 2) {
                return true;
            }

            if (aux.parent === department.name && value.level === 2) {
                return true;
            }
            aux = value;
            return false;
        });
        return departments;
    }
}

export { FindAllDepartments };
